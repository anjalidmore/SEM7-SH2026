/* =========================================================
   PRIORITY LIST (21 Nov 2026)
   The topics the class was told to finish first: the MSE repeat list
   and the ESE important list. One checklist by syllabus module, then one
   card per question with the concept, drawn diagrams, worked problems
   and traps. Content lives in priority-m2-m4.js and priority-m5-m6.js.

   Sync with the rest of the site:
   - ticks are stored in the same progress store as every other item
     (PROGRESS.status["pr_..."]), so they survive reloads like the rest;
   - every module page shows its own priority items at the top, with the
     same ticks;
   - every topic page / card linked from a priority item shows a
     "Priority" pill, and each priority card links back to those pages.
   Loaded before the main script; it only calls the main script's
   functions (statusOf, setStatus, render ...) at render time.
   ========================================================= */
const PZ = { items:[], open:{}, focus:null };
const PZ_MODS = ["m1","m2","m3","m4","m5","m6"];

/* ---------- styles (theme-aware: everything uses the shared tokens) ---------- */
(function(){
  const css = `
.pz-intro{color:var(--text-2); font-size:.92rem; margin:4px 0 0}
.pz-bar{height:8px; border-radius:99px; background:var(--track); overflow:hidden; margin:10px 0 4px}
.pz-bar i{display:block; height:100%; background:var(--good); border-radius:99px}
.pz-mod{margin-top:18px}
.pz-mod h3{font-size:.95rem; margin:0 0 6px; display:flex; justify-content:space-between; gap:8px; align-items:baseline}
.pz-mod h3 span{font-weight:550; color:var(--muted); font-size:.8rem}
.pz-row{display:flex; align-items:flex-start; gap:10px; padding:9px 0; border-bottom:1px solid var(--border)}
.pz-row:last-child{border-bottom:0}
.pz-row .pz-t{flex:1; min-width:0}
.pz-row .pz-t a{color:var(--text); font-weight:600; text-decoration:none; cursor:pointer}
.pz-row .pz-t a:hover{color:var(--accent-ui); text-decoration:underline}
.pz-row .pz-sub{font-size:.8rem; color:var(--muted); margin-top:2px}
.pz-row.done .pz-t a{color:var(--muted); text-decoration:line-through}
.pz-chk{width:20px; height:20px; margin:1px 0 0; accent-color:var(--good); flex:none; cursor:pointer}
.pz-tag{display:inline-block; font:650 .7rem/1.6 var(--sans); padding:0 7px; border-radius:99px; border:1px solid var(--border-2); color:var(--text-2); margin-left:6px; vertical-align:1px; white-space:nowrap}
.pz-tag.ten{background:var(--accent); border-color:var(--accent); color:var(--on-accent)}
.pz-tag.pri{background:var(--warn-soft); border-color:var(--warn-line); color:var(--warn)}
.pz-tools{display:flex; gap:8px; flex-wrap:wrap; margin:14px 0 4px}
details.pz-card{background:var(--surface); border:1px solid var(--border-2); border-radius:var(--radius); margin:12px 0; scroll-margin-top:80px}
details.pz-card.done{border-left:4px solid var(--good)}
details.pz-card > summary{list-style:none; cursor:pointer; padding:14px 16px; display:flex; gap:10px; align-items:flex-start}
details.pz-card > summary::-webkit-details-marker{display:none}
details.pz-card > summary .pz-n{flex:none; font:700 .8rem/1 var(--mono); color:var(--accent-ui); border:1px solid var(--accent-line); background:var(--accent-soft); border-radius:6px; padding:5px 6px; margin-top:1px}
details.pz-card > summary .pz-h{flex:1; min-width:0}
details.pz-card > summary .pz-h b{font-size:1rem}
details.pz-card > summary .pz-h div{font-size:.82rem; color:var(--muted); margin-top:3px}
details.pz-card > summary .pz-car{flex:none; color:var(--muted); transition:transform .15s; margin-top:3px}
details.pz-card[open] > summary .pz-car{transform:rotate(90deg)}
.pz-body{padding:0 16px 16px; border-top:1px solid var(--border)}
.pz-sec{margin-top:18px}
.pz-sec > h4{font-size:.78rem; letter-spacing:.06em; text-transform:uppercase; color:var(--accent-ui); margin:0 0 8px}
.pz-body p{margin:.45rem 0; line-height:1.6}
.pz-body ul,.pz-body ol{margin:.4rem 0; padding-left:1.35rem; line-height:1.55}
.pz-body li{margin:.25rem 0}
.pz-def{border-left:3px solid var(--accent-line); background:var(--accent-soft); padding:8px 12px; border-radius:0 8px 8px 0; margin:.5rem 0}
.pz-formula{font-family:var(--mono); font-size:.88rem; background:var(--surface-2); border:1px solid var(--border); border-radius:8px; padding:10px 12px; white-space:pre-wrap; margin:.5rem 0; line-height:1.55}
.pz-code{font-family:var(--mono); font-size:.84rem; background:var(--surface-2); border:1px solid var(--border); border-radius:8px; padding:12px 14px; white-space:pre; overflow-x:auto; margin:.5rem 0; line-height:1.55}
.pz-code b{color:var(--accent-ui)}
.pz-tw{overflow-x:auto; margin:.5rem 0}
table.pz-t{border-collapse:collapse; font-size:.86rem; min-width:100%}
table.pz-t th,table.pz-t td{border:1px solid var(--border-2); padding:5px 8px; text-align:left; vertical-align:top}
table.pz-t th{background:var(--surface-2); font-weight:650}
table.pz-t.num td,table.pz-t.num th{text-align:center; font-variant-numeric:tabular-nums}
table.pz-t td.hl,table.pz-t th.hl{background:var(--accent-soft); color:var(--accent-ui); font-weight:700}
table.pz-t td.ok{background:var(--good-soft); color:var(--good); font-weight:700}
table.pz-t td.bad{background:var(--bad-soft); color:var(--bad)}
table.pz-t td.z{color:var(--muted)}
table.pz-t.grid td{padding:3px 0; min-width:20px; font-size:.78rem}
.pz-q{background:var(--surface-2); border:1px solid var(--border); border-radius:10px; padding:12px 14px; margin:.6rem 0}
.pz-q .pz-qq{font-weight:650; margin-bottom:8px; line-height:1.5}
.pz-q .pz-qq small{font-weight:600; color:var(--accent-ui); margin-right:6px}
.pz-q ol.pz-steps{padding-left:1.4rem}
.pz-q ol.pz-steps li{margin:.45rem 0}
.pz-ans{border:1px solid var(--good-line); background:var(--good-soft); border-radius:8px; padding:8px 12px; margin-top:8px}
.pz-ans b:first-child{color:var(--good)}
.pz-trap{border:1px solid var(--warn-line); background:var(--warn-soft); border-radius:8px; padding:8px 12px; margin:.5rem 0}
.pz-trap b:first-child{color:var(--warn)}
.pz-fig{margin:.7rem 0; overflow-x:auto; border:1px solid var(--border); border-radius:10px; background:var(--surface); padding:10px}
.pz-fig svg{display:block; margin:0 auto; height:auto}
.pz-cap{font-size:.8rem; color:var(--muted); text-align:center; margin-top:6px}
.pz-flow{display:flex; flex-wrap:wrap; align-items:stretch; gap:6px; margin:.6rem 0}
.pz-flow .pz-box{flex:1 1 130px; min-width:120px; border:1px solid var(--accent-line); background:var(--accent-soft); border-radius:8px; padding:8px 10px; font-size:.84rem; line-height:1.4}
.pz-flow .pz-box b{display:block; color:var(--accent-ui); font-size:.86rem; margin-bottom:2px}
.pz-flow .pz-box.alt{border-color:var(--border-2); background:var(--surface-2)}
.pz-flow .pz-box.bad{border-color:var(--bad-line); background:var(--bad-soft)}
.pz-flow .pz-box.bad b{color:var(--bad)}
.pz-flow .pz-arr{align-self:center; color:var(--muted); font-weight:700}
.pz-flow.col{flex-direction:column}
.pz-flow.col .pz-box{flex:none; min-width:0}
.pz-flow.col .pz-arr{align-self:flex-start; margin-left:18px}
.pz-lane{font:700 .72rem/1 var(--sans); letter-spacing:.06em; text-transform:uppercase; color:var(--muted); margin:.8rem 0 -.2rem}
.pz-links{display:flex; gap:6px; flex-wrap:wrap}
.pz-links button{font-size:.8rem}
.pz-foot{display:flex; justify-content:space-between; align-items:center; gap:10px; flex-wrap:wrap; margin-top:20px; padding-top:12px; border-top:1px solid var(--border)}
.pz-r1{background:color-mix(in srgb,#2f7dd1 18%,transparent); border-bottom:2px solid #2f7dd1; padding:0 2px; border-radius:3px}
.pz-r2{background:color-mix(in srgb,#c2410c 18%,transparent); border-bottom:2px solid #c2410c; padding:0 2px; border-radius:3px}
.pz-r3{background:color-mix(in srgb,#15803d 18%,transparent); border-bottom:2px solid #15803d; padding:0 2px; border-radius:3px}
.pz-sent{line-height:2.1; font-size:.95rem; background:var(--surface-2); padding:10px 12px; border-radius:8px}
.pz-sent sub{font-size:.66rem; font-weight:700}
.pz-two{display:grid; grid-template-columns:repeat(auto-fit,minmax(230px,1fr)); gap:10px; margin:.5rem 0}
.pz-two > div{border:1px solid var(--border-2); border-radius:8px; padding:8px 12px; background:var(--surface)}
.pz-two > div > b:first-child{display:block; color:var(--accent-ui); margin-bottom:3px}
.pz-modstrip{border:1px solid var(--warn-line); background:var(--warn-soft); border-radius:var(--radius); padding:12px 16px; margin:14px 0}
.pz-modstrip h3{margin:0 0 4px; font-size:.95rem}
.pz-modstrip .pz-row{border-color:var(--warn-line)}
/* SVG figures */
.pz-svg{font-family:var(--sans)}
.pz-svg .ln{stroke:var(--border-2); stroke-width:1.4; fill:none}
.pz-svg .ln.path{stroke:var(--accent-ui); stroke-width:2.6}
.pz-svg .ln.dash{stroke-dasharray:5 4}
.pz-svg .lab{fill:var(--text); font-size:13px; font-weight:650; text-anchor:middle; dominant-baseline:central}
.pz-svg .word{fill:var(--text-2); font-size:13px; font-style:italic; text-anchor:middle; dominant-baseline:central}
.pz-svg .small{fill:var(--muted); font-size:11px; text-anchor:middle; dominant-baseline:central}
.pz-svg .pr{fill:var(--accent-ui); font-size:11px; font-weight:700; text-anchor:middle; dominant-baseline:central}
.pz-svg .nb{fill:var(--surface); stroke:none}
.pz-svg .hlb{fill:var(--accent-soft); stroke:var(--accent-ui); stroke-width:1.6}
.pz-svg .okb{fill:var(--good-soft); stroke:var(--good); stroke-width:1.6}
.pz-svg .badb{fill:var(--bad-soft); stroke:var(--bad); stroke-width:1.4}
.pz-svg .stb{fill:var(--surface-2); stroke:var(--border-2); stroke-width:1.4}
.pz-svg .badge{fill:var(--accent-ui)}
.pz-svg .badge-t{fill:var(--on-accent); font-size:10.5px; font-weight:700; text-anchor:middle; dominant-baseline:central}
.pz-svg .arrowhead{fill:var(--muted)}
.pz-svg .arrowhead.acc{fill:var(--accent-ui)}
.pz-svg .ax{stroke:var(--muted); stroke-width:1.2}
.pz-svg .vec{stroke-width:2.6}
`;
  const s = document.createElement("style"); s.textContent = css; document.head.appendChild(s);
})();

/* ---------- small HTML builders used by the content files ---------- */
const PH = {
  sec:(h, html)=>'<div class="pz-sec"><h4>'+h+'</h4>'+html+'</div>',
  p:(...a)=>a.map(x=>'<p>'+x+'</p>').join(""),
  ul:a=>'<ul>'+a.map(x=>'<li>'+x+'</li>').join("")+'</ul>',
  ol:a=>'<ol>'+a.map(x=>'<li>'+x+'</li>').join("")+'</ol>',
  def:x=>'<div class="pz-def">'+x+'</div>',
  f:x=>'<div class="pz-formula">'+x+'</div>',
  code:x=>'<div class="pz-code">'+x+'</div>',
  trap:x=>'<div class="pz-trap"><b>Trap.</b> '+x+'</div>',
  two:a=>'<div class="pz-two">'+a.map(([h,b])=>'<div><b>'+h+'</b>'+b+'</div>').join("")+'</div>',
  /* table: head = array of header cells; rows = arrays of cells.
     A cell may be "text" or {v:"text", c:"hl|ok|bad|z"}. */
  table:(head, rows, cls)=>{
    const cell = (x, tag)=>{ if(x && typeof x === "object") return '<'+tag+' class="'+(x.c||"")+'"'+(x.span ? ' colspan="'+x.span+'"' : "")+'>'+x.v+'</'+tag+'>'; return '<'+tag+'>'+x+'</'+tag+'>'; };
    return '<div class="pz-tw"><table class="pz-t '+(cls||"")+'">'+(head ? '<thead><tr>'+head.map(h=>cell(h,"th")).join("")+'</tr></thead>' : "")+
      '<tbody>'+rows.map(r=>'<tr>'+r.map((x,i)=>cell(x, i===0 && cls && cls.indexOf("rowhead")>=0 ? "th" : "td")).join("")+'</tr>').join("")+'</tbody></table></div>';
  },
  /* worked question: q, steps (array), ans, marks */
  q:(o)=>'<div class="pz-q"><div class="pz-qq">'+(o.tag ? '<small>'+o.tag+'</small>' : "")+o.q+'</div>'+
    (o.steps ? '<ol class="pz-steps">'+o.steps.map(s=>'<li>'+s+'</li>').join("")+'</ol>' : "")+
    (o.ans ? '<div class="pz-ans"><b>Answer.</b> '+o.ans+'</div>' : "")+(o.trap ? PH.trap(o.trap) : "")+'</div>',
  /* flow of boxes: items = [ [title, text, cls?], ... ] */
  flow:(items, col)=>'<div class="pz-flow'+(col ? " col" : "")+'">'+items.map(([t,x,c],i)=>(i ? '<span class="pz-arr">'+(col ? "↓" : "→")+'</span>' : "")+
    '<div class="pz-box '+(c||"")+'"><b>'+t+'</b>'+(x||"")+'</div>').join("")+'</div>',
  fig:(svg, cap)=>'<div class="pz-fig">'+svg+(cap ? '<div class="pz-cap">'+cap+'</div>' : "")+'</div>'
};
function pzEsc(s){ return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;"); }
function pzTW(s, px){ return String(s).length * (px||7.3); }

/* ---------- SVG: constituency / morpheme / taxonomy trees ----------
   spec = [label, child, child ...]; a child that is a plain string is a word (leaf).
   label flags after "|":  hl (highlighted node), ok (accepted), bad (rejected),
   path (edge from parent drawn as the search path), n=3 (numbered badge),
   p=0.25 (rule probability under the label), dash (dashed edge from parent). */
function pzTree(spec, opt){
  opt = opt || {};
  const LH = opt.lh || 58, GAP = opt.gap || 16, TOP = 22;
  let cursor = 10, maxDepth = 0, idn = 0;
  function parse(x, depth){
    if(typeof x === "string") return {word:true, label:x, depth, flags:{}, kids:[], id:idn++};
    const parts = String(x[0]).split("|"), flags = {};
    parts.slice(1).forEach(f=>{ const [k,v] = f.split("="); flags[k] = v===undefined ? true : v; });
    return {label:parts[0], depth, flags, kids:x.slice(1).map(c=>parse(c, depth+1)), id:idn++};
  }
  const root = parse(spec, 0);
  function lay(n){
    maxDepth = Math.max(maxDepth, n.depth);
    if(!n.kids.length){
      const w = Math.max(pzTW(n.label), n.flags.p ? pzTW(n.flags.p, 6.4) : 26) + GAP + 12;
      n.x = cursor + w/2; cursor += w;
    } else {
      n.kids.forEach(lay);
      n.x = (n.kids[0].x + n.kids[n.kids.length-1].x)/2;
    }
    n.y = TOP + n.depth*LH;
  }
  lay(root);
  const W = Math.ceil(cursor + 10), H = TOP + maxDepth*LH + 26;
  let edges = "", nodes = "";
  (function draw(n){
    n.kids.forEach(k=>{
      const y1 = n.y + (n.flags.p ? 22 : 12), y2 = k.y - 12;
      edges += '<line class="ln'+(k.flags.path ? " path" : "")+(k.flags.dash ? " dash" : "")+'" x1="'+n.x+'" y1="'+y1+'" x2="'+k.x+'" y2="'+y2+'"/>';
      draw(k);
    });
    const tw = pzTW(n.label) + 12;
    const box = n.flags.hl ? "hlb" : n.flags.ok ? "okb" : n.flags.bad ? "badb" : null;
    if(box) nodes += '<rect class="'+box+'" x="'+(n.x-tw/2)+'" y="'+(n.y-11)+'" width="'+tw+'" height="22" rx="6"/>';
    else if(!n.word) nodes += '<rect class="nb" x="'+(n.x-tw/2)+'" y="'+(n.y-10)+'" width="'+tw+'" height="20" rx="4"/>';
    nodes += '<text class="'+(n.word ? "word" : "lab")+'" x="'+n.x+'" y="'+n.y+'">'+pzEsc(n.label)+'</text>';
    if(n.flags.p) nodes += '<text class="pr" x="'+n.x+'" y="'+(n.y+16)+'">'+pzEsc(n.flags.p)+'</text>';
    if(n.flags.n){ const bx = n.x + tw/2 + 3, by = n.y - 12;
      nodes += '<circle class="badge" cx="'+bx+'" cy="'+by+'" r="8"/><text class="badge-t" x="'+bx+'" y="'+by+'">'+pzEsc(n.flags.n)+'</text>'; }
  })(root);
  const minW = Math.min(W, opt.minW || 560);
  return '<svg class="pz-svg" viewBox="0 0 '+W+' '+H+'" style="width:100%; max-width:'+W+'px; min-width:'+minW+'px" role="img" aria-label="'+pzEsc(opt.aria||"tree diagram")+'">'+edges+nodes+'</svg>';
}

/* ---------- SVG: an HMM path (state chain with emissions) ----------
   states = ["<s>","JJ","NN",...,"</s>"], words = [null,"hot",...,null],
   trans = probabilities between consecutive states, emit = per state (null for <s>, </s>) */
function pzChain(states, words, trans, emit, opt){
  opt = opt || {};
  const SX = 112, R = 21, Y = 44, W = 40 + (states.length-1)*SX + 40, H = words.some(Boolean) ? 150 : 80;
  let s = '<defs><marker id="pzah'+(opt.id||"")+'" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrowhead'+(opt.win ? " acc" : "")+'" d="M0,0 L10,5 L0,10 z"/></marker></defs>';
  states.forEach((st,i)=>{
    const x = 40 + i*SX;
    if(i < states.length-1){
      s += '<line class="ln'+(opt.win ? " path" : "")+'" x1="'+(x+R)+'" y1="'+Y+'" x2="'+(x+SX-R-2)+'" y2="'+Y+'" marker-end="url(#pzah'+(opt.id||"")+')"/>';
      s += '<text class="pr" x="'+(x+SX/2)+'" y="'+(Y-12)+'">'+pzEsc(trans[i])+'</text>';
    }
    const end = st==="<s>" || st==="</s>" || st==="S" || st==="E";
    s += '<circle class="'+(end ? "stb" : opt.win ? "okb" : "hlb")+'" cx="'+x+'" cy="'+Y+'" r="'+R+'"/><text class="lab" x="'+x+'" y="'+Y+'">'+pzEsc(st)+'</text>';
    if(words[i]){
      s += '<line class="ln dash" x1="'+x+'" y1="'+(Y+R)+'" x2="'+x+'" y2="'+(Y+68)+'"/>';
      s += '<text class="pr" x="'+(x+16)+'" y="'+(Y+46)+'" style="text-anchor:start">'+pzEsc(emit[i])+'</text>';
      const tw = pzTW(words[i]) + 16;
      s += '<rect class="stb" x="'+(x-tw/2)+'" y="'+(Y+70)+'" width="'+tw+'" height="24" rx="6"/><text class="word" x="'+x+'" y="'+(Y+82)+'">'+pzEsc(words[i])+'</text>';
    }
  });
  return '<svg class="pz-svg" viewBox="0 0 '+W+' '+H+'" style="width:100%; max-width:'+W+'px; min-width:'+Math.min(W,520)+'px" role="img" aria-label="'+pzEsc(opt.aria||"HMM path")+'">'+s+'</svg>';
}

/* ---------- SVG: Lesk overlap (sense bag vs context bag) ---------- */
function pzVenn(lt, left, mid, right, rt){
  const W = 560, H = 230;
  const col = (arr, x, y0) => arr.map((w,i)=>'<text class="'+(x===280 ? "pr" : "small")+'" x="'+x+'" y="'+(y0+i*17)+'" style="font-size:12px">'+pzEsc(w)+'</text>').join("");
  return '<svg class="pz-svg" viewBox="0 0 '+W+' '+H+'" style="width:100%; max-width:'+W+'px" role="img" aria-label="overlap diagram">'+
    '<circle cx="205" cy="120" r="100" style="fill:var(--accent-soft); stroke:var(--accent-ui); stroke-width:1.5; fill-opacity:.7"/>'+
    '<circle cx="355" cy="120" r="100" style="fill:var(--good-soft); stroke:var(--good); stroke-width:1.5; fill-opacity:.7"/>'+
    '<text class="lab" x="160" y="10" style="font-size:12px">'+pzEsc(lt)+'</text><text class="lab" x="400" y="10" style="font-size:12px">'+pzEsc(rt)+'</text>'+
    col(left, 160, 120 - (left.length-1)*8.5) + col(mid, 280, 120 - (mid.length-1)*8.5) + col(right, 400, 120 - (right.length-1)*8.5)+
    '</svg>';
}

/* ---------- state ---------- */
function pzDone(id){ return typeof statusOf === "function" && statusOf(id) === "done"; }
function pzToggle(id){ setStatus(id, "done"); }   /* setStatus toggles off when already done */
function pzItemsOf(m){ return PZ.items.filter(x=>x.m===m); }
function pzNum(x){ return PZ.items.indexOf(x) + 1; }
/* linked module pages: resolve ids to topic groups once per render */
function pzGroups(x){
  const out = [];
  (x.links||[]).forEach(id=>{ const g = (typeof groupByKey==="function" && groupByKey(id)) || (typeof groupOfItem==="function" && groupOfItem(id)); if(g && out.indexOf(g) < 0) out.push(g); });
  return out;
}
/* set of topic-group keys that a priority item links to (for the Priority pill) */
function pzLinkedKeys(){
  if(PZ._keys) return PZ._keys;
  const k = {};
  PZ.items.forEach(x=>pzGroups(x).forEach(g=>{ (k[g.key] = k[g.key] || []).push(x); }));
  return PZ._keys = k;
}
function pzPill(g){
  const k = pzLinkedKeys()[g.key];
  return k ? '<span class="pz-tag pri" title="On the Priority list: '+pzEsc(k.map(x=>x.title).join("; "))+'">Priority</span>' : "";
}

/* ---------- checklist row (used on the Priority tab and on module pages) ---------- */
function pzRow(x, onModule){
  const d = pzDone(x.id), gs = pzGroups(x);
  const linked = gs.length ? gs.reduce((a,g)=>a+g.done,0)+"/"+gs.reduce((a,g)=>a+g.total,0)+" on the module pages" : "";
  return '<div class="pz-row'+(d ? " done" : "")+'"><input type="checkbox" class="pz-chk" data-ptick="'+x.id+'"'+(d ? " checked" : "")+' aria-label="Mark '+pzEsc(x.title)+' done">'+
    '<div class="pz-t"><a data-pgo="'+x.id+'">'+(onModule ? "" : pzNum(x)+". ")+x.title+'</a>'+
    (x.marks ? '<span class="pz-tag">'+x.marks+' marks</span>' : "")+(x.ten ? '<span class="pz-tag ten">10-mark list</span>' : "")+
    '<div class="pz-sub">'+x.sec+' · '+x.asked+(linked ? ' · '+linked : "")+'</div></div></div>';
}

/* ---------- the Priority tab ---------- */
function renderPriority(){
  PZ._keys = null;
  const wrap = document.createElement("div");
  const total = PZ.items.length, done = PZ.items.filter(x=>pzDone(x.id)).length;
  let h = '<section class="card"><h1 style="margin:0">Priority list</h1>'+
    '<p class="pz-intro">The topics to finish before anything else: the MSE repeat list and the ESE important questions. Tick a topic when you can write its answer without looking. Ticks are shared with the module pages.</p>'+
    '<div class="pz-bar"><i style="width:'+(total ? Math.round(done/total*100) : 0)+'%"></i></div>'+
    '<div class="small-muted">'+done+' of '+total+' done</div>';
  PZ_MODS.forEach(m=>{
    const xs = pzItemsOf(m); if(!xs.length) return;
    const d = xs.filter(x=>pzDone(x.id)).length;
    h += '<div class="pz-mod"><h3>'+pzEsc(MODULE_TITLES[m])+'<span>'+d+'/'+xs.length+'</span></h3>'+xs.map(x=>pzRow(x)).join("")+'</div>';
  });
  h += '</section>';
  h += '<div class="pz-tools"><button class="small" data-pall="1">Open all answers</button><button class="small" data-pall="0">Close all</button><button class="small" data-pprint="1">Print</button></div>';
  PZ_MODS.forEach(m=>{
    const xs = pzItemsOf(m); if(!xs.length) return;
    h += '<h2 style="margin:26px 0 4px">'+pzEsc(MODULE_TITLES[m])+'</h2>';
    xs.forEach(x=>{ h += pzCard(x); });
  });
  wrap.innerHTML = h;
  wrap.querySelectorAll("details.pz-card").forEach(d=>d.addEventListener("toggle", ()=>{ PZ.open[d.dataset.pid] = d.open; }));
  if(PZ.focus){
    const id = PZ.focus; PZ.focus = null;
    setTimeout(()=>{ const n = document.getElementById("pz_"+id); if(n){ n.open = true; PZ.open[id] = true; n.scrollIntoView({behavior:"smooth", block:"start"}); } }, 40);
  }
  return wrap;
}
function pzCard(x){
  const d = pzDone(x.id), gs = pzGroups(x);
  const links = gs.map(g=>'<button class="small ghost" data-ntopic="'+pzEsc(g.key)+'">'+pzEsc(MODULE_TITLES[g.m].split("—")[0].trim())+': '+pzEsc(groupTitle(g))+' ('+g.done+'/'+g.total+')</button>').join("");
  return '<details class="pz-card'+(d ? " done" : "")+'" id="pz_'+x.id+'" data-pid="'+x.id+'"'+(PZ.open[x.id] ? " open" : "")+'>'+
    '<summary><span class="pz-n">'+String(pzNum(x)).padStart(2,"0")+'</span><span class="pz-h"><b>'+x.title+'</b>'+
    (x.marks ? '<span class="pz-tag">'+x.marks+' marks</span>' : "")+(x.ten ? '<span class="pz-tag ten">10-mark list</span>' : "")+(d ? '<span class="pz-tag" style="color:var(--good);border-color:var(--good-line)">Done</span>' : "")+
    '<div>'+x.sec+' · '+x.asked+'</div></span><span class="pz-car">▶</span></summary>'+
    '<div class="pz-body">'+x.body+
    '<div class="pz-foot"><label class="tickbox'+(d ? " on" : "")+'"><input type="checkbox" data-ptick="'+x.id+'"'+(d ? " checked" : "")+'> I can write this without looking</label></div>'+
    (links ? '<div class="pz-sec"><h4>Same topic on the module pages</h4><div class="pz-links">'+links+'</div></div>' : "")+
    '</div></details>';
}

/* ---------- module page strip ---------- */
function pzModuleStrip(m){
  PZ._keys = null;
  const xs = pzItemsOf(m); if(!xs.length) return null;
  const d = xs.filter(x=>pzDone(x.id)).length;
  const s = document.createElement("section");
  s.className = "pz-modstrip";
  s.innerHTML = '<h3>Priority in this module · '+d+'/'+xs.length+' done</h3><div class="small-muted">Finish these first. The title opens the full answer on the Priority tab.</div>'+xs.map(x=>pzRow(x, true)).join("");
  return s;
}

/* ---------- dashboard card ---------- */
function pzDashCard(){
  const total = PZ.items.length, done = PZ.items.filter(x=>pzDone(x.id)).length;
  const next = PZ.items.find(x=>!pzDone(x.id));
  return '<section class="card" style="margin-top:20px"><h2>Priority list · '+done+'/'+total+' done</h2>'+
    '<div class="pz-bar"><i style="width:'+(total ? Math.round(done/total*100) : 0)+'%"></i></div>'+
    PZ_MODS.map(m=>{ const xs = pzItemsOf(m); if(!xs.length) return ""; const d = xs.filter(x=>pzDone(x.id)).length;
      return '<div class="s7-qrow" style="cursor:pointer" data-pview="1"><div class="s7-qt"><b>'+pzEsc(MODULE_TITLES[m].split("—")[0].trim())+'</b> · '+xs.map(x=>pzDone(x.id) ? '<s>'+x.short+'</s>' : x.short).join(" · ")+'</div><div class="s7-qm"><b>'+d+'/'+xs.length+'</b></div></div>'; }).join("")+
    (next ? '<p style="margin:12px 0 0"><button class="small" data-pgo="'+next.id+'">Next: '+next.title+' →</button></p>' : '<p class="small-muted" style="margin-top:10px">All priority topics ticked. Move on to the rest of the syllabus.</p>')+
    '</section>';
}

/* ---------- events ---------- */
document.addEventListener("change", e=>{
  const t = e.target.closest && e.target.closest("[data-ptick]");
  if(!t) return;
  pzToggle(t.dataset.ptick);
  renderKeepScroll();
});
document.addEventListener("click", e=>{
  if(!e.target.closest) return;
  const go = e.target.closest("[data-pgo]");
  if(go){ e.preventDefault(); PZ.focus = go.dataset.pgo; ROUTE.view = "priority"; render(); return; }
  if(e.target.closest("[data-pview]")){ ROUTE.view = "priority"; render(); return; }
  const all = e.target.closest("[data-pall]");
  if(all){ const on = all.dataset.pall === "1"; document.querySelectorAll("details.pz-card").forEach(d=>{ d.open = on; PZ.open[d.dataset.pid] = on; }); return; }
  if(e.target.closest("[data-pprint]")){ document.querySelectorAll("details.pz-card").forEach(d=>{ d.open = true; PZ.open[d.dataset.pid] = true; }); setTimeout(()=>window.print(), 50); }
});
