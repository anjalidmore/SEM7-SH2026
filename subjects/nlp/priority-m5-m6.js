/* Priority list content, Modules 5-6. Uses PH / pzTree / pzVenn from priority.js. */
(function(){
const {sec, p, ul, ol, def, f, code, trap, two, table, q, flow, fig} = PH;
const add = x => PZ.items.push(x);
const r1 = (t,n)=>'<span class="pz-r1">'+t+(n ? '<sub>'+n+'</sub>' : "")+'</span>';
const r2 = (t,n)=>'<span class="pz-r2">'+t+(n ? '<sub>'+n+'</sub>' : "")+'</span>';
const r3 = (t,n)=>'<span class="pz-r3">'+t+(n ? '<sub>'+n+'</sub>' : "")+'</span>';

/* =================== MODULE 5 =================== */

add({id:"pr_ref", m:"m5", sec:"5.2 Reference resolution", short:"Reference identification",
 title:"Reference identification: referents and referring expressions, with justification", asked:"MSE repeat list (refer to the IA solution)",
 links:["s_m5_ref","m5t4","m5t5","m5t6"],
 body:
 sec("Concept",
  p("A text keeps talking about the same people and things using different words. <b>Reference resolution</b> works out which words point to which entity.")+
  table(["Term","Meaning","In 'John lost his cap.'"],[
   ["Referent","the entity in the world being talked about","the person John"],
   ["Referring expression","any word or phrase that points to a referent","John, his"],
   ["Antecedent","the earlier expression a later one depends on","John (for 'his')"],
   ["Anaphora","a later expression refers back to the antecedent","his → John"],
   ["Cataphora","the expression comes before what it refers to","'When <i>she</i> arrived, Ananya …'"],
   ["Coreference","two expressions refer to the same referent","John and his corefer"],
   ["Coreference chain","all expressions of one referent","John, his, his, him …"]],"rowhead")+
  p("<b>Types of referring expressions</b>: indefinite NP (a cap: introduces a new entity), definite NP (the cap: already known), pronoun (he, her, them), demonstrative (this, that), proper name (Ananya), relative pronoun (who, which), one-anaphora (a new one).")+
  two([["Hard constraints (filter out)","<b>Agreement</b> in number (he vs they), gender (he vs she vs it) and person.<br><b>Binding</b>: a plain pronoun cannot refer to the subject of its own clause ('John hit him': him ≠ John); a reflexive must ('John hit himself').<br><b>Selectional restrictions</b>: the verb must fit ('he drove it': it must be drivable)."],
       ["Soft preferences (rank what is left)","<b>Recency</b>: nearer antecedents first.<br><b>Grammatical role</b>: subject &gt; object &gt; others.<br><b>Repeated mention</b>: the entity in focus.<br><b>Parallelism</b>: same role in both clauses.<br><b>Verb semantics</b>: 'feared' vs 'advocated' below."]]))+
 sec("Diagram: coreference chains in the IA passage",
  '<div class="pz-sent">'+r1("John","1")+', on '+r1("his","2")+' trip to Goa Industrial Visit, lost '+r1("his","3")+' cap and '+r1("his","4")+' temper, was seen stealing '+r2("Ananya","1")+"'s cap by "+r3("Zenus","1")+", at the Company's main entrance, "+r3("who","2")+' reported it to '+r2("her","2")+', which unnerved '+r2("her","3")+' and '+r2("she","4")+' demanded an explanation from '+r1("him","5")+' which led to a minor scuffle between '+'<span class="pz-r1" style="border-bottom-color:#c2410c">them<sub>John+Ananya</sub></span>'+' and '+r3("Zenus","3")+', enjoying the scene, was caught by surprise and by '+r3("his","4")+' neck by '+r1("him","6")+'.</div>'+
  flow([["John (blue)","John → his → his → his → him → them → him"],["Ananya (orange)","Ananya → her → her → she → them"],["Zenus (green)","Zenus → who → Zenus → his"]]))+
 sec("Worked problems",
  q({tag:"IA / class sheet 5.05", q:"Identify the referents and referring expressions in the passage above, with justification.",
   steps:[table(["Expression","Referent","Justification"],[
    ["his (trip, cap, temper)","John","male singular possessive; John is the only male entity mentioned so far and the subject of the clause"],
    ["who","Zenus","'who' needs a human antecedent and attaches to the nearest person NP, 'by Zenus' (not 'the entrance')"],
    ["it (reported it)","the stealing event","neuter singular; what is reported is the event, not a person (event anaphora)"],
    ["her, her, she","Ananya","female singular; Ananya is the only female entity; the victim is the one unnerved"],
    ["which (unnerved her)","the reporting","refers to the whole preceding event"],
    ["him (explanation from him)","John","male; the thief is the one asked to explain, not the reporter"],
    ["them","John and Ananya","plural, split antecedent: the scuffle is between the two people in conflict"],
    ["his (neck)","Zenus","the person caught is Zenus; it is his own neck"],
    ["him (by him)","John","binding: 'him' cannot be Zenus, the subject of the same clause; the only other male is John"]])],
   ans:"John → his, his, his, him, them, him. Ananya → her, her, she, them. Zenus → who, his.",
   trap:"'them' belongs to two referents (John and Ananya): list it under both. Give a reason for every pronoun; the justification is the mark."})+
  q({tag:"Type (ii): pronoun given", q:"'The city council refused the demonstrators a permit because <u>they</u> feared violence.' vs '… because <u>they</u> advocated violence.' Identify 'they' in each.",
   steps:["Agreement leaves two candidates (both plural): the council, the demonstrators.","'feared violence': the one who refuses a permit is the one afraid of violence → they = the city council.","'advocated violence': a permit is refused to those who promote violence → they = the demonstrators."],
   ans:"feared → the council; advocated → the demonstrators. Same syntax, different answer: resolution needs verb meaning and world knowledge, not just grammar."}))+
 sec("Write it like this", ol(["Define referent, referring expression, antecedent, anaphora.","Underline every referring expression in the passage.","Table: expression | referent | justification (agreement, binding, role, recency, meaning).","Group by referent at the end."]))
});

add({id:"pr_one", m:"m5", sec:"5.2 Reference: one-anaphora", short:"One-anaphora",
 title:"One-anaphora with justification", asked:"ESE notebook list ('one anaphora, justify')",
 links:["s_m5_ref","m5t5"],
 body:
 sec("Concept",
  p("<b>One-anaphora</b>: the word 'one' stands in for a noun (with its modifiers) mentioned earlier, and refers to <b>another member of the same kind</b>, not to the same object.")+
  two([["Pronoun 'it': same entity","'I lost my pen and then found <b>it</b>.' → the very same pen."],["'one': same kind, new entity","'I lost my pen, so I bought a new <b>one</b>.' → a different pen."]])+
  ul(["'one' replaces the noun part of the NP (noun + its modifiers), not the determiner: 'a red pen … this <b>one</b>' = this red pen / this pen.",
   "<b>Substitution test</b>: replace 'one' by the earlier noun. If the sentence keeps its meaning, it is one-anaphora.",
   "<b>Not one-anaphora</b>: 'one' as a number (one very good point), a generic pronoun (One must be careful), an idiom (one at a time, one by one), or 'one day' (an indefinite determiner)."]))+
 sec("Diagram: the test", flow([["1 Find 'one'","in the sentence"],["2 Look back","for a noun phrase of a countable kind"],["3 Substitute","replace 'one' by that noun"],["4 Meaning kept?","yes → one-anaphoric (name the antecedent); no → numeral / generic / idiom"]]))+
 sec("Worked problems",
  q({tag:"Class sheet 5.05", q:"Say whether 'one' is one-anaphoric and justify: (a) 'Palak likes cats and she has one.' (b) 'Apart from the usual nonsense, Atharva made one very good point.' (c) 'He's not a carpenter, dear, he's an architect, and a highly respected one at that.' (d) 'Palak feeds her cats one at a time.' (e) 'One should always back up one's work.'",
   steps:[table(["","Anaphoric?","Antecedent","Justification"],[
    ["(a)",{v:"Yes",c:"ok"},"cat","substitute: 'she has a cat' keeps the meaning; 'one' is a new member of the kind 'cats', not a specific cat named before"],
    ["(b)",{v:"No",c:"bad"},"—","'one' is a numeral (a single point); there is no earlier noun it replaces"],
    ["(c)",{v:"Yes",c:"ok"},"architect","'a highly respected architect': 'one' replaces the noun, the modifiers 'highly respected' are new"],
    ["(d)",{v:"Doubtful",c:"hl"},"(cat?)","the class key marks it anaphoric, but 'one at a time' is an idiom counting the cats; 'a cat at a time' changes the meaning. Write both views"],
    ["(e)",{v:"No",c:"bad"},"—","generic pronoun meaning 'any person'; nothing earlier is replaced"]])],
   ans:"(a) yes = cat · (b) no, numeral · (c) yes = architect · (d) doubtful, idiom (class key: yes) · (e) no, generic."}))
});

add({id:"pr_prf", m:"m5", sec:"5.4 Evaluation metrics", short:"Precision, recall, F1",
 title:"Precision, recall and F1: the numerical", asked:"ESE notebook list (class sheet 5.06)",
 links:["s_m5_prf","m5n5","m5t16"],
 body:
 sec("Concept",
  p("Every yes/no decision of a system falls in one of four boxes of the <b>confusion matrix</b>:")+
  table(["","Actually positive","Actually negative"],[["System says positive",{v:"TP: correct hit",c:"ok"},{v:"FP: false alarm",c:"bad"}],["System says negative",{v:"FN: missed",c:"bad"},"TN: correctly ignored"]],"rowhead")+
  f("Precision = TP / (TP + FP)     of everything the system flagged, how much was right?\nRecall    = TP / (TP + FN)     of everything that should be flagged, how much was found?\nF1        = 2PR / (P + R)  =  2TP / (2TP + FP + FN)")+
  ul(["<b>Precision</b> matters when false alarms are costly (a spam filter must not hide real mail).","<b>Recall</b> matters when misses are costly (disease screening, finding all relevant documents).","They pull against each other: flag everything → recall 1, precision low; flag one sure case → precision 1, recall low.","<b>F1 is the harmonic mean</b>: it is high only when both are high. Arithmetic mean of P = 1 and R = 0.02 is 0.51; F1 is 0.04. That is why F1 is used to rank systems.","Accuracy (TP+TN)/all is misleading with imbalanced classes: 99% 'not spam' gives 99% accuracy while catching nothing.","Multi-class: macro-F1 averages the per-class F1 (each class counts equally); micro-F1 pools all TP/FP/FN first (big classes dominate)."]))+
 sec("Diagram",
  fig(pzVenn("system said spam",["FP = 12","said spam,","is not spam"],["TP = 88"],["FN = 12","is spam,","was missed"],"actually spam"),"System A. Precision looks inside the left circle (88 of 100); recall looks inside the right circle (88 of 100)."))+
 sec("Worked problems",
  q({tag:"Class sheet 5.06", q:"An email spam detection system is evaluated using two models. System A: TP = 88, FP = 12, FN = 12. System B: TP = 84, FP = 8, FN = 16. Calculate precision, recall and F1 of both and identify the better system based on F1.",
   steps:[table(["","System A","System B"],[["TP / FP / FN","88 / 12 / 12","84 / 8 / 16"],["Precision = TP/(TP+FP)","88/100 = 88%","84/92 = 91.30%"],["Recall = TP/(TP+FN)","88/100 = 88%","84/100 = 84%"],["F1 = 2PR/(P+R)","2(0.88)(0.88)/1.76 = 88%","2(0.9130)(0.84)/1.7530 = 87.50%"],["Check: 2TP/(2TP+FP+FN)","176/200 = 0.88","168/192 = 0.875"]],"rowhead"),
    "Compare F1: A = 88% &gt; B = 87.50%."],
   ans:"System A is better on F1 (88% vs 87.5%). B has higher precision (fewer false alarms) but misses more spam (recall 84%); A is better balanced.",
   trap:"The question says 'based on F1', so do not pick B for its higher precision. Show the formula, the substitution and the percentage for each of the six numbers."})+
  q({tag:"Practice", q:"An NER system finds 40 entities, of which 30 are correct. The gold standard has 50 entities. Find P, R, F1.",
   steps:["TP = 30, FP = 40 − 30 = 10, FN = 50 − 30 = 20.","P = 30/40 = 0.75; R = 30/50 = 0.60.","F1 = 2(0.75)(0.60)/(1.35) = 0.90/1.35 = 0.667 (check: 60/(60+10+20) = 0.667)."],
   ans:"P = 75%, R = 60%, F1 = 66.7%."}))
});

/* Hobbs trees */
const bingHe1 = ["S*", ["S1", ["NP|ok|n=1","Jonathan Bing"], ["NP","Bingthon John"]],
  ["S2|hl|n=X", ["VP|path", ["VB","forgets"], ["PP|path", ["Adv-conj","where"], ["NP|path|hl", ["PRP","he₁"]], ["VP","is going"]]], ["Conj","and"], ["VP", ["VB","thinks"], ["NP", ["PRP","he₂"]], ["VP","is gone"]]]];
const bingHe2 = ["S*", ["S1", ["NP|ok","Jonathan Bing"], ["NP","Bingthon John"]],
  ["S2|hl|n=X", ["VP", ["VB","forgets"], ["PP", ["Adv-conj","where"], ["NP|ok|n=1", ["PRP","he₁"]], ["VP","is going"]]], ["Conj","and"], ["VP|path", ["VB","thinks"], ["NP|path|hl", ["PRP","he₂"]], ["VP","is gone"]]]];
const camelot = ["S2|hl", ["NP3|bad|n=2", ["Det","the"], ["N","castle"], ["PP", ["P","in"], ["NP5|bad|n=4","Camelot"]]],
  ["VP|path", ["V","remained"], ["NP4|bad|n=3", ["Det","the"], ["N","residence"], ["PP", ["P","of"], ["NP6|ok|n=5","the king"]]],
   ["PP|path", ["P","until"], ["NP2|path|bad|n=1", ["N","536"], ["Rel|path", ["Adv","when"], ["S1|path", ["NP|path|hl","he"], ["VP", ["V","moved"], ["NP1","it"], ["PP", ["P","to"], ["NP","London"]]]]]]]]];

add({id:"pr_hobbs", m:"m5", sec:"5.2 Pronoun resolution", short:"Hobbs",
 title:"Hobbs' algorithm: explanation and problem", marks:"10", ten:true, asked:"ESE important list Q3 · class tree (Jonathan Bing) and deck tree (Camelot)",
 links:["s_m5_hobbs","m5n1","m5t7"],
 body:
 sec("Concept",
  p("Hobbs' algorithm (1978) resolves a pronoun using <b>only the parse trees</b> of the current and previous sentences, plus an agreement check. It walks the trees in a fixed order and proposes NP nodes one by one; the first NP that agrees with the pronoun is the antecedent. It is called the 'naive' algorithm, yet it was right about 82–88% of the time on real text and is still the standard baseline.")+
  p("Why the walk order works: the search is a <b>tree traversal that encodes the preferences</b> from reference resolution.")+
  ul(["<b>Breadth-first, left-to-right</b> within a sentence → the subject (high and left in the tree) is met before the object: <i>subject preference</i>.",
   "<b>Current sentence first, then previous sentences, most recent first</b> → <i>recency</i>.",
   "<b>Proposing an NP in the same clause only if an NP or S node lies between it and X</b> → the <i>binding constraint</i> ('John likes him': him ≠ John).",
   "<b>Agreement</b> (gender, number, person) and <b>selectional restrictions</b> ('moved it': it must be movable) filter the proposals."])+
  p("Why the tree shows NP above 'he' (the doubt sent with the list): a pronoun replaces a whole noun phrase, so it fills an NP slot; PRP is its word-level tag under the NP. Hobbs starts at that NP and only ever proposes NP nodes."))+
 sec("The algorithm",
  flow([["1 Start","at the NP node immediately dominating the pronoun"],["2 Climb","to the first NP or S above it. Call it X; the path to it is p"],["3 Search left","traverse all branches below X to the left of p, breadth-first, left-to-right. Propose any NP that has an NP or S between it and X"],["4 Top of sentence?","if X is the highest S: traverse the previous sentences (most recent first), breadth-first, left-to-right; propose every NP"],["5 Otherwise climb","to the next NP or S (new X). If X is an NP not reached through its own head noun, propose X"],["6 Search again","left of p below X (and, if X is an S, right of p without going below an NP or S). Go to 4"],["Accept","the first proposed NP that agrees in gender, number, person and fits the verb"]],true)+
  p("Deck shortcut (4 steps): 1 start at the pronoun's NP, 2 climb to the first NP or S (X), 3 search left of the path breadth-first, 4 if X is the top S, search previous sentences."))+
 sec("Diagrams: the class tree",
  fig(pzTree(bingHe1,{lh:56, aria:"Hobbs tree for he1"}),"he₁: start at NP(he₁), climb PP → VP → S2 (X). Left of the path under S2 there are only 'forgets' and 'where': no NP. S2 is the top S, so go to S1: the first NP met, ①, is Jonathan Bing. It agrees (male, singular) → accepted.")+
  fig(pzTree(bingHe2,{lh:56, aria:"Hobbs tree for he2"}),"he₂: climb VP → S2 (X). Left of the path, breadth-first: VP, Conj, VB, then forgets, PP, and, then where, NP(he₁) … The first NP met, ①, is he₁ = Jonathan Bing."))+
 sec("Worked problems",
  q({tag:"Class tree (photo 5.08)", q:"Sentence 1: (S1 (NP Jonathan Bing) (NP Bingthon John)). Sentence 2: (S2 (VP forgets (PP where (NP he₁) (VP is going))) and (VP thinks (NP he₂) (VP is gone))). Use Hobbs' algorithm to resolve he₁ and he₂.",
   steps:["Draw both trees under a discourse root and number the NPs (figures above).",
    "<b>he₁</b>. Step 1: start at NP(he₁). Step 2: climb PP, VP (neither is NP or S) to S2 → X = S2, p = S2 → VP → PP → NP(he₁).",
    "Step 3: left of p below S2: VB 'forgets', Adv-conj 'where'. No NP is proposed.",
    "Step 4: X = S2 is the highest S of sentence 2 → traverse S1 breadth-first, left-to-right. First NP = Jonathan Bing. Agreement: male, singular, 3rd person = 'he' ✓. <b>he₁ = Jonathan Bing.</b>",
    "<b>he₂</b>. Steps 1–2: start at NP(he₂), climb VP to S2 → X = S2, p = S2 → VP₂ → NP(he₂).",
    "Step 3: left of p, breadth-first: VP₁, Conj, VB 'thinks' (depth 1–2) → forgets, PP, 'and' → where, NP(he₁). First NP met = he₁ ✓ (deck version). Full version: he₁ has no NP or S between it and S2, so it is skipped; S2 is the top S, so go to S1 and again Jonathan Bing is first.",
    "Why not Bingthon John: breadth-first, left-to-right meets Jonathan Bing first and it already agrees, so the search stops."],
   ans:"he₁ = Jonathan Bing; he₂ = Jonathan Bing (directly, or through he₁). 'Jonathan Bing forgets where Jonathan Bing is going and thinks Jonathan Bing is gone.'",
   trap:"Draw NP → PRP → he for each pronoun, not 'he' straight under VP. The names are copied from the photo: check the spelling in your notebook."})+
  q({tag:"Deck (5.02)", q:"'The castle in Camelot remained the residence of the king until 536 when he moved it to London.' Resolve 'he' and 'it' with Hobbs.",
   steps:["Tree with the proposal order for 'he' (① first):"+fig(pzTree(camelot,{lh:54, aria:"Camelot tree"}),"Path for 'he' in blue: S1 → Rel → NP2 → PP → VP → S2. Red = rejected, green = accepted."),
    "<b>he</b>. Start at NP(he). Climb to S1 = X. Left of p: nothing. S1 is not the top S → climb Rel to NP2 = X ('536 when …'), an NP → propose ① NP2 = 536: not a male person ✗.",
    "Climb PP, VP to S2 = X. Breadth-first left of p: ② NP3 the castle ✗ (neuter) → ③ NP4 the residence ✗ → ④ NP5 Camelot ✗ → ⑤ NP6 the king ✓ (male, singular). <b>he = the king.</b>",
    "Breadth-first means by depth: NP4 (depth 2) is proposed before NP5 (depth 3) although 'Camelot' is read first.",
    "<b>it</b>. Start at NP1. X = S1: left of p is NP(he), but no NP or S lies between them (binding) and 'he' fails gender anyway. Climb to NP2 = 536: proposed, rejected because a year cannot be moved (selectional restriction of 'moved'). At S2: ② NP3 the castle (in Camelot): neuter, singular, movable ✓. <b>it = the castle.</b>"],
   ans:"he = the king; it = the castle in Camelot. '… until 536 when the king moved the castle to London.'"}))+
 sec("Write it like this (10 marks)", ol(["What Hobbs does and what it needs (parse trees + agreement) (1).","The steps, numbered (3).","Why: BFS = subject preference, previous sentences = recency, NP/S rule = binding (1).","Problem: tree drawn with NPs numbered, path marked, proposal order, agreement check for each proposal, resolved sentence (4).","Limitation: needs correct parses; ignores meaning beyond agreement; fails on 'council … feared' type cases (1)."]))
});

add({id:"pr_center", m:"m5", sec:"5.2 Centering theory", short:"Centering",
 title:"Centering algorithm: the problem", marks:"10", ten:true, asked:"ESE important list Q4 · class examples (5.07) and the Ernest/Martin problem",
 links:["s_m5_center","m5n2","m5t8"],
 body:
 sec("Concept",
  p("Centering theory (Grosz, Joshi, Weinstein) explains <b>local coherence</b>: a text reads smoothly when consecutive sentences keep talking about the same main entity. It is also used to resolve pronouns: choose the reading that keeps the text most coherent.")+
  table(["Term","Meaning","How to find it"],[
   ["Cf(Uₙ) forward-looking centres","all entities mentioned in utterance Uₙ, ranked","rank by grammatical role: subject &gt; direct object &gt; indirect object &gt; others"],
   ["Cp(Uₙ) preferred centre","the most prominent entity now; the best guess for what Uₙ₊₁ will be about","the first element of Cf(Uₙ)"],
   ["Cb(Uₙ) backward-looking centre","the entity that links Uₙ to the previous utterance","the highest-ranked element of Cf(Uₙ₋₁) that is also mentioned in Uₙ; undefined for U₁"]],"rowhead")+
  p("Then ask two questions for each utterance: <b>(1) is Cb the same as in the previous utterance? (2) is Cb the same as Cp?</b>")+
  table(["","Cb(Uₙ) = Cp(Uₙ)","Cb(Uₙ) ≠ Cp(Uₙ)"],[["Cb(Uₙ) = Cb(Uₙ₋₁) (or undefined)",{v:"CONTINUE ①",c:"ok"},{v:"RETAIN ②",c:"hl"}],["Cb(Uₙ) ≠ Cb(Uₙ₋₁)",{v:"SMOOTH SHIFT ③",c:"hl"},{v:"ROUGH SHIFT ④",c:"bad"}]],"rowhead")+
  ul(["<b>Rule 2 (preference)</b>: Continue &gt; Retain &gt; Smooth shift &gt; Rough shift. A coherent text prefers sequences of Continues.",
   "<b>Rule 1 (pronoun rule)</b>: if any entity of Cf(Uₙ₋₁) is realised as a pronoun in Uₙ, then Cb(Uₙ) must be a pronoun too.",
   "<b>Resolving pronouns (BFP algorithm)</b>: (1) list every possible assignment of the pronouns, (2) drop those violating agreement or the rules, (3) compute Cb, Cp and the transition for each, (4) choose the assignment with the most preferred transition."]))+
 sec("Diagram: per utterance",
  flow([["List entities","everything mentioned in Uₙ"],["Rank → Cf","subject &gt; object &gt; indirect object &gt; others"],["Cp","first of Cf"],["Cb","highest of the previous Cf that appears now"],["Two questions","Cb same as before? Cb = Cp?"],["Transition","Continue / Retain / Smooth / Rough"]]))+
 sec("Worked problems",
  q({tag:"Class, 15 Oct", q:"Compute the forward and backward looking centres and the preferred centre in every utterance, and resolve the coreferences. U1: 'Ernest told Martin, who was worried about his book, that he had given his book to Suzanne's friend Luziana.' U2: 'She had promised to return it to him soon.' U3: 'He was relieved.'",
   steps:["<b>U1.</b> Inside U1: who → Martin; his (worried about his book) → Martin; he (had given) → Ernest; his book (given) → Ernest's book. Cf(U1) = [Ernest (subject), Martin (object of told), Martin's book, Ernest's book, Luziana, Suzanne]. Cp = Ernest. Cb = undefined (first utterance).",
    "<b>U2.</b> She: female singular → Luziana or Suzanne; Luziana received the book and outranks Suzanne (a possessive inside the PP) → She = Luziana. it: neuter → the book given away (Ernest's book). him: male → Ernest or Martin.<br>him = Ernest → Cb(U2) = Ernest (rank 1 of Cf(U1)). him = Martin → Cb = Martin (rank 2). Cb must be the highest-ranked one realised → him = Ernest.<br>Cf(U2) = [Luziana, the book, Ernest]; Cp = Luziana; Cb = Ernest. Previous Cb undefined (counts as 'same'), Cb ≠ Cp → <b>RETAIN</b>.",
    "<b>U3.</b> He: male → Ernest or Martin. Martin is not in Cf(U2), so He = Martin leaves no Cb (no link). He = Ernest → Cf(U3) = [Ernest], Cp = Ernest, Cb = Ernest (the only male in Cf(U2)). Cb same as before and = Cp → <b>CONTINUE</b>.",
    "Table:"+table(["U","Cf (ranked)","Cp","Cb","Transition"],[["U1","[Ernest, Martin, Martin's book, Ernest's book, Luziana, Suzanne]","Ernest","undefined","—"],["U2","[Luziana, book, Ernest]","Luziana","Ernest",{v:"RETAIN",c:"hl"}],["U3","[Ernest]","Ernest","Ernest",{v:"CONTINUE",c:"ok"}]])],
   ans:"She = Luziana, it = Ernest's book, him = Ernest, He = Ernest. Transitions: U2 RETAIN, U3 CONTINUE. 'Luziana had promised to return the book to Ernest soon. Ernest was relieved.'",
   trap:"Common sense might say Martin (the worried one) is relieved. Centering uses only grammatical ranking, so it picks Ernest: one line saying this earns the analysis mark. Only U1 is solved in the notebook; U2–U3 follow the standard rules."})+
  q({tag:"Class examples (5.07)", q:"Name the transition U1 → U2 in each: (a) 'Priya entered the classroom. She opened her notebook.' (b) U0 'The cake was ready.' U1 'The chef placed the cake on the counter.' U2 'The waiter carried the cake to the table.' (c) U0 'Nina and Arjun were at the station.' U1 'Nina spoke to Arjun.' U2 'Arjun boarded the train.' (d) same U0, U1; U2 'A security guard stopped Arjun.'",
   steps:[table(["","Cb(U1)","Cb(U2)","Cp(U2)","Cb same?","Cb = Cp?","Transition"],[
    ["(a)","Priya","Priya","Priya","same","same",{v:"CONTINUE",c:"ok"}],
    ["(b)","cake","cake","waiter","same","different",{v:"RETAIN",c:"hl"}],
    ["(c)","Nina","Arjun","Arjun","changed","same",{v:"SMOOTH SHIFT",c:"hl"}],
    ["(d)","Nina","Arjun","security guard","changed","different",{v:"ROUGH SHIFT",c:"bad"}]],"num"),
    "In (b), chef is not in U2, so Cb(U2) is the next of Cf(U1) that appears: cake. Cb is looked up in the previous Cf, it is not the subject of U2."],
   ans:"(a) Continue (b) Retain (c) Smooth shift (d) Rough shift."})+
  q({tag:"Textbook (J&M)", q:"U1 'John saw a beautiful Acura Integra at the dealership.' U2 'He showed it to Bob.' U3 'He bought it.' Resolve 'He' in U3.",
   steps:["U1: Cf = [John, Integra, dealership]; Cp = John; Cb undefined.","U2: He = John, it = Integra. Cf = [John, Integra, Bob]; Cp = John; Cb = John → CONTINUE.",
    "U3, reading A (He = John): Cf = [John, Integra]; Cp = John; Cb = John (rank 1 of Cf(U2)) → same Cb, Cb = Cp → CONTINUE.",
    "U3, reading B (He = Bob): Cf = [Bob, Integra]; Cp = Bob; Cb = Integra (highest of Cf(U2) present, John is absent) → Cb changed, Cb ≠ Cp → ROUGH SHIFT."],
   ans:"Continue beats Rough shift, so He = John."}))+
 sec("Write it like this (10 marks)", ol(["Define Cf, Cp, Cb and the ranking (2).","The 2 × 2 transition table and the preference order (2).","For each utterance: entities, Cf, Cp, Cb, transition; try each pronoun reading where there is a choice (4).","Final table and the resolved text (1).","One line on the limitation: grammar only, no world knowledge (1)."]))
});

/* =================== MODULE 6 =================== */

add({id:"pr_errsrc", m:"m6", sec:"6.5 Ethics, errors and evaluation of NLP applications", short:"Application: sources of error",
 title:"Application given: identify sources of error and suggest improvements", marks:"10", ten:true, asked:"ESE important list Q6",
 links:["s_m6_errsrc","m6t14","s_m6_ethics"],
 body:
 sec("Concept",
  p("Any NLP application is a pipeline, and an error in the output started at one of its stages. The examiner wants you to <b>trace each wrong output back to the stage that caused it</b>, explain why that stage fails on this input, and give a <b>specific</b> fix. Use the pipeline from Module 1 as your checklist:")+
  flow([["Data","training data, labels, domain"],["Preprocessing","tokens, stop words, spelling, emojis"],["Morphological","stems, lemmas, agreement"],["Syntactic","POS, parse, attachment"],["Semantic","word sense, NER, idioms, negation"],["Discourse / pragmatic","reference, sarcasm, intent"],["Output + evaluation","decision, metric"]])+
  table(["Stage","Typical error","Improvement"],[
   ["Data","domain mismatch (trained on movies, used on phones), class imbalance, biased labels, no code-mixed text","in-domain data, balancing / augmentation, bias audit, Hinglish data"],
   ["Preprocessing","stop-word list deletes 'not'; emojis stripped; typos and slang out of vocabulary; bad sentence splits (Dr.)","keep negations, emoji lexicon, spell correction (edit distance), subword tokenisation, abbreviation list"],
   ["Morphological","over-stemming (university → univers), rich Hindi morphology, gender agreement","lemmatisation, morphological analyser"],
   ["Syntactic","wrong POS, PP-attachment ('saw the man with the telescope')","better parser, context, ask the user when truly ambiguous"],
   ["Semantic","wrong word sense (bank), idiom translated literally, entity missed (Apple = company), negation scope","WSD, idiom / multi-word lexicon, NER before translation, contextual models (BERT)"],
   ["Discourse / pragmatic","pronoun or 'the second one' not resolved, sarcasm, indirect request ('Can you tell me…' → 'Yes')","coreference and dialogue state tracking, sarcasm data, intent classification"],
   ["Output / evaluation","one label for mixed opinions, no confidence, no human fallback","aspect-based output, thresholds, escalation; measure P / R / F1, confusion matrix, error analysis"]],"rowhead"))+
 sec("Worked problem",
  q({tag:"Model answer", q:"A product-review sentiment system gives: (a) 'Not bad at all' → Negative; (b) 'Great, the phone died in two days' → Positive; (c) 'Battery bekaar hai' → Neutral; (d) 'The camera is excellent but the battery is terrible' → Positive; (e) 'Worst purchase 😡' → Neutral. Identify the sources of error and suggest improvements.",
   steps:["Pipeline: preprocessing → morphological → syntactic → semantic → pragmatic → classification.",
    table(["Output","Error","Source (stage)","Why it happens","Improvement"],[
     ["(a)","negation flipped","Preprocessing + Semantic","stop-word list removed 'not', leaving 'bad'; negation scope not modelled","keep negation words; mark scope (NOT_bad); use bigrams or a contextual model"],
     ["(b)","sarcasm missed","Pragmatic","'Great' is literally positive; the situation is negative","sarcasm-labelled training data; contextual models that weigh a positive word against a negative event"],
     ["(c)","Hinglish unread","Data + Preprocessing","'bekaar' (useless) is out of vocabulary for an English model","transliteration + Hinglish lexicon; multilingual models (mBERT, IndicBERT); code-mixed data"],
     ["(d)","mixed aspects","Semantic + Output","one label for two opposite opinions; 'but' signals the second clause matters more","aspect-based sentiment (camera +, battery −); handle contrastive conjunctions"],
     ["(e)","emoji lost","Preprocessing","emoji stripped as noise","keep emojis, map them with an emoji sentiment lexicon"]]),
    "Evaluate the fix: per-class precision, recall, F1 on a held-out set; confusion matrix; re-check the misclassified reviews."],
   ans:"Sources: negation removed (preprocessing), sarcasm (pragmatic), code-mixing (data), mixed aspects (semantic/output), emoji loss (preprocessing). Fixes as tabled, verified with F1 and a confusion matrix.",
   trap:"Every row needs error + stage + reason + specific fix. 'Use deep learning' alone is not an improvement."})+
  q({tag:"Second application (short)", q:"A support chatbot: (a) 'cancle my ordr' → 'Sorry, I did not understand'; (b) 'Can you tell me my order status?' → 'Yes.'; (c) 'I have two orders. Cancel the second one.' → cancels the first; (d) 'Third time I am asking!!' → 'Glad to help! 😊'.",
   steps:[table(["","Stage","Fix"],[["(a) typos","Preprocessing","spell correction (edit distance), subword tokens, typo-augmented training data"],["(b) indirect request read as yes/no","Pragmatic (speech act)","intent classifier trained on indirect requests"],["(c) 'the second one' unresolved","Discourse (reference / one-anaphora)","dialogue state tracking + reference resolution over the conversation"],["(d) frustration ignored","Pragmatic (emotion)","sentiment detection, escalate to a human agent"]])],
   ans:"Chatbots fail mostly at the pragmatic and discourse levels; measure intent F1, task-success rate and hand-off rate."}))+
 sec("Write it like this (10 marks)", ol(["Name the application and draw its pipeline (1).","Table with 5–6 rows: output | error | stage | why | fix (6).","Data and bias sources, even if not asked directly (1).","How you would measure the improvement (P, R, F1, confusion matrix, error analysis) (2)."]))
});

/* TextRank figure */
const textRank = '<svg class="pz-svg" viewBox="0 0 440 230" style="width:100%; max-width:440px" role="img" aria-label="sentence similarity graph">'+
 '<line class="ln path" x1="220" y1="115" x2="80" y2="50"/><line class="ln path" x1="220" y1="115" x2="360" y2="50"/><line class="ln path" x1="220" y1="115" x2="90" y2="190"/><line class="ln" x1="220" y1="115" x2="350" y2="190"/><line class="ln dash" x1="80" y1="50" x2="360" y2="50"/><line class="ln dash" x1="90" y1="190" x2="350" y2="190"/>'+
 '<text class="pr" x="140" y="72">0.42</text><text class="pr" x="300" y="72">0.38</text><text class="pr" x="146" y="164">0.35</text><text class="small" x="296" y="164">0.12</text><text class="small" x="220" y="42">0.05</text><text class="small" x="220" y="204">0.08</text>'+
 '<circle class="okb" cx="220" cy="115" r="28"/><text class="lab" x="220" y="115">S2</text>'+
 '<circle class="stb" cx="80" cy="50" r="22"/><text class="lab" x="80" y="50">S1</text><circle class="stb" cx="360" cy="50" r="22"/><text class="lab" x="360" y="50">S3</text>'+
 '<circle class="stb" cx="90" cy="190" r="22"/><text class="lab" x="90" y="190">S4</text><circle class="stb" cx="350" cy="190" r="22"/><text class="lab" x="350" y="190">S5</text></svg>';

add({id:"pr_summ", m:"m6", sec:"6.2 Text summarization", short:"Summarization steps",
 title:"Text summarization: explain the steps", marks:"10", ten:true, asked:"ESE important list Q7",
 links:["m6i2","m6t4","m6t3","m6t5"],
 body:
 sec("Concept",
  def("Text summarization produces a shorter version of one or more documents that keeps the important information and the overall meaning.")+
  two([["Extractive","selects whole sentences from the source and joins them. No new words, so no invented facts; may read choppily."],["Abstractive","understands the text and writes new sentences (like a human). Fluent and compact; may hallucinate facts."],["Single vs multi-document","one article vs many articles on one event (needs de-duplication)."],["Generic vs query-focused","overall summary vs a summary answering a question ('What caused the flood?')."]]))+
 sec("Diagram: the pipeline",
  flow([["1 Preprocess","split sentences, tokenise, stop words, lemmatise"],["2 Represent","sentence → frequencies / TF-IDF vector / embedding"],["3 Score","importance of each sentence"],["4 Select","top-k within the length limit, drop redundancy"],["5 Order or generate","extractive: original order · abstractive: decoder writes"],["6 Post-process","fix dangling pronouns, smooth joins"],["7 Evaluate","ROUGE + human judgement"]]))+
 sec("The steps in depth",
  ol(["<b>Preprocessing.</b> Sentence segmentation (careful with 'Dr.', 'e.g.'), tokenisation, lower-casing, stop-word removal, lemmatisation. 'The players were running' → [player, run]. Gives clean units to score.",
   "<b>Representation.</b> Turn each sentence into numbers: word-frequency counts, a TF-IDF vector (rare-but-frequent-here words weigh more), or a sentence embedding. For graph methods, build the sentence-similarity matrix with cosine similarity.",
   "<b>Sentence scoring</b> (content selection), by one or more features:"+ul(["Frequency / TF-IDF: sum of the weights of the sentence's words.","Position: the first sentences of a news story carry the main point.","Cue phrases: 'in conclusion', 'the main finding'.","Title or query overlap.","Graph centrality (TextRank / LexRank): sentences are nodes, edges are cosine similarities; a PageRank-style iteration gives sentences similar to many others a high score."])+fig(textRank,"TextRank: S2 is similar to most other sentences, so it is the most central and is picked first."),
   "<b>Selection.</b> Take the top-k sentences up to the compression ratio (e.g. 30%). Remove redundancy: skip a sentence too similar to one already chosen (Maximal Marginal Relevance).",
   "<b>Ordering / generation.</b> Extractive: put the chosen sentences back in document order so the story flows. Abstractive: an encoder–decoder Transformer (BART, T5, PEGASUS) encodes the document; attention focuses on the important parts; the decoder writes the summary word by word (beam search); a pointer-generator copies rare names.",
   "<b>Post-processing.</b> If 'He resigned' is selected without the sentence that named him, replace 'He' with the name (coreference); join sentences smoothly; check length.",
   "<b>Evaluation.</b> ROUGE-1 / ROUGE-2 / ROUGE-L: overlap of unigrams, bigrams, longest common subsequence with a human reference summary (recall-oriented). Human checks: coherence, fluency, coverage, factual correctness."]))+
 sec("Worked mini example",
  q({tag:"Extractive, frequency method", q:"Text: S1 'NLP helps computers understand language.' S2 'NLP is used in chatbots.' S3 'The weather was pleasant.' Make a 1- and a 2-sentence summary.",
   steps:["Preprocess: drop stop words (is, in, the, was). Word frequencies: NLP 2, all others 1.",
    table(["Sentence","Content words","Score"],[["S1","NLP(2) helps(1) computers(1) understand(1) language(1)",{v:"6",c:"ok"}],["S2","NLP(2) used(1) chatbots(1)",{v:"4",c:"hl"}],["S3","weather(1) pleasant(1)","2"]],"num"),
    "Select top-1 → S1. Top-2 → S1, S2, kept in document order."],
   ans:"1-sentence summary: S1. 2-sentence summary: S1 S2. S3 (off-topic) is dropped."}))+
 sec("Write it like this (10 marks)", ol(["Definition and the four types (2).","Pipeline diagram (1).","Each step: what happens + one example (5).","Mini scoring example or TextRank figure (1).","Evaluation (ROUGE) and two challenges: hallucination in abstractive output, coherence (1)."]))
});

add({id:"pr_rag5", m:"m6", sec:"6.4 Retrieval-Augmented Generation", short:"RAG: 5 stages",
 title:"RAG: the five stages", marks:"10", ten:true, asked:"ESE important list Q1 (Set 2)",
 links:["m6i1","m6t13"],
 body:
 sec("Concept",
  p("A large language model on its own answers from what it memorised during training. That causes four problems: its knowledge stops at the training cutoff, it has never seen your private documents, it fills gaps with fluent invented text (<b>hallucination</b>), and it cannot cite a source. Retraining for every change is slow and expensive.")+
  def("<b>Retrieval-Augmented Generation</b> retrieves the relevant passages from a document store at question time and gives them to the model inside the prompt, so the model answers <i>from the documents</i>. An open-book exam for the model: prepare the book (stages 1–3), find the right pages (stage 4), answer from them with a citation (stage 5)."))+
 sec("Diagram: two lanes meeting at the vector database",
  '<div class="pz-lane">Offline: once, and again when a document changes</div>'+
  flow([["Documents","PDF, DOCX, HTML, scans","alt"],["1 Ingest","load, extract, clean, metadata"],["2 Chunk","~500 tokens, 10–20% overlap"],["3 Embed + store","vector per chunk → vector DB"]])+
  '<div class="pz-lane">Online: every question</div>'+
  flow([["Question","'Can I take leave after my baby is born?'","alt"],["embed","same embedding model"],["4 Retrieve","top-k similar chunks (cosine)"],["5 Augment + generate","prompt = rules + chunks + question → LLM"],["Answer + citation","'26 weeks [HR_Policy p.14]'","alt"]]))+
 sec("The five stages in depth",
  ol(["<b>Ingestion (load and extract).</b> Read every format (PyMuPDF, pdfplumber, Unstructured); OCR (Tesseract) for scanned pages, which have no text layer. Clean headers, footers, page numbers, broken hyphens; keep headings, lists and tables. Attach <b>metadata</b> to every piece: source file, page, section, date / version, access level. Metadata is what later makes citations, date filters and permission checks possible.",
   "<b>Chunking.</b> Split the text into pieces of about one idea each, typically ~500 tokens with 10–20% overlap. Why: a 40-page handbook cannot go into every prompt; one vector per small idea matches a question precisely; the answer can cite 'section 4.2, p.14'. Too small loses context ('26 weeks' of what?); too large mixes topics and blurs the match; overlap stops a fact from being cut in half. Better: split at headings (structure-aware).",
   "<b>Embedding and indexing.</b> An embedding model turns each chunk into a dense vector (e.g. 384 numbers with all-MiniLM-L6-v2) so that similar meanings land near each other: 'parental leave' is near 'time off after a baby'. Store vector + text + metadata in a vector database (Chroma, FAISS, Pinecone). Example: 40 pages → ≈180 chunks → 180 vectors of 384 numbers.",
   "<b>Retrieval.</b> Embed the user's question with the <b>same</b> embedding model, run a similarity search (cosine, Module 4) and return the top-k chunks (k = 3–5), filtered by metadata (latest version, user's access). It matches meaning, not keywords: 'time off after my baby is born' finds '4.2 Parental Leave' (similarity 0.82) though no word is shared; SQL LIKE '%time off%' finds nothing. Improvements: hybrid search (keyword BM25 + vectors) and a re-ranker.",
   "<b>Augmentation and generation.</b> Build the prompt: SYSTEM 'Answer using ONLY the context. Cite sources as [n]. If the answer is not in the context, say you don't know.' + CONTEXT (the top-k chunks with source tags) + QUESTION. The LLM writes a grounded answer with a citation: 'After 12 months of service you get 26 weeks of paid parental leave [HR_Policy.pdf, p.14].' Low temperature keeps it close to the text."]))+
 sec("Advantages and limits",
  two([["Advantages","Up to date (re-index one document, no retraining) · private data stays in your database · every answer traceable to a source · far fewer hallucinations · cheaper than fine-tuning."],["Limitations","Retrieval can miss or return stale versions · bad chunking splits facts · the model can still ignore the context · extra latency and storage · access control must be enforced at retrieval."]]))+
 sec("Write it like this (10 marks)", ol(["Why RAG: the four problems of an LLM alone (1).","Two-lane diagram (2).","Five stages, each with its own heading: what happens, why, one example, one tool (5).","Advantages and limitations (2)."]))+
 trap("If the question says 'five stages', give the end-to-end five above. The seminar also numbers the offline ingestion pipeline as five steps (load, extract, chunk, embed, store); name those inside stages 1–3 so either reading earns the marks.")
});

add({id:"pr_ragfix", m:"m6", sec:"6.4 RAG: diagnosing an application", short:"RAG: faulty stage",
 title:"RAG application given: identify the faulty stage and suggest improvements", marks:"10", ten:true, asked:"ESE important list Q2 (Set 2)",
 links:["s_m6_ragfix","s_m6_design"],
 body:
 sec("Concept",
  p("A wrong RAG answer can come from any of the five stages, and the symptom tells you which. Work through the stages in order and ask one question at each; the first 'no' is where the fault starts. Then give fixes for that stage (and for any later stage that made it worse).")+
  flow([["Q1 Was the needed text read?","no → <b>1 Ingestion</b> (scans without OCR, tables lost, no metadata)","bad"],["Q2 Is the fact whole in one chunk?","no → <b>2 Chunking</b> (fact split across chunks, condition separated from the number)","bad"],["Q3 Do the question and the chunk land close in vector space?","no → <b>3 Embedding</b> (synonyms, another language, domain words)","bad"],["Q4 Did the top-k contain the right, current, permitted chunk?","no → <b>4 Retrieval</b> (old version, wrong document, unauthorised file, exact codes missed)","bad"],["Q5 Does the answer follow the retrieved chunk?","no → <b>5 Generation</b> (ignored the context, invented, no citation)","bad"]],true)+
  table(["Symptom","Stage","Improvement"],[
   ["'I don't know' for a clause in a scanned contract","1 Ingestion","OCR; check extracted text per page"],
   ["answer has half a fact ('the dose is …' with no number)","2 Chunking","structure-aware chunks, 10–20% overlap"],
   ["Hindi question, English documents, unrelated chunks","3 Embedding","multilingual embedding model for both; re-embed"],
   ["old policy quoted although the new one exists","4 Retrieval (root: 1)","version/date metadata, filter latest, re-index on change"],
   ["intern receives the salary document","4 Retrieval (root: 1)","access metadata; filter by user role"],
   ["product code 'XR-2041' finds the wrong manual","4 Retrieval","hybrid search (BM25 + vector), re-ranker, code as metadata"],
   ["right chunk retrieved, answer contradicts it","5 Generation","strict prompt, low temperature, citation check, test set"]],"rowhead"))+
 sec("Worked problems",
  q({tag:"Model answer", q:"An HR assistant built with RAG tells an employee: 'You get 12 weeks of parental leave.' The 2026 handbook says 26 weeks; the 2023 handbook said 12. Both PDFs are in the knowledge base. Identify the faulty stage and suggest improvements.",
   steps:["Five stages: ingestion → chunking → embedding → retrieval → generation.",
    "The answer is specific and real (12 weeks exists in a document), so the model did not invent it: generation is not the main fault.",
    "The 2023 and 2026 chunks mean almost the same thing, so both score high in similarity search and nothing told retrieval to prefer the current one → <b>Stage 4, retrieval</b> (stale / conflicting source).",
    "Root cause at <b>Stage 1</b>: no date or version was stored as metadata at ingestion, so retrieval had nothing to filter on.",
    "Improvements: (a) version and effective-date metadata at ingestion; (b) filter or boost the latest version at query time; (c) remove superseded documents or re-index on change; (d) prompt: 'prefer the newest dated source, mention conflicts'; (e) show the citation so a wrong version is visible to the user."],
   ans:"Faulty stage: retrieval (4), caused by missing version metadata at ingestion (1). Fix: version metadata, latest-version filter, re-indexing, conflict-aware prompt, citations.",
   trap:"Name the stage and the evidence from the symptom. A list of generic RAG improvements without a diagnosis earns about half."})+
  q({tag:"Model answer", q:"A hospital guideline bot answers 'What is the dose of drug X for children?' with the adult dose. The guideline reads '…For children under 12, the dose is' and the number is on the next page.",
   steps:["The child dose is in the document, so ingestion read it.",
    "Fixed-size chunks without overlap cut the sentence: one chunk ends 'the dose is', the next starts with the number → <b>Stage 2, chunking</b> (the cause).",
    "Retrieval returns the chunk with 'children' and 'dose' but no number, plus an adult-dose chunk (working as designed on bad chunks).",
    "The model fills the gap with the adult number it can see → <b>Stage 5, generation</b> made it worse: it should have said the context does not contain the child dose.",
    "Fixes: section-aware chunking with 10–20% overlap; re-rank chunks containing both the condition and a dose; strict 'say I don't know' prompt with citations; human review for medical answers."],
   ans:"Chunking (cause) and generation (made it worse). Fix both, plus human verification because the domain is safety-critical."}))+
 sec("Write it like this (10 marks)", ol(["List the five stages in one line (1).","Read the symptom; walk the five questions to the faulty stage, with the evidence (3).","Root cause if it started earlier (1).","Specific improvements for each faulty stage (4).","How to verify: a test set of questions, retrieval hit-rate, answer-faithfulness check (1)."]))
});
})();
