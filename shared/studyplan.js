/* =====================================================================
   SEMESTER 7 — End Sem study timetable
   Works out, from the evidence below, how many marks each module is likely
   to carry, then fills the study window day by day. Read by the hub
   (index.html). Needs sem7.js and syllabus.js loaded first; if either is
   missing the hub simply shows no timetable.

   WHY THESE NUMBERS
   No End Sem paper pattern exists yet (syllabus.js: paper:null), so a module's
   weight is an estimate built from what is on record:
     1. The syllabus rule: modules taught after the MSE carry 70-80% of the
        End Sem (80% used, you put the MSE modules at 10 of 50).
     2. Contact hours (midpoint of the syllabus range) and the number of
        learning outcomes. Questions are written against outcomes, so an
        outcome is a proxy for a question. Half and half.
     3. Signals that nudge a module up by 5-20%: set in a CIA this term, in a
        past internal paper, named important by the lecturer, or covered by
        notes the student ranked highest.
   The result is "expected marks of 50", not a promise. Change a number here
   and the whole timetable regenerates.

   HOW THE DAYS ARE FILLED  (build(now) below)
     a. Hours  Each day has three study blocks. An exam day gives its morning
        to a last look at that paper and the rest to the next paper.
     b. Need   Each module needs hours: lecture hours x a difficulty factor,
        and only 40% of that for an MSE module (a refresh, not a first read).
        It splits into a Core pass (60% of its marks), a Deepen pass (25%) and
        a Revise pass (15%).
     c. Budget Passes are placed by marks per hour, highest first, each in the
        latest free time before that paper (deadline scheduling). A subject
        short of time borrows free time from an earlier subject's days; what
        cannot be placed is left out and listed.
     d. Order  Inside a subject: prerequisites first, then the heaviest
        module. A module that unlocks a heavy one counts as that heavy.
     e. Load   Hard and easy modules share a day. Mornings get the most
        valuable module, the evening the lightest. The last half hour of
        every evening is a recall quiz of the last two days.
   ===================================================================== */
(function(root){
  "use strict";

  /* ---------- the day ---------- */
  var STUDY_START = "2026-11-25";                  /* ADS written 25 Nov; the plan starts that afternoon */
  var UNIT = 0.5;                                    /* hours; every plan quantity is a multiple */
  var DAY = [
    { key:"am",  label:"Morning",   from:"08:30", to:"11:30", h:3 },
    { key:"pm",  label:"Afternoon", from:"13:30", to:"16:30", h:3 },
    { key:"eve", label:"Evening",   from:"18:30", to:"21:30", h:3 }
  ];
  var EXAM_DAY_AFTER = [                             /* once the paper is written */
    { key:"pm",  label:"Afternoon", from:"14:30", to:"17:00", h:2.5 },
    { key:"eve", label:"Evening",   from:"18:30", to:"21:00", h:2.5 }
  ];
  var DAY_OF = {                                     /* a day with its own blocks */
    "2026-11-25": [ { key:"pm",  label:"Afternoon", from:"14:30", to:"17:00", h:2.5 },
                    { key:"eve", label:"Evening",   from:"18:30", to:"21:00", h:2.5 } ]
  };
  var LAST_LOOK = { key:"last", label:"Before the paper", from:"08:30", to:"09:30", h:1 };

  /* ---------- hand-written days ----------
     A day listed here is not generated: its slots are shown as written.
     keep: generated blocks of that day to keep (by key), the rest are dropped.
     Item: { code, k (module key, links the chip; omit for whole-paper work), h, title, tag, text }. */
  /* OR 25-27 Nov: from the teacher's note of 25 Nov (subjects/or/priority.js has it verbatim).
     Paper: Q1 any 5 of 2 marks from Modules 1 + 5 · Q2 any 2 from Module 3 · Q3 any 4 from
     Module 4 · Q4 any 1 from Module 6. Questions come from the slides with new numbers.
     Module 2 is not in the note, so it waits until the priority list is done. */
  var FIXED = {
    "2026-11-25": { keep:[], slots:[
      { label:"Afternoon", from:"14:30", to:"17:00", items:[
        { code:"or", k:"or4", h:1.5, tag:"Q3 · certain", title:"Shortest path on a graph",
          text:"Eleven-node past paper, table version then figure version · George Yates · redo one from a blank page" },
        { code:"or", k:"or4", h:1, tag:"Q3", title:"Cargo loading and the strawberry crates",
          text:"Vessel of capacity 5 · six crates among four stores · DP terminology on George Yates" } ] },
      { label:"Evening", from:"18:30", to:"21:00", items:[
        { code:"or", k:"or3", h:1, tag:"Q2 · named", title:"Dentist's clinic",
          text:"Two draws per patient · start, finish, waiting and idle time · average waiting time" },
        { code:"or", k:"or3", h:1, tag:"Q2 · named", title:"Bakery problems",
          text:"Iyengar (slides) then Lajwaab and Sweet Treats: same table, new numbers · stock situation and average demand" },
        { code:"or", k:"or3", h:0.5, tag:"Q2", title:"Moped factory + simulation theory",
          text:"Lorry of 200 · define simulation, advantages, limitations, Monte Carlo steps" } ] }
    ]},
    "2026-11-26": { keep:[], slots:[
      { label:"Morning", from:"08:30", to:"11:30", items:[
        { code:"or", k:"or6", h:2, tag:"Q4", title:"EOQ: the list and past papers",
          text:"8000 units (10 marks) · ABC Corporation · 3600 units · May-17 fluid · Nov-18 reorder level · Nov-19 price breaks" },
        { code:"or", k:"or5", h:1, tag:"Q1 · named", title:"Payoff matrix 2-markers",
          text:"Saddle point · 2×2 mixed · dominance · is the game fair: the six listed games, 5 min each" } ] },
      { label:"Afternoon", from:"13:30", to:"16:30", items:[
        { code:"or", k:"or1", h:0.75, tag:"Q1 · named", title:"Farmers problem",
          text:"Cooperative society, 50 ha (formulate + graph) · farmer's 110 ha wheat and barley" },
        { code:"or", k:"or1", h:0.75, tag:"Q1 theory", title:"2-mark theory, Modules 1 and 5",
          text:"Advantages of OR · objective vs constraints · feasible vs optimal · limitations · pure vs mixed · maximin vs minimax" },
        { code:"or", k:"or6", h:1, tag:"Q4", title:"Models 2, 3 and 4 from the class problems",
          text:"Cable plant (finite replenishment) · shortages · single price break" },
        { code:"or", k:"or4", h:0.5, tag:"Q3", title:"Capital budgeting",
          text:"Rs 5 crore among three projects" } ] },
      { label:"Evening", from:"18:30", to:"21:30", items:[
        { code:"or", h:2, tag:"Mock", title:"Timed paper in the note's pattern",
          text:"Q1 five 2-markers · Q2 two simulations · Q3 four DP parts incl. shortest path · Q4 one EOQ. Change the numbers of the slide problems." },
        { code:"or", h:0.5, tag:"Revise", title:"Fix the mock mistakes",
          text:"Redo every wrong or slow answer." },
        { code:"or", k:"or2", h:0.5, tag:"Then all else", title:"Queuing, only if the list is done",
          text:"Ls, Lq, Ws, Wq · idle time · jobs ahead. Not in the note." } ] }
    ]},
    "2026-11-27": { keep:["pm", "eve"], slots:[
      { label:"Before the paper", from:"08:30", to:"09:30", items:[
        { code:"or", h:1, tag:"Last look", title:"One of each, from a blank page",
          text:"Shortest path stage table · dentist table headings · EOQ and total-cost formulas · saddle point check · farmer constraints" } ] }
    ]}
  };
  var MOCK_H = { or:2, dl:2.5 };  /* timed paper + fixing it */
  var POST_SHARE = 0.80;                             /* MSE modules carry 10 of 50 marks (you); syllabus range is 20-30% */
  var DIFF_K = { 1:0.22, 2:0.28, 3:0.34, 4:0.40, 5:0.46 };   /* study hours per lecture hour: a fast learner */
  var REFRESH = 0.4;                                 /* an MSE module is a refresh */
  var SPLIT = { core:0.55, deepen:0.20, revise:0.25 };
  var ONLY_FROM = { dl:"2026-11-28" };   /* a subject studied only from this day (DL: the two days before it) */
  var LEND_CAP = 0.20;
  var ORDER = {};                                   /* fixed study order per subject, e.g. { or:[4,5,6,1,2,3] } */

  /* ---------- the evidence ----------
     hrs   syllabus contact hours (low, high)
     los   learning outcomes in the syllabus
     d     difficulty 1-5 (maths and multi-step numericals high, definitions low)
     pre   covered in the MSE
     needs hard prerequisites inside the subject
     sig   [factor, why]
     first what to do first, most weighted first */
  var M = {
    or: [
      { n:1, hrs:[15,17], los:0, d:3, pre:true,  needs:[],
        sig:[[1.10,"Past internal paper and the important-questions list are on LP, transportation and games"]],
        first:["Important list: advantages of OR, objective function vs constraint, feasible vs optimal (2 marks each)","Simplex and Big M","Duality","Transportation: initial solution and MODI","Assignment (Hungarian)","The 2-mark theory bank"] },
      { n:2, hrs:[4,6],   los:0, d:3, pre:true,  needs:[],
        sig:[[1.10,"Your notes ranked highest cover it"],[0.50,"Not in the teacher's End Sem pattern (note of 25 Nov)"]],
        first:["Important list: idle time and jobs ahead (T.V. repairman, ATM); Ls, Lq, Ws, Wq (cashier)","Single-server Ls, Lq, Ws, Wq","P(n) and design problems","Kendall's notation"] },
      { n:3, hrs:[6,8],   los:0, d:2, pre:false, needs:[],
        sig:[[1.15,"Teacher's note: Q2 (any 2), names the dentist and bakery problems"]],
        first:["Teacher's note: dentist's clinic and the bakery problems","Important list: demand simulation with stock situation (six listed problems, 5 and 10 marks)","Monte Carlo simulation table","Simulation procedure and methodology","Advantages and limitations"] },
      { n:4, hrs:[6,8],   los:0, d:4, pre:false, needs:[],
        sig:[[1.10,"The deck opens with two past paper questions on shortest path by dynamic programming, 10 marks each"],[1.15,"Teacher's note: Q3 (any 4), shortest path graph question certain"]],
        first:["Asked in past papers: shortest path, node 1 to node 11 (10 marks)","Important list: cargo loading, vessel of capacity 5 (10 marks)","Important list: six crates among four stores (10 marks)","Terminology, four steps, DP against LP","Reliability and employment smoothening (not in the deck)"] },
      { n:5, hrs:[4,6],   los:0, d:2, pre:true,  needs:[],
        sig:[[1.10,"Past internal paper asks saddle point and value of the game"],[1.10,"Teacher's note: Q1 2-markers, payoff matrix and saddle point named"]],
        first:["Important list: six 2-mark games (saddle point, dominance, 2x2, is the game fair)","Saddle point and value of the game","Dominance","2x2 mixed strategy"] },
      { n:6, hrs:[4,6],   los:0, d:3, pre:false, needs:[],
        sig:[[1.10,"Teacher's note: Q4 (any 1)"]],
        first:["Important list: classical EOQ (three problems), reasons for carrying inventory, terminology","EOQ with shortages","EOQ with price breaks","Probabilistic EOQ"] }
    ],
    dl: [
      { n:1, hrs:[4,6],   los:3, d:2, pre:true,  needs:[],
        sig:[],
        first:["Perceptron and linear separability","McCulloch-Pitts neuron","Perceptron and delta learning rules"] },
      { n:2, hrs:[10,12], los:4, d:4, pre:true,  needs:[],
        sig:[],
        first:["Backpropagation worked","Activation and loss for a given task","Gradient descent family (momentum to Adam)","Regularisation compared"] },
      { n:3, hrs:[8,10],  los:4, d:3, pre:true,  needs:[],
        sig:[[1.15,"Lecturer: CNN architecture and LO 3.2 important, LO 3.3 a sure 5 marks (said for the MSE)"]],
        first:["Output size and parameter count","CNN architecture design","LeNet and AlexNet","Weight sharing"] },
      { n:4, hrs:[8,10],  los:4, d:3, pre:false, needs:[2],
        sig:[],
        first:["Undercomplete, sparse, denoising, contractive autoencoders","The bottleneck and its effect","Applications: compression, denoising, dimensionality reduction"] },
      { n:5, hrs:[10,12], los:5, d:4, pre:false, needs:[2],
        sig:[],
        first:["Backpropagation through time","Vanishing and exploding gradients","LSTM gates and GRU","Sequence problems and unfolding"] },
      { n:6, hrs:[6,8],   los:4, d:3, pre:false, needs:[3],
        sig:[],
        first:["GAN generator vs discriminator and its loss","Deepfake: ethics and law","Diffusion: forward and reverse process"] }
    ]
  };

  /* ---------- small helpers ---------- */
  function r05(x){ return Math.round(x / UNIT) * UNIT; }
  function key(code, n){ return code + n; }

  /* ---------- dates ---------- */
  function ymd(d){ return d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2); }
  function dayStart(s){ var p = s.split("-"); return new Date(+p[0], +p[1] - 1, +p[2]); }
  function plusDays(d, n){ return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }
  function clock(d, hhmm){ var t = hhmm.split(":"); return new Date(d.getFullYear(), d.getMonth(), d.getDate(), +t[0], +t[1]); }

  /* ---------- weights ---------- */
  /* Expected marks of 50 for every module: { "ai1": {marks, share, sigWhy:[]}, ... } */
  function weigh(code){
    var list = M[code], out = {};
    [true, false].forEach(function(pre){
      var g = list.filter(function(m){ return m.pre === pre; });
      if(!g.length) return;
      var hs = 0, ls = 0;
      g.forEach(function(m){ hs += (m.hrs[0] + m.hrs[1]) / 2; ls += m.los; });
      var raw = g.map(function(m){
        var h = ((m.hrs[0] + m.hrs[1]) / 2) / hs;
        var base = ls ? 0.5 * h + 0.5 * (m.los / ls) : h;
        var f = 1; m.sig.forEach(function(s){ f *= s[0]; });
        return base * f;
      });
      var tot = raw.reduce(function(a, b){ return a + b; }, 0);
      var pool = 50 * (pre ? 1 - POST_SHARE : POST_SHARE);
      g.forEach(function(m, i){
        out[key(code, m.n)] = { marks:pool * raw[i] / tot, why:m.sig.map(function(s){ return s[1]; }) };
      });
    });
    return out;
  }

  /* priority: a module that unlocks a heavier one counts as that heavy one */
  function priorities(code, W){
    var list = M[code], p = {};
    if(ORDER[code]){ ORDER[code].forEach(function(n, i){ p[key(code, n)] = 100 - i; }); return p; }
    list.forEach(function(m){ p[key(code, m.n)] = W[key(code, m.n)].marks; });
    for(var pass = 0; pass < list.length; pass++){
      list.forEach(function(m){
        m.needs.forEach(function(q){
          var a = key(code, q), b = key(code, m.n);
          if(p[b] > p[a]) p[a] = p[b] + 0.001 * (7 - q);   /* tiny lift keeps prerequisites ahead */
        });
      });
    }
    return p;
  }

  /* ---------- need ---------- */
  function need(code, m){
    var full = ((m.hrs[0] + m.hrs[1]) / 2) * DIFF_K[m.d] * (m.pre ? REFRESH : 1);
    full = Math.max(1, r05(full));
    var core = Math.max(1, r05(full * 0.5));
    return { full:full, core:Math.min(core, full), rev:Math.max(1, r05(full * 0.8)) };
  }

  /* ---------- the slots ---------- */
  /* Every half hour from the start to the last paper, with its date, block and owner.
     `deadline` index: units before a paper's start are fair game for that paper. */
  function buildSlots(subjects, startStr, now){
    var from = dayStart(startStr);   /* always the whole window, so the plan does not rewrite itself as days pass */
    var last = subjects.reduce(function(a, s){ return s.examDate > a ? s.examDate : a; }, subjects[0].examDate);
    var slots = [], units = [], day;
    for(day = from; day <= dayStart(ymd(last)); day = plusDays(day, 1)){
      var exam = null;
      subjects.forEach(function(s){ if(ymd(s.examDate) === ymd(day)) exam = s; });
      var blocks = [];
      if(exam){
        blocks.push({ b:LAST_LOOK, only:exam.code });
        EXAM_DAY_AFTER.forEach(function(b){ blocks.push({ b:b }); });
      } else {
        (DAY_OF[ymd(day)] || DAY).forEach(function(b){ blocks.push({ b:b }); });
      }
      blocks.forEach(function(x){
        var slot = { date:day, ymd:ymd(day), key:x.b.key, label:x.b.label, from:x.b.from, to:x.b.to,
                     only:x.only || null, units:[], dayNo:0, examToday:exam ? exam.code : null };
        var n = Math.round(x.b.h / UNIT);
        for(var i = 0; i < n; i++){
          var at = new Date(clock(day, x.b.from).getTime() + i * UNIT * 36e5);
          var u = { slot:slot, i:i, at:at, owner:null, recall:false, last:x.b.key === "last" };
          if(x.b.key === "eve" && i === n - 1) u.recall = true;     /* closing half hour */
          slot.units.push(u); units.push(u);
        }
        slots.push(slot);
      });
    }
    return { slots:slots, units:units };
  }

  /* ---------- build ---------- */
  function build(now, S){
    now = now || new Date();
    var syl = root.SEM7_SYLLABUS || {};
    var subjects = (S || (root.SEM7 && root.SEM7.SUBJECTS) || []).map(function(s){
      return { code:s.code, short:s.short, name:s.name, accent:s.accent,
               examDate:clock(dayStart(s.date), "10:30") };
    });
    if(!subjects.length) return null;
    var T = buildSlots(subjects, STUDY_START, now);
    var units = T.units, byCode = {};
    subjects.forEach(function(s){ byCode[s.code] = s; });

    /* modules: weights, priorities, needs */
    var mods = {}, sums = {};
    subjects.forEach(function(s){
      var W = weigh(s.code), P = priorities(s.code, W), sm = syl[s.code] ? syl[s.code].modules : [];
      sums[s.code] = { needFull:0, needCore:0 };
      M[s.code].forEach(function(m){
        var k = key(s.code, m.n), nd = need(s.code, m), sy = sm.filter(function(x){ return x.n === m.n; })[0] || {};
        mods[k] = { k:k, code:s.code, n:m.n, title:sy.title || ("Module " + m.n), built:!!sy.built, pre:m.pre, d:m.d,
                    needs:m.needs.map(function(q){ return key(s.code, q); }), first:m.first,
                    marks:W[k].marks, why:W[k].why, p:P[k], los:m.los, hrs:m.hrs,
                    full:nd.full, core:nd.core, rev:nd.rev, got:{ core:0, deepen:0, rev:0 } };
        sums[s.code].needFull += nd.full + nd.rev;
        sums[s.code].needCore += nd.core;
      });
    });

    /* reserve the recall half hours, last looks and mock papers */
    units.forEach(function(u){ if(u.last) u.owner = u.slot.only; });
    function freeUnits(code){
      var dl = byCode[code].examDate;
      return units.filter(function(u){ return !u.owner && !u.recall && !u.slot.only && u.at.getTime() + UNIT * 36e5 <= dl.getTime() && (!ONLY_FROM[code] || u.slot.ymd >= ONLY_FROM[code]); });
    }
    /* A subject's own days start after the previous paper. Time before that is borrowed:
       it is taken from the evening first, then the afternoon, and the morning last,
       so the subject whose days they are keeps its best hours. */
    var ownFrom = {};
    subjects.forEach(function(s, i){ ownFrom[s.code] = i ? subjects[i - 1].examDate.getTime() : 0; });
    var RANK = { eve:0, pm:1, am:2 };
    function windowOf(u){ for(var i = 0; i < subjects.length; i++) if(u.at < subjects[i].examDate) return subjects[i].code; return null; }
    var lentBy = {}, cap = {};
    subjects.forEach(function(s){
      lentBy[s.code] = 0;
      cap[s.code] = Math.floor(LEND_CAP * units.filter(function(u){ return !u.last && !u.recall && windowOf(u) === s.code; }).length);
    });
    function place(code, hours, from){            /* latest free time first; returns hours placed */
      var free = freeUnits(code), n = Math.round(hours / UNIT), got = 0, i;
      var own = free.filter(function(u){ return u.at.getTime() >= ownFrom[code]; });
      var lent = free.filter(function(u){ return u.at.getTime() < ownFrom[code]; });
      lent.sort(function(a, b){ return (RANK[a.slot.key] - RANK[b.slot.key]) || (b.at - a.at); });
      for(i = own.length - 1; i >= 0 && got < n; i--){ own[i].owner = code; own[i].kind = from; got++; }
      for(i = 0; i < lent.length && got < n; i++){
        var w = windowOf(lent[i]);
        if(lentBy[w] >= cap[w]) continue;
        lentBy[w]++; lent[i].owner = code; lent[i].kind = from; got++;
      }
      return got * UNIT;
    }
    subjects.forEach(function(s){ place(s.code, MOCK_H[s.code], "mock"); });

    /* chunks, placed by marks per hour, each after the pass it builds on */
    var chunks = [];
    Object.keys(mods).forEach(function(k){
      var m = mods[k], deepen = r05(m.full - m.core), unlocks = 0;
      Object.keys(mods).forEach(function(q){ if(mods[q].needs.indexOf(k) >= 0) unlocks += mods[q].marks; });
      var v = (m.marks + 0.35 * unlocks) * (m.pre ? 0.6 : 1);     /* a prerequisite also earns part of what it unlocks */
      chunks.push({ m:m, kind:"core",   h:m.core, dens:v * SPLIT.core / m.core,     after:null });
      if(deepen > 0) chunks.push({ m:m, kind:"deepen", h:deepen, dens:v * SPLIT.deepen / deepen, after:"core" });
      chunks.push({ m:m, kind:"rev",    h:m.rev,  dens:v * SPLIT.revise / m.rev * (ORDER[m.code] ? 0.2 : 1), after:"core" });   /* a fixed-order subject learns everything before revising */
    });
    var left = chunks.slice(), done = 0, skipped = [];
    while(left.length){
      var ready = left.filter(function(c){ return !c.after || c.m.got[c.after] >= c.m[c.after === "core" ? "core" : "full"] - 1e-9; });
      if(!ready.length){ skipped = skipped.concat(left); break; }
      ready.sort(function(a, b){ return b.dens - a.dens; });
      var c = ready[0], put = place(c.m.code, c.h, c.kind);
      c.m.got[c.kind] += put;
      left.splice(left.indexOf(c), 1);
      if(put < c.h - 1e-9) skipped.push(c);
      done++;
    }

    /* recall owner: whoever studied just before it */
    units.forEach(function(u, i){
      if(u.recall){ var q = units[i - 1]; u.owner = q && q.slot === u.slot ? q.owner : null; u.kind = "recall"; }
    });

    /* the day's schedule, in time order. A subject's units become sessions of one module each. */
    var state = {};
    subjects.forEach(function(s){
      state[s.code] = { learn:[], revise:[], mock:MOCK_H[s.code], recall:[] };
      M[s.code].forEach(function(mm){
        var m = mods[key(s.code, mm.n)];
        m.todo = { learn:m.got.core + m.got.deepen, rev:m.got.rev };
        if(m.todo.learn > 0) state[s.code].learn.push(m);
        if(m.todo.rev > 0) state[s.code].revise.push(m);
      });
    });
    function effD(m, kind){ return Math.max(1, m.d - (m.pre || kind === "rev" ? 1 : 0)); }

    var days = [], dayMap = {};
    units.forEach(function(u){
      var y = u.slot.ymd;
      if(!dayMap[y]){ dayMap[y] = { ymd:y, date:u.slot.date, slots:[], hard:0, studying:null, exam:u.slot.examToday }; days.push(dayMap[y]); }
    });
    for(var si = 0; si < T.slots.length; si++){
      var slot = T.slots[si], day = dayMap[slot.ymd];
      var out = { key:slot.key, label:slot.label, from:slot.from, to:slot.to, items:[], hours:0 };
      var i = 0;
      while(i < slot.units.length){
        var u0 = slot.units[i], j = i;
        while(j < slot.units.length && slot.units[j].owner === u0.owner && !!slot.units[j].recall === !!u0.recall && (slot.units[j].kind === "mock") === (u0.kind === "mock")) j++;
        var hrs = (j - i) * UNIT, code = u0.owner;
        if(code){
          var st = state[code], item = null;
          if(u0.last){
            out.items.push({ code:code, kind:"last", h:hrs });
          } else if(u0.recall){
            var seen = st.recall.slice(-3).filter(function(x, q, a){ return a.indexOf(x) === q; });
            out.items.push({ code:code, kind:"recall", h:hrs, mods:seen.map(function(k){ return k; }) });
          } else if(u0.kind === "mock"){
            out.items.push({ code:code, kind:"mock", h:hrs });
          } else {
            var left2 = hrs;
            while(left2 > 1e-9){
              var cand = null, kind = null;
              var rdy = ORDER[code] ? st.learn.slice() : st.learn.filter(function(m){
                return m.needs.every(function(q){ var x = mods[q]; return !x || x.todo.learn <= 1e-9; });
              });
              if(rdy.length){
                rdy.sort(function(a, b){ return b.p - a.p; });
                var top = rdy.slice(0, 3);
                if(!ORDER[code] && (slot.key === "eve" || day.hard >= 1)){
                  var easy = top.filter(function(m){ return effD(m, "l") <= 2; })[0];
                  if(easy) cand = easy;
                }
                cand = cand || rdy[0];
                kind = cand.pre ? "refresh" : "learn";
              } else if(st.learn.length){
                /* a prerequisite was cut: carry on with what is left */
                st.learn.sort(function(a, b){ return b.p - a.p; });
                cand = st.learn[0]; kind = cand.pre ? "refresh" : "learn";
              } else if(st.revise.length){
                st.revise.sort(function(a, b){ return b.marks - a.marks; });
                cand = st.revise[0]; kind = "revise";
              }
              if(!cand) break;
              var amt = Math.min(left2, kind === "revise" ? cand.todo.rev : cand.todo.learn);
              if(kind === "revise") cand.todo.rev -= amt; else cand.todo.learn -= amt;
              if(kind !== "revise" && cand.todo.learn <= 1e-9) st.learn.splice(st.learn.indexOf(cand), 1);
              if(kind === "revise" && cand.todo.rev <= 1e-9) st.revise.splice(st.revise.indexOf(cand), 1);
              var depth = kind === "revise" ? "revise" : (cand.got.deepen > 0 || cand.got.core >= cand.full ? "full" : "core");
              out.items.push({ code:code, kind:kind, k:cand.k, h:amt, depth:depth, lent:u0.at.getTime() < ownFrom[code] });
              if(kind !== "revise" && effD(cand, kind) >= 4) day.hard++;
              if(kind !== "recall" && st.recall.indexOf(cand.k) < 0) st.recall.push(cand.k);
              left2 -= amt;
            }
          }
          out.hours += hrs;
        }
        i = j;
      }
      var merged = [];
      out.items.forEach(function(it){
        var l = merged[merged.length - 1];
        if(l && l.k && l.k === it.k && l.kind === it.kind){ l.h += it.h; if(it.depth === "full") l.depth = "full"; } else merged.push(it);
      });
      out.items = merged;
      if(out.items.length) day.slots.push(out);
    }
    /* hand-written days replace what was generated for them */
    days.forEach(function(d){
      var f = FIXED[d.ymd];
      if(!f) return;
      var kept = d.slots.filter(function(s){ return f.keep.indexOf(s.key) >= 0; });
      d.slots = f.slots.map(function(s){
        var items = s.items.map(function(it){ var o = {}; for(var p in it) o[p] = it[p]; o.kind = "task"; return o; });
        return { key:"fixed", label:s.label, from:s.from, to:s.to, items:items,
                 hours:items.reduce(function(a, it){ return a + it.h; }, 0) };
      }).concat(kept);
    });
    days.forEach(function(d){
      var main = {};
      d.slots.forEach(function(s){ s.items.forEach(function(it){ if(it.kind !== "last" && it.kind !== "recall") main[it.code] = (main[it.code] || 0) + it.h; }); });
      d.studying = Object.keys(main).sort(function(a, b){ return main[b] - main[a]; });
    });

    /* what each subject got */
    var summary = subjects.map(function(s){
      var avail = units.filter(function(u){ return u.owner === s.code && !u.recall && !u.last && u.kind !== "mock"; }).length * UNIT;
      var own = units.filter(function(u){ return u.owner === s.code; });
      var borrowed = own.filter(function(u){ return u.kind !== "mock" && !u.recall && !u.last && u.at.getTime() < ownFrom[s.code]; }).length * UNIT;
      var out = M[s.code].map(function(mm){ return mods[key(s.code, mm.n)]; });
      return { code:s.code, short:s.short, name:s.name, accent:s.accent, exam:s.examDate,
               have:avail, need:sums[s.code].needFull, needCore:sums[s.code].needCore, borrowed:borrowed,
               mods:out, left:out.filter(function(m){ return m.got.core < m.core - 1e-9; }),
               thin:out.filter(function(m){ return m.got.core >= m.core - 1e-9 && m.got.core + m.got.deepen < m.full - 1e-9; }) };
    });
    return { days:days, mods:mods, summary:summary, subjects:subjects };
  }

  root.SEM7_PLAN = { build:build, weigh:weigh, M:M, STUDY_START:STUDY_START, DAY:DAY, MOCK_H:MOCK_H, POST_SHARE:POST_SHARE,
                     SPLIT:SPLIT, KIND:{ learn:"Learn", refresh:"Refresh", revise:"Revise + practise", recall:"Recall", mock:"Mock paper", last:"Last look", task:"Study" } };
  if(typeof module !== "undefined" && module.exports) module.exports = root.SEM7_PLAN;
})(typeof window !== "undefined" ? window : this);
