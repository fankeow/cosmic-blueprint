// ---------------------------------------------------------------------------
// DannyBunny Blueprint — chapters 3, 4, 5 content (channels, gates, terrain,
// living it, business). Extends window.HDBP. Written in Dan's voice from his
// original Notion library + HD Business Magic. MG entries match the approved
// sample; other types are library-sourced and generalise.
// ---------------------------------------------------------------------------
(function (root) {
  "use strict";
  var C = root.HDBP;
  if (!C) return;

  // ---- CHANNELS (keyed "min-max"; only defined ones render) ----
  C.channels = {
    "1-8": { name: "Inspiration", headline: "Your unique creativity is here to inspire the world.",
      paras: [
        "This channel is here to share your one of a kind creative expression and to lead by putting your art into the world. What you make is beautiful and interesting, and it gives other people permission to express themselves too.",
        "The shadow shows up when you hold back and stop sharing, or when you create from outside pressure instead of your own uniqueness. The medicine is to reconnect with what genuinely moves you and let that be what you offer."
      ],
      inlife: "You sit on work that is actually good because it never feels ready, so pick one thing this week and share it exactly as it is." },
    "2-14": { name: "the Beat", headline: "You know how to gather what an idea needs to become real.",
      paras: [
        "This channel gives you a deep understanding of resources and the material steps needed to bring an idea to life. You have an inner knowing about how to build something the best it can be, and you can lead the way for your own direction or someone else's.",
        "The shadow is looking outside yourself for answers about what to do, or getting so caught up in the practical side that you lose touch with where you were headed. Come back to your own inner knowing and let the direction lead the resources, rather than the other way around."
      ],
      inlife: "You keep asking other people what your next move should be, so before you seek input, write down what your own knowing already says." },
    "3-60": { name: "Mutation", headline: "You make real progress by honouring your natural rhythm.",
      paras: [
        "This is a powerful format channel that shapes your whole design. You are gifted at making progress, solving problems and moving past limitations, working with a natural ebb and flow of energy that comes in waves.",
        "The shadow is pushing forward constantly with no breaks, and then sitting in anxiety when the energy naturally pauses. The medicine is to accept the pauses as part of the cycle and to trust that momentum returns when the time is right."
      ],
      inlife: "You force yourself to keep going when the energy has clearly dipped, so when a pause arrives, rest into it instead of treating it as a problem to fix." },
    "5-15": { name: "Rhythm", headline: "You thrive on your own flow and help others find theirs.",
      paras: [
        "This channel brings the gift of daily rhythm and living in harmony with the natural world. You have powerful personal timing, you anchor others in healthy routines, and you can feel when things are out of sync, whether in your own life or around you.",
        "The shadow is losing your rhythm and then conditioning everyone around you to be off beat too, often when stress, travel or other people's expectations pull you away from your natural pace. The medicine is honouring your Sacral responses and resetting through nature."
      ],
      inlife: "Your days fall apart when your routine gets disrupted, so protect a consistent morning ritual and take a grounding walk whenever you feel yourself drifting off beat." },
    "6-59": { name: "Mating", headline: "You sense exactly when true intimacy is ready to open.",
      paras: [
        "This channel carries big energy around emotional closeness, connection and creative fusion. You have a gift for breaking through barriers and forming deep bonds, and a real sensitivity for reading when intimacy is genuinely ripe or when it is not.",
        "The shadow is emotional volatility, or pushing too fast into connection before both people are truly ready. The medicine is to slow down and honour that inner read on timing, letting closeness build when it is mutual."
      ],
      inlife: "You rush into connection and later feel the strain of it, so when you sense the pull to push, pause and check whether the other person is actually ready too." },
    "7-31": { name: "the Alpha", headline: "You lead best when people ask you to lead.",
      paras: [
        "This channel is built for leadership that guides toward a shared future. You lead by reading patterns, seeing where things are going and understanding people's strengths, and you shine most when others recognise you and invite you to lead them.",
        "The shadow is being too shy to step up when the invitation is genuinely there, or handing out direction nobody asked for. The medicine is to build credibility and trust, and to honour your timing rather than forcing it."
      ],
      inlife: "You either hold back or push guidance where it is not wanted, so focus on being visible and trustworthy, then step forward the moment recognition arrives." },
    "9-52": { name: "Concentration", headline: "Focused determination is your hallmark.",
      paras: [
        "This is a powerful format channel that shapes your whole design, giving you a remarkable ability to focus and to plan. You arrive at the start of a project with determination, and you can let your energy build until every resource is assembled before you fire.",
        "The shadow is finding it hard to commit until every flaw is ironed out, which can leave you sitting in restless, adrenaline filled pressure. The medicine is to picture the arrow already in the bullseye before you move, then commit and let the focus carry you."
      ],
      inlife: "You delay committing because nothing feels perfect enough yet, so name the outcome you want clearly, then start before every imperfection is solved." },
    "10-34": { name: "Exploration", headline: "Honouring your own convictions is an act of self-love.",
      paras: [
        "This channel is here to hold your firmly rooted beliefs as a form of self-empowerment. Your convictions may differ from those around you, and you are meant to stand in them, using your Sacral responses and authority to shape what you truly believe.",
        "The shadow is a fear of being different that makes you shrink from your own convictions, or swinging the other way into having little respect for what others believe. The medicine is to own your beliefs fully while leaving room for other people to hold theirs."
      ],
      inlife: "You water down what you believe to fit in, so notice where you are hiding a conviction and let yourself say it plainly while respecting that others see it differently." },
    "10-57": { name: "Perfected Form", headline: "Your body knows what is right before your mind does.",
      paras: [
        "This channel is about living authentically in the moment through an instinctive sense of what behaviour is right for you. Your intuition is sharp, often arriving as a subtle whisper, and you are here to move through life with natural grace, integrity and presence simply by being true to yourself.",
        "The shadow is getting overwhelmed by noise and chaos, or overriding your body with shoulds and outside conditioning. The medicine is to track your body's signals, protect your sensitivity and trust the present moment."
      ],
      inlife: "You talk yourself out of what your body already sensed, so start noticing the goosebumps and gut twitches and give yourself permission to act on them." },
    "11-56": { name: "Curiosity", headline: "You turn ideas into stories that make people think.",
      paras: [
        "This channel gives you a natural curiosity for the world and a gift for sharing meaning in an interesting, often humorous way. You are here to teach your perspective on why things matter, painting the bigger picture rather than getting stuck in the fine detail.",
        "The shadow is either holding your ideas back and not sharing them, or offering them before anyone is receptive to hearing you. The medicine is to wait for genuine interest and an invitation, then let your storytelling land."
      ],
      inlife: "You share your best thinking when nobody is really listening, so notice who is actually leaning in and save your ideas for the moments people ask." },
    "13-33": { name: "the Prodigal", headline: "A witness who turns experience into wisdom worth sharing.",
      paras: [
        "You are here to observe deeply and remember what matters, drawing lessons from experience that help the rest of us evolve. When you take time to reflect and integrate, you become a natural guide who can teach, share and lead with real wisdom.",
        "Watch for the pull to listen forever while staying too shy to step up and share. The medicine is to honour your reflection, then trust that your voice carries something people need, and let yourself lead when you feel the recognition arrive."
      ],
      inlife: "It shows up when a friend asks how you handled something and your story genuinely lands, so start keeping a note of the experiences you have learned from and offer them when someone invites you in." },
    "16-48": { name: "Talent", headline: "Deep, practised skill that flowers with the right people around you.",
      paras: [
        "You carry a natural creative flair and a talent for almost anything you commit to, from the arts to business to washing the dishes with real care. True mastery comes through repetition, refining and having a supportive network who inspire you and fuel your goals.",
        "The watch-out is the fear of not knowing enough, which can turn you into a lifelong student chasing one qualification after another. The medicine is to keep practising while trusting the completeness of your abilities, and to use your talent to help others rather than to keep proving yourself."
      ],
      inlife: "It shows up when you hesitate to launch because you feel underqualified, so pick one skill you already have and put it to use for someone this week instead of signing up for another course." },
    "17-62": { name: "Acceptance", headline: "You make complex ideas clear when you are invited to.",
      paras: [
        "Your mind is always taking in information, organising it and connecting it to what you already know and believe. Your gift is making the invisible visible through words, noticing patterns and translating tangled ideas into clear, useful facts that help people understand.",
        "The watch-out is sharing before you are invited, which can land as unsolicited advice, or trying to make personal decisions from your busy mind. The medicine is to wait for genuine recognition, then teach, write and explain freely, leading through clarity rather than authority."
      ],
      inlife: "It shows up when you jump in to correct or explain and feel it fall flat, so build content or systems around what you love explaining and offer your insight when someone actually asks for it." },
    "18-58": { name: "Judgment", headline: "A love of life that drives you to make things better.",
      paras: [
        "You have a real gift for spotting what is off, unhealthy or missing in a process, and an instinct for what would serve the highest good. This comes from a deep love of life that fuels you to want to improve things and put your corrections to good use.",
        "The watch-out is turning that sharp eye inward or onto others as constant fault finding, or keeping the gift to yourself. The medicine is to wait for the invitation, then offer your corrections outwardly where they are welcomed and can genuinely help."
      ],
      inlife: "It shows up when you notice everything wrong in a room and start picking at yourself, so channel that eye into one system you have been invited to improve and let the rest go." },
    "19-49": { name: "Synthesis", headline: "Tuned in to what your people need to thrive.",
      paras: [
        "You are deeply sensitive to what your family and community need to be healthy and happy, and you have a real desire to help meet those physical and spiritual needs. Being needed and appreciated genuinely matters to you, and it is part of what makes you feel you belong.",
        "The watch-out is over-giving until you feel bitter and depleted, or shutting the gift down and feeling like you do not fit anywhere. The medicine is to give from a full cup, to notice when you need appreciation back, and to ask for it plainly rather than waiting to be read."
      ],
      inlife: "It shows up when you say yes to caring for everyone and resent it under the surface, so before you offer, check whether you actually have the energy to give and be honest when you do not." },
    "20-34": { name: "Charisma", headline: "Magnetic when you are busy doing what you love.",
      paras: [
        "You are here to do what you deeply love and, by living it out loud, to inspire and empower others to do the same. Your shine comes from following your passions simply because you love them, and that authentic zest for life is what draws people in.",
        "The watch-out is shrinking from the spotlight, not seeing yourself as charismatic, or drifting away from the things you are passionate about. The medicine is to reconnect with what lights you up and let yourself be seen doing it, because your charisma is a by-product of genuine engagement."
      ],
      inlife: "It shows up when your energy dips because you are stuck doing work that bores you, so protect real time each week for the thing you love and let people watch you enjoy it." },
    "20-57": { name: "the Brainwave", headline: "Powerful intuition meant to be spoken in the moment.",
      paras: [
        "You carry a primal, in-the-now intuition that is meant to be shared spontaneously, guiding others toward a safer, healthier and more aligned future. When you stay present and trust your instincts, you say the piercing thing people actually need to hear.",
        "The watch-out is second-guessing the download, trying to prove your instinct or editing it until it is watered down, which spirals into anxiety and future fear. The medicine is to build presence through walks without music and unhurried time, then to say the thing even when it feels too soon."
      ],
      inlife: "It shows up when you sense something clearly but talk yourself out of voicing it, so watch for the subtle invitation, a curious glance or an I do not know what to do, and offer what you are getting." },
    "21-45": { name: "Money", headline: "Boss energy, wired to lead and steward resources.",
      paras: [
        "This is the leadership channel, built to command resources, organise material goods and lead communities with real authority. You thrive when you are in charge of how things are distributed, whether that is money, teams or knowledge, and recognition comes when you step confidently into leading without domineering.",
        "The watch-out is control freak mode, micromanaging and tying your self-worth to status or a healthy bank balance. The medicine is to reframe leadership as service, delegate small things and watch them run smoothly, and do the inner work that separates your value from your success."
      ],
      inlife: "It shows up when you refuse to hand anything over and burn out holding it all, so pick one small task to delegate this week and ask your circle honestly whether you empower or overpower them." },
    "23-43": { name: "Structuring", headline: "Genius insight that is often ahead of its time.",
      paras: [
        "Your mind channels its own unique knowing, genius insight that is here to lead us toward a better future. Your work is to believe in the power of what you see, then explain it as simply as possible when the timing is right.",
        "The watch-out is old conditioning that you are a freak, blurting your insight out of timing, or causing confusion when you try to explain. The medicine is to trust your knowing, wait for the right moment, and keep simplifying until others can genuinely follow you."
      ],
      inlife: "It shows up when you share a big idea too early and get blank stares, so sit with your insight, distil it into one plain sentence, and wait for the moment someone is ready to hear it." },
    "24-61": { name: "Awareness", headline: "Sudden knowing that arrives when you make space for it.",
      paras: [
        "Your mind channels sudden understanding and inspires others, constantly turning over spiritual mystery and the bigger questions. When an inner knowing lands, it can genuinely light people up, and part of your gift is following that mystery wherever it leads.",
        "The watch-out is overthinking personal decisions and chasing answers by force, since you cannot control when the knowing appears. The medicine is to balance all that thought with real silence, letting insight come to you rather than gripping for it."
      ],
      inlife: "It shows up when you lie awake trying to think your way to an answer, so step back, take a silent walk or sit without your phone, and let the understanding arrive in its own time." },
    "25-51": { name: "Initiation", headline: "First into the unknown, so others can follow.",
      paras: [
        "You are built to go first, to leap into what has not been tried and let the experience transform you. That drive to master something, to be the best version of yourself, naturally lights a fire under everyone around you.",
        "The watch-out is treating life as a competition you have to suffer through, always measuring yourself against others. The medicine is to move through each challenge as an initiation rather than a battle, so you become a genuine catalyst instead of just chasing the win."
      ],
      inlife: "When a new venture feels daunting, be the one who steps in first and then share honestly what the leap taught you, so your people feel braver too." },
    "26-44": { name: "Suffering", headline: "A gut instinct for what will genuinely help people.",
      paras: [
        "You have an instinctive read on people and a real gift for sensing exactly what product, role or idea will support them. Paired with a heart-centred desire to help, you know how to say things in a way the other person can actually take in.",
        "The shadow shows up when you bend that talent toward your own agenda, nudging people toward what serves you, or when you overwork and stop honouring your own worth. The medicine is to keep your recommendations rooted in their real needs and to guard your own energy as fiercely as you guard theirs."
      ],
      inlife: "Before you pitch or advise someone, pause and ask whether this genuinely serves them, and build in real rest so you are not giving from an empty tank." },
    "27-50": { name: "Preservation", headline: "Leading with your values to nourish and protect others.",
      paras: [
        "You carry a deep compassion for community and family and a real instinct to protect, care for and provide. You are here to pour your integrity into how you lead, shaping things from the top down through the rules, businesses and programmes that look after many people at once.",
        "The shadow is shrinking that gift down to caring for one person at a time, overgiving until you abandon yourself, or backing away from power because leading feels too big. The medicine is to accept that your care lands widest when you lead, so let yourself take the bigger seat."
      ],
      inlife: "When you feel pulled to rescue one person, ask whether a system, guideline or group you set up could look after many, and let yourself step into that visible role." },
    "28-38": { name: "Struggle", headline: "Fighting for change when the why is worth it.",
      paras: [
        "You are here to fight for change that genuinely makes the world better, and you come alive when you challenge something you can see is not right. When you deeply believe in the mission, you have almost bottomless fuel for the fight.",
        "The shadow is losing motivation and letting the gift go unused, or turning that fighting energy inward and creating struggle in your relationships and daily life. The medicine is to keep choosing battles that carry a real why, so your fight has somewhere worthy to go."
      ],
      inlife: "Before you take something on, check that you truly believe in the purpose behind it, and channel your fight toward a cause rather than the people closest to you." },
    "29-46": { name: "Discovery", headline: "Say a full yes, then immerse completely.",
      paras: [
        "You are designed to plunge into experiences without needing a guarantee first, and to find the value in the experience itself. When you commit to the right people and projects, you generate such a whirlwind of life force that failure genuinely drops out of the picture.",
        "The shadow is committing to the wrong things, or throwing yourself in with heavy expectations attached to the outcome. The medicine is to use your gut response to say yes only to what truly lights you up, then let go of the guarantees and give yourself fully."
      ],
      inlife: "When an opportunity arrives, wait for a clear gut yes before committing, then throw yourself in wholeheartedly rather than hedging or half-starting." },
    "30-41": { name: "Recognition", headline: "Feel life deeply, then turn it into creation.",
      paras: [
        "You are here to be deeply moved by life and to pour those big emotions, dreams and desires into something creative that stirs the whole collective. Your imagination runs rich and romantic, and you are meant to enjoy the feeling of wanting without clinging to how it turns out.",
        "The shadow is getting attached to a particular desire and crashing into painful disappointment, or fearing your own feelings and cutting yourself off from creative outlets. The medicine is to let the emotion move through you into your work, savouring the longing itself rather than gripping the result."
      ],
      inlife: "When a strong desire or daydream rises, give it to a creative outlet like writing, music or art, and enjoy the feeling without pinning your happiness to the outcome." },
    "37-40": { name: "Community", headline: "Making everyone in the room feel they belong.",
      paras: [
        "You have a gift for making every single person in a group feel appreciated and equal, and you find real fulfilment in belonging, connecting and building community. People feel held around you because you naturally weave them in.",
        "The shadow is overgiving, and pouring yourself into places where you do not actually feel chosen or appreciated. The medicine is to balance caring for others with genuine rest and self-care, and to give your energy where it is truly wanted."
      ],
      inlife: "When you notice yourself giving hard to a group that does not value you, pull back and reinvest that warmth where you feel chosen, and book in real rest." },
    "42-53": { name: "Maturation", headline: "Right thing, right time, seen through to the end.",
      paras: [
        "You run on divine timing and you are built to complete cycles rather than rush them. Your gift is honouring natural pacing, letting beginnings unfold fully into endings, and showing everyone that growth is cyclical rather than a straight line.",
        "The shadow is the impatience spiral, starting too many things to dodge the discomfort of waiting, or quitting before completion and missing the satisfaction of a finished cycle. The medicine is to remember that the right thing at the wrong time is still the wrong thing, and to wait well."
      ],
      inlife: "When restlessness pushes you to start something new, pause and finish what is already ripening, and check in with your body to sense whether the timing is truly right." },
    "47-64": { name: "Abstraction", headline: "Confusion first, then the insight clicks.",
      paras: [
        "You make sense of the past through reflection, and your mind works in an abstract, dreamy, nonlinear way rather than a tidy logical one. Your superpower is turning personal and collective experience into wisdom and stories that guide other people.",
        "The shadow is getting stuck in mental loops and self-doubt during the confused, swimming-in-fragments phase before things land. The medicine is to trust that the insight will click in its own time, so you can let the pieces float without forcing them."
      ],
      inlife: "When your thoughts feel like a jumble of fragments, resist the urge to force an answer and give the idea room to settle, then share the wisdom once it clicks." },

    // --- The 7 channels not yet in Dan's HD Bible, written fresh in Dan's voice (add to Bible when ready) ---
    "4-63": { name: "Logic", headline: "Doubt that drives you to find the pattern.",
      paras: [
        "This is a mental channel built for logic and understanding. A healthy scepticism keeps asking is this actually true, and your mind works away until it finds the pattern, the formula, the answer that holds up. You are here to bring proof and clarity where others just assume.",
        "The watch-out is turning that doubt inward as anxiety, or pushing your answers on people before they are asked. The medicine is to let the questioning point outward at problems worth solving, and to share your conclusions when there is genuine interest."
      ],
      inlife: "You get stuck in loops trying to be certain before you speak, so write your reasoning down, and offer it when someone actually wants to work the problem through with you." },
    "10-20": { name: "Awakening", headline: "Being fully yourself, right here in the moment.",
      paras: [
        "This channel is about self-love lived out loud in the present. You are here to be who you are, without apology, and to model what it looks like to be at home in yourself. When you commit to your own way of being, you wake other people up to theirs.",
        "The shadow is performing a version of yourself to fit in, or waiting for permission to be fully you. The medicine is to trust that being genuinely yourself, in the now, is the whole point, and that it gives everyone around you permission too."
      ],
      inlife: "You soften yourself to match the room, so pick one setting this week where you let yourself be completely, unmistakably you, and notice who leans in." },
    "12-22": { name: "Openness", headline: "Emotional expression that lands when the mood is right.",
      paras: [
        "This channel gives you real social grace and a gift for expressing feeling, mood and meaning in a way that moves people. You are here to connect, to share what you feel, and to bring beauty and emotional honesty into the room when the timing is right.",
        "The shadow is forcing connection or speaking from a low mood and pushing people away, then retreating. The medicine is to honour your emotional wave, wait for the right moment and the real invitation, and let your expression flow when you are genuinely ready."
      ],
      inlife: "You blurt something in a flat mood and regret how it lands, so when you feel off, give it time, and save the big conversations for when the mood has genuinely lifted." },
    "32-54": { name: "Transformation", headline: "Ambition and drive, aimed at something that lasts.",
      paras: [
        "This channel carries a deep drive to grow, to build and to transform your circumstances. You have an instinct for what has staying power and the ambition to climb, and you are here to turn effort and recognition into real, lasting change for yourself and your people.",
        "The shadow is fear that you are not doing enough, or chasing status for its own sake until you burn out. The medicine is to let your ambition serve something meaningful, and to trust that the right recognition arrives when the work and the timing are sound."
      ],
      inlife: "You push relentlessly and still feel behind, so name what you are actually building towards, and let that why decide which rungs are worth climbing and which to skip." },
    "34-57": { name: "Power", headline: "Pure, instinctive power that lives in the now.",
      paras: [
        "This is a rare channel of raw life force married to sharp intuition. Your power is in the present moment, in doing what you are here to do with your whole energy and trusting the instinct that tells you when and how. When you are busy with what you love, you are a force.",
        "The shadow is scattering that power across too many things, or overriding your intuition with your head. The medicine is to respond to what genuinely lights you up, act on the first clean instinct, and let your energy pour into the things that are truly yours."
      ],
      inlife: "You spread yourself thin and lose your edge, so protect your energy for what you love most, and trust the gut read that tells you what to say yes to." },
    "35-36": { name: "Transitoriness", headline: "A hunger for experience, and the wisdom it leaves behind.",
      paras: [
        "This channel runs on a craving for new experiences and feeling. You are here to taste a great deal of life, to feel it all fully, and to become versatile and worldly through everything you try. Few people gather as much lived experience as you do.",
        "The shadow is restlessly chasing the next thing, or expecting each experience to finally be the one that satisfies. The medicine is to let the experiences move through you, to mine them for the wisdom and the stories, and to share what you have learned rather than grasping for more."
      ],
      inlife: "You jump to the next adventure before digesting the last, so pause after a big experience and ask what it taught you, then let that become something you share." },
    "39-55": { name: "Emoting", headline: "Moods that feed your spirit and your art.",
      paras: [
        "This channel is deeply emotional and creative, here to feel life at full depth and to provoke feeling in others. Your moods are the raw material of your spirit and your art, and you are meant to ride them and express what they open up in you.",
        "The shadow is getting lost in the low end of the wave, or provoking people carelessly when you are down. The medicine is to give your emotions a creative outlet, to ride the wave without acting from the bottom of it, and to trust that your feeling nature is a gift."
      ],
      inlife: "You act from the bottom of a mood and regret it, so when the wave dips, channel it into music, writing or movement instead of a decision or a message." }
  };

  // ---- GATES (standouts render as short gifts) ----
  C.gateStandoutIntro = "Your design activates a specific set of gates, and each one is a gift you carry. These are your standouts, the ones that shape how you show up most in your life and your work.";
  C.gateStandoutOutro = "These are yours for a reason. When you live them on purpose, life stops feeling like effort and starts feeling like you.";
  C.gates = {
    1:  { name: "Creating new things", line: "You carry a spark for beginning things that did not exist before, and you feel most alive when you are pioneering, putting your original mind to work at the leading edge." },
    2:  { name: "A vision for turning ideas into reality", line: "You can take an idea and see exactly how to make it real in the world, mapping out the practical steps because you truly understand how the physical, tangible plane works." },
    3:  { name: "Innovation", line: "The things that irritate you about how humans do things are fuel, because you came here to see past them and dream up the better, newer version that serves everyone." },
    4:  { name: "A logical mind", line: "You bring logic and order where others feel only chaos, and the common sense that seems obvious to you is a real gift that helps everyone around you feel safe." },
    5:  { name: "Marching to your own rhythm", line: "You carry a strong internal sense of your own timing, and when you honour it rather than the world's schedule, things line up seamlessly and land at the best possible moment." },
    6:  { name: "Creating closeness with others", line: "You have a natural way of warming people up and getting through their walls, so lead with that openness and every project or team you touch becomes richer for the real connection." },
    7:  { name: "Natural integrity", line: "Doing the right thing comes naturally to you, and because you hold yourself to such a high standard, others look to you as a role model showing them how to be better." },
    8:  { name: "Being a tastemaker and marketeer", line: "You have a natural knack for sifting through what is out there and finding what is genuinely good, and people trust you to tell them what is worth their time." },
    9:  { name: "Focus and precision", line: "You can see exactly which actions will get you to the outcome you want and which will waste your energy, so you focus your effort with laser precision where it pays off." },
    10: { name: "A love of life", line: "You came here to fall in love with being alive and let that joy spill into everything you do, reminding everyone around you what a gift it is to be here." },
    11: { name: "Being an ideas person", line: "You are a fountain of ideas that arrive out of nowhere, and your gift grows the more you write them down and notice which ones are truly yours to act on." },
    12: { name: "A noticeable voice", line: "The way you phrase and deliver things makes people pay attention, so let your voice keep its own idiosyncratic rhythm and allow yourself to be heard rather than blending into the crowd." },
    13: { name: "Listening and collecting stories", line: "People naturally open up to you, and you gather their experiences and draw out the patterns and lessons within them, turning all those stories into wisdom that gives others real direction." },
    14: { name: "Expanding the good in others' lives", line: "You carry an expansive energy that magnifies everyone's potential, so when you pour your gifts into making others more successful, abundance always flows back to you in spades." },
    15: { name: "Venturing to the extremes", line: "You are drawn to explore the edges of human experience that others avoid, and you bring back the gold and wisdom from those extremes so the rest of us can benefit." },
    16: { name: "Enthusiasm", line: "You are built to get visibly, genuinely excited, and it is contagious, waking people up and making your message land far more widely than if it were blandly shared." },
    17: { name: "Substantiating opinions", line: "You have a natural gift for backing up your logical perspectives with real evidence, so you can show others clearly and convincingly why something is true." },
    18: { name: "Improvement", line: "You have a real knack for seeing how things can be made better, and when you funnel that vision into your own work it lifts your life and everyone around you." },
    19: { name: "Sensing people's needs", line: "You are beautifully sensitised to the world around you, so you can feel what others truly need to live fuller lives, and that sensing shapes the way you show up for them." },
    20: { name: "Truth telling with effervescence", line: "You can cut straight through the noise and call things as they really are, and you do it with such lively, playful energy that people actually want to listen and rethink." },
    21: { name: "A natural instinct for how to control resources", line: "You have a practical instinct for making things actually happen, taking whatever time, money, and skills are available and knowing exactly how to use them to reach the goal." },
    22: { name: "Grace and charm", line: "You have a magnetic sparkle that draws people to you and to whatever you are offering, and it shines most when you let it flow naturally rather than forcing it." },
    23: { name: "Communicating with clarity", line: "You have a wonderful ability to take something complex and explain it simply and coolly, landing the essential truth so cleanly that suddenly it seems obvious to everyone listening." },
    24: { name: "The patience to develop higher perspective", line: "You have a rare patience for turning things over in your mind until they ripen, seeing each situation through clearer, more elevated eyes every single time you return to it." },
    25: { name: "Embracing life with childlike innocence", line: "You have a gift for meeting life with fresh, youthful wonder, moving through the world as though seeing everything for the first time and choosing levity, innocence, and playfulness." },
    26: { name: "Tailoring your message", line: "You have a real talent for phrasing the same message differently for each person so it truly lands, helping people feel the desire for something they genuinely need within themselves." },
    27: { name: "A natural ability to nurture and care", line: "You have a natural gift for knowing just how to care for people and an instinct to do it now, and that warmth is a genuine superpower that makes you stand out." },
    28: { name: "Making the most out of life", line: "You feel deeply how precious and limited our time is, and you turn that awareness into magic by filling life with what matters and spotting where time and energy are wasted." },
    29: { name: "Love of getting involved with others", line: "You love to roll up your sleeves and collaborate, thriving when your energy is truly needed and knowing that what you pour in reaches far more people than just you." },
    30: { name: "The desire to feel deeply", line: "You are here to feel life fully and to remind us that what truly matters is the feeling something creates in us, becoming a catalyst who helps people connect deeply to living." },
    31: { name: "Influential energy", line: "You are naturally influential, the kind of person others watch and want to follow, so when you pour your energy into what you love, your message reaches the right people." },
    32: { name: "A nose for success", line: "You have an intuitive sense for whether something will work out, and when you trust that instinct and point it outward at the world rather than at yourself, it only grows stronger." },
    33: { name: "Contemplation", line: "You are a natural contemplator, and when you give yourself plenty of retreated, unstimulated time alone, your mind produces top-quality thoughts that become genuinely valuable the moment you choose to share them." },
    34: { name: "Magnetic charisma", line: "You carry an endless reserve of charisma, and every time you choose to do only what you genuinely love, your magnetism grows and draws curious people right into your whirlwind." },
    35: { name: "Life's information keepers", line: "You are life's story-keeper, forever adventuring, gathering fresh experiences and passing them on, and every part of life you touch grows richer whenever you freely share what fascinates you." },
    36: { name: "Solving emotional issues", line: "You are here to turn darkness into light, brave enough to sit with the deeper, uncomfortable feelings until you find the way through, and then help others move through theirs." },
    37: { name: "Creating togetherness", line: "Nothing lights you up like being with your people, and you have a real gift for bringing them together, so let yourself build the soul family and community you are made for." },
    38: { name: "A warrior of the light", line: "When things fall apart, you stay clear-headed and go straight to the problem, built to withstand struggle and even thrive in the chaos where most people would falter." },
    39: { name: "Provoking with consciousness", line: "You have a rare knack for the well-timed nudge, saying the thing nobody else will say, and when you provoke with good intent you move people forward and wake them up." },
    40: { name: "Being a giver and a provider", line: "You love to give and provide for your people, and when you build yourself up first, you give from a fuller, more empowered place that lifts everyone around you higher." },
    41: { name: "Seeing all the future outcomes", line: "Your mind works like a probability computer, seeing every possible outcome of a situation, so trust that rare vision to steer yourself and others towards the routes worth taking." },
    42: { name: "Intentionality", line: "You move with real intention, sensing what will actually reap rewards and cutting away the fluff, so trust that clarity and always know your why before you set off." },
    43: { name: "Unique opinions and insights", line: "You see things through a wonderfully specific lens, and those insights come so easily they feel obvious, so formulate them, stay resolute in them, and let people receive your flair." },
    44: { name: "Spotting trends and patterns", line: "You are a keen observer who reads the pattern from past to present and senses what comes next, a deeply entrepreneurial gift you can apply to anything you love." },
    45: { name: "Getting everybody on the same page", line: "When there is a shared goal, you can galvanise people and gather what is needed, unifying everyone into their perfect role so the whole group moves forward and wins together." },
    46: { name: "Love of physical self and its power", line: "You are here to fall in love with your body and its sheer power, and once you feel that through movement you become brilliant at helping others reclaim theirs too." },
    47: { name: "The need to have revelations", line: "You come alive in the realm of mysticism and imagination, and the more you stay open and in awe, the more revelations drop in, so trust that inner antenna completely." },
    48: { name: "Natural purity", line: "You are naturally deep, honest and good, and when you own that purity rather than doubting whether you are enough, you become a beacon that draws the goodness out of others." },
    49: { name: "Altruism", line: "You carry a deep yearning to change the world, and when you back movements where everybody wins, you gently dissolve judgement and help people live with more compassion and openness." },
    50: { name: "Overcoming inertia", line: "You feel your destiny in your bones, and your gift is the bravery to take real steps towards it, modelling a strong sense of right and wrong for us all." },
    51: { name: "Impact", line: "You are built to make a big difference on people and to grow from every shock life throws your way, so let yourself be bold and unafraid to spark real change." },
    52: { name: "Strength in stillness", line: "You come most into your power when you are still, so trust that resting until you are truly moved lets wisdom and clarity flow, making the few actions you take count." },
    53: { name: "A momentum builder", line: "You are the spark that gets things moving, so let that energy build inside you and pour it out when something truly aligned comes along, and watch the dominoes fall." },
    54: { name: "The driver to provide for yourself", line: "You have a natural drive to stand on your own two feet and pull your life forward, and you genuinely love every little step of the climb towards your goals." },
    55: { name: "Generosity of spirit", line: "When life feels good your happiness spills right out of you into everyone around, and your gift is sharing that abundance freely and riding the contrast with deep gratitude." },
    56: { name: "Sharing your takes on the facts of life", line: "You have a powerful conceptual mind that sees what logic cannot yet explain, so hold strong to your progressive beliefs, because the world often needs them before it can measure them." },
    57: { name: "Reading the room", line: "You walk into a room and read everything underneath in a snapshot, so trust that intuition and stay present, because the moment always tells you exactly what you need." },
    58: { name: "Self-created joy", line: "You came here to create joy from the inside, tuning yourself to it like a radio dial, and the more you practise, the more you buoy everyone around you up." },
    59: { name: "Creating unity", line: "You have a real gift for dissolving separation and helping people feel closer, so pour that warmth into your everyday life and watch belonging grow wherever you bring people together." },
    60: { name: "Intolerance for road blocks", line: "Obstacles fire you up rather than defeat you, because you are built to persist past them, and that grit reminds everyone around you that there is nothing we cannot conquer." },
    61: { name: "Inner knowing", line: "You simply know things to your core without knowing how, so when you rest in that inner knowing over the outside noise, it leads you all the way to inner peace." },
    62: { name: "Humble magic", line: "You naturally notice the small things others miss, and your magic lies in stacking those humble little steps, because on you that is exactly what makes the biggest dreams come true." },
    63: { name: "A healthy dose of questioning and skepticism", line: "You never take things at face value, and that healthy questioning is a real strength when you aim it outward at the world rather than inward at your own worth." },
    64: { name: "Concluding", line: "You love seeing things through to the answer and tying up loose ends, and that completing gift is precious, because every ending you finish well sets the stage for the next beginning." }
  };

  // ---- ENVIRONMENTS (pick by chart.environment) ----
  C.environments = [
    { match: ["market"], name: "Markets", headline: "You come alive where things are happening.",
      paras: ["Your design does its best work in what Human Design calls a Markets environment. A place with a current of exchange running through it, people coming and going, energy already moving that you can plug into. Not a silent room, and not chaos either, but somewhere with life in it. A busy cafe, a shared workspace, a kitchen table with people around it, a marketplace of ideas and conversation.",
               "This matters more for you than for most. Put yourself where the energy is already flowing and there is something real to answer, so your engine has something to push against. Sit alone in a silent room all day and you can go flat, and it is not laziness, there is simply nothing there to respond to."],
      try: ["<b>Work near the buzz.</b> A cafe, a shared space, a room with a window onto some life.",
            "<b>Notice where you fill up.</b> Track which rooms leave you energised and which leave you flat.",
            "<b>Bring people into your day.</b> Even a co-working call gives your energy something to answer."] },
    { match: ["cave"], name: "Caves", headline: "You do your best work in your own protected den.",
      paras: ["Your design thrives in a Caves environment, a contained, protected space that is unmistakably yours, with a clear sense of who comes in and who does not. Walls, a door, a corner that belongs to you.",
               "In the open, exposed and interrupted, you scatter. Give yourself a den, and your focus and depth return. Choose the view and the entrance with care, because a cave with the right outlook is where you feel safe enough to go deep."],
      try: ["<b>Claim a den.</b> A room or corner that is yours, with a door you can close.",
            "<b>Control the entrance.</b> Decide who and what gets in, and when.",
            "<b>Mind the view.</b> Point your space at something that settles you."] },
    { match: ["kitchen"], name: "Kitchens", headline: "You thrive where things are being made and mixed.",
      paras: ["Your design does well in a Kitchens environment, a place of preparation and transformation, where ingredients come together and something is actively being cooked up. Warm, a little busy, productive.",
               "Sterile, static rooms dull you. Somewhere with a sense of making, mixing and doing keeps your energy alive and your ideas moving."],
      try: ["<b>Work where things are made.</b> A studio, a workshop, a lively kitchen table.",
            "<b>Keep it warm, not clinical.</b> A bit of life and mess is fuel, not distraction.",
            "<b>Mix your inputs.</b> Let ideas and people cross-pollinate around you."] },
    { match: ["mountain"], name: "Mountains", headline: "You see clearest with height and a long view.",
      paras: ["Your design responds to a Mountains environment, somewhere elevated with a broad outlook, a sense of overview and perspective. High ground, literally or in the way you position yourself.",
               "Down in the thick of it, boxed in, you lose the plot. Give yourself height and distance, a room upstairs, a seat where you can survey the whole scene, and your clarity comes back."],
      try: ["<b>Get some height.</b> A higher floor, a rooftop, a seat with a long view.",
            "<b>Take the overview seat.</b> Position yourself where you can see the whole picture.",
            "<b>Step back to decide.</b> Distance is how you find your perspective."] },
    { match: ["valley"], name: "Valleys", headline: "You settle where things gather and meet.",
      paras: ["Your design does well in a Valleys environment, a gathering place where paths and people converge, a natural meeting point with a sense of containment.",
               "Too exposed or too scattered and you feel unsettled. A place where things naturally come together, a hub, a crossroads, a home base people pass through, is where you feel right."],
      try: ["<b>Set up at a crossroads.</b> Somewhere people and ideas naturally converge.",
            "<b>Make a hub.</b> A base others come to, rather than chasing around.",
            "<b>Feel for the gather.</b> You settle where things meet, not where they scatter."] },
    { match: ["shore"], name: "Shores", headline: "You do best at the edge, where two worlds meet.",
      paras: ["Your design comes alive in a Shores environment, an edge or a threshold, where one element meets another and there is a sense of openness and possibility. Water and land, inside and outside, one world and the next.",
               "Hemmed in on all sides, you feel stuck. Give yourself an edge, a big window, a doorway, a boundary with a view beyond it, and you feel free and clear."],
      try: ["<b>Find an edge.</b> A big window, a threshold, a boundary that opens outward.",
            "<b>Keep an exit in sight.</b> Openness beyond you keeps you clear.",
            "<b>Work at the meeting point.</b> Where two worlds touch is where you thrive."] }
  ];

  // ---- SENSES (pick by chart.sense) ----
  C.senses = [
    { match: ["smell"], name: "Smell", headline: "You are here to sniff out what is real.",
      paras: ["Of the six senses, one runs strongest in each of us, and yours is smell. Take it literally, and also as a gift for discernment. You can sense when something is off, tell the real from the fake, and separate what is worth your time from what is not, in the areas you care about. People come to you to find out what is good, honest and true.",
               "Being a little picky is not fussiness, it is the gift doing its job. Because clear perception is everything for you, a clear nose matters more than you would think. Anything that fogs you up, in your body or your surroundings, dulls the very thing that makes you sharp."],
      try: ["<b>Trust the nose-scrunch.</b> That instant this is not right feeling is real information.",
            "<b>Keep your air clean.</b> Deep breathing and fresh air keep you in your genius.",
            "<b>Give yourself the sniff test.</b> Before you commit, check whether it actually smells right to you."] },
    { match: ["taste"], name: "Taste", headline: "You are here to develop real taste.",
      paras: ["Your strongest sense is taste, the gift of discernment about quality and combination, knowing what goes with what and what is genuinely good.",
               "You refine things. In the areas you care about, you can tell the excellent from the merely fine, and people trust your palate. Cultivating that taste on purpose is part of your path."],
      try: ["<b>Trust your palate.</b> Your sense of what is good is data, not snobbery.",
            "<b>Refine, do not settle.</b> You are meant to develop real quality over time.",
            "<b>Curate your inputs.</b> What you take in shapes what you can make."] },
    { match: ["touch"], name: "Touch", headline: "You know the world through contact.",
      paras: ["Your strongest sense is touch, a gift for reading things and people through direct contact and felt connection. You learn what is true by getting close to it.",
               "Relationships and hands-on contact matter to you more than to most. The right touch, and the right closeness, tell you what no amount of thinking can."],
      try: ["<b>Get hands-on.</b> Learn by handling and doing, not just reading.",
            "<b>Notice contact.</b> Who and what feels right to be near is real information.",
            "<b>Protect your closeness.</b> Choose carefully who gets in close."] },
    { match: ["outer vision", "outer"], name: "Outer Vision", headline: "You read the world by looking outward.",
      paras: ["Your strongest sense is outer vision, a gift for seeing what is actually in front of you, patterns, people, and how things really are out in the world.",
               "You are meant to look outward and take the world in with your eyes, then reflect back what you see. What you observe is often sharper than what others assume."],
      try: ["<b>Look, do not assume.</b> Trust what you actually see over what you expect.",
            "<b>Change your view.</b> New sights feed your clarity.",
            "<b>Report what you notice.</b> Your observations are a gift to others."] },
    { match: ["inner vision", "inner"], name: "Inner Vision", headline: "You see clearest with your eyes half-closed.",
      paras: ["Your strongest sense is inner vision, a gift for insight, imagination and seeing with the inner eye. Your clearest seeing happens inward.",
               "You are meant to trust the pictures, hunches and visions that arrive from within. Give them room, and they guide you truly."],
      try: ["<b>Trust the inner picture.</b> The image that arrives is worth listening to.",
            "<b>Make inward room.</b> Your seeing needs a little space to arrive.",
            "<b>Follow the vision.</b> Let what you see inside shape where you go."] },
    { match: ["feeling"], name: "Feeling", headline: "You read the room through what you feel.",
      paras: ["Your strongest sense is feeling, a fine attunement to atmosphere, mood and the emotional weather of a space or a person.",
               "You feel what is going on before it is said. That sensitivity is a gift, once you learn to tell your own feelings from the ones you are picking up."],
      try: ["<b>Name the feeling.</b> Notice the mood you walk into, and whether it is yours.",
            "<b>Protect your field.</b> Spend time where the atmosphere feels clean.",
            "<b>Trust the read.</b> What you feel about a room is usually accurate."] }
  ];

  // ---- LIVING IT ----
  C.living = {
    workByType: [
      { match: ["manifesting generator"], headline: "Build through people, move on excitement, decide on the wave.",
        paras: ["Your working life runs best when you let yourself be multi-passionate. A few projects at once is not a lack of focus for you, it is your natural shape. Respond to what lands, follow what lights you up, and give yourself permission to drop what has gone flat. The moment work becomes a long list of shoulds, your engine stalls.",
                "Your charisma switches on when you are visibly doing what you love, so being seen in your work is part of the design, not showing off."] },
      { match: ["generator"], headline: "Go deep on what you love, and let it become magnetic.",
        paras: ["Your working life runs best when you stay with one or two things you genuinely love and build real mastery. Respond to what lands rather than chasing, and your energy stays renewable.",
                "When you are lit up and doing the work, people feel it and come to you. Depth, not hustle, is what makes you magnetic."] },
      { match: ["manifestor"], headline: "Initiate boldly, and inform as you go.",
        paras: ["Your working life runs best when you are free to start things and set them in motion, then hand the steady running to others. Rigid routines and being managed will choke you.",
                "Your one move that changes everything at work is to inform. Tell the people your action touches before you move, and the resistance that used to slow you clears."] },
      { match: ["projector"], headline: "Trade wisdom for wealth, and wait to be recognised.",
        paras: ["Your working life runs best when you are recognised and invited for your insight, rather than grinding out volume. You are not trading hours for money, you are cashing in what you see.",
                "Master your craft, make your gift visible, and let the right people invite you in. A few well-placed, well-timed pieces of guidance beat constant output."] },
      { match: ["reflector"], headline: "Choose your environment first, then let clarity come.",
        paras: ["Your working life runs best when the place and the people are right, because you take on so much of what surrounds you. Environment is not a detail for you, it is the whole game.",
                "Give big work decisions a full moon cycle, and build a working life that lets you sample, reflect, and offer back the clarity only you can see."] }
    ],
    workAuthorityGuard: [
      { match: ["emotional", "solar"], text: "Your emotional authority means you should never sign, hire, or launch on a high. Sleep on the big business calls." },
      { match: ["sacral"], text: "Your sacral authority means you commit only to the work that gets a real gut yes. Push past a gut no and the energy drains." },
      { match: ["splenic", "spleen"], text: "Your splenic authority speaks once, so catch the first instinct about a deal or a hire and act on it before the mind talks you out of it." },
      { match: ["ego", "heart"], text: "Your ego authority means you back only what you genuinely want and have the will to see through. If the want is not real, the commitment will not hold." },
      { match: ["self", "projected", "g center", "g-center"], text: "Your self-projected authority means you should talk the big calls out loud with a trusted ear, and listen to what you hear yourself say." },
      { match: ["mental", "environ", "sounding"], text: "Your mental authority means you decide best out loud, over time, and in the right environment, never on the spot." },
      { match: ["lunar", "none"], text: "Your lunar authority means big business calls need a full moon cycle before you commit." }
    ],
    workProfileGrowth: {
      "1": "With a line 1, your credibility comes from real depth. Do the study, become genuinely expert, and let that solid ground be what people trust.",
      "2": "With a line 2, your best work is a natural gift others call you out for. Protect your time to develop it, and let the right calls pull you into the open.",
      "3": "With a line 3, you find what works by trying things. Treat every misfire as research, and let your hard-won, real-world knowing become the thing people pay for.",
      "4": "With a line 4, your best clients, collaborators, and opportunities arrive through the people who already know and trust you. Warm network beats cold funnel every time. Do the deep work to become genuinely expert, then let your people carry you to the rooms you belong in.",
      "5": "With a line 5, people project big expectations onto you. Show up with a real solution when you are genuinely called, and be careful only to promise what you can deliver.",
      "6": "With a line 6, you are building toward being a trusted role model. Let the earlier years be experiments, and trust that your authority grows as you do."
    },
    relByType: [
      { match: ["manifesting generator"], headline: "Warm and loyal, and better when you take your time.",
        paras: ["You love with your whole engine, and you are built to share your life with people. You give a lot, and you want a bond where the other person shows up too."] },
      { match: ["generator"], headline: "Steady and devoted, and best with a real yes.",
        paras: ["You are built for deep, lasting connection. Let your gut guide who you get close to, and give your energy to the people who genuinely light you up."] },
      { match: ["manifestor"], headline: "Independent and warm, and smoother when you keep people informed.",
        paras: ["You need room to be your own person inside a relationship. The bond stays strong when you let your people in on what you are doing, rather than going dark and surprising them."] },
      { match: ["projector"], headline: "Deep and seeing, and best when you feel truly recognised.",
        paras: ["You thrive with a partner who genuinely sees and values you. Wait for the ones who recognise your gift, rather than working to earn a place."] },
      { match: ["reflector"], headline: "Sensitive and reflective, and shaped by who you are near.",
        paras: ["You take on so much of the people closest to you, so choosing them with care is everything. The right people leave you feeling more yourself, not less."] }
    ],
    relAuthority: [
      { match: ["emotional", "solar"], text: "Your emotional authority asks you to go slowly at the start. The first rush is not clarity. Let someone move through a few of your emotional waves before you commit, and watch how they feel to you across your highs and your lows. The right person still feels good when the initial buzz has faded." },
      { match: ["sacral"], text: "Your sacral authority knows in the body. Notice whether being near this person is a real gut yes or a polite maybe, and trust the answer your gut gives you." },
      { match: ["splenic", "spleen"], text: "Your splenic authority reads people in an instant. Trust that very first sense of someone, because it is rarely wrong and it rarely repeats itself." },
      { match: ["ego", "heart"], text: "Your ego authority commits from genuine want. Give your heart only where you truly want to, not where you feel you should." },
      { match: ["self", "projected", "g center", "g-center"], text: "Your self-projected authority hears its truth out loud. Talk about how a relationship feels with a trusted friend, and listen to what you say." },
      { match: ["mental", "environ", "sounding"], text: "Your mental authority needs time and the right setting. Do not decide about someone in the heat of the moment, let it settle over conversations and different rooms." },
      { match: ["lunar", "none"], text: "Your lunar authority asks for a full cycle. Let a new relationship move through about a month before you commit to where it is going." }
    ],
    relOpenG: "Because your identity centre is open, you take on the flavour of whoever you spend the most time with. Choose your closest people with care, because they genuinely shape who you become.",
    relDefinition: {
      "split": "And because you come in two halves, connection is part of how you feel whole. That is not neediness, it is design. Just make sure the people you lean on are ones who leave you more yourself, not less.",
      "single": "And because your definition is whole on its own, you do not need a relationship to complete you. You get to choose company for joy, which makes for a cleaner, freer kind of love."
    },
    driftIntro: "Every design has its predictable ways of going sideways. Here are yours, so you can spot them before they cost you much.",
    driftByType: [
      { match: ["manifesting generator"], items: [
        { h: "Saying yes on a high", p: "You commit in a rush of excitement and regret it once the wave settles. The fix is always the same, sleep on it." },
        { h: "Pushing instead of responding", p: "You force a thing that is not answering back, and the harder you push the more frustrated you get. Pull your energy back and wait for the real pull." },
        { h: "Busy for the sake of busy", p: "You fill the day with motion that is not actually satisfying. Point your energy at what you love and let the filler go." }
      ] },
      { match: ["generator"], items: [
        { h: "Saying yes from the head", p: "You agree to something your gut never said yes to, and the energy slips away. Wait for the real response." },
        { h: "Going wide instead of deep", p: "You start too many things and master none. Choose the one or two that light you up and go deep." },
        { h: "Ignoring the flat", p: "You keep pushing work your body has gone cold on. Flat energy is information, not laziness." }
      ] },
      { match: ["manifestor"], items: [
        { h: "Moving without informing", p: "You act first and tell people after, and hit resistance you could have cleared. Inform, then move." },
        { h: "Letting anger build", p: "You swallow the friction until it flares. Anger is a signpost that your autonomy has been squeezed, reclaim it early." },
        { h: "Grinding past the wave", p: "You keep going when the impulse has passed. Move in bursts, then rest." }
      ] },
      { match: ["projector"], items: [
        { h: "Pushing your way in", p: "You offer your gift where it was not invited, and meet bitterness. Wait for the recognition, then step in." },
        { h: "Working like a Generator", p: "You grind for hours to prove your worth and burn out. You are valued for what you see, not for how much you do." },
        { h: "Giving energy to the wrong people", p: "You pour yourself into rooms that do not truly want your guidance. Save it for where you are genuinely wanted." }
      ] },
      { match: ["reflector"], items: [
        { h: "Deciding too fast", p: "You commit before the picture has settled, and lose your clarity. Give the big ones a full moon cycle." },
        { h: "Staying in the wrong room", p: "You linger somewhere unhealthy and take on its weight. Change your environment sooner." },
        { h: "Expecting yourself to be consistent", p: "You judge yourself for feeling different each day. That fluidity is the design, not a fault." }
      ] }
    ],
    driftChannel: {
      "37-40": { h: "The lopsided bargain", p: "You over-give and build silent resentment. Let people give back, and renegotiate the deals that have stopped being fair." },
      "20-34": { h: "Busy for the sake of busy", p: "You fill the day with motion that is not actually satisfying. Point your energy at what you love and let the filler go." },
      "34-20": { h: "Busy for the sake of busy", p: "You fill the day with motion that is not actually satisfying. Point your energy at what you love and let the filler go." }
    },
    driftOpenCentre: {
      Spleen: { h: "Holding on too long", p: "Your open spleen keeps you in things past their time. Practise the small, regular letting go before the big one is forced on you." },
      Ego: { h: "Over-promising to prove yourself", p: "Your open heart can make deals to measure up. You have nothing to prove, only commit to what you actually want." },
      G: { h: "Losing your direction in other people", p: "Your open G takes on the direction of whoever you are around. Come back to the places and people that bring out the real you." },
      Root: { h: "Rushing to be free of pressure", p: "Your open root makes you hurry to clear the to-do list. There is no real rush, act under pressure without being ruled by it." },
      SolarPlexus: { h: "Keeping the peace at your own cost", p: "Your open solar plexus avoids confrontation to smooth the room. Say the true thing, kindly, rather than swallowing it." },
      Ajna: { h: "Pretending to be certain", p: "Your open ajna feels pressure to have it all figured out. It is fine to stay open and hold several views." },
      Head: { h: "Answering everyone's questions", p: "Your open head takes on mental pressure that is not yours. Let go of the questions you were never meant to solve." },
      Throat: { h: "Talking to fill the silence", p: "Your open throat can speak to be noticed. Let your voice find its timing, and speak when you are genuinely invited." }
    },
    sevenDayIntro: "Reading about your design is one thing. Feeling it is another. Give this a week. One small practice a day, no pressure to be perfect. At the end, you will have felt your own wiring rather than just read about it.",
    sevenDayByType: [
      { match: ["manifesting generator"], days: [
        { h: "Day 1, respond", p: "Notice one thing you respond to, versus one thing you try to force into being. Move on the response, leave the force." },
        { h: "Day 2, sleep on it", p: "Take one decision you would normally make on the spot and hold it overnight. Notice how it feels in the morning." },
        { h: "Day 3, inform first", p: "Before you act on something that affects others, tell them first. Watch how much smoother it goes." },
        { h: "Day 4, follow the charge", p: "Do the thing that lights you up most, and let one should-do fall off the list." },
        { h: "Day 5, honour the bargain", p: "Give where it is reciprocal. Say no, once, to a give that has tipped too far to one side." },
        { h: "Day 6, let one thing go", p: "Release one small thing, task, habit, or commitment, that you have been holding past its time." },
        { h: "Day 7, read your gauges", p: "Look back over the week. Where did satisfaction show up, and where did frustration. Follow the first, adjust the second." }
      ] },
      { match: ["projector"], days: [
        { h: "Day 1, wait for it", p: "Notice one thing you were genuinely invited into, versus one you pushed into. Feel the difference in your body." },
        { h: "Day 2, catch the flicker", p: "Trust your very first instinct in a new moment, and act on it before you talk yourself out of it." },
        { h: "Day 3, work in a burst", p: "Do your focused work in one intense two to four hour block, then stop and do something that lights you up." },
        { h: "Day 4, rest before you crash", p: "Go to bed before you are tired, and take an hour of solo wind-down. Notice how much sharper you feel." },
        { h: "Day 5, hold your advice", p: "Wait to be asked before you offer guidance. Where no invitation is needed, express yourself freely." },
        { h: "Day 6, recognise yourself", p: "Name one thing you are genuinely good at, out loud, without waiting for anyone else to say it first." },
        { h: "Day 7, read your gauges", p: "Look back over the week. Where did success and recognition show up, and where the bitterness. Follow the first, adjust the second." }
      ] },
      { match: ["manifestor"], days: [
        { h: "Day 1, honour an urge", p: "Notice one genuine urge to act or create, and follow it, versus one thing you are doing out of habit." },
        { h: "Day 2, inform first", p: "Before you act on something that affects others, tell them first. Watch how much of the usual resistance melts away." },
        { h: "Day 3, initiate cleanly", p: "Start one thing you have been waiting for permission to start. You do not need the sign, just begin." },
        { h: "Day 4, let anger move", p: "When frustration or anger rises, name it and give it a healthy outlet, rather than swallowing it." },
        { h: "Day 5, protect your freedom", p: "Say a clear no to one thing that fences you in, and keep the space it opens." },
        { h: "Day 6, rest before empty", p: "Go to bed before you are wrung out, and take an hour to let your energy settle." },
        { h: "Day 7, read your gauges", p: "Look back over the week. Where did peace show up, and where the anger. Follow the first, and inform more where the second turned up." }
      ] },
      { match: ["reflector"], days: [
        { h: "Day 1, who am I today", p: "Open the day by asking what your vibe is, and let yourself move through whatever moods arrive." },
        { h: "Day 2, let it ripen", p: "Take one bigger question and agree to sit with it across the coming days, rather than answering now." },
        { h: "Day 3, mind your environment", p: "Spend part of the day in a place that feels genuinely good, and notice how differently you feel there." },
        { h: "Day 4, wash it off", p: "Take real alone time and consciously release what you have picked up from other people." },
        { h: "Day 5, one honest read", p: "Trust your sense that something is on or off in a room, and let it guide one small choice." },
        { h: "Day 6, sleep in your own aura", p: "Where you can, sleep alone and go to bed early, to clear the day and wake up as yourself." },
        { h: "Day 7, read your gauges", p: "Look back over the week. Where did delight and surprise show up, and where the disappointment. Follow the first, adjust the second." }
      ] },
      { match: ["generator"], days: [
        { h: "Day 1, respond", p: "Notice one thing you respond to, versus one thing you try to force into being. Move on the response, leave the force." },
        { h: "Day 2, ask your gut", p: "Have someone put a real yes-or-no question to you, and answer from the first gut sound, before the mind edits it." },
        { h: "Day 3, clear a dead tree", p: "Find one draining task and drop it, and resist the urge to immediately fill the space it leaves." },
        { h: "Day 4, follow the charge", p: "Do the thing that genuinely lights you up most, and let one should-do fall off the list." },
        { h: "Day 5, guard your energy", p: "Say a clean no to one thing you were only doing because you have the energy to spare." },
        { h: "Day 6, feed your senses", p: "Savour your food, move to music, walk barefoot, and let your body lead for a while." },
        { h: "Day 7, read your gauges", p: "Look back over the week. Where did satisfaction show up, and where the frustration. Follow the first, adjust the second." }
      ] }
    ],
    sevenDayGeneric: {
      respondByStrategy: [
        { match: ["invitation"], h: "Day 1, wait for it", p: "Notice one thing you were genuinely invited into, versus one you pushed your way into. Feel the difference." },
        { match: ["inform"], h: "Day 1, inform first", p: "Before you act on something that affects others, tell them first. Watch the resistance clear." },
        { match: ["lunar", "cycle"], h: "Day 1, slow it down", p: "Take one decision you would rush and let it sit. Notice what a little time reveals." },
        { match: ["respond"], h: "Day 1, respond", p: "Notice one thing you respond to, versus one thing you force into being. Move on the response." }
      ],
      authDay: [
        { match: ["emotional", "solar"], h: "Day 2, sleep on it", p: "Take one decision you would normally make on the spot and hold it overnight. Notice how it feels in the morning." },
        { match: ["sacral"], h: "Day 2, ask your gut", p: "Have someone put a real yes-or-no question to you and answer from the first gut sound." },
        { match: ["splenic", "spleen"], h: "Day 2, catch the flicker", p: "Notice your very first instinct in a new situation and act on it before the mind edits it." },
        { match: ["ego", "heart"], h: "Day 2, want-check", p: "For one choice, ask what do I actually want here, and only commit if the will is real." },
        { match: ["self", "projected", "g"], h: "Day 2, decide out loud", p: "Talk one choice through with a trusted ear and listen to what you say." },
        { match: ["mental", "environ"], h: "Day 2, think it out loud", p: "Talk a decision through in two different settings and notice where you feel clear." },
        { match: ["lunar", "none"], h: "Day 2, let it ripen", p: "Take one big question and agree to sit with it across the cycle before answering." }
      ],
      rest: [
        { h: "Day 3, mind your environment", p: "Spend part of the day in the kind of place that suits your design, and notice the shift." },
        { h: "Day 4, follow what lights you up", p: "Do the thing that genuinely excites you most, and let one obligation fall away." },
        { h: "Day 5, one honest no", p: "Say a clean no to one thing that is not really yours to carry." },
        { h: "Day 6, let one thing go", p: "Release one small thing you have been holding past its time." },
        { h: "Day 7, read your gauges", p: "Look back over the week. Where did your signature show up, and where the not-self. Follow the first, adjust the second." }
      ]
    },
    nextSteps: {
      intro: "Your Blueprint is yours to keep and come back to whenever you like. If it has lit something up and you want to take it further, here are the two doors.",
      doors: [
        { eyebrow: "Learn it fully", title: "Cosmic Blueprint", desc: "Dan's Human Design course. Learn to read and truly live your whole design, at your own pace, with the frameworks to actually apply it to your life and work.", cta: "Explore Cosmic Blueprint", href: "https://dannybunny.co/cosmic-blueprint" },
        { eyebrow: "Go one to one, by application", title: "In Your Pocket", desc: "One-to-one coaching with Dan, for your life and your business. Whatever season you are in, we work through it together, with the honest support and clarity to help you move well.", cta: "Apply for In Your Pocket", href: "https://dannybunny.co/pocket" }
      ]
    }
  };

  // ---- BUSINESS (its-own-chapter mode; from HD Business Magic) ----
  C.business = {
    intro: [
      "This is where your design becomes a way of working. If you are building something of your own, these are the moves that fit how your energy is actually wired, rather than the generic, one-size-fits-all business advice out there. We are all built differently, so we are all meant to run our businesses differently too.",
      "And this is not only for business owners. The same wiring shapes how you create content, how you build visibility, how you grow a career, and how you show up as a personal brand. Wherever you are putting yourself out into the world, this is how to do it as you."
    ],
    byType: [
      { match: ["manifesting generator"], superpower: "Speed and range. You can hold several offers at once, learn fast, and move the moment something is a real yes. You are built to fuse things no one has fused before and make a living out of the blend.",
        contentStyle: "Show yourself in motion, doing the things you love, across your several lanes. Your enthusiasm is the marketing. People buy the energy of someone lit up and doing, so let them watch you work.",
        businessApproach: "Run more than one thing on purpose, and let the flat ones drop. Respond to what the market brings you rather than forcing a rigid plan, and keep informing the people your moves affect.",
        offers: "A suite rather than a single product. Bundles, memberships, and multi-format offers suit you, because they let you use your whole range without boxing you into one thing.",
        launch: "Fast and from excitement. You can go from idea to live quickly, so launch on a real yes, tell your people first, and iterate in the open rather than perfecting behind closed doors." },
      { match: ["generator"], superpower: "Sustainable, magnetic depth. You build genuine mastery and a body of work that draws people in over time, without chasing.",
        contentStyle: "Show the craft. Depth, process, and the work you love, consistently. Your steadiness and obvious enjoyment are what make people trust and follow you.",
        businessApproach: "Pick one or two core offers and go deep. Respond to demand rather than forcing launches, and let word of mouth compound.",
        offers: "A signature offer you refine over years, plus a natural next step for the people who want more of you.",
        launch: "Steady and responsive. Open the doors when there is real demand answering back, rather than manufacturing urgency." },
      { match: ["projector"], superpower: "Insight and guidance. You see the person, the system, the bottleneck, and you can name the one move that changes everything.",
        contentStyle: "Share what you see. Frameworks, diagnoses, the clarity others miss. Your content is the invitation, it lets the right people recognise you and ask you in.",
        businessApproach: "Sell your seeing, not your hours. Position yourself as the guide, make your gift visible, and let recognition bring the right clients.",
        offers: "High-value, low-volume. Advisory, intensives, and premium one-to-one work suit you far better than high-output, low-price grind.",
        launch: "By invitation and recognition. Build visibility for your insight, then let the demand pull the offer open rather than pushing it." },
      { match: ["manifestor"], superpower: "Initiation. You can start movements, brands, and categories from nothing, and get others moving.",
        contentStyle: "Announce and provoke. Big ideas, bold positions, the thing you are starting. You are here to catalyse, so let your content wake people up.",
        businessApproach: "Start it, set it in motion, then bring in people to run the steady parts. Inform your audience and team before big moves so support replaces resistance.",
        offers: "Bold, category-defining offers you launch and then delegate the running of.",
        launch: "Powerful and declarative. Announce clearly, inform everyone your launch touches, then move." },
      { match: ["reflector"], superpower: "Reflection and discernment. You can read the health of a market, a community, or a brand, and offer back a clarity no one inside it can see.",
        contentStyle: "Reflect and reveal. Share what you notice about the field, the trends, the health of things. Your perspective is rare and valuable.",
        businessApproach: "Choose your environment and community with great care, because they shape everything for you. Give big business decisions a full cycle.",
        offers: "Work that uses your gift for reflection, and that lets you sample and move rather than locking you into one fixed thing.",
        launch: "Slow and considered. Let a launch decision move through a full cycle, and only build in communities that feel healthy to you." }
    ],
    pillarsByLine: {
      "1": { name: "The Investigative Genius", para: "Your content pillar is depth. Teach the thing you have properly studied, share the research and the why beneath the what, and let your credibility come from genuinely knowing your stuff." },
      "2": { name: "The Nurturing Intuitive", para: "Your content pillar is natural gift. Share the thing that comes easily to you, the talent people already call you out for, and let the right audience draw it into the open." },
      "3": { name: "The Relatability Icon", para: "Your content pillar is real experience. Share what you have tried, what flopped, and what you learned, because your lived, tested knowing is exactly what makes people trust you." },
      "4": { name: "The Magnetic Mentor", para: "Your content pillar is relationship. Build warmth and connection with your audience, because your best opportunities come through the people who know and trust you. Talk with your community, not at them." },
      "5": { name: "The Paradigm Shifter", para: "Your content pillar is solutions. People come to you expecting answers, so share practical fixes and fresh frameworks, and be careful to promise only what you can deliver." },
      "6": { name: "The Guiding Sage", para: "Your content pillar is the long view. Share the wisdom and perspective you have earned, and let yourself grow into the role-model voice your audience already senses in you." }
    }
  };

  // ---- TYPE DEEP DIVE (per type: in love, at work, daily practice, six tips, poetic line) ----
  C.typeDeep = [
    { match: ["manifesting generator"],
      inLove: { headline: "Wait for the real yes, then give it everything.",
        paras: [
          "In love you are tempted to break the ice and make things happen. The magic comes when you resist the chase, set the excitement aside, and only move with someone you have a genuine gut feeling about. Let that inner confirmation arrive before you commit.",
          "When you do wait for that clarity, no one is more determined or wholehearted than you. Once you are truly in, you are all in, and it is a real gift to be on the same team as you."
        ] },
      atWork: { headline: "Multi-talented, versatile, and always on the move.",
        paras: [
          "At work you balance the two halves of your nature. The Generator in you loves committing to work that needs real, sustained energy. The Manifestor in you loves starting new things and moving on to fresh ground. You need plenty of freedom and flexibility to be a pioneer wherever you work, and a monotonous nine-to-five will slowly dim your sparkle.",
          "You may hear a lot that you only wanted it twenty seconds ago. That was then, this is now. When you respond to something with a real gut yes and then inform the people around you, you move as an unstoppable force towards what you actually want."
        ] },
      dailyPractice: { headline: "Clear one dead tree, and leave the space open.",
        intro: "You are a natural magnet, drawing in what you want. The trick is to live strategically and keep some open space in your days. When you are constantly busy, your energy is maxed out and there is no room for anything new to arrive. Think of your days like a forest. Some activities are thriving trees, others are dead ones still taking up space. To make room for something new, you do not plant more seeds in a crowded forest, you clear a dead tree.",
        steps: [
          "<b>Set a timeframe.</b> Take two weeks to a month to simply notice how your body reacts through your day, and make a note when it is hard to tell.",
          "<b>List and assess your tasks.</b> Write down your daily tasks, notice your body's response to each, and find one you can drop to open up some space.",
          "<b>Use the open space mindfully.</b> When free time arrives, tune into your body and what is around you, move until something feels right, then inform people and spend the time there.",
          "<b>Practise with yes-or-no questions.</b> Have people ask you simple ones, so you sharpen your ear for your own gut truth.",
          "<b>Keep others informed.</b> Let your people know what you are excited about and what you are losing interest in, so things stay clear and open.",
          "<b>Embrace playful productivity.</b> Let go of needing to be busy all the time, and reach for the hobbies that feel like play whenever boredom hits."
        ] },
      sixTips: [
        { h: "Tap into frictionless action", p: "Let go of mental impulses and act on your sacral response instead." },
        { h: "Trust your gut", p: "Follow the gut reactions and sensations, and embrace living in a constant state of response." },
        { h: "Surrender to your true nature", p: "Let your sacral guide the path, and your purpose unfolds with far less effort." },
        { h: "Navigate frustration", p: "When it rises, pause and reassess, and practise waiting joyfully for the right thing to come to you." },
        { h: "Conserve energy for deep satisfaction", p: "Spend your energy wisely through the day, so you feel genuinely fulfilled and rest well at night." },
        { h: "Embrace waiting to respond", p: "Your magnetic aura draws people and opportunities, so let yourself receive and respond to what fits." }
      ],
      poeticLine: "As a Manifesting Generator, it is OK not to finish what you started.",
      affirmations: [
        "I follow what lights me up, and I let it change.",
        "My gut knows before my mind does, and I trust it.",
        "I am allowed to be more than one thing.",
        "I sleep on the big decisions and wait for my clarity.",
        "I inform the people I love, then I move.",
        "Good tired at night means I spent my day well.",
        "I do not have to finish everything I start."
      ] },

    { match: ["projector"],
      inLove: { headline: "You bloom when you are truly seen and invited.",
        paras: [
          "In love you need to be genuinely noticed and recognised for who you are, not slotted into a role. You are not built with a constant reserve of energy, so the right partner sees your need for rest and does not mistake it for laziness. Words of appreciation, and being asked for your insight, land like love letters.",
          "Choose someone whose own energy nourishes you both, and who invites you in rather than telling you what to do. You bring the balance and the bigger picture, and when you feel valued, you shine. You can function alone, but you are made to grow and flourish through real connection."
        ] },
      atWork: { headline: "You are here to guide, not to grind.",
        paras: [
          "At work it is easy to be overshadowed by busier, more energetic types, which is exactly why a guiding or observing role suits you. You see how energy is being used and where the potential is being missed, and that insight is your real value. You are not tied to sacral energy, so you are built to advise and direct rather than execute all day.",
          "Your sweet spot is two to four hours of focused, high-impact work, then time for the things that light you up. Where the busy types do the doing, you earn recognition for your guidance. Wait to be recognised and invited for the big roles, and let bitterness be your signpost that you have been pushing or overexerting instead."
        ] },
      dailyPractice: { headline: "Follow your fascination, work in bursts, and rest before you crash.",
        intro: "You are not built to grind through a long day. You are built to see, to guide, and to spend your best energy in short, potent stretches. This little rhythm keeps you sharp and recognised, rather than drained and overlooked.",
        steps: [
          "<b>Start the day with curiosity.</b> Ask what fascinates me today, and follow that with real enthusiasm.",
          "<b>Let your interests evolve.</b> Do not box them into logic. Be genuine in what pulls you, and leave judgment at the door.",
          "<b>Work in focused bursts.</b> Two to four hours of intense, productive work is your sweet spot. A timer is your friend.",
          "<b>Make rest a priority.</b> Notice your body's signals for downtime and actually heed them, before you crash.",
          "<b>Hold your advice until you are asked.</b> Everywhere else, express yourself freely, but let the big guidance wait for a real invitation."
        ] },
      sixTips: [
        { h: "Wait for the right invitations", p: "Do not chase recognition. Focus on your passions, and the correct invitations arrive naturally, at the right time and from the right people." },
        { h: "Stand firm in who you are", p: "Be cautious of invitations that do not fit your genuine nature, and feel free to refuse them. Hold on to your authentic essence." },
        { h: "Patience and trust", p: "Let go of the fear of waiting. Trust that the right opportunities and people will arrive, and let your strategy guide you to real recognition." },
        { h: "Master the art of rest", p: "Prioritise self-nurturing and give yourself the rest you need. Go to bed before you are tired, and build a peaceful wind-down." },
        { h: "Recognise yourself first", p: "Cultivate deep self-recognition and respect. When you value yourself, your aura naturally draws the right people and opportunities in." },
        { h: "Embrace your unique aura", p: "Your focusing, penetrating aura lets you truly see and understand others. Embrace your extraordinary curiosity, it is your gift." }
      ],
      poeticLine: "As a Projector, you are not trading time for money, you are cashing in wisdom for wealth.",
      affirmations: [
        "I wait for the invitation, and the right doors open.",
        "I am valued for what I see, not for how much I do.",
        "My rest is not laziness, it is how I stay sharp.",
        "I recognise myself first, and the right people follow.",
        "I guide, I do not grind.",
        "My curiosity is my compass.",
        "I let myself be seen."
      ] },

    { match: ["manifestor"],
      inLove: { headline: "You are the initiator, so take the reins and keep informing.",
        paras: [
          "In love you are the one who breaks the ice and gets things moving, and that suits you perfectly. Take the reins early, and say out loud, right at the start, how much freedom of action you need. A partner who understands that, and does not try to fence you in, gets a devoted and generous you in return.",
          "Your energy is sharp and it lands, so the one habit that changes everything is informing. Tell your partner what you are about to do before you do it, even the small things. It dissolves the conflicts neither of you saw coming, and it turns your independence into something they can trust rather than brace against."
        ] },
      atWork: { headline: "Unstoppable when nobody is fencing you in.",
        paras: [
          "At work you are a born doer, and when you have the freedom to move on your own terms, you are about as productive as a person can be. You are a natural initiator, and you get others moving too. A rigid nine-to-five with someone hovering over your flow is the fastest way to dim you.",
          "The catch is that your energy can come across as forceful or pushy without you meaning it to. So inform people, bring them along, let them know what is coming. Others do not work the way you do, and a bit of a heads-up turns your impact from something people resist into something they get behind."
        ] },
      dailyPractice: { headline: "Honour the urge, speak it, then rest.",
        intro: "You run on urges, sudden sparks to act or create, and on bursts of intense energy followed by a real need to stop. Your practice is to trust those urges, give them a voice, and protect your rest, so your power stays clean instead of building into frustration.",
        steps: [
          "<b>Set a timeframe.</b> Take two weeks to a month and practise informing as often as you can, until it becomes second nature.",
          "<b>Tune into your urges.</b> Notice the sudden pulls to act or create. Your best moves come from honouring these, not from talking yourself out of them.",
          "<b>Speak the spark.</b> Your job is to voice the urge, not to force it into a fire. Say it out loud and let it land where it lands.",
          "<b>Protect rest and solitude.</b> Build real alone time into your days, and go to bed before you are running on empty, giving yourself an hour to wind down.",
          "<b>Meet resistance with more informing.</b> When you hit friction, fatigue or crossed wires, do not push harder, inform more. It smooths the path back into flow."
        ] },
      sixTips: [
        { h: "Master the art of initiation", p: "Trust the impulses coming from your defined motor centres. Initiate without waiting for a sign or an invitation, and watch your power come to life." },
        { h: "Practise informed communication", p: "Use your strategy of informing to dissolve resistance. Share the plain information before you act, and you build trust and ease wherever you go." },
        { h: "Meet anger with awareness", p: "Anger is your natural response to being blocked. Rather than swallowing it, learn its triggers and give it a healthy way out." },
        { h: "Honour your rhythms", p: "Respect the cycle of intense bursts followed by real rest. Trust that the right moment to act will arrive, and act when the genuine energy is there." },
        { h: "Own your independence", p: "Do not shrink your autonomy. Take responsibility for starting your own path, share your intentions openly, and back yourself to make it happen." },
        { h: "Embrace your impactful aura", p: "Your presence, words and actions land on people, often more than you realise. Recognise that as a gift, and use it with care." }
      ],
      poeticLine: "As a Manifestor, you are the spark and the starter, the scout for a new world. Burst forth.",
      affirmations: [
        "I do not need permission to begin.",
        "I inform the people around me, then I move.",
        "My anger is information, and I let it move through cleanly.",
        "I honour the urge, give it a voice, and let it go.",
        "My need for freedom is not a flaw, it is my design.",
        "I rest before I am empty, so my power stays clean.",
        "My impact is real, and I use it with care."
      ] },

    { match: ["reflector"],
      inLove: { headline: "Be seen for you, and take a full cycle for the big calls.",
        paras: [
          "In love you long to be seen as your own true self, not as a mirror of whoever you are with. Because you take on the people around you, real alone time is how you tell whether the love is genuinely yours or just a reflection of your partner. A relationship is right for you when you feel consistently good about who you are inside it.",
          "Give the big decisions time, ideally a full lunar cycle, and talk them through as you go. The people worth keeping are the ones who happily wait for your rhythm rather than rushing you. Protect your own space for choosing, especially if your partner likes to lead."
        ] },
      atWork: { headline: "You are the barometer, so the right environment is everything.",
        paras: [
          "At work you reflect the energy around you, which makes a healthy environment non-negotiable. In the right place, you become the barometer of the whole team, sensing when something is off before anyone can name it, and that read is genuinely valuable. In the wrong place, you feel the wrongness in your body first.",
          "Your roles can range widely, from leading to advising to holding a community together. What you need is the freedom to give honest feedback, to follow your intuition, and to rest when you need to. If a job consistently leaves you feeling bad about yourself, treat that as your signal that it is time for a change."
        ] },
      dailyPractice: { headline: "Ask who you are today, feel it, and let it pass.",
        intro: "You are a cosmic chameleon, made to sample all of life's weather and let none of it stick as a label. Think of yourself as the sky, welcoming the storm and the sunset alike, amplifying their beauty, then returning to your own open, clear self. This little rhythm keeps you sampling life without getting swept away by it.",
        steps: [
          "<b>Start with a check-in.</b> Open the day by asking, what is my vibe today, and be ready to move through different moods as it unfolds.",
          "<b>Keep a one-line mood memo.</b> At the end of the day, jot a single line about how the day felt, artsy, tender, buzzing, tired, whatever it was.",
          "<b>Release the day's feelings.</b> Acknowledge what you took on, then consciously let it go, so you do not carry other people's weather to bed.",
          "<b>Spend time in your happy places.</b> Seek out the spots and people where you feel most real, and let them recharge you.",
          "<b>Sleep in your own aura.</b> Where you can, sleep alone and go to bed before you are tired, to clear the day's influences and wake up as yourself."
        ] },
      extras: [
        { placement: "centres", eyebrow: "Your open design", headline: "The only type with every centre open.",
          paras: [
            "You are the rarest design of all, and the only one with all nine centres open. Nothing in you is fixed. Instead, you sample the energy around you, taking it in, amplifying it, and reflecting it back. That is your genius, and it is why, in the right conditions, a Reflector becomes genuinely wise, reading a room and a moment in a way no other type can.",
            "It is also why you are so sensitive. With nothing fixed to filter the world, you feel everything, and you take on the mood, the health and the energy of wherever you are and whoever you are with. This is not fragility, it is exactly how you are built to work.",
            "So the single most important thing you can do is curate your environment. Choose where you live, where you work, and the people you spend your time with, with real care, because you genuinely become a reflection of them. The right places and people leave you feeling clear, expansive and more yourself. The wrong ones dim you. Protecting your surroundings is not fussiness for you, it is basic maintenance for a beautiful, finely tuned instrument."
          ] },
        { placement: "basics", eyebrow: "Making decisions", headline: "The lunar cycle is for the big calls, not the small ones.",
          paras: [
            "Your authority is lunar, which means the biggest decisions of your life deserve a full moon cycle, around twenty-eight days, before you commit. Where to live, where to work, who to build a life with. Giving those choices a whole cycle lets you feel them from every angle as your inner weather shifts, so you arrive at real clarity rather than a passing mood.",
            "Now, the obvious question. You cannot wait a month to decide what to have for lunch, and you do not have to. The lunar cycle is only for the big, life-shaping decisions, the handful that genuinely reshape your world. For everything else, you use lighter versions of the same wisdom.",
            "For everyday choices, talk it through with a couple of trusted people and listen to what you hear yourself say. Sleep on the medium ones, and notice how they feel across a few days rather than in a single moment. Borrow clarity from the people whose energy you trust, because your open design means the right company genuinely helps you think. The rule underneath all of it is simple. The bigger the decision, the more time it deserves. You are built to move at the pace of the moon on the things that matter most, and that is a strength, not a delay."
          ] }
      ],
      sixTips: [
        { h: "Flow with the lunar rhythm", p: "Let your big decisions ripen over the moon's full cycle. Giving choices that time is how you arrive at what is genuinely right for you." },
        { h: "Embrace your fluid identity", p: "Your sense of self shifts day to day, and that is a gift, not a fault. Celebrate your ability to attune, without needing to be fixed." },
        { h: "Watch the conditioning trap", p: "Your openness means you can absorb the people around you. Take regular alone time to wash off what is not yours and come back to yourself." },
        { h: "Nurture your well-being", p: "Prioritise rest and solitude. Settle into bed early, sleep in your own aura, and protect the sensitivity that is your whole gift." },
        { h: "Be your community's barometer", p: "You sense and reflect the energy around you like no one else. Trust that read, and let it help guide the people in your circle." },
        { h: "Radiate lunar wisdom", p: "You are the only lunar type, moving in sync with the moon and the wide-open sky. Lean into that rare vantage point, it holds real wisdom." }
      ],
      poeticLine: "As a Reflector, waiting is not the same as being stuck. Waiting is alive and present. Stuck is stagnant.",
      affirmations: [
        "I give my big decisions a full cycle to ripen.",
        "I am the sky, and the weather always passes through.",
        "I take on the room, so I choose my rooms with care.",
        "Time alone is how I return to myself.",
        "My changing nature is a gift, not a flaw.",
        "I am here to be seen, not to be a mirror.",
        "The right people are happy to wait for my rhythm."
      ] },

    { match: ["generator"],
      inLove: { headline: "Wait for the spark, and let your gut give the real yes.",
        paras: [
          "In love you are built to wait until life brings someone into your field, and then to feel your gut's answer before you act. Not the sensible-on-paper match, the one that gives you that rising yes in your body. Let the sacral energy gather rather than forcing a decision from your head.",
          "Once you are genuinely in, you bring warmth, staying power and a lot of life to a relationship. The right partner respects your no as much as your yes, and lets you take your time. Give yourself permission to be asked, to respond, and to let real desire lead."
        ] },
      atWork: { headline: "Work is sacred, so pour your energy only into what lights you up.",
        paras: [
          "You have a deep, renewable well of life-force, and the whole game for you is where you point it. When you commit to work that genuinely excites you, you are unstoppable and it recharges you as you go. When you grind at something that does not light you up, that same energy curdles into frustration and burnout.",
          "Because your reserve is so big, people will happily let you carry more than your share, and you can end up worn out in work that never fed you. Choose carefully. Respond to what truly resonates, protect your energy, and let mastery build one satisfying yes at a time."
        ] },
      dailyPractice: { headline: "Clear one dead tree, and respond to what fills the space.",
        intro: "You are a magnet, and magnets work best with a little open space around them. When every hour is packed, there is no room for anything new to arrive. Picture your days as a forest, some activities thriving, some dead but still taking up room. You do not make space by planting more, you make it by clearing one dead tree.",
        steps: [
          "<b>Set a timeframe.</b> Take two weeks to a month to simply notice how your body reacts through the day, and make a note when it is hard to read.",
          "<b>List and assess your tasks.</b> Write down what you do each day, feel your body's response to each, and find one draining thing you can drop.",
          "<b>Leave the space open.</b> When free time appears, do not rush to fill it. Wait, tune in, move until something feels right, and spend your time there.",
          "<b>Practise with yes-or-no questions.</b> Have people ask you simple ones, so you sharpen your ear for your own gut truth.",
          "<b>Feed your senses.</b> Savour your food, move to music, walk barefoot, and let sensory pleasure reconnect you to your body's wisdom."
        ] },
      sixTips: [
        { h: "Embrace your magnetic aura", p: "Your open, enveloping aura draws people and opportunities towards you. Relax into it, and let yourself receive what turns up." },
        { h: "Respond, do not chase", p: "Waiting is your superpower. Surrender to life's flow and respond with enthusiasm, and the right adventures find you." },
        { h: "Harness your sacral power", p: "Your energy is a deep, renewable resource. Invest it wholeheartedly in work that genuinely fulfils you, and guard it from the rest." },
        { h: "Your gut never lies", p: "Your gut response is your compass. Listen closely, let it guide your decisions, and step past the mind's second-guessing." },
        { h: "Savour every moment", p: "Find joy in small pleasures. Each one is a little treasure, and it is a big part of what satisfaction actually feels like for you." },
        { h: "Trust the unfolding", p: "Embrace the unpredictability of a responsive life. Wait patiently for the right things, and your path turns out richer than any plan." }
      ],
      poeticLine: "As a Generator, if you feel frustration, take your energy back from whatever drains you. That is how you open space for what truly lights you up.",
      affirmations: [
        "I wait for the yes that rises in my gut.",
        "My energy is sacred, and I spend it on what lights me up.",
        "Good tired at night means I spent my day well.",
        "I do not have to chase, I get to respond.",
        "My no is as trustworthy as my yes.",
        "Mastery comes one satisfying step at a time.",
        "I am a magnet, and I let the right things find me."
      ] }
  ];

})(typeof window !== "undefined" ? window : this);
