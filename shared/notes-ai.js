/* =====================================================================
   AI — step-by-step notes for syllabus.html
   One syllabus topic = one small predicted question (an array when a topic
   needs two or three steps). Key = module.entry.topic (the checklist id).
   Note: {q, m (marks), a (plain text for SEM7.ui.rich, or HTML), trap, ask[]}
   Sources, in order: class decks and notes in _resources/ai, then Russell &
   Norvig. A note that leans on the book or on general references says so.
   Modules 4 to 6 carry 70-80% of the End Sem paper.
   ===================================================================== */
(function(){
  "use strict";
  var N = (window.SEM7_NOTES = window.SEM7_NOTES || {}).ai = {};

  /* ------------------------------------------------ Module 4 */
  N["3.0.0"] = [
    { q:"What causes uncertainty in real-world systems? Why does logic fail and why is probability needed?", m:5,
      a:"Uncertainty arises from partial observability, nondeterminism, or both: the agent cannot be sure of the outcome of its actions.\nWhy pure logic fails (e.g. medical diagnosis):\n- Laziness: too much work to list every condition for an exceptionless rule.\n- Theoretical ignorance: science has no complete theory of the domain.\n- Practical ignorance: not all tests have been run for this patient.\nProbability — summarises the uncertainty that comes from laziness and ignorance as a degree of belief.\nThe agent also needs preferences between outcomes (utility).\nDecision Theory = Probability Theory + Utility Theory",
      trap:"Give all three reasons by name. Laziness and the two kinds of ignorance are separate points.",
      ask:["Why is probability needed in AI?", "Define decision theory"] },
    { q:"Define prior and posterior probability. State Bayes' rule.", m:3,
      a:"Prior (unconditional) probability — degree of belief before any evidence. P(cavity) = 0.2\nPosterior (conditional) probability — degree of belief after evidence. P(cavity | toothache) = 0.6\nProduct rule: P(A ∧ B) = P(A | B) P(B) = P(B | A) P(A)\nBayes' rule: P(A | B) = P(B | A) × P(A) ÷ P(B)\nUse: turns the causal direction P(effect | cause) into the diagnostic direction P(cause | effect).",
      ask:["Derive Bayes' rule from the product rule"] },
    { q:"Numerical: meningitis causes a stiff neck 70% of the time. P(meningitis) = 1/50000, P(stiff neck) = 1%. Find P(meningitis | stiff neck).", m:5,
      a:"1. Let M = meningitis, S = stiff neck.\n2. Given: P(S | M) = 0.7, P(M) = 0.00002, P(S) = 0.01\n3. Asked: P(M | S), the diagnostic direction.\n4. Bayes' rule: P(M | S) = P(S | M) × P(M) ÷ P(S)\n5. = (0.7 × 0.00002) ÷ 0.01 = 0.0014\nAnswer: 0.14%, about 1 patient in 700.",
      trap:"P(S | M) = 70% but P(M | S) = 0.14%. Never swap the two.",
      ask:["Any 'given P(effect | cause), find P(cause | effect)' problem"] },
    { q:"What is a full joint probability distribution? What is its limitation?", m:5,
      a:"Joint distribution — probabilities over several variables together.\nFull joint distribution — covers all variables of the domain: one entry for every possible world.\nCavity, Toothache, Weather (4 values) → 2 × 2 × 4 = 16 entries.\nAny query = sum of the matching entries. P(cavity) = 0.108 + 0.012 + 0.072 + 0.008 = 0.2\nLimitations:\n- n Boolean variables need 2^n entries: intractable.\n- Listing worlds one by one is unnatural.\nFix: use independence, P(a ∧ b) = P(a) P(b), and a Bayesian network.",
      ask:["Compute a marginal probability from a joint table", "Define independence"] }
  ];
  N["3.0.1"] = [
    { q:"What is a Bayesian network? State its three-part definition.", m:5,
      a:"Bayesian (belief) network — a directed graph that represents the dependencies among variables and encodes the full joint distribution compactly.\n1. Each node is a random variable.\n2. Directed links connect pairs of nodes (cause → effect); there are no directed cycles, so it is a DAG.\n3. Each node Xi has a conditional probability table P(Xi | Parents(Xi)).\nExample: Burglary → Alarm ← Earthquake; Alarm → JohnCalls; Alarm → MaryCalls.\nWhy compact: a node needs only 2^k values for k parents, instead of 2^n for the whole world.",
      trap:"An arrow means direct influence, drawn from cause to effect. No cycles.",
      ask:["Explain belief networks with an example", "What is a CPT?"] },
    { q:"How do you construct a Bayesian network from a story?", m:5,
      a:"1. List every true/false quantity in the story as a variable.\n2. Variables that nothing influences become root nodes.\n3. Draw an arrow for every 'causes', 'affects', 'influences', 'triggers': from the cause to the effect.\n4. Check there is no directed cycle.\n5. Attach a CPT to each node: one row per combination of parent values.\nBurglary story: B and E are roots; both point to A; A points to J and to M.",
      ask:["Draw the Bayesian network for the given scenario"] },
    { q:"How many independent values does a Bayesian network need? Count for the burglary network.", m:5,
      a:"<p><b>Rule:</b> a Boolean node with k Boolean parents needs 2<sup>k</sup> independent values (P(false) = 1 − P(true), so it is not counted).</p><table><tr><th>Node</th><th>Parents</th><th>Values</th></tr><tr><td>Burglary</td><td>0</td><td>1</td></tr><tr><td>Earthquake</td><td>0</td><td>1</td></tr><tr><td>Alarm</td><td>2</td><td>4</td></tr><tr><td>JohnCalls</td><td>1</td><td>2</td></tr><tr><td>MaryCalls</td><td>1</td><td>2</td></tr><tr><th>Total</th><th></th><th>10</th></tr></table><p>Full joint for 5 Boolean variables: 2<sup>5</sup> − 1 = 31. The network needs 10.</p>",
      trap:"Do not count 2^(k+1). Only P(true) per row is independent.",
      ask:["Count the CPT entries for a given network", "Compare with the full joint distribution"] }
  ];
  N["3.0.2"] = [
    { q:"How is a joint probability computed from a Bayesian network? Find P(j ∧ m ∧ a ∧ ¬b ∧ ¬e).", m:5,
      a:"Rule: a joint entry = product of one CPT row per node.\nP(x1, …, xn) = Π P(xi | parents(Xi))\nBurglary network CPTs: P(B) = 0.001, P(E) = 0.002, P(A | ¬b, ¬e) = 0.001, P(J | a) = 0.90, P(M | a) = 0.70\nP(j ∧ m ∧ a ∧ ¬b ∧ ¬e)\n= P(j | a) × P(m | a) × P(a | ¬b, ¬e) × P(¬b) × P(¬e)\n= 0.90 × 0.70 × 0.001 × 0.999 × 0.998\n= 0.000628",
      trap:"Use P(¬b) = 0.999 and P(¬e) = 0.998, not the priors themselves.",
      ask:["Probability that the alarm sounds, no burglary, no earthquake, and both call"] },
    { q:"Find P(Alarm) in the burglary network (inference by summing out the parents).", m:5,
      a:"P(A | B, E): 0.95 (b, e), 0.94 (b, ¬e), 0.29 (¬b, e), 0.001 (¬b, ¬e)\nP(a) = sum over all four parent combinations of P(a | B, E) P(B) P(E)\n= (0.95)(0.001)(0.002) + (0.94)(0.001)(0.998) + (0.29)(0.999)(0.002) + (0.001)(0.999)(0.998)\n= 0.0000019 + 0.0009381 + 0.0005794 + 0.0009970\n= 0.0025164\nTypes of inference:\n- Causal (cause → effect): P(JohnCalls | Burglary)\n- Diagnostic (effect → cause): P(Burglary | JohnCalls)",
      ask:["Explain inference in Bayesian networks", "Diagnostic vs causal inference"] }
  ];
  N["3.1.0"] = [
    { q:"What is planning? State its inputs, output and the classical assumptions.", m:5,
      a:"Planning — finding a sequence of actions that takes a system from the initial state to a goal state.\nGiven:\n- Initial state\n- Goal state\n- A finite set of actions, each with preconditions and postconditions (effects)\nOutput: a sequence of actions that reaches the goal.\nClassical assumptions:\n- Atomic time, no concurrent actions\n- Deterministic actions\n- The agent is the only cause of change\n- The agent knows everything (omniscient)\n- Closed-world assumption\nSo the environment is fully observable, deterministic, static and discrete.",
      ask:["Define planning. How is it different from search?"] },
    { q:"How are states, goals and actions represented in STRIPS?", m:5,
      a:"State — a conjunction of positive ground literals: At(P1, MUM) ∧ At(P2, DEL). Anything not stated is false (closed world).\nGoal — a partially specified state; a state satisfies it if it contains all the goal literals.\nAction schema — name, PRECOND, EFFECT.\nFly(p, from, to)\n- PRECOND: At(p, from) ∧ Plane(p) ∧ Airport(from) ∧ Airport(to)\n- EFFECT: ¬At(p, from) ∧ At(p, to)\nPositive effects = add list. Negated effects = delete list.\nApplying Fly(P1, MUM, DEL): delete At(P1, MUM), add At(P1, DEL); everything else is unchanged.",
      trap:"Change only the literals in the effect. Everything else stays as it was.",
      ask:["Write STRIPS operators for the blocks world / spare tyre problem", "STRIPS vs ADL"] },
    { q:"Explain state-space planning: forward (progression) and backward (regression) search.", m:5,
      a:"<p>From Russell &amp; Norvig; the deck only names the topic.</p><table><tr><th></th><th>Forward (progression)</th><th>Backward (regression)</th></tr><tr><td>Starts at</td><td>Initial state</td><td>Goal</td></tr><tr><td>Tries</td><td>Every applicable action</td><td>Only relevant actions</td></tr><tr><td>Stops when</td><td>A state satisfies the goal</td><td>The sub-goal is satisfied by the initial state</td></tr><tr><td>Weakness</td><td>Many irrelevant actions; needs a heuristic</td><td>Works on sets of states; harder heuristics</td></tr></table><p><b>Regression:</b> g′ = (g − ADD(a)) ∪ PRECOND(a)</p><p><b>Example:</b> regress At(P1, DEL) through Fly(P1, MUM, DEL) → At(P1, MUM) ∧ Plane(P1) ∧ Airport(MUM) ∧ Airport(DEL).</p><p>Both give a totally ordered plan.</p>",
      ask:["Progression vs regression planning"] }
  ];
  N["3.1.1"] = [
    { q:"What is hierarchical planning? Explain with an example.", m:5,
      a:"Hierarchical planning — actions are organised in levels: major (abstract) actions on top, each refined into detailed steps below.\nWhy: a one-level planner works at the smallest step and the search space explodes.\nGeneral property: postpone the details until the major steps are fixed. If a lower level fails, go back and patch the higher level.\nPlanner steps:\n1. Identify a hierarchy of conditions.\n2. Construct the plan in levels.\n3. Patch higher levels as details appear.\nTrip to Goa:\n- Level 1: Buy ticket → Reach airport → Reach Goa\n- Level 2: Find flight, Get taxi, Board plane\n- Level 3: Open makemytrip.com, Pay driver, Check in\nBuild House: Obtain permit, Hire builder → Construction → Pay builder. Construction expands to Foundation → Frame → Roof, Walls → Interior.",
      trap:"The sub-plan must still deliver what the abstract action promised (e.g. Have(House)).",
      ask:["Explain hierarchical task network (HTN) planning", "Draw the hierarchy for a given task"] },
    { q:"Define a task network. Explain truth and temporal ordering constraints.", m:5,
      a:"Task network — a set of tasks plus constraints on them.\nTemporal ordering constraint n ≺ n′ — task n must finish before n′.\nTruth constraint (n, p, n′) — p is true right after n and stays true until n′.\nMaking tea: n1 Boil water, n2 Put tea bag in cup, n3 Pour hot water, n4 Steep tea, n5 Add milk, n6 Serve.\n- Ordering: n1 ≺ n3, n2 ≺ n3, n3 ≺ n4 ≺ n5 ≺ n6\n- Truth: (n4, TeaSteeped, n5)\nn1 and n2 are unordered, so they can run in parallel.",
      ask:["Draw the task network for a given activity"] }
  ];
  N["3.1.2"] = [
    { q:"What is partial-order planning? Compare it with total-order planning.", m:5,
      a:"<table><tr><th></th><th>Total-order plan</th><th>Partial-order plan (POP)</th></tr><tr><td>Form</td><td>One linear sequence</td><td>Set of actions with ordering only where needed</td></tr><tr><td>Commitment</td><td>Early</td><td>Least commitment</td></tr><tr><td>Sub-problems</td><td>Solved in one fixed order</td><td>Solved independently, then combined</td></tr></table><p><b>Example:</b> to paint a ceiling, Get brush and Get ladder must both come before Paint, in either order.</p><p><b>Components of a partial-order plan:</b></p><ol><li>Actions, including Start (its effects = initial state) and Finish (its preconditions = goal).</li><li>Ordering constraints A ≺ B (no cycles).</li><li>Causal links A —p→ B: A achieves p for B.</li><li>Open preconditions: not yet achieved by any action.</li></ol><p>The plan is complete when there are no open preconditions.</p>",
      ask:["Explain the least commitment strategy", "What is a causal link?"] },
    { q:"Draw the partial-order plan for shoes and socks. What is a threat and how is it resolved?", m:5,
      a:"<pre>            ┌→ LeftSock ──LeftSockOn──→ LeftShoe ──┐\nStart ──────┤                                      ├──→ Finish\n            └→ RightSock ─RightSockOn─→ RightShoe ─┘</pre><p>Goal: LeftShoeOn ∧ RightShoeOn. The two chains are not ordered against each other, so this one plan stands for 6 total-order plans.</p><p><b>Threat:</b> an action C with effect ¬p that could come between A and B on the causal link A —p→ B.</p><p><b>Resolution:</b></p><ul><li>Demotion: order C before A.</li><li>Promotion: order C after B.</li></ul>",
      trap:"Do not draw an arrow between the left and right chains. That adds an order the problem does not need.",
      ask:["Build a partial-order plan for the spare tyre problem"] }
  ];
  N["3.1.3"] = [
    { q:"What is a multi-agent system? State its characteristics and components.", m:5,
      a:"Multi-agent system (MAS) — several autonomous agents interacting in a shared environment to achieve individual or common goals.\nUsed when a problem is too large, distributed or specialised for one agent.\nCharacteristics:\n- Two or more agents\n- Autonomy: each observes, decides and acts\n- Interaction: cooperative, competitive or neutral\nComponents:\n- Environment: shared and dynamic\n- Agents: sensors, reasoning, actuators\n- Communication: message passing or shared state\n- Collaboration: task allocation, information sharing, coordination, conflict management",
      ask:["Explain the architecture of a multi-agent system"] },
    { q:"Explain the types of multi-agent planning: centralised, decentralised and distributed.", m:5,
      a:"<table><tr><th>Type</th><th>Who plans</th><th>Strength</th><th>Weakness</th><th>Example</th></tr><tr><td>Centralised</td><td>One planner sees everything</td><td>Easy coordination</td><td>Bottleneck, single point of failure</td><td>Warehouse controller</td></tr><tr><td>Decentralised</td><td>Each agent alone, local information</td><td>Robust, scalable</td><td>Hard to coordinate</td><td>Autonomous vehicles</td></tr><tr><td>Distributed</td><td>Each agent plans but they share information</td><td>Balance of autonomy and coordination</td><td>Needs communication and conflict resolution</td><td>Delivery agents sharing traffic data</td></tr></table><p><b>Google Maps as multi-agent planning</b> (self-learning topic, not in the decks): agents = drivers, traffic service, route planner; they share positions and speeds; each route is planned on the road graph and re-planned when traffic changes.</p>",
      trap:"Decentralised = agents plan alone. Distributed = agents plan and communicate. They are not synonyms.",
      ask:["Design a multi-agent plan for warehouse robots / food delivery"] }
  ];

  /* ------------------------------------------------ Module 5 */
  N["4.0.0"] = [
    { q:"What is Generative AI? What can it generate?", m:5,
      a:"Progression: AI → Machine Learning → Deep Learning → Transformers → Generative AI\n- AI: machines doing intelligent tasks (chess)\n- ML: learns patterns from data (spam detection)\n- DL: neural networks with many layers (image recognition)\n- Transformers: use attention to learn context (GPT)\n- Generative AI: generates new content (ChatGPT)\nGenerative AI — models that learn the patterns of training data and generate content that is new, statistically consistent with those patterns, and conditioned on the user's prompt.\nGenerates: text, images, code, audio, video, 3D designs, synthetic data.\nTraditional AI decides; generative AI creates.",
      ask:["Define generative AI with examples"] },
    { q:"Differentiate discriminative and generative models.", m:5,
      a:"<table><tr><th></th><th>Discriminative</th><th>Generative</th></tr><tr><td>Learns</td><td>Relationship between data and labels</td><td>Patterns of the content itself</td></tr><tr><td>Flow</td><td>Input → classify / predict</td><td>Prompt → generate</td></tr><tr><td>Output</td><td>Class, number, probability</td><td>Text, image, audio, code</td></tr><tr><td>Question</td><td>Which category is this?</td><td>Can I create new content?</td></tr><tr><td>Example</td><td>Spam classifier, fraud detector</td><td>ChatGPT story, article summary, synthetic records</td></tr></table>",
      trap:"Google Maps choosing a route is not generative: it searches existing paths.",
      ask:["Classify the given systems as generative or not"] },
    { q:"List the families of generative models.", m:5,
      a:"- Autoregressive models: generate step by step, predicting the next token (text, code).\n- GANs: two competing networks, a Generator that creates and a Discriminator that judges (images).\n- VAEs: learn a compressed probabilistic representation and sample from it.\n- Diffusion models: generate by removing noise step by step (images, video).\n- Transformers: use attention between tokens (ChatGPT, LLMs).\nText generation loop: previous tokens → next-token probabilities → select → append → repeat.\nImage generation: text prompt → random noise → denoise step by step → new image.",
      ask:["How does a language model generate text?", "Explain GAN"] }
  ];
  N["4.0.1"] = [
    { q:"What is a Large Language Model? Trace the evolution to ChatGPT.", m:5,
      a:"LLM — a model that learns statistical patterns of language from huge text collections.\nHow it works: text is split into tokens → the model uses the context to predict the next token → repeats to build a response.\nGPT = Generative Pre-trained Transformer: a Transformer pre-trained on large data with billions of parameters.\nEvolution: rules → statistical NLP → RNN / LSTM → attention → Transformer → BERT / GPT → ChatGPT\nBreakthrough: the Transformer, which made large-scale training practical.",
      ask:["Define LLM", "What does GPT stand for?"] },
    { q:"Explain attention and the Transformer.", m:5,
      a:"Problem: 'I deposited money in the bank' vs 'We sat on the bank of the river'. The model must decide which other words matter.\nBefore: RNN, LSTM, GRU process word by word; hard to parallelise; weak on long-range dependencies.\n'Attention Is All You Need' (Vaswani et al., 2017) introduced the Transformer: attention only, no recurrence.\nSelf-attention — each token weighs every other token. In 'The animal didn't cross the road because it was tired', 'it' attends to 'animal'.\nPipeline:\n1. Input text\n2. Tokenization\n3. Embeddings + position information\n4. Transformer blocks (self-attention, then MLP), repeated N times\n5. Next-token probabilities\n6. Generated token is appended; loop.",
      ask:["Why did Transformers replace RNNs?", "Draw the Transformer pipeline"] },
    { q:"Compare BERT, GPT and ChatGPT.", m:5,
      a:"<table><tr><th></th><th>BERT</th><th>GPT</th><th>ChatGPT</th></tr><tr><td>Type</td><td>Encoder Transformer</td><td>Decoder Transformer</td><td>Conversational product on GPT models</td></tr><tr><td>Context</td><td>Bidirectional</td><td>Left to right (autoregressive)</td><td>Same as GPT</td></tr><tr><td>Strong at</td><td>Understanding, classification</td><td>Generation</td><td>Dialogue</td></tr><tr><td>Use</td><td>Sentiment, NER, extractive QA</td><td>Writing, summarising</td><td>Chat assistant</td></tr></table><p><b>Choose:</b> classify the sentiment of 1,000 comments → BERT. Summarise them → GPT.</p>",
      trap:"ChatGPT is not a new architecture. It is GPT plus instruction tuning, alignment and product systems.",
      ask:["Which model would you choose for the given task and why?"] }
  ];
  N["4.0.2"] = [
    { q:"What is prompt engineering? Explain the five elements of a strong prompt.", m:5,
      a:"Prompt — the input given to an LLM. Prompt engineering — designing it so that the output is useful.\nFive elements: Role + Task + Context + Constraints + Output format\n- Role: who the AI acts as ('an experienced Java teacher')\n- Task: what to do ('explain inheritance')\n- Context: background ('students know classes but not inheritance')\n- Constraints: rules ('simple language, one example, under 200 words')\n- Output format: presentation ('a table and a short program')\nWeak: 'Explain AI.'\nStrong: 'Act as a teacher. Explain AI to first-year students using one real-life example, in 5 bullets, no jargon.'",
      ask:["Rewrite the given weak prompt as a strong prompt"] },
    { q:"Explain the prompting techniques: zero-shot, one-shot, few-shot, structured, refine.", m:5,
      a:"- Zero-shot: the task with no examples.\n- One-shot: one example first.\n- Few-shot: several examples to set the pattern.\n- Structured: specify the output schema (bullets, table, JSON, steps).\n- Refine: ask the model to critique, verify and revise its output.\nLimit: prompting shapes framing and format. It does not guarantee correctness; facts still need checking.",
      ask:["Zero-shot vs few-shot prompting with an example"] }
  ];
  N["4.1.0"] = [
    { q:"What is Explainable AI (XAI)? Differentiate interpretability and explainability.", m:5,
      a:"XAI — methods that show which features influenced a prediction, so the decision can be verified, challenged and improved.\nInterpretability — how understandable the model itself is (a small decision tree).\nExplainability — how we explain the behaviour of a model or one prediction, even for a black box.\nWhy needed:\n- Debugging: find a model using the wrong feature\n- Trust: users accept decisions they understand\n- Auditing: show a regulator how decisions are made\n- Oversight: a human can challenge or override\nExample: 'Loan rejected' vs 'rejected because of a previous default and a high debt ratio'.",
      ask:["Why is explainability needed in AI?"] },
    { q:"Explain SHAP.", m:5,
      a:"SHAP (SHapley Additive exPlanations) — based on Shapley values from cooperative game theory: the prediction is shared out fairly among the features.\nHow it explains:\n1. Start from a baseline: the average prediction.\n2. Each feature adds a contribution that pushes the prediction up or down.\n3. Baseline + all contributions = this prediction.\nLoan example: income and credit history lower the risk; existing debt and late payments raise it.\nGives: local explanations (one applicant) and global summaries (the whole dataset).\nStrength: strong theory; common for tree models and tabular data.\nLimit: heavy to compute.",
      ask:["Interpret a given SHAP plot", "What are Shapley values?"] }
  ];
  N["4.1.1"] = [
    { q:"Explain LIME.", m:5,
      a:"LIME (Local Interpretable Model-agnostic Explanations) — explains one prediction with a simple local model.\nSteps:\n1. Choose the case to explain.\n2. Perturb it: make small changes and record the black-box model's outputs.\n3. Fit a simple model (e.g. linear) to that local behaviour.\n4. Read the simple model as the explanation.\nLike a simple map of the area around where you stand.\nStrength: works with any model.\nLimit: results can change with sampling and settings.",
      ask:["How does LIME explain a black-box model?"] },
    { q:"Compare SHAP and LIME. What are the limits of explanations?", m:5,
      a:"<table><tr><th></th><th>SHAP</th><th>LIME</th></tr><tr><td>Idea</td><td>Shapley-value attribution</td><td>Local surrogate model</td></tr><tr><td>Scope</td><td>Local and global</td><td>Local (one prediction)</td></tr><tr><td>Strength</td><td>Strong theory, consistent</td><td>Fast, any model</td></tr><tr><td>Weakness</td><td>Heavy to compute</td><td>Depends on sampling</td></tr></table><p><b>Limits of both:</b> explanations are approximations; they are evidence, not proof of causation; they do not show that the model is fair or correct.</p>",
      ask:["SHAP vs LIME"] }
  ];
  N["4.2.0"] = [
    { q:"What is Responsible AI? State its five principles.", m:5,
      a:"Responsible AI — building AI that people can use safely and fairly.\n- Fair: avoid unjustified disparities and harmful bias.\n- Safe: reduce harmful or unreliable behaviour.\n- Private: protect personal and sensitive information.\n- Transparent: communicate capabilities and limits.\n- Accountable: people and organisations stay responsible.\nApplies across the whole lifecycle: data → model development → deployment → monitoring → back again.\nAccuracy is not trustworthiness: a hiring model 95% accurate on past decisions can still reproduce past discrimination.",
      ask:["Principles of responsible AI", "Why is an accurate model not necessarily a responsible one?"] },
    { q:"What is fairness in AI? How is it monitored?", m:3,
      a:"Fairness — the system does not give unjustified different outcomes to different groups.\nMeasure: Disparate Impact Ratio = favourable-outcome rate of one group ÷ that of the comparison group.\n- Below 0.80: warning sign.\n- ClarifAI (class case) reports 0.92.\nPractice: monitor outcome rates across groups; send risky cases (e.g. low income with missing documents) to human review.",
      ask:["Compute and interpret the disparate impact ratio"] }
  ];
  N["4.2.1"] = { q:"Where does bias enter an AI system? Explain the types of bias.", m:5,
      a:"Bias can enter at every stage:\n- Data: who is represented?\n- Labels: who decided the 'correct' answer?\n- Model: what objective is optimised?\n- Deployment: where and how is it used?\n- Human use: how do people act on the output?\nTypes:\n- Historical bias: past data reflects past discrimination.\n- Representation bias: some groups are under-represented.\n- Measurement bias: labels or features poorly capture what matters.\n- Automation bias: people over-trust automated output.\nExample: a hiring model trained on biased past decisions learns that pattern, with no intent to discriminate.",
      trap:"Bias is not only an algorithm problem. Name the stage it enters.",
      ask:["Identify the type of bias in the given scenario", "How can bias be reduced?"] };
  N["4.2.2"] = { q:"Discuss the privacy risks of generative AI and safe practice.", m:5,
      a:"Risk: anything pasted into an AI tool leaves your control. It may be logged, reviewed or used under that service's policy.\nSensitive inputs: personal data, student records, medical information, passwords, confidential documents.\nAsk first:\n- What data is collected?\n- Who can access it?\n- How is it stored or used?\n- What policy applies?\nSafe practice:\n- Minimise the data.\n- Anonymise where possible.\n- Use approved systems.\n- Follow institutional policy.\nIndia: personal data falls under the Digital Personal Data Protection (DPDP) framework.",
      ask:["Privacy concerns in AI systems"] };
  N["4.2.3"] = [
    { q:"What are AI hallucinations? Why do they happen?", m:5,
      a:"Hallucination (confabulation) — output that is nonsensical, unsupported or factually wrong, stated with confidence.\nLooks like: invented facts, fake references, wrong dates, made-up quotations.\nCauses:\n- Not enough or noisy training data\n- Not enough context in the prompt\n- Not enough constraints on the output\n- The model is optimised for likely text, not for truth\nFluency is not truth.",
      ask:["Define hallucination in LLMs with an example"] },
    { q:"How can hallucinations be reduced? What is RAG?", m:5,
      a:"Mitigation:\n- Ground the model in trusted sources.\n- Verify facts, citations, calculations and dates.\n- Constrain with structured prompts, schemas and allowed sources.\n- Keep a human in the loop for high-impact decisions.\nRAG (Retrieval-Augmented Generation):\nQuestion → retrieve trusted documents → LLM + retrieved context → grounded answer\nRAG improves grounding but is not automatically correct: retrieval and source quality still matter.",
      ask:["Explain RAG with a diagram"] }
  ];
  N["4.2.4"] = { q:"Case: a college wants AI to shortlist internship applicants. Identify the risks and the ethical safeguards.", m:10,
      a:"<table><tr><th>Risk</th><th>Cause</th><th>Safeguard</th></tr><tr><td>Demographic bias</td><td>Features correlated with group</td><td>Monitor shortlist rates across groups</td></tr><tr><td>Historical bias</td><td>Trained on past shortlists</td><td>Audit training labels and outcomes</td></tr><tr><td>Privacy</td><td>Resumes hold personal data</td><td>Minimise, anonymise, restrict access</td></tr><tr><td>Opaque decisions</td><td>Candidates cannot see why</td><td>SHAP / LIME per candidate; allow appeal</td></tr><tr><td>False negatives</td><td>Unusual but strong resume ranked low</td><td>Human review of rejections</td></tr></table><p><b>Decision:</b> deploy only as decision support: fairness audit before launch, an explanation for every score, a human reviews borderline and rejected cases, no automatic rejection.</p><p><b>Golden rule:</b> use AI to amplify human capability, not to outsource human responsibility.</p>",
      ask:["Ethical AI practices", "Apply responsible AI principles to the given case"] };
  N["4.2.5"] = [
    { q:"Why does AI need regulation? Explain the EU AI Act's risk-based approach.", m:5,
      a:"Why regulate: protect rights, reduce harmful uses, set transparency duties, create accountability, manage high-risk systems.\nEU AI Act: rules depend on risk.\n- Unacceptable risk: prohibited practices.\n- High risk: strict requirements.\n- Transparency risk: duties for certain AI interactions and generated content.\n- General-purpose AI: extra obligations for providers.\nIndia: personal data comes under the DPDP framework; broader AI governance is still developing; there is no single AI law.",
      ask:["Classify the given AI system under the EU AI Act"] },
    { q:"Explain the NIST AI Risk Management Framework.", m:5,
      a:"Four functions:\n- GOVERN: policies, roles, accountability, culture\n- MAP: context, stakeholders, risks\n- MEASURE: evaluate performance, fairness, security\n- MANAGE: prioritise, respond, monitor, improve\nTrustworthy AI is: valid and reliable, safe, secure and resilient, accountable and transparent, explainable and interpretable, privacy-enhanced, fair.",
      ask:["Functions of the NIST AI RMF"] }
  ];

  /* ------------------------------------------------ Module 6 */
  N["5.0.0"] = [
    { q:"What is an autonomous AI agent? Why does an LLM need tools to become one?", m:5,
      a:"<p>An LLM alone only continues text: it scores the next token, appends it and repeats. It does not look anything up or run anything.</p><table><tr><th>Limitation</th><th>Fix (tool)</th></tr><tr><td>Weak at exact maths</td><td>Code tool: Python computes it</td></tr><tr><td>Hallucination</td><td>Ground the answer in a tool result</td></tr><tr><td>Frozen knowledge</td><td>API tool fetches live data</td></tr><tr><td>No private data</td><td>Retrieval over private documents</td></tr></table><p><b>Agent</b> = model + tools + a system that runs them, in a loop: think → act → observe.</p><p>User question → model decides if a tool is needed → tool layer runs the call → result → grounded answer.</p>",
      trap:"A bigger model does not fix these. The system around the model does.",
      ask:["Limitations of language models", "Autonomous agents in industry and society: examples"] },
    { q:"When should one agent be split into several? State the gains and the costs.", m:5,
      a:"Where one agent breaks:\n- Context pollution: old tool outputs crowd the context window.\n- Tool confusion: with about 25 similar tools it picks the wrong one.\n- Mixed responsibilities: one prompt as planner, analyst and fact-checker is weak at all three.\nGains: short prompts, clean context, test or swap one agent at a time, independent verification.\nCosts: more LLM calls (slower, costlier), errors pass between agents, coordination effort, harder to trace.\nRule: split only when tools, context or responsibilities start to conflict. Start with one agent.",
      ask:["Single agent vs multi-agent design"] }
  ];
  N["5.0.1"] = [
    { q:"Explain multi-agent systems in smart ecosystems with examples.", m:5,
      a:"MAS — autonomous units in a shared environment that communicate and collaborate.\nExamples:\n- Warehouse robots: task allocation, path coordination, collision avoidance\n- Traffic-flow optimisation\n- Supply-chain logistics\n- Smart grids\n- Specialist LLM agents: planner, analysts, verifier\nAgentic AI on four axes:\n- Autonomy: human-in-the-loop vs autonomous\n- Memory: shared state, audit log, checkpoints\n- Tool usage: APIs, retrieval, code\n- Goal orientation: a planner splits the goal and routes sub-tasks\nBenefit — tasks are divided and verified independently.\nChallenge — coordination, communication, errors passing between agents.",
      ask:["MAS as an emerging paradigm"] },
    { q:"Describe the three ways to wire agents: sequential, network, supervisor.", m:5,
      a:"<table><tr><th>Pattern</th><th>Picture</th><th>Strength</th><th>Weakness</th></tr><tr><td>Sequential</td><td>Assembly line A → B → C</td><td>Predictable, easy to debug</td><td>Rigid</td></tr><tr><td>Network</td><td>Group chat: any agent hands off to any other</td><td>Flexible</td><td>Can loop; hard to audit</td></tr><tr><td>Supervisor</td><td>Manager + specialists</td><td>Adaptive and controlled</td><td>Extra LLM call; single point of failure</td></tr></table><p>All use the same blocks: nodes, edges, shared state.</p><p><b>Financial assistant (class case):</b> Planner → five analysts in parallel → Verifier checks every claim against the tool log → Report. A rejected claim re-runs only that agent, at most 2 retries.</p>",
      ask:["Design a multi-agent workflow for the given task"] }
  ];
  N["5.0.2"] = [
    { q:"Explain tool calling (API calling): the four-step loop.", m:5,
      a:"The model never runs anything; it only reads and writes text.\nParts:\n- LLM: the customer who orders\n- Tool schema: the menu card (name, description, typed parameters)\n- Middleware (LangChain, app code): the waiter; validates and runs the call\n- Tool (Python function / API): the kitchen\nFour steps:\n1. The question + the list of tools go to the LLM.\n2. The LLM replies with a structured request: get_weather(city=\"Thane\", days=3)\n3. Middleware validates the request and runs the real code.\n4. The result goes back; the LLM writes a grounded answer or asks for another tool.\nGuardrails live in step 3.",
      trap:"The LLM does not execute the tool. Your code does.",
      ask:["Write a tool schema for a given function", "Trace a tool call for a weather query"] },
    { q:"Explain retrieval as a tool.", m:5,
      a:"Retrieval — search your own documents first, then let the model answer only from what came back.\nIndexing (once):\ndocuments → split into chunks → index by keywords or embeddings\nAnswering (every question):\nquestion → match against the index → top chunks → prompt = question + chunks → answer with sources\nNo-result rule: if nothing relevant is found, say so instead of guessing.\nThis is RAG, built as a tool an agent can call (e.g. search_docs).",
      ask:["Why is chunking needed?"] },
    { q:"What is workflow orchestration? How do LangChain, LangGraph and MCP help?", m:5,
      a:"Orchestration — controlling which agent or tool runs next, with what state, and when to stop.\n- LangChain: a common interface to models and tools across providers (universal adapter).\n- LangGraph: controls the workflow: multi-step stateful flows, retries, human approval (a flowchart).\n- MCP (Model Context Protocol): a common protocol for AI apps to discover and use tools from external servers (USB-C for AI).\nShared state: one structured object is the single source of truth; each agent writes only its own field.\nGuardrails:\n1. Input validation: schemas reject bad arguments.\n2. Capability limits: each agent has an allow-list of tools.\n3. Grounding check: every number traces to a logged tool output.\n4. Loop and cost limits: retry caps, timeouts.\nCheckpoints: state is saved after every step, so a crash resumes from the last save.",
      ask:["Guardrails in agentic workflows", "What is MCP?"] }
  ];
  N["5.0.3"] = [
    { q:"Compare Human-in-the-Loop, Human-on-the-Loop and Fully Autonomous systems.", m:5,
      a:"<table><tr><th></th><th>Human-in-the-loop</th><th>Human-on-the-loop</th><th>Fully autonomous</th></tr><tr><td>Who acts</td><td>AI recommends; human approves</td><td>System acts; human supervises and can step in</td><td>System selects and executes within its scope</td></tr><tr><td>Speed</td><td>Slow</td><td>Fast</td><td>Fastest, continuous</td></tr><tr><td>Advantage</td><td>Judgement, context</td><td>Speed with oversight</td><td>Speed and scale</td></tr><tr><td>Risk</td><td>Slow review, over-trust</td><td>Late intervention</td><td>Errors spread before anyone steps in</td></tr><tr><td>Best for</td><td>High-impact decisions</td><td>Monitored operations</td><td>Well-defined, validated tasks</td></tr></table><p><b>Example:</b> AI flags an abnormality in a scan; the clinician decides (in the loop).</p>",
      trap:"Fully autonomous does not mean unconstrained. It works inside designed permissions and safety limits.",
      ask:["Which level of autonomy suits the given scenario? Justify."] },
    { q:"Case: a suspicious device joins the campus network. Which level of autonomy would you choose?", m:5,
      a:"Answer: a hybrid.\n- High-confidence threat → block automatically for a limited time and log it.\n- Uncertain or high-impact case → escalate to an analyst.\nWhy: an attack spreads in seconds, so waiting is costly. But blocking a professor's laptop before an exam is also costly.\nA time-limited block is reversible; escalation keeps a human for the hard cases.\nRule: match the autonomy to the impact and reversibility of the action.",
      ask:["Justify human oversight in a given AI system"] }
  ];
  N["5.0.4"] = { q:"Explain the role of AI agents in cybersecurity.", m:5,
      a:"Partly from general references; the deck gives the suspicious-device scenario.\nThe agent follows perceive → analyse → select → execute → observe:\n- Perceive: reads logs and network traffic.\n- Analyse: detects intrusions, malware, phishing, anomalies.\n- Select and execute: isolates a device, blocks traffic, raises an alert.\n- Observe: checks the result and updates.\nAutonomy: reversible actions (a time-limited block) can be automatic with a human on the loop; high-impact ones go to an analyst.\nBenefits: speed, 24×7 monitoring, scale.\nRisks: false alarms, adversarial attacks, over-trust.",
      ask:["AI agents for threat detection and response"] };
  N["5.0.5"] = { q:"Explain the role of AI in smart manufacturing. Contrast Industry 4.0 and 5.0.", m:5,
      a:"<p>The level of autonomy is matched to the risk of the decision.</p><table><tr><th>AI detects</th><th>Action</th><th>Human role</th></tr><tr><td>Defective product</td><td>Alerts an operator</td><td>Human decides</td></tr><tr><td>Early signs of machine failure</td><td>Recommends maintenance</td><td>Human approves</td></tr><tr><td>Small process drift</td><td>Adjusts settings automatically</td><td>Human monitors</td></tr></table><p><b>Industry 4.0:</b> automation. <b>Industry 5.0:</b> adds human-centricity, sustainability and resilience.</p><p><b>Example:</b> warehouse robots coordinated by multi-agent planning (task allocation, path coordination, collision avoidance).</p>",
      ask:["Predictive maintenance using AI", "Industry 4.0 vs Industry 5.0"] };
  N["5.0.6"] = { q:"Explain AI agents in healthcare monitoring.", m:5,
      a:"Partly from general references; the deck gives the patient-alert scenario.\n- Perceive: vital signs from wearables and bedside sensors (heart rate, SpO2, blood pressure).\n- Analyse: detect early signs of deterioration.\n- Act: alert a clinician, with an explanation.\n- Observe: track the response and keep monitoring.\nThe human stays in the loop: the AI flags, the clinician decides.\nBenefits: continuous monitoring, early warning, less load on staff.\nRisks: false alarms, privacy of health data, over-trust, bias across patient groups.",
      ask:["Why must healthcare AI keep a human in the loop?"] };
  N["5.0.7"] = [
    { q:"Explain the decision cycle of an autonomous decision-making system.", m:5,
      a:"1. Perceive: collect data from sensors, cameras, logs.\n2. Analyse: interpret the data and estimate possible outcomes.\n3. Select: choose an action by rules, a learned policy or planning.\n4. Execute: act (brake, adjust a machine, isolate a device).\n5. Observe: use the feedback and repeat.\nA prediction model stops at step 2. A decision-making system links the assessment to an action.\nTesla FSD: cameras detect road users and predict their movement → chooses braking or speed changes. FSD (Supervised) is Level 2: the driver stays responsible.",
      ask:["Apply the decision cycle to an autonomous vehicle"] },
    { q:"Describe ClarifAI as an end-to-end responsible AI system.", m:10,
      a:"Problem: a black-box 'Rejected' gives a loan or scholarship applicant no reason.\nPipeline: application → preprocess (11 features) → rule engine + neural network in parallel → consensus → explain → review\nConsensus = (Rule score + Neural network probability) ÷ 2\nHard rules: credit score below 580, previous default, debt-to-income above 40%.\nDecision:\n- 60% or more and no hard failure → approve\n- 55 to 59%, or missing documents → human review\n- A hard rule fails → reject, with an explanation\nExplain: SHAP (feature contributions) and LIME (local conditions).\nRecourse: the CARE engine suggests next steps (improve the credit score, reduce the amount, add a co-borrower).\nFairness: Disparate Impact Ratio 0.92 against the 0.80 benchmark.",
      ask:["Compute the consensus score and state the decision", "How does ClarifAI combine XAI and human review?"] }
  ];

  /* ------------------------------------------------ Module 1 */
  N["0.0.0"] = { q:"Define Artificial Intelligence.", m:2,
      a:"Artificial Intelligence — the ability of computer systems to perform tasks that normally need human intelligence: learning, reasoning, problem-solving, perception, planning and decision-making.\nThe term was coined by John McCarthy in 1956 (Dartmouth workshop).\nCycle: perception → reasoning → decision → action\nExamples: Google Maps, UPI fraud detection, ChatGPT.\nLimitation: hallucination; there is no single agreed definition of AI.",
      ask:["What is intelligence?", "Give real-life examples of AI"] };
  N["0.0.1"] = [
    { q:"Trace the history of AI (key milestones).", m:5,
      a:"- 1950: Alan Turing, the Imitation Game (Turing Test)\n- 1952: Arthur Samuel's checkers program learns a game\n- 1956: John McCarthy coins 'artificial intelligence' at Dartmouth\n- 1958: LISP, the first AI programming language\n- 1965: first expert system (Feigenbaum and Lederberg)\n- 1966: ELIZA, the first chatbot\n- 1980: XCON, first commercial expert system\n- 1997: IBM Deep Blue beats Garry Kasparov\n- 2011: IBM Watson wins Jeopardy; Apple Siri\n- 2012: deep-learning era begins (neural network recognises cats)\n- 2022: ChatGPT\n- 2023: GPT-4; EU AI Act",
      ask:["Who coined the term AI?", "What is the Turing Test?"] },
    { q:"What is an AI Winter? Explain the two AI Winters.", m:5,
      a:"AI Winter — a period in which interest, funding and research in AI sharply decline.\nFirst AI Winter (1974 to 1980):\n- Systems solved only toy problems\n- Computers were slow, memory limited\n- Governments cut funding (Lighthill report, 1973)\nSecond AI Winter (1987 to 1993):\n- Expert systems were costly to build and maintain\n- Systems could not learn\n- Special AI hardware became obsolete\nRevival after 2012: GPUs, big data, deep learning.",
      ask:["Causes of the AI Winter"] }
  ];
  N["0.0.2"] = { q:"What are the foundations of AI?", m:3,
      a:"The disciplines AI draws on:\n- Philosophy: logic, reasoning, mind\n- Mathematics: logic, probability, computation\n- Economics: decision making, utility\n- Neuroscience: how the brain processes information\n- Psychology: how humans think and act\n- Computer engineering: fast machines\n- Control theory: systems that act on feedback\n- Linguistics: language and thought",
      ask:["Which disciplines contributed to AI?"] };
  N["0.0.3"] = { q:"Explain the components of an AI program.", m:5,
      a:"1. Knowledge base — facts and rules. It should be updated as the program learns.\n2. Navigational capability — control strategies that decide which rule to apply at each step.\n3. Inferencing — searches the knowledge base and derives new knowledge.\nCharacteristics of knowledge:\n- Voluminous: needs proper structuring\n- May be incomplete and imprecise\n- Dynamic: keeps changing\nExample: a medical expert system (facts about diseases, rules, an inference engine).",
      ask:["Components of AI"] };
  N["0.1.0"] = { q:"Explain the categorization of intelligent systems (four approaches to AI).", m:5,
      a:"<table><tr><th></th><th>Humanly</th><th>Rationally</th></tr><tr><th>Thinking</th><td>Think like humans: cognitive modelling</td><td>Think rationally: laws of thought (logic)</td></tr><tr><th>Acting</th><td>Act like humans: Turing Test</td><td>Act rationally: rational agent</td></tr></table><ol><li><b>Acting humanly:</b> Turing Test. Needs NLP, knowledge representation, automated reasoning, machine learning (+ vision and robotics for the total test).</li><li><b>Thinking humanly:</b> cognitive science; introspection and psychological experiments.</li><li><b>Thinking rationally:</b> logic. Limits: humans are not always rational; logic cannot express uncertainty.</li><li><b>Acting rationally:</b> do the right thing, i.e. maximise goal achievement with the available information. Modern AI uses this.</li></ol>",
      ask:["Classify the given system (e.g. ChatGPT, chess engine) into an approach"] };
  N["0.1.1"] = [
    { q:"Define an agent and a rational agent. What does rationality depend on?", m:5,
      a:"Agent — anything that perceives its environment through sensors and acts on it through actuators.\n- Percept: input at one instant. Percept sequence: the full history.\n- Agent function: maps percept sequences to actions.\n- Agent = Architecture + Agent program\nRational agent — for each percept sequence, selects the action expected to maximise its performance measure, given the percepts and its built-in knowledge.\nRationality depends on:\n- Performance measure\n- Prior knowledge of the environment\n- Possible actions\n- Percept sequence so far\nRational ≠ omniscient: it maximises expected, not actual, performance.",
      ask:["Rationality vs omniscience"] },
    { q:"Give the PEAS description of an automated taxi driver.", m:5,
      a:"<table><tr><th>P</th><td>Performance measure</td><td>Safety, time, legal drive, comfort</td></tr><tr><th>E</th><td>Environment</td><td>Roads, other cars, pedestrians, road signs</td></tr><tr><th>A</th><td>Actuators</td><td>Steering, accelerator, brake, signal, horn</td></tr><tr><th>S</th><td>Sensors</td><td>Cameras, sonar, GPS, speedometer, odometer, engine sensors</td></tr></table><p><b>Vacuum world:</b> percepts [location, status]; actions Left, Right, Suck, NoOp; rule: if dirty then Suck, else move to the other square.</p>",
      ask:["PEAS for a given system: Roomba, medical diagnosis, Google Maps, part-picking robot"] }
  ];
  N["0.1.2"] = { q:"Explain the types (properties) of agent environments with examples.", m:5,
      a:"<table><tr><th>Property</th><th>Meaning</th><th>Example</th></tr><tr><td>Fully / partially observable</td><td>Sensors see the whole state or not</td><td>Chess / driving</td></tr><tr><td>Deterministic / stochastic</td><td>Next state fixed by the action or not</td><td>Tic-tac-toe / Mars robot</td></tr><tr><td>Episodic / sequential</td><td>Current action affects later ones or not</td><td>Mail sorting / chess</td></tr><tr><td>Static / dynamic</td><td>Environment changes while the agent thinks or not</td><td>Crossword / football</td></tr><tr><td>Discrete / continuous</td><td>Finite or continuous states and actions</td><td>Chess / driving</td></tr><tr><td>Single / multi-agent</td><td>One agent or several</td><td>Crossword / taxi driving</td></tr></table><p><b>Taxi driving:</b> partially observable, stochastic, sequential, dynamic, continuous, multi-agent.</p>",
      trap:"Justify each property in one phrase. A bare list of labels loses marks.",
      ask:["Classify the environment of the given system"] };
  N["0.1.3"] = [
    { q:"Explain the types of agents.", m:10,
      a:"<table><tr><th>Agent</th><th>Decides using</th><th>Example</th></tr><tr><td>Simple reflex</td><td>Condition-action rules on the current percept. Needs a fully observable environment.</td><td>Spam filter, thermostat</td></tr><tr><td>Model-based reflex</td><td>Internal state + model of the world. Works when partially observable.</td><td>Roomba</td></tr><tr><td>Goal-based</td><td>Goal information; searching and planning</td><td>Google Maps</td></tr><tr><td>Utility-based</td><td>Utility function: state → number (how good)</td><td>Uber (fastest, cheapest)</td></tr><tr><td>Learning</td><td>Improves from experience</td><td>ChatGPT, Netflix</td></tr></table><p>Each type adds one thing to the one above it.</p>",
      ask:["Identify the type of agent for the given system and justify", "Goal-based vs utility-based agent"] },
    { q:"Explain the learning agent and its four components.", m:5,
      a:"- Performance element: selects the actions (the agent proper).\n- Critic: tells how well the agent is doing against a performance standard.\n- Learning element: uses the critic's feedback to improve the performance element.\n- Problem generator: suggests new, exploratory actions.\nFlow: sensors → performance element → actuators; critic → learning element → changes the performance element.",
      trap:"Name all four. The problem generator is the one students forget.",
      ask:["Draw the learning agent"] }
  ];
  N["0.1.4"] = { q:"What is agentic AI? State its components and architectures.", m:5,
      a:"<p><b>Agentic AI:</b> AI that acts autonomously towards a goal: plans multi-step work, uses tools and memory, and adapts from feedback.</p><table><tr><th>Component</th><th>Example: book the cheapest flight to Delhi</th></tr><tr><td>Goal</td><td>Cheapest flight to Delhi</td></tr><tr><td>Reasoning</td><td>Pick the best flight on cost and time</td></tr><tr><td>Planning</td><td>Search → compare → book → confirm</td></tr><tr><td>Memory</td><td>Preferred airline, window seat</td></tr><tr><td>Tool usage</td><td>Google Flights, Gmail, payment gateway</td></tr><tr><td>Perception</td><td>Reads prices, weather</td></tr><tr><td>Reflection</td><td>Rebooks if the flight is unavailable</td></tr><tr><td>Action</td><td>Books the ticket</td></tr></table><p><b>Architectures:</b> single-agent; multi-agent: vertical (hierarchy), horizontal (same level), hybrid.</p><p><b>Examples:</b> AutoGPT, Devin AI, LangChain Agents, CrewAI.</p>",
      ask:["Single-agent vs multi-agent architecture"] };
  N["0.1.5"] = { q:"Compare Traditional AI and Agentic AI.", m:5,
      a:"<table><tr><th>Axis</th><th>Traditional AI</th><th>Agentic AI</th></tr><tr><td>Autonomy</td><td>Reactive; needs input each time</td><td>Acts on its own within permissions</td></tr><tr><td>Memory</td><td>Limited</td><td>Keeps context across steps</td></tr><tr><td>Tool usage</td><td>Limited</td><td>APIs, browsers, databases</td></tr><tr><td>Goal orientation</td><td>Single response</td><td>Multi-step workflow that completes a goal</td></tr></table><p><b>Example, 'Plan my Goa trip':</b> traditional AI returns an itinerary; agentic AI searches, books the tickets and hotel, and sends the confirmation.</p>",
      trap:"Use exactly these four axes: they are in the learning outcome.",
      ask:["Is the given system traditional or agentic AI? Justify"] };
  N["0.1.6"] = { q:"Discuss applications of AI in modern society, with risks.", m:5,
      a:"<table><tr><th>Domain</th><th>Application</th></tr><tr><td>Healthcare</td><td>Diagnosis, patient monitoring</td></tr><tr><td>Finance</td><td>UPI fraud detection, algorithmic trading</td></tr><tr><td>Education</td><td>Personalised learning</td></tr><tr><td>Agriculture</td><td>Precision farming, crop disease detection</td></tr><tr><td>Governance</td><td>Citizen services, chatbots</td></tr><tr><td>Transport</td><td>Google Maps, Tesla Autopilot</td></tr></table><p><b>Risks:</b></p><ul><li>Technical: hallucination, black-box decisions</li><li>Societal: job displacement, misinformation, deepfakes, surveillance</li><li>Governance: accountability, regulation</li></ul><p><b>Mitigation:</b> human oversight, explainability, responsible-AI practice, regulation.</p>",
      ask:["Suggest an AI solution for a given domain and analyse it"] };

  /* ------------------------------------------------ Module 2 */
  N["1.0.0"] = { q:"What is a problem-solving agent? State its phases.", m:3,
      a:"Problem-solving agent — a goal-based agent that finds a sequence of actions leading to a goal, when no single action is enough.\nPhases:\n1. Goal formulation: decide the goal.\n2. Problem formulation: decide the states and actions to consider.\n3. Search: find a sequence of actions.\n4. Execute: carry it out.\nIn short: formulate → search → execute.",
      ask:["Explain the formulate-search-execute cycle"] };
  N["1.0.1"] = { q:"What are the five components of a well-defined problem?", m:5,
      a:"1. Initial state — where the agent starts.\n2. Actions — what can be done in a state.\n3. Transition model — the result of an action: RESULT(s, a).\n4. Goal test — is this state a goal?\n5. Path cost — a number for each path (sum of step costs).\nSolution — a path from the initial state to a goal state.\nOptimal solution — the solution with the lowest path cost.",
      ask:["Define state space, solution and optimal solution"] };
  N["1.0.2"] = { q:"Formulate the 8-puzzle as a search problem.", m:5,
      a:"- States: positions of the 8 tiles and the blank on a 3 × 3 board.\n- Initial state: any given arrangement.\n- Actions: move the blank Left, Right, Up, Down.\n- Transition model: the blank swaps with the tile in that direction.\n- Goal test: does the board match the goal arrangement?\n- Path cost: 1 per move.\nOther example problems: vacuum world, 8-queens, water jug, missionaries and cannibals, route finding.",
      ask:["Formulate the vacuum world / 8-queens / route finding problem"] };
  N["1.0.3"] = { q:"Formulate the water jug problem (4-gallon and 3-gallon jug, get 2 gallons).", m:5,
      a:"State: (x, y), x = water in the 4-gallon jug (0 to 4), y = water in the 3-gallon jug (0 to 3).\nInitial state: (0, 0). Goal: (2, y).\nOperators:\n- Fill the 4-jug: (x, y) → (4, y)\n- Fill the 3-jug: (x, y) → (x, 3)\n- Empty the 4-jug: (x, y) → (0, y)\n- Empty the 3-jug: (x, y) → (x, 0)\n- Pour 4 → 3 until the 3-jug is full or the 4-jug is empty\n- Pour 3 → 4 until the 4-jug is full or the 3-jug is empty\nOne solution:\n(0,0) → (0,3) → (3,0) → (3,3) → (4,2) → (0,2) → (2,0)",
      trap:"Name the operator on every arrow and state the goal state you reached.",
      ask:["Missionaries and cannibals formulation"] };
  N["1.0.4"] = { q:"What is state-space representation?", m:3,
      a:"State space — the set of all states reachable from the initial state by any sequence of actions.\nIt is drawn as a graph:\n- Nodes = states\n- Edges = actions\n- Path = a sequence of states joined by actions\nSearching = exploring this graph from the initial state until a goal state is found.\nSearch strategies are compared on: completeness, optimality, time complexity, space complexity.\nb = branching factor, d = depth of the shallowest goal, m = maximum depth.",
      ask:["Draw the state space of the vacuum world"] };
  N["1.1.0"] = { q:"Explain Breadth-First Search (BFS).", m:5,
      a:"BFS — expands the shallowest unexpanded node first, level by level.\nData structure: FIFO queue.\nSteps:\n1. Put the start node in the queue.\n2. Remove the front node; if it is the goal, stop.\n3. Add its unvisited children at the back.\n4. Repeat.\nProperties:\n- Complete: yes\n- Optimal: yes, when all step costs are equal\n- Time: O(b^d)\n- Space: O(b^d)\nWeakness: memory.",
      ask:["Give the order of node expansion for BFS on the given tree"] };
  N["1.1.1"] = { q:"Explain Depth-First Search (DFS).", m:5,
      a:"DFS — expands the deepest unexpanded node first; backtracks when it reaches a dead end.\nData structure: LIFO stack.\nProperties:\n- Complete: no (can go down an infinite path)\n- Optimal: no\n- Time: O(b^m)\n- Space: O(bm), linear\nAdvantage: very little memory.\nDepth-limited search (DLS): DFS with a depth limit l. Incomplete if l is less than d.",
      ask:["BFS vs DFS", "Order of expansion for DFS on the given tree"] };
  N["1.1.2"] = { q:"Explain Iterative Deepening Search (IDS). Compare BFS, DFS and IDS.", m:5,
      a:"<p><b>IDS:</b> runs depth-limited search with limit 0, 1, 2, … until the goal is found. Combines the low memory of DFS with the completeness of BFS.</p><table><tr><th></th><th>BFS</th><th>DFS</th><th>IDS</th></tr><tr><td>Complete</td><td>Yes</td><td>No</td><td>Yes</td></tr><tr><td>Optimal</td><td>Yes (equal costs)</td><td>No</td><td>Yes (equal costs)</td></tr><tr><td>Time</td><td>O(b<sup>d</sup>)</td><td>O(b<sup>m</sup>)</td><td>O(b<sup>d</sup>)</td></tr><tr><td>Space</td><td>O(b<sup>d</sup>)</td><td>O(bm)</td><td>O(bd)</td></tr></table><p>IDS is preferred when the search space is large and the depth of the solution is unknown.</p>",
      trap:"IDS repeats the upper levels, but the cost is small because most nodes are at the bottom level.",
      ask:["Show the IDS iterations on the given tree"] };
  N["1.2.0"] = { q:"What is a heuristic function? When is it admissible?", m:5,
      a:"Heuristic function h(n) — the estimated cost of the cheapest path from node n to the goal.\nAdmissible — h(n) never overestimates: h(n) ≤ h*(n), the true cost. It is optimistic.\nAdmissibility guarantees that A* is optimal.\nExamples:\n- Route finding: straight-line distance.\n- 8-puzzle h1: number of misplaced tiles.\n- 8-puzzle h2: total Manhattan distance of the tiles from their goal positions.\nh2 ≥ h1, so h2 dominates h1 and searches fewer nodes.",
      ask:["Compute h1 and h2 for a given 8-puzzle state", "Informed vs uninformed search"] };
  N["1.2.1"] = { q:"Explain Best-First Search.", m:3,
      a:"Best-first search — expands the node with the best value of an evaluation function f(n).\nData structure: a priority queue (OPEN list) ordered by f; expanded nodes go to CLOSED.\nSteps:\n1. Put the start node in OPEN.\n2. Remove the node with the lowest f.\n3. If it is the goal, stop.\n4. Otherwise generate its successors, compute f, add them to OPEN.\n5. Repeat.\nSpecial cases:\n- Greedy best-first: f(n) = h(n)\n- A*: f(n) = g(n) + h(n)",
      ask:["What are the OPEN and CLOSED lists?"] };
  N["1.2.2"] = { q:"Explain Greedy Best-First Search and its limitations.", m:5,
      a:"Greedy best-first — expands the node that appears closest to the goal: f(n) = h(n).\nIt ignores the cost already paid, g(n).\nProperties:\n- Complete: no (can loop)\n- Optimal: no\n- Time and space: O(b^m)\nExample: edges S→A 1, S→B 4, A→B 2, A→G 12, B→G 5; h(S) = 7, h(A) = 6, h(B) = 4, h(G) = 0.\nGreedy: from S pick B (h = 4, lower than A's 6), then G. Path S → B → G, cost 9.\nThe optimal path is S → A → B → G, cost 8. Greedy misses it.",
      ask:["Greedy vs A*"] };
  N["1.2.3"] = [
    { q:"Explain the A* algorithm.", m:5,
      a:"f(n) = g(n) + h(n)\n- g(n): cost from the start to n\n- h(n): estimated cost from n to the goal\n- f(n): estimated cost of the cheapest solution through n\nAlgorithm:\n1. OPEN = {start}, f(start) = h(start).\n2. Move the node with the lowest f from OPEN to CLOSED.\n3. If it is the goal, stop and trace the path back.\n4. For each successor compute g, h, f. Add to OPEN, or update if the new g is lower.\n5. Repeat.\nProperties: complete; optimal if h is admissible.\nProof idea: a suboptimal goal G2 has f(G2) > C*. Any node n on the optimal path has f(n) ≤ C*. So A* expands n before G2.",
      trap:"Stop when the goal is selected for expansion, not when it is first generated.",
      ask:["Prove that A* is optimal"] },
    { q:"Apply A*: edges S→A 1, S→B 4, A→B 2, A→G 12, B→G 5; h(S) = 7, h(A) = 6, h(B) = 4, h(G) = 0.", m:5,
      a:"<table><tr><th>Step</th><th>Expand</th><th>OPEN (g + h = f)</th></tr><tr><td>0</td><td></td><td>S (0 + 7 = 7)</td></tr><tr><td>1</td><td>S</td><td>A (1 + 6 = 7), B (4 + 4 = 8)</td></tr><tr><td>2</td><td>A</td><td>B (3 + 4 = 7, updated via A), G (13 + 0 = 13)</td></tr><tr><td>3</td><td>B</td><td>G (8 + 0 = 8, updated via B)</td></tr><tr><td>4</td><td>G</td><td>Goal reached</td></tr></table><p><b>Path:</b> S → A → B → G. <b>Cost:</b> 1 + 2 + 5 = 8.</p>",
      trap:"When a cheaper route to a node in OPEN is found, update its g and its parent (B: 4 → 3).",
      ask:["Perform A* on the given graph; show the OPEN and CLOSED lists"] }
  ];
  N["1.3.0"] = { q:"Explain hill climbing, its problems and its variants.", m:5,
      a:"Local search — keeps one current state and moves to a neighbour; the path does not matter, only the final state.\nHill climbing — repeatedly move to a better neighbour; stop when no neighbour is better.\nProblems:\n- Local maximum: a peak lower than the global maximum.\n- Plateau: flat area; all neighbours are equal.\n- Ridge: a slope that cannot be climbed in a single move.\nVariants:\n- Simple: takes the first better neighbour.\n- Steepest-ascent: looks at all neighbours, takes the best.\n- Stochastic: picks randomly among the better neighbours.\n- Random-restart: restarts from random states and keeps the best.\nExample: 8-queens with h = number of attacking pairs.",
      ask:["Draw the state-space landscape and label it", "Why does hill climbing get stuck?"] };
  N["1.3.1"] = { q:"Explain simulated annealing.", m:5,
      a:"Idea — escape local maxima by sometimes accepting a worse move; do so less often as time passes.\nAnalogy: annealing of a metal: heat it, then cool it slowly so it settles into its lowest-energy state.\nSteps:\n1. Start with a high temperature T.\n2. Pick a random neighbour; compute ΔE = value(next) − value(current).\n3. If ΔE > 0, accept the move.\n4. Else accept it with probability e^(ΔE / T).\n5. Lower T according to the cooling schedule; repeat until T is about 0.\nHigh T: many bad moves accepted (exploration). Low T: behaves like hill climbing.\nIf T falls slowly enough, it finds the global optimum with probability close to 1.\nApplications: VLSI layout, airline scheduling.",
      trap:"A bad move is accepted with probability e^(ΔE/T), where ΔE is negative. It is not always rejected.",
      ask:["Hill climbing vs simulated annealing"] };
  N["1.3.2"] = { q:"Explain the genetic algorithm.", m:5,
      a:"Genetic algorithm (John Holland, 1970s) — search based on natural selection: survival of the fittest.\nTerms:\n- Population: a set of candidate solutions\n- Individual (chromosome): one solution, coded as a string\n- Fitness function: higher value = better solution\nLoop:\n1. Initialise a random population.\n2. Evaluate the fitness of each individual.\n3. Selection: choose parents with probability proportional to fitness (roulette wheel).\n4. Crossover: swap parts of two parents at a crossover point.\n5. Mutation: randomly change a small part.\n6. Repeat until convergence.\n8-queens: fitness = number of non-attacking pairs (maximum 28). Selection probability = fitness ÷ total, e.g. 24 ÷ 78 = 31%.",
      ask:["Explain selection, crossover and mutation with an example"] };
  N["1.4.0"] = [
    { q:"What is adversarial search? Explain the minimax algorithm.", m:5,
      a:"Adversarial search — search in competitive multi-agent environments (games), where the agents' goals conflict.\nZero-sum game — one player's gain is the other's loss.\nGame as a search problem: initial state, PLAYER(s), ACTIONS(s), RESULT(s, a), TERMINAL-TEST(s), UTILITY(s, p).\nMinimax:\n- MAX picks the move with the highest value.\n- MIN picks the move with the lowest value.\n- Each assumes the other plays optimally.\nSteps:\n1. Generate the game tree down to the terminal states.\n2. Apply the utility function to the leaves.\n3. Back the values up: MIN node = minimum of its children, MAX node = maximum.\n4. At the root, MAX chooses the child with the highest value.\nTime O(b^m), space O(bm).",
      ask:["Properties of minimax"] },
    { q:"Apply minimax: MAX root with MIN children B (3, 12, 8), C (2, 4, 6), D (14, 5, 2).", m:5,
      a:"1. B = min(3, 12, 8) = 3\n2. C = min(2, 4, 6) = 2\n3. D = min(14, 5, 2) = 2\n4. Root = max(3, 2, 2) = 3\nAnswer: the value of the game is 3; MAX moves to B.",
      trap:"Write the backed-up value on every node of the tree.",
      ask:["Find the minimax value and the best move for the given tree"] }
  ];
  N["1.4.1"] = [
    { q:"Explain alpha-beta pruning.", m:5,
      a:"Purpose — gives the same answer as minimax but skips branches that cannot change the decision.\n- α: best (highest) value found so far for MAX. Starts at −∞.\n- β: best (lowest) value found so far for MIN. Starts at +∞.\nPrune when α ≥ β.\nRules:\n- At a MAX node, update α; at a MIN node, update β.\n- Pass α and β down to the children; pass node values up.\n- Traverse depth-first, left to right.\nBest case (good move ordering): O(b^(m/2)), so it can search twice as deep.",
      trap:"Pruning never changes the root value. Only the number of nodes examined changes.",
      ask:["Why does move ordering matter?"] },
    { q:"Apply alpha-beta pruning: MAX root with MIN children B (3, 12, 8), C (2, 4, 6), D (14, 5, 2).", m:5,
      a:"1. B: leaves 3, 12, 8 → B = 3. Root α = 3.\n2. C: first leaf 2 → β = 2. Now α (3) ≥ β (2): prune leaves 4 and 6. C ≤ 2.\n3. D: 14 → β = 14; 5 → β = 5; 2 → β = 2. No pruning (the cut comes only at the last leaf). D = 2.\n4. Root = max(3, 2, 2) = 3.\nAnswer: value 3, move to B; 2 leaves pruned (4 and 6).",
      ask:["Mark the pruned branches on the given tree"] }
  ];

  /* ------------------------------------------------ Module 3 */
  N["2.0.0"] = { q:"Explain a knowledge-based agent.", m:5,
      a:"Knowledge-based agent = Knowledge base (KB) + Inference engine\n- Knowledge base: a set of sentences about the world, in a knowledge representation language.\n- Inference engine: derives new sentences from old ones.\nOperations:\n1. TELL the KB what it perceives.\n2. ASK the KB what action to take.\n3. TELL the KB that the action was performed.\nPercepts → [KB ⇄ inference engine] → action\nExample: the Wumpus world agent infers safe squares from breeze and stench percepts.",
      ask:["Draw the architecture of a knowledge-based agent", "Give the PEAS of the Wumpus world"] };
  N["2.0.1"] = { q:"What is knowledge representation? Explain the knowledge engineering process.", m:5,
      a:"Knowledge representation — expressing facts about the world in a form a computer can store and reason with (logic, semantic networks, frames, ontologies).\nKnowledge engineering process:\n1. Identify the task.\n2. Assemble the relevant knowledge.\n3. Decide the vocabulary: predicates, functions, constants (the ontology).\n4. Encode general knowledge of the domain (axioms).\n5. Encode the specific problem instance.\n6. Pose queries to the inference procedure.\n7. Debug the knowledge base.",
      ask:["Steps of knowledge engineering", "Types of knowledge representation"] };
  N["2.0.2"] = [
    { q:"What is first-order predicate logic (FOL)? State its building blocks.", m:3,
      a:"FOL — describes the world as objects, their properties and the relations between them.\n- Constants: objects (John, Mumbai)\n- Predicates: properties and relations: Likes(John, Pizza)\n- Functions: FatherOf(John)\n- Variables: x, y\n- Quantifiers: ∀ (for all), ∃ (there exists)\nRules of thumb:\n- 'All / every' → ∀ with →\n- 'Some' → ∃ with ∧",
      trap:"∀ goes with →. ∃ goes with ∧. Mixing them changes the meaning.",
      ask:["Propositional logic vs predicate logic"] },
    { q:"Convert to FOL: (a) All humans are mortal. (b) Some students like AI. (c) Every student who studies passes. (d) No dog is a cat.", m:5,
      a:"- (a) ∀x (Human(x) → Mortal(x))\n- (b) ∃x (Student(x) ∧ Likes(x, AI))\n- (c) ∀x ((Student(x) ∧ Studies(x)) → Passes(x))\n- (d) ∀x (Dog(x) → ¬Cat(x))\nMethod: name the predicates and constants first, then write the sentence.",
      ask:["Convert the given English sentences into predicate logic"] }
  ];
  N["2.0.3"] = { q:"Explain propositional logic and its connectives.", m:5,
      a:"<p><b>Proposition:</b> a statement that is either true or false. Questions and commands are not propositions.</p><table><tr><th>Connective</th><th>Symbol</th><th>Example</th></tr><tr><td>Negation</td><td>¬P</td><td>It is not raining</td></tr><tr><td>Conjunction</td><td>P ∧ Q</td><td>It is raining and cold</td></tr><tr><td>Disjunction</td><td>P ∨ Q</td><td>It is raining or cold</td></tr><tr><td>Implication</td><td>P → Q</td><td>If it rains, the road is wet</td></tr><tr><td>Biconditional</td><td>P ⇔ Q</td><td>Wet if and only if it rains</td></tr></table><p><b>Tautology:</b> always true. <b>Contradiction:</b> always false.</p><p><b>Inference rules:</b> Modus ponens: from P → Q and P, infer Q. And-elimination: from P ∧ Q, infer P.</p><p><b>Limit:</b> no objects or quantifiers; 'all men are mortal' needs one symbol per man.</p>",
      ask:["Write the truth table for implication", "State the inference rules"] };
  N["2.0.4"] = { q:"What is unification? Give an example.", m:3,
      a:"Unification — finding a substitution that makes two logical expressions identical.\nExample:\n- Rule: Missile(x) → Weapon(x)\n- Fact: Missile(M1)\n- Unifier: {x / M1}\n- Result: Weapon(M1)\nMore: Knows(John, x) and Knows(y, Mary) unify with {y / John, x / Mary}.\nFails: Knows(John, x) and Knows(x, Mary), unless the variables are renamed first.\nUsed in: resolution, forward chaining, backward chaining.",
      ask:["Find the most general unifier of the given pair"] };
  N["2.0.5"] = [
    { q:"What is resolution? State the steps of a resolution proof and of CNF conversion.", m:5,
      a:"Resolution — an inference rule on clauses: from (A ∨ B) and (¬B ∨ C), infer (A ∨ C).\nProof by contradiction (refutation):\n1. Convert the facts into FOL.\n2. Convert them into CNF.\n3. Negate the statement to be proved and add it.\n4. Resolve pairs of clauses until the empty clause appears.\nEmpty clause → contradiction → the statement is proved.\nCNF conversion:\n1. Eliminate ⇔ and →: (P → Q) becomes (¬P ∨ Q).\n2. Move ¬ inwards (De Morgan).\n3. Standardise the variables.\n4. Skolemise: remove ∃.\n5. Drop ∀.\n6. Distribute ∨ over ∧.",
      trap:"Negate the goal, not the premises.",
      ask:["Convert the given sentence to CNF", "What is a Horn clause?"] },
    { q:"Prove by resolution: John likes all kinds of food. Apples are food. Anything anyone eats and is not killed by is food. Bill eats peanuts and is alive. Prove: John likes peanuts.", m:10,
      a:"<p><b>1. FOL</b></p><ul><li>∀x (Food(x) → Likes(John, x))</li><li>Food(Apple)</li><li>∀x ∀y ((Eats(y, x) ∧ ¬Killed(y)) → Food(x))</li><li>Eats(Bill, Peanuts) ∧ Alive(Bill)</li><li>∀y (Alive(y) → ¬Killed(y))</li></ul><p><b>2. CNF clauses</b></p><ol><li>¬Food(x) ∨ Likes(John, x)</li><li>Food(Apple)</li><li>¬Eats(y, z) ∨ Killed(y) ∨ Food(z)</li><li>Eats(Bill, Peanuts)</li><li>Alive(Bill)</li><li>¬Alive(w) ∨ ¬Killed(w)</li></ol><p><b>3. Negated goal:</b> 7. ¬Likes(John, Peanuts)</p><p><b>4. Resolution</b></p><ul><li>7 + 1 {x / Peanuts} → ¬Food(Peanuts)</li><li>+ 3 {z / Peanuts} → ¬Eats(y, Peanuts) ∨ Killed(y)</li><li>+ 4 {y / Bill} → Killed(Bill)</li><li>+ 6 {w / Bill} → ¬Alive(Bill)</li><li>+ 5 → empty clause</li></ul><p>Empty clause reached, so the negation is false. Hence John likes peanuts.</p>",
      trap:"Write the substitution beside every step. The fact 'alive means not killed' must be stated as its own sentence.",
      ask:["Prove the given statement using resolution"] }
  ];
  N["2.0.6"] = [
    { q:"Explain forward chaining and backward chaining. Compare them.", m:5,
      a:"<table><tr><th></th><th>Forward chaining</th><th>Backward chaining</th></tr><tr><td>Starts from</td><td>Known facts</td><td>The goal</td></tr><tr><td>Direction</td><td>Facts → conclusion</td><td>Goal → sub-goals → facts</td></tr><tr><td>Type</td><td>Data-driven</td><td>Goal-driven</td></tr><tr><td>Search</td><td>Breadth-first style</td><td>Depth-first style</td></tr><tr><td>Stops when</td><td>The goal is derived or no new fact</td><td>All sub-goals are proved</td></tr><tr><td>Used in</td><td>Monitoring, planning, control</td><td>Diagnosis, Prolog</td></tr></table><p>Both use Horn clauses (A ∧ B → C) and modus ponens.</p>",
      ask:["Data-driven vs goal-driven reasoning"] },
    { q:"Prove 'West is a criminal' by forward chaining.", m:5,
      a:"Rules:\n- R1: American(x) ∧ Weapon(y) ∧ Sells(x, y, z) ∧ Hostile(z) → Criminal(x)\n- R2: Missile(x) ∧ Owns(Nono, x) → Sells(West, x, Nono)\n- R3: Missile(x) → Weapon(x)\n- R4: Enemy(x, America) → Hostile(x)\nFacts: American(West), Owns(Nono, M1), Missile(M1), Enemy(Nono, America)\nForward chaining:\n1. R3 {x / M1} → Weapon(M1)\n2. R2 {x / M1} → Sells(West, M1, Nono)\n3. R4 {x / Nono} → Hostile(Nono)\n4. R1 {x / West, y / M1, z / Nono} → Criminal(West)\nBackward chaining runs the same rules in reverse: start from Criminal(West), then prove American(West), Weapon(y), Sells(West, y, z), Hostile(z) as sub-goals.",
      ask:["Solve the same problem by backward chaining; draw the proof tree"] }
  ];
  N["2.0.7"] = { q:"Explain semantic networks with an example.", m:5,
      a:"<p><b>Semantic network:</b> knowledge as a graph. Nodes = objects, concepts or classes. Labelled links = relationships.</p><p><b>Common links:</b> IS-A, INSTANCE-OF, HAS-A, PART-OF.</p><pre>Animal\n ├─ IS-A ← Mammal ← IS-A ─ Cat, Dog\n └─ IS-A ← Bird   ← IS-A ─ Sparrow, Penguin\nBird ── can ──→ Fly\nPenguin ── cannot ──→ Fly   (exception)</pre><p><b>Inheritance:</b> a property stored at a class is inherited by its subclasses, so it is written once. Exceptions are stored explicitly.</p><p><b>Strength:</b> visual and intuitive. <b>Limit:</b> exceptions and quantifiers are awkward.</p>",
      ask:["Draw a semantic network for the given sentences"] };
  N["2.0.8"] = { q:"What is an ontology? State its building blocks.", m:5,
      a:"Ontology — a formal, shared specification of the concepts and relationships of a domain: the schema of meaning.\nBuilding blocks:\n- Classes: Student, Company\n- Individuals: Riya, TCS\n- Object properties: hasSkill, offersJob\n- Data properties: CGPA = 8.4\n- Constraints: a Job requires at least one Skill\nGives: a common vocabulary, consistency, reasoning.\nTaxonomy vs ontology: a taxonomy only classifies (IS-A); an ontology adds properties, relations and constraints.",
      ask:["Ontology vs taxonomy"] };
  N["2.0.9"] = { q:"What is a knowledge graph? How is it different from an ontology?", m:5,
      a:"<p><b>Knowledge graph:</b> connected facts about real entities, stored as typed relationships (triples).</p><p>Triple: Subject — Predicate → Object, e.g. (Riya, hasSkill, Python).</p><table><tr><th></th><th>Ontology</th><th>Knowledge graph</th></tr><tr><td>Holds</td><td>Schema: classes, properties, constraints</td><td>Facts about actual entities</td></tr><tr><td>Answers</td><td>What kinds of things and links are valid?</td><td>What is known about this entity?</td></tr><tr><td>Example</td><td>Student hasSkill Skill</td><td>Riya hasSkill Python</td></tr><tr><td>Like</td><td>A blueprint</td><td>A populated map</td></tr></table><p>Traversing the graph answers questions that were never stored directly. Example: Google Knowledge Graph.</p>",
      ask:["Construct a knowledge graph for the given facts"] };
  N["2.0.10"] = { q:"Explain Semantic Web concepts.", m:5,
      a:"Semantic Web — makes Web data machine-readable by giving it explicit meaning.\nTraditional Web: links documents to documents. Semantic Web: links data to data.\nStack:\n- URI / IRI: identify things\n- RDF: represent facts as triples\n- RDFS and OWL: describe meaning (classes, properties, ontologies)\n- SPARQL: query the data\nRDF triple: (Riya, hasSkill, Python): subject and object are nodes; the predicate is the labelled edge.\nBenefit: keyword search matches words; semantic retrieval follows relationships, so it can answer 'which students match jobs that need Python?'",
      ask:["What is RDF?", "Semantic search vs keyword search"] };
})();
