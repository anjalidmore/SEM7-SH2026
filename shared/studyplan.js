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
  var STUDY_START = "2026-11-16";
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
  var LAST_LOOK = { key:"last", label:"Before the paper", from:"08:30", to:"09:30", h:1 };
  var MOCK_H = { ai:3, nlp:2, ads:3, or:2, dl:2.5 };  /* timed paper + fixing it */
  var POST_SHARE = 0.80;                             /* MSE modules carry 10 of 50 marks (you); syllabus range is 20-30% */
  var DIFF_K = { 1:0.22, 2:0.28, 3:0.34, 4:0.40, 5:0.46 };   /* study hours per lecture hour: a fast learner */
  var REFRESH = 0.4;                                 /* an MSE module is a refresh */
  var SPLIT = { core:0.55, deepen:0.20, revise:0.25 };
  var LEND_CAP = 0.20;                               /* most of a subject's own days it can lend */

  /* ---------- the evidence ----------
     hrs   syllabus contact hours (low, high)
     los   learning outcomes in the syllabus
     d     difficulty 1-5 (maths and multi-step numericals high, definitions low)
     pre   covered in the MSE
     needs hard prerequisites inside the subject
     sig   [factor, why]
     first what to do first, most weighted first */
  var M = {
    ai: [
      { n:1, hrs:[4,6],  los:6, d:1, pre:true,  needs:[],
        sig:[[1.10,"CIA 1 was set on this module"]],
        first:["Agent types and the PEAS table","Environment properties","Rational agent","Agentic vs traditional AI"] },
      { n:2, hrs:[8,10], los:5, d:3, pre:true,  needs:[],
        sig:[[1.10,"CIA 2 was A* and alpha-beta"]],
        first:["A* worked on a graph","Alpha-beta pruning on a tree","Minimax","BFS / DFS / IDS compared","Hill climbing, annealing, genetic algorithm"] },
      { n:3, hrs:[8,10], los:6, d:4, pre:true,  needs:[],
        sig:[],
        first:["Resolution with CNF conversion","Forward and backward chaining","First-order sentence conversion","Unification","Wumpus world"] },
      { n:4, hrs:[6,8],  los:3, d:5, pre:false, needs:[2,3],
        sig:[],
        first:["Bayesian network: build it, count CPT values, infer","Bayes' rule and joint probability","STRIPS actions and plan checking","Partial-order plan","Hierarchical and multi-agent planning"] },
      { n:5, hrs:[7,9],  los:5, d:3, pre:false, needs:[],
        sig:[],
        first:["Transformer and attention","BERT, GPT, ChatGPT","SHAP and LIME","Prompt engineering","AI regulation and the Responsible-AI case"] },
      { n:6, hrs:[4,6],  los:3, d:2, pre:false, needs:[5],
        sig:[],
        first:["The tool-calling loop","Single vs multi-agent design","Orchestration and workflows","Human in the loop vs autonomous","ClarifAI end to end"] }
    ],
    nlp: [
      { n:1, hrs:[2,4],   los:4, d:1, pre:true,  needs:[],
        sig:[],
        first:["Ambiguity types","NLP stages","Type-token ratio"] },
      { n:2, hrs:[10,12], los:6, d:3, pre:true,  needs:[],
        sig:[[1.10,"Past internal tests ask perplexity, Porter stemmer and regex"]],
        first:["Perplexity and n-gram probabilities","Smoothing (Laplace, Good-Turing)","Porter stemmer","TF-IDF"] },
      { n:3, hrs:[9,11],  los:6, d:4, pre:true,  needs:[2],
        sig:[[1.10,"Past internal tests ask HMM, CKY and PCFG every time"]],
        first:["HMM matrices and Viterbi","CKY table","PCFG parse probability","Leftmost derivation and parse tree"] },
      { n:4, hrs:[7,9],   los:8, d:4, pre:false, needs:[2],
        sig:[[1.15,"CIA 4 is a report on word senses, embeddings and BERT"]],
        first:["Lesk algorithm worked","Word sense disambiguation: three approaches compared","Word2Vec, GloVe, one-hot and cosine similarity","Semantic relations (synonymy to meronymy)","FastText and BERT in outline"] },
      { n:5, hrs:[5,7],   los:6, d:3, pre:false, needs:[3],
        sig:[],
        first:["Hobbs algorithm on a parse tree","Centering theory","BLEU, ROUGE and F1 worked","Discourse coherence and relations"] },
      { n:6, hrs:[4,6],   los:8, d:2, pre:false, needs:[4,5],   /* 10 LOs, two are teamwork and not examinable */
        sig:[],
        first:["Machine translation: rule, statistical, neural","Extractive vs abstractive summarisation","NER and RAG for question answering","Bias, privacy, hallucination","Indian-language challenges"] }
    ],
    ads: [
      { n:1, hrs:[4,4],   los:4, d:1, pre:true,  needs:[],
        sig:[],
        first:["Data science process","Validation: hold-out, k-fold, bootstrap","Data preparation"] },
      { n:2, hrs:[12,12], los:6, d:3, pre:true,  needs:[],
        sig:[[1.10,"CIA 2 was worked from this module"]],
        first:["Mean, median, mode and spread numericals","Skewness (Pearson, Bowley) and kurtosis","Correlation","Box plot and histogram reading"] },
      { n:3, hrs:[6,6],   los:4, d:3, pre:false, needs:[2],
        sig:[],
        first:["t-tests","ANOVA one-way and two-way","z-test and confidence intervals","Normal and Poisson probabilities","Type I and II errors"] },
      { n:4, hrs:[10,10], los:6, d:4, pre:false, needs:[2,3],
        sig:[],
        first:["Simple regression by least squares","Multiple regression and partial coefficients","R-squared, adjusted R-squared, F-test, t-test of coefficients","MAE, MSE, RMSE, MAPE"] },
      { n:5, hrs:[6,6],   los:8, d:3, pre:false, needs:[2],
        sig:[],
        first:["Local Outlier Factor with Manhattan distance","3-sigma and IQR fences","Distance vs density based detection","SMOTE"] },
      { n:6, hrs:[5,5],   los:6, d:3, pre:false, needs:[4],
        sig:[],
        first:["Additive and multiplicative decomposition","Moving average and exponential smoothing","MAE, RMSE, MAPE, MASE","Components and ARIMA in outline"] }
    ],
    or: [
      { n:1, hrs:[15,17], los:0, d:3, pre:true,  needs:[],
        sig:[[1.10,"Past internal paper and the important-questions list are on LP, transportation and games"]],
        first:["Simplex and Big M","Duality","Transportation: initial solution and MODI","Assignment (Hungarian)","The 2-mark theory bank"] },
      { n:2, hrs:[4,6],   los:0, d:3, pre:true,  needs:[],
        sig:[[1.10,"Your notes ranked highest cover it"]],
        first:["Single-server Ls, Lq, Ws, Wq","P(n) and design problems","Kendall's notation"] },
      { n:3, hrs:[6,8],   los:0, d:2, pre:false, needs:[],
        sig:[],
        first:["Monte Carlo simulation table","Simulation procedure and methodology","Advantages and limitations"] },
      { n:4, hrs:[6,8],   los:0, d:4, pre:false, needs:[],
        sig:[],
        first:["Stagecoach / shortest path","Capital budgeting","Cargo loading","Employment smoothening","Reliability problems"] },
      { n:5, hrs:[4,6],   los:0, d:2, pre:true,  needs:[],
        sig:[[1.10,"Past internal paper asks saddle point and value of the game"]],
        first:["Saddle point and value of the game","Dominance","2x2 mixed strategy"] },
      { n:6, hrs:[4,6],   los:0, d:3, pre:false, needs:[],
        sig:[],
        first:["Classical EOQ","EOQ with shortages","EOQ with price breaks","Probabilistic EOQ"] }
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
        DAY.forEach(function(b){ blocks.push({ b:b }); });
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
      return units.filter(function(u){ return !u.owner && !u.recall && !u.slot.only && u.at.getTime() + UNIT * 36e5 <= dl.getTime(); });
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
      chunks.push({ m:m, kind:"rev",    h:m.rev,  dens:v * SPLIT.revise / m.rev,     after:"core" });
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
              var rdy = st.learn.filter(function(m){
                return m.needs.every(function(q){ var x = mods[q]; return !x || x.todo.learn <= 1e-9; });
              });
              if(rdy.length){
                rdy.sort(function(a, b){ return b.p - a.p; });
                var top = rdy.slice(0, 3);
                if(slot.key === "eve" || day.hard >= 1){
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
                     SPLIT:SPLIT, KIND:{ learn:"Learn", refresh:"Refresh", revise:"Revise + practise", recall:"Recall", mock:"Mock paper", last:"Last look" } };
  if(typeof module !== "undefined" && module.exports) module.exports = root.SEM7_PLAN;
})(typeof window !== "undefined" ? window : this);
