const { useState, useEffect, useRef, useCallback } = React;

function TypingDots() {
  return <span className="typing"><span></span><span></span><span></span></span>;
}

function splitWords(s) {
  const out = [];
  const parts = s.split(/(\s+)/);
  for (const p of parts) {
    if (p === "") continue;
    if (/^\s+$/.test(p)) {
      out.push("\u00a0");
    } else {
      out.push(p + "\u00a0");
    }
  }
  return out;
}

function RotatingPhrase({ phrases, startDelay = 0, interval = 3200 }) {
  const [idx, setIdx] = useState(0);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const t0 = setTimeout(() => setShown(true), startDelay);
    const t1 = setInterval(() => setIdx((i) => (i + 1) % phrases.length), interval);
    return () => { clearTimeout(t0); clearInterval(t1); };
  }, []);
  if (!shown) return <span className="rot-phrase" aria-hidden="true" />;
  return (
    <span className="rot-phrase">
      <span key={idx} className="rot-word" dangerouslySetInnerHTML={{ __html: phrases[idx] }} />
    </span>
  );
}

function SeoulClock() {
  const [time, setTime] = useState(() => getSeoulTime());
  useEffect(() => {
    const id = setInterval(() => setTime(getSeoulTime()), 10000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="seoul-clock" title="Current time in Seoul">
      <span className="clock-label">Seoul</span>
      <span className="clock-time">{time}</span>
    </div>
  );
}

function getSeoulTime() {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit", minute: "2-digit", hour12: false,
      timeZone: "Asia/Seoul",
    }).format(new Date());
  } catch {
    return "—";
  }
}

function useAutoScroll(dep) {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) ref.current.scrollTop = ref.current.scrollHeight;
  }, [dep]);
  return ref;
}

function buildSystemPrompt() {
  const D = window.PORTFOLIO_DATA;
  return `You are Edward Cahyadi's portfolio agent. You represent Edward to recruiters and collaborators.

Style: warm but precise. First-person as Edward's agent. Under 90 words. No filler, no emoji, no headings. Just answer.

SUMMARY: ${D.person.summary}

EXPERIENCE: ${D.experience.map((e) => `${e.role} @ ${e.company} (${e.period}): ${e.bullets.join(" ")}`).join(" || ")}

PROJECTS: ${D.projects.map((p) => `${p.name} (${p.tagline}) stack: ${p.stack.join(", ")}. ${p.bullets.join(" ")}`).join(" || ")}

LANGUAGES: ${D.person.languages.map((l) => `${l.name} (${l.level})`).join(", ")}

CONTACT: ${D.person.email}`;
}

function App() {
  const D = window.PORTFOLIO_DATA;
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [activePanel, setActivePanel] = useState(null);
  const [panelKey, setPanelKey] = useState(0); // forces re-animation
  const [tweaks, setTweaks] = useState(window.__TWEAKS || {});
  const [heroFading, setHeroFading] = useState(false);
  const [showTweaks, setShowTweaks] = useState(false);
  const chatRef = useAutoScroll(messages.length);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 200);
    // Fade out the pre-React splash now that the app is rendered.
    const splash = document.getElementById('splash');
    if (splash) {
      // Let the graph settle into a full state before dismissing.
      const MIN_SPLASH = 2400;
      const since = performance.now() - (window.__splashStart || 0);
      const wait = Math.max(0, MIN_SPLASH - since);
      setTimeout(() => {
        splash.classList.add('gone');
        setTimeout(() => {
          if (window.__splashStop) window.__splashStop();
          splash.remove();
        }, 750);
      }, wait);
    }
    return () => clearTimeout(t);
  }, []);

  // Cursor-follow spotlight on hero area
  useEffect(() => {
    const head = document.querySelector('.chat-head');
    if (!head) return;
    const onMove = (e) => {
      const r = head.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      head.style.setProperty('--mx', `${x}%`);
      head.style.setProperty('--my', `${y}%`);
    };
    window.addEventListener('pointermove', onMove);
    return () => window.removeEventListener('pointermove', onMove);
  }, [mounted]);

  useEffect(() => {
    if (mounted && messages.length === 0) {
      // No initial greeting — hero + starter questions are the greeting.
    }
  }, [mounted]);

  // Trigger dust filter animation when first message arrives
  const dustTriggered = useRef(false);
  useEffect(() => {
    if (messages.length > 0 && !dustTriggered.current) {
      dustTriggered.current = true;
      const anim = document.getElementById('dust-anim');
      if (anim && anim.beginElement) {
        try { anim.beginElement(); } catch (e) {}
      }
    }
  }, [messages.length]);

  useEffect(() => {
    const onMsg = (e) => {
      if (!e.data) return;
      if (e.data.type === "__activate_edit_mode") setShowTweaks(true);
      if (e.data.type === "__deactivate_edit_mode") setShowTweaks(false);
    };
    window.addEventListener("message", onMsg);
    window.parent.postMessage({ type: "__edit_mode_available" }, "*");
    return () => window.removeEventListener("message", onMsg);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (tweaks.accent) root.style.setProperty("--accent", tweaks.accent);
    if (tweaks.density) root.dataset.density = tweaks.density;
    if (tweaks.hero) root.dataset.hero = tweaks.hero;
  }, [tweaks]);

  const updateTweak = (k, v) => {
    const next = { ...tweaks, [k]: v };
    setTweaks(next);
    window.parent.postMessage({ type: "__edit_mode_set_keys", edits: { [k]: v } }, "*");
  };

  const submit = useCallback(async (raw) => {
    const text = (raw ?? input).trim();
    if (!text || busy) return;
    setInput("");
    setBusy(true);

    const [toolKey, toolArg] = window.parseToolInput(text);
    const tool = window.TOOLS[toolKey];

    const isFirstMessage = messages.length === 0;
    if (isFirstMessage) {
      setHeroFading(true);
      setTimeout(() => setHeroFading(false), 1500);
    }
    setMessages((m) => [...m, { role: "user", text }]);
    // If this is the first message, give the hero its full 1.4s to dust away
    // before the panel or any other layout shifts kick in.
    await new Promise((r) => setTimeout(r, isFirstMessage ? 1500 : 280));

    // Freeform (ask_claude) replies stay in the chat — no side panel.
    // Structured tools open the detail panel alongside the chat reply.
    const usesPanel = toolKey !== "ask_claude";

    if (usesPanel) {
      setActivePanel({ toolKey, toolArg, toolResult: null, pending: true });
      setPanelKey((k) => k + 1);
    } else {
      setActivePanel(null);
    }

    let replyText = tool.reply(toolArg);
    let toolResult = null;

    if (toolKey === "ask_claude") {
      try {
        const res = await window.claude.complete({
          messages: [{ role: "user", content: text }],
          system: buildSystemPrompt(),
        });
        toolResult = res;
        replyText = res;
      } catch (err) {
        toolResult = "I can't reach the live model right now — try one of the starter questions.";
        replyText = toolResult;
      }
    } else {
      await new Promise((r) => setTimeout(r, 560));
    }

    if (usesPanel) {
      setActivePanel({ toolKey, toolArg, toolResult, pending: false });
      setPanelKey((k) => k + 1);
    }

    setMessages((m) => [...m, { role: "agent", text: replyText, toolKey: usesPanel ? toolKey : null, toolArg }]);
    setBusy(false);
  }, [input, busy]);

  const heroMode = tweaks.hero || "split";
  const panelOpen = !!activePanel;

  return (
    <div className={"app " + (mounted ? "in" : "") + (panelOpen ? " panel-open" : "") + (messages.length === 0 ? " empty" : "") + (heroFading ? " hero-fading" : "")} data-hero={heroMode}>
      {window.BgParticles ? <window.BgParticles /> : null}
      {/* SVG filter for dust-disintegration effect */}
      <svg className="svg-defs" width="0" height="0" aria-hidden="true">
        <defs>
          <filter id="dust-disintegrate" x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0" result="smoke">
              <animate attributeName="stdDeviation" from="0" to="8" dur="1.6s" begin="indefinite" fill="freeze" id="dust-anim" />
            </feGaussianBlur>
          </filter>
        </defs>
      </svg><header className="top">
        <div className="top-inner">
          <div className="top-l">
            <a
              href="/"
              className="brand-name"
              onClick={(e) => { e.preventDefault(); window.location.reload(); }}
            >Edward Cahyadi</a>
          </div>
          <div className="top-c">
            <SeoulClock />
          </div>
          <div className="top-r">
            <a href={`mailto:${D.person.email}`} className="top-link">Email</a>
            <a href={D.person.links.github} target="_blank" rel="noreferrer" className="top-link">GitHub</a>
            <a href={D.person.links.linkedin} target="_blank" rel="noreferrer" className="top-link">LinkedIn</a>
          </div>
        </div>
      </header>

      <main className="main">
        <section className="chat-col">
          <div className="chat-head">
            <h1 className="hero-greet"><span className="hero-greet-inner">Hello,</span></h1>
            <p className="hero-tag">
              {splitWords("I'm an ").map((w, i) => (
                <span key={`a${i}`} className="hero-word" style={{ animationDelay: `${600 + i * 45}ms` }}>{w}</span>
              ))}
              <span className="tag-em hero-word" style={{ animationDelay: `780ms` }}>AI &amp; full-stack engineer</span>
              {splitWords(" in Seoul, building agentic systems in production.").map((w, i) => (
                <span key={`b${i}`} className="hero-word" style={{ animationDelay: `${920 + i * 45}ms` }}>{w}</span>
              ))}
            </p>
          </div>

          <div className="messages" ref={chatRef}>
            {messages.map((m, i) => (
              <Message key={i} m={m} onToolClick={(key, arg, text) => {
                setActivePanel({ toolKey: key, toolArg: arg, toolResult: text, pending: false });
                setPanelKey((k) => k + 1);
              }} />
            ))}
            {busy && (
              <div className="msg agent">
                <div className="msg-role">agent</div>
                <div className="msg-body"><TypingDots /></div>
              </div>
            )}
          </div>

          <div className="composer-wrap">
            <div className="suggestions">
              {D.suggestions.map((s, i) => (
                <button key={s.label} className="sug" style={{ animationDelay: `${400 + i * 50}ms` }} disabled={busy} onClick={() => submit(s.prompt)}>
                  {s.label}
                </button>
              ))}
            </div>
            <form className="composer" onSubmit={(e) => { e.preventDefault(); submit(); }}>
              <span className="prompt-caret">›</span>
              <input
                className="composer-input"
                placeholder="ask anything…"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={busy}
                autoFocus
              />
              <button className="composer-send" disabled={busy || !input.trim()}>↵</button>
            </form>
          </div>
        </section>

        {panelOpen && (
          <aside className="panel-col">
            <button className="panel-close" onClick={() => setActivePanel(null)} title="close">×</button>
            <div className="panel-body" key={panelKey}>
              {activePanel.pending && activePanel.toolKey !== "ask_claude" ? (
                <RunningPanel toolKey={activePanel.toolKey} />
              ) : (
                window.TOOLS[activePanel.toolKey].render(activePanel.toolArg, activePanel.toolResult)
              )}
            </div>
          </aside>
        )}
      </main>

      {showTweaks && (
        <TweaksPanel tweaks={tweaks} update={updateTweak} onClose={() => setShowTweaks(false)} />
      )}
    </div>
  );
}

function Message({ m, onToolClick }) {
  if (m.role === "user") {
    return (
      <div className="msg user">
        <div className="msg-body">{m.text}</div>
      </div>
    );
  }
  return (
    <div className="msg agent">
      <div className="msg-body">
        {m.text}
        {m.toolKey && (
          <div style={{marginTop: 18, display: 'block'}}>
            <button className="tool-pill" onClick={() => onToolClick(m.toolKey, m.toolArg, m.text)}>
              see the details <span className="arrow">→</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function EmptyPanel() {
  const D = window.PORTFOLIO_DATA;
  return (
    <div className="empty-panel">
      <div className="orb-wrap">
        <div className="orb" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
      </div>
      <div className="empty-title">Ask me anything.</div>
      <div className="empty-hint">Pick a starter question, or type your own.</div>
      <div className="empty-marquee">
        <div className="marquee-track">
          {[...D.skills["AI & Agentic Systems"], ...D.skills["Back-end"], ...D.skills["Front-end"],
            ...D.skills["AI & Agentic Systems"], ...D.skills["Back-end"], ...D.skills["Front-end"]].map((s, i) => (
            <span key={i} className="marquee-word">{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function RunningPanel({ toolKey }) {
  return <Skeleton kind={toolKey} />;
}

function Skeleton({ kind }) {
  // Project-list skeleton
  if (kind === "list_projects") {
    return (
      <div className="skel-scene">
        <div className="skel-label" />
        <div className="skel-pgrid">
          {[0, 1, 2, 3].map((i) => (
            <div className="skel-pcard" key={i} style={{ animationDelay: `${i * 70}ms` }}>
              <div className="skel-pcard-l">
                <div className="skel-line" style={{ width: "38%", height: 22 }} />
                <div className="skel-line" style={{ width: "62%", height: 12, marginTop: 10 }} />
              </div>
              <div className="skel-chev" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Experience timeline skeleton
  if (kind === "get_experience") {
    return (
      <div className="skel-scene">
        <div className="skel-label" />
        <div className="skel-xlist">
          {[0, 1, 2, 3].map((i) => (
            <div className="skel-xrow" key={i} style={{ animationDelay: `${i * 70}ms` }}>
              <div className="skel-xrail">
                <div className="skel-xnode" />
              </div>
              <div className="skel-xbody">
                <div className="skel-line" style={{ width: "55%", height: 16 }} />
                <div className="skel-line" style={{ width: "38%", height: 11, marginTop: 8 }} />
              </div>
              <div className="skel-line" style={{ width: 90, height: 10 }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Stack explanation skeleton
  if (kind === "explain_stack") {
    return (
      <div className="skel-scene">
        <div className="skel-label" />
        <div className="skel-line" style={{ width: "55%", height: 24, marginBottom: 8 }} />
        <div className="skel-line" style={{ width: "80%", height: 14, marginBottom: 24 }} />
        <div className="skel-chips">
          {Array.from({ length: 10 }).map((_, i) => (
            <div
              key={i}
              className="skel-chip"
              style={{ width: 48 + ((i * 13) % 60), animationDelay: `${i * 40}ms` }}
            />
          ))}
        </div>
        <div className="skel-line" style={{ width: "100%", height: 12, marginTop: 24 }} />
        <div className="skel-line" style={{ width: "92%", height: 12, marginTop: 8 }} />
        <div className="skel-line" style={{ width: "78%", height: 12, marginTop: 8 }} />
      </div>
    );
  }

  // Skills
  if (kind === "get_skills") {
    return (
      <div className="skel-scene">
        <div className="skel-label" />
        {[0, 1, 2].map((g) => (
          <div className="skel-skillgroup" key={g} style={{ animationDelay: `${g * 100}ms` }}>
            <div className="skel-line" style={{ width: "30%", height: 13, marginBottom: 12 }} />
            <div className="skel-chips">
              {Array.from({ length: 6 + g }).map((_, i) => (
                <div
                  key={i}
                  className="skel-chip"
                  style={{ width: 50 + ((i * 17) % 50), animationDelay: `${i * 35}ms` }}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Why hire me / languages / contact / education — stacked rows
  if (kind === "why_hire_me") {
    return (
      <div className="skel-scene">
        <div className="skel-label" />
        {[0, 1, 2, 3].map((i) => (
          <div className="skel-whyrow" key={i} style={{ animationDelay: `${i * 80}ms` }}>
            <div className="skel-whynum" />
            <div style={{ flex: 1 }}>
              <div className="skel-line" style={{ width: "50%", height: 18 }} />
              <div className="skel-line" style={{ width: "90%", height: 12, marginTop: 10 }} />
              <div className="skel-line" style={{ width: "72%", height: 12, marginTop: 6 }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (kind === "get_languages") {
    return (
      <div className="skel-scene">
        <div className="skel-label" />
        {[0, 1, 2].map((i) => (
          <div className="skel-langrow" key={i} style={{ animationDelay: `${i * 90}ms` }}>
            <div>
              <div className="skel-line" style={{ width: 110, height: 20 }} />
              <div className="skel-line" style={{ width: 160, height: 11, marginTop: 8 }} />
            </div>
            <div className="skel-line" style={{ width: 84, height: 11 }} />
          </div>
        ))}
      </div>
    );
  }

  if (kind === "get_contact") {
    return (
      <div className="skel-scene">
        <div className="skel-label" />
        {[0, 1, 2].map((i) => (
          <div className="skel-contactrow" key={i} style={{ animationDelay: `${i * 90}ms` }}>
            <div className="skel-line" style={{ width: 64, height: 10 }} />
            <div className="skel-line" style={{ width: "60%", height: 14, marginTop: 8 }} />
          </div>
        ))}
      </div>
    );
  }

  if (kind === "get_education") {
    return (
      <div className="skel-scene">
        <div className="skel-label" />
        <div className="skel-edublock">
          <div className="skel-line" style={{ width: "55%", height: 22 }} />
          <div className="skel-line" style={{ width: "40%", height: 12, marginTop: 10 }} />
          <div className="skel-line" style={{ width: "82%", height: 12, marginTop: 14 }} />
          <div className="skel-line" style={{ width: "70%", height: 12, marginTop: 6 }} />
        </div>
      </div>
    );
  }

  // Generic fallback
  return (
    <div className="skel-scene">
      <div className="skel-label" />
      <div className="skel-line" style={{ width: "80%", height: 18, marginBottom: 14 }} />
      <div className="skel-line" style={{ width: "95%", height: 12, marginBottom: 8 }} />
      <div className="skel-line" style={{ width: "88%", height: 12, marginBottom: 8 }} />
      <div className="skel-line" style={{ width: "70%", height: 12 }} />
    </div>
  );
}

function TweaksPanel({ tweaks, update, onClose }) {
  const accents = [
    { name: "Nebula",  v: "oklch(0.76 0.17 305)" },
    { name: "Stellar", v: "oklch(0.82 0.12 210)" },
    { name: "Nova",    v: "oklch(0.82 0.14 85)" },
    { name: "Plasma",  v: "oklch(0.72 0.20 340)" },
  ];
  return (
    <div className="tweaks">
      <div className="tweaks-head">
        <span>Tweaks</span>
        <button onClick={onClose}>×</button>
      </div>
      <div className="tweak-row">
        <div className="tweak-l">accent</div>
        <div className="tweak-r">
          {accents.map((a) => (
            <button key={a.name} className={"swatch " + (tweaks.accent === a.v ? "on" : "")} style={{ background: a.v }} onClick={() => update("accent", a.v)} title={a.name} />
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <div className="tweak-l">density</div>
        <div className="tweak-r">
          {["cozy", "compact"].map((d) => (
            <button key={d} className={"pill " + ((tweaks.density || "cozy") === d ? "on" : "")} onClick={() => update("density", d)}>{d}</button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <div className="tweak-l">hero</div>
        <div className="tweak-r">
          {["split", "full"].map((h) => (
            <button key={h} className={"pill " + ((tweaks.hero || "split") === h ? "on" : "")} onClick={() => update("hero", h)}>{h}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
