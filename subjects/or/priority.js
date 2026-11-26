/* =========================================================
   PRIORITY TAB (25 Nov 2026): the teacher's note for the End Sem
   The note, as sent:
     do prev year papers' questions
     questions from ppt slides; nothing apart from that - only nos. have changed
     2m from mse mods - payoff matrix, etc. (3 theory + 2 numerical) straightforward and simple
     q1. any 5 - mod 5+1 (mse)
     q2. any 2 - mod 03
     q3. any 4 - mod 04
     q4. any 1 - mod 06
     shortest path graph question there fs (mse)
     q4. game theory, saddle point, dentist problem, bakery numerical
     farmers problem

   Everything here points at questions already solved on the topic pages.
   A tick is the same tick as on the topic page (P.examples / P.practice),
   so nothing is stored twice. Loaded before the main script; it only calls
   the main script's functions (isDone, TBYID, esc ...) at render time.
   ========================================================= */
var PZ_NOTE = [
  "do prev year papers' questions",
  "questions from ppt slides; nothing apart from that-only nos. have changed",
  "2m from mse mods-payoff matrix, etc. (3 theory + 2 numerical) straightforward and simple",
  "q1. any 5- mod 5+1(mse)",
  "q2. any 2- mod 03",
  "q3. any 4- mod 04",
  "q4. any 1- mod 06",
  "shortest path graph question there fs (mse)",
  "q4. game theory, saddle point, dentist problem, bakery numerical",
  "farmers problem"
];
var PZ_TAGS = {
  note:["Named in the note", "pz-tg-note"],
  past:["Past paper", "pz-tg-past"],
  ia:["Past IA paper", "pz-tg-past"],
  imp:["Important list", "pz-tg-imp"],
  deck:["From the slides", "pz-tg-deck"],
  extra:["Not in the slides", "pz-tg-extra"]
};
/* k: "e" worked example, "p" practice question; id: the item on its topic page */
var PZQ = [
  {q:"Q1", pick:"Any 5", marks:"2 marks each", mods:["m1","m5"], from:"Modules 1 and 5 (MSE modules)",
   expect:"3 theory + 2 numerical. Straightforward: payoff matrix and the like.",
   flow:[["Payoff matrix","row minima, column maxima"],["Saddle point?","maximin = minimax → done"],["No saddle","dominance, then 2×2 formula"],["Answer","strategies + value V"]],
   groups:[
    {h:"Numerical: payoff matrix (2 marks)", items:[
      {k:"e", id:"m5t6e4", t:"Saddle point, 3×3: rows (10, 5, 7), (8, 6, 9), (−2, 4, 3)", tags:["note","imp"]},
      {k:"e", id:"m5t6e3", t:"Solve the 4×2 game (value 0)", tags:["imp"]},
      {k:"e", id:"m1t21e4", t:"Is the game strictly determinable? Value of the game", tags:["imp"]},
      {k:"e", id:"m5t8e3", t:"2×2 game: rows (1, 4), (3, 2)", tags:["imp"]},
      {k:"e", id:"m5t8e4", t:"Best strategies, and is the game fair? rows (5, 2), (3, 4)", tags:["imp"]},
      {k:"e", id:"m5t10e4", t:"Reduce by dominance, find the value: rows (3, 8), (9, 6), (6, 4)", tags:["imp"]},
      {k:"e", id:"m5t10e3", t:"3×3 with no saddle point: rows (4, 8, 6), (6, 2, 10), (4, 5, 7)", tags:["imp"]},
      {k:"e", id:"m5t6e1", t:"Deck: the 4×5 saddle point", tags:["note","deck"]},
      {k:"e", id:"m5t9e1", t:"Deck: two dominance reductions", tags:["deck"]}]},
    {h:"Numerical: the farmers problem (Module 1, LP)", items:[
      {k:"e", id:"m1t11e4", t:"Farmer's 110 hectares, wheat or barley: formulate and solve graphically", tags:["note","deck"]},
      {k:"p", id:"m1t10p1", t:"Cooperative society of farmers, 50 hectares: formulate the LPP", tags:["note","deck"]},
      {k:"p", id:"m1t11p2", t:"Cooperative society: solve it graphically", tags:["note","deck"]}]},
    {h:"Theory (2 marks)", items:[
      {k:"e", id:"m1t21e3", t:"Two advantages of OR in managerial decision-making", tags:["ia","imp"]},
      {k:"e", id:"m1t21e1", t:"Objective function vs constraints", tags:["ia","imp"]},
      {k:"e", id:"m1t21e2", t:"Feasible vs optimal solution, with an example", tags:["ia","imp"]},
      {k:"p", id:"m1t21p1", t:"Types of constraints in an LPP", tags:["imp"]},
      {k:"p", id:"m1t21p2", t:"Two limitations of OR", tags:["imp"]},
      {k:"p", id:"m5t1p1", t:"Pure strategy vs mixed strategy", tags:["deck"]},
      {k:"p", id:"m5t1p2", t:"Maximin vs minimax", tags:["deck"]},
      {k:"p", id:"m5t2p1", t:"Why a zero-sum game needs only one matrix", tags:["deck"]},
      {k:"p", id:"m5t7p1", t:"Value of the game, two definitions", tags:["deck"]},
      {k:"p", id:"m5t9p1", t:"Both dominance rules", tags:["deck"]}]}
   ]},
  {q:"Q2", pick:"Any 2", marks:"", mods:["m3"], from:"Module 3: Simulation",
   expect:"Monte Carlo tables. The note names the dentist and the bakery problems.",
   flow:[["Probabilities","→ cumulative"],["RN intervals","00–99 cut by cumulative"],["Table","RN → value, one row per trial"],["Answer","average, stock or waiting"]],
   groups:[
    {h:"Named in the note", items:[
      {k:"e", id:"m3t4e1", t:"Dentist's clinic: average waiting time and idle time", tags:["note","deck"]},
      {k:"e", id:"m3t3e1", t:"Iyengar Bakery: cake demand, stock at 30 a day", tags:["note","deck","imp"]},
      {k:"e", id:"m3t3e3", t:"Lajwaab Bakery: same type, different numbers (10 marks)", tags:["note","imp"]},
      {k:"p", id:"m3t3p5", t:"Sweet Treats Bakery: bread, 28 packs a day", tags:["note","imp"]}]},
    {h:"Same method, other slide and list problems", items:[
      {k:"e", id:"m3t3e2", t:"Moped factory: lorry of 200, mopeds waiting, empty spaces", tags:["deck","imp"]},
      {k:"p", id:"m3t3p3", t:"Sweet Delight: donuts, 35 a day", tags:["imp"]},
      {k:"p", id:"m3t3p4", t:"Dairy: milk, 110 litres a day", tags:["imp"]},
      {k:"p", id:"m3t4p1", t:"Single counter: simulate arrivals and service", tags:[]}]},
    {h:"Theory", items:[
      {k:"p", id:"m3t1p1", t:"Define simulation; two advantages, two limitations", tags:["deck"]},
      {k:"p", id:"m3t2p2", t:"Why a 10-number run is not reliable (step 7)", tags:["deck"]}]}
   ]},
  {q:"Q3", pick:"Any 4", marks:"", mods:["m4"], from:"Module 4: Dynamic Programming",
   expect:"The shortest path graph question is certain (the note says \"fs\").",
   flow:[["Stages","cut the network into columns"],["Last stage","distance to the end node"],["Work back","f*(node) = min(arc + f*(next))"],["Trace forward","route + total distance"]],
   groups:[
    {h:"Certain: shortest path on a graph", items:[
      {k:"e", id:"m4t2e3", t:"Eleven nodes, arcs given as a table: node 1 to node 11", tags:["note","past","deck"]},
      {k:"e", id:"m4t2e4", t:"Eleven nodes, network given as a figure", tags:["note","past","deck"]},
      {k:"e", id:"m4t2e2", t:"George Yates: Rice (1) to Dixieville (7)", tags:["note","deck"]},
      {k:"p", id:"m4t2p3", t:"Lindsey Cortizan: university (1) to home (7)", tags:["deck"]},
      {k:"e", id:"m4t2e1", t:"Stagecoach A to J, four stages", tags:[]}]},
    {h:"The other slide problems", items:[
      {k:"e", id:"m4t3e1", t:"Cargo loading: vessel of capacity 5, three items", tags:["deck","imp"]},
      {k:"e", id:"m4t4e2", t:"Six crates of strawberries among four stores", tags:["deck","imp"]},
      {k:"e", id:"m4t4e1", t:"Capital budgeting: Rs 5 crore among three projects", tags:[]}]},
    {h:"Theory", items:[
      {k:"p", id:"m4t1p4", t:"Stage, state, decision variables on the George Yates problem", tags:["deck"]},
      {k:"p", id:"m4t1p3", t:"DP vs LP, and the four steps", tags:["deck"]},
      {k:"p", id:"m4t1p1", t:"Bellman's principle of optimality", tags:[]}]},
    {h:"Last, if time is left", items:[
      {k:"e", id:"m4t5e1", t:"Reliability: three components, budget 8", tags:["extra"]},
      {k:"e", id:"m4t6e1", t:"Employment smoothening: five months", tags:["extra"]}]}
   ]},
  {q:"Q4", pick:"Any 1", marks:"", mods:["m6"], from:"Module 6: Inventory",
   expect:"One long numerical. EOQ problems from the list and past papers.",
   flow:[["Read D, Co, Ch","per year, per order, per unit per year"],["EOQ","√(2DCo / Ch)"],["Orders, cycle","N = D/Q, t = Q/D"],["Total cost","DCo/Q + QCh/2 (+ D×price)"]],
   groups:[
    {h:"Listed and past paper EOQ", items:[
      {k:"e", id:"m6t3e4", t:"8000 a year, Re 1, carrying 20%, Rs 12.50 an order (listed twice)", tags:["imp"]},
      {k:"e", id:"m6t3e1", t:"ABC Corporation: 10,000 units, Rs 2, Rs 36, 9%", tags:["imp"]},
      {k:"e", id:"m6t3e2", t:"3600 units, set-up Rs 80, carrying Rs 1.2", tags:["imp"]},
      {k:"e", id:"m6t3e3", t:"Fluid, 50,000 litres (May-17)", tags:["past"]},
      {k:"e", id:"m6t7e1", t:"Reorder level and safety stock (Nov-18)", tags:["past"]},
      {k:"e", id:"m6t6e3", t:"Multiple price breaks: Rs 40, 39, 38 (Nov-19)", tags:["past"]}]},
    {h:"The other models from the slides and class problems", items:[
      {k:"e", id:"m6t4e1", t:"Model 2: cable plant, finite replenishment", tags:["deck"]},
      {k:"e", id:"m6t5e1", t:"Model 3: shortages, 25 units a month", tags:["deck"]},
      {k:"e", id:"m6t6e1", t:"Model 4: single price break, 5% off at 500", tags:["deck"]},
      {k:"e", id:"m6t6e2", t:"Model 4: gears, Rs 2 off at 200", tags:["deck"]}]},
    {h:"Theory", items:[
      {k:"e", id:"m6t1e1", t:"Reasons for carrying inventory", tags:["imp"]},
      {k:"e", id:"m6t1e2", t:"Basic terminology of inventory models", tags:["imp"]},
      {k:"p", id:"m6t1p1", t:"The three inventory costs and how they move with Q", tags:["deck"]}]}
   ]}
];

/* ---------- styles (shared tokens only, so both themes work) ---------- */
(function(){
  var css =
".pz-map{display:grid; grid-template-columns:repeat(auto-fit,minmax(200px,1fr)); gap:10px; margin:14px 0 4px}"+
".pz-qb{border:1px solid var(--border-2); border-radius:var(--radius); background:var(--surface); padding:12px 14px; cursor:pointer; text-align:left; font:inherit; color:inherit}"+
".pz-qb:hover{border-color:var(--accent-ui)}"+
".pz-qb .pz-qn{font:700 1.35rem/1 var(--sans); color:var(--accent-ui)}"+
".pz-qb .pz-pk{display:inline-block; margin-left:8px; font:650 .75rem/1.6 var(--sans); padding:0 8px; border-radius:99px; background:var(--accent-soft); color:var(--accent-ui); vertical-align:3px}"+
".pz-qb .pz-fr{font-weight:650; margin:8px 0 2px}"+
".pz-qb .pz-ex{font-size:.82rem; color:var(--text-2); line-height:1.45}"+
".pz-qb .pz-dn{font-size:.78rem; color:var(--muted); margin-top:8px}"+
".pz-bar{height:7px; border-radius:99px; background:var(--track); overflow:hidden; margin:6px 0 0}"+
".pz-bar i{display:block; height:100%; background:var(--good); border-radius:99px}"+
".pz-note{font:.86rem/1.6 var(--mono); background:var(--surface-2); border:1px solid var(--border); border-radius:8px; padding:10px 14px; margin:8px 0; white-space:pre-wrap}"+
".pz-read{margin:6px 0 0; padding-left:1.2rem; line-height:1.55}"+
".pz-read li{margin:.3rem 0}"+
".pz-sec{scroll-margin-top:80px; margin-top:26px}"+
".pz-sec > h2{display:flex; align-items:baseline; gap:10px; flex-wrap:wrap; margin:0 0 2px}"+
".pz-sec > h2 small{font-size:.85rem; font-weight:550; color:var(--muted)}"+
".pz-flow{display:flex; flex-wrap:wrap; gap:6px; align-items:stretch; margin:10px 0 4px}"+
".pz-flow .pz-box{flex:1 1 120px; border:1px solid var(--accent-line); background:var(--accent-soft); border-radius:8px; padding:7px 10px; font-size:.8rem; line-height:1.35; color:var(--text-2)}"+
".pz-flow .pz-box b{display:block; color:var(--accent-ui); font-size:.85rem}"+
".pz-flow .pz-ar{align-self:center; color:var(--muted); font-weight:700}"+
".pz-grp{margin-top:14px}"+
".pz-grp h3{font-size:.8rem; letter-spacing:.05em; text-transform:uppercase; color:var(--muted); margin:0 0 2px; display:flex; justify-content:space-between}"+
".pz-row{display:flex; align-items:center; gap:10px; padding:8px 0; border-bottom:1px solid var(--border); flex-wrap:wrap}"+
".pz-row:last-child{border-bottom:0}"+
".pz-row input{width:19px; height:19px; margin:0; accent-color:var(--good); flex:none; cursor:pointer}"+
".pz-row .pz-t{flex:1; min-width:180px; line-height:1.4}"+
".pz-row.done .pz-t > span{color:var(--muted); text-decoration:line-through}"+
".pz-row .pz-src{font-size:.76rem; color:var(--muted)}"+
".pz-tg{display:inline-block; font:650 .68rem/1.6 var(--sans); padding:0 7px; border-radius:99px; border:1px solid var(--border-2); color:var(--text-2); margin:0 0 0 6px; vertical-align:1px; white-space:nowrap}"+
".pz-tg-note{background:var(--warn-soft); border-color:var(--warn-line); color:var(--warn)}"+
".pz-tg-past{background:var(--accent-soft); border-color:var(--accent-line); color:var(--accent-ui)}"+
".pz-tg-imp{background:var(--violet-soft); border-color:var(--violet-line); color:var(--violet)}"+
".pz-tg-deck{background:var(--good-soft); border-color:var(--good-line); color:var(--good)}"+
".pz-strip{border:1px solid var(--warn-line); background:var(--warn-soft); border-radius:var(--radius); padding:12px 16px; margin:0 0 16px}"+
".pz-strip h3{margin:0 0 2px; font-size:.95rem}"+
".pz-strip .pz-row{border-color:var(--warn-line)}"+
".pill.pz-pill{background:var(--warn-soft); border-color:var(--warn-line); color:var(--warn)}";
  var s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);
})();

/* ---------- lookups (built once, after TOPICS exists) ---------- */
var PZ_IX = null;
function pzIndex(){
  if (PZ_IX) return PZ_IX;
  var where = {}, byItem = {}, byTopic = {};
  TOPICS.forEach(function(t){
    (t.examples || []).forEach(function(e){ where["e:"+e.id] = {t:t, it:e}; });
    (t.practice || []).forEach(function(p){ where["p:"+p.id] = {t:t, it:p}; });
  });
  PZQ.forEach(function(Q){ Q.groups.forEach(function(g){ g.items.forEach(function(x){
    var w = where[x.k+":"+x.id];
    if (!w){ if (window.console) console.warn("Priority: no item "+x.id); return; }
    x.topic = w.t; x.item = w.it; x.Q = Q.q;
    byItem[x.id] = x;
    (byTopic[w.t.id] = byTopic[w.t.id] || []).push(x);
  }); }); });
  return PZ_IX = {byItem:byItem, byTopic:byTopic};
}
function pzItems(Q){
  var out = [];
  (Q ? [Q] : PZQ).forEach(function(q){ q.groups.forEach(function(g){ g.items.forEach(function(x){ if (x.topic) out.push(x); }); }); });
  return out;
}
function pzDone(x){ return isDone(x.k, x.id); }
function pzCount(list){ var d = 0; list.forEach(function(x){ if (pzDone(x)) d++; }); return {done:d, total:list.length}; }
function pzBar(c){ return '<div class="pz-bar"><i style="width:'+(c.total ? Math.round(c.done*100/c.total) : 0)+'%"></i></div>'; }
function pzTagHtml(tags){ return (tags || []).map(function(k){ var t = PZ_TAGS[k]; return t ? '<span class="pz-tg '+t[1]+'">'+t[0]+'</span>' : ""; }).join(""); }

/* Tags the priority items on their topic pages, once at boot (called by the main script). */
function pzTagItems(){
  pzIndex();
  pzItems().forEach(function(x){
    var pill = '<span class="pill pz-pill">'+(x.tags.indexOf("note") >= 0 ? "Teacher's note · " : "Priority · ")+x.Q+'</span>';
    x.item.tags = pill + (x.item.tags || "");
  });
}
/* pill for a topic card holding priority items */
function pzTopicPill(t){
  var xs = pzIndex().byTopic[t.id];
  if (!xs) return "";
  var named = xs.some(function(x){ return x.tags.indexOf("note") >= 0; });
  return '<span class="pill pz-pill">'+(named ? "Teacher's note" : "Priority")+' · '+xs[0].Q+'</span>';
}

/* ---------- one checklist row ---------- */
function pzRow(x){
  var d = pzDone(x);
  return '<div class="pz-row'+(d ? " done" : "")+'">'+
    '<input type="checkbox" data-mark="'+x.k+'" data-id="'+esc(x.id)+'"'+(d ? " checked" : "")+' aria-label="Mark done: '+esc(x.t)+'">'+
    '<div class="pz-t"><span>'+esc(x.t)+'</span>'+pzTagHtml(x.tags)+
    '<div class="pz-src">'+esc(moduleName(x.topic.m))+' · '+esc(x.topic.title)+(x.k === "p" ? " · practice" : " · worked example")+'</div></div>'+
    '<button class="btn" data-go="topic" data-id="'+esc(x.topic.id)+'" data-anchor="'+esc(x.id)+'">Open</button></div>';
}
function pzFlow(f){
  return '<div class="pz-flow">'+f.map(function(b, i){ return (i ? '<span class="pz-ar">→</span>' : '')+'<div class="pz-box"><b>'+esc(b[0])+'</b>'+esc(b[1])+'</div>'; }).join("")+'</div>';
}
function pzQBox(Q, attrs){
  var c = pzCount(pzItems(Q));
  return '<button class="pz-qb" '+attrs+'><span class="pz-qn">'+Q.q+'</span><span class="pz-pk">'+Q.pick+(Q.marks ? ' · '+Q.marks : '')+'</span>'+
    '<div class="pz-fr">'+esc(Q.from)+'</div><div class="pz-ex">'+esc(Q.expect)+'</div>'+pzBar(c)+'<div class="pz-dn">'+c.done+' of '+c.total+' done</div></button>';
}

/* ---------- the Priority tab ---------- */
function viewPrio(){
  pzIndex();
  var all = pzCount(pzItems());
  var h = '<h1>Priority: the teacher\'s note</h1>'+
    '<p class="lead">The End Sem paper as the teacher described it on 25 Nov. Do these before anything else. Every row is a question already solved on its topic page, and a tick here is the same tick there.</p>'+
    '<div class="card">'+pzBar(all)+'<div class="small-muted" style="margin-top:6px">'+all.done+' of '+all.total+' priority questions done</div>'+
    '<div class="pz-map">'+PZQ.map(function(Q){ return pzQBox(Q, 'data-pzq="'+Q.q+'"'); }).join("")+'</div></div>';

  h += '<details class="card"><summary><b>The note, and how it is read here</b></summary>'+
    '<div class="pz-note">'+PZ_NOTE.map(esc).join("\n")+'</div>'+
    '<ul class="pz-read">'+
      '<li><b>Only the numbers change.</b> Questions come from the slides, so every slide problem is on the list below. Learn the method on the slide version, then do the list version with different numbers.</li>'+
      '<li><b>Q4 appears twice in the note.</b> The second line names problems, not a module, so each is filed under its own module: game theory and saddle point under Q1, the dentist and bakery problems under Q2 (Module 3, Simulation).</li>'+
      '<li><b>Farmers problem</b> is the LP formulation and graphical method from the Module 1 slides. Both slide versions are here: the 50-hectare cooperative and the 110-hectare wheat and barley (newly solved).</li>'+
      '<li><b>Shortest path is certain</b> in Q3. The two eleven-node past paper versions come first.</li>'+
      '<li><b>Previous year papers:</b> every question in the folder marked as a past paper or past IA paper is on this list. The folder has no complete previous End Sem paper.</li>'+
      '<li><b>Not in the note:</b> Module 2 (Queuing) and the Module 1 methods (simplex, Big M, duality, transportation, assignment). They come after this list.</li>'+
    '</ul></details>';

  PZQ.forEach(function(Q){
    var list = pzItems(Q), c = pzCount(list);
    h += '<section class="pz-sec" id="pzq-'+Q.q+'"><h2>'+Q.q+' · '+Q.pick+(Q.marks ? ' · '+Q.marks : '')+' <small>'+esc(Q.from)+' · '+c.done+'/'+c.total+'</small></h2>'+
      '<p class="small-muted" style="margin:0">'+esc(Q.expect)+'</p>'+pzFlow(Q.flow)+'<div class="card">';
    Q.groups.forEach(function(g){
      var gl = g.items.filter(function(x){ return x.topic; }), gc = pzCount(gl);
      h += '<div class="pz-grp"><h3><span>'+esc(g.h)+'</span><span>'+gc.done+'/'+gc.total+'</span></h3>'+gl.map(pzRow).join("")+'</div>';
    });
    h += '</div></section>';
  });

  h += '<section class="pz-sec"><h2>Then all else</h2><div class="card"><p style="margin-top:0">When the list above is ticked:</p><div class="btnrow">'+
    '<button class="btn" data-go="mod" data-m="m2">Module 2 · Queuing</button>'+
    '<button class="btn" data-go="mod" data-m="m1" data-sub="problem-solving">Module 1 · numericals</button>'+
    '<button class="btn" data-go="plan">Plan · full important list</button>'+
    '<button class="btn" data-go="quiz">Quiz</button>'+
    '<button class="btn" data-go="formulae">Formulae</button></div></div></section>';
  app.innerHTML = h;
}

/* ---------- module page strip: this module's part of the note ---------- */
function pzModuleStrip(m){
  pzIndex();
  var Q = PZQ.filter(function(q){ return q.mods.indexOf(m) >= 0; })[0];
  if (!Q) return "";
  var mine = pzItems(Q).filter(function(x){ return x.topic.m === m; });
  if (!mine.length) return "";
  var c = pzCount(mine), named = mine.filter(function(x){ return x.tags.indexOf("note") >= 0; });
  return '<section class="pz-strip"><h3>Teacher\'s note: '+Q.q+' · '+Q.pick+' · '+c.done+'/'+c.total+' done</h3>'+
    '<div class="small-muted">'+esc(Q.expect)+'</div>'+pzBar(c)+
    (named.length ? named.map(pzRow).join("") : "")+
    '<div style="margin-top:8px"><button class="btn" data-pzq="'+Q.q+'">All '+c.total+' priority questions for '+Q.q+' →</button></div></section>';
}

/* ---------- dashboard card ---------- */
function pzDashCard(){
  pzIndex();
  var all = pzCount(pzItems()), next = pzItems().filter(function(x){ return !pzDone(x); })[0];
  return '<section class="card" style="margin:6px 0 20px"><h2 style="margin-top:0; padding-top:0; border:0">Teacher\'s note for the End Sem · '+all.done+'/'+all.total+'</h2>'+pzBar(all)+
    '<div class="pz-map">'+PZQ.map(function(Q){ return pzQBox(Q, 'data-pzq="'+Q.q+'"'); }).join("")+'</div>'+
    (next ? '<p style="margin:12px 0 0"><button class="btn" data-go="topic" data-id="'+esc(next.topic.id)+'" data-anchor="'+esc(next.id)+'">Next: '+esc(next.t)+' →</button></p>'
          : '<p class="small-muted">All priority questions ticked. Move on to the rest.</p>')+'</section>';
}

/* a Q box or strip button opens the Priority tab at that question */
document.addEventListener("click", function(ev){
  var b = ev.target.closest && ev.target.closest("[data-pzq]");
  if (!b) return;
  var q = b.getAttribute("data-pzq");
  go({name:"prio"});
  setTimeout(function(){ var n = document.getElementById("pzq-"+q); if (n && n.scrollIntoView) n.scrollIntoView({block:"start"}); }, 0);
}, false);
