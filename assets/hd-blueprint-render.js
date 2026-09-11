// ---------------------------------------------------------------------------
// Assembles a DannyBunny Blueprint from a normalised chart + HDBP content.
// Chapters: cover, overview, letter, snapshot, 1 basics, 2 centres,
// 3 channels+gifts, 4 terrain, [Business], 5 living it, close.
// meta.businessMode: "chapter" (its own chapter) or "folded" (default).
// Produces the same markup/classes as the hand-built sample so the CSS applies.
// ---------------------------------------------------------------------------
(function (root) {
  "use strict";
  var C = root.HDBP;

  function esc(s){ return String(s==null?"":s).replace(/[&<>]/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;"}[c];}); }
  function paras(arr){ return (arr||[]).map(function(p){ return "<p>"+p+"</p>"; }).join("\n"); }
  function tryBlock(items,label){ if(!items||!items.length) return ""; label=label||"Try this";
    return '<div class="try"><div class="h">'+label+'</div><ul>'+items.map(function(i){return "<li>"+i+"</li>";}).join("")+'</ul></div>'; }
  function inlife(t){ return t?'<div class="inlife"><div class="h">In real life</div><p>'+t+'</p></div>':""; }
  function pull(t){ return t?'<p class="pull">'+t+'</p>':""; }
  function lc(s){ return s?s.charAt(0).toLowerCase()+s.slice(1):s; }

  function topic(eyebrow, headline, body, cls){
    return '<section class="topic'+(cls?(' '+cls):'')+'"><div class="doc">\n'+
      '<div class="eyebrow label">'+esc(eyebrow)+'</div>\n'+
      '<h3>'+esc(headline)+'</h3>\n'+ body + '\n</div></section>\n';
  }
  function divider(num,id,title,sub){
    return '<section class="divider" id="'+id+'"><div class="doc"><div class="inner">\n'+
      '<div class="num">'+num+'</div>\n<h2>'+esc(title)+'</h2>\n<p>'+esc(sub)+'</p>\n</div></div></section>\n';
  }

  var CENTRE_ORDER = ["Head","Ajna","Throat","G","Ego","Sacral","Spleen","SolarPlexus","Root"];

  function channelName(a,b){
    var key=[Math.min(a,b),Math.max(a,b)].join("-");
    var nm=(root.BGInteractive&&root.BGInteractive.CHANNEL_NAMES&&root.BGInteractive.CHANNEL_NAMES[key])||"";
    return nm.replace(/^(The )?Channel of (the )?/i,"");
  }

  function facts(chart, prof){
    function f(k,v){ return '<div class="fact"><div class="k">'+esc(k)+'</div><div class="v">'+esc(v||"None")+'</div></div>'; }
    var chNames = (chart.channels||[]).map(function(c){
      var nm=channelName(c[0],c[1]);
      return nm?nm+" ("+c[0]+"-"+c[1]+")":c[0]+"-"+c[1];
    }).join(", ");
    return '<div class="facts">'+
      f("Type",chart.type)+f("Strategy",chart.strategyDisplay||chart.strategy)+f("Authority",chart.authority)+
      f("Profile",chart.profile+(prof?" "+prof.name:""))+f("Definition",chart.definition)+
      f("Signature",chart.signature)+f("Not-self theme",chart.notSelf)+
      f("Defined channels",chNames)+'</div>';
  }

  function bodygraphSVG(chart){
    if(!(root.HDBodygraph&&root.HDBodygraph.renderToSVG)) return '<p style="color:#f0a58c">Chart unavailable.</p>';
    var svg=root.HDBodygraph.renderToSVG(
      {channels:chart.channels,gates:chart.gates,definedCenters:chart.centres||chart.centers,activations:chart.activations},
      {theme:"linen",width:820,showActivationColumns:true,showBodySilhouette:true,showCenterLabels:true});
    return svg;
  }

  function standoutGates(chart){
    var out=[], seen={};
    function add(v){ var n=parseInt(String(v||"").split(".")[0],10); if(n && !seen[n]){ seen[n]=1; out.push(n); } }
    var p=(chart.activations&&chart.activations.personality)||{};
    add(p.sun); add(p.earth);
    (chart.channels||[]).forEach(function(c){ add(c[0]); add(c[1]); });
    return out;
  }

  function generate(chart, meta){
    meta=meta||{};
    var name=(meta.name&&meta.name.trim())||"Your";
    var first=name.split(" ")[0];
    var mode=(meta.businessMode==="chapter")?"chapter":"folded";
    var type=C.pick(C.types, chart.type);
    var stratLookup=/manifesting generator/i.test(chart.type||"")?"respond, then inform":chart.strategy;
    var strat=C.pick(C.strategies, stratLookup);
    if(/manifesting generator/i.test(chart.type||"") && /^to respond$/i.test((chart.strategy||"").trim())) chart.strategyDisplay="Respond, then inform";
    var authKey=chart.authorityFull||chart.authority;
    var auth=C.pick(C.authorities, authKey);
    var sig=C.pick(C.signatures, chart.signature);
    var def=C.pick(C.definitions, chart.definition);
    var prof=C.profiles[(chart.profile||"").trim()]||null;
    var pk=(chart.profile||"").trim().charAt(0);
    var pk2=(chart.profile||"").split("/")[1]; pk2=pk2?pk2.trim().charAt(0):pk;  // design/relational line

    // type deep-dive (only if the content genuinely matches this type)
    var td=C.pick(C.typeDeep, chart.type), tdMatches=false, lctd=(chart.type||"").toLowerCase();
    (C.typeDeep||[]).forEach(function(e){ if(e.match&&e.match.some(function(m){return lctd.indexOf(m)>=0;})) tdMatches=true; });
    var hasDeeper = tdMatches && td && (td.inLove||td.atWork||td.dailyPractice||(td.sixTips&&td.sixTips.length)||(td.affirmations&&td.affirmations.length));

    // centres
    var defSet={}; (chart.centres||chart.centers||[]).forEach(function(n){ defSet[n]=1; });
    var defined=[], open=[];
    CENTRE_ORDER.forEach(function(n){ (defSet[n]?defined:open).push(n); });

    // chapter map (numbers assigned in order)
    var chapters=[{id:"part1",t:"The basics"}];
    if(prof) chapters.push({id:"partP",t:"Your profile"});
    chapters.push({id:"part2",t:"Your centres"},{id:"part3",t:"Your channels"});
    var hasTerrain = !!(chart.environment || chart.sense);
    if(hasTerrain) chapters.push({id:"part4",t:"Your terrain"});
    if(mode==="chapter") chapters.push({id:"partB",t:"Business"});
    chapters.push({id:"part5",t:"Living it"});
    if(hasDeeper) chapters.push({id:"partX",t:"Going deeper"});
    var num={}; chapters.forEach(function(c,i){ num[c.id]=i+1; });

    var html="";

    // COVER — cinematic video hero
    var typeLine=[chart.type, chart.profile, chart.authority+" Authority"].filter(Boolean).join(" · ");
    var videoSrc = root.__VIDEO__ || meta.videoUrl || "";
    var videoEl = videoSrc ? '<video class="hero-video" src="'+videoSrc+'" autoplay muted playsinline preload="auto"></video>\n<div class="hero-grad"></div>\n' : "";
    var scrollCue = '<div class="scrollcue">Scroll to begin<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg></div>';
    html+='<header class="cover">\n'+ videoEl +
      '<div class="hero-content">\n'+
      '<div class="of">The Cosmic Blueprint of</div>\n<h1>'+esc(name)+'</h1>\n'+
      '<div class="born">'+esc(meta.bornLine||"")+'</div>\n'+
      '<div class="type-line"><span class="tl-txt">'+esc(typeLine)+'</span></div>\n'+
      '<div class="prepared">Prepared by <b>DannyBunny</b></div>\n'+
      '<div class="prepared-sub"><a href="https://dannybunny.co" target="_blank" rel="noopener">dannybunny.co</a></div>\n'+
      '</div>\n'+ (videoSrc?scrollCue:"") +'</header>\n';

    // NAV
    var introTab = C.intro ? '<a href="#intro">'+esc(C.intro.eyebrow||"Start here")+'</a>' : '';
    html+='<nav class="chapnav"><div class="inner">'+introTab+'<a href="#chart">Your chart</a>'+
      chapters.map(function(c){ return '<a href="#'+c.id+'">'+esc(c.t)+'</a>'; }).join("")+
      '</div></nav>\n';

    // OVERVIEW — woven "Who you are"
    var clauses=[].concat(C.pick(C.typeLeads, chart.type).clauses||[]);
    var la=C.pick(C.authorityLeads, authKey); if(la&&la.clause) clauses.push(la.clause);
    var pll=C.profileLeadLine&&C.profileLeadLine[pk2]; if(pll) clauses.push(pll);
    var bonus=0; ["Throat","Ego","Sacral"].forEach(function(cn){ if(defSet[cn]&&C.centreLeadBonus[cn]&&bonus<2){ clauses.push(C.centreLeadBonus[cn]); bonus++; } });
    var ls=C.pick(C.signatureLeads, chart.signature); if(ls&&ls.clause) clauses.push(ls.clause);
    var lead="You are "+clauses.join(", ")+".";
    html+='<section class="overview"><div class="doc">\n<div class="eyebrow">Who you are</div>\n'+
      '<p class="lead">'+lead+'</p>\n'+
      '<p class="body">'+C.overviewIntro+'</p>\n</div></section>\n<hr class="rule">\n';

    // LETTER
    var voiceSrc = root.__VOICE__ || meta.voiceUrl || "";
    var voiceLabel = meta.voiceLabel || "A note from Dan, press play";
    var player = voiceSrc ? (
      '<div class="voice">\n'+
      '<button class="voice-btn" id="voicePlay" type="button" aria-label="Play the note from Dan"></button>\n'+
      '<div class="voice-body">\n<div class="voice-label">'+esc(voiceLabel)+'</div>\n'+
      '<div class="voice-bar" id="voiceBar"><div class="voice-fill" id="voiceFill"></div></div>\n'+
      '<div class="voice-time"><span id="voiceCur">0:00</span> / <span id="voiceDur">0:00</span></div>\n</div>\n'+
      '<audio id="voiceAudio" src="'+voiceSrc+'" preload="metadata"></audio>\n</div>\n'
    ) : "";
    html+='<section class="letter"><div class="doc">\n<p class="date">A note before you start</p>\n'+
      '<h2>Dear '+esc(first)+',</h2>\n'+player+paras(C.letter.paras)+
      '\n<p style="margin-top:22px">With you,</p>\n<div class="sign">Dan</div>\n'+
      '<div class="sign-sub"><a href="https://dannybunny.co" target="_blank" rel="noopener">dannybunny.co</a></div>\n</div></section>\n<hr class="rule">\n';

    // WHAT IS HUMAN DESIGN
    if(C.intro){
      var IN=C.intro;
      html+='<section id="intro"><div class="doc">\n<div class="eyebrow">'+esc(IN.eyebrow)+'</div>\n'+
        '<h2>'+esc(IN.heading)+'</h2>\n'+paras(IN.lead)+
        '\n<h3>'+esc(IN.bodygraph.h)+'</h3>\n'+paras(IN.bodygraph.paras)+
        '\n<p class="pull">'+IN.logical+'</p>\n'+
        '<h3>'+esc(IN.practical.h)+'</h3>\n'+paras(IN.practical.paras)+
        '\n</div></section>\n<hr class="rule">\n';
    }

    // SNAPSHOT
    html+='<section id="chart"><div class="doc">\n<div class="snapshot">\n'+
      '<div class="eyebrow i">Your chart</div>\n<h2>The shape of your energy</h2>\n'+
      facts(chart,prof)+
      '\n<div class="bg-wrap">'+bodygraphSVG(chart)+'</div>\n'+
      '<p class="caption">Filled centres are defined and consistent. Outlined centres are open, where you take the world in and grow wise.</p>\n'+
      '</div></div></section>\n';

    // PART 1 — THE BASICS
    var K=C.concepts||{};
    function concept(t){ return t?'<p class="concept">'+t+'</p>\n':""; }
    function extrasAt(place){ if(!(hasDeeper&&td&&td.extras)) return ""; return td.extras.filter(function(e){ return (e.placement||"deeper")===place; }).map(function(e){ return topic(e.eyebrow,e.headline,paras(e.paras)); }).join(""); }
    html+=divider(num.part1,"part1","The basics","How you are wired to use your energy, make decisions, and know when you are on the right track.");
    var typeBody=concept(K.type)+paras(type.paras)+pull(type.pull)+(type.para2?"<p>"+type.para2+"</p>":"")+tryBlock(type.try);
    if(tdMatches && td && td.poeticLine) typeBody+='<p class="gift-note">'+esc(td.poeticLine)+'</p>';
    html+=topic(type.eyebrow,type.headline, typeBody);
    html+=topic(strat.eyebrow,strat.headline, concept(K.strategy)+paras(strat.paras)+inlife(strat.inlife));
    html+=topic(auth.eyebrow,auth.headline, concept(K.authority)+paras(auth.paras)+pull(auth.pull)+tryBlock(auth.try));
    html+=extrasAt("basics");
    html+=topic(sig.eyebrow,sig.headline, concept(K.signature)+paras(sig.paras));
    html+=topic(def.eyebrow,def.headline, concept(K.definition)+paras(def.paras));

    // PROFILE — its own chapter
    if(prof){
      html+=divider(num.partP,"partP","Your profile","The angle your soul takes on this life, and the two lines that make you who you are.");
      html+='<section class="topic"><div class="doc">\n<div class="eyebrow label">What a profile is</div>\n<h3>Two numbers, one role.</h3>\n'+concept(K.profile)+'</div></section>\n';
      var l1=C.lines&&C.lines[pk], l2=C.lines&&C.lines[pk2];
      var pbody=pull(prof.headline);
      if(prof.desc) pbody+='<p>'+prof.desc+'</p>\n';
      if(l1) pbody+='<div class="inlife"><div class="h">'+esc(pk)+', the '+esc(l1.name)+'</div><p>'+l1.body+'</p></div>\n';
      if(l2 && pk2!==pk) pbody+='<div class="inlife"><div class="h">'+esc(pk2)+', the '+esc(l2.name)+'</div><p>'+l2.body+'</p></div>\n';
      pbody+='<p><b>When they come together.</b> '+prof.para+'</p>';
      html+=topic("Your profile, the "+chart.profile, (prof.name||prof.headline), pbody);
    }

    // PART 2 — YOUR CENTRES
    html+=divider(num.part2,"part2","Your centres","The nine energy centres. The defined ones are consistent in you. The open ones are where you take in the world and, over time, grow wise.");
    html+='<section class="topic"><div class="doc">\n<div class="eyebrow label">What centres are</div>\n<h3>The nine hubs of your chart.</h3>\n'+concept(K.centres)+'</div></section>\n';
    function centreCards(list,which){
      return list.map(function(n){ var c=C.centres[n]; if(!c) return "";
        return '<div class="inlife"><div class="h">'+esc(c.title)+'</div><p>'+ (which==="defined"?c.defined:c.open) +'</p></div>';
      }).join("\n");
    }
    html+='<section class="topic"><div class="doc">\n<div class="eyebrow label">Defined <span class="centre-tag def">consistent</span></div>\n'+
      '<h3>Your reliable centres.</h3>\n<p>These are switched on and steady in you. Fixed, dependable energy you can lean on and that others feel from you.</p>\n'+
      centreCards(defined,"defined")+'\n</div></section>\n';
    html+='<section class="topic"><div class="doc">\n<div class="eyebrow label">Open <span class="centre-tag open">where you grow wise</span></div>\n'+
      '<h3>Your open centres.</h3>\n<p>These are where you take the world in, feel other people, and can pick up conditioning. Not weaknesses, they are where your deepest wisdom is meant to grow.</p>\n'+
      centreCards(open,"open")+'\n</div></section>\n';
    html+=extrasAt("centres");

    // PART 3 — YOUR CHANNELS + SIGNATURE GIFTS
    html+=divider(num.part3,"part3","Your channels","The specific circuits switched on in you, and the gifts they carry.");
    html+='<section class="topic"><div class="doc">\n<div class="eyebrow label">What channels are</div>\n<h3>The fixed wires in your design.</h3>\n'+concept(K.channels)+'</div></section>\n';
    (chart.channels||[]).forEach(function(c){
      var key=[Math.min(c[0],c[1]),Math.max(c[0],c[1])].join("-");
      var alt=[Math.max(c[0],c[1]),Math.min(c[0],c[1])].join("-");
      var d=C.channels[key]||C.channels[alt];
      if(d){
        html+=topic("The channel of "+d.name+", "+c[0]+" and "+c[1], d.headline, paras(d.paras)+inlife(d.inlife));
      } else {
        var nm=channelName(c[0],c[1])||("channel "+c[0]+"-"+c[1]);
        html+=topic("The channel of "+nm+", "+c[0]+" and "+c[1], "A defined circuit running through you.",
          "<p>This channel, "+esc(nm)+", is switched on in you, linking two of your centres into one consistent, dependable flow. It is one of the fixed through-lines of your design, an energy you can count on in yourself and that others feel from you.</p>");
      }
    });
    // signature gifts
    var gates=standoutGates(chart);
    if(gates.length){
      var gbody='<p>'+C.gateStandoutIntro+'</p>\n<div class="gifts">';
      gates.forEach(function(n){
        var g=C.gates[n];
        var nm=g?g.name:("Gate "+n);
        var line=g?g.line:"One of the gifts your design switches on, carrying its own particular flavour.";
        gbody+='<div class="gift"><span class="g">Gate '+n+'</span><h4>'+esc(nm)+'</h4><p>'+line+'</p></div>';
      });
      gbody+='</div>\n<p class="gift-note">'+C.gateStandoutOutro+'</p>';
      html+=topic("Your signature gifts","The gifts switched on in your chart.", gbody);
    }

    // PART 4 — YOUR TERRAIN
    if(hasTerrain){
      html+=divider(num.part4,"part4","Your terrain","The conditions that bring the best out of you. Where you work best, and the sense you take the world in through.");
      html+='<section class="topic"><div class="doc">\n<div class="eyebrow label">What your terrain is</div>\n<h3>The conditions you run best in.</h3>\n'+concept(K.terrain)+'</div></section>\n';
      if(chart.environment){
        var env=C.pick(C.environments, chart.environment);
        if(env) html+=topic("Your best environment, "+env.name, env.headline, paras(env.paras)+tryBlock(env.try));
      }
      if(chart.sense){
        var sense=C.pick(C.senses, chart.sense);
        if(sense) html+=topic("Your strongest sense, "+sense.name, sense.headline, paras(sense.paras)+tryBlock(sense.try));
      }
    }

    // BUSINESS CHAPTER (its-own-chapter mode)
    if(mode==="chapter"){
      var biz=C.pick(C.business.byType, chart.type);
      html+=divider(num.partB,"partB","Business","The way you are built to work, create, and be seen, so building something of your own feels like you rather than a template.");
      var bizIntro = (C.business.intro instanceof Array) ? paras(C.business.intro) : ('<p>'+C.business.intro+'</p>');
      html+='<section class="topic"><div class="doc">\n<div class="eyebrow label">Business</div>\n<h3>How your energy is built to work.</h3>\n'+bizIntro+'</div></section>\n';
      html+=topic("Your business superpower","What you bring that others cannot.", "<p>"+biz.superpower+"</p>");
      html+=topic("Your content style","How you are built to be seen.", "<p>"+biz.contentStyle+"</p>");
      html+=topic("Your business approach","The way of working that fits your wiring.", "<p>"+biz.businessApproach+"</p>");
      html+=topic("Your offers and launch style","How to package and how to open the doors.",
        "<p><b>Offers.</b> "+biz.offers+"</p>\n<p><b>Launch.</b> "+biz.launch+"</p>");
      var p1=C.business.pillarsByLine[pk], p2=(pk2!==pk)?C.business.pillarsByLine[pk2]:null;
      if(p1){
        var pbody="<p><b>Line "+pk+", "+p1.name+".</b> "+p1.para+"</p>";
        if(p2) pbody+="<p><b>Line "+pk2+", "+p2.name+".</b> "+p2.para+"</p>";
        html+=topic("Your content pillars, profile "+chart.profile, "What to make your content about.", pbody);
      }
    }

    // PART 5 — LIVING IT
    html+=divider(num.part5,"part5","Living it","Your design applied to the places it matters most, work, love, the patterns that pull you off course, and a week to feel the difference.");

    // WORK — always shown (the "at work" beat the subtitle promises; distinct from the Business chapter)
    var atwork = (tdMatches && td && td.atWork) ? td.atWork : null;
    var work=C.pick(C.living.workByType, chart.type);
    var wHead = atwork ? atwork.headline : work.headline;
    var wbody = atwork ? paras(atwork.paras) : paras(work.paras);
    if(mode!=="chapter"){ var growth=C.living.workProfileGrowth[pk2]; if(growth) wbody+="<p>"+growth+"</p>"; }
    var guard=C.pick(C.living.workAuthorityGuard, authKey);
    var g2map={ G:"your open G means environment shapes you, so choose who and where you work with real care, because the wrong room will gradually reshape your direction",
                Ego:"your open heart can push you to over-promise to prove your worth, so only take on what you genuinely want",
                SolarPlexus:"your open solar plexus can keep the peace at your own cost, so be willing to have the honest conversation",
                Root:"your open root can rush you, so resist committing just to relieve the pressure" };
    var g2=""; ["G","Ego","SolarPlexus","Root"].some(function(cn){ if(!defSet[cn]&&g2map[cn]){ g2=g2map[cn]; return true; } return false; });
    wbody += "<p><b>Two things to hold.</b> First, "+(guard?lc(guard.text):"")+(g2?" Second, "+g2+".":"")+"</p>";
    html+=topic("You at work", wHead, wbody);

    // relationships
    var rel=C.pick(C.living.relByType, chart.type);
    var rbody=paras(rel.paras);
    var relAuth=C.pick(C.living.relAuthority, authKey); if(relAuth) rbody+="<p>"+relAuth.text+"</p>";
    if(!defSet.G) rbody+="<p>"+C.living.relOpenG+"</p>";
    var dl=(chart.definition||"").toLowerCase();
    var dkey = dl.indexOf("split")>=0?"split":(dl.indexOf("single")>=0?"single":null);
    if(dkey&&C.living.relDefinition[dkey]) rbody+="<p>"+C.living.relDefinition[dkey]+"</p>";
    html+=topic("Relationships", rel.headline, rbody);

    // drift
    var driftItems=[], driftSeen={};
    function pushDrift(it){ if(it&&it.h&&!driftSeen[it.h]){ driftSeen[it.h]=1; driftItems.push(it); } }
    ((C.pick(C.living.driftByType, chart.type).items)||[]).forEach(pushDrift);
    var dch=C.living.driftChannel||{};
    (chart.channels||[]).forEach(function(c){
      var key=[Math.min(c[0],c[1]),Math.max(c[0],c[1])].join("-");
      if(dch[key]) pushDrift(dch[key]);
    });
    var addedOpen=0;
    ["Spleen","Root","Ego","G","SolarPlexus","Ajna","Head","Throat"].forEach(function(cn){
      if(!defSet[cn] && C.living.driftOpenCentre[cn] && addedOpen<1){ pushDrift(C.living.driftOpenCentre[cn]); addedOpen++; }
    });
    var dbody='<p>'+C.living.driftIntro+'</p>\n'+driftItems.map(function(it){
      return '<div class="inlife"><div class="h">'+esc(it.h)+'</div><p>'+it.p+'</p></div>';
    }).join("\n");
    html+=topic("When you drift off course","The patterns to catch early.", dbody);

    // seven-day
    var lct=(chart.type||"").toLowerCase(), sd=null;
    (C.living.sevenDayByType||[]).forEach(function(e){ if(e.match&&e.match.some(function(m){return lct.indexOf(m)>=0;})) sd=e; });
    var days;
    if(sd&&sd.days) days=sd.days;
    else { var gd=C.living.sevenDayGeneric; days=[C.pick(gd.respondByStrategy, chart.strategy), C.pick(gd.authDay, authKey)].concat(gd.rest); }
    var sbody='<p>'+C.living.sevenDayIntro+'</p>\n<div class="week">'+days.map(function(d){
      return '<div class="day"><div class="d">'+esc(d.h)+'</div><p>'+d.p+'</p></div>';
    }).join("\n")+'</div>';
    html+=topic("Your seven-day experiment","A week to feel the difference.", sbody);

    // INTERLUDE — a cinematic pause (looping video) before the closing material
    var interludeVideo = root.__VIDEO2__ || meta.interludeVideoUrl || "";
    var ivEl = interludeVideo ? '<video class="interlude-video" src="'+interludeVideo+'" autoplay muted loop playsinline preload="auto"></video>\n<div class="interlude-overlay"></div>\n' : "";
    html+='<section class="interlude">\n'+ ivEl +
      '<div class="in-content">\n'+
      '<div class="in-eyebrow">Before you go deeper</div>\n'+
      '<p class="in-quote">You were never meant to become someone else. You were meant to remember who you already are. Everything in this Blueprint is just the way back.</p>\n'+
      '<div class="in-attr">Dan</div>\n'+
      '</div>\n</section>\n';

    // GOING DEEPER — practice, tips, affirmations (love and work now live in Living it, no repeats)
    if(hasDeeper){
      html+=divider(num.partX,"partX","Going deeper","A daily practice, your empowered reminders, and affirmations to keep, and where to go from here.");
      html+=extrasAt("deeper");
      if(td.dailyPractice) html+=topic("A daily practice for you", td.dailyPractice.headline, '<p>'+td.dailyPractice.intro+'</p>'+tryBlock(td.dailyPractice.steps,"The practice"));
      if(td.sixTips&&td.sixTips.length){
        var tips='<p>Six things to remember, so you live as yourself rather than the conditioned version.</p>\n<div class="gifts">'+
          td.sixTips.map(function(t){ return '<div class="gift"><span class="g">Tip</span><h4>'+esc(t.h)+'</h4><p>'+t.p+'</p></div>'; }).join("")+'</div>';
        html+=topic("Six tips for the empowered you","Your everyday reminders.", tips, "own-page");
      }
      if(td.affirmations&&td.affirmations.length){
        var aff='<p>Say these out loud, or keep them somewhere you will see them. They are your design in your own words.</p>\n<div class="affirms">'+
          td.affirmations.map(function(a){ return '<p class="affirm">'+esc(a)+'</p>'; }).join("")+'</div>';
        html+=topic("Affirmations for you","Words to come back to.", aff, "own-page");
      }
    }

    // WHERE TO GO NEXT — final CTA, closes out the last chapter
    var ns=C.living.nextSteps;
    var nbody='<p>'+ns.intro+'</p>\n<div class="nextsteps">'+ns.doors.map(function(d){
      return '<div class="next"><div class="k">'+esc(d.eyebrow)+'</div><h4>'+esc(d.title)+'</h4><p>'+d.desc+'</p>'+
        '<a class="next-btn" href="'+d.href+'" target="_blank" rel="noopener">'+esc(d.cta)+'</a></div>';
    }).join("\n")+'</div>';
    html+=topic("Where to go next","When you are ready to go deeper.", nbody, "own-page");

    // CLOSE — woven per chart
    var closeOpener=(C.close.openers&&C.close.openers[(chart.type||"").toLowerCase()])||"You were never meant to force it.";
    var woven=["Your whole design points the same way."];
    if(strat&&strat.closeLine) woven.push(strat.closeLine);
    if(auth&&auth.closeLine) woven.push(auth.closeLine);
    if(type&&type.closeLine) woven.push(type.closeLine);
    var pcl=C.profileCloseLine&&C.profileCloseLine[pk2];
    if(pcl) woven.push("And "+pcl+".");
    var closeParas=[woven.join(" ")].concat(C.close.tail||[]);
    var closeVideo = root.__VIDEO3__ || meta.closeVideoUrl || "";
    var cvEl = closeVideo ? '<video class="closing-video" src="'+closeVideo+'" autoplay muted loop playsinline preload="auto"></video>\n<div class="closing-overlay"></div>\n' : "";
    html+='<section class="closing">\n'+ cvEl +'<div class="doc">\n<div class="eyebrow closing-eyebrow">'+esc(C.close.eyebrow)+'</div>\n'+
      '<h2>'+esc(closeOpener)+'</h2>\n'+paras(closeParas)+
      '\n<p class="fine">This Blueprint is for self-discovery and education. It is not medical, legal, or financial advice.</p>\n</div></section>\n';

    return html;
  }

  root.HDBlueprint = { generate: generate };
})(typeof window !== "undefined" ? window : this);
