/* Priority list content, Modules 2-4. Uses PH / pzTree / pzChain / pzVenn from priority.js.
   Class examples are the ones already on the module pages (class notebook, 4.0x and 5.0x files). */
(function(){
const {sec, p, ul, ol, def, f, code, trap, two, table, q, flow, fig} = PH;
const add = x => PZ.items.push(x);

/* =================== MODULE 2 =================== */

add({id:"pr_ttr", m:"m2", sec:"2.2 Empirical laws (taught with the Module 1 TTR sheet, 1.03)", short:"TTR",
 title:"Type-Token Ratio (TTR)", marks:"2", asked:"MSE repeat list",
 links:["s_m2_ttr","m2n1","m2t6"],
 body:
 sec("Concept",
  def("<b>Token</b>: every running occurrence of a word in the text (count with repeats). <b>Type</b>: every <i>distinct</i> word form (count each word once). <b>TTR = number of types ÷ number of tokens.</b>")+
  p("TTR measures <b>lexical diversity</b>: how many different words the writer uses for the amount of text written. If every word is new, types = tokens and TTR = 1. If the same few words keep repeating, types stay small while tokens grow, so TTR falls towards 0.",
    "Why it is not a fixed property of a writer: as a text grows, new tokens keep arriving but most of them are words already seen ('the', 'of', 'is'). Heaps' law says the vocabulary grows only like V = kN<sup>β</sup> with β ≈ 0.4–0.6, i.e. slower than N. So TTR always drops as text length increases. Compare TTR only between texts of the same length (or use a standardised TTR over fixed 1,000-word windows).")+
  f("TTR = |V| / N        |V| = types,  N = tokens,   0 < TTR ≤ 1\nRelative frequency of a type w = count(w) / N")+
  table(["TTR","Reading"],[["above 0.70","high diversity: varied vocabulary (short, rich text)"],["0.50 – 0.70","moderate"],["below 0.50","low diversity: repetitive text, or simply a long text"]])+
  p("Conventions to state in the answer: lower-case first (<i>The</i> and <i>the</i> are one type), do not count punctuation, count a repeated word once in types."))+
 sec("Diagram: tokens vs types",
  table(["#","1","2","3","4","5","6","7","8"],[["token","She","sells",{v:"sea",c:"hl"},"shells","at","the",{v:"sea",c:"hl"},"shore"]],"num")+
  flow([["8 tokens","every word counted, with repeats"],["remove repeats","'sea' appears twice → keep one"],["7 types","she, sells, sea, shells, at, the, shore"],["TTR = 7/8","= 0.875 (high diversity)"]]))+
 sec("Worked problems",
  q({tag:"Class", q:"“She sells sea shells at the sea shore.” Find tokens, types and TTR.",
   steps:["Tokens (every word): She, sells, sea, shells, at, the, sea, shore → N = 8.","Types (distinct, lower-cased): she, sells, sea, shells, at, the, shore → |V| = 7 (sea repeats).","TTR = 7 / 8 = 0.875."],
   ans:"N = 8, |V| = 7, TTR = 0.875: high lexical diversity; only 'sea' repeats."})+
  q({tag:"Class", q:"“The point that I am going to point from my point of view is the point that you will definitely point from your point of view if you understand my point.” Find tokens, the frequency of every type, and TTR.",
   steps:["Count tokens left to right: N = 31.",
    "Frequency table (lower-cased):"+table(["type","count","type","count","type","count"],[["point",{v:"7",c:"hl"},"from","2","is","1"],["the","2","my","2","will","1"],["that","2","of","2","definitely","1"],["you","2","view","2","your","1"],["i","1","am","1","if","1"],["going","1","to","1","understand","1"]],"num")+"Check: the counts add up to 31.",
    "Types |V| = 18 (number of rows in the table).",
    "TTR = 18 / 31 = 0.58. Relative frequency of 'point' = 7/31 = 0.226."],
   ans:"N = 31, |V| = 18, TTR ≈ 0.58 (moderate, because 'point' alone is 7 of the 31 tokens).",
   trap:"The class also writes 'type(point) = 7' meaning the count of that type. Say which you mean: the number of types in the text is 18; the frequency of the type 'point' is 7."}))+
 sec("Write it like this (2 marks)", ol(["Formula TTR = types / tokens.","Token count and type count, with the repeated words named.","Value to 2–3 decimals and one line of interpretation (high / moderate / low diversity)."]))
});

add({id:"pr_countvec", m:"m2", sec:"2.8 Bag of words (count vectors); also used in 4.3", short:"Count vectorization",
 title:"Count vectorization (Bag of Words)", asked:"MSE repeat list · sum from the class drive",
 links:["s_m2_bow","m4n1","m2t33"],
 body:
 sec("Concept",
  p("A machine-learning model can only work with numbers, so each document must become a vector. <b>Count vectorization</b> (Bag of Words) does it in the simplest possible way: fix a vocabulary, then describe each document by <i>how many times each vocabulary word occurs in it</i>.")+
  def("Vocabulary V = every unique word in the whole corpus (all documents together), in a fixed order (alphabetical in class).<br>Count vector of document d = [count(w₁, d), count(w₂, d), …, count(w<sub>|V|</sub>, d)].")+
  ul(["<b>Same length for every document</b>: |V|. A word missing from a document gets 0. That is why the vocabulary is built from <i>all</i> documents first.",
   "<b>A 'bag'</b>: word order is thrown away. 'The dog bit the man' and 'the man bit the dog' get identical vectors.",
   "<b>Sparse</b>: with a real vocabulary of 50,000 words, a 20-word sentence has at most 20 non-zero entries.",
   "<b>Frequent words dominate</b>: 'the', 'to' get big counts while saying nothing about the topic. TF-IDF fixes the weighting; stop-word removal removes them.",
   "<b>Check</b>: the entries of a count vector add up to the number of tokens in that document.",
   "Binary BoW writes 1/0 (present/absent) instead of counts."])+
  p("The stack of all document vectors is the <b>document-term matrix</b>: one row per document, one column per vocabulary word."))+
 sec("Diagram: the pipeline",
  flow([["1 Clean","lower-case, remove punctuation"],["2 Tokenise","split into words"],["3 Vocabulary","union of all unique words, sorted alphabetically"],["4 Count","for every document, count each vocabulary word"],["5 Matrix","rows = documents, columns = words"]]))+
 sec("Worked problem",
  q({tag:"Class, 24 Sep", q:"Count-vectorize D1 = 'Pranav went with Shruti to the tea shop to have some tea and a little talk.' and D2 = 'Shruti went with Pranav to the tea shop to shop for tea and no talk.'",
   steps:["Lower-case, drop the full stop, tokenise.<br>D1 (16 tokens): pranav went with shruti to the tea shop to have some tea and a little talk<br>D2 (15 tokens): shruti went with pranav to the tea shop to shop for tea and no talk",
    "Vocabulary = union of unique words, alphabetical: a, and, for, have, little, no, pranav, shop, shruti, some, talk, tea, the, to, went, with → |V| = 16.",
    "Count each vocabulary word in each document (document-term matrix):"+
    table(["","a","and","for","have","little","no","pranav","shop","shruti","some","talk","tea","the","to","went","with","Σ"],
     [["D1","1","1",{v:"0",c:"z"},"1","1",{v:"0",c:"z"},"1","1","1","1","1",{v:"2",c:"hl"},"1",{v:"2",c:"hl"},"1","1","16"],
      ["D2",{v:"0",c:"z"},"1","1",{v:"0",c:"z"},{v:"0",c:"z"},"1","1",{v:"2",c:"hl"},"1",{v:"0",c:"z"},"1",{v:"2",c:"hl"},"1",{v:"2",c:"hl"},"1","1","15"]],"num"),
    "Read off the rows. Check the sums: 16 = tokens in D1, 15 = tokens in D2."],
   ans:"V₁ = [1,1,0,1,1,0,1,1,1,1,1,2,1,2,1,1]<br>V₂ = [0,1,1,0,0,1,1,2,1,0,1,2,1,2,1,1]",
   trap:"'shop' is a noun and a verb in D2 ('tea shop to shop'); count vectors only see the string, so shop = 2. Alphabetical order puts shop before shruti (o &lt; r) and shruti before some (h &lt; o)."})+
  q({tag:"Practice", q:"D1 = 'good movie good acting', D2 = 'bad movie'. Vocabulary and vectors?",
   steps:["Vocabulary (alphabetical): acting, bad, good, movie.","D1: acting 1, bad 0, good 2, movie 1. D2: acting 0, bad 1, good 0, movie 1."],
   ans:"V = [acting, bad, good, movie]; D1 = [1, 0, 2, 1]; D2 = [0, 1, 0, 1]."}))+
 sec("Write it like this", ol(["State the preprocessing (lower-case, punctuation removed).","Write the vocabulary as a numbered list in alphabetical order, |V| = …","Draw the document-term table, one row per document.","Write each vector and show the sum check."]))
});

add({id:"pr_unique", m:"m2", sec:"2.8 Bag of words: building the vocabulary", short:"Unique vector, alphabetical",
 title:"Make the unique-word vector and arrange it alphabetically", asked:"MSE repeat list",
 links:["m4n1","s_m2_bow"],
 body:
 sec("Concept",
  p("Every vector method in the syllabus (count vectors, one-hot, TF-IDF, cosine) starts with the same step: build the <b>vocabulary vector</b>, the list of unique words. Its order fixes what each position of every later vector means, so the order must be stated and kept. The class convention is <b>alphabetical</b>, because anyone can rebuild the same order from the text.")+
  ol(["<b>Normalise</b>: lower-case everything (The = the), remove punctuation (.,!?-).",
   "<b>Tokenise</b> each sentence into words.",
   "<b>Remove duplicates</b>: keep the first occurrence of each word, across all the sentences together.",
   "<b>Sort alphabetically</b> letter by letter.",
   "<b>Number</b> the positions w₁ … w<sub>|V|</sub>. |V| is the length of every vector built from it."])+
  table(["Ordering rule","Example"],[["compare first letters","beginning &lt; end &lt; everything"],["equal start → compare the next letter","has &lt; is? no: h &lt; i, so has first; shells &lt; shore (e &lt; o)"],["a word that is a prefix comes first","a &lt; an &lt; and"],["capitals are lower-cased first","'This' sorts as 'this'"]]))+
 sec("Diagram",
  flow([["Tokens","this is the beginning of the end · everything that has a beginning has an end"],["Unique","this, is, the, beginning, of, end, everything, that, has, a, an"],["Sorted","a, an, beginning, end, everything, has, is, of, that, the, this"],["Indexed","w₁ = a … w₁₁ = this  →  |V| = 11"]]))+
 sec("Worked problem",
  q({tag:"Practice set", q:"S1 = 'This is the beginning of the end.' S2 = 'Everything that has a beginning has an end.' Make the unique vector in alphabetical order and write both count vectors.",
   steps:["Tokens: S1 = this, is, the, beginning, of, the, end (7). S2 = everything, that, has, a, beginning, has, an, end (8).",
    "Unique words in order of first appearance: this, is, the, beginning, of, end, everything, that, has, a, an (11).",
    "Alphabetical, numbered:"+table(["w₁","w₂","w₃","w₄","w₅","w₆","w₇","w₈","w₉","w₁₀","w₁₁"],[["a","an","beginning","end","everything","has","is","of","that","the","this"]],"num"),
    "Count vectors over that order:"+table(["","a","an","beginning","end","everything","has","is","of","that","the","this","Σ"],[["S1",{v:"0",c:"z"},{v:"0",c:"z"},"1","1",{v:"0",c:"z"},{v:"0",c:"z"},"1","1",{v:"0",c:"z"},{v:"2",c:"hl"},"1","7"],["S2","1","1","1","1","1",{v:"2",c:"hl"},{v:"0",c:"z"},{v:"0",c:"z"},"1",{v:"0",c:"z"},{v:"0",c:"z"},"8"]],"num")],
   ans:"Unique vector = [a, an, beginning, end, everything, has, is, of, that, the, this] (|V| = 11). S1 = [0,0,1,1,0,0,1,1,0,2,1]; S2 = [1,1,1,1,1,2,0,0,1,0,0].",
   trap:"Do not list a word twice in the unique vector ('the', 'has', 'beginning' repeat). Do not sort each sentence separately: one shared vocabulary for all sentences."}))
});

add({id:"pr_infl", m:"m2", sec:"2.4 Morphological analysis", short:"Inflectional morphemes",
 title:"Inflectional morphemes, with a detailed grammatical explanation", asked:"MSE repeat list · notebook: 'I played football'",
 links:["m2t13","m2t12","m2t14"],
 body:
 sec("Concept",
  def("A <b>morpheme</b> is the smallest unit of language that carries meaning or grammatical function. A <b>free</b> morpheme can stand alone as a word (play, boy); a <b>bound</b> morpheme must attach to another (-ed, -s, un-).")+
  p("An <b>inflectional morpheme</b> is a bound suffix that adds a <i>grammatical</i> feature (tense, number, person, aspect, case, degree) to a word <b>without changing its part of speech or its core dictionary meaning</b>. <i>played</i> is still a verb and still means 'play'; the -ed only tells us <i>when</i>. A <b>derivational</b> morpheme instead makes a new word, often of a new class: teach (V) → teach<b>er</b> (N).")+
  table(["","Inflectional","Derivational"],[["Changes word class?","Never (play V → played V)","Often (happy Adj → happiness N)"],["Creates a new dictionary word?","No: a form of the same word","Yes: a new entry"],["What it adds","grammatical feature (tense, number …)","new lexical meaning"],["How many in English","only 8, all suffixes","hundreds, prefixes and suffixes"],["Position","outermost, last in the word","closer to the root"],["Productivity","applies to almost every word of the class","selective (*goodity)"]],"rowhead")+
  p("<b>The eight English inflectional morphemes</b> (the full answer lists them with their grammar):")+
  table(["Morpheme","Attaches to","Grammatical feature it marks","Example","Grammatical explanation"],[
   ["-s","noun","number: plural","boy → boys","more than one; allomorphs /s/ cats, /z/ dogs, /ɪz/ matches"],
   ["-'s","noun","case: possessive (genitive)","Riya → Riya's","shows ownership or relation: Riya's team"],
   ["-s","verb","3rd person singular, present tense (agreement)","play → plays","agrees with a he/she/it subject: she plays"],
   ["-ed","verb","past tense","play → played","action completed before the moment of speaking; /t/ walked, /d/ played, /ɪd/ wanted"],
   ["-en / -ed","verb","past participle (perfect, passive)","eat → eaten","used after have/be: has eaten, was taken"],
   ["-ing","verb","present participle, progressive aspect","play → playing","action in progress: is playing"],
   ["-er","adjective","comparative degree","fast → faster","compares two: faster than"],
   ["-est","adjective","superlative degree","fast → fastest","the highest degree among three or more"]])+
  p("<b>Irregular forms</b> carry the same grammatical feature without a separate suffix: go → went (past, suppletion), mouse → mice (plural, internal vowel change), sing → sang. In the table write the feature and note 'irregular / no separate morpheme'."))+
 sec("Diagram: morpheme structure",
  two([["Inflection on a root", fig(pzTree(["played  (verb, past tense)|hl", ["play|p=root · free morpheme"], ["-ed|ok|p=bound · inflectional: past"]],{lh:62, minW:280, aria:"played = play + -ed"}))],
       ["Derivation inside, inflection outside", fig(pzTree(["teachers  (noun, plural)|hl", ["teacher  (N)", ["teach|p=root (V)"], ["-er|p=derivational: V → N"]], ["-s|ok|p=inflectional: plural"]],{lh:62, minW:320, aria:"teachers = teach + -er + -s"}))]]))+
 sec("Worked problems",
  q({tag:"Notebook", q:"Identify the inflectional morpheme in 'I <u>played</u> football' and explain it grammatically.",
   steps:[table(["Inflected word","Root","Inflectional morpheme","Grammatical feature"],[["played","play (free, verb)","-ed (bound suffix)","past tense"]]),
    "<b>Explanation</b>: -ed is a bound inflectional suffix attached to the regular verb <i>play</i>. It marks <b>past tense</b>: the action of playing was completed before the moment of speaking.",
    "It does <b>not</b> change the word class (play is a verb, played is a verb) or the core meaning (both mean taking part in a game). It only adds the time reference, which is what makes it inflectional and not derivational.",
    "English past tense does not change with person or number: I / she / they played. The -ed is pronounced /d/ here because 'play' ends in a voiced vowel sound."],
   ans:"played = play + -ed; -ed is an inflectional morpheme marking past tense; word class (verb) and meaning unchanged."})+
  q({tag:"Exam style", q:"Identify every inflectional morpheme with its grammatical explanation: 'The boys were watching the matches while Riya's younger brother played and scored two goals.'",
   steps:[table(["Word","Root + morpheme","Feature","Grammatical explanation"],[
    ["boys","boy + -s","plural number","noun marked for more than one; /z/ after a voiced sound"],
    ["were","be + past (irregular)","past tense, plural","no separate suffix: suppletive form of 'be'; agrees with the plural subject 'boys'"],
    ["watching","watch + -ing","progressive aspect","with 'were' forms the past progressive: an action in progress at a past time"],
    ["matches","match + -es","plural number","allomorph /ɪz/ after the sibilant 'ch'; spelling adds -es"],
    ["Riya's","Riya + -'s","possessive case","the brother belongs to / is related to Riya"],
    ["younger","young + -er","comparative degree","compares the brother's age with someone else's"],
    ["played","play + -ed","past tense","completed action in the past; regular verb"],
    ["scored","score + -ed","past tense","spelling rule: final silent e is dropped before -ed (score → scored)"],
    ["goals","goal + -s","plural number","agrees with the numeral 'two'"]]),
    "Words with no inflection: the, while, brother, and, two (function words or base forms)."],
   ans:"Nine inflected words; morphemes used: -s (plural) ×3 incl. -es, -ing, -'s, -er, -ed ×2, plus the irregular past 'were'. None changes the word class."})+
  q({tag:"Check", q:"Is the -er in 'teacher' and the -er in 'faster' the same morpheme?",
   ans:"No. teach (V) → teacher (N) changes the word class: derivational. fast (Adj) → faster (Adj) keeps the class and adds comparative degree: inflectional. Same spelling, different morphemes."}))+
 sec("Write it like this", ol(["Define morpheme, then inflectional morpheme (grammatical feature, no change of class or meaning).","Table: word | root | morpheme | feature | grammatical explanation.","One line contrasting with derivational, with an example.","Mention irregular forms if the sentence has any."]))
});

/* =================== MODULE 3 =================== */

const mouseTree = ["S|p=0.75", ["NP|p=0.25", ["DT|p=0.2","the"], ["NN|p=0.25","mouse"]], ["VP|p=0.35", ["VB|p=0.3","chased"], ["NP|p=0.25", ["DT|p=0.2","the"], ["NN|p=0.1","cat"]]]];
const treeVPatt = ["S|p=1.0", ["NP|p=0.2", ["Pro|p=1.0","I"]], ["VP|hl|p=0.3", ["VP|p=0.7", ["V|p=1.0","saw"], ["NP|p=0.6", ["Det|p=1.0","the"], ["N|p=0.5","man"]]], ["PP|p=1.0", ["P|p=1.0","with"], ["NP|p=0.6", ["Det|p=1.0","the"], ["N|p=0.5","telescope"]]]]];
const treeNPatt = ["S|p=1.0", ["NP|p=0.2", ["Pro|p=1.0","I"]], ["VP|p=0.7", ["V|p=1.0","saw"], ["NP|hl|p=0.2", ["NP|p=0.6", ["Det|p=1.0","the"], ["N|p=0.5","man"]], ["PP|p=1.0", ["P|p=1.0","with"], ["NP|p=0.6", ["Det|p=1.0","the"], ["N|p=0.5","telescope"]]]]]];

add({id:"pr_pcfg", m:"m3", sec:"3.3 CFG and PCFG", short:"PCFG",
 title:"PCFG: probability of a parse tree, choosing between parses", asked:"MSE repeat list",
 links:["s_m3_pcfg","m3n4","m3t16","m3t17"],
 body:
 sec("Concept",
  p("A context-free grammar G = (N, Σ, R, S) says <i>which</i> trees are allowed: N non-terminals (S, NP, VP …), Σ terminals (words), R rules A → β, S the start symbol. For an ambiguous sentence it gives several trees and no way to choose. 'I saw the man with the telescope' has two: did I use the telescope, or did the man have it?")+
  def("A <b>Probabilistic CFG</b> attaches a probability to every rule: P(A → β) = P(β | A), the chance that A is expanded as β. All rules with the same left-hand side sum to 1: Σ<sub>β</sub> P(A → β) = 1.")+
  f("P(tree)       = Π  P(rule)   over every rule used in the tree, once per use\nP(sentence)   = Σ  P(tree)   over all trees of the sentence\nbest parse    = argmax over trees of P(tree)\nEstimate from a treebank:  P(A → β) = Count(A → β) / Count(A)")+
  ul(["<b>Why a product</b>: the PCFG assumes each expansion is independent of everything outside its node (context-freeness), so the probability of the whole derivation is the product of its steps.",
   "<b>Treebank estimate</b>: if VP appears 100 times, 70 as VP → V NP and 30 as VP → VP PP, then P(VP → V NP) = 0.7 and P(VP → VP PP) = 0.3.",
   "<b>Disambiguation</b>: compute P for each tree; the larger one is the preferred reading. The probabilistic CKY algorithm does this efficiently for long sentences.",
   "<b>Limits</b>: the independence assumption ignores context (a subject NP is more often a pronoun than an object NP), and the rules ignore the actual words, so attachment preferences of particular verbs are lost. Lexicalised PCFGs add head words to fix this.",
   "Longer trees have more factors below 1, so P shrinks with sentence length: compare only trees of the same sentence."]))+
 sec("Diagram: tree with rule probabilities",
  fig(pzTree(mouseTree,{aria:"PCFG tree for the mouse chased the cat"}), "Each number is the probability of the rule that expands that node. P(tree) = product of all nine numbers."))+
 sec("Worked problems",
  q({tag:"Class", q:"Compute the probability of the parse tree of 'the mouse chased the cat' given S → NP VP 0.75 · NP → DT NN 0.25 · VP → VB NP 0.35 · NN → mouse 0.25 | cat 0.1 | dog 0.4 · VB → chased 0.3 | dodged 0.5 · DT → the 0.2 | a 0.35.",
   steps:["Draw the tree (above): S → NP VP; NP → DT NN (the mouse); VP → VB NP; NP → DT NN (the cat).",
    "List every rule used, once per use:"+table(["Rule","P"],[["S → NP VP","0.75"],["NP → DT NN (subject)","0.25"],["DT → the","0.2"],["NN → mouse","0.25"],["VP → VB NP","0.35"],["VB → chased","0.3"],["NP → DT NN (object)","0.25"],["DT → the","0.2"],["NN → cat","0.1"]],"num"),
    "Multiply step by step: 0.75 × 0.25 = 0.1875 → × 0.2 = 0.0375 → × 0.25 = 0.009375 → × 0.35 = 0.00328125 → × 0.3 = 0.000984375 → × 0.25 = 0.000246094 → × 0.2 = 0.0000492188 → × 0.1 = 0.00000492188."],
   ans:"P(tree) = 4.92 × 10⁻⁶.",
   trap:"NP → DT NN and DT → the are used twice; multiply them twice. Rules not used (dog, dodged, a) never enter the product."})+
  q({tag:"Ambiguity", q:"Grammar: S → NP VP 1.0 · NP → Pro 0.2 | Det N 0.6 | NP PP 0.2 · VP → V NP 0.7 | VP PP 0.3 · PP → P NP 1.0 · Pro → I 1.0 · Det → the 1.0 · N → man 0.5 | telescope 0.5 · V → saw 1.0 · P → with 1.0. Which parse of 'I saw the man with the telescope' does the PCFG prefer?",
   steps:["Tree A, <b>VP attachment</b> (I used the telescope): the PP hangs from VP via VP → VP PP."+fig(pzTree(treeVPatt,{aria:"VP attachment tree"}),"Tree A: highlighted VP → VP PP (0.3) attaches the PP to the verb phrase."),
    "P(A) = 1.0 × 0.2 × 1.0 × <b>0.3 × 0.7</b> × 1.0 × 0.6 × 1.0 × 0.5 × 1.0 × 1.0 × 0.6 × 1.0 × 0.5 = 0.2 × 0.21 × 0.3 × 0.3 = <b>0.00378</b>.",
    "Tree B, <b>NP attachment</b> (the man has the telescope): the PP hangs from the object NP via NP → NP PP."+fig(pzTree(treeNPatt,{aria:"NP attachment tree"}),"Tree B: highlighted NP → NP PP (0.2) attaches the PP to 'the man'."),
    "P(B) = 1.0 × 0.2 × 1.0 × <b>0.7</b> × 1.0 × <b>0.2</b> × 0.6 × 1.0 × 0.5 × 1.0 × 1.0 × 0.6 × 1.0 × 0.5 = 0.2 × 0.14 × 0.3 × 0.3 = <b>0.00252</b>.",
    "Only the attachment rules differ: 0.3 × 0.7 = 0.21 for A against 0.7 × 0.2 = 0.14 for B. Everything else is shared."],
   ans:"P(A) = 0.00378 &gt; P(B) = 0.00252, so the PCFG chooses the VP-attachment reading: I used the telescope to see the man.",
   trap:"The PCFG decides from rule frequencies alone, not from the words: it would make the same choice for 'the man with the hat'. That is the lexical-insensitivity limitation."}))+
 sec("Write it like this", ol(["Define PCFG (CFG + rule probabilities, LHS sums to 1).","Formula P(T) = Π P(rule).","Draw the tree with the probability at each node.","Table of rules used and the multiplication.","For two trees: both products, then the conclusion naming the preferred reading."]))
});

/* HMM state diagram for the 'hot lead cold feet' sheet (19 Nov) */
const hmmDiagram = (function(){
  const W = 640, H = 300;
  let s = '<defs><marker id="pzh1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrowhead acc" d="M0,0 L10,5 L0,10 z"/></marker><marker id="pzh2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path class="arrowhead" d="M0,0 L10,5 L0,10 z"/></marker></defs>';
  const st = (x,y,l,c)=>'<circle class="'+c+'" cx="'+x+'" cy="'+y+'" r="26"/><text class="lab" x="'+x+'" y="'+y+'">'+l+'</text>';
  s += '<line class="ln path" x1="86" y1="110" x2="202" y2="110" marker-end="url(#pzh1)"/><text class="pr" x="144" y="98">0.7</text>';
  s += '<path class="ln path" d="M250 92 Q320 40 392 92" marker-end="url(#pzh1)"/><text class="pr" x="320" y="54">0.8</text>';
  s += '<path class="ln path" d="M392 128 Q320 180 250 128" marker-end="url(#pzh1)"/><text class="pr" x="320" y="170">0.45</text>';
  s += '<line class="ln path" x1="442" y1="110" x2="556" y2="110" marker-end="url(#pzh1)"/><text class="pr" x="500" y="98">0.4</text>';
  s += '<path class="ln dash" d="M405 86 C385 30 450 30 432 86" marker-end="url(#pzh2)"/><text class="small" x="418" y="28">0.15</text>';
  s += st(60,110,"S","stb") + st(226,110,"JJ","hlb") + st(416,110,"NN","hlb") + st(582,110,"E","stb");
  s += '<rect class="stb" x="168" y="210" width="116" height="62" rx="8"/><text class="small" x="226" y="226">emissions of JJ</text><text class="word" x="226" y="245">hot 0.4</text><text class="word" x="226" y="262">cold 0.45</text>';
  s += '<rect class="stb" x="358" y="210" width="116" height="62" rx="8"/><text class="small" x="416" y="226">emissions of NN</text><text class="word" x="416" y="245">lead 0.55</text><text class="word" x="416" y="262">feet 0.42</text>';
  s += '<line class="ln dash" x1="226" y1="136" x2="226" y2="210"/><line class="ln dash" x1="416" y1="136" x2="416" y2="210"/>';
  return '<svg class="pz-svg" viewBox="0 0 '+W+' '+H+'" style="width:100%; max-width:'+W+'px; min-width:480px" role="img" aria-label="HMM transition diagram">'+s+'</svg>';
})();

add({id:"pr_hmm", m:"m3", sec:"3.1 POS tagging with HMM", short:"HMM path probability",
 title:"HMM: transition diagram and emission probabilities given, find the tag-sequence probability", asked:"MSE repeat list · sheet sent 19 Nov ('hot lead cold feet')",
 links:["s_m3_hmm","m3n1","s_m3_viterbi","m3t5"],
 body:
 sec("Concept",
  p("In POS tagging we see the <b>words</b> but not the <b>tags</b>. A Hidden Markov Model treats the tags as hidden states that generate the words. It has three parts:")+
  ul(["<b>States</b>: the tags (JJ, NN, VB …) plus a start state S (&lt;s&gt;) and an end state E (&lt;/s&gt;).",
   "<b>Transition probabilities</b> A: P(tᵢ | tᵢ₋₁), the chance of moving from one tag to the next. These are the arrows of the transition diagram; the arrows leaving a state sum to 1. The arrows from S are the initial probabilities π.",
   "<b>Emission probabilities</b> B: P(wᵢ | tᵢ), the chance that a tag produces a particular word."])+
  p("Two assumptions make the computation a simple product: (1) <b>Markov</b>: a tag depends only on the previous tag; (2) <b>output independence</b>: a word depends only on its own tag.")+
  f("P(words, tags) = P(t₁|S) · P(w₁|t₁) · P(t₂|t₁) · P(w₂|t₂) · … · P(tₙ|tₙ₋₁) · P(wₙ|tₙ) · P(E|tₙ)\n                 └ transition ┘ └ emission ┘   alternate along the path\nBest tagging = argmax over tag sequences of that product (Viterbi for long sentences)")+
  p("<b>Reading the diagram</b>: follow the arrows that match the given tag sequence, write each arrow's number (transition), and under each state write the probability of the word it emits (emission). Then multiply in path order. If several tag sequences are possible, compute each path and choose the largest: that is the HMM's tagging."))+
 sec("Diagram: the transition diagram from the sheet",
  fig(hmmDiagram,"Solid arrows are the transitions on the sheet. The dashed NN → NN 0.15 is implied: NN's outgoing arrows must sum to 1 (0.45 + 0.4 + 0.15)."))+
 sec("Worked problems",
  q({tag:"Sheet, 19 Nov", q:"Transitions S→JJ 0.7, JJ→NN 0.8, NN→JJ 0.45, NN→E 0.4; emissions JJ→hot 0.4, NN→lead 0.55, JJ→cold 0.45, NN→feet 0.42. Find the probability of 'hot lead cold feet' tagged JJ NN JJ NN.",
   steps:["Draw the path, transition above each arrow and emission under each state:"+fig(pzChain(["S","JJ","NN","JJ","NN","E"],[null,"hot","lead","cold","feet",null],["0.7","0.8","0.45","0.8","0.4"],[null,"0.4","0.55","0.45","0.42",null],{win:true,id:"a",aria:"path hot lead cold feet"})),
    "Write the factors in path order: P = 0.7 × 0.4 × 0.8 × 0.55 × 0.45 × 0.45 × 0.8 × 0.42 × 0.4",
    "Multiply step by step: 0.7 × 0.4 = 0.28 → × 0.8 = 0.224 → × 0.55 = 0.1232 → × 0.45 = 0.05544 → × 0.45 = 0.024948 → × 0.8 = 0.0199584 → × 0.42 = 0.0083825 → × 0.4 = 0.0033530."],
   ans:"P(hot lead cold feet, JJ NN JJ NN) = 3.353 × 10⁻³ ≈ 0.00335.",
   trap:"Do not forget the last transition into E (× 0.4). Do not multiply the emission of S or E: they emit nothing."})+
  q({tag:"Class", q:"Make the HMM table for 'Test passed' with π = [NN 0.9, VB 0.1] and the four paths drawn in class: (i) S →0.9 NN →0.5 NN →0.05 E; (ii) S →0.9 NN →0.9 VB →0.05 E; (iii) S →0.1 VB →0.45 NN →0.05 E; (iv) S →0.1 VB →0.5 VB →0.05 E. Emissions: P(test|NN) = 0.9, P(test|VB) = 0.1, P(passed|NN) = 0.08, P(passed|VB) = 0.92. Which tag sequence wins?",
   steps:["Four sequences are possible (2 tags × 2 words). Compute each path:"+
    table(["Path","π","emit test","trans","emit passed","→ E","P"],[
     ["NN NN","0.9","0.9","0.5","0.08","0.05","0.00162"],
     [{v:"NN VB",c:"ok"},"0.9","0.9","0.9","0.92","0.05",{v:"0.033534",c:"ok"}],
     ["VB NN","0.1","0.1","0.45","0.08","0.05","0.000018"],
     ["VB VB","0.1","0.1","0.5","0.92","0.05","0.00023"]],"num"),
    "Winning path drawn:"+fig(pzChain(["S","NN","VB","E"],[null,"test","passed",null],["0.9","0.9","0.05"],[null,"0.9","0.92",null],{win:true,id:"b",aria:"winning path NN VB"}))],
   ans:"NN VB (test/NN passed/VB) with P = 0.0335, about 20 times the next best (VB VB, 0.00023).",
   trap:"Use each path's numbers exactly as drawn on the sheet (the class diagram gives them per path). With n words and k tags there are kⁿ paths. Listing them works for 2–3 words; for longer sentences say that Viterbi keeps only the best path into each state at each word."}))+
 sec("Write it like this", ol(["Name the three HMM components (states, A, B) and the two assumptions.","Write the product formula.","Redraw the path with transitions and emissions labelled.","Write the factors in path order, then the step-by-step multiplication.","If several paths: a table of all, then the winner."]))
});

/* =================== MODULE 4 =================== */

add({id:"pr_lesk", m:"m4", sec:"4.2 Word sense disambiguation", short:"Lesk",
 title:"Lesk algorithm: pseudocode and problem", marks:"10", ten:true, asked:"ESE important list Q5 · notebook: 'sentence given, write all definitions of the ambiguous word'",
 links:["s_m4_lesk","m4n4","m4t9","m4t7"],
 body:
 sec("Concept",
  p("<b>Word sense disambiguation</b> (WSD) picks the meaning of an ambiguous word that fits its sentence: 'bank' in 'deposit money at the bank' is the financial sense, in 'sat on the bank of the river' it is the land sense. WSD is needed by translation, search and question answering, because a wrong sense gives a wrong translation or a wrong document.")+
  p("<b>Lesk (1986)</b> is the classic <b>knowledge-based</b> (dictionary-based) method: it needs no labelled training data, only a dictionary such as WordNet. Its idea: <i>words that appear together in a sentence tend to talk about the same topic, so the correct sense is the one whose dictionary definition shares the most words with the context.</i>")+
  two([["Sense bag (signature)","the content words of one sense's gloss (definition) and its example sentences"],["Context bag","the content words of the sentence around the target (simplified Lesk), or the glosses of those words (original Lesk)"]])+
  ul(["<b>Simplified Lesk</b>: overlap between each sense's gloss + examples and the words of the sentence. This is what the exam problem asks.",
   "<b>Original Lesk</b>: overlap between the glosses of the target's senses and the glosses of the neighbouring words (classic 'pine cone': pine¹ 'evergreen tree…' and cone³ 'fruit of certain evergreen trees' share evergreen, tree).",
   "Preprocess both bags: remove stop words (the, of, so …) and the target word itself, lemmatise (deposits → deposit, switched → switch).",
   "Tie or zero overlap: fall back to the most frequent sense (WordNet sense 1).",
   "<b>Limits</b>: glosses are short, so overlaps are small and ties are common; the result depends on the dictionary's wording. <b>Extended Lesk</b> adds glosses of related senses (hypernyms, hyponyms); a vector version compares TF-IDF vectors of gloss and sentence with cosine similarity."]))+
 sec("Pseudocode",
  code("<b>function</b> SIMPLIFIED-LESK(word, sentence) <b>returns</b> best sense of word\n    best-sense  ← most frequent sense of word\n    max-overlap ← 0\n    context     ← set of content words in sentence      <i>// stop words and word removed</i>\n    <b>for each</b> sense <b>in</b> senses(word) <b>do</b>\n        signature ← set of content words in gloss(sense) and examples(sense)\n        overlap   ← COMPUTE-OVERLAP(signature, context)     <i>// |signature ∩ context|</i>\n        <b>if</b> overlap &gt; max-overlap <b>then</b>\n            max-overlap ← overlap\n            best-sense  ← sense\n    <b>end for</b>\n    <b>return</b> best-sense")+
  f("overlap(sᵢ) = | signature(sᵢ) ∩ context |          ŝ = argmax over i of overlap(sᵢ)")+
  flow([["1 Target","find the ambiguous word"],["2 Senses","write every sense: gloss + example"],["3 Context bag","sentence words minus stop words, lemmatised"],["4 Overlap","count shared words per sense"],["5 Choose","highest overlap wins; tie → sense 1"]]))+
 sec("Worked problems",
  q({tag:"Textbook (J&M)", q:"Disambiguate 'bank' in: 'The bank can guarantee deposits will eventually cover future tuition costs because it invests in adjustable-rate mortgage securities.' Write all the senses.",
   steps:["Target word: <b>bank</b>. Senses (WordNet), each with gloss and example:"+
    table(["Sense","Gloss + example (signature)"],[
     ["bank¹ (financial institution)","'a financial institution that accepts <b>deposits</b> and channels the money into lending activities' · 'he cashed a check at the bank', 'that bank holds the <b>mortgage</b> on my home'"],
     ["bank² (river side)","'sloping land, especially the slope beside a body of water' · 'they pulled the canoe up on the bank'"],
     ["bank³ (reserve supply)","'a supply or stock held in reserve for <b>future</b> use, especially in emergencies' · 'a blood bank'"],
     ["bank⁴ (row of objects)","'an arrangement of similar objects in a row or in tiers' · 'a bank of switches'"],
     ["bank⁵ (verb, aircraft)","'to tip laterally while turning' · 'the pilot banked the plane'"]]),
    "Context bag (stop words the, can, will, because, it, in removed; target removed): {guarantee, deposits, eventually, cover, future, tuition, costs, invests, adjustable-rate, mortgage, securities}.",
    "Overlaps:"+table(["Sense","Shared words","Overlap"],[[{v:"bank¹",c:"ok"},"deposits, mortgage",{v:"2",c:"ok"}],["bank²","—","0"],["bank³","future","1"],["bank⁴","—","0"],["bank⁵","—","0"]],"num")+
    fig(pzVenn("signature of bank¹",["financial","institution","accepts","channels","money","lending","check","holds","home"],["deposits","mortgage"],["guarantee","eventually","cover","future","tuition","costs","invests","securities"],"context bag"),"The intersection is the overlap score: 2 for bank¹."),
    "Highest overlap: bank¹ (2) &gt; bank³ (1) &gt; others (0)."],
   ans:"'bank' = bank¹, the financial institution, decided by the shared words 'deposits' and 'mortgage'.",
   trap:"bank³ scores 1 through 'future': a reminder that Lesk counts surface words, not meaning. Mention it; it shows you understand the method's weakness."})+
  q({tag:"Class (4.05)", q:"Use Lesk to find the meaning of 'light' in 'The room was dark, so she switched on the light to read her book.'",
   steps:["Target word: <b>light</b>. Write all its senses:"+
    table(["Sense","Gloss + example"],[
     ["light¹ (n, illumination)","'the natural or artificial source of brightness that makes things visible in a dark room' · 'She turned on the light in the room.'"],
     ["light² (adj, not heavy)","'having little weight; easy to lift or carry' · 'This bag is very light.'"],
     ["light³ (adj, pale colour)","'pale, having more white in it' · 'a light blue shirt'"],
     ["light⁴ (v, ignite)","'to make something start burning' · 'light a candle'"]]),
    "Context bag (the, was, so, she, on, to, her removed): {room, dark, switched, read, book}.",
    "Overlaps:"+table(["Sense","Shared words","Overlap"],[[{v:"light¹",c:"ok"},"room, dark",{v:"2",c:"ok"}],["light²","—","0"],["light³","—","0"],["light⁴","—","0"]],"num"),
    "Highest overlap: light¹."],
   ans:"'light' = illumination (overlap 2 against 0), because 'room' and 'dark' belong with the brightness sense.",
   trap:"Write the overlapping words <i>into</i> your gloss or example so the examiner can see them. A gloss written without them gives overlap 0 everywhere and no decision."}))+
 sec("Write it like this (10 marks)", ol(["WSD and why it is needed (1).","Lesk idea, sense bag and context bag, simplified vs original (2).","Pseudocode (2).","Problem: every sense with gloss + example, context bag, overlap table, choice, one-line conclusion (4).","One limitation and one improvement (1)."]))
});

/* one-hot grid for 'Left is right and right is wrong' */
const V19 = ["accept","am","and","are","but","choice","i","is","left","no","out","point","right","that","the","to","with","wrong","you"];
const enc = ["left","is","right","and","right","is","wrong"];
const gridHead = ["word"].concat(V19.map((w,i)=>'<span title="'+w+'">'+(i+1)+'</span>'));
const gridRows = enc.map(w=>[w].concat(V19.map(v=>v===w ? {v:"1",c:"hl"} : {v:"0",c:"z"})));
const sumRow = ["Σ = count"].concat(V19.map(v=>{ const c = enc.filter(w=>w===v).length; return c ? {v:String(c),c:"ok"} : {v:"0",c:"z"}; }));
const V8 = ["and","on","sea","sells","she","shells","shore","the"];

add({id:"pr_onehot", m:"m4", sec:"4.3 Vectorization", short:"One-hot",
 title:"One-hot vectors: the numerical", asked:"ESE notebook list (from the class notebook)",
 links:["m4n1","m4t13"],
 body:
 sec("Concept",
  p("One-hot encoding gives every vocabulary word its own dimension. A word is a vector of |V| zeros with a single 1 at that word's position. A sentence becomes a <b>matrix</b>: one one-hot row per token, in sentence order.")+
  f("Vocabulary (alphabetical): w₁ … w|V|\none-hot(wₖ) = [0, …, 0, 1, 0, …, 0]   (1 at position k, length |V|)\nsentence of n tokens → n × |V| matrix\ncount vector of a sentence = sum of its one-hot rows")+
  ul(["The table of all words is the |V| × |V| <b>identity matrix</b>.",
   "<b>Every pair of different words is orthogonal</b>: dot product 0, cosine 0. 'cat' is as far from 'kitten' as from 'aeroplane', so one-hot vectors carry no meaning or similarity. This is the motivation for dense embeddings (Word2Vec, GloVe).",
   "Very sparse and very long: |V| = 50,000 means 49,999 zeros per word.",
   "A word not in the vocabulary (OOV) has no vector.",
   "Unlike a count vector, the matrix keeps word order (row order); adding the rows loses the order and gives the count vector."]))+
 sec("Diagram: the identity table",
  p("'She sells sea shells on the sea shore and' → unique words, alphabetical (8): ")+
  table(["word"].concat(V8.map((w,i)=>String(i+1))), V8.map(w=>[w].concat(V8.map(v=>v===w ? {v:"1",c:"hl"} : {v:"0",c:"z"}))),"num grid")+
  p("Each row is that word's one-hot vector. 'sea' appears twice in the text but once in the vocabulary."))+
 sec("Worked problem",
  q({tag:"Class, 29 Sep", q:"Construct one-hot vectors for 'The point is to point out that you are left with no choice but to accept that I am right and you are wrong.' Then encode 'Left is right and right is wrong'.",
   steps:["Unique words (lower-case): the, point, is, to, out, that, you, are, left, with, no, choice, but, accept, i, am, right, and, wrong → |V| = 19.",
    "Alphabetical order with positions:"+table(V19.map((w,i)=>"w"+(i+1)),[V19],"num"),
    "One-hot of a word = 19-long vector with a 1 at its position; the full table is the 19 × 19 identity matrix (write the first rows and '…' if short of time).",
    "Encode the string token by token (7 tokens → 7 × 19 matrix):"+table(gridHead, gridRows.concat([sumRow]), "num grid"),
    "For example left = w₉ → [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]."],
   ans:"7 one-hot vectors of length 19: left (9), is (8), right (13), and (3), right (13), is (8), wrong (18). Summing the rows gives the count vector of the string: and 1, is 2, left 1, right 2, wrong 1.",
   trap:"The vocabulary comes from the passage, not from the short string; the string's vectors are still 19 long. Repeated tokens (right, is) get identical rows."}))+
 sec("Write it like this", ol(["Unique words, |V|.","Alphabetical numbered list.","One-hot table (identity) or the formula for one word.","The encoded string as a matrix, one row per token.","One line: dimension = |V|, orthogonal, no similarity information."]))
});

add({id:"pr_semrel", m:"m4", sec:"4.1 Lexical semantics", short:"Semantic relations",
 title:"Semantic relations: paragraph given, explain every word with justification", asked:"ESE notebook list · class sheet 4.04",
 links:["s_m4_rel","m4t3","m4t4","m4t5"],
 body:
 sec("Concept",
  p("Lexical semantics studies how word meanings relate to each other. WordNet stores exactly these relations, and they are used for WSD, query expansion in search ('car' also finds 'automobile') and inference ('a violin is an instrument'). For each relation know: the definition, a <b>test</b> you can apply, and an example.")+
  table(["Relation","Definition","Test","Example"],[
   ["Homonymy","same form, <b>unrelated</b> meanings","no shared idea; a dictionary lists separate entries","bank (money) / bank (river)"],
   ["Homophones","same sound, different spelling and meaning","read aloud, they sound the same","right / write, sea / see"],
   ["Homographs","same spelling, different meaning (often different sound)","same letters, different senses","lead (metal) / lead (guide)"],
   ["Polysemy","one word, several <b>related</b> meanings","the senses share a core idea","mouth (person / river), bright (light / clever)"],
   ["Synonymy","different words, (nearly) the same meaning","substitute one for the other: meaning survives","big / large, couch / sofa"],
   ["Antonymy","opposite meanings","'X and not-X' / scale ends","hot / cold, buy / sell"],
   ["Hyponymy","a specific kind of a more general class","'X is a kind of Y' is true","violin → instrument"],
   ["Hypernymy","the general class above","'Y has kinds such as X'","instrument → violin"],
   ["Meronymy","a part of a whole","'X is part of Y'","wheel → car"],
   ["Holonymy","the whole that has the part","'Y has X as a part'","car → wheel"],
   ["Metonymy","a word stands for something closely associated with it","the literal reading is odd, the associated one is meant","'the White House said' = the President's office"],
   ["Zeugma","one word used with two others in two different senses at once","the sentence sounds like a pun","'she lost her keys and her temper'"]],"rowhead"))+
 sec("Diagrams",
  two([["Is-a hierarchy (hypernym above, hyponyms below)", fig(pzTree(["instrument|hl|p=hypernym", ["string|p=hyponym", ["violin"], ["cello"]], ["wind|p=hyponym", ["flute"]], ["percussion|p=hyponym", ["drum"]]],{minW:300, aria:"is-a hierarchy"}))],
       ["Part-whole hierarchy (holonym above, meronyms below)", fig(pzTree(["car|hl|p=holonym", ["engine|p=meronym", ["piston"]], ["wheel|p=meronym", ["tyre"]], ["door|p=meronym"]],{minW:300, aria:"part-whole hierarchy"}))]])+
  p("Is-a is inherited (a violin is a string instrument, so it is an instrument). Part-of is not always: a piston is part of an engine, and the engine is part of the car."))+
 sec("Method for a paragraph",
  ol(["Read word by word; for every content word ask the five questions: two meanings (related → polysemy, unrelated → homonymy)? a kind of something (hyponymy)? a part of something (meronymy)? standing for something else (metonymy)? one verb with two different objects (zeugma)?",
   "Also look for synonym and antonym pairs inside the paragraph.",
   "Table: relation | word(s) | justification. For polysemy, homonymy and zeugma, give <b>both</b> senses: that is the mark.",
   "Implied relations are allowed: say 'implied' (orchestra implies violin)."]))+
 sec("Worked problems",
  q({tag:"Class sheet 4.04", q:"Analyse for polysemy, homonymy, holonymy, meronymy, metonymy, hypernymy, hyponymy and zeugma: 'The orchestra's final movement, echoing through the grand hall, mirrored the conductor's passion and the city's restless heartbeat.'",
   steps:[table(["Relation","Word(s)","Justification"],[
    ["Polysemy","movement","(1) a section of a symphony, (2) a social or physical movement; related by the idea of motion/change"],
    ["Homonymy","hall","(1) a large room for concerts, (2) a corridor or entrance passage; the class key reads them as separate senses"],
    ["Holonymy","orchestra","the whole made of parts: violinists, flautists, the conductor"],
    ["Meronymy","movement","a part of the whole symphony (the inverse of holonymy)"],
    ["Metonymy","the city's restless heartbeat","'the city' stands for its people and their activity; a city has no literal heartbeat"],
    ["Hypernymy","instrument (implied)","the general class of what the orchestra plays"],
    ["Hyponymy","violin, flute (implied)","specific kinds of instrument: 'a violin is a kind of instrument'"],
    ["Zeugma","mirrored","governs 'passion' (reflected an emotion) and 'heartbeat' (matched a rhythm): one verb, two senses"]])],
   ans:"Polysemy: movement · Homonymy: hall · Holonymy: orchestra · Meronymy: movement (of the symphony) · Metonymy: the city's heartbeat · Hypernymy/Hyponymy: instrument/violin · Zeugma: mirrored."})+
  q({tag:"Practice", q:"Find every semantic relation: 'Meera parked her car near the bank, noticed that its engine was hot, and walked along the river bank to a bright little café, where she ordered a cold coffee, read the Times, and lost her keys and her temper when the White House announced new tariffs.'",
   steps:[table(["Relation","Word(s)","Justification"],[
    ["Homonymy","bank … river bank","financial institution vs land beside a river: same form, unrelated meanings"],
    ["Polysemy","bright (café)","full of light here; also 'clever' (a bright student); both share 'shining'"],
    ["Meronymy / Holonymy","engine – car","the engine is part of the car (meronym); the car is the whole (holonym)"],
    ["Hyponymy / Hypernymy","car – vehicle; coffee – beverage","'a car is a kind of vehicle', 'coffee is a kind of beverage' (hypernyms implied)"],
    ["Antonymy","hot – cold","opposite ends of the temperature scale"],
    ["Synonymy","café – coffee shop (implied)","substitutable without change of meaning"],
    ["Metonymy","the Times; the White House","the newspaper's name for the newspaper; the building for the US President's administration"],
    ["Zeugma","lost her keys and her temper","'lost' = misplaced (keys) and = could no longer control (temper)"]])],
   ans:"Eight relations found; each row names the words and the test that proves the relation."}))
});

/* cosine figure: two vectors 48.19 degrees apart */
const cosFig = '<svg class="pz-svg" viewBox="0 0 420 240" style="width:100%; max-width:420px" role="img" aria-label="angle between two document vectors">'+
 '<defs><marker id="pzc1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path class="arrowhead acc" d="M0,0 L10,5 L0,10 z"/></marker><marker id="pzc2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto"><path style="fill:var(--good)" d="M0,0 L10,5 L0,10 z"/></marker></defs>'+
 '<line class="ax" x1="60" y1="210" x2="400" y2="210"/><line class="ax" x1="60" y1="210" x2="60" y2="14"/>'+
 '<line class="vec" style="stroke:var(--accent-ui)" x1="60" y1="210" x2="282" y2="150.5" marker-end="url(#pzc1)"/>'+
 '<line class="vec" style="stroke:var(--good)" x1="60" y1="210" x2="150" y2="31.5" marker-end="url(#pzc2)"/>'+
 '<path class="ln path" d="M118 194.5 A60 60 0 0 0 87 156.5"/>'+
 '<text class="pr" x="132" y="166" style="font-size:12px">θ = 48.19°</text>'+
 '<text class="lab" x="330" y="150" style="fill:var(--accent-ui); font-size:12px">D1 = [0,1,1,1,0,0,1,1,2]</text>'+
 '<text class="lab" x="150" y="20" style="fill:var(--good); font-size:12px; text-anchor:start" dx="8">D2 = [1,0,1,0,1,1,1,0,2]</text>'+
 '<text class="small" x="230" y="228">cos θ = 0.667 → similarity; 1 − cos θ = 0.333 → distance</text></svg>';

add({id:"pr_cosine", m:"m4", sec:"4.3 Vectorization and similarity", short:"Cosine",
 title:"Cosine similarity and cosine distance", asked:"ESE notebook list",
 links:["m4n3","m4t16"],
 body:
 sec("Concept",
  p("Once two documents are vectors over the same vocabulary, their similarity is the <b>angle between the vectors</b>. Vectors that point the same way use words in the same proportions; vectors at 90° share no words at all.")+
  f("cos(A, B) = A·B / (‖A‖ × ‖B‖)\nA·B  = Σ Aᵢ Bᵢ          (dot product: only shared words contribute)\n‖A‖  = √(Σ Aᵢ²)        (length of the vector)\ncosine distance = 1 − cos(A, B)        angle θ = cos⁻¹(cos(A, B))")+
  ul(["<b>Range</b>: count vectors have no negative entries, so cos lies in [0, 1]: 1 = same direction (same word proportions), 0 = orthogonal (no shared word). Distance lies in [0, 1] the other way round.",
   "<b>Length does not matter</b>: a document copied twice has every count doubled, B = 2A, and cos(A, 2A) = 1. Euclidean distance would call them far apart. This is why cosine is preferred for documents of different lengths.",
   "Cosine distance is convenient but not a true metric (it fails the triangle inequality); the angle θ is.",
   "Used for: document search and ranking, plagiarism and duplicate detection, the vector form of Lesk, RAG retrieval with embeddings, word similarity with Word2Vec."]))+
 sec("Diagram",
  fig(cosFig,"Two documents as arrows from the origin (drawn in 2-D; the real vectors have 9 dimensions). Only the angle between them matters, not their lengths."))+
 sec("Worked problems",
  q({tag:"Class, 1 Oct", q:"Find the cosine similarity, angle and cosine distance between D1 = 'The mouse chased the cat and ran' and D2 = 'The cat hide from the mouse again', using count vectors.",
   steps:["Vocabulary (alphabetical): again, and, cat, chased, from, hide, mouse, ran, the (9).",
    "Count vectors and the products:"+table(["","again","and","cat","chased","from","hide","mouse","ran","the"],[
     ["D1","0","1","1","1","0","0","1","1","2"],["D2","1","0","1","0","1","1","1","0","2"],
     ["D1×D2",{v:"0",c:"z"},{v:"0",c:"z"},{v:"1",c:"hl"},{v:"0",c:"z"},{v:"0",c:"z"},{v:"0",c:"z"},{v:"1",c:"hl"},{v:"0",c:"z"},{v:"4",c:"hl"}]],"num"),
    "Dot product D1·D2 = 1 + 1 + 4 = 6.",
    "‖D1‖ = √(1+1+1+1+1+4) = √9 = 3. ‖D2‖ = √(1+1+1+1+1+4) = √9 = 3.",
    "cos θ = 6 / (3 × 3) = 0.667. θ = cos⁻¹(0.667) = 48.19°. Cosine distance = 1 − 0.667 = 0.333."],
   ans:"Similarity 0.667, angle 48.19°, distance 0.333: fairly similar (shared words the, cat, mouse).",
   trap:"The two sentences describe opposite events (who chases whom), but count vectors cannot see roles or order: say so in one line for the analysis mark."})+
  q({tag:"Practice", q:"D1 = 'This question is interesting.' D2 = 'NLP question is boring.' Cosine similarity and distance.",
   steps:["Vocabulary: boring, interesting, is, nlp, question, this.","D1 = [0,1,1,0,1,1]; D2 = [1,0,1,1,1,0].","Dot = is 1 + question 1 = 2; ‖D1‖ = √4 = 2; ‖D2‖ = √4 = 2.","cos = 2/4 = 0.5; θ = 60°."],
   ans:"Similarity 0.5, distance 0.5."}))+
 sec("Write it like this", ol(["Formula for cos, ‖·‖ and distance.","Vocabulary and both vectors in a table.","Dot product with the shared positions named.","Both norms.","cos, angle, distance, and one line of interpretation."]))
});
})();
