/* =====================================================================
   SEMESTER 7 — shared bridge
   The single source for the End Sem timetable and the subject list, used by
   the hub (index.html) and by every subject site.

   A subject site adds two lines at the very end of its <body>:
     <script src="../../shared/sem7.js"></script>
     <script>window.SEM7 && SEM7.attach("ads");</script>
   SEM7.attach does two things and nothing else:
     1. adds a thin strip above the site's own header: back to the semester
        hub, jump to another subject, and this subject's exam countdown;
     2. writes a small read-only summary of the site's own progress to
        localStorage under "sem7.summary.<code>", so the hub can show it.
   It never reads or writes a subject's own progress key. If this file is
   missing, a subject site behaves exactly as it did on its own.
   ===================================================================== */
(function(){
  "use strict";

  var EXAM = { marks:50, duration:"2 hours", start:"10:30", end:"12:30" };

  /* Exam order. `key` is the subject's own progress key, used by the hub only
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
  function dateParts(s){
    var d = examStart(s);
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

  /* Read a summary and keep only well-formed fields. */
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
      return { id:m.id, name:String(m.name || m.id).slice(0, 60), pct:clampPct(m.pct) };
    }) : [];
    return {
      pct:pct,
      done: Number.isFinite(o.done) ? o.done : null,
      total: Number.isFinite(o.total) ? o.total : null,
      label: typeof o.label === "string" ? o.label.slice(0, 80) : "Progress",
      modules: mods,
      updatedAt: typeof o.updatedAt === "string" ? o.updatedAt : null
    };
  }
  function hasOwnProgress(s){
    for(var i=0;i<s.keys.length;i++) if(lsGet(s.keys[i])) return true;
    return false;
  }

  /* ---------- the strip ---------- */
  var STRIP_CSS =
    ".sem7-strip{box-sizing:border-box;display:flex;align-items:center;gap:6px 18px;flex-wrap:wrap;" +
      "min-height:34px;padding:5px clamp(12px,3vw,32px);background:#171a21;color:#b9c0cc;" +
      "font:500 12.5px/1.3 -apple-system,BlinkMacSystemFont,\"Segoe UI\",Roboto,Helvetica,Arial,sans-serif;" +
      "letter-spacing:0;position:relative;z-index:1}" +
    ".sem7-strip *{box-sizing:border-box}" +
    ".sem7-strip a.sem7-a{color:#e9ecf1;text-decoration:none;border-radius:5px;padding:3px 6px;margin:0 -6px}" +
    ".sem7-strip a.sem7-a:hover{background:rgba(255,255,255,.08);color:#fff}" +
    ".sem7-strip a.sem7-a:focus-visible{outline:2px solid #8fb4ff;outline-offset:1px}" +
    ".sem7-strip .sem7-home{font-weight:600}" +
    ".sem7-strip .sem7-subs{display:flex;gap:2px 14px;flex-wrap:wrap;margin-left:4px}" +
    ".sem7-strip .sem7-subs a.sem7-a{color:#9aa3b2}" +
    ".sem7-strip .sem7-subs a.sem7-a:hover{color:#fff}" +
    ".sem7-strip .sem7-subs a.sem7-a[aria-current=page]{color:#fff;font-weight:600;" +
      "box-shadow:inset 0 -2px 0 #e9ecf1;border-radius:0}" +
    ".sem7-strip .sem7-next{margin-left:auto;color:#b9c0cc;white-space:nowrap}" +
    ".sem7-strip .sem7-next b{color:#fff;font-weight:600}" +
    "@media (max-width:520px){.sem7-strip .sem7-next{display:none}}" +
    "@media print{.sem7-strip{display:none}}";

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
    var style = document.createElement("style");
    style.textContent = STRIP_CSS;
    document.head.appendChild(style);
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
     runs, after the site's script has loaded. `hooks` are the global functions
     every progress change passes through. */
  function mod(id, pct){ return { id:id, name:"M" + String(id).replace(/\D/g, ""), pct:pct }; }
  /* global COURSE, MODULES, MODULE_TITLES, overallProgress, moduleProgress, overallStats, moduleStats */
  var ADAPTERS = {
    ai: { hooks:["saveProgress", "render"], summarize:function(){
      var o = overallProgress();
      return { label:"Study items completed", pct:o.pct, done:o.done, total:o.total,
        modules: COURSE.modules.map(function(m){ return mod(m.id, moduleProgress(m).pct); }) };
    }},
    nlp: { hooks:["saveProgress", "render"], summarize:function(){
      var o = overallStats();
      return { label:"Items done", pct:o.pct, done:o.done, total:o.total,
        modules: Object.keys(MODULE_TITLES).map(function(m){ return mod(m, moduleStats(m).pct); }) };
    }},
    ads: { hooks:["save", "render"], summarize:function(){
      var o = overallProgress();
      return { label:"Questions marked done", pct:o.pct, done:o.done, total:o.total,
        modules: MODULES.map(function(m){ return mod(m.id, moduleProgress(m.id).pct); }) };
    }},
    or: { hooks:["saveProgress", "render"], summarize:function(){
      var o = overallProgress();
      return { label:"Exam-priority questions done", pct:o.pct, done:o.done, total:o.total,
        modules: MODULES.map(function(m){ return mod(m.id, moduleProgress(m.id).pct); }) };
    }},
    dl: { hooks:["saveProgress", "render"], summarize:function(){
      var o = overallProgress();
      return { label:"High-priority questions done", pct:o.pct, done:o.done, total:o.total,
        modules: MODULES.map(function(m){ return mod(m.id, moduleProgress(m.id).pct); }) };
    }}
  };

  /* ---------- publishing a subject's summary ---------- */
  function attach(code, summarize, hooks){
    var s = byCode(code);
    if(!s) return;
    if(!summarize && ADAPTERS[code]){ summarize = ADAPTERS[code].summarize; hooks = ADAPTERS[code].hooks; }
    if(typeof summarize !== "function") return;
    var queued = false;
    function publish(){
      queued = false;
      try {
        var r = summarize();
        if(!r || clampPct(r.pct) === null) return;
        lsSet(PREFIX + code, JSON.stringify({
          v:1, subject:code, label:r.label || "Progress", pct:clampPct(r.pct),
          done:r.done, total:r.total, modules:r.modules || [], updatedAt:new Date().toISOString()
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
    publish();
  }

  window.SEM7 = {
    EXAM:EXAM, SUBJECTS:SUBJECTS, byCode:byCode,
    countdown:countdown, dateParts:dateParts, examStart:examStart, examEnd:examEnd, dayDiff:dayDiff,
    nextSubject:nextSubject, readSummary:readSummary, hasOwnProgress:hasOwnProgress,
    attach:attach, lsGet:lsGet, lsSet:lsSet
  };
})();
