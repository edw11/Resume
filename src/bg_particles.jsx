/* Galaxy background — deep-space starfield + drifting nebulae + agent
   network (constellation nodes, links, token pulses, mouse interaction
   without the cursor glow).

   Layers (back to front):
     1. Nebula blobs       — large, slow, soft radial clouds in accent hues
     2. Starfield          — twinkling stars with a subtle Milky-Way band
     3. Agent network      — drifting nodes + links + token pulses
     4. Shooting stars     — rare streaks
*/
function BgParticles() {
  const canvasRef = React.useRef(null);
  const mouseRef = React.useRef({ x: -9999, y: -9999, active: false, targetX: -9999, targetY: -9999 });

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w = 0, h = 0, dpr = window.devicePixelRatio || 1;
    // Detect touch-primary device: lower density + gentler interaction.
    const isTouch = matchMedia('(hover: none)').matches || matchMedia('(max-width: 720px)').matches;
    let nodes = [];
    let stars = [];
    let nebulae = [];
    let pulses = [];
    let shoots = [];
    let raf = 0;
    let last = performance.now();
    let prevW = 0;

    const getAccent = () => {
      const v = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim();
      return v || 'oklch(0.76 0.17 305)';
    };
    let ACCENT = getAccent();

    function resize() {
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      // Only re-seed on width change. iOS URL-bar toggles constantly shift
      // innerHeight by 60-100px as the user scrolls — re-seeding on every
      // such event made the network visibly "wobble".
      if (Math.abs(w - prevW) > 4) {
        prevW = w;
        seed();
      }
    }

    function seed() {
      // Agent network nodes — sparse
      const density = isTouch ? 0.00003 : 0.00006;
      const count = Math.max(20, Math.min(isTouch ? 45 : 90, Math.round(w * h * density)));
      nodes = [];
      for (let i = 0; i < count; i++) {
        const x = Math.random() * w;
        const y = Math.random() * h;
        // On touch devices: zero velocity + driftRadius so nodes are fully
        // static. Prevents any perceived motion / "interaction" as the user
        // scrolls or holds the screen.
        nodes.push({
          x, y,
          homeX: x, homeY: y,
          vx: isTouch ? 0 : (Math.random() - 0.5) * 0.15,
          vy: isTouch ? 0 : (Math.random() - 0.5) * 0.15,
          r: 1.1 + Math.random() * 1.4,
          phase: Math.random() * Math.PI * 2,
          driftPhase: Math.random() * Math.PI * 2,
          driftRate: isTouch ? 0 : 0.002 + Math.random() * 0.003,
          driftRadius: isTouch ? 0 : 15 + Math.random() * 35,
        });
      }

      // Starfield with subtle Milky-Way band
      const sCount = Math.round(w * h * 0.0008);
      stars = [];
      const bandCy = h * 0.5;
      const bandH = h * 0.25;
      for (let i = 0; i < sCount; i++) {
        const layer = Math.random();
        let y, inBand;
        if (Math.random() < 0.5) {
          const u1 = Math.random(), u2 = Math.random();
          const g = Math.sqrt(-2 * Math.log(u1)) * Math.cos(2 * Math.PI * u2);
          y = bandCy + g * bandH * 0.5;
          inBand = true;
        } else {
          y = Math.random() * h;
          inBand = false;
        }
        if (y < 0) y = 0; if (y > h) y = h;
        stars.push({
          x: Math.random() * w,
          y,
          r: 0.3 + Math.random() * (layer < 0.1 ? 1.4 : 0.75),
          base: inBand
            ? 0.30 + Math.random() * 0.50
            : 0.15 + Math.random() * 0.35,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleRate: 0.5 + Math.random() * 1.8,
          tint: inBand ? Math.random() < 0.18 : Math.random() < 0.07,
        });
      }

      nebulae = [
        { x: w * 0.18, y: h * 0.28, r: Math.max(w, h) * 0.42, alpha: 0.08, drift: 0.02 },
        { x: w * 0.82, y: h * 0.72, r: Math.max(w, h) * 0.38, alpha: 0.06, drift: -0.015 },
        { x: w * 0.55, y: h * 0.15, r: Math.max(w, h) * 0.30, alpha: 0.05, drift: 0.012 },
      ];
      pulses = [];
      shoots = [];
    }

    function maybeSpawnPulse() {
      if (Math.random() > 0.04 || nodes.length < 2) return;
      const a = nodes[Math.floor(Math.random() * nodes.length)];
      let b = null, bestD = Infinity;
      for (let i = 0; i < 8; i++) {
        const c = nodes[Math.floor(Math.random() * nodes.length)];
        if (c === a) continue;
        const dx = c.x - a.x, dy = c.y - a.y;
        const d2 = dx * dx + dy * dy;
        if (d2 < bestD && d2 < 220 * 220) { bestD = d2; b = c; }
      }
      if (!b) return;
      pulses.push({ from: a, to: b, t: 0, speed: 0.6 + Math.random() * 0.7 });
    }

    function maybeSpawnShoot() {
      if (Math.random() > 0.003) return;
      const side = Math.random();
      let x, y, vx, vy;
      const speed = 7 + Math.random() * 6;
      const angle = (Math.PI * 0.18) + Math.random() * (Math.PI * 0.22);
      if (side < 0.5) {
        x = Math.random() * w * 0.5;
        y = -20;
        vx = Math.cos(angle) * speed;
        vy = Math.sin(angle) * speed;
      } else {
        x = w + 20;
        y = Math.random() * h * 0.5;
        vx = -Math.cos(angle) * speed;
        vy = Math.sin(angle) * speed;
      }
      shoots.push({ x, y, vx, vy, life: 0, max: 55 + Math.random() * 35 });
    }

    function step(now) {
      const dt = Math.min(40, now - last);
      last = now;
      ctx.clearRect(0, 0, w, h);

      // Smooth the pointer toward its target so a fast finger drag doesn't
      // yank the network in one frame — nodes displace gently as it glides.
      const m = mouseRef.current;
      if (m.active) {
        const ease = isTouch ? 0.10 : 0.22;
        m.x += (m.targetX - m.x) * ease;
        m.y += (m.targetY - m.y) * ease;
      }
      const mx = m.x;
      const my = m.y;
      const active = m.active;
      const LINK_R = isTouch ? 100 : 130;
      const LINK_R2 = LINK_R * LINK_R;
      const MOUSE_R = isTouch ? 120 : 180;
      const MOUSE_R2 = MOUSE_R * MOUSE_R;
      const DISPLACE_MAX = isTouch ? 14 : 30;

      // ── Layer 1: Nebulae ──────────────────────────────────────────────
      for (const n of nebulae) {
        n.x += n.drift * (dt / 16);
        if (n.x < -n.r) n.x = w + n.r;
        if (n.x > w + n.r) n.x = -n.r;
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        grad.addColorStop(0, `color-mix(in oklch, ${ACCENT} ${Math.round(n.alpha * 100)}%, transparent)`);
        grad.addColorStop(0.5, `color-mix(in oklch, ${ACCENT} ${Math.round(n.alpha * 35)}%, transparent)`);
        grad.addColorStop(1, 'transparent');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Layer 2: Starfield ────────────────────────────────────────────
      for (const s of stars) {
        s.twinklePhase += s.twinkleRate * (dt / 1000);
        const tw = 0.55 + Math.sin(s.twinklePhase) * 0.45;
        const a = s.base * tw;
        if (s.tint) {
          ctx.fillStyle = `color-mix(in oklch, ${ACCENT} ${Math.round(a * 100)}%, transparent)`;
        } else {
          ctx.fillStyle = `rgba(230, 235, 250, ${a})`;
        }
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        if (s.r > 1.2 && tw > 0.85) {
          ctx.strokeStyle = `rgba(230, 235, 250, ${a * 0.35})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 3, s.y); ctx.lineTo(s.x + s.r * 3, s.y);
          ctx.moveTo(s.x, s.y - s.r * 3); ctx.lineTo(s.x, s.y + s.r * 3);
          ctx.stroke();
        }
      }

      // ── Layer 3: Agent network ────────────────────────────────────────
      for (const p of nodes) {
        p.driftPhase += p.driftRate;
        const targetX = p.homeX + Math.cos(p.driftPhase) * p.driftRadius;
        const targetY = p.homeY + Math.sin(p.driftPhase * 0.7) * p.driftRadius;
        const ax = (targetX - p.x) * 0.02;
        const ay = (targetY - p.y) * 0.02;
        p.vx = (p.vx + ax) * 0.82;
        p.vy = (p.vy + ay) * 0.82;
        const sp2 = p.vx * p.vx + p.vy * p.vy;
        if (sp2 > 9) { const s = 3 / Math.sqrt(sp2); p.vx *= s; p.vy *= s; }
        p.x += p.vx * (dt / 16);
        p.y += p.vy * (dt / 16);
        p.displaceX = 0; p.displaceY = 0;
        if (active) {
          const dx = p.x - mx, dy = p.y - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_R2 && d2 > 1) {
            const d = Math.sqrt(d2);
            const push = (1 - d / MOUSE_R);
            p.displaceX = (dx / d) * push * push * DISPLACE_MAX;
            p.displaceY = (dy / d) * push * push * DISPLACE_MAX;
          }
        }
        p.phase += 0.015;
      }
      for (const p of nodes) {
        p.drawX = p.x + (p.displaceX || 0);
        p.drawY = p.y + (p.displaceY || 0);
      }
      ctx.lineWidth = 1;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = b.drawX - a.drawX;
          const dy = b.drawY - a.drawY;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_R2) {
            const alpha = (1 - Math.sqrt(d2) / LINK_R) * 0.18;
            ctx.strokeStyle = `rgba(200, 210, 245, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(a.drawX, a.drawY);
            ctx.lineTo(b.drawX, b.drawY);
            ctx.stroke();
          }
        }
      }
      if (active) {
        for (const p of nodes) {
          const dx = p.drawX - mx, dy = p.drawY - my;
          const d2 = dx * dx + dy * dy;
          if (d2 < MOUSE_R2) {
            const alpha = (1 - Math.sqrt(d2) / MOUSE_R) * 0.55;
            ctx.strokeStyle = `color-mix(in oklch, ${ACCENT} ${Math.round(alpha*100)}%, transparent)`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(mx, my);
            ctx.lineTo(p.drawX, p.drawY);
            ctx.stroke();
          }
        }
      }
      for (const p of nodes) {
        const breath = 0.55 + Math.sin(p.phase) * 0.15;
        ctx.fillStyle = `rgba(230, 235, 250, ${breath * 0.7})`;
        ctx.beginPath();
        ctx.arc(p.drawX, p.drawY, p.r, 0, Math.PI * 2);
        ctx.fill();
        const grad = ctx.createRadialGradient(p.drawX, p.drawY, 0, p.drawX, p.drawY, p.r * 4);
        grad.addColorStop(0, `rgba(230, 235, 250, ${breath * 0.16})`);
        grad.addColorStop(1, 'rgba(230, 235, 250, 0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.drawX, p.drawY, p.r * 4, 0, Math.PI * 2);
        ctx.fill();
      }

      // ── Pulses (token flashes along edges) ────────────────────────────
      maybeSpawnPulse();
      for (const pulse of pulses) {
        pulse.t += pulse.speed * (dt / 16) / 60;
        if (pulse.t >= 1) continue;
        const ax = pulse.from.drawX ?? pulse.from.x, ay = pulse.from.drawY ?? pulse.from.y;
        const bx = pulse.to.drawX ?? pulse.to.x, by = pulse.to.drawY ?? pulse.to.y;
        const px = ax + (bx - ax) * pulse.t;
        const py = ay + (by - ay) * pulse.t;
        ctx.fillStyle = ACCENT;
        ctx.globalAlpha = 0.9 * (1 - Math.abs(pulse.t - 0.5) * 2);
        ctx.beginPath();
        ctx.arc(px, py, 2.4, 0, Math.PI * 2);
        ctx.fill();
        const grad = ctx.createRadialGradient(px, py, 0, px, py, 14);
        grad.addColorStop(0, `color-mix(in oklch, ${ACCENT} 70%, transparent)`);
        grad.addColorStop(1, `color-mix(in oklch, ${ACCENT} 0%, transparent)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(px, py, 14, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      pulses = pulses.filter(p => p.t < 1);

      // ── Layer 4: Shooting stars ───────────────────────────────────────
      maybeSpawnShoot();
      for (const s of shoots) {
        s.life += dt / 16;
        s.x += s.vx;
        s.y += s.vy;
        const lifeT = s.life / s.max;
        const a = Math.sin(lifeT * Math.PI);
        ctx.fillStyle = `rgba(240, 245, 255, ${a})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, 1.6, 0, Math.PI * 2);
        ctx.fill();
        const tlen = 80;
        const tx = s.x - s.vx * (tlen / Math.hypot(s.vx, s.vy));
        const ty = s.y - s.vy * (tlen / Math.hypot(s.vx, s.vy));
        const g = ctx.createLinearGradient(s.x, s.y, tx, ty);
        g.addColorStop(0, `rgba(240, 245, 255, ${a * 0.9})`);
        g.addColorStop(1, 'rgba(240, 245, 255, 0)');
        ctx.strokeStyle = g;
        ctx.lineWidth = 1.4;
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(tx, ty);
        ctx.stroke();
      }
      shoots = shoots.filter(s => s.life < s.max && s.x > -100 && s.x < w + 100 && s.y < h + 100);

      raf = requestAnimationFrame(step);
    }

    function onMove(e) {
      // Point-type filter: on touch devices, only follow active touches —
      // hover/mouse emulated events during scrolling would jitter the network.
      if (isTouch && e.pointerType === 'mouse') return;
      const m = mouseRef.current;
      m.targetX = e.clientX;
      m.targetY = e.clientY;
      if (!m.active) {
        // Initialize position on first contact so we don't snap from off-screen.
        m.x = e.clientX;
        m.y = e.clientY;
      }
      m.active = true;
    }
    function onLeave() {
      const m = mouseRef.current;
      m.active = false;
      m.targetX = -9999;
      m.targetY = -9999;
    }
    function onAccentChange() { ACCENT = getAccent(); }

    resize();
    raf = requestAnimationFrame(step);
    window.addEventListener('resize', resize);
    // Touch devices: skip pointer interaction entirely. The network drifts
    // on its own, which reads better on mobile than an explosive finger-drag.
    if (!isTouch) {
      window.addEventListener('pointermove', onMove);
      window.addEventListener('pointerleave', onLeave);
      window.addEventListener('pointerup', onLeave);
      window.addEventListener('pointercancel', onLeave);
    }
    const mo = new MutationObserver(onAccentChange);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['style'] });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
      if (!isTouch) {
        window.removeEventListener('pointermove', onMove);
        window.removeEventListener('pointerleave', onLeave);
        window.removeEventListener('pointerup', onLeave);
        window.removeEventListener('pointercancel', onLeave);
      }
      mo.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className="bg-particles" aria-hidden="true" />;
}

window.BgParticles = BgParticles;
