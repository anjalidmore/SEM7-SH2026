/* =====================================================================
   SEMESTER 7 — shared bridge
   The single source for the End Sem timetable and the subject list, used by
   the hub (index.html) and by every subject site.

   A subject site adds two lines at the very end of its <body>:
     <script src="../../shared/sem7.js"></script>
     <script>window.SEM7 && SEM7.attach("ads");</script>
   SEM7.attach does three things and nothing else:
     1. adds a thin strip above the site's own header: back to the semester
        hub, jump to another subject, and this subject's exam countdown;
     2. writes a small read-only summary of the site's own progress to
        localStorage under "sem7.summary.<code>", so the hub can show it;
     3. if the page was opened from the hub's "Continue" link
        (index.html#sem7=<target>), opens that topic using the site's own
        navigation.
   It never reads or writes a subject's own progress key. If this file is
   missing, a subject site behaves exactly as it did on its own.
   ===================================================================== */
(function(){
  "use strict";

  var EXAM = { marks:50, duration:"2 hours", start:"10:30", end:"12:30" };

  /* Exam order. `keys` are the subject's own progress keys, used by the hub only
     to notice that progress exists before the subject has published a summary. */
  var SUBJECTS = [
    { code:"ai",  short:"AI",  name:"Artificial Intelligence",      course:"CEPCC712", date:"2026-11-19",
      accent:"#4a48c4", keys:["cepcc712_ai_study_progress_v1"] },
    { code:"nlp", short:"NLP", name:"Natural Language Processing",  course:"CEPEC7032", date:"2026-11-21",
      accent:"#2c5f8a", keys:["nlpExamPrepProgress_v3", "nlpExamPrepProgress_v2"] },
    { code:"ads", short:"ADS", name:"Applied Data Science",         course:"CEPEC7041", date:"2026-11-25",
      accent:"#1f5f8b", keys:["ads_study_guide_cepec7041_v2"] },
    { code:"or",  short:"OR",  name:"Operations Research",          course:"OEC7015",  date:"2026-11-27",
      accent:"#2f5bd0", keys:["or_mse_study_v1"] },
    { code:"dl",  short:"DL",  name:"Deep Learning",                course:"HMCAL703", date:"2026-11-30",
      accent:"#8a5a2b", keys:["hmcal703_dl_study_v1"] }
  ];

  var PREFIX = "sem7.summary.";
  var HASH = "#sem7=";
  var MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  var DAYS = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];

  function byCode(code){
    for(var i=0;i<SUBJECTS.length;i++) if(SUBJECTS[i].code===code) return SUBJECTS[i];
    return null;
  }

  /* ---------- dates (local time; the timetable is local) ---------- */
  function at(dateStr, hhmm){
    var d = dateStr.split("-"), t = hhmm.split(":");
    return new Date(+d[0], +d[1]-1, +d[2], +t[0], +t[1]);
  }
  function examStart(s){ return at(s.date, EXAM.start); }
  function examEnd(s){ return at(s.date, EXAM.end); }
  function midnight(d){ return new Date(d.getFullYear(), d.getMonth(), d.getDate()); }
  function dayDiff(a, b){ return Math.round((midnight(b) - midnight(a)) / 864e5); }
  function addDays(d, n){ return new Date(d.getFullYear(), d.getMonth(), d.getDate() + n); }

  /* state: "upcoming" | "today" | "live" | "done", plus whole calendar days left */
  function countdown(s, now){
    now = now || new Date();
    var start = examStart(s), end = examEnd(s), days = dayDiff(now, start);
    if(now >= end) return { state:"done", days:days, text:"Done" };
    if(now >= start) return { state:"live", days:0, text:"In progress" };
    if(days === 0) return { state:"today", days:0, text:"Today, " + EXAM.start };
    if(days === 1) return { state:"upcoming", days:1, text:"Tomorrow" };
    return { state:"upcoming", days:days, text:"in " + days + " days" };
  }
  /* Takes a subject (its exam date) or a Date. */
  function dateParts(d){
    if(!(d instanceof Date)) d = examStart(d);
    return { dow:DAYS[d.getDay()], day:d.getDate(), mon:MONTHS[d.getMonth()] };
  }
  function nextSubject(now){
    now = now || new Date();
    for(var i=0;i<SUBJECTS.length;i++) if(now < examEnd(SUBJECTS[i])) return SUBJECTS[i];
    return null;
  }

  /* ---------- storage, always guarded ---------- */
  function lsGet(k){ try { return window.localStorage.getItem(k); } catch(e){ return null; } }
  function lsSet(k, v){ try { window.localStorage.setItem(k, v); return true; } catch(e){ return false; } }

  function clampPct(n){ n = Number(n); return isFinite(n) ? Math.max(0, Math.min(100, Math.round(n))) : null; }
  function count(n){ return Number.isFinite(n) && n >= 0 ? Math.round(n) : null; }
  function str(s, n){ return typeof s === "string" && s ? s.slice(0, n) : null; }

  /* Read a summary and keep only well-formed fields. Version 1 summaries
     (no topics, current or next) still read; those fields are just null. */
  function readSummary(code){
    var raw = lsGet(PREFIX + code), o;
    if(!raw) return null;
    try { o = JSON.parse(raw); } catch(e){ return null; }
    if(!o || typeof o !== "object" || o.subject !== code) return null;
    var pct = clampPct(o.pct);
    if(pct === null) return null;
    var mods = Array.isArray(o.modules) ? o.modules.filter(function(m){
      return m && typeof m.id === "string" && clampPct(m.pct) !== null;
    }).map(function(m){
      return { id:m.id, name:String(m.name || m.id).slice(0, 60), title:str(m.title, 120), pct:clampPct(m.pct) };
    }) : [];
    var t = o.topics, topics = null;
    if(t && count(t.done) !== null && count(t.total) !== null && t.done <= t.total)
      topics = { done:count(t.done), total:count(t.total) };
    var current = o.current && typeof o.current.id === "string" ?
      { id:o.current.id, title:str(o.current.title, 120) || o.current.id } : null;
    var next = o.next && str(o.next.title, 200) ?
      { title:str(o.next.title, 200), target:str(o.next.target, 120) } : null;
    return {
      pct:pct,
      done: count(o.done),
      total: count(o.total),
      unit: str(o.unit, 30) || "items",
      label: str(o.label, 80) || "Progress",
      topics:topics, current:current, next:next,
      modules: mods,
      updatedAt: typeof o.updatedAt === "string" ? o.updatedAt : null
    };
  }
  function hasOwnProgress(s){
    for(var i=0;i<s.keys.length;i++) if(lsGet(s.keys[i])) return true;
    return false;
  }
  /* A link to a subject from the hub. With a target, the bridge opens that topic. */
  function subjectHref(s, target){
    return "subjects/" + s.code + "/index.html" + (target ? HASH + encodeURIComponent(target) : "");
  }

  /* ---------- study sessions ----------
     Two sessions a day from today until the last paper, derived from the
     timetable and each subject's remaining work:
       - the main session always goes to the next paper;
       - in the last two days before a paper, both sessions go to it;
       - otherwise the second session goes to the later paper furthest behind,
         rotating so one subject does not take every evening;
       - on an exam day, the afternoon goes to the following paper.
     `sums` maps subject code -> summary (or null). */
  function plan(now, sums, ndays){
    now = now || new Date();
    sums = sums || {};
    var today = midnight(now), out = [], given = {};
    function left(s){ var x = sums[s.code]; return x ? 100 - x.pct : 100; }
    for(var i = 0; i < ndays; i++){
      var d = addDays(today, i), exam = null, ahead = [];
      SUBJECTS.forEach(function(s){
        var gap = dayDiff(d, examStart(s));
        if(gap === 0) exam = s; else if(gap > 0) ahead.push(s);
      });
      if(!exam && !ahead.length) break;
      var day = { date:d, exam:exam, main:ahead[0] || null, also:null, full:false };
      if(ahead.length && !exam){
        if(dayDiff(d, examStart(ahead[0])) <= 2 || ahead.length === 1) day.full = true;
        else {
          var best = null, bestScore = -1;
          ahead.slice(1).forEach(function(s){
            var score = (left(s) + 1) / (1 + (given[s.code] || 0));
            if(score > bestScore){ best = s; bestScore = score; }
          });
          day.also = best;
          given[best.code] = (given[best.code] || 0) + 1;
        }
      }
      out.push(day);
    }
    return out;
  }

  /* ---------- the strip ---------- */
  /* The strip's styles live in shared/sem7.css with the rest of the design system. */
  function esc(s){ return String(s).replace(/[&<>"]/g, function(c){ return {"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;"}[c]; }); }

  function stripHTML(s){
    var subs = SUBJECTS.map(function(o){
      return '<a class="sem7-a" href="../' + o.code + '/index.html" title="' + esc(o.name) + '"' +
        (o === s ? ' aria-current="page"' : '') + '>' + esc(o.short) + '</a>';
    }).join("");
    var p = dateParts(s), c = countdown(s);
    var when = c.state === "done" ? "ESE done" :
      'ESE ' + p.dow + ' ' + p.day + ' ' + p.mon + ' &middot; <b>' + esc(c.text) + '</b>';
    return '<a class="sem7-a sem7-home" href="../../index.html">&larr; Semester 7</a>' +
      '<span class="sem7-subs">' + subs + '</span>' +
      '<span class="sem7-next">' + when + '</span>';
  }

  function mountStrip(s){
    if(document.querySelector(".sem7-strip")) return;
    var el = document.createElement("div");
    el.className = "sem7-strip";
    el.setAttribute("role", "navigation");
    el.setAttribute("aria-label", "Semester 7");
    el.innerHTML = stripHTML(s);
    /* First in the page, but after a skip link so that stays the first tab stop. */
    var first = document.body.firstElementChild;
    while(first && (first.classList.contains("skip") || first.tagName === "SCRIPT")) first = first.nextElementSibling;
    document.body.insertBefore(el, first);
  }

  /* ---------- per-subject adapters ----------
     Each one calls the subject site's own progress functions, so the hub shows
     exactly the figure that site's dashboard shows, with that site's meaning.
     The names are the sites' own top-level globals, resolved when the adapter
     runs, after the site's script has loaded.
       hooks      the global functions every progress change passes through
       summarize  overall figure, topic counts, module bars, and the site's own
                  "study next" choice (the next item and its module)
       open       opens a `next.target` with the site's own navigation */
  function mod(m, pct, title){ return { id:m, name:"M" + String(m).replace(/\D/g, ""), title:title || null, pct:pct }; }
  function cur(m, title){ return m ? { id:m, title:title || m } : null; }
  function split(target){
    var i = String(target).indexOf(":");
    return i < 0 ? [target, ""] : [target.slice(0, i), target.slice(i + 1)];
  }
  /* OR and DL have no "study next" of their own: take the first exam-priority topic
     already started, else the first not started, in course order. */
  function firstOpen(list, status){
    var open = list.filter(function(t){ return status(t.id) !== "done"; });
    return open.filter(function(t){ return status(t.id) === "progress"; })[0] || open[0] || null;
  }
  function doneCount(list, status){ return list.filter(function(t){ return status(t.id) === "done"; }).length; }
  function find(list, id){ return list.filter(function(x){ return x.id === id; })[0] || null; }
  /* Some sites keep titles as HTML ("Model Building &amp; Validation"); the summary holds plain text. */
  var scratch = null;
  function plain(s){
    if(s == null || String(s).indexOf("&") < 0 && String(s).indexOf("<") < 0) return s;
    scratch = scratch || document.createElement("textarea");
    scratch.innerHTML = String(s).replace(/<[^>]*>/g, "");
    return scratch.value;
  }

  /* global COURSE, P, studyNext, allTopics, topicById, ROUTE, MODULE_TITLES, nextUp, moduleItems,
     effectiveStatus, render, MODULES, TOPICS, TOPIC_BY_ID, openTopic, goto, examTopics, topicStatus,
     go, highTopics, overallProgress, moduleProgress, overallStats, moduleStats */
  var ADAPTERS = {
    ai: { hooks:["saveProgress", "render"],
      summarize:function(){
        var o = overallProgress(), ts = allTopics(), n = studyNext(), next = null;
        if(n.topic) next = { title:n.topic.title, target:"topic:" + n.topic.id, m:n.topic.moduleId };
        else if(n.quiz) next = { title:n.quiz.title, target:"quiz:" + n.quiz.id, m:n.quiz.module };
        var m = next && find(COURSE.modules, next.m);
        return { label:"Study items completed", unit:"study items", pct:o.pct, done:o.done, total:o.total,
          topics:{ done:ts.filter(function(t){ return P.topics[t.id] === "done"; }).length, total:ts.length },
          current: m ? cur(m.id, "Module " + m.num + " · " + m.title) : null, next:next,
          modules: COURSE.modules.map(function(x){ return mod(x.id, moduleProgress(x).pct, x.title); }) };
      },
      open:function(target){
        var t = split(target);
        if((t[0] === "topic" && topicById(t[1])) || t[0] === "quiz") location.hash = "#/" + t[0] + "/" + t[1];
      }},
    nlp: { hooks:["saveProgress", "render"],
      summarize:function(){
        var o = overallStats(), mods = Object.keys(MODULE_TITLES), groups = {};
        /* NLP marks questions, not topics; a syllabus topic (1.1, 2.4 ...) counts
           as done when every question filed under it is done. */
        mods.forEach(function(m){ moduleItems(m).forEach(function(i){
          var code = m + ":" + ((String(i.topic || "").match(/^\d+(\.\d+)?/) || ["?"])[0]);
          var g = groups[code] || (groups[code] = { all:0, done:0 });
          g.all++; if(effectiveStatus(i) === "done") g.done++;
        }); });
        var keys = Object.keys(groups), nu = nextUp();
        var sub = nu.kind === "quiz" ? "quiz" : nu.kind === "solved" ? "solved" : "";
        return { label:"Items done", unit:"items", pct:o.pct, done:o.done, total:o.total,
          topics:{ done:keys.filter(function(k){ return groups[k].done === groups[k].all; }).length, total:keys.length },
          current: nu.m ? cur(nu.m, MODULE_TITLES[nu.m].replace(/\s+—\s+/, " · ")) : null,
          next: { title:String(nu.label), target: nu.m ? "module:" + nu.m + (sub ? ":" + sub : "") : "view:mock" },
          modules: mods.map(function(m){ return mod(m, moduleStats(m).pct, MODULE_TITLES[m].split("—").pop().trim()); }) };
      },
      open:function(target){
        var t = split(target);
        if(t[0] === "view" && t[1] === "mock"){ ROUTE.view = "mock"; render(); return; }
        if(t[0] !== "module") return;
        var ms = split(t[1]);
        if(!MODULE_TITLES[ms[0]]) return;
        ROUTE.view = ms[0];
        if(ms[1]) ROUTE.sub[ms[0]] = ms[1];
        render();
      }},
    ads: { hooks:["save", "render"],
      summarize:function(){
        var o = overallProgress(), n = studyNext(), next = null;
        if(n.topic) next = { title:n.topic.title, target:"topic:" + n.topic.id, m:n.topic.m };
        else if(n.view) next = { title:n.view === "quiz" ? "Self-test quiz" : "Exam practice", target:"view:" + n.view };
        var m = next && next.m && find(MODULES, next.m);
        return { label:"Questions marked done", unit:"questions", pct:o.pct, done:o.done, total:o.total,
          topics:{ done:o.topicsDone, total:o.topics },
          current: m ? cur(m.id, "Module " + m.num + " · " + m.title) : null, next:next,
          modules: MODULES.map(function(x){ return mod(x.id, moduleProgress(x.id).pct, x.title); }) };
      },
      open:function(target){
        var t = split(target);
        if(t[0] === "topic" && TOPIC_BY_ID[t[1]]) openTopic(t[1]);
        else if(t[0] === "view" && (t[1] === "quiz" || t[1] === "exam")) goto(t[1]);
      }},
    or: { hooks:["saveProgress", "render"],
      summarize:function(){
        var o = overallProgress(), list = examTopics(), t = firstOpen(list, topicStatus);
        var m = t && find(MODULES, t.m);
        return { label:"Exam-priority questions done", unit:"questions", pct:o.pct, done:o.done, total:o.total,
          topics:{ done:doneCount(list, topicStatus), total:list.length },
          current: m ? cur(m.id, m.n + " · " + m.title) : null,
          next: t ? { title:t.title, target:"topic:" + t.id } : null,
          modules: MODULES.map(function(x){ return mod(x.id, moduleProgress(x.id).pct, x.title); }) };
      },
      open:function(target){
        var t = split(target);
        if(t[0] === "topic" && find(TOPICS, t[1])) go({ name:"topic", id:t[1] });
      }},
    dl: { hooks:["saveProgress", "render"],
      summarize:function(){
        var o = overallProgress(), list = highTopics(), t = firstOpen(list, topicStatus);
        var m = t && find(MODULES, t.m);
        return { label:"High-priority questions done", unit:"questions", pct:o.pct, done:o.done, total:o.total,
          topics:{ done:doneCount(list, topicStatus), total:list.length },
          current: m ? cur(m.id, "Module " + m.n + " · " + m.title) : null,
          next: t ? { title:t.title, target:"topic:" + t.id } : null,
          modules: MODULES.map(function(x){ return mod(x.id, moduleProgress(x.id).pct, x.title); }) };
      },
      open:function(target){
        var t = split(target);
        if(t[0] === "topic" && find(TOPICS, t[1])) go("topic", t[1]);
      }}
  };

  /* ---------- publishing a subject's summary ---------- */
  function attach(code, summarize, hooks){
    var s = byCode(code), ad = ADAPTERS[code];
    if(!s) return;
    if(!summarize && ad){ summarize = ad.summarize; hooks = ad.hooks; }
    if(typeof summarize !== "function") return;
    var queued = false;
    function publish(){
      queued = false;
      try {
        var r = summarize();
        if(!r || clampPct(r.pct) === null) return;
        lsSet(PREFIX + code, JSON.stringify({
          v:2, subject:code, label:r.label || "Progress", unit:r.unit || "items", pct:clampPct(r.pct),
          done:r.done, total:r.total, topics:r.topics || null,
          current: r.current ? { id:r.current.id, title:plain(r.current.title) } : null,
          next: r.next ? { title:plain(r.next.title), target:r.next.target } : null,
          modules:(r.modules || []).map(function(m){ return { id:m.id, name:m.name, title:plain(m.title), pct:m.pct }; }),
          updatedAt:new Date().toISOString()
        }));
      } catch(e){ /* a summary is never worth breaking the site for */ }
    }
    function schedule(){ if(!queued){ queued = true; setTimeout(publish, 0); } }

    /* Every progress change in these sites goes through a save or a re-render
       (resets clear storage directly and then re-render), so wrapping those
       global functions catches all of them without touching the site's code. */
    (hooks || []).forEach(function(name){
      var f = window[name];
      if(typeof f !== "function") return;
      window[name] = function(){ var out = f.apply(this, arguments); schedule(); return out; };
    });
    window.addEventListener("pagehide", publish);
    document.addEventListener("visibilitychange", function(){ if(document.visibilityState === "hidden") publish(); });

    try { mountStrip(s); } catch(e){}
    try { watchTabs(); } catch(e){}

    /* Opened from the hub's Continue link: drop the bridge's hash, then open the
       target through the site. An unknown target leaves the site's dashboard. */
    if(location.hash.indexOf(HASH) === 0){
      var target = "";
      try { target = decodeURIComponent(location.hash.slice(HASH.length)); } catch(e){}
      try { history.replaceState(null, "", location.pathname + location.search); } catch(e){}
      if(code === "ai") location.hash = "#/";   /* AI routes by hash: give it a valid one first */
      if(target && ad && ad.open) try { ad.open(target); } catch(e){}
    }
    publish();
  }

  /* ---------- shared page parts ----------
     One implementation of the pieces every subject repeats: the topic and module
     header (breadcrumb, title, progress), the completion status, and the
     previous / next pager. Sites call these from their own view functions, so
     each site keeps its own router. A link is { label, attrs }, where `attrs`
     is the site's own data-attributes ('data-go="m1"'), so the site's existing
     click handler does the navigating. Labels and titles are HTML: callers
     escape anything that is not already safe. */
  var STATUS_LABEL = { none:"Not started", progress:"In progress", done:"Done" };
  function stateOf(done, total){ return total > 0 && done >= total ? "done" : (done > 0 ? "progress" : "none"); }
  function link(l, cls){
    if(!l) return "";
    var c = cls ? ' class="' + cls + '"' : "";
    return l.attrs ? '<button type="button"' + c + " " + l.attrs + ">" + l.label + "</button>"
                   : "<span" + c + ">" + l.label + "</span>";
  }
  var UI = {
    status:function(state, label){
      state = STATUS_LABEL[state] ? state : "none";
      return '<span class="s7-status is-' + state + '"><span class="s7-dot' + (state === "none" ? "" : " is-" + state) +
        '" aria-hidden="true"></span>' + (label || STATUS_LABEL[state]) + "</span>";
    },
    /* items: [{label, attrs}], parent levels only; the page's own h1 is the last level */
    crumb:function(items){
      return '<nav class="s7-crumb" aria-label="Breadcrumb"><ol>' +
        items.filter(Boolean).map(function(l){ return "<li>" + link(l) + "</li>"; }).join("") + "</ol></nav>";
    },
    /* o: {done, total, unit, state?, pct?, note?}. With `pct` it leads with a percentage
       (module pages); otherwise with the completion status (topic pages). A site that
       marks whole topics rather than counting questions passes only {state, note}. */
    progress:function(o){
      if(o.total == null) return '<div class="s7-progress">' + UI.status(o.state) +
        (o.note ? '<span class="s7-count">' + o.note + "</span>" : "") + "</div>";
      var total = o.total || 0, done = Math.min(o.done || 0, total);
      var pct = o.pct != null ? o.pct : (total ? Math.round(done / total * 100) : 0);
      var lead = o.pct != null ? '<span class="s7-pct">' + pct + "%</span>" : UI.status(o.state || stateOf(done, total));
      return '<div class="s7-progress">' + lead +
        '<div class="bar" role="progressbar" aria-label="Progress" aria-valuemin="0" aria-valuemax="100" aria-valuenow="' + pct + '">' +
        '<i style="width:' + pct + '%"' + (pct >= 100 ? ' class="s7-full"' : "") + "></i></div>" +
        '<span class="s7-count">' + done + " / " + total + " " + (o.unit || "questions") + (o.note ? " &middot; " + o.note : "") +
        "</span></div>";
    },
    /* o: {crumb:[...], eyebrow, title, meta, sub, progress} */
    head:function(o){
      return '<header class="s7-head">' +
        (o.crumb ? UI.crumb(o.crumb) : "") +
        (o.eyebrow ? '<div class="s7-eyebrow">' + o.eyebrow + "</div>" : "") +
        "<h1>" + o.title + "</h1>" +
        (o.meta ? '<div class="s7-meta">' + o.meta + "</div>" : "") +
        (o.sub ? '<p class="s7-sub">' + o.sub + "</p>" : "") +
        (o.progress ? UI.progress(o.progress) : "") + "</header>";
    },
    /* o: {prev:{title, attrs, note}, next:{...}, up:{label, attrs}} */
    pager:function(o){
      function side(x, cls, word){
        if(!x) return "";
        return '<button type="button" class="' + cls + '" ' + x.attrs + '><span class="s7-k">' +
          (cls === "s7-prev" ? "&larr; " : "") + word + (x.note ? " &middot; " + x.note : "") +
          (cls === "s7-next" ? " &rarr;" : "") + '</span><span class="s7-t">' + x.title + "</span></button>";
      }
      return '<nav class="s7-pager" aria-label="Topic navigation">' +
        side(o.prev, "s7-prev", "Previous") + side(o.next, "s7-next", "Next") +
        (o.up ? link(o.up, "s7-up") : "") + "</nav>";
    },
    /* Neighbours of `id` in an ordered list of {id, m, ...}. Crossing into another
       module is noted with moduleLabel(m). Returns {prev, next}: {t, note} or null. */
    neighbours:function(list, id, moduleLabel){
      var i = -1;
      for(var k = 0; k < list.length; k++) if(list[k].id === id){ i = k; break; }
      if(i < 0) return { prev:null, next:null };
      function at(j){
        var t = list[j];
        return t ? { t:t, note: t.m !== list[i].m && moduleLabel ? moduleLabel(t.m) : "" } : null;
      }
      return { prev:at(i - 1), next:at(i + 1) };
    }
  };

  /* ---------- tab overflow ----------
     Every subject bar holds one row of tabs (.s7-tabs). Tabs that do not fit move
     into a "More" menu at the end of the row, so navigation stays one level deep
     at every width. The original buttons stay in place, hidden, and a menu item
     clicks its original, so each site's own handlers keep working. */
  var fitting = false, fitQueued = false, observers = [];
  function isActive(el){ return el.matches(".active,.on,[aria-selected='true'],[aria-current='page']"); }
  function closeMenu(){
    var m = document.querySelector(".s7-more-menu");
    if(m) m.remove();
    var b = document.querySelector(".s7-more > button[aria-expanded='true']");
    if(b) b.setAttribute("aria-expanded", "false");
  }
  function openMenu(btn, hidden){
    var menu = document.createElement("div");
    menu.className = "s7-more-menu";
    menu.setAttribute("role", "menu");
    hidden.forEach(function(orig){
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("role", "menuitem");
      b.textContent = orig.textContent.trim();
      if(isActive(orig)) b.setAttribute("aria-current", "true");
      b.addEventListener("click", function(){ closeMenu(); orig.click(); });
      menu.appendChild(b);
    });
    document.body.appendChild(menu);
    var r = btn.getBoundingClientRect(), w = menu.offsetWidth;
    menu.style.top = Math.round(r.bottom + 4) + "px";
    menu.style.left = Math.round(Math.max(8, Math.min(r.right - w, window.innerWidth - w - 8))) + "px";
    btn.setAttribute("aria-expanded", "true");
    var first = menu.querySelector("button");
    if(first) first.focus();
  }
  function fitTabs(tabs){
    var old = tabs.querySelector(".s7-more");
    if(old) old.remove();
    var items = Array.prototype.slice.call(tabs.children);
    items.forEach(function(x){ x.classList.remove("s7-off"); });
    if(!items.length || tabs.scrollWidth <= tabs.clientWidth + 1) return;
    var more = document.createElement("div");
    more.className = "s7-more";
    more.innerHTML = '<button type="button" aria-haspopup="menu" aria-expanded="false">More <span aria-hidden="true">&#9662;</span></button>';
    tabs.appendChild(more);
    var hidden = [], i = items.length - 1, btn = more.firstChild;
    function hideUntilFits(){
      for(; i > 0 && tabs.scrollWidth > tabs.clientWidth + 1; i--){
        items[i].classList.add("s7-off");
        hidden.unshift(items[i]);
      }
    }
    hideUntilFits();
    /* standing on a tab that is in the menu: the menu button names it, and the
       longer label may push one more tab into the menu */
    var act = hidden.filter(isActive)[0];
    if(act){
      more.classList.add("has-active");
      btn.innerHTML = esc(act.textContent.trim()) + ' <span aria-hidden="true">&#9662;</span>';
      hideUntilFits();
    }
    btn.addEventListener("click", function(ev){
      ev.stopPropagation();
      var wasOpen = btn.getAttribute("aria-expanded") === "true";
      closeMenu();
      if(!wasOpen) openMenu(btn, hidden);
    });
  }
  function fitAll(){
    fitting = true;
    try {
      closeMenu();
      Array.prototype.forEach.call(document.querySelectorAll(".s7-tabs"), fitTabs);
    } finally {
      /* our own changes are not a reason to fit again */
      observers.forEach(function(o){ o.takeRecords(); });
      fitting = false;
    }
  }
  function queueFit(){
    if(fitting || fitQueued) return;
    fitQueued = true;
    (window.requestAnimationFrame || setTimeout)(function(){ fitQueued = false; fitAll(); });
  }
  function watchTabs(){
    if(!document.querySelector(".s7-bar")) return;
    if(window.MutationObserver) Array.prototype.forEach.call(document.querySelectorAll(".s7-bar"), function(bar){
      var o = new MutationObserver(queueFit);
      observers.push(o);
      o.observe(bar, { childList:true, subtree:true, attributes:true,
        attributeFilter:["class", "aria-selected", "aria-current"] });
    });
    window.addEventListener("resize", queueFit);
    document.addEventListener("click", function(e){ if(!e.target.closest(".s7-more-menu")) closeMenu(); });
    document.addEventListener("keydown", function(e){ if(e.key === "Escape") closeMenu(); });
    window.addEventListener("scroll", closeMenu, { passive:true });
    fitAll();
  }

  window.SEM7 = {
    ui:UI,
    EXAM:EXAM, SUBJECTS:SUBJECTS, byCode:byCode,
    countdown:countdown, dateParts:dateParts, examStart:examStart, examEnd:examEnd, dayDiff:dayDiff, addDays:addDays,
    nextSubject:nextSubject, readSummary:readSummary, hasOwnProgress:hasOwnProgress, subjectHref:subjectHref,
    plan:plan, attach:attach, lsGet:lsGet, lsSet:lsSet
  };
})();
