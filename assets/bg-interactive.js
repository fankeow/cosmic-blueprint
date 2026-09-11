// ---------------------------------------------------------------------------
// Interactive bodygraph: hover tooltips on centres and defined channels,
// and click-to-expand into a centred, zoomable/pannable modal with controls.
// Usage: window.BGInteractive.enhance(containerEl)
// ---------------------------------------------------------------------------
(function (root) {
  "use strict";

  // [title, body, category]
  var CENTER_INFO = {
    Head:        ["Head", "Inspiration and mental pressure. Where questions, wonderings and the itch to make sense of things begin.", "Pressure centre"],
    Ajna:        ["Ajna", "How you think and process. Concepts, opinions, and the way you turn information into meaning.", "Awareness centre"],
    Throat:      ["Throat", "Communication and manifestation. Where energy becomes speech and action, and things get out into the world.", "Manifestation centre"],
    G:           ["G Centre", "Identity, love and direction. Your sense of self and the compass for where your life is headed.", "Identity centre"],
    Ego:         ["Heart / Ego", "Willpower, worth and the promises you make. Where drive and self-esteem live.", "Motor centre"],
    Sacral:      ["Sacral", "Life force and work energy. The gut yes and no, and the engine for the work you love.", "Motor centre"],
    Spleen:      ["Spleen", "Intuition, instinct and wellbeing. Your in-the-moment sense of what keeps you safe and well.", "Awareness centre"],
    SolarPlexus: ["Solar Plexus", "Emotions and the feeling wave. Where moods move, and for many, where clarity arrives over time.", "Motor and awareness centre"],
    Root:        ["Root", "Pressure, drive and adrenaline. The push to get things done, and the stress that fuels momentum.", "Pressure and motor centre"]
  };
  // DESIGN vs PERSONALITY column headers
  var COL_INFO = {
    design:      ["Design", "Your unconscious side, calculated about three months before you were born. It is the body you inherited, the way you run underneath your own awareness. Shown in the warm tone here, and felt more by others than by you."],
    personality: ["Personality", "Your conscious side, calculated at the moment of your birth. This is the you that you recognise, how you think you are, the voice in your head. Shown in the dark tone here."]
  };
  var CHANNEL_NAMES = {
    "1-8":"Channel of Inspiration","2-14":"Channel of the Beat","3-60":"Channel of Mutation",
    "4-63":"Channel of Logic","5-15":"Channel of Rhythm","6-59":"Channel of Mating",
    "7-31":"Channel of the Alpha","9-52":"Channel of Concentration","10-20":"Channel of Awakening",
    "10-34":"Channel of Exploration","10-57":"Channel of Perfected Form","11-56":"Channel of Curiosity",
    "12-22":"Channel of Openness","13-33":"Channel of the Prodigal","16-48":"Channel of Talent",
    "17-62":"Channel of Acceptance","18-58":"Channel of Judgment","19-49":"Channel of Synthesis",
    "20-34":"Channel of Charisma","20-57":"Channel of the Brainwave","21-45":"Channel of Money",
    "23-43":"Channel of Structuring","24-61":"Channel of Awareness","25-51":"Channel of Initiation",
    "26-44":"Channel of Suffering","27-50":"Channel of Preservation","28-38":"Channel of Struggle",
    "29-46":"Channel of Discovery","30-41":"Channel of Recognition","32-54":"Channel of Transformation",
    "34-57":"Channel of Power","35-36":"Channel of Transitoriness","37-40":"Channel of Community",
    "39-55":"Channel of Emoting","42-53":"Channel of Maturation","47-64":"Channel of Abstraction"
  };

  function el(tag, cls) { var e = document.createElement(tag); if (cls) e.className = cls; return e; }

  function makeTip() {
    var t = el("div", "bg-tip");
    t.style.cssText = "position:fixed;z-index:10000;pointer-events:none;max-width:260px;padding:11px 14px;border-radius:12px;" +
      "background:rgba(14,11,26,.96);color:#f2eeff;font:400 13px/1.5 Inter,system-ui,sans-serif;" +
      "box-shadow:0 12px 40px rgba(0,0,0,.5);border:1px solid rgba(201,186,255,.25);opacity:0;transition:opacity .12s;transform:translate(-50%,-100%)";
    t.hidden = true;
    document.body.appendChild(t);
    return t;
  }
  function tipHTML(title, tag, body) {
    var badge = tag ? '<span style="color:#f2dba9;font-size:11px;letter-spacing:.08em;text-transform:uppercase;margin-left:6px">' + tag + '</span>' : '';
    return '<div style="font-weight:600;margin-bottom:3px">' + title + badge + '</div><div style="color:#cfc8e6">' + body + '</div>';
  }

  function attachTips(scope, tip) {
    function show(html, x, y) { tip.innerHTML = html; tip.hidden = false; tip.style.left = x + "px"; tip.style.top = (y - 12) + "px"; requestAnimationFrame(function () { tip.style.opacity = "1"; }); }
    function hide() { tip.style.opacity = "0"; setTimeout(function () { tip.hidden = true; }, 120); }
    function pick(x, y) {
      var stack = document.elementsFromPoint(x, y) || [];
      for (var i = 0; i < stack.length; i++) {
        var e = stack[i]; if (!scope.contains(e)) continue;
        var c = e.closest ? e.closest("[data-center],[data-channel],[data-col-info]") : null; if (!c) continue;
        if (c.hasAttribute("data-center") || c.hasAttribute("data-col-info")) return c;
        if (c.getAttribute("data-active") === "true") return c;
      }
      return null;
    }
    function handleMove(ev) {
      var target = pick(ev.clientX, ev.clientY);
      if (!target) { hide(); return; }
      if (target.hasAttribute("data-col-info")) {
        var ci = COL_INFO[target.getAttribute("data-col-info")]; if (!ci) { hide(); return; }
        show(tipHTML(ci[0], "", ci[1]), ev.clientX, ev.clientY);
      } else if (target.hasAttribute("data-center")) {
        var info = CENTER_INFO[target.getAttribute("data-center")]; if (!info) { hide(); return; }
        var defined = target.getAttribute("data-defined") === "true";
        var tag = (info[2] ? info[2] + " · " : "") + (defined ? "Defined" : "Open");
        show(tipHTML(info[0], tag, info[1]), ev.clientX, ev.clientY);
      } else {
        var key = target.getAttribute("data-channel"); var name = CHANNEL_NAMES[key] || "Channel";
        show(tipHTML(name, "Gates " + key.replace("-", " and "), "One of your defined channels, a consistent stream of energy switched on in your chart."), ev.clientX, ev.clientY);
      }
    }
    scope.addEventListener("mousemove", handleMove, { passive: true });
    scope.addEventListener("mouseleave", hide, { passive: true });
    scope.addEventListener("click", function (ev) {
      var t = ev.target.closest ? ev.target.closest("[data-center],[data-col-info],[data-channel][data-active='true']") : null;
      if (t && scope.contains(t)) { handleMove(ev); ev.stopPropagation(); setTimeout(hide, 2800); }
    });
    return hide;
  }

  function ctrlBtn(label, title) {
    var b = el("button"); b.type = "button"; b.setAttribute("aria-label", title); b.title = title; b.innerHTML = label;
    b.style.cssText = "width:40px;height:40px;border:1px solid rgba(255,255,255,.16);background:rgba(20,16,38,.86);color:#f2eeff;" +
      "font:400 20px/1 Inter,system-ui,sans-serif;border-radius:12px;cursor:pointer;display:grid;place-items:center;transition:background .15s";
    b.onmouseenter = function () { b.style.background = "rgba(40,32,66,.95)"; };
    b.onmouseleave = function () { b.style.background = "rgba(20,16,38,.86)"; };
    return b;
  }

  function buildModal(svgMarkup) {
    var overlay = el("div", "bg-modal");
    overlay.style.cssText = "position:fixed;inset:0;z-index:9990;background:rgba(4,3,10,.9);-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);" +
      "display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .2s;touch-action:none;overscroll-behavior:contain";
    // frame is sized to the chart's aspect and centred; the chart never drifts left
    var frame = el("div");
    frame.style.cssText = "position:relative;height:min(86vh,880px);aspect-ratio:63 / 76;max-width:92vw;overflow:hidden;border-radius:24px;box-shadow:0 30px 90px rgba(0,0,0,.55)";
    var pan = el("div");
    pan.style.cssText = "position:absolute;inset:0;background:#fff;transform-origin:center center;will-change:transform";
    var inner = el("div"); inner.style.cssText = "position:absolute;inset:0;padding:26px;box-sizing:border-box;display:flex;align-items:center;justify-content:center";
    // uncap the svg and let its viewBox centre it, so the chart never drifts left
    inner.innerHTML = svgMarkup.replace(/style="[^"]*"/, 'style="width:100%;height:100%;display:block"');
    pan.appendChild(inner); frame.appendChild(pan); overlay.appendChild(frame);

    var close = el("button"); close.type = "button"; close.setAttribute("aria-label", "Close"); close.innerHTML = "&times;";
    close.style.cssText = "position:fixed;top:18px;right:20px;z-index:9992;width:44px;height:44px;border-radius:9999px;border:1px solid rgba(255,255,255,.18);" +
      "background:rgba(20,16,38,.9);color:#fff;font-size:26px;line-height:1;cursor:pointer;display:grid;place-items:center";
    overlay.appendChild(close);

    // zoom controls, bottom centre
    var controls = el("div");
    controls.style.cssText = "position:fixed;bottom:22px;left:50%;transform:translateX(-50%);z-index:9992;display:flex;align-items:center;gap:8px";
    var minus = ctrlBtn("&minus;", "Zoom out");
    var reset = ctrlBtn('<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/></svg>', "Reset");
    var plus = ctrlBtn("+", "Zoom in");
    var hint = el("div"); hint.textContent = "scroll or pinch to zoom · drag to move";
    hint.style.cssText = "color:rgba(255,255,255,.55);font:400 12px/1 Inter,system-ui,sans-serif;letter-spacing:.02em;margin-left:8px;white-space:nowrap";
    controls.appendChild(minus); controls.appendChild(reset); controls.appendChild(plus); controls.appendChild(hint);
    overlay.appendChild(controls);

    document.body.appendChild(overlay);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(function () { overlay.style.opacity = "1"; });

    var scale = 1, tx = 0, ty = 0;
    function apply() { pan.style.transform = "translate(" + tx + "px," + ty + "px) scale(" + scale + ")"; pan.style.cursor = scale > 1 ? "grab" : "default"; }
    function zoomTo(next, ox, oy) {
      var prev = scale; scale = Math.min(6, Math.max(1, next));
      // keep the point (ox,oy) relative to frame centre stable
      var r = frame.getBoundingClientRect();
      var cx = (ox == null ? r.width / 2 : ox - r.left) - r.width / 2;
      var cy = (oy == null ? r.height / 2 : oy - r.top) - r.height / 2;
      tx = cx - (cx - tx) * (scale / prev); ty = cy - (cy - ty) * (scale / prev);
      if (scale === 1) { tx = 0; ty = 0; }
      apply();
    }
    frame.addEventListener("wheel", function (e) { e.preventDefault(); zoomTo(scale * (e.deltaY < 0 ? 1.14 : 0.88), e.clientX, e.clientY); }, { passive: false });
    plus.onclick = function () { zoomTo(scale * 1.4); };
    minus.onclick = function () { zoomTo(scale / 1.4); };
    reset.onclick = function () { scale = 1; tx = 0; ty = 0; apply(); };

    var drag = null;
    frame.addEventListener("pointerdown", function (e) { if (scale <= 1) return; drag = { x: e.clientX, y: e.clientY, tx: tx, ty: ty }; pan.style.cursor = "grabbing"; frame.setPointerCapture(e.pointerId); });
    frame.addEventListener("pointermove", function (e) { if (!drag) return; tx = drag.tx + (e.clientX - drag.x); ty = drag.ty + (e.clientY - drag.y); apply(); });
    frame.addEventListener("pointerup", function () { drag = null; apply(); });
    // pinch
    var pts = {}, pd = 0;
    frame.addEventListener("pointerdown", function (e) { pts[e.pointerId] = e; });
    frame.addEventListener("pointermove", function (e) {
      if (!(e.pointerId in pts)) return; pts[e.pointerId] = e;
      var ids = Object.keys(pts); if (ids.length !== 2) return;
      var a = pts[ids[0]], b = pts[ids[1]]; var d = Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY);
      if (pd) zoomTo(scale * (d / pd), (a.clientX + b.clientX) / 2, (a.clientY + b.clientY) / 2); pd = d;
    });
    frame.addEventListener("pointerup", function (e) { delete pts[e.pointerId]; pd = 0; });

    function shut() { overlay.style.opacity = "0"; document.body.style.overflow = ""; setTimeout(function () { overlay.remove(); }, 200); document.removeEventListener("keydown", onKey); }
    function onKey(e) { if (e.key === "Escape") shut(); else if (e.key === "+" || e.key === "=") zoomTo(scale * 1.4); else if (e.key === "-") zoomTo(scale / 1.4); }
    close.addEventListener("click", shut);
    overlay.addEventListener("click", function (e) { if (e.target === overlay) shut(); });
    document.addEventListener("keydown", onKey);

    return { overlay: overlay, svgHost: inner };
  }

  function enhance(container) {
    if (!container) return;
    var svg = container.querySelector("svg"); if (!svg) return;
    attachTips(container, makeTip());
    container.style.cursor = "zoom-in";
    if (getComputedStyle(container).position === "static") container.style.position = "relative";

    // minimalist expand hint, brightens on hover
    var badge = el("div");
    badge.innerHTML = '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 4H5a1 1 0 0 0-1 1v4M15 4h4a1 1 0 0 1 1 1v4M20 15v4a1 1 0 0 1-1 1h-4M4 15v4a1 1 0 0 0 1 1h4"/></svg>';
    badge.style.cssText = "position:absolute;top:14px;right:14px;color:#a49ec2;opacity:.5;pointer-events:none;transition:opacity .18s,color .18s";
    container.appendChild(badge);
    container.addEventListener("mouseenter", function () { badge.style.opacity = ".95"; badge.style.color = "#6a6478"; });
    container.addEventListener("mouseleave", function () { badge.style.opacity = ".5"; badge.style.color = "#a49ec2"; });

    container.addEventListener("click", function (ev) {
      if (ev.target.closest && ev.target.closest("[data-center],[data-col-info],[data-channel][data-active='true']")) return;
      var m = buildModal(svg.outerHTML);
      attachTips(m.svgHost, makeTip());
    });
  }

  root.BGInteractive = { enhance: enhance, CENTER_INFO: CENTER_INFO, CHANNEL_NAMES: CHANNEL_NAMES };
})(typeof window !== "undefined" ? window : this);
