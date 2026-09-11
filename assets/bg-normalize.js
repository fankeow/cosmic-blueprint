// ---------------------------------------------------------------------------
// BodyGraph response -> the chart object the DannyBunny pages render from.
// Keeps the exact shape the open-source engine produced, so the same render()
// and bodygraph renderer work whether the chart came from BodyGraph or the
// bundled fallback engine. This file invents no Human Design facts; it only
// re-labels BodyGraph's own output.
// ---------------------------------------------------------------------------
(function (root) {
  "use strict";

  var PLANET_KEY = {
    "sun": "sun", "earth": "earth", "moon": "moon",
    "north node": "northNode", "northnode": "northNode",
    "south node": "southNode", "southnode": "southNode",
    "mercury": "mercury", "venus": "venus", "mars": "mars",
    "jupiter": "jupiter", "saturn": "saturn", "uranus": "uranus",
    "neptune": "neptune", "pluto": "pluto"
  };

  // BodyGraph centre id -> renderer centre name.
  function centerName(id) {
    var s = String(id || "").toLowerCase().replace(/\s*center\s*$/, "").trim();
    if (s === "head") return "Head";
    if (s === "ajna") return "Ajna";
    if (s === "throat") return "Throat";
    if (s === "g" || s === "identity" || s === "self") return "G";
    if (s === "heart" || s === "ego" || s === "will") return "Ego";
    if (s === "solar plexus" || s === "emotional" || s === "solar-plexus") return "SolarPlexus";
    if (s === "sacral") return "Sacral";
    if (s === "spleen" || s === "splenic") return "Spleen";
    if (s === "root") return "Root";
    return null;
  }

  function idOf(x) {
    if (x == null) return "";
    if (typeof x === "object") return String(x.id != null ? x.id : (x.option != null ? x.option : ""));
    return String(x);
  }
  function listIds(arr) {
    if (!Array.isArray(arr)) return [];
    return arr.map(idOf).filter(Boolean);
  }

  function planetMap(side) {
    // side is BodyGraph Personality or Design: {PlanetName:{Gate,Line}}
    var out = {}, all = {};
    if (side && typeof side === "object") {
      Object.keys(side).forEach(function (name) {
        var p = side[name] || {};
        var gate = p.Gate != null ? p.Gate : p.gate;
        var line = p.Line != null ? p.Line : p.line;
        if (gate == null) return;
        var key = PLANET_KEY[String(name).toLowerCase()];
        var val = line != null ? (gate + "." + line) : String(gate);
        if (key) out[key] = val;         // only the 13 shown in the columns
        all[String(name)] = Number(gate); // every planet, for gate colouring
      });
    }
    return { display: out, gates: all };
  }

  function gateSet(planetGates) {
    var s = {};
    Object.keys(planetGates).forEach(function (k) { s[planetGates[k]] = true; });
    return s;
  }

  function parseCross(id) {
    var raw = idOf(id);
    var m = raw.match(/^(.*?)\s*\(([^)]*)\)\s*$/);
    var name = m ? m[1].trim() : raw.trim();
    var notation = m ? m[2].trim() : "";
    var gates = [];
    (notation.match(/\d+/g) || []).forEach(function (n) { gates.push(Number(n)); });
    return { name: name, notation: notation, gates: gates, full: raw };
  }

  function cleanAuthority(id) {
    // "Emotional - Solar Plexus" -> "Emotional"
    return idOf(id).split(" - ")[0].trim() || idOf(id);
  }

  function normalize(raw) {
    if (!raw || typeof raw !== "object") return null;
    var P = raw.Properties || raw.properties || {};

    var per = planetMap(raw.Personality || raw.personality);
    var des = planetMap(raw.Design || raw.design);
    var perGates = gateSet(per.gates);
    var desGates = gateSet(des.gates);

    // Channels: "20 - 34" -> [20,34]
    var channels = listIds(raw.Channels || raw.channels).map(function (c) {
      var nums = (String(c).match(/\d+/g) || []).map(Number);
      return nums.length >= 2 ? [nums[0], nums[1]] : null;
    }).filter(Boolean);

    // Gates + colouring derived from which side activates them.
    var gateIds = listIds(raw.Gates || raw.gates).map(Number).filter(function (n) { return !isNaN(n); });
    var gates = gateIds.map(function (g) {
      var inP = !!perGates[g], inD = !!desGates[g];
      var coloring = inP && inD ? "both" : (inD ? "design" : "personality");
      return { gate: g, coloring: coloring };
    });

    var centers = listIds(raw.DefinedCenters || raw.definedCenters).map(centerName).filter(Boolean);

    var authorityId = idOf(P.InnerAuthority || P.Authority);
    var profileId = idOf(P.Profile).replace(/\s+/g, ""); // "1 / 4" -> "1/4"
    var definition = idOf(P.Definition).replace(/\s*Definition\s*$/i, "").trim();
    var cross = parseCross(P.IncarnationCross);

    return {
      source: "bodygraph",
      type: idOf(P.Type),
      strategy: idOf(P.Strategy),
      authority: cleanAuthority(authorityId),
      authorityFull: authorityId,
      profile: profileId,
      profileName: "", // filled by the page's PROFILE table
      definition: definition,
      signature: idOf(P.Signature),
      notSelf: idOf(P.NotSelfTheme || P.NotSelf),
      cross: { name: cross.name, gates: cross.gates, notation: cross.notation },
      centers: centers,
      channels: channels,
      gates: gates,
      activations: { personality: per.display, design: des.display },
      variables: raw.Variables || raw.variables || null,
      chartUrl: raw.ChartUrl || raw.chartUrl || ""
    };
  }

  root.BGNormalize = normalize;
})(typeof window !== "undefined" ? window : this);
