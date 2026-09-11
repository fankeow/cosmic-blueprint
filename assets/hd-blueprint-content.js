// ---------------------------------------------------------------------------
// DannyBunny Blueprint — voiced content, written once (in Dan's voice) and
// assembled per chart by hd-blueprint-render.js. Tranche 1: the basics + centres.
// Never invents a Human Design fact; it re-voices Dan's library.
// ---------------------------------------------------------------------------
(function (root) {
  "use strict";

  function pick(list, value) {
    var v = String(value || "").toLowerCase();
    for (var i = 0; i < list.length; i++) {
      var m = list[i].match || [];
      for (var j = 0; j < m.length; j++) { if (v.indexOf(m[j]) >= 0) return list[i]; }
    }
    return list[list.length - 1];
  }

  var HDBP = {
    // ---- scaffolding ----
    overviewIntro: "This is a map of how your energy actually works. Not who you should be, who you already are underneath the conditioning. Read it once through, then keep it somewhere you can come back to. You are allowed to take what rings true and leave the rest.",

    // ---- CONCEPT LEAD-INS (what each part IS, before we tell you yours) ----
    concepts: {
      type: "Your energy type is the foundation of your whole design, the mechanics of your aura and the way you are built to exchange energy with the world. There are four types, and yours shapes how you are meant to make decisions and spend your energy. It is arguably the most important thing to understand about yourself.",
      strategy: "Your strategy is the way you are designed to meet the world without hitting resistance. It comes straight from your type, and it is the single most practical key in your whole design. Follow it, and life stops being a fight.",
      authority: "Your authority is your inner decision-making mechanism, the part of you that genuinely knows what is right for you. Your mind is brilliant for all sorts of things, but making your big decisions is not one of them. Your authority is, and it does not live in your head.",
      signature: "You have two built-in gauges. Human Design says each of us is wired with a specific inner signal for when we are living as ourselves, called the signature, and another that flags when we have veered off our design, called the not-self theme. Learn to read yours, and you will always know whether you are on track or off it.",
      definition: "Your definition describes how your defined centres are wired together, and so how your energy flows and gets processed inside you. It shapes how self-contained you are, and where you naturally reach for connection with other people.",
      profile: "Your profile is the angle your soul takes on this whole life, the way you are here to meet the world. It is made of two numbers, and each one matters. The first number is the way you see yourself, your inner world. The second is the way others experience you, your outer world. You are living both at once, and your profile is what happens when they come together.",
      centres: "The nine centres are the hubs of your chart, each one a different kind of energy. When a centre is coloured in, it is defined, which means it runs in a fixed, reliable way in you. When it is white, it is open, which means you take the world in through it and, over time, grow wise there. Your particular mix of defined and open is a big part of what makes you you.",
      channels: "A channel is a fixed wire between two of your centres. It forms when both of its gates are switched on, and it locks those two centres together into one steady, dependable stream of energy. Think of your channels as your superpowers, the gifts that are simply on in you all the time, that you can lean on and that other people feel from you. They are the through-lines of your design, and each one carries its own flavour, which is what the rest of this chapter walks you through.",
      terrain: "Your terrain is about the conditions that bring the best out of you, the practical, physical side of your design. It has two parts. The first is your environment, the kind of space where you settle, focus and do your best work. The second is your sense, the way you are built to take the world in and get a true read on things before you decide. Small as they sound, getting your terrain right makes everything else in your design run more smoothly."
    },

    // ---- WHAT IS HUMAN DESIGN (opening orientation chapter, from the companion) ----
    intro: {
      eyebrow: "Start here",
      heading: "What is Human Design",
      lead: [
        "Human Design is a map of how your particular energy works. It blends old wisdom traditions with astrology, the I Ching, and a little modern physics, and lays it all out in a chart called the BodyGraph. Where most of the world tries to smooth everyone into the same shape, this does the opposite. It shows you, in real detail, how you are built to be different.",
        "At its heart it is about one thing, decisions. It points you back to an inner compass, your own body's knowing, so you can make the choices that are genuinely right for you rather than the ones your head picked up from the world. One of its core messages is simple. You are the only authority in your own life."
      ],
      bodygraph: {
        h: "How your chart is made",
        paras: [
          "Your chart is calculated from the exact time and place you were born, just like a traditional astrology chart. At the moment of your birth, those two facts switch on a certain set of the sixty-four gates on your BodyGraph, and each activation carries a quality that becomes part of who you are.",
          "Your chart has two sides. The design side, worked out from about three months before you were born, is your unconscious, body-level wiring. The personality side, taken from the moment of birth, is the conscious you. Put together, they make the full picture of your energy."
        ]
      },
      logical: "Human Design is a highly logical system, and you do not need to blindly believe any of it. In most cases it simply confirms what you already know about yourself, points out potential you have not fully used yet, and gives you simple, practical things to try day to day.",
      practical: {
        h: "The practical value, and the three fishing rods",
        paras: [
          "It can take years to fully unpack everything in your chart. The good news is that you do not need all of it to feel the difference. To experience the life-changing part of Human Design, you only need the three most foundational pieces, your type, your strategy, and your authority. I affectionately call these the three fishing rods.",
          "Once you know how to use these three, you can use them for the rest of your life, to make decisions and move forward with real confidence and clarity. Everything else in this Blueprint deepens the picture, but these three are the ones to actually live by."
        ]
      }
    },

    // ---- THE SIX LINES (archetypes that make up a profile; from Dan's library) ----
    lines: {
      "1": { name: "Knowledge Seeker", body: "The 1 needs solid ground. You are fascinated by how things really work, and you feel safe once you have gone deep and armed yourself with real understanding. You are here to build a genuine base of knowledge, and that depth is what makes you confident and worth trusting." },
      "2": { name: "Natural", body: "The 2 is a natural. There are things you are effortlessly good at without quite knowing how, and you do not owe anyone an explanation for the gift. You need real alone time to drop into your zone, and often others spot your genius before you do, so let them call it out of you." },
      "3": { name: "Experimenter", body: "The 3 learns by living. You are here to try things, see what works and what does not, and pull wisdom from every outcome. What looks like a mistake is just research. Trust that life is the best teacher, and let each bump move you up a level." },
      "4": { name: "People Person", body: "The 4 measures life by its relationships. You bond easily and you sense who is right for you, and the opportunities you want tend to arrive through the people you are genuinely connected to. Keep your circle real and aligned, because your path runs person to person, not through cold strangers." },
      "5": { name: "Liberator", body: "The 5 carries a save-the-day energy. People sense you can help and will project their hopes onto you, so your work is to tell which situations are genuinely yours to fix and which are not. Step in where you truly fit and it gives you energy, rather than draining you." },
      "6": { name: "Wise Sage", body: "The 6 holds an innate wisdom that unfolds in three chapters. Your earlier years are for experimenting and living fully, a middle stretch is for stepping back and watching from the roof, and later you come down as a trusted role model. Trust that your authority is still forming, right on time." }
    },

    letter: {
      paras: [
        "Most of us spend years trying to be someone we are not. We copy how other people work, we force ourselves to move at speeds that are not ours, we say yes on a high and pay for it later. Then we wonder why everything feels harder than it should.",
        "Your design is the way that actually fits you. When you live it, life stops being a fight. Work feels like play, decisions get clearer, and the right people find their way to you.",
        "What follows is your operating manual. I have written it plainly, because your design is not complicated to live, it is just rarely explained in a way you can use on a Tuesday. Everything here is a suggestion, not a rule. If a line does not land, let it go. Take what feels like relief.",
        "Come back to it whenever you forget how good you are."
      ]
    },

    close: {
      eyebrow: "One last thing",
      // The heading and first paragraph are woven per chart by the render engine,
      // from each type / strategy / authority / profile closeLine. These are the fixed tail.
      openers: {
        "manifesting generator": "You were never meant to push.",
        "generator": "You were never meant to push.",
        "manifestor": "You were never meant to wait for permission.",
        "projector": "You were never meant to grind.",
        "reflector": "You were never meant to rush."
      },
      tail: [
        "When you live like this, the struggle you have been carrying starts to loosen, and the version of you that was there all along gets to come out and play.",
        "Read this whenever you forget. It is all still true on the days you cannot feel it."
      ]
    },

    // Conscious-line themes, used to weave one relational line into the close.
    profileCloseLine: {
      "1": "build on ground you have made solid",
      "2": "protect your natural gift and the time alone it needs",
      "3": "let trial and error teach you, and call none of it failure",
      "4": "build through the people you love",
      "5": "show up when you are genuinely called for",
      "6": "trust that your wisdom is still forming"
    },

    // ---- OPENER LEAD (woven "Who you are" encapsulation; <b> marks coloured words) ----
    typeLeads: [
      { match: ["manifesting generator"], clauses: ["built to be a <b>multi-passionate maker</b>", "to light up for many things at once", "to <b>move fast when the energy is real</b>"] },
      { match: ["generator"], clauses: ["built to be a <b>steady, renewable builder</b>", "to light up for the work that is genuinely yours", "to <b>build mastery until it becomes magnetic</b>"] },
      { match: ["manifestor"], clauses: ["built to be an <b>initiator</b>", "to start what others gather around", "to <b>move first and let the rest follow</b>"] },
      { match: ["projector"], clauses: ["built to be a <b>guide and a seer</b>", "to see what others miss", "to <b>lead by wisdom rather than force</b>"] },
      { match: ["reflector"], clauses: ["built to be a <b>mirror of your community</b>", "to take in the world around you", "to <b>reflect back a clarity no one else can</b>"] }
    ],
    authorityLeads: [
      { match: ["emotional", "solar"], clause: "to sleep on the big calls and wait for the feeling to settle" },
      { match: ["sacral"], clause: "to <b>trust the gut yes</b> in the moment it lands" },
      { match: ["splenic", "spleen"], clause: "to move on the first flicker of instinct" },
      { match: ["ego", "heart"], clause: "to promise only what your heart will truly back" },
      { match: ["self", "projected", "g center", "g-center"], clause: "to talk it through until you hear your own truth" },
      { match: ["mental", "environ", "sounding"], clause: "to find your clarity out loud, in the right room" },
      { match: ["lunar", "none"], clause: "to let the big decisions ripen across a month" }
    ],
    signatureLeads: [
      { match: ["satisfaction"], clause: "and to <b>trust satisfaction over speed</b>" },
      { match: ["peace"], clause: "and to <b>trust peace over pressure</b>" },
      { match: ["success"], clause: "and to <b>trust recognition over hustle</b>" },
      { match: ["surprise"], clause: "and to <b>trust delight over certainty</b>" }
    ],
    profileLeadLine: {
      "1": "to <b>build on ground you have made solid</b>",
      "2": "to protect the natural gift others call on",
      "3": "to <b>learn by trying, and call none of it failure</b>",
      "4": "to <b>build through the people you love</b> rather than the people you chase",
      "5": "to show up when you are genuinely called for",
      "6": "to live in chapters and trust the wisdom still forming"
    },
    centreLeadBonus: {
      Throat: "to speak and do in the same breath",
      Ego: "to keep a fair bargain in both directions",
      Sacral: "to work from a well that refills overnight"
    },

    // ---- TYPES ----
    types: [
      { match: ["manifesting generator"], name: "Manifesting Generator", who: "a multi-passionate maker",
        eyebrow: "Your type, Manifesting Generator",
        headline: "You are a maker with more than one lane.",
        paras: [
          "You carry a rare combination. The engine of a Generator, which is deep, renewable, satisfying energy for the work you love, and the speed of a Manifestor, which lets you skip steps and move the moment the feeling is real. Put together, you are built to do several things at once, master them fast, and reinvent yourself more than once in a life.",
          "At your best, you wake with a full tank, spend it on what genuinely lights you up, and drop into bed pleasantly wrecked. That end-of-day tiredness is the good kind. It is the sound of a battery that got used well and will refill overnight."
        ],
        pull: "Trying to be one neat, consistent thing is the fastest way to make yourself miserable. You are supposed to be a few things.",
        para2: "You will often find the shortcut. You master a skill and immediately see the version with three steps removed. This is a gift, not impatience. And when the energy for something drains away, that is information. It usually means the thing is done, even if your head says you should carry on.",
        try: ["<b>Follow the charge, not the should.</b> When something genuinely excites you, treat that as the green light.",
              "<b>Give yourself permission to pivot.</b> Dropping a thing you have outgrown is not flakiness, it is how you make room for the next real yes.",
              "<b>Let the tiredness be honest.</b> Good tired at night means you spent the day well."],
        closeLine: "Follow what lights you up, and let yourself be more than one thing." },
      { match: ["generator"], name: "Generator", who: "a steady, renewable builder",
        eyebrow: "Your type, Generator",
        headline: "You are built to respond, and to build real mastery.",
        paras: [
          "You are one of the masters of sustainable energy. Your magic happens when you focus on what genuinely lights you up. Your sacral centre is a renewable engine that hums for the right work and goes flat for the wrong work, and your open, enveloping aura draws the right people and opportunities toward you.",
          "Unlike a Manifesting Generator, you thrive when you stay with one or two core passions and go deep, building the kind of mastery that becomes magnetic over time. You do not need to chase. When you are lit up, people feel it, and they come."
        ],
        pull: "You are a natural magnet. The work is to respond to what life brings, rather than forcing things into motion from your head.",
        para2: "Frustration is your signpost that you are in the wrong thing or forcing it. When it shows up, pull your energy back from whatever is draining you and put it where the honest yes is.",
        try: ["<b>Wait for the response.</b> Let life put things in front of you, then feel for the gut yes before you commit.",
              "<b>Go deep, not wide.</b> One or two passions, mastered, beats ten half-started.",
              "<b>Honour the flat.</b> If your energy has gone, that is real information, not laziness."],
        closeLine: "Follow what lights you up, and go deep on the yes." },
      { match: ["manifestor"], name: "Manifestor", who: "an initiator and catalyst",
        eyebrow: "Your type, Manifestor",
        headline: "You are here to initiate, and to start what others rally around.",
        paras: [
          "You are the spark and the starter. You can begin things without waiting for permission, which is rare and powerful, and your aura is closed and repelling by design, so you are built to move first and let others follow. You forge your own path, guided by inner impulses.",
          "Your restlessness is not a flaw, it is the engine. You are here to make things happen, spark change and open new horizons, then hand the steady maintenance to others while you move on to the next thing that calls you."
        ],
        pull: "Your one move that changes everything is to inform. Tell the people affected before you act, and the resistance that used to slow you down clears.",
        para2: "Anger is your signpost. When it flares, it usually means you have hit resistance you could have cleared by informing first, or you have let someone put you in a box.",
        try: ["<b>Inform before you move.</b> A quick heads-up turns resistance into support.",
              "<b>Move in bursts.</b> Create when the impulse is hot, rest when the wave passes.",
              "<b>Protect your autonomy.</b> Design a life that lets you work free of rigid routines."],
        closeLine: "Start what wants to start through you, and inform as you go." },
      { match: ["projector"], name: "Projector", who: "a guide and seer",
        eyebrow: "Your type, Projector",
        headline: "You are here to guide, not to grind.",
        paras: [
          "You are the master of seeing what others miss. Your focusing, penetrating aura lets you understand people and systems deeply, and you are here to direct energy rather than generate endless amounts of it. You are not built for constant hustle, you are built for strategic, intentional, well-timed action.",
          "This is the part the world rarely tells you. You are valued for what you see, not for how much you do. When your gift is recognised and you are invited in, your guidance lands and your life opens up."
        ],
        pull: "You are not trading time for money. You are cashing in wisdom for wealth. Wait for the recognition and the invitation for the big things.",
        para2: "Bitterness is your signpost. It usually means you have been giving your energy where it was not truly wanted, or pushing your way in rather than waiting to be asked.",
        try: ["<b>Wait for the invitation.</b> For the big things, love, work, where you live, let yourself be recognised first.",
              "<b>Guard your energy.</b> You do not need to produce a lot. A few high-impact pieces beat constant output.",
              "<b>Follow what fascinates you.</b> Ask what fascinates me today, and study that. Your fascinations point at your genius."],
        closeLine: "Save your energy for what you are genuinely invited into." },
      { match: ["reflector"], name: "Reflector", who: "a mirror of the community",
        eyebrow: "Your type, Reflector",
        headline: "You are rare, and you reflect the health of everything around you.",
        paras: [
          "You are roughly one percent of people. With no consistently defined centres, you are a cosmic chameleon, sampling and mirroring the energy around you and offering back extraordinary clarity and perspective. Your energy is cyclical, tied to the phases of the moon.",
          "This makes where you are and who you are with matter enormously. In the right place and the right company, you shine. In the wrong ones, you feel it fast. Choose both with real care, because you take on so much of what surrounds you."
        ],
        pull: "Waiting is not the same as being stuck. Waiting is alive and present. Give the big decisions a full lunar cycle before you commit.",
        para2: "Disappointment is your signpost. It often means you are somewhere, or with people, that is not healthy for your open, sampling nature.",
        try: ["<b>Sleep on the big ones for a moon cycle.</b> Let a decision move through about a month before you commit.",
              "<b>Audit your environment.</b> Spend more time in the places and with the people that leave you feeling clear and well.",
              "<b>Check your vibe daily.</b> Ask who am I today, and let the answer be different each time."],
        closeLine: "Choose the rooms and the people that leave you well." }
    ],

    // ---- STRATEGIES ----
    strategies: [
      { match: ["respond, then inform", "respond then inform"], eyebrow: "Your strategy, respond then inform",
        headline: "Wait for the thing to respond to, then tell people before you move.",
        paras: ["Your energy is built to answer life, not to force it. When you initiate cold, from your head, you tend to hit resistance and drain out. When you respond to something real in front of you, a request, a conversation, an opportunity that lands, your body lights up and gives you the power to move.",
                "The Manifestor half adds one step most Generators skip. Because you move fast and affect the people around you, tell them before you go, not after. A quick heads-up turns their resistance into support."],
        inlife: "An idea grabs you on a Sunday and you want to start now. Instead of vanishing into it and surprising everyone on Wednesday, you take five minutes to tell the one or two people it touches. They feel respected, you keep your speed, and nobody is caught off guard.",
        closeLine: "Respond first, then tell people before you move." },
      { match: ["respond"], eyebrow: "Your strategy, respond",
        headline: "Wait for something to respond to, then follow the gut yes.",
        paras: ["Your energy answers life rather than initiating it. Life brings the right things to react to, a request, an option, a piece of work, and your sacral gives you a clear yes or no in the moment it lands. Forcing things into motion from your head is what drains you.",
                "So let the options come to you, then feel which ones are a true yes. When it is a real yes, you get all the energy you need. When it is not, pushing only wears you down."],
        inlife: "Rather than deciding in the abstract what you should build, you put yourself where things happen, notice what genuinely excites you when it appears, and move on the ones your body says yes to.",
        closeLine: "Respond instead of forcing." },
      { match: ["invitation"], eyebrow: "Your strategy, wait for the invitation",
        headline: "Wait to be recognised and invited for the things that matter.",
        paras: ["For the big things, work, love, where you live, being recognised and invited first is how your guidance lands instead of being brushed aside. A real invitation has a few parts. Someone sees your gift, they value it, and they ask you in.",
                "This is not about being passive. In the meantime you master your craft and make yourself visible. But you let the recognition come rather than pushing your way in, because pushing is what leads to the bitterness."],
        inlife: "Instead of chasing a client or a role, you share your insight openly and let the right people say, I need exactly this, will you help me. That yes is the invitation, and everything works better from there.",
        closeLine: "Wait to be recognised, then say yes." },
      { match: ["inform"], eyebrow: "Your strategy, inform and initiate",
        headline: "Tell the people affected, then move.",
        paras: ["You are built to initiate, so you do not wait to be asked. Your one move that changes everything is to inform. Before you act, let the people your action touches know what you are about to do. It feels like a small courtesy, but it clears the resistance that used to meet you.",
                "Informing is not asking permission. It is keeping people in the loop so they can support you instead of being caught off guard. Do this and your initiating energy stops meeting walls."],
        inlife: "Before you launch the thing, you send a short message to your team, your partner, whoever it affects, here is what I am about to do and why. They feel included, and the path in front of you clears.",
        closeLine: "Inform the people it touches, then go." },
      { match: ["lunar", "cycle", "reflector"], eyebrow: "Your strategy, wait a lunar cycle",
        headline: "Give the big decisions a full moon cycle.",
        paras: ["Your clarity is not built to arrive in an instant. It comes over time, as you sample a decision from different angles, in different company, in different rooms. About a lunar month lets the picture settle into something true.",
                "This is not stalling. It is honouring how you are wired. Talk the decision through with trusted people, sit with it across the cycle, and the clear answer surfaces on its own."],
        inlife: "A big offer lands. Instead of answering on the spot, you give it a moon cycle, talking it over and noticing how it feels in different settings, and by the end you simply know.",
        closeLine: "Give the big calls a full moon cycle." }
    ],

    // ---- AUTHORITIES ----
    authorities: [
      { match: ["emotional", "solar"], eyebrow: "How you decide, emotional authority",
        headline: "You are designed to sleep on it and wait for clarity.",
        paras: ["You do not have a reliable yes in the moment. Your feelings move in a wave, and where you are on that wave colours how everything looks. On a high, the whole thing feels amazing. On a low, the same thing feels like a mistake. Neither is true on its own. What is left once the wave settles is your real answer.",
                "So with anything big, wait. Not forever, just long enough for the emotional charge to drain and a calm to arrive. A day or two is usually plenty. You will know you are clear when the buzzy feeling has gone and what remains is a settled, steady yes or no. Around eighty percent certainty is your green light."],
        pull: "Your mind will try to rush you. Your work is to honour what feels right over time, even when you cannot fully explain it.",
        try: ["<b>Put a night between the ask and the answer.</b> Especially for money, commitments, and people.",
              "<b>Name where you are on the wave.</b> Just noticing I am high, or I am low, takes the power out of an impulsive yes.",
              "<b>Wait for calm, not certainty.</b> The signal is the nervousness leaving."],
        closeLine: "Sleep on it and wait for the wave to settle." },
      { match: ["sacral"], eyebrow: "How you decide, sacral authority",
        headline: "Your body knows before your mind catches up.",
        paras: ["Your truth lives in your gut, in the moment a real question lands. It speaks as a sound and a pull, an uh-huh yes that lifts you, or an uh-uh no that closes you down. It is immediate and physical, and it is far more reliable than anything your head talks itself into.",
                "The trick is to give your body real yes-or-no questions and listen for the first response, before the mind jumps in to reason. Your gut does not explain itself. It just knows."],
        pull: "If it is a hell yes, it will generate energy and results. If it is not, no amount of pushing will make it flow.",
        try: ["<b>Get asked yes-or-no questions.</b> Have a friend put real ones to you and answer from the gut sound.",
              "<b>Catch the first response.</b> The instant reaction is the true one, before the head edits it.",
              "<b>Trust the no.</b> A gut no is not rude, it is information."],
        closeLine: "Move on the first flicker of instinct." },
      { match: ["splenic", "spleen"], eyebrow: "How you decide, splenic authority",
        headline: "Your knowing is instant, subtle, and speaks once.",
        paras: ["Your authority is a soft, in-the-moment instinct, the same ancient awareness that keeps an animal safe. It is fast and understated, and it tends to speak only once rather than nagging. It is easy to miss, and easy to talk yourself out of.",
                "When it prompts you, there is no time to weigh the pros and cons. The whole point is that it is immediate. Your work is to learn to trust that first flicker and act on it, rather than waiting for it to argue its case."],
        pull: "The spleen whispers, it does not shout. Catch it the first time, because it rarely repeats itself.",
        try: ["<b>Act on the first flicker.</b> Notice the very first instinct in a new situation and move with it.",
              "<b>Do not overthink it.</b> If you wait for certainty, you will miss the window.",
              "<b>Notice what keeps you well.</b> Your spleen is tuned to health and safety, follow it."],
        closeLine: "Move on the first flicker of instinct." },
      { match: ["ego", "heart"], eyebrow: "How you decide, ego authority",
        headline: "Decide from what you genuinely want and will back.",
        paras: ["Your truth comes from your heart, from what you actually want and have the willpower to commit to. It is a wilful, self-honest authority. The question is not what you should do, it is what do I truly want here, and am I willing to put my energy behind it.",
                "Listen for what your heart is genuinely up for. If the want is real, the willpower follows. If you are only doing it because you feel you ought to, it will not hold."],
        pull: "Your yes is a promise you can keep. If your heart is not in it, let it go, guilt-free.",
        try: ["<b>Ask what do I want.</b> Not what is expected, what you actually desire.",
              "<b>Follow the willpower.</b> A real want comes with the energy to back it.",
              "<b>Say it out loud.</b> Often you hear your true want as you speak it."],
        closeLine: "Only promise what your heart will genuinely back." },
      { match: ["self", "projected", "g center", "g-center"], eyebrow: "How you decide, self-projected authority",
        headline: "Your truth comes out when you talk it through.",
        paras: ["Your knowing lives in your voice and your sense of direction. You do not find clarity by thinking in silence, you find it by talking, out loud, with people you trust who will simply listen. As you speak, you hear what is true for you.",
                "So decide out loud. Not to get advice, but to hear your own voice, because the answer is already in you and speaking is how it surfaces."],
        pull: "You need to hear yourself to know where you stand. Talk it through, and listen to what you say.",
        try: ["<b>Decide out loud.</b> Talk the choice through with a trusted, non-advising ear.",
              "<b>Listen to your own words.</b> What is true sits in what you say, not in what they reply.",
              "<b>Notice your direction.</b> The choice that feels like you is usually the right one."],
        closeLine: "Talk it out until you hear your own truth." },
      { match: ["mental", "environ", "sounding"], eyebrow: "How you decide, mental authority",
        headline: "You find clarity out loud, over time, in the right environment.",
        paras: ["You do not have an inner gut or emotional yes to rely on. Instead, you think best by talking things through with trusted sounding boards, and by noticing how a decision feels in different environments. The answer is in the process, not in a snap call.",
                "Use people as a mirror, not as advisors. As you discuss, you hear your own clarity form. And pay attention to place, because the right environment makes everything clearer for you."],
        pull: "The answer comes through the process. Talk it out, give it time, and notice where you feel clear.",
        try: ["<b>Talk to sounding boards.</b> Trusted people who listen while you think aloud.",
              "<b>Give it time.</b> Do not force a decision in the moment.",
              "<b>Mind your environment.</b> Notice which places help you think clearly."],
        closeLine: "Think it through out loud, in the right room, over time." },
      { match: ["lunar", "none"], eyebrow: "How you decide, lunar authority",
        headline: "Let the big decisions ripen across a moon cycle.",
        paras: ["As a Reflector, your clarity is a process, not a snap. Over about a lunar month, you sample a decision from many angles and in different company, and the truth settles. Rushing robs you of the very thing that makes your perspective so clear.",
                "Talk it through with trusted people across the cycle. By the end of the month, you will simply know, with a clarity that a quick decision could never give you."],
        pull: "Waiting is not being stuck. It is how your knowing arrives.",
        try: ["<b>Give big calls a moon cycle.</b> Roughly a month before you commit.",
              "<b>Talk it around.</b> Different people, different rooms, and watch how it feels.",
              "<b>Trust the settling.</b> The clear answer surfaces on its own."],
        closeLine: "Let the answer ripen across the month." }
    ],

    // ---- SIGNATURE / NOT-SELF (keyed by signature word) ----
    signatures: [
      { match: ["satisfaction"], eyebrow: "On track and off track, satisfaction and frustration",
        headline: "Satisfaction means yes. Frustration means change something.",
        paras: ["You have two built-in gauges. When you are living your design, you feel satisfaction, that deep, worn-out contentment at the end of a day spent on the right things. It is not about everything running perfectly, it is the feeling that your energy went somewhere that mattered to you.",
                "Frustration is the other gauge. When it shows up, it is not a failure, it is a signal, telling you that you are forcing something, in the wrong thing, or not responding. Treat it as information and change something."] },
      { match: ["peace"], eyebrow: "On track and off track, peace and anger",
        headline: "Peace means yes. Anger means clear the resistance.",
        paras: ["When you are living your design, informing before you move and initiating freely, you feel peace, a settled sense that you are moving in your own rhythm without fighting the world.",
                "Anger is your signpost. When it flares, it usually means you have hit resistance you could have cleared by informing first, or you have let someone box you in. It is a signal to reclaim your autonomy, not a character flaw."] },
      { match: ["success"], eyebrow: "On track and off track, success and bitterness",
        headline: "Success means yes. Bitterness means you gave energy where it was not wanted.",
        paras: ["When you are recognised, invited, and pouring your gift where it is genuinely valued, you feel success, the sense that your guidance is landing and being received.",
                "Bitterness is your signpost. It usually means you have been giving your energy where it was not truly wanted, or pushing your way in rather than waiting to be asked. It is a nudge to wait for the recognition that is coming."] },
      { match: ["surprise"], eyebrow: "On track and off track, surprise and disappointment",
        headline: "Surprise means yes. Disappointment means check your environment.",
        paras: ["When you are in the right place, with the right people, and letting decisions ripen, you feel delight and surprise at how life unfolds through you.",
                "Disappointment is your signpost. It often means you are somewhere, or with someone, that is not healthy for your open, sampling nature. It is a signal to change your environment rather than to blame yourself."] }
    ],

    // ---- DEFINITION ----
    definitions: [
      { match: ["single"], eyebrow: "How you process, single definition",
        headline: "You are whole on your own.",
        paras: ["Your defined centres are all connected in one piece, so your energy runs as one continuous flow. You process consistently and self-sufficiently, and you do not need another person to feel complete or to make your energy work.",
                "This is a real strength. You can go your own way and still feel whole, which means you get to choose company for joy rather than to fill a gap."] },
      { match: ["triple"], eyebrow: "How you process, triple split definition",
        headline: "You come in three groups, and you take the world in through several doors.",
        paras: ["Your defined energy comes in three separate groups, so you process the world through several channels at once. This is why you often do well with variety, busy environments and a range of people, they help bridge your groups.",
                "Give yourself time to integrate. Your clarity can take a beat to arrive because there is more to bring together, and that patience is part of your gift."] },
      { match: ["quadruple"], eyebrow: "How you process, quadruple split definition",
        headline: "Four groups, deeply self-contained.",
        paras: ["Your energy comes in four separate groups, which makes you remarkably self-contained. You process in your own way and your own time, and you rarely need much from others to feel complete.",
                "Patience with yourself is the whole game. Let your own rhythm lead, and do not measure your pace against anyone else's."] },
      { match: ["split"], eyebrow: "How you process, split definition",
        headline: "You come in two halves, and connection completes the circuit.",
        paras: ["Your defined energy comes in two connected groups, so you can feel a natural pull toward people and situations that bridge the gap between them. That pull is a gift, not a lack, it is how you round yourself out.",
                "Notice who you feel more whole around. Certain people quite literally complete a circuit in you, and that is worth paying attention to, without giving your independence away."] },
      { match: ["no ", "none", "open"], eyebrow: "How you process, no definition",
        headline: "You are open, and you take the world in wholesale.",
        paras: ["With no consistent definition, you are open and sampling everything around you, so environment and company shape your experience strongly. This is the Reflector's gift, extraordinary perspective, and its responsibility, choosing your surroundings with real care.",
                "Where you are and who you are with is not a small thing for you, it is the thing. Choose both as if your wellbeing depends on it, because it genuinely does."] }
    ],

    // ---- PROFILES ----
    profiles: {
      "1/3": { name: "The Establisher of Knowledge and Truth", headline: "Foundations first, then learn by doing.",
        desc: "The 1/3 is a foundation-builder who learns by living. Your 1st line digs for solid knowledge and needs to feel sure of its ground, while your 3rd line goes out, tries things, and finds out what works by bumping into what does not. Together you become the person who has both studied it and lived it, which is exactly why people trust what you say. Give yourself permission to research deeply and to make the so-called mistakes, because both are how you get to what actually works.",
        para: "You need solid ground under you, so you dig deep until you feel secure, and then you learn the rest by trial and error. Your so-called mistakes are not failures, they are how you find what actually works. Go deep first, then experiment your way to what is real." },
      "1/4": { name: "The Investigative Networker", headline: "Foundations first, then influence through the people who know you.",
        desc: "The 1/4 is a knowledge-seeker who shares through the people who know you. Your 1st line wants a solid, researched base before it feels secure, and your 4th line turns that depth outward through friendships and your network. You want to be seen as an authority among the people close to you, and once you have genuinely mastered something, that authority shines and draws others in. Your influence moves person to person, so do your homework until you feel solid, then let your circle carry it outward rather than chasing strangers.",
        para: "You go deep to feel secure, and then your opportunities come through relationships. Do your homework so you feel solid, then share it through your network rather than chasing strangers. Your influence moves person to person, on a base of real knowledge." },
      "2/4": { name: "The Easy Breezy Genius", headline: "Natural gifts, called out by the right people.",
        desc: "The 2/4 is the natural gift called out by the right people. Your 2nd line carries talents that come easily, the kind others notice before you do, and it needs real alone time to stay well. Your 4th line lives through relationships and warmth, and it is your network that calls your gifts out into the open. You are a considerate introvert who is also, somehow, socially connected, and the art is protecting your solitude while trusting the right people to open the right doors.",
        para: "You have talents that come easily and need alone time to develop, and a network that calls them out of you. Protect your solitude, because that is where your gift matures, and trust your people to open the right doors when the time comes." },
      "2/5": { name: "The Reluctant Hero", headline: "Naturally gifted, and often looked to for answers.",
        desc: "The 2/5 is a natural talent that strangers look to for answers. Your 2nd line has gifts that flow without much effort and a strong need for a private cocoon, while your 5th line pulls projection from people who barely know you, casting you as the one who will solve things. Those projections are about them, not you, so the skill is answering only the calls that genuinely fit and retreating to recharge without guilt. Lead with real, practical value and you can move mountains for people.",
        para: "Your gifts flow without much effort, and people project onto you, expecting you to have the solution. Guard your energy, retreat when you need to, and answer only the calls that genuinely fit you. You do not owe everyone a rescue." },
      "3/5": { name: "The Great Life Experimenter", headline: "Learn by doing, then share what actually works.",
        desc: "The 3/5 is the experimenter the world turns to for real-world solutions. Your 3rd line learns by trial and error, discovering what works by finding what does not, and that lived experience becomes your credibility. Your 5th line draws people who project onto you, expecting a practical saviour, so the balance is letting yourself experiment freely while managing what others put on you. What sets you apart is that your answers are field-tested, not theoretical, which makes you a genuinely useful guide.",
        para: "You learn by bumping into things and adjusting, and people come to you for practical, real-world solutions. Your lived experience becomes your credibility. Let yourself experiment, and turn what you discover into the help others are looking for." },
      "3/6": { name: "The Wise Adventurer", headline: "Experiment first, then become the example.",
        desc: "The 3/6 lives a two-part story. The first stretch of life is hands-on trial and error, where your 3rd line learns by doing and collects the bumps that later become wisdom. Then your 6th line climbs onto the roof to observe, and eventually steps into being a trusted example who has actually lived what they teach. Be patient with the messy early years, because they are precisely what makes your later authority real.",
        para: "The first part of life is experimental, trial and error is your teacher. Then you settle into being a trusted example who has actually lived it. Be patient with the phases, the bumps of the early years are what make your later wisdom real." },
      "4/6": { name: "The Regal Authority Figure", headline: "Built on relationships, becoming someone others model.",
        desc: "The 4/6 builds a life on relationships and grows into a role model. Your 4th line runs on genuine connection and a solid network, the people who know you are everything, and your 6th line moves through its three phases towards becoming someone others look to and model themselves on. Trust is your currency, so keep your circle real, and let the long arc of the 6th line unfold in its own time rather than forcing it.",
        para: "Relationships are everything for you, and over time you become someone others look to and model themselves on. Build your life on trust and genuine connection, and let the three phases of the 6th line unfold in their own time." },
      "4/1": { name: "The Bonus Life", headline: "A fixed nature, influence through your network.",
        desc: "The 4/1 is a fixed, foundational nature that influences through its network. This is one of the more solid, self-certain profiles, you tend to know what you know, and your 4th line carries it outward through the people you are connected to. There is a steadiness here that others find reassuring. Do your homework so your foundation is sound, then let your relationships be the channel that carries your gift into the world.",
        para: "You know what you know, and your influence moves through the people you are connected to. This is a solid, foundational, deeply relational design. Do your homework, then let your network carry your gift outward." },
      "5/1": { name: "The Challenge Solver", headline: "People project onto you, so always do your homework.",
        desc: "The 5/1 is the practical problem-solver everyone projects onto. Your 5th line pulls expectation from people who see you as the one with the answer, while your 1st line does the deep homework that makes those answers real. Your reputation rests on being prepared, because the projection cuts both ways, praise when you deliver and blame when you do not. Manage what people put on you with care, keep your foundation solid, and step forward when you genuinely have the goods.",
        para: "People see you as the one with the answer and project expectations onto you, and you meet them with practical, well-founded solutions. Manage the projection with care, and always have your foundation solid, because your credibility rests on it." },
      "5/2": { name: "The Self-Motivated Hero", headline: "Called on to solve, with a private streak to protect.",
        desc: "The 5/2 pairs a natural gift with a strong need for privacy. Your 5th line is called on to save the day and has a real talent for it, and your 2nd line just wants to be left in peace to do its own thing. People will project both onto you, telling you what is best for you and expecting you to rescue them, so the work is answering only the calls that genuinely fit and retreating to recharge without apology. Guard your private world, and do not let other people's expectations run your life.",
        para: "You are often called on to save the day, and you have a real gift for it, alongside a private nature that needs protecting. Answer the calls that genuinely fit, retreat to recharge without apology, and do not let the projections run your life." },
      "6/2": { name: "The Exemplary Human", headline: "A three-phase life that matures into wisdom.",
        desc: "The 6/2 is a three-phase human who matures into a trusted example. Early life is experimental, the middle chapter is spent stepping back and observing from the roof, and the later phase is a settled wisdom others look to. Alongside that arc, your 2nd line carries natural gifts that need protecting and alone time to ripen. Trust the whole journey, especially the reflective middle years, because that long view is exactly where your wisdom comes from.",
        para: "Yours is a three-stage journey. An experimental start, a middle chapter of stepping back and observing, and a later phase of becoming a trusted role model. Natural gifts plus a long view. Trust the arc, especially the reflective middle." },
      "6/3": { name: "The Responsible Adventurer", headline: "Live it, learn it, then model it.",
        desc: "The 6/3 lives things fully, learns them the hard way, and becomes living proof. Your 6th line walks the three-stage path towards being a role model, and your 3rd line keeps it honest and experimental, learning by trial and error the whole way. You are wise and hands-on at once, someone who has actually done the thing they are talking about. Let the early experiments be what they are, because they are how you earn the authority you grow into.",
        para: "You live things fully, learn through trial and error, and eventually become living proof of what you teach. Experimental and wise at once. Let the early experiments be, they are exactly how you earn the authority you grow into." }
    },

    // ---- CENTRES (defined / open) ----
    centres: {
      Throat:      { title: "Throat",       defined: "A defined Throat gives you a consistent, reliable voice and a steady way of communicating and manifesting. You express in a fixed manner that people can count on.",
                                            open: "An open Throat can feel pressure to speak and be seen, and may talk to fill silence. Your gift is a chameleon-like range of expression. Speak when you are genuinely invited, and let your voice find its own timing." },
      Ajna:        { title: "Ajna",         defined: "A defined Ajna gives you a fixed way of thinking and processing. Your mind holds consistent concepts and opinions, and you can rely on how you make sense of things.",
                                            open: "An open Ajna makes you a flexible, open-minded thinker who can hold many viewpoints. Resist the pressure to seem certain. Your gift is seeing all sides, not being fixed." },
      Head:        { title: "Head",         defined: "A defined Head gives you a consistent source of inspiration and mental pressure, a reliable engine for questions and ideas.",
                                            open: "An open Head takes on the mental pressure of the world and can get busy trying to answer everyone else's questions. Let go of the ones that are not yours. Your gift is inspiration that is not tied to any single line of thought." },
      G:           { title: "G Centre",     defined: "A defined G gives you a steady sense of self, love and direction. You know who you are and where you are headed, even as life changes around you.",
                                            open: "An open G means your sense of self and direction shift with your surroundings. This is not lostness, it is fluidity. Choose your places and people with care, because the right ones bring out the right you." },
      Ego:         { title: "Heart / Ego",  defined: "A defined Heart gives you consistent willpower and a reliable sense of your own worth. When you commit, you can back it, and you do not need to prove yourself.",
                                            open: "An open Heart can feel it must prove its worth and over-promise to measure up. You have nothing to prove. Your gift is understanding what truly matters beyond ego and willpower." },
      Sacral:      { title: "Sacral",       defined: "A defined Sacral is a renewable engine of life-force and work energy. Used on the right things, it refills overnight and gives you deep, sustainable capacity.",
                                            open: "An open Sacral does not make its own steady work energy and can push past healthy limits to keep up. Know when enough is enough. Your gift is wisdom about energy and work that the busy world badly needs." },
      Spleen:      { title: "Spleen",       defined: "A defined Spleen gives you consistent, reliable instincts about health, safety and timing, a steady inner alarm you can trust.",
                                            open: "An open Spleen can hold onto things, people, habits, out of fear of letting go. Notice when you are keeping something only because leaving feels scary. Your gift is deep sensitivity to what is healthy." },
      SolarPlexus: { title: "Solar Plexus", defined: "A defined Solar Plexus means you generate your own emotional wave, moving through highs and lows in your own rhythm. Your clarity comes over time, not in the moment.",
                                            open: "An open Solar Plexus soaks up and amplifies the emotions in the room, and can avoid confrontation to keep the peace. The feelings are often not yours. Your gift is deep empathy, once you learn to tell your emotions from theirs." },
      Root:        { title: "Root",         defined: "A defined Root gives you a consistent way of handling pressure and adrenaline. You have your own steady relationship with stress and drive.",
                                            open: "An open Root can feel a constant rush to be free of pressure and finish things fast. There is no real hurry. Your gift is learning to act under pressure without being ruled by it." }
    }
  };

  HDBP.pick = pick;
  root.HDBP = HDBP;
})(typeof window !== "undefined" ? window : this);
