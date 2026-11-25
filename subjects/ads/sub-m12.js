/* =====================================================================
   ADS — subtopics, Modules 1 and 2
   Each big topic in index.html is split into small study pages. A page
   lists which of the parent's worked examples / practice questions it owns
   (each item belongs to exactly one subtopic, so progress is unchanged).
   Numerical pages open with "Theory first" and end every answer with an
   inference. Fields:
     id, p (parent topic id), kind "num" | "th", tag "brief" | "self"
     title, sum, items[], key, theory (HTML), steps[], infer (HTML, num)
     write {short, long} (th), mistakes[], clues[], trap, q[{q, marks}]
   newItems[parent] = {examples:[], practice:[]} adds questions to a parent.
   analysis[id] = inference text for an existing item that had none.
   parents[] = new parent topics (the syllabus self-study topics).
   ===================================================================== */
(function(){
"use strict";
var D = window.ADS_SUBS = window.ADS_SUBS || {subs:[], newItems:{}, analysis:{}, parents:[]};
var S = function(o){ D.subs.push(o); };
var add = function(p, kind, list){ var n = D.newItems[p] = D.newItems[p] || {examples:[], practice:[]}; n[kind] = n[kind].concat(list); };
var SELF = '<div class="box neutral"><h5>Self-study topic</h5><p style="margin:0">Listed under <b>Self-learning</b> in the syllabus. Your lecture decks do not cover it, so this page follows the standard textbook treatment. Learn the definitions and one example; expect at most a short note.</p></div>';

/* ============================== MODULE 1 ============================== */
S({id:"m1t1a", p:"m1t1", kind:"th", title:"Definition of Data Science and its other names",
 sum:"One-sentence definition, the four other names, why it is a science.",
 items:["p_m1t1_1"],
 key:"Data science is the process of extracting <b>useful, previously unknown patterns</b> from large datasets, and building <b>representative models</b> from them.",
 theory:`<ul class="list"><li><b>Also known as:</b> Knowledge Discovery, Machine Learning, Predictive Analytics, Data Mining.</li>
<li><b>Why “science”:</b> its methods are evidence-based, built on empirical, historical observations.</li>
<li><b>It draws on:</b> statistics, machine learning, databases, visualization, domain knowledge, computing.</li></ul>`,
 write:{short:"Definition + the four other names.", long:"Definition → what it does (patterns + models) → fields it draws on → one example."},
 q:[{q:"Define data science. What is it also known as?", marks:2}]});
S({id:"m1t1b", p:"m1t1", kind:"th", title:"AI vs Machine Learning vs Data Science",
 sum:"AI ⊃ ML; data science uses ML plus statistics and data handling.",
 items:["p_m1t1_2"],
 key:"<b>AI</b> makes machines act intelligently; <b>ML</b> is the part of AI that learns from data; <b>data science</b> applies ML, statistics and data handling to answer questions from data.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th></th><th>AI</th><th>ML</th><th>Data Science</th></tr></thead><tbody>
<tr><td>Goal</td><td>Intelligent behaviour</td><td>Learn patterns from data</td><td>Insight and models from data</td></tr>
<tr><td>Example technique</td><td>Search, expert systems</td><td>Decision tree, regression</td><td>EDA + ML + visualization</td></tr></tbody></table></div>`,
 write:{short:"One line each + the subset relation.", long:"Table of differences on 4–5 aspects + one example each."},
 q:[{q:"Differentiate AI, ML and Data Science.", marks:5}]});
S({id:"m1t1c", p:"m1t1", kind:"th", title:"The two purposes of a model",
 sum:"Explain (understand the relationship) and predict (new cases).",
 items:["p_m1t1_3"],
 key:"A model <b>explains</b> the relationship between inputs and output, and <b>predicts</b> the output for new inputs.",
 theory:`<p>Loan example: interest rate = f(credit score). The fitted line <b>explains</b> how the rate falls as the score rises, and <b>predicts</b> the rate for a new applicant's score.</p>`,
 write:{short:"Name both purposes.", long:"Both purposes with the loan-interest example."}});

S({id:"m1t2a", p:"m1t2", kind:"th", title:"Volume, dimensions and complexity",
 sum:"Read a dataset description and name the three characteristics.",
 items:["ex_m1t2_1","ex_m1t2_2","p_m1t2_1","p_m1t2_2"],
 key:"<b>Volume</b> = how many records. <b>Dimensions</b> = how many attributes per record. <b>Complexity</b> = how hard the question is and how varied the data formats are (images, text, signals).",
 theory:`<ul class="list"><li>Volume → too many records for manual analysis or simple tools.</li>
<li>Dimensions → the curse of dimensionality: data becomes sparse, humans cannot see beyond 3-D.</li>
<li>Complexity → mixed formats (numbers, X-rays, free text) and non-linear relationships.</li></ul>`,
 write:{short:"Three names with one-line definitions.", long:"Each characteristic, pointed out in the given dataset with its number."},
 clues:["A dataset story with a record count, an attribute count and data types → identify the three characteristics."],
 q:[{q:"Identify volume, dimensionality and complexity in the given dataset.", marks:5}]});
S({id:"m1t2b", p:"m1t2", kind:"th", title:"Confirmatory vs exploratory analysis",
 sum:"Test a hypothesis vs discover patterns; Tukey: we need both.",
 items:["p_m1t2_3"],
 key:"<b>Confirmatory</b>: start with a hypothesis and test it. <b>Exploratory</b>: start with the data and look for patterns. Tukey: both are needed.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th></th><th>Confirmatory</th><th>Exploratory</th></tr></thead><tbody>
<tr><td>Starts with</td><td>Hypothesis</td><td>Data</td></tr><tr><td>Tools</td><td>Hypothesis tests, A/B tests</td><td>Plots, summaries, clustering</td></tr>
<tr><td>Output</td><td>Accept / reject</td><td>New hypotheses</td></tr></tbody></table></div>`,
 write:{short:"One line each.", long:"Table + why both are needed."}});

S({id:"m1t3a", p:"m1t3", kind:"th", title:"The seven data science tasks",
 sum:"Task, algorithm and example for each; map a scenario to a task.",
 items:["ex_m1t3_1","p_m1t3_1","p_m1t3_3"],
 key:"Ask one question: is the target a <b>label</b> (classification), a <b>number</b> (regression / forecasting), or is there <b>no target</b> (clustering, association, anomaly detection)?",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Task</th><th>Algorithm</th><th>Example</th></tr></thead><tbody>
<tr><td>Classification</td><td>Decision tree</td><td>Loan repay: yes / no</td></tr>
<tr><td>Regression</td><td>Linear regression</td><td>House price</td></tr>
<tr><td>Anomaly detection</td><td>LOF, distance-based</td><td>Card fraud</td></tr>
<tr><td>Time series forecasting</td><td>Exponential smoothing, ARIMA</td><td>Next month's demand</td></tr>
<tr><td>Clustering</td><td>k-means</td><td>Customer segments</td></tr>
<tr><td>Association analysis</td><td>Apriori</td><td>Bread → butter</td></tr>
<tr><td>Recommendation</td><td>Collaborative filtering</td><td>Next movie</td></tr></tbody></table></div>`,
 write:{short:"Name the task for the scenario.", long:"Task + algorithm + one-line justification for each scenario."},
 q:[{q:"Identify the data science task in each scenario and justify.", marks:5}]});
S({id:"m1t3b", p:"m1t3", kind:"th", title:"Classification vs clustering; regression vs forecasting",
 sum:"The two classic task comparisons.",
 items:["p_m1t3_2"],
 key:"Classification has <b>predefined labels</b>; clustering finds groups with <b>no labels</b>. Regression predicts a number from other variables; forecasting predicts a <b>future</b> value from the series' own past.",
 write:{short:"One difference each.", long:"Two small tables with an example each."}});

S({id:"m1t4a", p:"m1t4", kind:"th", title:"The five-step data science process",
 sum:"Prior knowledge → preparation → modeling → application → knowledge.",
 items:["ex_m1t4_1","p_m1t4_1"],
 key:"Prior knowledge → Data preparation → Modeling → Application → Knowledge. It is <b>iterative</b>: later steps send you back.",
 theory:`<p>Prior knowledge → Data preparation → Modeling → Application → Knowledge</p>
<ul class="list"><li><b>Prior knowledge:</b> objective, subject area, data, correlation vs causation.</li>
<li><b>Preparation:</b> explore, clean, transform (≈ 80% of the time).</li>
<li><b>Modeling:</b> train, test, evaluate, ensemble.</li>
<li><b>Application:</b> deploy the model into the business process.</li>
<li><b>Knowledge:</b> the insight gained, fed back to the start.</li></ul>`,
 write:{short:"The five steps in order.", long:"Labelled cycle diagram + 2 lines per step + an example (telecom churn)."},
 q:[{q:"Explain the data science process with a neat diagram.", marks:10}]});
S({id:"m1t4b", p:"m1t4", kind:"th", title:"Prior knowledge (four parts)",
 sum:"Objective, subject area, data, correlation vs causation.",
 items:["p_m1t4_2"],
 key:"Before touching data: know the <b>objective</b>, the <b>subject area</b>, the <b>data</b> available, and that <b>correlation is not causation</b>.",
 write:{short:"The four parts.", long:"The four parts with the loan-interest example."}});
S({id:"m1t4c", p:"m1t4", kind:"th", title:"Process frameworks: CRISP-DM, SEMMA, DMAIC, KDD",
 sum:"Expand each acronym; CRISP-DM is the most widely used.",
 items:["p_m1t4_3"],
 key:"<b>CRISP-DM</b> Cross Industry Standard Process for Data Mining · <b>SEMMA</b> Sample, Explore, Modify, Model, Assess · <b>DMAIC</b> Define, Measure, Analyze, Improve, Control · <b>KDD</b> Knowledge Discovery in Databases.",
 write:{short:"Expand the four acronyms.", long:"Four frameworks + CRISP-DM's six phases (business understanding, data understanding, preparation, modeling, evaluation, deployment)."}});
S({id:"m1t4d", p:"m1t4", kind:"th", title:"Deployment (the Application step)",
 sum:"Product readiness, integration, response time, remodeling, assimilation.",
 items:["p_m1t4_4"],
 key:"Deployment puts the model to work. Model <b>refresh</b> protects against the model going stale as the data changes.",
 write:{short:"Define deployment.", long:"The five dimensions + why the model must be refreshed."}});

S({id:"m1t5a", p:"m1t5", kind:"th", title:"Data quality problems and their fixes",
 sum:"Duplicates, missing, invalid, inconsistent values and outliers.",
 items:["ex_m1t5_1","p_m1t5_1"],
 key:"Five problems: <b>duplicate</b> → remove · <b>missing</b> → delete or impute (mean/median) · <b>invalid</b> → correct or remove · <b>inconsistent</b> (NY vs New York) → standardise · <b>outlier</b> → flag and investigate, not auto-delete.",
 write:{short:"List the five problems.", long:"Problem → how it is found → fix, as a table."},
 q:[{q:"Find the data quality issues in the given table and fix them.", marks:5}]});
S({id:"m1t5b", p:"m1t5", kind:"th", title:"Data transformation and the train/test split",
 sum:"Encoding, normalization, feature selection, sampling, splitting.",
 items:["p_m1t5_2","p_m1t5_3"],
 key:"Normalize so a large-scale attribute does not dominate; drop ID columns (no information); split about <b>2/3 train, 1/3 test</b>.",
 theory:`<ul class="list"><li><b>Min-max:</b> x′ = (x − min)/(max − min), range 0–1.</li><li><b>z-score:</b> z = (x − x̄)/σ.</li></ul>`,
 write:{short:"Why normalize.", long:"The five transformation operations with one line each."}});

S({id:"m1t6a", p:"m1t6", kind:"num", title:"Hold-out and k-fold: split and fold counts",
 sum:"Train/test sizes from a percentage; fold size N/k; train N − N/k.",
 items:["ex_m1t6_1","p_m1t6_1","p_m1t6_2"],
 key:"<b>Hold-out</b> splits the data once into train and test. <b>k-fold</b> cuts it into k equal folds; each fold is the test set once while the other k − 1 train the model, and the k scores are averaged.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Method</th><th>Train</th><th>Test</th><th>Iterations</th></tr></thead><tbody>
<tr><td>Hold-out p%</td><td>p% of N</td><td>N − train</td><td>1</td></tr>
<tr><td>k-fold</td><td>N − N/k</td><td>N/k</td><td>k</td></tr></tbody></table></div>`,
 steps:["Write N and the split ratio or k.","Test size: (1 − p)·N for hold-out, N/k for k-fold.","Train size = N − test.","Number of iterations: 1 or k.","Check train + test = N, then infer."],
 infer:`<p>“Each iteration trains on <b>(k − 1)/k</b> of the data (80% at k = 5, 90% at k = 10) and every record is tested exactly once, so the averaged score is more reliable than a single hold-out score, at k times the cost.”</p>`,
 mistakes:["Giving test = N/k as the training size.","Forgetting that k-fold needs k trainings."],
 clues:["“N records, 5-fold” → N/5 per fold."], trap:"Hold-out 75:25 means 75% train, not 75 records.",
 q:[{q:"For 900 records and 6-fold CV, find fold size, train and test per iteration.", marks:5}]});
S({id:"m1t6b", p:"m1t6", kind:"num", title:"LOOCV and leave-p-out counts",
 sum:"LOOCV: N iterations of N − 1 / 1. Leave-p-out: C(N, p) iterations.",
 items:["p_m1t6_3","p_m1t6_7"],
 key:"<b>Leave-one-out</b> is k-fold with k = N: every record is the test set once. <b>Leave-p-out</b> holds out every possible group of p records.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Method</th><th>Train</th><th>Test</th><th>Iterations</th></tr></thead><tbody>
<tr><td>LOOCV</td><td>N − 1</td><td>1</td><td>N</td></tr><tr><td>Leave-p-out</td><td>N − p</td><td>p</td><td>C(N, p) = N! / [p!(N − p)!]</td></tr></tbody></table></div>`,
 steps:["Write N (and p).","Train = N − 1 (or N − p), test = 1 (or p).","Iterations = N (or C(N, p)).","Infer cost vs data use."],
 infer:`<p>“LOOCV uses almost all the data to train each time, so it wastes the least data, but it needs N trainings; it suits <b>small</b> datasets only. Leave-p-out grows even faster: C(N, p).”</p>`,
 mistakes:["Writing N iterations for leave-p-out (it is C(N, p))."],
 q:[{q:"For N = 25, find LOOCV train/test sizes and iterations. State one advantage and one drawback.", marks:5}]});
S({id:"m1t6c", p:"m1t6", kind:"num", title:"Stratified k-fold for imbalanced classes",
 sum:"Each fold keeps the original class proportions.",
 items:["p_m1t6_5","p_m1t6_8"],
 key:"<b>Stratified k-fold</b> is k-fold where every fold keeps the original class ratio, so a rare class (fraud, churn) appears in every fold.",
 theory:`<p>Records of class c per fold = (number of class-c records) / k.</p>`,
 steps:["Find each class count.","Divide each class count by k.","Fold size = sum of the per-class counts = N/k.","Infer why plain k-fold could fail."],
 infer:`<p>“Every fold has the same fraud share as the full data, so each test fold can measure how well the model catches fraud; plain k-fold could give a fold with almost no fraud cases.”</p>`,
 clues:["“Imbalanced”, “rare”, “2% fraud” → stratified k-fold."]});
S({id:"m1t6d", p:"m1t6", kind:"num", title:"Bootstrapping and out-of-bag records",
 sum:"Sample with replacement; records never drawn are the OOB test set.",
 items:["ex_m1t6_2","p_m1t6_6"],
 key:"<b>Bootstrapping</b> draws N records <b>with replacement</b>, so some repeat and some are never picked. The records never picked are <b>out-of-bag (OOB)</b> and form the test set.",
 theory:`<ul class="list"><li>P(a record is missed in one draw) = (N − 1)/N.</li><li>P(missed in all N draws) = (1 − 1/N)<sup>N</sup> ≈ 0.368 for large N.</li><li>So about <b>63.2%</b> of records appear in a bootstrap sample and <b>36.8%</b> are OOB.</li></ul>`,
 steps:["List the original records.","Tick each one that appears in the bootstrap sample.","The unticked ones are OOB → test set.","Infer: why repeats happen and what OOB is used for."],
 infer:`<p>“Records repeat because sampling is with replacement. The OOB records were never seen in training, so they give an honest test of this model; about 36.8% of a large dataset is OOB.”</p>`,
 mistakes:["Calling the repeated records the OOB set."]});
S({id:"m1t6e", p:"m1t6", kind:"th", title:"Choosing a validation technique",
 sum:"Big data → hold-out; tiny data → LOOCV; imbalance → stratified.",
 items:["ex_m1t6_3","p_m1t6_4"],
 key:"Choose by <b>data size</b> and <b>training cost</b>: millions of records → hold-out; a few dozen → LOOCV or k-fold; imbalanced → stratified k-fold; small data needing many training sets → bootstrap.",
 write:{short:"Pick a technique with one reason.", long:"Comparison table: split, cost, data use, when to use."}});

S({id:"m1t7a", p:"m1t7", kind:"th", title:"Data Science vs Data Analytics",
 sum:"Analytics explains the past; data science also predicts and prescribes.",
 items:["p_m1t7_1","p_m1t7_3"],
 key:"Data analytics answers <b>what happened and why</b> (descriptive, diagnostic). Data science also answers <b>what will happen and what to do</b> (predictive, prescriptive). Analytics is a <b>subset</b> of data science.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th></th><th>Data Analytics</th><th>Data Science</th></tr></thead><tbody>
<tr><td>Question</td><td>What happened? Why?</td><td>What will happen? What should we do?</td></tr>
<tr><td>Tools</td><td>SQL, Excel, BI dashboards</td><td>Python/R, ML, big data</td></tr>
<tr><td>Output</td><td>Reports, dashboards</td><td>Predictive models</td></tr>
<tr><td>Scope</td><td>Narrower (subset)</td><td>Broader</td></tr></tbody></table></div>`,
 write:{short:"Two differences.", long:"Six-row table + the four types of analysis."},
 q:[{q:"Differentiate data science and data analytics.", marks:5}]});
S({id:"m1t7b", p:"m1t7", kind:"th", title:"Classify a scenario as analytics or data science",
 sum:"Past report → analytics; prediction or automatic action → data science.",
 items:["p_m1t7_2"],
 key:"“What were last month's sales?” → analytics. “Which customer will buy next?” → data science."});

S({id:"m1t8a", p:"m1t8", kind:"th", title:"Applications of data science by domain",
 sum:"Healthcare, finance, retail, transport, marketing, entertainment.",
 items:["p_m1t8_1","p_m1t8_2"],
 key:"For each application give the <b>domain</b>, the <b>task</b> and the <b>technique</b>: e.g. finance → fraud detection → anomaly detection.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Domain</th><th>Application</th><th>Task</th></tr></thead><tbody>
<tr><td>Healthcare</td><td>Disease prediction, image diagnosis</td><td>Classification</td></tr>
<tr><td>Finance</td><td>Fraud, credit scoring</td><td>Anomaly detection, classification</td></tr>
<tr><td>Retail</td><td>Market basket, demand forecasting</td><td>Association, forecasting</td></tr>
<tr><td>Transport</td><td>Route optimisation, ETA</td><td>Regression</td></tr>
<tr><td>Entertainment</td><td>Recommendations (Netflix)</td><td>Recommendation engine</td></tr></tbody></table></div>`,
 write:{short:"Name four applications.", long:"Four domains × application + technique + a real example."}});

/* Module 1 self-study */
D.parents.push({id:"m1t9", m:"m1", title:"Self-study: Roles in Data Science and Case Studies",
 classification:"bonly", priority:"medium", core:false, type:"theory", marks:5, los:["LO 1.2","LO 1.3"],
 src:"Syllabus self-learning topics (Module 1) · standard textbook treatment",
 summary:"Data Engineer, ML Engineer, Data Analyst; case studies in healthcare, finance, transportation and recommender systems.",
 whatIs:SELF+"<p>The syllabus lists two self-learning items for Module 1: the <b>roles</b> in a data science team, and <b>real-world case studies</b>.</p>",
 concept:"", needToKnow:["What each role does, its tools and its output.","One case study per domain: problem → data → technique → result."],
 recognition:{clues:["“Roles in data science”, “Data Engineer vs ML Engineer”, “case study”."], firstStep:"Table the roles: does, tools, output.", wording:["Explain the roles in a data science team.","Discuss a real-world case study of data science in healthcare."], trap:"Mixing up the data engineer (builds pipelines) and the ML engineer (deploys models)."},
 examAnswer:{short:"Name the roles.", medium:"Roles table.", long:"Roles table + one case study."},
 mistakes:[], examples:[], practice:[], questions:[{q:"Explain the roles of Data Engineer, ML Engineer and Data Analyst.", marks:5, source:"predicted"}]});
add("m1t9","practice",[
 {id:"p_m1t9_1", d:"basic", marks:5, q:"Explain the roles of a Data Engineer, a Machine Learning Engineer and a Data Analyst in a data science team.",
  a:`<div class="scroll"><table class="t"><thead><tr><th>Role</th><th>Does</th><th>Tools</th><th>Output</th></tr></thead><tbody>
<tr><td><b>Data Engineer</b></td><td>Builds and maintains data pipelines: collect, store, clean, move data (ETL)</td><td>SQL, Spark, Hadoop, Airflow, cloud warehouses</td><td>Reliable, ready-to-use data</td></tr>
<tr><td><b>ML Engineer</b></td><td>Turns models into production systems: training pipelines, deployment, monitoring, retraining</td><td>Python, TensorFlow/PyTorch, Docker, MLOps tools</td><td>A deployed, scalable model</td></tr>
<tr><td><b>Data Analyst</b></td><td>Explores data and answers business questions about the past: reports, dashboards</td><td>Excel, SQL, Power BI/Tableau</td><td>Reports and insights</td></tr></tbody></table></div>
The <b>Data Scientist</b> sits between them: frames the problem, builds and evaluates the model. Flow: engineer → analyst/scientist → ML engineer.`},
 {id:"p_m1t9_2", d:"standard", marks:5, q:"Describe one real-world case study of data science in each of healthcare, finance, transportation and recommender systems.",
  a:`<div class="scroll"><table class="t"><thead><tr><th>Domain</th><th>Problem</th><th>Data</th><th>Technique</th><th>Result</th></tr></thead><tbody>
<tr><td>Healthcare</td><td>Early disease detection</td><td>Patient records, X-rays, ECG</td><td>Classification (image models)</td><td>Faster, earlier diagnosis</td></tr>
<tr><td>Finance</td><td>Card fraud</td><td>Transaction history</td><td>Anomaly detection, classification</td><td>Fraud blocked in real time</td></tr>
<tr><td>Transportation</td><td>Arrival time, routing (ride-hailing)</td><td>GPS traces, traffic</td><td>Regression, forecasting</td><td>Accurate ETAs, lower cost</td></tr>
<tr><td>Recommender</td><td>What to watch or buy next (Netflix, Amazon)</td><td>Ratings, clicks, purchases</td><td>Collaborative filtering</td><td>More engagement and sales</td></tr></tbody></table></div>`}]);
S({id:"m1t9a", p:"m1t9", kind:"th", tag:"self", title:"Roles: Data Engineer, ML Engineer, Data Analyst",
 sum:"Who builds the pipeline, who deploys the model, who reports.",
 items:["p_m1t9_1"],
 key:"<b>Data Engineer</b> builds pipelines → <b>Data Analyst</b> reports on the past → <b>Data Scientist</b> builds models → <b>ML Engineer</b> deploys and maintains them.",
 write:{short:"One line per role.", long:"Table: role, does, tools, output."}});
S({id:"m1t9b", p:"m1t9", kind:"th", tag:"self", title:"Case studies: healthcare, finance, transportation, recommenders",
 sum:"Problem → data → technique → result, for four domains.",
 items:["p_m1t9_2"],
 key:"Write every case study in four beats: <b>problem → data → technique → result</b>.",
 write:{short:"One application per domain.", long:"Four-beat table for each domain."}});

/* ============================== MODULE 2 ============================== */
S({id:"m2t1a", p:"m2t1", kind:"th", title:"Four levels of measurement",
 sum:"Nominal → ordinal → interval → ratio; classify a column.",
 items:["ex_m2t1_1","p_m2t1_1"],
 key:"<b>Nominal</b> names only · <b>Ordinal</b> adds order · <b>Interval</b> adds equal gaps (no true zero) · <b>Ratio</b> adds a true zero.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Level</th><th>Adds</th><th>Example</th><th>Valid statistics</th></tr></thead><tbody>
<tr><td>Nominal</td><td>Categories</td><td>Gender, ID</td><td>Mode, counts</td></tr>
<tr><td>Ordinal</td><td>Order</td><td>Rating Poor…Excellent</td><td>+ median, percentiles</td></tr>
<tr><td>Interval</td><td>Equal intervals</td><td>Temperature °C</td><td>+ mean, SD</td></tr>
<tr><td>Ratio</td><td>True zero</td><td>Salary, weight</td><td>+ ratios, CV</td></tr></tbody></table></div>`,
 write:{short:"Name the level with a reason.", long:"The ladder table + classify each column."},
 trap:"Employee ID is nominal even though it is a number."});
S({id:"m2t1b", p:"m2t1", kind:"th", title:"Why the statistics depend on the level",
 sum:"No mean for nominal; no ratios for interval.",
 items:["p_m2t1_2"],
 key:"A mean needs equal intervals (so not nominal/ordinal). A ratio needs a true zero (20 °C is not twice as hot as 10 °C)."});

S({id:"m2t2a", p:"m2t2", kind:"th", title:"Bases of classification and class terms",
 sum:"Geographical, chronological, qualitative, quantitative; class limits, interval, frequency, mid-point.",
 items:["p_m2t2_1"],
 key:"Classify by <b>place</b>, <b>time</b>, <b>attribute</b> or <b>magnitude</b>. Mid-point = (lower + upper)/2; class interval = upper − lower.",
 write:{short:"Define the four terms.", long:"Four bases with examples + four terms with examples."}});
S({id:"m2t2b", p:"m2t2", kind:"num", title:"Inclusive to exclusive classes, mid-points",
 sum:"Correction factor = half the gap; subtract from lower, add to upper.",
 items:["ex_m2t2_2","p_m2t2_2","p_m2t2_3"],
 key:"Inclusive classes (0–9, 10–19) leave gaps. Median, mode and quartile formulas need touching classes, so convert first.",
 theory:`<p><b>Correction factor</b> = (lower limit of next class − upper limit of this class)/2. Subtract it from every lower limit and add it to every upper limit. Frequencies do not change.</p>
<p>From mid-points: width i = gap between mid-points; class = m − i/2 to m + i/2.</p>`,
 steps:["Find the gap between classes (e.g. 10 − 9 = 1).","Correction factor = gap/2 (0.5).","Lower − 0.5, upper + 0.5.","Copy the frequencies unchanged.","Mid-point = (new lower + new upper)/2."],
 infer:`<p>“The frequencies are unchanged; only the limits moved by 0.5 so the classes now touch. The series is ready for median, mode and quartile formulas.”</p>`,
 mistakes:["Changing the frequencies.","Applying the correction to only one side."],
 clues:["Classes like 10–19, 20–29 → inclusive → convert first."]});
S({id:"m2t2c", p:"m2t2", kind:"num", title:"Building a frequency distribution (Sturges' rule)",
 sum:"k = 1 + 3.322 log N; i = (L − S)/k; tally.",
 items:["ex_m2t2_1","p_m2t2_4"],
 key:"Group raw values into classes, count them with tally marks, and check the frequencies add to N.",
 theory:`<ul class="list"><li><b>Sturges:</b> k = 1 + 3.322 log₁₀ N (number of classes).</li><li><b>Width:</b> i = (Largest − Smallest)/k, rounded up to a convenient number.</li></ul>`,
 steps:["Find L, S and N.","k = 1 + 3.322 log N, round.","i = (L − S)/k, round up.","Write the classes from a convenient start.","Tally, count, check Σf = N."],
 infer:`<p>Describe the shape: “Frequencies rise to a peak at the ___ class and fall after it; most values lie between ___ and ___; the tail is longer on the ___ side.”</p>`,
 mistakes:["Σf not equal to N.","Rounding k down so the last value does not fit."]});

S({id:"m2t3a", p:"m2t3", kind:"th", title:"Parts and types of tables",
 sum:"Title, stub, caption, body, footnote, source; one-way to manifold.",
 items:["p_m2t3_1","p_m2t3_2"],
 key:"Parts: table number, title, head note, <b>stub</b> (row headings), <b>caption</b> (column headings), body, footnote, source. Types by characteristics: one-way, two-way, three-way, manifold.",
 write:{short:"List the parts.", long:"Parts + types + classification vs tabulation."}});
S({id:"m2t3b", p:"m2t3", kind:"num", title:"Drafting a blank table",
 sum:"Turn a verbal specification into a blank higher-order table.",
 items:["ex_m2t3_1","p_m2t3_3"],
 key:"Count the characteristics named; put the ones with most categories in the <b>caption</b> and the others in the <b>stub</b>, with sub-totals and totals.",
 steps:["List every characteristic and its categories.","Decide caption (columns) vs stub (rows).","Nest the sub-categories; add Total rows/columns.","Write title, head note, footnote and source."],
 infer:`<p>“The table is a <b>three-way</b> table (three characteristics). Totals let the reader compare each group directly.”</p>`});

S({id:"m2t4a", p:"m2t4", kind:"th", title:"Types of diagrams and when to use each",
 sum:"Bars (1-D), rectangles/squares/pie (2-D), 3-D, pictograms.",
 items:["p_m2t4_1","p_m2t4_2"],
 key:"Simple bar → one variable; multiple bar → compare groups side by side; sub-divided bar → parts of a total; percentage bar → shares; pie → parts of one whole.",
 write:{short:"Name the right diagram.", long:"Classification of diagrams with an example each."}});
S({id:"m2t4b", p:"m2t4", kind:"num", title:"Pie diagram: computing the angles",
 sum:"Angle = value / total × 360°.",
 items:["ex_m2t4_1","p_m2t4_3"],
 key:"A pie shows each part of one whole as a sector whose angle is proportional to its value.",
 theory:`<p><b>Angle = (component value / total) × 360°</b>. Percentage = value/total × 100. Angles must add to 360°.</p>`,
 steps:["Add the total.","Angle for each part.","Check Σ angles = 360°.","Draw from the vertical radius, clockwise, largest first; legend, title, source."],
 infer:`<p>“The largest share is ___ (___%), more than ___; together the top two items take ___% of the total.”</p>`});

S({id:"m2t5a", p:"m2t5", kind:"num", title:"Histogram and frequency polygon (construct and interpret)",
 sum:"Bars touch; polygon joins mid-points; read the shape.",
 items:["ex_m2t5_1"],
 key:"A <b>histogram</b> is touching bars over class intervals (area ∝ frequency). A <b>frequency polygon</b> joins the tops of the bars at their mid-points and is closed at both ends.",
 theory:`<ul class="list"><li>Classes on x-axis, frequency on y-axis, no gaps.</li><li>Unequal widths → plot frequency density = f / width.</li><li>Polygon: plot (mid-point, f), join, extend to the mid-points of empty classes at each end.</li></ul>`,
 steps:["Make classes exclusive if needed.","Draw bars.","Mark mid-points of the bar tops, join, close the ends.","Read the modal class and the tail."],
 infer:`<p>“The highest bar is ___ so the modal class is ___. The right tail is longer, so the distribution is <b>positively skewed</b> (or: roughly symmetrical).”</p>`});
S({id:"m2t5b", p:"m2t5", kind:"th", title:"Histogram vs bar diagram; frequency polygon",
 sum:"Continuous vs discrete, touching vs gaps, area vs height.",
 items:["p_m2t5_1","p_m2t5_2"],
 key:"Histogram: continuous data, bars touch, <b>area</b> shows frequency. Bar diagram: discrete categories, gaps, <b>height</b> shows value."});
S({id:"m2t5c", p:"m2t5", kind:"th", title:"Ogives and the graphical median",
 sum:"Less-than and more-than ogives cross at the median.",
 items:["p_m2t5_3"],
 key:"A <b>less-than ogive</b> plots cumulative frequency against upper limits; a <b>more-than ogive</b> against lower limits. They <b>intersect at the median</b>.",
 theory:`<p>Also read off the ogive: Q₁ at N/4, Q₃ at 3N/4, and how many values lie below any point.</p>`});

S({id:"m2t6a", p:"m2t6", kind:"num", title:"Mean of individual and discrete series",
 sum:"x̄ = Σx/n; x̄ = Σfx/Σf.",
 items:["p_m2t6_1","p_m2t6_6"],
 key:"The arithmetic mean is the sum of the values divided by their number. In a discrete series each value counts f times.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Series</th><th>Direct</th><th>Short-cut (A = assumed mean)</th></tr></thead><tbody>
<tr><td>Individual</td><td>x̄ = Σx / n</td><td>x̄ = A + Σd / n, d = x − A</td></tr>
<tr><td>Discrete</td><td>x̄ = Σfx / Σf</td><td>x̄ = A + Σfd / Σf</td></tr></tbody></table></div>`,
 steps:["Make the fx column.","Add Σf and Σfx.","Divide.","Compare the mean with the range and write the inference."],
 infer:`<p>“The average is ___; values cluster around it between ___ and ___.” If one value is far away: “the mean is pulled towards the extreme value, so the median may describe the typical value better.”</p>`});
S({id:"m2t6b", p:"m2t6", kind:"num", title:"Mean of a continuous series (step deviation)",
 sum:"x̄ = A + (Σfd′/N) × i, using mid-points.",
 items:["ex_m2t6_1","p_m2t6_2"],
 key:"In a continuous series the <b>mid-point</b> stands for every value in its class. Step deviation shrinks the arithmetic.",
 theory:`<p><b>x̄ = A + (Σfd′ / N) × i</b>, where m = mid-point, d′ = (m − A)/i, A = an assumed mid-point (usually the middle one), i = class width.</p>`,
 steps:["Mid-points m.","d′ = (m − A)/i (small integers −2, −1, 0, 1 …).","fd′ column, Σfd′ (can be negative).","x̄ = A + (Σfd′/N)·i.","Locate x̄ in its class and infer."],
 infer:`<p>“The mean ___ lies in the ___ class, the class with the most observations, so the bulk of the data sits around it.”</p>`,
 mistakes:["Using class limits instead of mid-points.","Forgetting to multiply by i."],
 trap:"A negative Σfd′ is normal: it only means the mean lies below A."});
S({id:"m2t6c", p:"m2t6", kind:"num", title:"Combined mean and correcting a wrong value",
 sum:"x̄₁₂ = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂); correct Σx then divide.",
 items:["ex_m2t6_2","p_m2t6_3","p_m2t6_4"],
 key:"Means of groups of different sizes cannot be averaged directly; weight each by its size. A wrong entry is fixed by correcting the <b>total</b>.",
 theory:`<ul class="list"><li><b>Combined:</b> x̄₁₂ = (n₁x̄₁ + n₂x̄₂)/(n₁ + n₂).</li><li><b>Correction:</b> correct Σx = n·x̄ − wrong + right; correct mean = correct Σx / n.</li></ul>`,
 steps:["Totals: n₁x̄₁ and n₂x̄₂ (or n·x̄).","Add, or replace wrong by right.","Divide by the total count."],
 infer:`<p>“The combined mean is closer to the mean of the <b>larger</b> group, which is why it is not the simple average of the two means.”</p>`});
S({id:"m2t6d", p:"m2t6", kind:"num", title:"Weighted mean",
 sum:"x̄_w = Σwx / Σw when items differ in importance.",
 items:["ex_m2t6_3","p_m2t6_7"],
 key:"Use a <b>weighted mean</b> when the items are not equally important (credits, quantities, prices).",
 theory:`<p><b>x̄_w = Σwx / Σw</b>.</p>`,
 steps:["wx column.","Σwx and Σw.","Divide.","Compare with the simple mean."],
 infer:`<p>“The weighted mean is ___ the simple mean because the item with the largest weight has a ___ value; the simple mean misleads when weights differ.”</p>`});
S({id:"m2t6e", p:"m2t6", kind:"th", title:"Merits and limitations of the mean",
 sum:"Uses every value, but pulled by extremes and fails with open ends.",
 items:["p_m2t6_5"],
 key:"Merits: uses all values, rigidly defined, algebraic. Limitations: affected by extreme values, cannot be found for open-ended classes without assumptions, may not be an actual value."});

S({id:"m2t7a", p:"m2t7", kind:"num", title:"Median of individual and discrete series",
 sum:"Arrange; median = value at (n + 1)/2.",
 items:["p_m2t7_1","p_m2t7_5"],
 key:"The median is the middle value of the <b>arranged</b> data: half the values lie below it.",
 theory:`<p>Position = (n + 1)/2. Discrete: make cumulative frequency (cf); the median is the first value whose cf ≥ (N + 1)/2.</p>`,
 steps:["Arrange in ascending order.","Position (N + 1)/2.","Discrete: cf column, find the value.","Infer."],
 infer:`<p>“Half the observations are below ___ and half above. The median is not affected by the extreme values.”</p>`});
S({id:"m2t7b", p:"m2t7", kind:"num", title:"Median of a continuous series (interpolation)",
 sum:"Md = L + [(N/2 − cf)/f] × i.",
 items:["ex_m2t7_1","p_m2t7_2","p_m2t7_3"],
 key:"Find the class that holds the N/2-th value, then <b>interpolate</b> inside it.",
 theory:`<p><b>Md = L + [(N/2 − cf)/f] × i</b>. L = lower limit of the median class, cf = cumulative frequency of the class <b>before</b> it, f = frequency of the median class, i = width.</p>`,
 steps:["Exclusive classes (correct inclusive ones).","cf column.","N/2 → median class (first cf ≥ N/2).","Substitute.","Infer."],
 infer:`<p>“50% of the ___ are below ___. If the mean is above the median, the distribution is positively skewed.”</p>`,
 mistakes:["Using (N + 1)/2 for a continuous series.","Taking cf of the median class itself."]});
S({id:"m2t7c", p:"m2t7", kind:"num", title:"Median from cumulative (less-than) data",
 sum:"Convert ‘under 10, under 20 …’ to class frequencies first.",
 items:["ex_m2t7_2"],
 key:"“Less than” data already is a cf column. Rebuild the classes and their frequencies by subtraction, then use the interpolation formula.",
 steps:["Classes 0–10, 10–20 …","f = cf − previous cf.","Median class from N/2.","Interpolate and infer."],
 infer:`<p>“Half the deaths occurred below age ___.”</p>`});
S({id:"m2t7d", p:"m2t7", kind:"th", title:"Mean vs median",
 sum:"Skewed or open-ended data → report the median.",
 items:["p_m2t7_4"],
 key:"The mean uses every value and is pulled by extremes; the median is positional and robust. For incomes with a few very high earners, report the median."});

S({id:"m2t8a", p:"m2t8", kind:"num", title:"Mode of a continuous series",
 sum:"Mo = L + [Δ₁/(Δ₁ + Δ₂)] × i.",
 items:["ex_m2t8_1","p_m2t8_1"],
 key:"The mode is the most frequent value. In a continuous series find the class with the highest frequency and interpolate.",
 theory:`<p><b>Mo = L + [Δ₁/(Δ₁ + Δ₂)] × i</b>, Δ₁ = f₁ − f₀ (modal minus previous), Δ₂ = f₁ − f₂ (modal minus next).</p>`,
 steps:["Modal class = highest f.","Δ₁ and Δ₂.","Substitute.","Infer."],
 infer:`<p>“The most common value is about ___. Mode ___ &gt; mean ___ → negatively skewed (or &lt; → positively skewed).”</p>`,
 mistakes:["Using the frequencies themselves instead of the differences."]});
S({id:"m2t8b", p:"m2t8", kind:"num", title:"The bimodal case",
 sum:"Two classes tie → the mode is ill-defined; use the empirical relation or Bowley.",
 items:["ex_m2t8_2"],
 key:"If two classes share the highest frequency, the series is <b>bimodal</b> and the modal formula is unreliable.",
 theory:`<p>Use Mo = 3 Md − 2 x̄, and prefer Karl Pearson's <b>median form</b> or Bowley's coefficient for skewness.</p>`,
 infer:`<p>“Two peaks suggest two sub-groups in the data; the mode is ill-defined, so ___ is reported instead.”</p>`});
S({id:"m2t8c", p:"m2t8", kind:"num", title:"Empirical relation: Mode = 3 Median − 2 Mean",
 sum:"Estimate one measure from the other two; read the shape.",
 items:["p_m2t8_2","p_m2t8_3"],
 key:"For a moderately skewed distribution, <b>Mode = 3 Median − 2 Mean</b>.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Shape</th><th>Order</th></tr></thead><tbody>
<tr><td>Symmetric</td><td>Mean = Median = Mode</td></tr><tr><td>Positive skew</td><td>Mode &lt; Median &lt; Mean</td></tr><tr><td>Negative skew</td><td>Mean &lt; Median &lt; Mode</td></tr></tbody></table></div>`,
 infer:`<p>“Mean &lt; Median &lt; Mode, so the distribution is <b>negatively skewed</b>: the tail is on the left.”</p>`});

S({id:"m2t9a", p:"m2t9", kind:"num", title:"Quartiles (individual, discrete, continuous)",
 sum:"Q₁ at (n + 1)/4 or N/4; Q₃ at 3(n + 1)/4 or 3N/4.",
 items:["ex_m2t9_1","p_m2t9_1","p_m2t9_2"],
 key:"Quartiles cut the arranged data into four equal parts. Q₂ is the median.",
 theory:`<ul class="list"><li><b>Individual / discrete:</b> Q₁ = value at (n + 1)/4, Q₃ at 3(n + 1)/4.</li><li><b>Continuous:</b> Q_k = L + [(kN/4 − cf)/f] × i.</li></ul>`,
 steps:["Arrange / cf column.","Position for Q₁ and Q₃.","Read or interpolate.","Infer."],
 infer:`<p>“25% of the values are below Q₁ = ___ and 25% above Q₃ = ___; the middle 50% lie between them. Q₃ − Md vs Md − Q₁ shows which side is stretched.”</p>`});
S({id:"m2t9b", p:"m2t9", kind:"num", title:"Deciles and percentiles",
 sum:"D_k at kN/10, P_k at kN/100, same interpolation.",
 items:["p_m2t9_3"],
 key:"Deciles split into 10 parts, percentiles into 100. Same formula, different position.",
 theory:`<p>D_k = L + [(kN/10 − cf)/f] × i · P_k = L + [(kN/100 − cf)/f] × i.</p>`,
 infer:`<p>“P₉₀ = ___ means 90% of workers earn less than ___.”</p>`});

S({id:"m2t10a", p:"m2t10", kind:"num", title:"Range and coefficient of range",
 sum:"Range = L − S; coefficient = (L − S)/(L + S).",
 items:["p_m2t10_1"],
 key:"The range is the simplest spread measure: largest minus smallest. Its coefficient is unit-free.",
 theory:`<p>Continuous series: L = upper limit of the last class, S = lower limit of the first class.</p>`,
 infer:`<p>“The values spread over ___ units; the range uses only two values, so one extreme value can inflate it.”</p>`});
S({id:"m2t10b", p:"m2t10", kind:"num", title:"Quartile deviation and its coefficient",
 sum:"QD = (Q₃ − Q₁)/2; coefficient = (Q₃ − Q₁)/(Q₃ + Q₁).",
 items:["ex_m2t10_1","p_m2t10_2"],
 key:"Quartile deviation is half the interquartile range: the spread of the <b>middle 50%</b>.",
 theory:`<ul class="list"><li>IQR = Q₃ − Q₁</li><li>QD = (Q₃ − Q₁)/2</li><li>Coeff. of QD = (Q₃ − Q₁)/(Q₃ + Q₁)</li></ul>`,
 steps:["Find Q₁ and Q₃.","QD and its coefficient.","Infer."],
 infer:`<p>“A small QD (coefficient ___) means the central half of the data is closely packed: high uniformity.”</p>`});
S({id:"m2t10c", p:"m2t10", kind:"th", title:"Absolute vs relative measures of dispersion",
 sum:"Absolute keeps units; relative is unit-free for comparison.",
 items:["p_m2t10_3"],
 key:"Absolute measures (range, QD, SD) are in the data's units. Relative ones (coefficients, CV) are unit-free, so they compare cm with ₹."});

S({id:"m2t11a", p:"m2t11", kind:"num", title:"Standard deviation of an individual series",
 sum:"σ = √[Σ(x − x̄)²/n].",
 items:["p_m2t11_1"],
 key:"The standard deviation is the root-mean-square deviation from the mean: the typical distance of a value from the mean.",
 theory:`<p><b>σ = √[Σ(x − x̄)² / n]</b> = √[Σx²/n − x̄²]. Variance = σ².</p>`,
 steps:["Mean.","Deviations and their squares.","Average, then square root.","Infer."],
 infer:`<p>“On average the values lie about ___ units from the mean of ___.”</p>`});
S({id:"m2t11b", p:"m2t11", kind:"num", title:"Standard deviation: discrete and continuous (step deviation)",
 sum:"σ = i × √[Σfd′²/N − (Σfd′/N)²].",
 items:["ex_m2t11_1","p_m2t11_2"],
 key:"Same idea as the mean by step deviation, with one more column fd′².",
 theory:`<p><b>σ = i × √[Σfd′²/N − (Σfd′/N)²]</b>, d′ = (m − A)/i.</p>`,
 steps:["m, d′, fd′, fd′² columns.","Σfd′ and Σfd′².","Substitute, multiply by i.","CV = σ/x̄ × 100 if comparing.","Infer."],
 infer:`<p>“σ = ___ on a mean of ___ (CV ___%): moderate spread; most values fall within x̄ ± σ = ___ to ___.”</p>`,
 mistakes:["fd′² is f × d′², not (fd′)².","Forgetting × i."]});
S({id:"m2t11c", p:"m2t11", kind:"num", title:"Standard deviation from cumulative data",
 sum:"Convert ‘under’ data to classes, then step deviation.",
 items:["ex_m2t11_2"],
 key:"Convert the cumulative series to ordinary class frequencies first; then it is a normal continuous-series SD.",
 infer:`<p>“The ages at death spread by about ___ years around the mean of ___.”</p>`});
S({id:"m2t11d", p:"m2t11", kind:"num", title:"Coefficient of variation and consistency",
 sum:"CV = σ/x̄ × 100; lower CV = more consistent.",
 items:["p_m2t11_3"],
 key:"CV is spread relative to the mean, so it compares series with different means or units.",
 theory:`<p><b>CV = (σ / x̄) × 100</b>. Lower CV → more consistent. Higher mean → better on average.</p>`,
 infer:`<p>“A has the lower CV (___%), so A is <b>more consistent</b>; B has the higher mean, so B scores more on average.”</p>`});

S({id:"m2t12a", p:"m2t12", kind:"num", title:"Karl Pearson's coefficient of skewness",
 sum:"Sk = (Mean − Mode)/σ.",
 items:["ex_m2t12_1","ex_m2t12_2","p_m2t12_1","p_m2t12_3"],
 key:"Skewness measures lack of symmetry. Karl Pearson compares the mean with the mode in units of σ.",
 theory:`<ul class="list"><li><b>Sk = (x̄ − Mo)/σ</b></li><li>If the mode is ill-defined: <b>Sk = 3(x̄ − Md)/σ</b></li><li>Sign: + → right tail, − → left tail, 0 → symmetric. Usually between −3 and +3.</li></ul>`,
 steps:["Mean and σ by step deviation.","Mode by the modal formula.","Sk.","Infer sign and size."],
 infer:`<p>“Sk = +0.14 is small and positive: the distribution is <b>nearly symmetrical with a slight positive skew</b>; the mean is pulled a little to the right of the mode.”</p>`,
 mistakes:["Dividing by the variance instead of σ."]});
S({id:"m2t12b", p:"m2t12", kind:"num", title:"Bowley's coefficient of skewness",
 sum:"Sk_B = (Q₃ + Q₁ − 2Md)/(Q₃ − Q₁), between −1 and +1.",
 items:["ex_m2t12_3","p_m2t12_2"],
 key:"Bowley uses the quartiles, so it looks only at the <b>middle 50%</b> and works for open-ended classes.",
 theory:`<p><b>Sk_B = (Q₃ + Q₁ − 2Md)/(Q₃ − Q₁)</b>, always between −1 and +1.</p>`,
 steps:["Q₁, Md, Q₃.","Substitute.","Infer: compare Q₃ − Md with Md − Q₁."],
 infer:`<p>“Sk_B = +0.2: Q₃ is farther from the median than Q₁, so the upper half of the middle 50% is stretched: <b>positive skew</b>.”</p>`});
S({id:"m2t12c", p:"m2t12", kind:"num", title:"Pearson vs Bowley: comparing the two",
 sum:"Different values are normal: tails vs the middle 50%.",
 items:["ex_m2t12_4","p_m2t12_4"],
 key:"Karl Pearson uses every value (it feels the tails); Bowley sees only the quartiles. A large Pearson with a small Bowley means the skew lies <b>in the tails</b>.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th></th><th>Karl Pearson</th><th>Bowley</th></tr></thead><tbody>
<tr><td>Uses</td><td>Mean, mode/median, σ</td><td>Quartiles</td></tr><tr><td>Range</td><td>about −3 to +3</td><td>−1 to +1</td></tr>
<tr><td>Open-ended classes</td><td>No</td><td>Yes</td></tr></tbody></table></div>`,
 infer:`<p>“Neither is wrong: Pearson +0.62 vs Bowley +0.08 says the middle half is nearly symmetric and the skew comes from a long right tail.”</p>`});

S({id:"m2t13a", p:"m2t13", kind:"num", title:"β₁ and β₂ from given moments",
 sum:"β₁ = μ₃²/μ₂³, β₂ = μ₄/μ₂².",
 items:["ex_m2t13_3"],
 key:"Moments about the mean describe shape: μ₂ spread, μ₃ skewness, μ₄ peakedness.",
 theory:`<ul class="list"><li><b>β₁ = μ₃² / μ₂³</b> (skewness, no sign)</li><li><b>β₂ = μ₄ / μ₂²</b> (kurtosis); γ₂ = β₂ − 3</li></ul>`,
 infer:`<p>“β₂ = 3 → mesokurtic (normal peak). μ₃ &gt; 0 → slight positive skew.”</p>`});
S({id:"m2t13b", p:"m2t13", kind:"num", title:"Kurtosis of an individual series",
 sum:"Build μ₂ and μ₄ from deviations, then β₂.",
 items:["ex_m2t13_1"],
 key:"Kurtosis tells how peaked the curve is and how heavy its tails are, compared with the normal curve (β₂ = 3).",
 theory:`<p>μ₂ = Σ(x − x̄)²/n · μ₄ = Σ(x − x̄)⁴/n · β₂ = μ₄/μ₂²</p>`,
 steps:["Mean.","(x − x̄)² and (x − x̄)⁴.","μ₂, μ₄.","β₂, compare with 3."],
 infer:`<p>“β₂ = 1.7 &lt; 3: <b>platykurtic</b>, flatter than normal with light tails.”</p>`});
S({id:"m2t13c", p:"m2t13", kind:"num", title:"Kurtosis of a frequency distribution",
 sum:"μ₂ = Σfd²/N, μ₄ = Σfd⁴/N.",
 items:["ex_m2t13_2","p_m2t13_2"],
 key:"Same as the individual series, with each deviation power weighted by f.",
 theory:`<p>μ₂ = Σf(m − x̄)²/N · μ₄ = Σf(m − x̄)⁴/N · β₂ = μ₄/μ₂²</p>`,
 infer:`<p>“β₂ ___ 3 → ___kurtic: (more / less) peaked than normal.”</p>`});
S({id:"m2t13d", p:"m2t13", kind:"th", title:"Moments and the three kurtosis shapes",
 sum:"Leptokurtic > 3, mesokurtic = 3, platykurtic < 3.",
 items:["p_m2t13_1","p_m2t13_3"],
 key:"β₂ &gt; 3 <b>leptokurtic</b> (sharp peak, heavy tails) · β₂ = 3 <b>mesokurtic</b> (normal) · β₂ &lt; 3 <b>platykurtic</b> (flat). β₁ is a square, so it cannot show the direction of skew."});

S({id:"m2t14a", p:"m2t14", kind:"num", title:"Karl Pearson's r: actual mean method",
 sum:"r = Σxy / √(Σx² Σy²), x and y deviations from their means.",
 items:["ex_m2t14_1","p_m2t14_1","p_m2t14_2"],
 key:"Correlation measures how strongly two variables move together, from −1 to +1.",
 theory:`<p><b>r = Σxy / √(Σx² · Σy²)</b> with x = X − X̄, y = Y − Ȳ.</p>
<div class="scroll"><table class="t"><thead><tr><th>|r|</th><th>Degree</th></tr></thead><tbody><tr><td>0.75–1</td><td>High</td></tr><tr><td>0.25–0.75</td><td>Moderate</td></tr><tr><td>0–0.25</td><td>Low</td></tr></tbody></table></div>`,
 steps:["Means X̄, Ȳ.","x, y, xy, x², y² columns.","Substitute.","Check −1 ≤ r ≤ 1.","Infer sign + degree + no causation."],
 infer:`<p>“r = +0.43: <b>moderate positive</b> correlation; students scoring higher in X tend to score higher in Y. Correlation does not prove that one causes the other.”</p>`});
S({id:"m2t14b", p:"m2t14", kind:"num", title:"Karl Pearson's r: direct method",
 sum:"r = [nΣXY − ΣXΣY] / √{[nΣX² − (ΣX)²][nΣY² − (ΣY)²]}.",
 items:["ex_m2t14_2"],
 key:"Uses raw sums, no deviations. Best when the means are not whole numbers.",
 theory:`<p><b>r = [nΣXY − ΣXΣY] / √{[nΣX² − (ΣX)²] [nΣY² − (ΣY)²]}</b></p>`,
 infer:`<p>“r = +0.95: <b>very high positive</b> correlation; Y rises almost in step with X.”</p>`});
S({id:"m2t14c", p:"m2t14", kind:"num", title:"Karl Pearson's r: assumed mean, and probable error",
 sum:"Deviations from assumed means; PE = 0.6745(1 − r²)/√n.",
 items:["ex_m2t14_3","p_m2t14_3"],
 key:"With assumed means A and B, use dx = X − A, dy = Y − B. The probable error tells whether r is significant.",
 theory:`<p><b>r = [nΣdxdy − ΣdxΣdy] / √{[nΣdx² − (Σdx)²][nΣdy² − (Σdy)²]}</b></p>
<p><b>PE = 0.6745 (1 − r²)/√n</b>. If r &gt; 6 PE → significant; if r &lt; PE → not significant.</p>`,
 infer:`<p>“r = 0.97 is far above 6 × PE = 0.084, so the correlation is <b>significant</b>, not due to chance.”</p>`});
S({id:"m2t14d", p:"m2t14", kind:"th", title:"Correlation does not imply causation",
 sum:"Chance, a third variable, mutual influence.",
 items:["p_m2t14_4"],
 key:"A correlation can arise by <b>chance</b>, from a <b>third variable</b> driving both (ice-cream sales and drownings ← summer), or from <b>mutual influence</b>."});

S({id:"m2t15a", p:"m2t15", kind:"num", title:"Box plot, five-number summary and outlier fences",
 sum:"Min, Q₁, Md, Q₃, Max; fences Q₁ − 1.5 IQR and Q₃ + 1.5 IQR.",
 items:["ex_m2t15_1","p_m2t15_1","p_m2t15_3"],
 key:"A box plot draws the <b>five-number summary</b>; points beyond the fences are outliers.",
 theory:`<ul class="list"><li>IQR = Q₃ − Q₁</li><li>Lower fence = Q₁ − 1.5 IQR · Upper fence = Q₃ + 1.5 IQR</li><li>Whiskers go to the most extreme values <b>inside</b> the fences.</li></ul>`,
 steps:["Arrange.","Q₁, Md, Q₃.","IQR and fences.","Mark outliers; draw box, median line, whiskers.","Infer shape."],
 infer:`<p>“2 and 29 lie outside the fences 8.5 and 20.5 → <b>outliers</b>. The box is narrow (IQR = 3), so the middle half is tightly packed; a median left of centre with a longer right whisker would mean <b>positive skew</b>.”</p>`});
S({id:"m2t15b", p:"m2t15", kind:"num", title:"The empirical rule (68–95–99.7)",
 sum:"x̄ ± σ, ± 2σ, ± 3σ for a normal-shaped distribution.",
 items:["p_m2t15_2"],
 key:"In a bell-shaped distribution about 68% of values lie within ±1σ, 95% within ±2σ and 99.7% within ±3σ.",
 infer:`<p>“About 95% lie between ___ and ___; a value beyond x̄ + 3σ would be very unusual: a possible outlier.”</p>`});

S({id:"m2t16a", p:"m2t16", kind:"th", title:"Scatter plot, scatter matrix and bubble chart",
 sum:"2, many pairs, or 3–4 variables; read direction, strength, outliers.",
 items:["p_m2t16_1","p_m2t16_2"],
 key:"<b>Scatter plot</b>: two variables. <b>Scatter matrix</b>: every pair of several variables at once. <b>Bubble chart</b>: a scatter plot whose bubble size (and colour) adds a third (fourth) variable.",
 write:{short:"Define each with the number of variables.", long:"Each chart + what to read from a scatter: direction, strength, clusters, outliers."}});

/* Module 2 self-study */
D.parents.push({id:"m2t17", m:"m2", title:"Self-study: Distribution Shapes and Advanced Visualizations",
 classification:"bonly", priority:"medium", core:false, type:"theory", marks:5, los:["LO 2.3","LO 2.4","LO 2.5"],
 src:"Syllabus self-learning topics (Module 2) · standard textbook treatment",
 summary:"Heavy-tailed, light-tailed and multimodal shapes; violin plot, boxen plot, pair plot, heatmap.",
 whatIs:SELF+"<p>Two self-learning items: <b>shapes of distributions</b> and <b>advanced visualizations</b>.</p>",
 concept:"", needToKnow:["Heavy- vs light-tailed and the link to kurtosis.","Multimodal = several peaks = sub-groups.","What a violin, boxen, pair plot and heatmap each show."],
 recognition:{clues:["“Heavy-tailed”, “violin plot”, “heatmap”, “pair plot”."], firstStep:"Define the shape or plot, sketch it, give one use.", wording:["Explain heavy-tailed and light-tailed distributions.","Write a note on violin plots and heatmaps."], trap:"A heatmap of correlations shows r values, not counts."},
 examAnswer:{short:"Define the term.", medium:"Definition + sketch + use.", long:"All four plots in a table."},
 mistakes:[], examples:[], practice:[], questions:[{q:"Explain violin plot, boxen plot, pair plot and heatmap.", marks:5, source:"predicted"}]});
add("m2t17","practice",[
 {id:"p_m2t17_1", d:"basic", marks:5, q:"Explain heavy-tailed, light-tailed and multimodal distributions. How are the tails related to kurtosis?",
  a:`<ul class="list"><li><b>Heavy-tailed:</b> more extreme values than the normal curve; the tails fall slowly. β₂ &gt; 3 (leptokurtic). Examples: stock returns, insurance claims. Outliers are common, so the mean and σ are unstable.</li>
<li><b>Light-tailed:</b> fewer extreme values than normal; tails fall fast. β₂ &lt; 3 (platykurtic). Example: uniform-like data such as dice rolls.</li>
<li><b>Multimodal:</b> two or more peaks (bimodal = two). It usually means the data mixes sub-groups, e.g. heights of men and women together. A single mean hides the groups: split the data or report each peak.</li></ul>`},
 {id:"p_m2t17_2", d:"standard", marks:5, q:"Explain the violin plot, boxen plot, pair plot and heatmap, with one use of each.",
  a:`<div class="scroll"><table class="t"><thead><tr><th>Plot</th><th>What it shows</th><th>Use</th></tr></thead><tbody>
<tr><td><b>Violin plot</b></td><td>A box plot with a mirrored density curve on each side: shows the full shape, including several peaks</td><td>Compare salary distributions across departments</td></tr>
<tr><td><b>Boxen (letter-value) plot</b></td><td>A box plot with extra nested boxes for more quantiles (eighths, sixteenths…)</td><td>Large datasets where the tails matter</td></tr>
<tr><td><b>Pair plot</b></td><td>A scatter matrix: a scatter plot for every pair of variables, histograms on the diagonal</td><td>First look at a multivariate dataset</td></tr>
<tr><td><b>Heatmap</b></td><td>A grid of colours; colour intensity = value (often a correlation matrix)</td><td>Spot strongly correlated variables</td></tr></tbody></table></div>`}]);
S({id:"m2t17a", p:"m2t17", kind:"th", tag:"self", title:"Shapes: heavy-tailed, light-tailed, multimodal",
 sum:"Tails link to kurtosis; several peaks mean sub-groups.",
 items:["p_m2t17_1"],
 key:"<b>Heavy tails</b> → more extremes, β₂ &gt; 3. <b>Light tails</b> → fewer extremes, β₂ &lt; 3. <b>Multimodal</b> → several peaks, usually mixed sub-groups."});
S({id:"m2t17b", p:"m2t17", kind:"th", tag:"self", title:"Violin plot, boxen plot, pair plot, heatmap",
 sum:"Four advanced plots and what each adds.",
 items:["p_m2t17_2"],
 key:"Violin = box + density shape · Boxen = box with more quantile boxes · Pair plot = all pairwise scatters · Heatmap = values as colours (correlation matrix)."});

/* new practice for parents (Modules 1–2) */
add("m1t6","practice",[
 {id:"p_m1t6_7", d:"standard", marks:3, q:"A dataset has 6 records. Using leave-p-out cross validation with p = 2, find the training size, testing size and number of iterations. Compare with LOOCV on the same data.",
  hint:"Iterations = C(6, 2).",
  a:`Train = 6 − 2 = <b>4</b>, test = <b>2</b>, iterations = C(6, 2) = 6!/(2!·4!) = <b>15</b>.<br>LOOCV on the same data: train 5, test 1, <b>6</b> iterations.`},
 {id:"p_m1t6_8", d:"standard", marks:5, q:"A fraud dataset has 1,000 transactions, of which 20 (2%) are fraud. Using stratified 5-fold cross validation, how many fraud and normal records are in each fold, and how many are used for training in each iteration?",
  hint:"Divide each class separately by k.",
  a:`Fold size = 1000/5 = 200. Fraud per fold = 20/5 = <b>4</b>; normal per fold = 980/5 = <b>196</b> (4 + 196 = 200 ✓).<br>Training per iteration = 4 folds = 800 records: <b>16 fraud + 784 normal</b>; testing = 200 records (4 fraud).`}]);
add("m2t6","practice",[
 {id:"p_m2t6_6", d:"basic", marks:3, q:"Find the mean of the discrete series. x: 10, 20, 30, 40. f: 3, 5, 8, 4.",
  a:`Σf = 20; Σfx = 30 + 100 + 240 + 160 = 530.<div class="answer">x̄ = 530/20 = <b>26.5</b></div>`},
 {id:"p_m2t6_7", d:"standard", marks:5, q:"Prices per kg: wheat ₹40 (weight 5), rice ₹60 (weight 3), sugar ₹45 (weight 2). Find the simple and the weighted mean price and say which is appropriate.",
  a:`Simple mean = (40 + 60 + 45)/3 = 145/3 = <b>₹48.33</b>.<br>Σwx = 200 + 180 + 90 = 470; Σw = 10 → weighted mean = <b>₹47.00</b>.`}]);
add("m2t7","practice",[
 {id:"p_m2t7_5", d:"basic", marks:3, q:"Find the median. x: 10, 20, 30, 40, 50. f: 2, 8, 10, 6, 4.",
  a:`N = 30, cf: 2, 10, 20, 26, 30. Position (N + 1)/2 = 15.5 → first cf ≥ 15.5 is 20, at x = 30.<div class="answer">Median = <b>30</b></div>`}]);

/* inference for new and existing Module 1–2 items */
var A = function(){ return '<ul class="list">' + Array.prototype.map.call(arguments, function(p){ return "<li>" + p + "</li>"; }).join("") + "</ul>"; };
Object.assign(D.analysis, {
 p_m1t6_7: A("Leave-p-out needs <b>15</b> trainings against LOOCV's 6 on the same 6 records: C(N, p) grows very fast, so it is practical only for tiny datasets.",
   "Each record is tested in C(5, 1) = 5 of the 15 iterations, so the estimate is very thorough."),
 p_m1t6_8: A("Every fold holds <b>4 fraud cases</b>, the same 2% as the whole dataset, so each test fold can measure fraud detection.",
   "With plain 5-fold, chance could put most of the 20 fraud cases in one or two folds, leaving folds with almost none."),
 p_m2t6_6: A("The mean 26.5 lies between 20 and 30, pulled towards 30 because x = 30 has the highest frequency (8).", "Check: Σf = 20, so the division is by 20, not by 4 values."),
 p_m2t6_7: A("The weighted mean (₹47) is <b>below</b> the simple mean (₹48.33) because cheap wheat carries the largest weight (5).",
   "Use the <b>weighted</b> mean: the items are bought in different quantities, and the simple mean treats rice as being as important as wheat."),
 p_m2t7_5: A("Half of the 30 observations are at or below 30, half at or above.", "The median equals the most frequent value here, which suggests a fairly symmetric distribution."),
 ex_m2t4_1: A("<b>Food is the largest item (40%, 144°)</b>, as much as rent and clothing together (25% + 15%).",
   "Food and rent together take 65% of the budget; savings are the smallest share at 7.5%.", "Check: the angles add to 360° and the percentages to 100%."),
 p_m2t4_3: A("<b>Raw material is the biggest cost (40%)</b>; materials and wages together take 70% of the total.",
   "Profit is only 10% of the total, the smallest sector, so cost control matters more than price for this company.")
});
})();
