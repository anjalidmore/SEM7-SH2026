/* =====================================================================
   NLP — step-by-step notes for syllabus.html
   One syllabus topic = one small predicted question (an entry may be an
   array when a topic names two things, e.g. Word2Vec and GloVe).
   Key = module.entry.topic, the checklist id used by syllabus.html.
   Note: {q, m (marks), a (plain text for SEM7.ui.rich, or HTML), trap, ask[]}
   Sources, in order: class decks and solved problems in _resources/nlp,
   then Jurafsky & Martin (T1). Anything from outside them says so.
   ===================================================================== */
(function(){
  "use strict";
  var N = (window.SEM7_NOTES = window.SEM7_NOTES || {}).nlp = {};

  /* ------------------------------------------------ Module 4 */
  N["3.0.0"] = [
    { q:"What is semantic analysis? Explain meaning representation with an example.", m:3,
      a:"Semantic analysis — maps a sentence onto a representation of its meaning (logic, semantic roles, feature structures).\nExample: 'The boy kicks the ball' → kick(boy, ball). The system now knows boy = agent, ball = object.\nTwo parts:\n- Lexical semantics: meaning of individual words.\n- Compositional semantics: how words combine into sentence meaning.\nFrege's principle (compositionality) — the meaning of the whole is built from the meaning of its parts.\nCommon meaning representation languages:\n- First Order Predicate Calculus (FOPC)\n- Semantic network\n- Conceptual dependency\n- Frame-based representation",
      trap:"Semantic analysis is not only 'meaning of words'. Half of it is how the words combine.",
      ask:["Define semantic analysis", "State the principle of compositionality", "List meaning representation languages"] },
    { q:"What properties should a meaning representation language have?", m:5,
      a:"1. Verifiability — its truth can be checked against a knowledge base.\n2. Unambiguous representation — only one interpretation.\n3. Canonical form — sentences that mean the same get the same representation. 'Does Maharani serve vegetarian food?' and 'Are vegetarian dishes served at Maharani?' map to one form.\n4. Inference and variables — new facts can be derived; variables are allowed, e.g. Goes(x, Hyderabad).\n5. Expressiveness — can represent a wide range of subject matter.",
      trap:"Canonical form = many sentences, one representation. Ambiguity = one sentence, many meanings. They are different points.",
      ask:["Characteristics of a meaning representation language", "Explain canonical form with an example"] }
  ];
  N["3.0.1"] = [
    { q:"What is lexical semantics?", m:2,
      a:"Lexical semantics — the study of the meaning of individual words (lexemes) and of the relations between their senses.\nA dictionary describes a lexeme in terms of other lexemes: red = 'the colour of blood or a ruby'. From this we learn red is a colour and blood is a liquid.\nRelations it studies: homonymy, polysemy, synonymy, antonymy, hyponymy / hypernymy, meronymy.",
      ask:["Define lexeme and sense", "List the relations among word senses"] },
    { q:"What is WordNet? What is a synset?", m:5,
      a:"WordNet — a large, hierarchically organised lexical database of English (Princeton). It works as a dictionary + thesaurus.\nSynset — a set of synonyms that share one sense, with a gloss (definition). Each synset is one concept.\nExample for 'car':\n- Synonyms: automobile, auto, motorcar\n- Hypernym (more general): vehicle\n- Hyponyms (more specific): minivan, SUV, taxi\n- Meronyms (parts): engine, tyre, door\nUses: word sense disambiguation, information retrieval, semantic similarity, machine translation, ontology building.\nOpen Multilingual WordNet (OMW 1.4) — links 40+ languages to the same synset IDs: house / घर / casa / maison are one concept.",
      trap:"A synset is a sense, not a word. One word (bank) sits in several synsets.",
      ask:["Explain WordNet and the relations it stores", "Uses of WordNet in NLP"] }
  ];
  N["3.0.2"] = { q:"Define synonymy with examples. Are perfect synonyms common?", m:2,
      a:"Synonymy — two words have the same meaning in some or all contexts.\nExamples: couch / sofa, big / large, automobile / car, vomit / throw up.\nTest: two lexemes are synonyms if one can be substituted for the other in every situation.\nPerfect synonymy is rare: water / H2O mean the same but are not interchangeable everywhere.\nOpposite relation — antonymy: opposite on one feature of meaning, alike otherwise (hot / cold, up / down, short / long).",
      trap:"Synonymy holds between senses, not whole words: 'big sister' is not 'large sister'.",
      ask:["Synonymy vs antonymy with examples"] };
  N["3.0.3"] = [
    { q:"Define polysemy with an example.", m:2,
      a:"Polysemy — one lexeme has several related meanings.\nExample:\n- 'The bank was constructed in 1875 out of local red brick.' → the building\n- 'I withdrew the money from the bank.' → the financial institution\nThe relation is systematic (building ↔ organisation): the same pattern holds for school, university, supermarket.\nZeugma test for separate senses: join two uses in one sentence. 'Does Midwest serve breakfast and Philadelphia?' sounds odd, so 'serve' has two distinct senses.",
      ask:["Explain polysemy", "What is the zeugma test?"] },
    { q:"Differentiate polysemy and homonymy. What are homophones and homographs?", m:5,
      a:"<table><tr><th></th><th>Homonymy</th><th>Polysemy</th></tr><tr><td>Meanings</td><td>Unrelated</td><td>Related</td></tr><tr><td>Lexemes</td><td>Different lexemes, same form</td><td>One lexeme</td></tr><tr><td>Example</td><td>bat (stick) / bat (mammal); bank (money) / bank (river)</td><td>bank (building) / bank (institution)</td></tr></table><p><b>Homophones</b>: same pronunciation, different spelling: write / right, piece / peace.</p><p><b>Homographs</b>: same spelling, different meaning: bass (fish / guitar).</p><p><b>Why NLP cares:</b> text-to-speech (same spelling, different sound), information retrieval (same spelling, different meaning), speech recognition (to / two / too).</p>",
      trap:"Related senses → polysemy. Coincidence of form → homonymy. Say which and give the reason.",
      ask:["Homonymy vs polysemy", "Problems homonyms cause for NLP applications"] }
  ];
  N["3.0.4"] = { q:"Define hyponymy and hypernymy with examples.", m:2,
      a:"Hyponymy — one sense is more specific and denotes a subclass of the other (IS-A relation).\n- car is a hyponym of vehicle\n- dog is a hyponym of animal\n- mango is a hyponym of fruit\nHypernymy — the inverse: the more general word (superordinate).\n- vehicle is the hypernym of car\n- animal is the hypernym of dog\nChain in WordNet: rose → flower → plant.",
      trap:"Hyponym = the specific word (hypo = under). Students reverse the two more than any other pair.",
      ask:["Explain the IS-A relation between word senses"] };
  N["3.0.5"] = { q:"Define meronymy and holonymy with examples.", m:2,
      a:"Meronymy — the part-of relation. X is a meronym of Y if X denotes a part of Y.\n- wheel is a meronym of car\n- engine, tyre, door are meronyms of car\nHolonymy — the inverse: the whole. car is the holonym of wheel.\nProperties: asymmetric and transitive.",
      trap:"Hyponymy is IS-A (car is a vehicle). Meronymy is PART-OF (wheel is part of a car).",
      ask:["Meronymy vs hyponymy", "Identify the relation: finger / hand, rose / flower"] };
  N["3.0.6"] = { q:"What is semantic ambiguity? Give its types with examples.", m:3,
      a:"Semantic ambiguity — a word or sentence has more than one meaning, and only the context tells which one is meant.\n'bass': music or fish?\nSources:\n- Polysemy: 'a drink in the bar' / 'study for the bar' / 'a chocolate bar'\n- Homonymy: 'May I come in?' / 'Let's meet again in May'\n- POS ambiguity: 'Joe won the first round' (noun) / 'Joe has a round toy' (adjective)\nResolving it is the job of Word Sense Disambiguation (WSD).",
      ask:["Explain sense ambiguity with examples", "Identify the type of ambiguity in a given sentence"] };

  N["3.1.0"] = [
    { q:"What is Word Sense Disambiguation (WSD)?", m:2,
      a:"WSD — the task of deciding which sense of an ambiguous word is used in a particular sentence, by looking at its context.\nExample: 'He sat on the bank of the river' → bank = land beside water, not the financial institution.\nNeeded for: machine translation, information retrieval, question answering.\nFamilies of algorithms: knowledge-based (overlap), supervised, semi-supervised, unsupervised, hybrid.",
      ask:["Define WSD and state its applications"] },
    { q:"Explain Lesk's algorithm for WSD.", m:5,
      a:"Lesk (1986) — knowledge-based (dictionary-based). Needs a machine-readable dictionary, no training data.\nIdea: the correct sense is the one whose gloss overlaps most with the context.\n- Sense bag: words in the gloss of one candidate sense.\n- Context bag: the context words (Simplified Lesk), or the glosses of the context words (original Lesk).\nSteps:\n1. Identify the ambiguous word.\n2. List its senses and their glosses.\n3. Collect the context words.\n4. Count the overlap between each sense bag and the context bag.\n5. Choose the sense with the highest overlap.\nLimits: depends on the wording of the dictionary; short glosses give small overlaps and ties.",
      trap:"Lesk is knowledge-based, not supervised. Count content words only: drop the, of, a, is.",
      ask:["Knowledge-based approach to WSD", "What are the sense bag and the context bag?"] },
    { q:"Apply Lesk's algorithm: 'The room was dark, so she switched on the light to read her book.'", m:5,
      a:"<ol><li><b>Ambiguous word:</b> light</li><li><b>Senses and glosses:</b><br>Sense 1 (illumination): source of brightness that makes things visible.<br>Sense 2 (not heavy): having little weight; easy to lift or carry.</li><li><b>Context words:</b> she, room, dark, switched, read, book</li><li><b>Overlap:</b></li></ol><table><tr><th>Sense</th><th>Gloss words</th><th>Overlap with context</th><th>Count</th></tr><tr><td>Illumination</td><td>brightness, visible, room, dark, source</td><td>room, dark</td><td>2</td></tr><tr><td>Not heavy</td><td>weight, carry, lift, heavy, easy</td><td>none</td><td>0</td></tr></table><p><b>Answer:</b> Sense 1 has the highest overlap, so light = illumination.</p>",
      trap:"Write the table. The marks are for the overlap count of every sense, then the choice.",
      ask:["Disambiguate 'bank' in 'He sat on the bank of the river' using Lesk"] }
  ];
  N["3.1.1"] = { q:"How is Naïve Bayes used for WSD (supervised approach)?", m:5,
      a:"Supervised WSD — train a classifier on a sense-tagged corpus; the features are the context words.\nDecision rule: choose the sense s that maximises\nP(s) × P(f1 | s) × P(f2 | s) × … × P(fn | s)\nNaïve assumption: the features are independent given the sense.\nTraining (by counting):\n- P(s) = count(s) ÷ count of all instances of the word\n- P(f | s) = count(f with sense s) ÷ count of all features with sense s\n- Add-one smoothing: (count + 1) ÷ (total + |V|), so one unseen word does not make the product zero.\nSteps in a numerical:\n1. Compute the prior of each sense.\n2. Compute P(word | sense) for each context word.\n3. Multiply for each sense.\n4. Pick the larger score.",
      trap:"Smooth with |V| = vocabulary size, not the number of senses. Compute the score of every sense before choosing.",
      ask:["Supervised approach to WSD", "Given a sense-tagged corpus, find the sense of a word using Naïve Bayes"] };
  N["3.1.2"] = { q:"Explain the unsupervised (clustering-based) approach to WSD.", m:5,
      a:"Unsupervised WSD — senses are not defined in advance; they are learned from the data. Also called word sense induction.\nMethod: cluster the contexts in which the word occurs. Each cluster = one sense.\nHyperLex (the deck's algorithm):\n1. Build a co-occurrence graph: nodes = words that occur with the target, edges = two words co-occur.\n2. Find the root hubs: the highest-degree nodes. Each hub is one sense.\n3. Each hub has a dense cluster of words around it.\n4. A new use of the word is given the hub nearest to its context words.\nAdvantage — needs no dictionary and no labelled data.\nDisadvantage — the clusters have no names and may not match dictionary senses; hard to evaluate.",
      trap:"Yarowsky bootstrapping is semi-supervised (it needs seed labels). Do not give it as the unsupervised method.",
      ask:["What is word sense induction?", "Explain HyperLex"] };
  N["3.2.0"] = [
    { q:"Classify WSD approaches: classical, machine-learning-enhanced, and deep-learning-based (contextual).", m:5,
      a:"<table><tr><th>Generation</th><th>Needs</th><th>Methods</th></tr><tr><td><b>Classical</b> (knowledge-based)</td><td>Dictionary / WordNet</td><td>Lesk's algorithm, most-frequent-sense baseline</td></tr><tr><td><b>Intermediate</b> (machine learning)</td><td>Corpus + hand-chosen features</td><td>Supervised: Naïve Bayes, decision list. Semi-supervised: Yarowsky. Unsupervised: clustering, HyperLex</td></tr><tr><td><b>Deep learning</b> (contextual)</td><td>Large pre-trained model</td><td>BiLSTM, BERT: the vector of the word depends on its sentence; pick the nearest sense</td></tr></table><p><b>Trend:</b> accuracy and data needs rise from top to bottom; interpretability falls.</p>",
      trap:"Naïve Bayes is not classical: it needs a sense-tagged corpus.",
      ask:["Compare knowledge-based, supervised and unsupervised WSD", "How does BERT help WSD?"] },
    { q:"Explain the Yarowsky (semi-supervised) algorithm for WSD.", m:5,
      a:"Yarowsky (1995) — bootstrapping. Needs only a small seed set of labelled examples per sense and a large unlabelled corpus.\nSteps:\n1. Train a decision-list classifier on the seed set.\n2. Use it to label the unlabelled corpus.\n3. Keep only the confident labels; add them to the training set.\n4. Retrain and repeat: the labelled set grows, the unlabelled set shrinks.\n5. Stop when the training error is below a threshold or no new example is covered.\nTwo heuristics:\n- One sense per discourse: a word keeps its meaning within one document.\n- One sense per collocation: a word keeps its meaning in the same collocation.\nAdvantage — close to supervised accuracy with far less manual labelling.\nDisadvantage — the result depends on the initial seeds.",
      ask:["Semi-supervised WSD", "State the two heuristics of Yarowsky's algorithm"] }
  ];

  N["3.3.0"] = [
    { q:"What is vectorization? Explain one-hot encoding.", m:3,
      a:"Vectorization — representing text as numeric vectors so that a model can compute with it.\nOne-hot encoding — each word is a vector of length |V| (number of unique words) with a single 1 at its own position.\nExample, vocabulary [cat, dog, sat]:\n- cat = [1, 0, 0]\n- dog = [0, 1, 0]\n- sat = [0, 0, 1]\nLimits: sparse and high-dimensional; every pair of words is equally far apart, so no meaning is captured.",
      trap:"Vector length = number of unique words. A repeated word does not add a position.",
      ask:["One-hot encode the words of a given sentence"] },
    { q:"Explain count vectors (Bag of Words) and TF-IDF.", m:5,
      a:"Count vector (Bag of Words) — a document becomes a vector of word counts over the vocabulary.\nSteps:\n1. Tokenise.\n2. Build the vocabulary of unique words in a fixed order.\n3. Count each word in each document; 0 if absent.\nVocabulary [cat, dog, sat], 'dog sat sat' → [0, 1, 2].\nTF-IDF — reweights counts so that words common to every document count less.\n- TF(t, d) = count of t in d ÷ number of words in d\n- IDF(t) = log(N ÷ number of documents containing t)\n- TF-IDF = TF × IDF\nLimits of both: word order is lost; 'car' and 'automobile' are unrelated dimensions.",
      ask:["Compare one-hot, Bag of Words and TF-IDF", "Compute the count vectors of two sentences"] },
    { q:"What is cosine similarity? Why is it used for text vectors?", m:3,
      a:"Cosine similarity — measures how close two text vectors are, by the angle between them.\ncos(A, B) = (A · B) ÷ (‖A‖ × ‖B‖)\n- A · B = sum of Ai × Bi\n- ‖A‖ = square root of the sum of Ai²\nRange for count / TF-IDF vectors: 0 (nothing shared) to 1 (identical).\nWhy: it compares direction, not length, so a long and a short document on the same topic still look alike.\nUse in WSD: compare the sentence vector with each gloss vector; pick the sense with the highest cosine.",
      trap:"Square-root the norms. ‖A‖ is not the plain sum of squares.",
      ask:["Find the cosine similarity of two given vectors"] }
  ];
  N["3.3.1"] = [
    { q:"What is distributional semantics? What is a word embedding?", m:2,
      a:"Distributional hypothesis — words that occur in similar contexts have similar meanings. 'You shall know a word by the company it keeps.'\nWord embedding — a dense, low-dimensional vector for a word (typically 50 to 300 numbers), learned from a corpus so that similar words lie close together.\nUnlike one-hot vectors, embeddings preserve semantic relations: king − man + woman ≈ queen.",
      ask:["Sparse vs dense word vectors"] },
    { q:"Explain Word2Vec. Differentiate CBOW and Skip-gram.", m:5,
      a:"<p><b>Word2Vec</b> (Mikolov, 2013): a shallow neural network trained on a sliding window of text. The learned weights are the word vectors.</p><table><tr><th></th><th>CBOW</th><th>Skip-gram</th></tr><tr><td>Predicts</td><td>Centre word from context words</td><td>Context words from centre word</td></tr><tr><td>Speed</td><td>Faster</td><td>Slower</td></tr><tr><td>Good for</td><td>Frequent words</td><td>Rare words, small data</td></tr></table><p><b>Example</b>, window 1, 'the cat sat': CBOW: (the, sat) → cat. Skip-gram: cat → the, cat → sat.</p><p><b>Steps in the deck:</b> tokenise → count frequencies → keep the most frequent words → build the word-context matrix → train.</p>",
      trap:"CBOW: context → word. Skip-gram: word → context. The direction is the whole question.",
      ask:["Generate Skip-gram training pairs for a sentence with window size 2"] },
    { q:"What is GloVe? How does it differ from Word2Vec?", m:3,
      a:"GloVe (Global Vectors, Pennington 2014) — builds a word-word co-occurrence matrix over the whole corpus, then learns vectors whose dot product approximates the log of the co-occurrence count.\n<table><tr><th></th><th>Word2Vec</th><th>GloVe</th></tr><tr><td>Uses</td><td>Local context windows</td><td>Global co-occurrence counts</td></tr><tr><td>Type</td><td>Predictive</td><td>Count-based (matrix factorisation)</td></tr></table><p><b>Common limit:</b> both give one fixed vector per word, so 'bank' has the same vector in 'river bank' and 'bank loan'.</p>",
      ask:["Compare Word2Vec and GloVe"] }
  ];
  N["3.3.2"] = [
    { q:"What are subword embeddings? Explain FastText.", m:3,
      a:"FastText — represents a word as a bag of character n-grams and adds their vectors.\nExample, 3-grams of 'where': <wh, whe, her, ere, re>\nAdvantages:\n- Gives a vector to words never seen in training (out-of-vocabulary).\n- Works well for morphologically rich languages (e.g. Indian languages), since related word forms share n-grams.\nStill a static embedding: one vector per word.",
      trap:"FastText solves unseen words, not polysemy.",
      ask:["How does FastText handle out-of-vocabulary words?"] },
    { q:"What are contextual embeddings? Explain BERT. Compare static and contextual embeddings.", m:5,
      a:"<p><b>BERT</b>: a Transformer encoder that reads the whole sentence in both directions. The vector of each token depends on the words around it.</p><p>'bank' in 'river bank' and in 'bank loan' gets two different vectors.</p><p>Pre-trained with masked language modelling (predict a hidden word) and next sentence prediction.</p><table><tr><th></th><th>Static (Word2Vec, GloVe, FastText)</th><th>Contextual (BERT)</th></tr><tr><td>Vectors</td><td>One per word</td><td>One per occurrence</td></tr><tr><td>Polysemy</td><td>Not handled</td><td>Handled</td></tr><tr><td>Cost</td><td>Small, fast</td><td>Large, slow</td></tr></table>",
      trap:"BERT is an encoder and bidirectional. GPT is a decoder and left-to-right.",
      ask:["Static vs contextual embeddings", "Why is BERT better for WSD?"] }
  ];

  /* ------------------------------------------------ Module 1 */
  N["0.0.0"] = [
    { q:"What is NLP? List the stages of the NLP pipeline.", m:5,
      a:"NLP — the branch of AI that enables machines to read, understand and generate human language.\n- NLU (understanding): text → meaning.\n- NLG (generation): meaning → text.\nPipeline:\n1. Text preprocessing: what are the basic units?\n2. Morphological: what is the base form?\n3. Syntactic: how do the words relate?\n4. Semantic: what does it mean?\n5. Pragmatic: what was intended?\n6. Application: what do we do with it?\nEach stage uses the output of the one before, so errors cascade.",
      ask:["NLU vs NLG", "Trace a given sentence through all stages"] },
    { q:"Explain the text preprocessing stage.", m:3,
      a:"Text preprocessing — turns raw text into clean basic units.\nTasks: sentence segmentation, tokenization, normalization (lowercasing), stop-word removal.\nExample: 'The banks near the river are closed today.'\n→ [The, banks, near, the, river, are, closed, today, .]\nTools: regular expressions, tokenizers.",
      ask:["Why is preprocessing needed?"] }
  ];
  N["0.0.1"] = { q:"Explain the morphological stage of NLP.", m:2,
      a:"Morphological analysis — studies the internal structure of words: breaks a word into morphemes (stem + affixes) and finds its base form.\nExample: banks → bank + s (plural noun); closed → close + d (past participle).\nTechniques: stemming (Porter), lemmatization, finite-state transducers.",
      ask:["What is a morpheme?"] };
  N["0.0.2"] = { q:"Explain the syntactic stage of NLP.", m:2,
      a:"Syntactic analysis (parsing) — checks grammar and finds how the words are arranged and related; produces a parse tree.\nExample: 'The banks near the river are closed'\n- Subject: The banks\n- Modifier: near the river\n- Verb: are closed\nA sentence can be grammatical and still meaningless: 'Colourless green ideas sleep furiously.'\nTechniques: POS tagging, CFG, parsers.",
      ask:["What does a parser output?"] };
  N["0.0.3"] = { q:"Explain the semantic stage of NLP.", m:2,
      a:"Semantic analysis — finds the literal meaning of words, phrases and sentences.\nExample: 'banks' = financial institution or river bank? The word is ambiguous until the context ('river') is used.\nRepresentations: predicate calculus, semantic nets, frames, conceptual dependency.\nTechniques: word sense disambiguation, semantic role labelling, embeddings.",
      ask:["Syntax vs semantics"] };
  N["0.0.4"] = { q:"Explain the pragmatic stage of NLP. What is discourse integration?", m:3,
      a:"Pragmatic analysis — finds the intended meaning, using context and world knowledge.\nExample: 'Can you pass the salt?' is a request, not a question about ability.\nExample: 'The city police refused the demonstrators a permit because they feared violence.' 'they' = police. Change it to 'advocated revolution' and 'they' = demonstrators. Only world knowledge decides.\nDiscourse integration — the meaning of a sentence depends on the sentences before it. 'He wanted that': 'that' needs the earlier context.",
      ask:["Semantics vs pragmatics"] };
  N["0.0.5"] = { q:"What is the application-level stage of NLP?", m:2,
      a:"Application level — the final stage: the analysed text is used for a task.\nExamples:\n- Sentiment analysis: 'closed' → negative\n- Named entity recognition: 'river' → location\n- Machine translation, question answering, summarization, chatbots\nDifferent applications need different stages: machine translation uses all six; autocomplete needs mainly morphology and an N-gram model.",
      ask:["Which pipeline stages does the given application need?"] };
  N["0.1.0"] = [
    { q:"Explain the types of ambiguity in NLP with examples.", m:5,
      a:"<table><tr><th>Type</th><th>Meaning</th><th>Example</th></tr><tr><td>Lexical</td><td>One word, many meanings</td><td>'I went to the bank.'</td></tr><tr><td>Syntactic (structural)</td><td>One sentence, many parse trees</td><td>'I saw the man with the telescope.'</td></tr><tr><td>Semantic</td><td>Many readings even after parsing</td><td>'Every student solved a problem.'</td></tr><tr><td>Pragmatic</td><td>Literal ≠ intended meaning</td><td>'Can you pass the salt?'</td></tr><tr><td>Anaphoric</td><td>A pronoun has many possible referents</td><td>'Margaret invited Susan, and she gave her lunch.'</td></tr></table>",
      trap:"Name the type and say what the two readings are. The label alone gets half the marks.",
      ask:["Identify the type of ambiguity in the given sentences"] },
    { q:"Explain structural ambiguity: scope ambiguity and PP-attachment ambiguity.", m:5,
      a:"Scope ambiguity — it is unclear how far a modifier reaches.\n'The old men and women were taken to safe locations': old (men and women), or (old men) and women?\nPP-attachment ambiguity — it is unclear which word a prepositional phrase attaches to.\n'I saw the boy with a telescope':\n- attached to 'saw': I used the telescope.\n- attached to 'boy': the boy has the telescope.\nEach reading has its own parse tree.",
      ask:["Draw the two parse trees for 'I saw the boy with a telescope'"] },
    { q:"What are the challenges in NLP?", m:5,
      a:"- Ambiguity at every level: word sense, POS, PP-attachment, scope.\n- Unstructured data: most language data has no fixed format.\n- New words and idioms: neologisms such as 'Xeroxed', 'helicopter parenting'.\n- World knowledge is needed to resolve meaning that is not in the text.\n- Non-literal language: sarcasm, metaphor.\n- Word and sentence boundaries: 'Dr.', '2.3%', 'New York'.\n- Errors cascade down the pipeline.",
      ask:["Why is NLP hard?"] },
    { q:"What special challenges arise for NLP in Indian languages?", m:5,
      a:"- Morphological richness: Marathi जातो (masculine) vs जाते (feminine): the verb carries gender.\n- Free word order: 'राम ने सीता को देखा' = 'सीता को राम ने देखा'.\n- Code-mixing: 'Main kal office gaya and will submit the report.'\n- Script diversity: 22 scheduled languages, 12+ scripts.\n- Low resources: very little annotated data compared with English.\n- Sandhi and compounding: words are joined in writing and must be segmented.",
      ask:["Compare ambiguity and challenges in English and Indian languages"] }
  ];
  N["0.2.0"] = { q:"List the applications of NLP.", m:5,
      a:"<table><tr><th>Application</th><th>Stages needed</th><th>Example</th></tr><tr><td>Machine translation</td><td>All six</td><td>Google Translate</td></tr><tr><td>Sentiment analysis</td><td>Preprocessing + semantic</td><td>Amazon reviews</td></tr><tr><td>Named entity recognition</td><td>Morphological + syntactic + semantic</td><td>News tagging</td></tr><tr><td>Question answering</td><td>All + world knowledge</td><td>ChatGPT</td></tr><tr><td>Text summarization</td><td>Semantic + pragmatic</td><td>Quillbot</td></tr><tr><td>Autocomplete</td><td>Morphological + N-gram model</td><td>Gmail Smart Compose</td></tr></table><p>Others: spam filtering, chatbots, speech recognition, spelling correction.</p>",
      ask:["Explain any two applications of NLP in detail"] };
  N["0.3.0"] = { q:"What is NLTK?", m:2,
      a:"NLTK (Natural Language Toolkit) — a Python library made for teaching and research.\n- Every step is explicit: tokenize, stem, tag, parse.\n- Comes with 50+ corpora and lexical resources (WordNet).\n- Pros: free, transparent, good for learning the internals.\n- Cons: slow and verbose; rarely used in production.\nBest for: learning and research.",
      ask:["Why use NLTK when better models exist?"] };
  N["0.3.1"] = { q:"What is spaCy?", m:2,
      a:"spaCy — an industrial-strength Python NLP library.\n- A ready pipeline: tokenizer → tagger → parser → NER.\n- Pros: fast, accurate, clean API, 65+ languages.\n- Cons: less transparent than NLTK; fewer classical algorithms.\nBest for: production systems.",
      ask:["NLTK vs spaCy"] };
  N["0.3.2"] = { q:"What is Hugging Face? Compare NLTK, spaCy and Hugging Face.", m:5,
      a:"<p><b>Hugging Face Transformers:</b> a library and model hub of pre-trained transformer models (BERT, GPT, T5); 500,000+ models that can be fine-tuned.</p><table><tr><th></th><th>NLTK</th><th>spaCy</th><th>Hugging Face</th></tr><tr><td>Aim</td><td>Education</td><td>Production</td><td>State of the art</td></tr><tr><td>Speed</td><td>Slow</td><td>Fast</td><td>Heavy; needs a GPU</td></tr><tr><td>Strength</td><td>Transparent, many corpora</td><td>Clean pipeline</td><td>Best accuracy, pre-trained models</td></tr><tr><td>Best for</td><td>Learning, research</td><td>Industry pipelines</td><td>Deep-learning tasks</td></tr></table>",
      ask:["Which tool would you choose for the given task?"] };

  /* ------------------------------------------------ Module 2 */
  N["1.0.0"] = [
    { q:"What is lexical analysis? Distinguish lexeme, token and type.", m:3,
      a:"Lexical analysis — the first phase: scans text as a stream of characters and splits it into paragraphs, sentences and words (lexemes).\n- Lexeme: the dictionary unit of meaning. RUN covers run, ran, running.\n- Token: one occurrence of a word in running text.\n- Type: a distinct word form.\n'the cat sat on the mat': 6 tokens, 5 types ('the' repeats).",
      trap:"Tokens count repeats. Types do not.",
      ask:["Count the tokens and types in the given sentence"] },
    { q:"How are words represented for processing?", m:2,
      a:"Word representation — turning a word into a form a program can compare and compute with.\n- As a string / dictionary entry: word + POS + morphological and semantic properties. 'dog': noun, plural in -s, animate.\n- As a number: an index in the vocabulary.\n- As a vector: one-hot, Bag of Words, TF-IDF (section 2.8), embeddings (Module 4).",
      ask:["What properties does lexical analysis extract for a word?"] }
  ];
  N["1.1.0"] = [
    { q:"State Zipf's law. What does it imply for NLP?", m:5,
      a:"Zipf's law — the frequency of a word is inversely proportional to its rank in the frequency table.\nf ∝ 1 ÷ r, so f × r = k (constant)\nExample: rank 1 'the' ≈ 7% of all words, rank 2 'of' ≈ 3.5%, rank 3 'and' ≈ 2.8%.\nIf the rank-1 word occurs 6000 times, the rank-3 word occurs about 6000 ÷ 3 = 2000 times.\nImplications:\n- A few words dominate any text: the reason stop-word removal works.\n- Most words are rare: the cause of data sparsity.\nZipf's other law: the number of meanings m ∝ √f. Frequent words have more meanings.",
      ask:["Given the frequency of the top word, estimate the frequency of the word at rank r"] },
    { q:"State Heaps' law.", m:3,
      a:"Heaps' law — the vocabulary grows as a power of the corpus size.\n|V| = K × N^β\n- |V|: vocabulary size (types)\n- N: number of tokens\n- K, β: constants; β is about 0.4 to 0.6\nExample: K = 10, β = 0.5, N = 10,000 → |V| = 10 × 100 = 1000.\nImplication: the vocabulary never stops growing, so unseen words will always appear (open-vocabulary problem).",
      ask:["Compute the vocabulary size for a given N, K and β"] },
    { q:"Define Type-Token Ratio (TTR).", m:3,
      a:"TTR = number of types ÷ number of tokens\nMeasures lexical diversity.\nExample: 'the cat sat on the mat': types = 5, tokens = 6, TTR = 5 ÷ 6 = 0.83.\n- Above 0.70: high diversity\n- 0.50 to 0.70: moderate\n- Below 0.50: low diversity, many repeats\nLimit: TTR falls as the text gets longer, so compare only texts of similar length.",
      ask:["Calculate the TTR of the given passage and interpret it"] }
  ];
  N["1.2.0"] = { q:"What is sentence segmentation? Why is it difficult?", m:3,
      a:"Sentence segmentation — deciding where each sentence begins and ends.\n'!' and '?' are mostly clear. The period '.' is ambiguous:\n- End of sentence\n- Abbreviation: Dr., Mr., Inc.\n- Number: 2.3%, 7.9\nSolution: a binary classifier for each '.': end of sentence or not. It can be hand-written rules, regular expressions or a machine-learning model.",
      ask:["Segment the given text into sentences"] };
  N["1.2.1"] = { q:"What is tokenization? What are its challenges?", m:5,
      a:"Tokenization — splitting text into tokens (words, numbers, punctuation).\n'I can't wait!' → [I, ca, n't, wait, !]\nChallenges:\n- Punctuation and clitics: can't, U.S.A., Ph.D.\n- Multi-word names: New York, rock 'n' roll\n- Hyphens: state-of-the-art\n- Chinese and Japanese: no spaces between words\n- Sanskrit: sandhi joins words in writing\n- URLs, hashtags, emojis\nSubword tokenization (BPE) is used by BERT and GPT to handle unseen words.",
      ask:["Tokenize the given sentence", "Word vs subword tokenization"] };
  N["1.2.2"] = { q:"What is text normalization?", m:2,
      a:"Normalization — putting text into one standard form so that variants of the same word match.\n- Case folding: 'The' → 'the'\n- Removing punctuation and extra spaces\n- Expanding contractions: can't → cannot\n- Standardising spellings and numbers: U.S.A. → USA\n- Stemming and lemmatization are also forms of normalization.\nCaution: case can matter: 'US' (country) vs 'us'.",
      ask:["Why is case folding not always safe?"] };
  N["1.2.3"] = { q:"What is stop-word removal? When should it not be used?", m:2,
      a:"Stop words — very frequent words with little content: the, is, of, and, a, in.\nStop-word removal — dropping them to shrink the vocabulary and keep the informative words.\nWhy it works: by Zipf's law a few words make up a large share of any text.\nDo not remove when the words carry meaning:\n- Sentiment: 'not good'\n- Phrase queries: 'to be or not to be'\n- Translation and question answering",
      ask:["Remove the stop words from the given sentence"] };
  N["1.2.4"] = { q:"What is stemming?", m:3,
      a:"Stemming — cutting off affixes with fixed rules to get the stem; no dictionary and no context.\n- automates, automatic, automation → automat\n- caresses → caress, ponies → poni\nFast, but the stem may not be a real word.\nErrors:\n- Over-stemming: university, universe → univers (different words merged)\n- Under-stemming: data, datum stay different\nAlgorithms: Porter, Snowball, Lancaster.",
      ask:["Over-stemming vs under-stemming"] };
  N["1.2.5"] = { q:"What is lemmatization? Differentiate stemming and lemmatization.", m:5,
      a:"<p><b>Lemmatization:</b> reducing a word to its dictionary form (lemma), using vocabulary and morphological analysis. am, are, is → be. better → good.</p><table><tr><th></th><th>Stemming</th><th>Lemmatization</th></tr><tr><td>Method</td><td>Rule-based chopping</td><td>Dictionary + morphology</td></tr><tr><td>Uses POS / context</td><td>No</td><td>Yes</td></tr><tr><td>Output</td><td>Stem, may be a non-word</td><td>A real word</td></tr><tr><td>Speed</td><td>Fast</td><td>Slower</td></tr><tr><td>Example</td><td>studies → studi</td><td>studies → study</td></tr><tr><td>Use</td><td>Search / IR</td><td>Chatbots, translation, QA</td></tr></table>",
      ask:["Give the stem and the lemma of the given words"] };
  N["1.3.0"] = [
    { q:"What is a morpheme? Distinguish free and bound morphemes.", m:3,
      a:"Morpheme — the smallest unit of a language that has meaning or grammatical function.\n- Free morpheme: can stand alone as a word: cat, boat, on.\n- Bound morpheme: occurs only attached to another: -s, -ing, un-, -ment.\nunhappiness = un- (bound) + happy (free) + -ness (bound)\nAffixes: prefix (un-happy), suffix (talk-ing), infix (inside the stem), circumfix (around it: German ge-sag-t).",
      ask:["Split the given words into morphemes"] },
    { q:"Differentiate inflectional and derivational morphology.", m:5,
      a:"<table><tr><th></th><th>Inflectional</th><th>Derivational</th></tr><tr><td>Does</td><td>Adds grammatical information: number, tense, case</td><td>Makes a new word</td></tr><tr><td>Word class</td><td>Never changes</td><td>Often changes</td></tr><tr><td>Meaning</td><td>Same</td><td>Changes</td></tr><tr><td>Examples</td><td>cat → cats, walk → walked</td><td>happy → happiness, teach → teacher</td></tr><tr><td>Productivity</td><td>Applies to almost every word of the class</td><td>Applies to some words only</td></tr></table><p><b>English has 8 inflectional affixes:</b> -s (plural), -'s (possessive), -s (3rd person), -ed, -ing, -en, -er, -est.</p>",
      trap:"-er in 'taller' is inflectional. -er in 'teacher' is derivational.",
      ask:["Classify the affixes in the given words as inflectional or derivational"] }
  ];
  N["1.4.0"] = { q:"What are regular expressions? Give the basic operators.", m:5,
      a:"<p><b>Regular expression:</b> a formula that describes a set of strings (a pattern). Used for searching, tokenization and text cleaning.</p><table><tr><th>Pattern</th><th>Matches</th><th>Example</th></tr><tr><td>[wW]</td><td>Any one character in the set</td><td>[wW]oodchuck</td></tr><tr><td>[a-z], [0-9]</td><td>A range</td><td>[0-9] a digit</td></tr><tr><td>[^a]</td><td>Not a</td><td>[^A-Z] not a capital</td></tr><tr><td>a|b</td><td>a or b</td><td>cat|dog</td></tr><tr><td>?</td><td>0 or 1 of the previous</td><td>colou?r</td></tr><tr><td>*</td><td>0 or more</td><td>ba* → b, ba, baa</td></tr><tr><td>+</td><td>1 or more</td><td>[0-9]+ a number</td></tr><tr><td>.</td><td>Any one character</td><td>beg.n → begin, begun</td></tr><tr><td>^ $</td><td>Start / end of line</td><td>^The, end$</td></tr></table><p>Every regular expression has an equivalent finite-state automaton.</p>",
      ask:["Write a regular expression for the given set of strings"] };
  N["1.4.1"] = { q:"What is a finite-state automaton (FSA)? How is it used in morphology?", m:5,
      a:"<p><b>FSA / DFA:</b> M = (Q, Σ, δ, q0, F)</p><ul><li>Q: finite set of states</li><li>Σ: input alphabet</li><li>δ: transition function Q × Σ → Q</li><li>q0: start state</li><li>F: set of final states</li></ul><p>It accepts a string if reading it from q0 ends in a final state. FSAs accept exactly the regular languages.</p><p><b>In morphology:</b> an FSA encodes morphotactics: which morphemes can follow which.</p><pre>q0 ──reg-noun──→ q1 ──plural -s──→ q2\nq0 ──irreg-pl-noun (geese)──→ q2\nq0 ──irreg-sg-noun (goose)──→ q1</pre><p>Accepts cats, foxes, geese. Rejects gooses.</p>",
      ask:["Draw an FSA for English noun inflection", "Draw a DFA for the given regular expression"] };
  N["1.4.2"] = [
    { q:"What is a finite-state transducer (FST)? How does it differ from an FSA?", m:5,
      a:"<p><b>FST:</b> a finite automaton with two tapes. Each transition has an input : output pair, so it maps one string to another.</p><table><tr><th></th><th>FSA</th><th>FST</th></tr><tr><td>Tapes</td><td>One</td><td>Two</td></tr><tr><td>Transition label</td><td>a</td><td>a : b</td></tr><tr><td>Does</td><td>Accepts or rejects a string</td><td>Translates a string</td></tr><tr><td>Defines</td><td>Regular language</td><td>Regular relation (pairs of strings)</td></tr></table><p><b>Morphological parsing:</b> lexical level cat +N +PL ↔ surface level cats.</p><p>c:c a:a t:t +N:ε +PL:s</p><p>Run one way it analyses (cats → cat +N +PL); inverted, it generates.</p>",
      ask:["What is a regular relation?", "Show the FST mapping for 'foxes'"] },
    { q:"What does a morphological parser need?", m:3,
      a:"1. Lexicon — the list of stems and affixes, with their class (noun stem, verb stem).\n2. Morphotactics — the order in which morphemes may combine: the plural -s follows the noun.\n3. Orthographic (spelling) rules — changes when morphemes join: city + s → cities, fox + s → foxes (e-insertion).\nThe three are built as FSTs and composed.",
      ask:["Explain two-level morphology"] }
  ];
  N["1.5.0"] = [
    { q:"Explain the Porter stemmer: the measure m and the form of its rules.", m:5,
      a:"Porter stemmer (1980) — strips suffixes in a fixed sequence of steps.\nEvery word has the form [C](VC)^m[V], where C = a run of consonants, V = a run of vowels.\nm = the measure = the number of VC pairs.\n- m = 0: tree, by\n- m = 1: trouble, oats\n- m = 2: troubles, private\nRule form: (condition) S1 → S2\nExample: (m > 0) EED → EE: agreed → agree, but feed stays feed (m = 0 for 'f').\nConditions: *v* = the stem contains a vowel; *d = ends in a double consonant.",
      ask:["Find the measure m of the given words"] },
    { q:"Apply Porter step 1a and 1b: caresses, ponies, cats, plastered, motoring, sing.", m:5,
      a:"<table><tr><th>Rule</th><th>Example</th></tr><tr><td>SSES → SS</td><td>caresses → caress</td></tr><tr><td>IES → I</td><td>ponies → poni</td></tr><tr><td>SS → SS</td><td>caress → caress</td></tr><tr><td>S → (delete)</td><td>cats → cat</td></tr><tr><td>(*v*) ED → (delete)</td><td>plastered → plaster; bled → bled</td></tr><tr><td>(*v*) ING → (delete)</td><td>motoring → motor; sing → sing</td></tr></table><p>After ED / ING is removed: AT → ATE (conflated → conflate), BL → BLE (troubled → trouble), IZ → IZE (sized → size).</p>",
      trap:"'sing' is not stemmed: the part before ING ('s') has no vowel.",
      ask:["Stem the given words using the Porter algorithm"] },
    { q:"What is the Snowball stemmer? How does it differ from Porter?", m:3,
      a:"Snowball (Porter2) — an improved stemmer by Martin Porter (about 2001), and a small language for writing stemmers.\n- Fixes known errors of the 1980 Porter algorithm.\n- Supports 20+ languages, not only English.\n- Uses regions R1 and R2 instead of the measure m.\nR1 = the part of the word after the first non-vowel that follows a vowel. R2 = the same rule applied inside R1.\nSlightly more accurate than Porter.",
      ask:["Porter vs Snowball"] }
  ];
  N["1.5.1"] = { q:"Explain dictionary-based and rule-based lemmatization.", m:5,
      a:"<table><tr><th></th><th>Dictionary-based</th><th>Rule-based</th></tr><tr><td>Method</td><td>Looks the word up in a lexicon (e.g. WordNet)</td><td>Applies morphological rules, guided by the POS tag</td></tr><tr><td>Example</td><td>went → go, better → good, mice → mouse</td><td>-ies → -y: studies → study; -ing → drop: walking → walk</td></tr><tr><td>Strength</td><td>Handles irregular forms</td><td>Handles words that are not in the dictionary</td></tr><tr><td>Weakness</td><td>Fails on unknown words</td><td>Fails on irregular forms</td></tr></table><p>Real lemmatizers combine both. The POS tag matters: 'saw' → see (verb) or saw (noun).</p>",
      ask:["Compare Porter, Snowball and lemmatization"] };
  N["1.6.0"] = { q:"What is a statistical language model? State the chain rule and the Markov assumption.", m:5,
      a:"Language model — assigns a probability to a sentence, or to the next word.\nChain rule:\nP(w1 … wn) = P(w1) × P(w2 | w1) × P(w3 | w1 w2) × … × P(wn | w1 … wn−1)\nProblem: long histories are almost never seen in the corpus.\nMarkov assumption: a word depends only on the previous N − 1 words.\n- Unigram: P(wi)\n- Bigram: P(wi | wi−1)\n- Trigram: P(wi | wi−2 wi−1)\nUses: speech recognition, spelling correction, machine translation, autocomplete.",
      ask:["Why is the Markov assumption needed?"] };
  N["1.7.0"] = { q:"What is a unigram model?", m:2,
      a:"Unigram model — every word is independent of the others.\nP(w1 … wn) ≈ P(w1) × P(w2) × … × P(wn)\nP(w) = count(w) ÷ N, where N = total tokens.\nExample: 'the' occurs 50 times in 1000 tokens → P(the) = 0.05.\nWeakness: ignores word order: 'cat the sat' gets the same probability as 'the cat sat'.",
      ask:["Compute the unigram probability of a sentence"] };
  N["1.7.1"] = { q:"Bigram model: for the corpus <s> I am Sam </s>, <s> Sam I am </s>, <s> I do not like green eggs and ham </s>, find P(<s> I am Sam </s>).", m:5,
      a:"Bigram (MLE): P(wi | wi−1) = count(wi−1 wi) ÷ count(wi−1)\n1. P(I | <s>) = 2 ÷ 3\n2. P(am | I) = 2 ÷ 3\n3. P(Sam | am) = 1 ÷ 2\n4. P(</s> | Sam) = 1 ÷ 2\nP(sentence) = 2/3 × 2/3 × 1/2 × 1/2 = 4/36 = 0.111",
      trap:"Include the <s> and </s> bigrams. Divide by the count of the previous word, not by the total tokens.",
      ask:["Build the bigram count and probability table for the given corpus", "Predict the next word"] };
  N["1.7.2"] = { q:"What is a trigram model?", m:2,
      a:"Trigram model — a word depends on the previous two words.\nP(wi | wi−2 wi−1) = count(wi−2 wi−1 wi) ÷ count(wi−2 wi−1)\nExample: count('I am Sam') = 1, count('I am') = 2 → P(Sam | I am) = 0.5\nHigher N: more context and better predictions, but many more unseen N-grams (sparsity).",
      ask:["Unigram vs bigram vs trigram"] };
  N["1.7.3"] = { q:"How are N-gram models evaluated?", m:3,
      a:"- Extrinsic evaluation: put the model in a real task (speech recognition, translation) and measure the task's accuracy. Reliable but slow.\n- Intrinsic evaluation: measure the model by itself, with perplexity on a test set. Fast.\nData split: training set (learn the counts), development set (tune), test set (unseen; report the result).\nA better model gives the test set a higher probability, i.e. a lower perplexity.\nNever test on the training data.",
      ask:["Intrinsic vs extrinsic evaluation"] };
  N["1.8.0"] = { q:"Explain Laplace (add-one) smoothing with an example.", m:5,
      a:"Why smoothing: an unseen N-gram gets probability 0, which makes the whole sentence probability 0.\nLaplace: add 1 to every count.\n- Unigram: P(w) = (c(w) + 1) ÷ (N + V)\n- Bigram: P(wi | wi−1) = (c(wi−1 wi) + 1) ÷ (c(wi−1) + V)\nV = vocabulary size (number of types).\nExample with c(I am) = 2, c(I) = 3, V = 10:\n- P(am | I) = (2 + 1) ÷ (3 + 10) = 3/13 = 0.23 (was 0.67)\n- Unseen: P(Sam | I) = (0 + 1) ÷ 13 = 0.077 (was 0)\nWeakness: moves too much probability from seen to unseen events.",
      trap:"Add V to the denominator, not 1.",
      ask:["Recompute the bigram table with add-one smoothing"] };
  N["1.8.1"] = { q:"Explain Good-Turing smoothing with an example.", m:5,
      a:"Idea — use the count of things seen once to estimate the things never seen.\nNc = number of N-grams that occur exactly c times.\n- P(unseen) = N1 ÷ N\n- Adjusted count: c* = (c + 1) × N(c+1) ÷ Nc\n- P = c* ÷ N\nExample: 18 fish caught: 10 carp, 3 perch, 2 whitefish, 1 trout, 1 salmon, 1 eel.\nN1 = 3, N2 = 1, N = 18\n1. P(new species) = N1 ÷ N = 3 ÷ 18 = 0.167\n2. Trout (c = 1): c* = 2 × N2 ÷ N1 = 2 × 1 ÷ 3 = 0.67\n3. P(trout) = 0.67 ÷ 18 = 0.037 (was 1/18 = 0.056)",
      ask:["Laplace vs Good-Turing"] };
  N["1.9.0"] = { q:"Define perplexity. Compute it for a 3-word sentence with P(W) = 1/64.", m:5,
      a:"Perplexity — the inverse probability of the test set, normalised by the number of words.\nPP(W) = P(w1 … wN)^(−1/N) = N-th root of (1 ÷ P(W))\nLower perplexity = better model.\nIt is the weighted average branching factor: the number of equally likely next words.\nExample:\n1. P(W) = 1/64, N = 3\n2. PP = (64)^(1/3) = 4\nCheck: random digits 0 to 9, each with P = 1/10 → PP = 10.",
      trap:"Take the N-th root, where N = the number of words (count </s>, not <s>).",
      ask:["Compute the perplexity of the given sentence under a bigram model"] };
  N["1.10.0"] = [
    { q:"Explain the Bag of Words model with an example.", m:3,
      a:"Bag of Words (BoW) — a document is a vector of word counts over the vocabulary; order and grammar are ignored.\nSteps: tokenise → build the vocabulary → count.\nD1: 'the cat sat'. D2: 'the cat sat on the mat'.\nVocabulary: [cat, mat, on, sat, the]\n- D1 = [1, 0, 0, 1, 1]\n- D2 = [1, 1, 1, 1, 2]\nLimits: no word order ('dog bites man' = 'man bites dog'), sparse vectors, common words dominate.",
      ask:["Construct the BoW vectors for the given documents"] },
    { q:"Explain TF-IDF with an example.", m:5,
      a:"TF-IDF — weights a word by how often it occurs in a document and how rare it is across documents.\n- TF(t, d) = count of t in d ÷ total words in d\n- IDF(t) = log10(N ÷ df(t)), N = number of documents, df = documents containing t\n- TF-IDF = TF × IDF\nExample: 'cat' occurs 3 times in a 100-word document; 10 of 1000 documents contain 'cat'.\n1. TF = 3 ÷ 100 = 0.03\n2. IDF = log10(1000 ÷ 10) = 2\n3. TF-IDF = 0.03 × 2 = 0.06\nA word in every document has IDF = log(1) = 0.\nAdvantage over BoW: common words are down-weighted.",
      trap:"Use the TF definition the question gives (raw count or count ÷ length). State which one you used.",
      ask:["Compute the TF-IDF matrix for the given documents", "BoW vs TF-IDF"] }
  ];

  /* ------------------------------------------------ Module 3 */
  N["2.0.0"] = [
    { q:"What is POS tagging? Why is it a disambiguation task?", m:3,
      a:"POS tagging — assigning a part-of-speech tag (noun, verb, adjective, …) to each word of a sentence.\nTagsets: Penn Treebank (45 tags), Brown (87 tags).\n- Open classes: noun, verb, adjective, adverb (new words are added).\n- Closed classes: prepositions, determiners, pronouns, conjunctions, auxiliaries.\nDisambiguation: many words have more than one tag; the tagger picks the right one for this context.\n'They refuse to permit us to obtain the refuse permit': refuse and permit are each a verb once and a noun once.\n'book' in 'Book that flight' (verb) vs 'Read the book' (noun).",
      ask:["Tag the given sentence with POS tags", "Open vs closed class words"] },
    { q:"Explain the stochastic approach to POS tagging. How does it differ from rule-based tagging?", m:5,
      a:"<table><tr><th></th><th>Rule-based</th><th>Stochastic</th></tr><tr><td>Uses</td><td>Hand-written rules + dictionary</td><td>Probabilities learned from a tagged corpus</td></tr><tr><td>Picks</td><td>The tag the rules allow</td><td>The most probable tag sequence</td></tr><tr><td>Example</td><td>'If the previous word is a determiner, tag as noun'</td><td>HMM tagger</td></tr><tr><td>Effort</td><td>Rules written by linguists</td><td>Needs tagged training data</td></tr></table><p><b>Stochastic idea:</b> choose the tag sequence T that maximises P(T | W).</p><ul><li>Word frequency: the most frequent tag of the word.</li><li>Tag sequence (N-gram): the tag that best follows the previous tags.</li><li>HMM combines both.</li></ul><p>Third family: transformation-based (Brill) tagging, which learns rules from data.</p>",
      ask:["Types of POS taggers"] }
  ];
  N["2.0.1"] = [
    { q:"Explain POS tagging using a Hidden Markov Model.", m:5,
      a:"HMM — the tags are hidden states; the words are observations.\nComponents:\n- Initial probabilities π: P(tag starts the sentence)\n- Transition probabilities A: P(tag i | tag i−1) = count(tag i−1, tag i) ÷ count(tag i−1)\n- Emission probabilities B: P(word | tag) = count(word tagged as tag) ÷ count(tag)\nBest tag sequence:\nT̂ = argmax P(T | W) = argmax Π P(word i | tag i) × P(tag i | tag i−1)\nTwo assumptions: a tag depends only on the previous tag; a word depends only on its own tag.\nWhy not try every sequence: 'assured to back the silver coin' has 3 × 1 × 4 × 2 × 3 × 2 = 144 tag sequences. Viterbi avoids this.",
      trap:"Emission is P(word | tag), not P(tag | word).",
      ask:["Build the transition and emission matrices from the given tagged corpus"] },
    { q:"Explain the Viterbi algorithm.", m:5,
      a:"Viterbi — dynamic programming that finds the most probable tag sequence in an HMM without listing all sequences.\nv(s, t) = probability of the best path that ends in tag s at word t.\n1. Initialisation: v(s, 1) = π(s) × P(word 1 | s)\n2. Recursion: v(s, t) = max over s′ of [ v(s′, t−1) × P(s | s′) ] × P(word t | s). Store a backpointer to the best s′.\n3. Termination: pick the tag with the highest v at the last word.\n4. Backtrace: follow the backpointers to read the tag sequence.\nComplexity: O(N² × T) for N tags and T words.",
      ask:["Why is dynamic programming needed for tagging?"] },
    { q:"Apply Viterbi to 'fish swim'. π: N 0.6, V 0.4. Transitions: N→N 0.3, N→V 0.7, V→N 0.6, V→V 0.4. Emissions: P(fish|N) 0.5, P(fish|V) 0.2, P(swim|N) 0.1, P(swim|V) 0.6.", m:10,
      a:"<p><b>Word 1: fish</b></p><ul><li>v(N) = 0.6 × 0.5 = 0.30</li><li>v(V) = 0.4 × 0.2 = 0.08</li></ul><p><b>Word 2: swim</b></p><ul><li>v(N) = max(0.30 × 0.3, 0.08 × 0.6) × 0.1 = max(0.09, 0.048) × 0.1 = 0.009, from N</li><li>v(V) = max(0.30 × 0.7, 0.08 × 0.4) × 0.6 = max(0.21, 0.032) × 0.6 = 0.126, from N</li></ul><table><tr><th></th><th>fish</th><th>swim</th></tr><tr><td>N</td><td>0.30</td><td>0.009 (← N)</td></tr><tr><td>V</td><td>0.08</td><td>0.126 (← N)</td></tr></table><p><b>Termination:</b> highest is V = 0.126. Backpointer → N.</p><p><b>Answer:</b> fish/N swim/V, probability 0.126.</p>",
      trap:"Multiply by the emission after taking the max, and write the backpointer in every cell.",
      ask:["Find the best tag sequence for the given sentence using Viterbi"] }
  ];
  N["2.0.2"] = { q:"What are the challenges in POS tagging (limitations of HMM tagging)?", m:5,
      a:"- Ambiguity: one word, several tags: back (adverb, noun, adjective, verb).\n- Unknown words: a word not seen in training has no emission probability. Fix: use morphology: capital letter → proper noun; -ed → past tense; -ly → adverb.\n- Limited context: a bigram HMM sees only the previous tag. Fix: trigram or richer models.\n- Sparse data: many tag pairs or word-tag pairs are never seen. Fix: smoothing.\n- Independence assumptions are too strong: features such as suffix or capitalisation cannot be added. Fix: MEMM, CRF.\n- Multi-word expressions, free word order and rich morphology in Indian languages.",
      ask:["How does an HMM tagger handle unknown words?"] };
  N["2.1.0"] = [
    { q:"What is a Maximum Entropy Markov Model (MEMM)? How does it differ from an HMM?", m:5,
      a:"<table><tr><th></th><th>HMM</th><th>MEMM</th></tr><tr><td>Type</td><td>Generative</td><td>Discriminative</td></tr><tr><td>Computes</td><td>P(W | T) × P(T)</td><td>P(T | W) directly</td></tr><tr><td>Per step</td><td>P(word | tag) × P(tag | previous tag)</td><td>P(tag | word, previous tag, features)</td></tr><tr><td>Arrows</td><td>Tag → word</td><td>Word → tag</td></tr><tr><td>Features</td><td>Only the word identity</td><td>Any: suffix, capitalisation, neighbouring words</td></tr></table><p><b>MaxEnt classifier:</b> P(c | x) = (1 ÷ Z) × exp(Σ w<sub>i</sub> f<sub>i</sub>). Features are weighted, summed, exponentiated and normalised by Z.</p><p>Decoding still uses Viterbi.</p><p><b>Weakness:</b> label bias: probabilities are normalised at each state, so states with few outgoing transitions are favoured.</p>",
      ask:["Generative vs discriminative models", "What feature templates does an MEMM tagger use?"] },
    { q:"What is a Conditional Random Field (CRF)? What is its advantage over MEMM?", m:5,
      a:"CRF — a discriminative model that scores the whole label sequence at once.\nP(Y | X) = (1 ÷ Z(X)) × exp( Σi Σj λj fj(y i−1, y i, X, i) )\n- fj: feature functions, e.g. f1 = 1 if the label is ADVERB and the word ends in -ly.\n- λj: learned weights.\n- Z(X): normalises over all possible label sequences.\nAdvantage: global normalisation, so no label bias problem.\nWorking with a CRF:\n1. Take a tagged corpus; for each word fill a table of features.\n2. Split into training and test data: features = X, tag = Y.\n3. Train, then test.\nUses: POS tagging, NER, chunking.",
      trap:"MEMM normalises per state. CRF normalises per sequence. That is the whole difference.",
      ask:["Compare HMM, MEMM and CRF"] }
  ];
  N["2.1.1"] = { q:"Explain BiLSTM-CRF for sequence labelling.", m:5,
      a:"From standard references; not in the class deck.\nPipeline: words → embeddings → BiLSTM → CRF layer → tags\n- Embeddings: each word becomes a vector.\n- BiLSTM: one LSTM reads left to right, another right to left; together they give each word a vector that knows its full context.\n- CRF layer: chooses the best tag sequence as a whole, using tag-to-tag transition scores.\nWhy the CRF: a BiLSTM alone tags each word independently and can output illegal sequences (I-PER after O). The CRF enforces valid sequences.\nNo hand-made features are needed.\nUses: NER, POS tagging, chunking.",
      ask:["Why add a CRF layer on top of a BiLSTM?"] };
  N["2.2.0"] = [
    { q:"Define a Context-Free Grammar (CFG) with an example.", m:5,
      a:"CFG: G = (N, Σ, R, S)\n- N: non-terminals (S, NP, VP)\n- Σ: terminals (the words)\n- R: rules A → β\n- S: start symbol\nExample:\n- S → NP VP\n- NP → Det N\n- VP → V NP\n- Det → the, N → dog | cat, V → chased\nDerivation of 'the dog chased the cat':\nS ⇒ NP VP ⇒ Det N VP ⇒ the dog VP ⇒ the dog V NP ⇒ the dog chased Det N ⇒ the dog chased the cat\nParse tree: [S [NP the dog] [VP chased [NP the cat]]]",
      ask:["Write a CFG for the given sentences and draw the parse tree"] },
    { q:"What is a Probabilistic CFG (PCFG)? Compute the probability of a parse tree.", m:5,
      a:"PCFG — a CFG in which every rule has a probability: A → β [p].\n- The probabilities of all rules with the same left side sum to 1.\n- P(A → β) = count(A → β) ÷ count(A)\n- P(tree) = product of the probabilities of all the rules used.\nWhy: a CFG gives all parses of an ambiguous sentence; a PCFG picks the most probable.\nExample: S → NP VP [1.0], NP → Det N [0.6], VP → V NP [0.7], Det → the [1.0], N → dog [0.5], N → cat [0.5], V → chased [1.0]\n'the dog chased the cat':\nP = 1.0 × (0.6 × 1.0 × 0.5) × (0.7 × 1.0 × (0.6 × 1.0 × 0.5))\n= 0.3 × 0.7 × 0.3 = 0.063",
      trap:"Multiply the rule for every node, including the lexical rules (N → dog).",
      ask:["Which of the two parse trees is more probable?"] }
  ];
  N["2.2.1"] = { q:"What is constituency? How does a grammar model syntactic structure?", m:3,
      a:"Constituent — a group of words that behaves as one unit: noun phrase (NP), verb phrase (VP), prepositional phrase (PP).\nTests for a constituent:\n- Substitution: 'the old man' can be replaced by 'he'.\n- Movement: 'On Monday, I left' / 'I left on Monday'.\nPhrase-structure rules build bigger constituents from smaller ones: S → NP VP, NP → Det Adj N.\nThe parse tree shows the structure: the root is S, the internal nodes are phrases, the leaves are words.\nRecursion: NP → NP PP lets phrases nest without limit.\nAmbiguity is explosive: each added PP multiplies the number of parses (2, 5, 14, 42, …).",
      ask:["Identify the constituents of the given sentence"] };
  N["2.3.0"] = { q:"What is parsing? Differentiate top-down and bottom-up parsing.", m:5,
      a:"<p><b>Parsing:</b> finding the parse tree(s) of a sentence according to a grammar.</p><table><tr><th></th><th>Top-down</th><th>Bottom-up</th></tr><tr><td>Starts from</td><td>Start symbol S</td><td>The input words</td></tr><tr><td>Direction</td><td>Root → leaves</td><td>Leaves → root</td></tr><tr><td>Type</td><td>Goal-directed</td><td>Data-directed</td></tr><tr><td>Weakness</td><td>Builds trees that do not match the input</td><td>Builds phrases that never lead to S</td></tr><tr><td>Examples</td><td>Predictive, Earley</td><td>Shift-reduce, CKY</td></tr></table><p><b>Challenges:</b> ambiguity, repeated sub-structure, recursion, time and space. Dynamic programming (CKY, Earley) gives O(n³).</p>",
      ask:["Parse the given sentence top-down and bottom-up"] };
  N["2.4.0"] = [
    { q:"Explain the predictive parser.", m:3,
      a:"Predictive parser — a top-down parser that needs no backtracking: it chooses the rule by looking at the next input word (lookahead).\n- Recursive-descent form: one procedure per non-terminal.\n- Table-driven form (LL(1)): a stack and a parsing table M[non-terminal, next word].\nSteps:\n1. Push S on the stack.\n2. If the top is a non-terminal, replace it using the rule in M[top, lookahead].\n3. If the top is a terminal, match it against the input and advance.\n4. Accept when the stack and the input are both empty.\nRequirements: no left recursion (A → A α); the grammar must be left-factored.",
      ask:["Why must left recursion be removed?"] },
    { q:"Explain the Earley parser and its three operations.", m:5,
      a:"Earley parser — a top-down, dynamic-programming (chart) parser. Works for any CFG; no Chomsky Normal Form needed. O(n³).\nChart entry = a dotted rule with its span: S → NP • VP [0, 2] (an NP has been found from 0 to 2; a VP is expected next).\nOperations:\n- Predictor: the dot is before a non-terminal → add the rules that expand it. From S → • NP VP add NP → • Det N.\n- Scanner: the dot is before a POS / word that matches the next input word → move the dot over it.\n- Completer: the dot is at the end of a rule → move the dot forward in every rule that was waiting for this constituent.\nSuccess: S → α • [0, n] is in the last chart.",
      trap:"Earley is top-down but fills a chart left to right, so it never repeats work.",
      ask:["Show the Earley chart for a short sentence", "Earley vs CKY"] }
  ];
  N["2.5.0"] = [
    { q:"Explain shift-reduce parsing. Parse 'the dog barks' with S → NP VP, NP → Det N, VP → V.", m:5,
      a:"<p><b>Shift-reduce:</b> a bottom-up parser with a stack.</p><ul><li><b>Shift:</b> push the next word onto the stack.</li><li><b>Reduce:</b> if the top of the stack matches the right side of a rule, replace it with the left side.</li><li><b>Accept:</b> the input is empty and the stack holds only S.</li></ul><table><tr><th>Stack</th><th>Input</th><th>Action</th></tr><tr><td></td><td>the dog barks</td><td>Shift</td></tr><tr><td>the</td><td>dog barks</td><td>Reduce Det → the</td></tr><tr><td>Det</td><td>dog barks</td><td>Shift</td></tr><tr><td>Det dog</td><td>barks</td><td>Reduce N → dog</td></tr><tr><td>Det N</td><td>barks</td><td>Reduce NP → Det N</td></tr><tr><td>NP</td><td>barks</td><td>Shift</td></tr><tr><td>NP barks</td><td></td><td>Reduce V → barks</td></tr><tr><td>NP V</td><td></td><td>Reduce VP → V</td></tr><tr><td>NP VP</td><td></td><td>Reduce S → NP VP</td></tr><tr><td>S</td><td></td><td>Accept</td></tr></table>",
      ask:["What are shift-reduce and reduce-reduce conflicts?"] },
    { q:"Explain the CKY algorithm. Parse 'the dog barks' with S → NP VP, NP → Det N, Det → the, N → dog, VP → barks.", m:5,
      a:"<p><b>CKY:</b> bottom-up dynamic programming. The grammar must be in Chomsky Normal Form: A → B C or A → a.</p><p>Cell [i, j] holds the non-terminals that derive words i+1 … j. Fill single words first, then longer spans: A goes in [i, j] if A → B C, B is in [i, k] and C is in [k, j].</p><table><tr><th></th><th>the (1)</th><th>dog (2)</th><th>barks (3)</th></tr><tr><th>0</th><td>Det</td><td>NP</td><td><b>S</b></td></tr><tr><th>1</th><td></td><td>N</td><td>—</td></tr><tr><th>2</th><td></td><td></td><td>VP</td></tr></table><ul><li>[0, 2]: Det + N → NP</li><li>[1, 3]: N + VP → nothing</li><li>[0, 3]: NP [0, 2] + VP [2, 3] → S</li></ul><p>S is in the top-right cell, so the sentence is accepted. Time O(n³).</p>",
      trap:"Convert the grammar to CNF first: remove unit productions and binarise long rules.",
      ask:["Convert the given CFG to Chomsky Normal Form", "Fill the CKY table for the given sentence"] }
  ];
  N["2.6.0"] = { q:"Differentiate dependency parsing and constituency parsing.", m:5,
      a:"<table><tr><th></th><th>Constituency</th><th>Dependency</th></tr><tr><td>Shows</td><td>How words group into phrases</td><td>Head → dependent relations between words</td></tr><tr><td>Nodes</td><td>Phrases (NP, VP) and words</td><td>Only words</td></tr><tr><td>Root</td><td>S</td><td>The main verb</td></tr><tr><td>Based on</td><td>CFG</td><td>Dependency grammar</td></tr><tr><td>Good for</td><td>Fixed word order (English)</td><td>Free word order (Hindi, Marathi)</td></tr></table><p><b>'The boy ate an apple'</b></p><p>Constituency: [S [NP The boy] [VP ate [NP an apple]]]</p><p>Dependency: ate = root; nsubj(ate, boy); obj(ate, apple); det(boy, The); det(apple, an)</p>",
      ask:["Draw the dependency tree and the constituency tree of the given sentence"] };
  N["2.7.0"] = { q:"What is a Recurrent Neural Network (RNN)? What is its limitation?", m:5,
      a:"From standard references; not in the class deck.\nRNN — a neural network for sequences. It reads one word at a time and keeps a hidden state: a memory of what it has seen.\nh(t) = f(W × x(t) + U × h(t−1) + b)\n- x(t): current input\n- h(t−1): previous hidden state\n- The same weights are used at every step.\nUse: language modelling, POS tagging (one tag per step).\nLimitations:\n- Vanishing / exploding gradients: cannot learn long-distance dependencies.\n- Processes words one by one: slow, no parallelism.",
      ask:["Draw an RNN unrolled over time"] };
  N["2.7.1"] = { q:"Explain LSTM and its gates.", m:5,
      a:"LSTM (Long Short-Term Memory) — an RNN with a cell state (long-term memory) and gates that control it. Solves the vanishing gradient problem.\n- Forget gate: what to remove from the cell state.\n- Input gate: what new information to store.\n- Output gate: what part of the cell state to output as the hidden state.\nThe cell state runs through time with only small changes, so information and gradients survive over long distances.\nExample: 'The keys to the cabinet are on the table': the LSTM remembers 'keys' (plural) to choose 'are'.",
      ask:["RNN vs LSTM"] };
  N["2.7.2"] = { q:"Explain GRU. Compare it with LSTM.", m:5,
      a:"<p><b>GRU (Gated Recurrent Unit):</b> a simpler gated RNN with two gates and no separate cell state.</p><ul><li><b>Reset gate:</b> how much of the past to forget when forming the new candidate state.</li><li><b>Update gate:</b> how much of the old state to keep versus replace.</li></ul><table><tr><th></th><th>LSTM</th><th>GRU</th></tr><tr><td>Gates</td><td>3: forget, input, output</td><td>2: reset, update</td></tr><tr><td>Memory</td><td>Cell state + hidden state</td><td>Hidden state only</td></tr><tr><td>Parameters</td><td>More</td><td>Fewer; faster to train</td></tr><tr><td>Best when</td><td>Long sequences, much data</td><td>Smaller data, speed matters</td></tr></table>",
      ask:["LSTM vs GRU"] };
  N["2.7.3"] = [
    { q:"What is the attention mechanism?", m:3,
      a:"From standard references; not in the class deck.\nAttention — at each step the model looks at all positions of the input and gives each a weight: how much to attend to it.\nQuery, Key, Value:\n1. Compare the query with every key (dot product) → scores.\n2. Softmax → attention weights.\n3. Output = weighted sum of the values.\nWhy: an RNN squeezes the whole sentence into one vector; attention reaches every word directly, so long-distance links are kept.",
      ask:["Why did attention improve on RNN encoder-decoders?"] },
    { q:"Give an overview of the Transformer.", m:5,
      a:"Transformer (Vaswani et al., 2017) — a sequence model built only on attention; no recurrence.\n- Self-attention: every word attends to every other word of the same sentence.\n- Multi-head attention: several attention patterns in parallel.\n- Positional encoding: adds word-order information.\n- Feed-forward layer, residual connections, layer normalisation.\n- Encoder stack (understands) and decoder stack (generates).\nAdvantages over RNN / LSTM: all positions are processed in parallel; long-range dependencies are captured directly.\nFor parsing and tagging: self-attention links a word to its head or its subject however far away.\nModels: BERT (encoder), GPT (decoder).",
      ask:["RNN vs Transformer", "BERT vs GPT"] }
  ];

  /* ------------------------------------------------ Module 5 */
  N["4.0.0"] = [
    { q:"What is discourse?", m:2,
      a:"Discourse — a coherent, structured group of sentences: language above the level of the sentence.\nSentences in a discourse are related; each is interpreted using its context.\n'John went to Bill's car dealership. He needed a car.' The second sentence explains the first, and 'He' links to John.\nDiscourse segmentation: dividing a long text into topically coherent parts.",
      ask:["Why is sentence-level analysis not enough?"] },
    { q:"What are discourse (coherence) relations? Explain with examples.", m:5,
      a:"<p><b>Coherence relation:</b> a meaning connection between two segments that makes the text hang together (Hobbs).</p><table><tr><th>Relation</th><th>Meaning</th><th>Example</th></tr><tr><td>Result</td><td>The first causes the second</td><td>The tyre burst. The car skidded.</td></tr><tr><td>Explanation</td><td>The second gives the cause of the first</td><td>The car skidded. The tyre had burst.</td></tr><tr><td>Parallel</td><td>Similar things about similar entities</td><td>Riya plays the violin. Sneha plays the flute.</td></tr><tr><td>Elaboration</td><td>The second adds detail</td><td>Dev bought a car. It is a red hatchback.</td></tr><tr><td>Occasion</td><td>One event follows the other</td><td>She opened the door. She walked in.</td></tr></table><p><b>RST:</b> a nucleus (main segment) and a satellite (supporting segment) joined by a relation.</p>",
      ask:["Identify the discourse relation between the given sentences"] }
  ];
  N["4.0.1"] = { q:"Differentiate cohesion and coherence.", m:5,
      a:"<table><tr><th></th><th>Cohesion</th><th>Coherence</th></tr><tr><td>What</td><td>How words link to each other on the surface</td><td>Whether the sentences make sense together</td></tr><tr><td>Level</td><td>Textual</td><td>Meaning</td></tr><tr><td>Created by</td><td>Reference, ellipsis, repetition, conjunctions</td><td>Coherence relations: result, explanation, elaboration</td></tr></table><p><b>Cohesive devices:</b></p><ul><li>Reference: 'Victoria Chen … she'</li><li>Ellipsis: 'John bought a car and Mary a bike'</li><li>Lexical cohesion: repeated or related words</li><li>Conjunction: because, but, then</li></ul><p><b>Cohesion without coherence:</b> 'John took a train. A train is a vehicle. Vehicles have wheels.'</p><p><b>Coherence with little cohesion:</b> 'I went to the hospital. I had a fever.'</p>",
      ask:["Is the given text cohesive, coherent, both or neither?"] };
  N["4.0.2"] = { q:"What syntactic and semantic constraints help resolve a pronoun's antecedent?", m:5,
      a:"Hard constraints (rule candidates out):\n- Number agreement: 'it' vs 'they'.\n- Person and gender agreement: 'he' needs a male antecedent.\n- Syntactic (binding): 'John bought him a coat': him ≠ John. 'John bought himself a coat': himself = John.\n- Selectional restrictions (semantic): 'John parked his car in the garage after driving it': 'it' must be something that can be driven → the car.\nPreferences (rank the rest):\n- Recency: the nearest candidate.\n- Grammatical role: subject > object > others.\n- Repeated mention.\n- Parallelism: 'Mary went with Sue to the market. Sally went with her to the bank.'\n- Verb semantics: 'John telephoned Bill. He lost the laptop.'",
      ask:["Which constraint decides the antecedent in the given sentence?"] };
  N["4.1.0"] = [
    { q:"Define reference, referring expression, referent, antecedent, anaphora and coreference.", m:3,
      a:"'Victoria Chen joined the firm. She became CFO.'\n- Reference: using an expression to denote an entity.\n- Referring expression: the expression itself: 'Victoria Chen', 'She'.\n- Referent: the entity meant: the person.\n- Coreference: two expressions with the same referent.\n- Antecedent: the earlier expression: 'Victoria Chen'.\n- Anaphora: reference back to an entity already introduced; the later expression ('She') is the anaphor.\n- Cataphora: reference forward: 'Before he left, John locked the door.'",
      ask:["Anaphora vs cataphora", "Anaphora vs coreference"] },
    { q:"What are the types of referring expressions (reference phenomena)?", m:5,
      a:"- Indefinite noun phrases: 'a car': introduce a new entity.\n- Definite noun phrases: 'the car': an entity already known.\n- Pronouns: he, she, it, they: need a salient antecedent.\n- Demonstratives: this, that, these, those.\n- Names: 'Victoria Chen'.\nSpecial cases:\n- Zero anaphora: the pronoun is dropped.\n- Bridging (inferable): 'I bought a car. The engine is noisy.'\n- Pleonastic 'it': 'It is raining': refers to nothing.",
      ask:["Identify the referring expressions in the given passage"] },
    { q:"What is coreference resolution? What techniques are used?", m:5,
      a:"Coreference resolution — finding all the expressions in a text that refer to the same entity and grouping them into chains.\n'Riya lost her bag. She found it later.' → [Riya, her, She], [her bag, it]\nSteps:\n1. Mention detection: find the candidate expressions.\n2. Filter candidates with the hard constraints (agreement, binding).\n3. Rank with the preferences (recency, role, parallelism).\n4. Link and cluster.\nTechniques:\n- Rule-based: Hobbs' algorithm (syntax), Centering theory (discourse focus).\n- Machine learning: mention-pair classifiers.\n- Neural: end-to-end models on BERT.",
      ask:["Resolve the pronouns in the given passage"] }
  ];
  N["4.1.1"] = [
    { q:"Explain Hobbs' algorithm for anaphora resolution.", m:5,
      a:"Hobbs' algorithm (1978) — a syntax-based method: it walks the parse tree in a fixed order and proposes noun phrases as antecedents.\nSimplified steps:\n1. Start at the NP node above the pronoun.\n2. Go up to the first NP or S node (X).\n3. Search the branches to the left of the path, left to right, breadth-first. Propose each NP found.\n4. If X is the top S, search the previous sentences, most recent first, left to right, breadth-first.\n5. Otherwise climb to the next NP or S and repeat.\n6. Check each proposed NP for gender, number and person agreement. The first that passes is the antecedent.\nIn short: parse tree → candidates in order → agreement check → select.",
      trap:"Left-to-right breadth-first means the subject of the previous sentence is proposed before its object.",
      ask:["Resolve the pronoun in the given sentences using Hobbs' algorithm"] },
    { q:"Apply Hobbs' algorithm: 'John saw Bill. He waved.'", m:5,
      a:"1. The pronoun 'He' is the subject NP of sentence 2.\n2. Go up: the first node is S, the top of the sentence. Nothing lies to the left of the path.\n3. Move to the previous sentence: 'John saw Bill.'\n4. Search its tree left to right, breadth-first: NP 'John' (subject) is met first; NP 'Bill' (inside the VP) is deeper.\n5. Agreement: John is singular, masculine, third person. It matches 'He'.\nAnswer: He = John.",
      ask:["Draw the parse trees and mark the search path"] },
    { q:"Explain Centering theory: Cf, Cp, Cb and the four transitions.", m:5,
      a:"<p>Centering tracks which entity the discourse is about, utterance by utterance.</p><ul><li><b>Cf(Un):</b> forward-looking centres: all entities in Un, ranked subject &gt; object &gt; others.</li><li><b>Cp(Un):</b> preferred centre: the top of Cf(Un).</li><li><b>Cb(Un):</b> backward-looking centre: the highest-ranked entity of Cf(Un−1) that appears in Un.</li></ul><table><tr><th></th><th>Cb(Un) = Cb(Un−1)</th><th>Cb(Un) ≠ Cb(Un−1)</th></tr><tr><th>Cb(Un) = Cp(Un)</th><td>Continue</td><td>Smooth shift</td></tr><tr><th>Cb(Un) ≠ Cp(Un)</th><td>Retain</td><td>Rough shift</td></tr></table><p><b>Rule 1:</b> if anything is a pronoun, Cb must be a pronoun.</p><p><b>Rule 2:</b> Continue &gt; Retain &gt; Smooth shift &gt; Rough shift.</p><p><b>Resolution:</b> choose the antecedent that gives the most preferred transition.</p>",
      ask:["Hobbs vs Centering"] },
    { q:"Apply Centering: U1 'John saw Mary.' U2 'He greeted her.' U3 'She smiled.'", m:5,
      a:"<table><tr><th></th><th>Cf</th><th>Cp</th><th>Cb</th><th>Transition</th></tr><tr><td>U1</td><td>John, Mary</td><td>John</td><td>undefined</td><td>—</td></tr><tr><td>U2</td><td>John (he), Mary (her)</td><td>John</td><td>John</td><td>Continue</td></tr><tr><td>U3</td><td>Mary (she)</td><td>Mary</td><td>Mary</td><td>Smooth shift</td></tr></table><ul><li>U2: Cb = highest of Cf(U1) present in U2 = John. Cb = Cp, and Cb(U1) is undefined, so Continue.</li><li>U3: only Mary appears, so Cb = Mary. Cb ≠ Cb(U2), and Cb = Cp, so Smooth shift.</li></ul>",
      trap:"Cb comes from the ranking of the previous utterance, not the current one.",
      ask:["Find Cf, Cp, Cb and the transition for each utterance"] }
  ];
  N["4.1.2"] = { q:"Outline neural coreference models.", m:5,
      a:"Pipeline:\n1. Contextual encoding: each word becomes a context-dependent vector (BERT-type encoder).\n2. Mention detection: find the spans that could be mentions: Riya, her bag, She, it.\n3. Scoring: score every mention against each candidate antecedent.\n4. Clustering: group the mentions that corefer: [Riya, She], [her bag, it].\nTypes:\n- Mention-pair: classify each pair as coreferent or not.\n- Mention-ranking: rank the candidate antecedents of a mention and pick the best.\n- End-to-end (span-based): detection and linking learned together.\nAdvantage: no hand-written rules; long-distance links through self-attention.\nLimit: needs large annotated data; can learn bias (gender stereotypes).",
      ask:["Rule-based vs neural coreference resolution"] };
  N["4.2.0"] = [
    { q:"What is pragmatics?", m:2,
      a:"Pragmatics — the study of how context affects meaning: the intended meaning of an utterance, from context, speaker intention and shared knowledge.\n'Can you open the window?'\n- Literal meaning: are you able to?\n- Intended meaning: please open it.\nNeeded for: chatbots, virtual assistants, indirect requests, sarcasm.",
      ask:["Semantics vs pragmatics"] },
    { q:"Explain implicature and its types.", m:5,
      a:"<p><b>Implicature:</b> a meaning the speaker suggests without stating it; the listener infers it (Grice).</p><p>'How was the movie?' 'The actors were good.' → the rest was probably not.</p><p>'Did everyone pass?' 'Some students passed.' → not everyone.</p><table><tr><th>Type</th><th>Depends on</th><th>Example</th></tr><tr><td>Conversational</td><td>The context</td><td>'There is a police officer outside.'</td></tr><tr><td>Generalised conversational</td><td>Ordinary usage; almost no context needed</td><td>'I met a friend.' → not a specific known one</td></tr><tr><td>Conventional</td><td>A particular word</td><td>'She is poor but honest.' (but → contrast)</td></tr></table><p>An implicature can be cancelled: 'Some passed, in fact all did.'</p>",
      ask:["Identify the implicature in the given dialogue"] }
  ];
  N["4.2.1"] = { q:"What is presupposition? Give its types and the negation test.", m:5,
      a:"<p><b>Presupposition:</b> information the speaker treats as already true.</p><p>'Ravi has stopped smoking.' → presupposes that Ravi used to smoke.</p><table><tr><th>Type</th><th>Trigger</th><th>Example → presupposed</th></tr><tr><td>Existential</td><td>Possessives, definite NPs</td><td>'Her car is red' → she has a car</td></tr><tr><td>Factive</td><td>know, realise, regret</td><td>'He knows that she left' → she left</td></tr><tr><td>Lexical</td><td>stop, start, again</td><td>'She started running again' → she ran before</td></tr><tr><td>Structural</td><td>Wh-questions</td><td>'When did he arrive?' → he arrived</td></tr><tr><td>Non-factive</td><td>dream, imagine</td><td>'She dreamed that she won' → she did not win</td></tr><tr><td>Counterfactual</td><td>If-clauses contrary to fact</td><td>'If I had wings…' → I have no wings</td></tr></table><p><b>Negation test:</b> 'Ravi has not stopped smoking' still presupposes that he smoked.</p>",
      trap:"Implicature can be cancelled. Presupposition survives negation.",
      ask:["Identify the presupposition and its type", "Implicature vs presupposition"] };
  N["4.2.2"] = { q:"Explain speech acts: the three levels and the five types.", m:5,
      a:"<p><b>Speech act:</b> an action performed by speaking. 'I apologise.' performs an apology.</p><p><b>Three levels (Austin)</b>, for 'It is cold here.':</p><ul><li>Locutionary: what is said.</li><li>Illocutionary: what is intended: a request to close the window.</li><li>Perlocutionary: the effect: the listener closes it.</li></ul><table><tr><th>Type (Searle)</th><th>Purpose</th><th>Example</th></tr><tr><td>Assertive</td><td>State something</td><td>The train is late.</td></tr><tr><td>Directive</td><td>Get someone to act</td><td>Please sit down.</td></tr><tr><td>Commissive</td><td>Commit to a future action</td><td>I will help you tomorrow.</td></tr><tr><td>Expressive</td><td>Express a feeling</td><td>Thank you for your help.</td></tr><tr><td>Declarative</td><td>Change reality by saying it</td><td>I declare the meeting open.</td></tr></table><p><b>Direct:</b> 'Close the door.' <b>Indirect:</b> 'Could you close the door?' (a question in form, a request in function).</p><p><b>Use:</b> intent detection in chatbots and assistants.</p>",
      ask:["Classify the given utterances by speech act"] };
  N["4.3.0"] = [
    { q:"Define BLEU. Explain modified precision and the brevity penalty.", m:5,
      a:"BLEU (Bilingual Evaluation Understudy) — evaluates machine translation by N-gram overlap between the candidate and human reference translations. Precision-oriented.\nBLEU = BP × exp( Σ wn × log pn )\n- pn: modified N-gram precision = clipped matches ÷ N-grams in the candidate.\n- Clipping: a word counts at most as often as it occurs in the reference. Candidate 'the the the the', reference 'the cat is on the mat' → p1 = 2 ÷ 4.\n- wn: weights, usually 1 ÷ N.\n- BP (brevity penalty): 1 if c > r, else e^(1 − r/c). c = candidate length, r = reference length.\nRange 0 to 1; higher is better.",
      ask:["Why is a brevity penalty needed?"] },
    { q:"Compute BLEU-2: candidate 'the cat sat on mat', reference 'the cat sat on the mat'.", m:5,
      a:"1. Unigrams: all 5 candidate words are in the reference → p1 = 5 ÷ 5 = 1\n2. Candidate bigrams: the cat, cat sat, sat on, on mat (4). In the reference: the cat, cat sat, sat on → p2 = 3 ÷ 4 = 0.75\n3. c = 5, r = 6 → BP = e^(1 − 6/5) = e^(−0.2) = 0.819\n4. BLEU-2 = BP × √(p1 × p2) = 0.819 × √0.75 = 0.819 × 0.866 = 0.709",
      trap:"With equal weights, exp of the average log is the geometric mean: the square root for BLEU-2.",
      ask:["Calculate the BLEU score for the given candidate and reference"] }
  ];
  N["4.3.1"] = { q:"Explain ROUGE-1, ROUGE-2 and ROUGE-L with examples.", m:5,
      a:"ROUGE (Recall-Oriented Understudy for Gisting Evaluation) — evaluates summaries by overlap with a reference summary.\nRecall = matches ÷ units in the reference. Precision = matches ÷ units in the generated text.\n- ROUGE-1: unigrams. Reference 'Dogs chase cats', generated 'Dogs chase birds': 2 matches → recall 2 ÷ 3 = 0.667.\n- ROUGE-2: bigrams. Reference 'The cat sat down', generated 'The cat lay down': only 'the cat' matches; the reference has 3 bigrams → 1 ÷ 3 = 0.333.\n- ROUGE-L: longest common subsequence (same order, gaps allowed). 'The cat is sitting' vs 'The cat is sleeping': LCS = 'the cat is' = 3 → 3 ÷ 4 = 0.75.\nF1 = 2PR ÷ (P + R).",
      trap:"BLEU divides by the candidate (precision). ROUGE divides by the reference (recall).",
      ask:["BLEU vs ROUGE", "Compute ROUGE-1 and ROUGE-2 for the given summaries"] };
  N["4.3.2"] = [
    { q:"Define precision, recall and F1-score.", m:3,
      a:"- TP: predicted positive, actually positive.\n- FP: predicted positive, actually negative.\n- FN: predicted negative, actually positive.\nPrecision = TP ÷ (TP + FP): of what was flagged, how much was right.\nRecall = TP ÷ (TP + FN): of what should have been flagged, how much was found.\nF1 = 2 × P × R ÷ (P + R): the harmonic mean.\nWhy F1: accuracy misleads on imbalanced data; F1 punishes a model that is weak on either precision or recall.\nMulti-class: macro F1 (average of per-class F1), micro F1 (pool all TP, FP, FN), weighted F1.",
      ask:["Why not use accuracy?", "Macro vs micro F1"] },
    { q:"Numerical: 100 emails, 20 are spam. The system flags 15 as spam; 12 of them are really spam. Find precision, recall and F1.", m:5,
      a:"1. TP = 12\n2. FP = 15 − 12 = 3\n3. FN = 20 − 12 = 8\n4. Precision = 12 ÷ (12 + 3) = 0.80\n5. Recall = 12 ÷ (12 + 8) = 0.60\n6. F1 = 2 × 0.80 × 0.60 ÷ (0.80 + 0.60) = 0.96 ÷ 1.40 = 0.686\nAnswer: P = 80%, R = 60%, F1 = 68.6%.",
      ask:["Compare two systems A and B using F1 and say which is better"] }
  ];

  /* ------------------------------------------------ Module 6 */
  N["5.0.0"] = { q:"Explain rule-based machine translation (RBMT).", m:5,
      a:"Machine translation — converting text from a source language to a target language automatically.\nRBMT — linguists write bilingual dictionaries and grammar rules.\nThree strategies (Vauquois triangle):\n- Direct: word-by-word with a dictionary, then small reordering.\n- Transfer: analyse the source → apply transfer rules → generate the target. English SVO → Hindi SOV.\n- Interlingua: source → a language-neutral meaning representation → target.\nAdvantages — no parallel corpus needed; predictable; good in narrow domains.\nDisadvantages — costly to build; brittle; cannot cover every exception or idiom.",
      ask:["Direct vs transfer vs interlingua"] };
  N["5.0.1"] = { q:"Explain statistical machine translation (SMT).", m:5,
      a:"SMT — learns translation from a parallel corpus, using probabilities.\nNoisy-channel model: ê = argmax P(f | e) × P(e)\n- f: source sentence; e: target sentence.\n- P(f | e): translation model: is it a faithful translation? Learned from word or phrase alignments.\n- P(e): language model: is it fluent? An N-gram model.\n- Decoder: searches for the e with the highest product.\nPhrase-based SMT translates phrases, not single words.\nAdvantages — no hand-written rules; improves with more data.\nDisadvantages — needs large parallel corpora; weak on long-distance reordering and rare words.",
      ask:["Role of the translation model and the language model"] };
  N["5.0.2"] = { q:"Explain neural machine translation (NMT). Compare RBMT, SMT and NMT.", m:5,
      a:"<p><b>NMT:</b> one neural network trained end to end. An encoder reads the source sentence into vectors; a decoder generates the target one word at a time; attention lets the decoder look at the relevant source words.</p><table><tr><th></th><th>RBMT</th><th>SMT</th><th>NMT</th></tr><tr><td>Knowledge</td><td>Hand-written rules</td><td>Probabilities from parallel text</td><td>Neural network on parallel text</td></tr><tr><td>Unit</td><td>Words + rules</td><td>Phrases</td><td>Whole sentence</td></tr><tr><td>Fluency</td><td>Low</td><td>Medium</td><td>High</td></tr><tr><td>Data needed</td><td>None</td><td>Large</td><td>Very large</td></tr><tr><td>Weakness</td><td>Costly, brittle</td><td>Word order</td><td>Hallucination; low-resource languages; black box</td></tr></table>",
      ask:["Explain the encoder-decoder model with attention"] };
  N["5.0.3"] = { q:"How do transformer-based models perform machine translation?", m:5,
      a:"Architecture: encoder stack + decoder stack.\n- Encoder: self-attention over the source sentence; every word sees every other word.\n- Decoder: generates the target one token at a time, using self-attention over what it has written and cross-attention over the encoder output (which aligns target words with source words).\n- Positional encoding: gives word order, since there is no recurrence.\n- Multi-head attention: several alignment patterns at once.\nAdvantages over RNN-based NMT: parallel training; long sentences handled better.\nModels: Google Transformer NMT, mBART, NLLB (200 languages), IndicTrans2 (Indian languages).",
      ask:["Why is positional encoding needed?", "Self-attention vs cross-attention"] };
  N["5.1.0"] = [
    { q:"Differentiate extractive and abstractive summarization.", m:5,
      a:"<table><tr><th></th><th>Extractive</th><th>Abstractive</th></tr><tr><td>Method</td><td>Selects important sentences from the text</td><td>Generates new sentences</td></tr><tr><td>New words</td><td>No</td><td>Yes: paraphrases and condenses</td></tr><tr><td>Techniques</td><td>TF-IDF scoring, TextRank, LexRank</td><td>Seq2seq, Transformers: BART, T5, PEGASUS</td></tr><tr><td>Strength</td><td>Faithful, simple</td><td>Fluent, human-like, shorter</td></tr><tr><td>Weakness</td><td>Disjointed, redundant</td><td>Can hallucinate; needs much data</td></tr></table><p><b>Generic summary:</b> the overall content. <b>Query-focused:</b> only what answers a query.</p>",
      ask:["Which type would you use for news / legal documents and why?"] },
    { q:"How does an extractive summarizer work?", m:5,
      a:"1. Content selection: score each sentence by word frequency or TF-IDF, position (first sentences), cue phrases, similarity to the title.\n2. Graph-based scoring (TextRank): sentences = nodes; edges = cosine similarity; a PageRank-style iteration ranks the central sentences.\n3. Selection: take the top-k sentences; avoid redundancy.\n4. Ordering: keep the document order.\nChallenges of summarization: redundancy, coherence of the output, keeping facts correct, long documents, evaluation.",
      ask:["Explain TextRank"] }
  ];
  N["5.1.1"] = { q:"How are summaries evaluated?", m:3,
      a:"- ROUGE-1 / ROUGE-2: overlap of words / bigrams with the reference summary.\n- ROUGE-L: longest common subsequence.\n- Each is reported as recall, precision and F1.\n- Human evaluation: fluency, coherence, informativeness, factual consistency.\n- BERTScore: compares meaning with embeddings, so paraphrases score well.\nLimit: ROUGE rewards overlap, not truth. A fluent but hallucinated summary can still score high.",
      ask:["Compute ROUGE-1 for the given summary", "Limitations of ROUGE"] };
  N["5.2.0"] = [
    { q:"What is sentiment analysis (opinion mining)? State its levels.", m:3,
      a:"Sentiment analysis — a text classification task: finding the positive, negative or neutral opinion a writer expresses about something (product, movie, service).\nLevels:\n- Document level: the whole review.\n- Sentence level: each sentence.\n- Aspect level: the opinion about one feature: 'The battery life is great but the camera is poor.'\nUses: product reviews, brand monitoring, politics, customer support.\nChallenges: sarcasm, negation, domain-dependent words, mixed opinions.",
      ask:["Applications and challenges of sentiment analysis"] },
    { q:"Explain the lexicon-based approach to sentiment analysis.", m:5,
      a:"Sentiment lexicon — a list of words with polarity scores: SentiWordNet, VADER, MPQA, General Inquirer.\nSteps:\n1. Tokenise and normalise.\n2. Look up each word's score (+ positive, − negative).\n3. Handle modifiers: negation flips ('not good'); intensifiers scale ('very good').\n4. Add the scores: total > 0 → positive; < 0 → negative.\nExample: 'The movie was good (+2) but the ending was terrible (−3)' → −1 → negative.\nAdvantages — no training data; transparent; fast.\nLimitations — sarcasm; domain ('cold beer' vs 'cold soup'); words missing from the lexicon; context.",
      ask:["Find the sentiment of the given review using the given lexicon"] },
    { q:"Explain the supervised approach to sentiment analysis (Naïve Bayes). Compare it with the lexicon approach.", m:5,
      a:"<p>Train a classifier on labelled reviews. Features: Bag of Words, N-grams, TF-IDF. Classifiers: Naïve Bayes, logistic regression, SVM, neural networks.</p><p><b>Naïve Bayes:</b> ĉ = argmax P(c) × Π P(w<sub>i</sub> | c)</p><ul><li>P(c) = documents of class c ÷ all documents</li><li>P(w | c) = (count(w, c) + 1) ÷ (words in class c + |V|)</li></ul><p>Negation handling: add NOT_ to the words after 'not'.</p><table><tr><th></th><th>Lexicon-based</th><th>Supervised</th></tr><tr><td>Training data</td><td>None</td><td>Labelled reviews</td></tr><tr><td>Domain</td><td>General</td><td>Adapts to the training domain</td></tr><tr><td>Accuracy</td><td>Lower</td><td>Higher with enough data</td></tr><tr><td>Transparency</td><td>High</td><td>Depends on the model</td></tr></table>",
      ask:["Classify the given review using Naïve Bayes with add-one smoothing"] }
  ];
  N["5.3.0"] = { q:"What is Named Entity Recognition (NER)? How is it done?", m:5,
      a:"NER — finding the entities in a text and labelling their type: PERSON, ORG, LOCATION, DATE, MONEY.\n'In June 2018 [DATE], Microsoft [ORG], led by Satya Nadella [PERSON], agreed to acquire GitHub [ORG] for $7.5 billion [MONEY].'\nModelled as sequence labelling with BIO tags:\n- B: beginning of an entity\n- I: inside an entity\n- O: outside\nSatya/B-PER Nadella/I-PER led/O Microsoft/B-ORG\nApproaches: rules and gazetteers → HMM, CRF → BiLSTM-CRF → fine-tuned BERT.\nEvaluation: precision, recall and F1 at the entity level.\nChallenges: ambiguity ('Apple': company or fruit; 'Washington': person or place), new names.",
      ask:["Tag the given sentence with BIO labels"] };
  N["5.3.1"] = { q:"What is relation extraction?", m:5,
      a:"Relation extraction — given two entities in a sentence, decide how they are related, and store a triple (subject, relation, object).\n- (Satya Nadella, CEO_of, Microsoft)\n- (Microsoft, acquired, GitHub)\n- (GitHub, price, $7.5 billion)\nApproaches:\n- Hand-written patterns: 'X, CEO of Y'.\n- Supervised classifiers over entity pairs.\n- Semi-supervised bootstrapping from seed pairs.\n- LLM prompting.\nResult: a knowledge graph that answers 'Who leads Microsoft?' by lookup.\nLimit: it answers only the kinds of questions planned for. Open questions need retrieval (RAG).\nInformation extraction = NER + relation extraction + event extraction.",
      ask:["Extract the entities and relations from the given sentence"] };
  N["5.3.2"] = [
    { q:"Explain question answering systems: IR-based and knowledge-based.", m:5,
      a:"IR-based (factoid) QA — answers from large text collections.\n1. Question processing: find the answer type (PERSON, LOCATION, NUMBER); form a query.\n2. Passage retrieval: fetch and rank passages (TF-IDF cosine).\n3. Answer extraction: mark the span of the passage that is the answer.\n'How tall is Mt. Everest?' → type NUMBER → '8,849 m'.\nKnowledge-based QA — turns the question into a query over a structured database or knowledge graph.\n'Who leads Microsoft?' → CEO_of(?x, Microsoft) → Satya Nadella.",
      ask:["Stages of a factoid QA system"] },
    { q:"Explain Retrieval-Augmented Generation (RAG) for QA.", m:5,
      a:"Problem: an LLM alone answers from memory: frozen knowledge, no private data, hallucination, no sources.\nIdea: Retrieve → Augment → Generate\nIngestion (offline):\ndocuments → extract text → chunk (about 500 tokens, with overlap) → embed → store in a vector database\nQuery (online):\nquestion → embed → retrieve the top-k similar chunks → build the prompt (question + chunks) → the LLM generates a grounded answer with citations\nAdvantages — up-to-date; uses private data; fewer hallucinations; cites sources; no retraining.\nLimitations — depends on retrieval quality; bad chunking loses context; slower; can still hallucinate.",
      ask:["Draw the RAG architecture", "RAG vs fine-tuning"] }
  ];
  N["5.4.0"] = { q:"Discuss bias and fairness in NLP models.", m:5,
      a:"Bias — a model gives systematically unfair output for some groups.\nSources:\n- Data: text reflects social stereotypes.\n- Annotation: labellers' judgements.\n- Deployment: used on people it was not trained on.\nExamples:\n- Embeddings: man : programmer :: woman : homemaker.\n- Resume screening that prefers male candidates.\n- Toxicity detectors that flag dialects more often.\nFairness measures: demographic parity, equal opportunity.\nMitigation: balanced and audited datasets, counterfactual data augmentation, embedding debiasing, fairness testing, human oversight.",
      ask:["How can bias in word embeddings be reduced?"] };
  N["5.4.1"] = { q:"What are the privacy concerns in NLP?", m:3,
      a:"- Models can memorise personal data from the training text and reveal it.\n- Training data scraped from the web may be used without consent.\n- User prompts and chats may be stored or reused.\n- Sensitive attributes can be inferred from writing style.\nMitigation:\n- Anonymisation: remove names, numbers, addresses (NER helps).\n- Data minimisation.\n- Differential privacy during training.\n- On-device processing; consent and privacy law.",
      ask:["How can privacy be protected in NLP systems?"] };
  N["5.4.2"] = { q:"What is hallucination in NLP models? How is it reduced?", m:3,
      a:"Hallucination — fluent output that is false or not supported by the source.\nExamples: invented references; a summary containing a fact that is not in the document; a wrong translation that reads well.\nCause: the model generates the most likely text, not verified truth.\nDangerous in: medicine, law, finance.\nMitigation:\n- Retrieval grounding (RAG) with citations.\n- Fact-checking against a source.\n- Constrained prompts: 'answer only from the given context'.\n- Human review for high-stakes use.",
      ask:["Why do language models hallucinate?"] };
  N["5.4.3"] = { q:"How does NLP contribute to misinformation? How can it be countered?", m:3,
      a:"Misinformation — false or misleading content spread at scale.\nRisk: language models produce fluent fake news, fake reviews, propaganda and impersonation cheaply and in bulk.\nCounter-measures:\n- Fake-news and stance detection classifiers.\n- Automated fact-checking against trusted sources.\n- Watermarking and detection of AI-generated text.\n- Source labelling; platform policy; media literacy.\nNLP is both the cause and part of the solution.",
      ask:["Role of NLP in fake news detection"] };
  N["5.4.4"] = { q:"What is cultural inclusivity in NLP?", m:3,
      a:"Cultural inclusivity — NLP systems should work fairly for all languages, dialects and cultures, not only for English and Western contexts.\nProblems:\n- Training data is mostly English.\n- Dialects and code-mixed text are handled badly or flagged as errors.\n- Cultural references, names, idioms and politeness norms are misunderstood.\n- Sentiment and toxicity models carry one culture's norms.\nSteps:\n- Collect diverse, representative data.\n- Build multilingual models (mBERT, XLM-R, IndicBERT).\n- Involve native speakers in annotation and evaluation.\n- Evaluate per language and per group.",
      ask:["Why do NLP systems perform worse for some communities?"] };
  N["5.5.0"] = { q:"What are the challenges of NLP for Indian and low-resource languages? Which tools exist?", m:5,
      a:"Low-resource language — one with little digital text, annotated data or tools.\nChallenges:\n- Scarce data: few corpora, few annotated datasets, few benchmarks.\n- Many scripts; romanised text has no standard spelling ('main' / 'mein').\n- Code-mixing: Hinglish.\n- Rich morphology and free word order.\n- Dialects; few taggers, parsers or WordNets.\n- Tokenisers trained on English split Indian words badly.\nTools and resources:\n- Indic NLP Library\n- AI4Bharat: IndicCorp, IndicBERT, IndicTrans2\n- Hindi WordNet, IndoWordNet\n- Multilingual models: mBERT, XLM-R, MuRIL\n- Bhashini (government translation platform)\nTechniques: transfer learning from high-resource languages, multilingual pre-training, data augmentation (back-translation).",
      ask:["How does transfer learning help low-resource languages?"] };
})();
