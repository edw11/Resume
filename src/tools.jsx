// Tool renderers — elegant, spare. Motion-first.
const D = () => window.PORTFOLIO_DATA;
const { useState, useEffect, useRef } = React;

// ─── Animated number counter ────────────────────────────────────────────
function CountUp({ value, duration = 900 }) {
  const [n, setN] = useState(0);
  const ref = useRef(null);
  // Parse the numeric part, keep the suffix/prefix
  const match = String(value).match(/^([^\d]*)([\d,.]+)(.*)$/);
  const prefix = match ? match[1] : "";
  const target = match ? parseFloat(match[2].replace(/,/g, "")) : 0;
  const suffix = match ? match[3] : "";

  useEffect(() => {
    if (!match) return;
    const start = performance.now();
    let raf;
    const step = (t) => {
      const p = Math.min(1, (t - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(target * eased);
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!match) return <span>{value}</span>;
  const formatted = target % 1 === 0 ? Math.round(n).toLocaleString() : n.toFixed(1);
  return <span ref={ref}>{prefix}{formatted}{suffix}</span>;
}

// ─── Stagger animation wrapper ─────────────────────────────────────────
function Stagger({ children, delay = 60 }) {
  return React.Children.map(children, (child, i) =>
    child ? React.cloneElement(child, {
      style: { ...(child.props.style || {}), animationDelay: `${i * delay}ms` },
      className: (child.props.className || "") + " stagger-item",
    }) : null
  );
}

// ─── Project card (collapsible) ─────────────────────────────────────────
function ProjectCard({ p, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={"pcard stagger-item " + (open ? "open" : "")}>
      <button className="pcard-head" onClick={() => setOpen(!open)}>
        <div className="pcard-l">
          <div className="pcard-name">
            {p.name}
            {p.highlight && <span className="pcard-star">●</span>}
          </div>
          <div className="pcard-tag">{p.tagline}</div>
        </div>
        <div className="pcard-r">
          <div className="pcard-chev">{open ? "–" : "+"}</div>
        </div>
      </button>
      <div className="pcard-body">
        <div className="pcard-body-inner">
          <div className="pcard-summary">{p.bullets[0]}</div>
          {p.metrics && p.metrics.length > 0 && (
            <div className="pcard-metrics">
              {p.metrics.map((m, i) => (
                <div className="pcard-mini" key={i} style={{ animationDelay: `${i * 60}ms` }}>
                  <div className="pcard-mini-v"><CountUp value={m.value} /></div>
                  <div className="pcard-mini-l">{m.label}</div>
                </div>
              ))}
            </div>
          )}
          <div className="pcard-stack">
            {p.stack.slice(0, 8).map((s) => <span key={s} className="pcard-tech">{s}</span>)}
            {p.stack.length > 8 && <span className="pcard-tech dim">+{p.stack.length - 8}</span>}
          </div>
          {p.url && (
            <a href={p.url} target="_blank" rel="noreferrer" className="pcard-link">
              visit {p.url.replace(/^https?:\/\//, "")} <span className="arrow">→</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Experience timeline ────────────────────────────────────────────────
function ExpRow({ e, idx }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="xrow stagger-item" style={{ animationDelay: `${idx * 80}ms` }}>
      <div className="xrow-rail">
        <div className={"xrow-node " + (e.current ? "live" : "")} />
      </div>
      <div className="xrow-body">
        <button className="xrow-head" onClick={() => setOpen(!open)}>
          <div>
            <div className="xrow-role">{e.role}</div>
            <div className="xrow-co">{e.company} · {e.location.split(",")[0]}</div>
          </div>
          <div className="xrow-period">{e.period}</div>
        </button>
        {open && (
          <ul className="xrow-bullets">
            {e.bullets.map((b, i) => <li key={i} style={{ animationDelay: `${i * 60}ms` }}>{b}</li>)}
          </ul>
        )}
      </div>
    </div>
  );
}

// ─── Renderers ──────────────────────────────────────────────────────────
const TOOLS = {
  list_projects: {
    name: "list_projects",
    reply: () => `Four shipped products. Scoutlab is the flagship — autonomous agents using Claude Agent SDK + MCP. Tap any card to expand.`,
    render: () => (
      <div className="panel-scene">
        <div className="scene-label">Selected work · {D().projects.length}</div>
        <div className="pgrid">
          {D().projects.map((p, i) => <ProjectCard key={p.id} p={p} defaultOpen={i === 0} />)}
        </div>
      </div>
    ),
  },

  get_experience: {
    name: "get_experience",
    reply: () => `Currently at TPMN shipping agentic AI. Previously Hyundai Elevator and Daewoong Pharmaceutical. Tap a role to expand.`,
    render: () => (
      <div className="panel-scene">
        <div className="scene-label">Experience</div>
        <div className="xtimeline">
          {D().experience.map((e, i) => <ExpRow key={e.id} e={e} idx={i} />)}
        </div>
      </div>
    ),
  },

  explain_stack: {
    name: "explain_stack",
    reply: (arg) => {
      const p = D().projects.find((x) => x.id === (arg || "scoutlab").toLowerCase()) || D().projects[0];
      return `${p.name}: ${p.stack.length} technologies. The interesting part isn't the stack — it's how they fit together.`;
    },
    render: (arg) => {
      const p = D().projects.find((x) => x.id === (arg || "scoutlab").toLowerCase()) || D().projects[0];
      return (
        <div className="panel-scene">
          <div className="scene-label">{p.name} · architecture</div>
          <div className="stack-hero">
            <div className="stack-title">{p.name}</div>
            <div className="stack-sub">{p.tagline}</div>
          </div>
          <div className="stack-cloud">
            {p.stack.map((s, i) => (
              <span key={s} className="stack-word" style={{ animationDelay: `${i * 40}ms` }}>{s}</span>
            ))}
          </div>
          {p.metrics && (
            <div className="pcard-metrics">
              {p.metrics.map((m, i) => (
                <div className="pcard-mini" key={i} style={{ animationDelay: `${400 + i * 100}ms` }}>
                  <div className="pcard-mini-v"><CountUp value={m.value} /></div>
                  <div className="pcard-mini-l">{m.label}</div>
                </div>
              ))}
            </div>
          )}
          <ul className="notes">
            {p.bullets.slice(0, 3).map((b, i) => (
              <li key={i} style={{ animationDelay: `${600 + i * 100}ms` }}>{b}</li>
            ))}
          </ul>
        </div>
      );
    },
  },

  why_hire_me: {
    name: "why_hire_me",
    reply: () => "Four reasons. Ranked.",
    render: () => (
      <div className="panel-scene">
        <div className="scene-label">Why hire him</div>
        <div className="reasons">
          {[
            { n: "01", t: "Ships agents to production", b: "Autonomous Claude Agent SDK systems with MCP tools. Not just API calls." },
            { n: "02", t: "Full-stack, solo", b: "Schema → API → frontend → VPS. Four products, alone." },
            { n: "03", t: "Trilingual bridge", b: "Indonesian native, English fluent, Korean TOPIK II 5." },
            { n: "04", t: "Research fundamentals", b: "Multimodal emotion recognition published in JCCT 2024." },
          ].map((r, i) => (
            <div className="reason stagger-item" key={r.n} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="reason-n">{r.n}</div>
              <div>
                <div className="reason-t">{r.t}</div>
                <div className="reason-b">{r.b}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  get_languages: {
    name: "get_languages",
    reply: () => "Trilingual, Seoul-based.",
    render: () => (
      <div className="panel-scene">
        <div className="scene-label">Languages</div>
        <div className="lgrid">
          {D().person.languages.map((l, i) => (
            <div className="lcard stagger-item" key={l.name} style={{ animationDelay: `${i * 100}ms` }}>
              <div className="lcard-script">
                {l.name.startsWith("Bahasa") ? "Aa" : l.name === "Korean" ? "가" : "Aa"}
              </div>
              <div>
                <div className="lcard-name">{l.name}</div>
                <div className="lcard-level">{l.level}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },

  get_contact: {
    name: "get_contact",
    reply: () => "Email is best.",
    render: () => {
      const p = D().person;
      return (
        <div className="panel-scene">
          <div className="scene-label">Get in touch</div>
          <a className="ccard big stagger-item" href={`mailto:${p.email}`}>
            <div className="ccard-label">email</div>
            <div className="ccard-value">{p.email}</div>
            <div className="ccard-arrow">→</div>
          </a>
          <div className="clist">
            {[
              { k: "LinkedIn", v: "edward-cahyadi11", href: p.links.linkedin },
              { k: "GitHub", v: "@edw11", href: p.links.github },
              { k: "Website", v: "edwardcahyadi.com", href: p.links.website },
            ].map((c, i) => (
              <a key={c.k} href={c.href} target="_blank" rel="noreferrer"
                 className="ccard clist-row stagger-item" style={{ animationDelay: `${100 + i * 80}ms` }}>
                <div className="ccard-label">{c.k}</div>
                <div className="ccard-value">{c.v}</div>
                <div className="ccard-arrow small">→</div>
              </a>
            ))}
          </div>
        </div>
      );
    },
  },

  get_skills: {
    name: "get_skills",
    reply: () => "Grouped by where they show up most.",
    render: () => (
      <div className="panel-scene">
        <div className="scene-label">Skills</div>
        {Object.entries(D().skills).map(([cat, list], i) => (
          <div key={cat} className="sblock stagger-item" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="sblock-title">{cat}</div>
            <div className="sblock-items">
              {list.map((s, j) => (
                <span key={s} className="sword" style={{ animationDelay: `${i * 80 + j * 25}ms` }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },

  get_education: {
    name: "get_education",
    reply: () => "B.Sc. IT, Semyung University. GKS scholar.",
    render: () => (
      <div className="panel-scene">
        <div className="scene-label">Education & research</div>
        {D().education.map((e, i) => (
          <div className="ecard stagger-item" key={i} style={{ animationDelay: `${i * 100}ms` }}>
            <div className="ecard-degree">{e.degree}</div>
            <div className="ecard-row"><span>{e.school}</span><span className="dim">{e.period}</span></div>
          </div>
        ))}
        <div className="scene-label" style={{ marginTop: 18 }}>Publication</div>
        {D().publications.map((p, i) => (
          <div className="ecard stagger-item" key={i} style={{ animationDelay: `${200 + i * 100}ms` }}>
            <div className="ecard-degree">{p.title}</div>
            <div className="ecard-row"><span>{p.venue}</span><span className="dim">{p.year}</span></div>
          </div>
        ))}
        <div className="scene-label" style={{ marginTop: 18 }}>Scholarship</div>
        {D().scholarships.map((s, i) => (
          <div className="ecard stagger-item" key={i} style={{ animationDelay: `${300 + i * 100}ms` }}>
            <div className="ecard-degree">{s.name}</div>
            <div className="ecard-row"><span>{s.issuer}</span><span className="dim">{s.period}</span></div>
          </div>
        ))}
      </div>
    ),
  },

  ask_claude: {
    name: "ask_claude",
    reply: () => null,
    render: (arg, result) => (
      <div className="panel-scene">
        <div className="scene-label">Asked the agent</div>
        <div className="ask-q">"{arg}"</div>
        <div className="ask-a">
          {result || <span className="loading-dots"><span></span><span></span><span></span></span>}
        </div>
      </div>
    ),
  },
};

// Parse user input → tool
function parseInput(text) {
  const t = text.trim();
  const lower = t.toLowerCase();

  const exact = {
    "list_projects": ["list_projects", ""],
    "get_experience": ["get_experience", ""],
    "why_hire_me": ["why_hire_me", ""],
    "get_languages": ["get_languages", ""],
    "get_contact": ["get_contact", ""],
    "get_skills": ["get_skills", ""],
    "get_education": ["get_education", ""],
  };
  for (const k of Object.keys(exact)) {
    if (lower === k || lower === k + "()" || lower.startsWith(k + " ")) return exact[k];
  }
  if (lower.startsWith("explain_stack")) {
    const m = t.match(/explain_stack\s*\(?['"]?([a-z]+)['"]?\)?/i) || t.match(/explain_stack\s+([a-z]+)/i);
    return ["explain_stack", m ? m[1] : "scoutlab"];
  }

  if (/\b(project|ship|shipped|built|portfolio|work|product)\b/i.test(t) && !/stack|tech/i.test(t)) return ["list_projects", ""];
  if (/\b(experience|job|role|career|tpmn|hyundai|daewoong|intern)\b/i.test(t)) return ["get_experience", ""];
  if (/\b(stack|tech|technology|architecture|scoutlab|serasa|kbbi|lmd)\b/i.test(t)) {
    const names = D().projects.map((p) => p.id);
    const hit = names.find((n) => lower.includes(n));
    return ["explain_stack", hit || "scoutlab"];
  }
  if (/\b(why|hire|reason|strength|qualif)/i.test(t)) return ["why_hire_me", ""];
  if (/\b(language|bahasa|korean|english|lingual)\b/i.test(t)) return ["get_languages", ""];
  if (/\b(contact|email|reach|talk|dm|message)\b/i.test(t)) return ["get_contact", ""];
  if (/\b(skill|tool|framework|know)\b/i.test(t)) return ["get_skills", ""];
  if (/\b(edu|school|univers|study|degree|research|paper|public|scholar)\b/i.test(t)) return ["get_education", ""];

  return ["ask_claude", t];
}

window.TOOLS = TOOLS;
window.parseToolInput = parseInput;
