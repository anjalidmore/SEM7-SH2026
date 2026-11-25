/* =====================================================================
   ADS — subtopics, Modules 5 and 6 (format: see sub-m12.js)
   ===================================================================== */
(function(){
"use strict";
var D = window.ADS_SUBS = window.ADS_SUBS || {subs:[], newItems:{}, analysis:{}, parents:[]};
var S = function(o){ D.subs.push(o); };
var add = function(p, kind, list){ var n = D.newItems[p] = D.newItems[p] || {examples:[], practice:[]}; n[kind] = n[kind].concat(list); };
var A = function(){ return '<ul class="list">' + Array.prototype.map.call(arguments, function(p){ return "<li>" + p + "</li>"; }).join("") + "</ul>"; };
var SELF = '<div class="box neutral"><h5>Self-study topic</h5><p style="margin:0">Listed under <b>Self-learning</b> in the syllabus. Your lecture decks do not cover it, so this page follows the standard textbook treatment. Learn the definitions and one example; expect at most a short note.</p></div>';

/* ============================== MODULE 5 ============================== */
S({id:"m5t1a", p:"m5t1", kind:"th", title:"Outliers and their causes",
 sum:"Data errors, normal variance, another class, wrong assumptions.",
 items:["ex_m5t1_1"],
 key:"An <b>outlier</b> is a data point far from the rest. Four causes: <b>data errors</b>, <b>normal variance</b>, data from <b>another distribution class</b>, and <b>wrong distributional assumptions</b>.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Cause</th><th>Example</th><th>Action</th></tr></thead><tbody>
<tr><td>Data error</td><td>Age 245</td><td>Correct or remove</td></tr><tr><td>Normal variance</td><td>A very tall person</td><td>Keep</td></tr>
<tr><td>Another class</td><td>A fraudulent transaction</td><td>This is what we want to find</td></tr><tr><td>Wrong assumption</td><td>Skewed data judged by a normal rule</td><td>Change the model</td></tr></tbody></table></div>`,
 write:{short:"Define outlier + two causes.", long:"Four causes with example and action."}});
S({id:"m5t1b", p:"m5t1", kind:"th", title:"Families of anomaly detection techniques",
 sum:"Statistical, distance, density, clustering, classification.",
 items:["p_m5t1_1"],
 key:"<b>Statistical</b> (3σ, IQR) · <b>distance-based</b> (k-NN distance) · <b>density-based</b> (LOF) · <b>clustering</b> (points far from every cluster) · <b>classification</b> (needs labelled outliers: supervised).",
 write:{short:"Name the families.", long:"Each family: idea, example, one limitation."}});

S({id:"m5t2a", p:"m5t2", kind:"num", title:"z-score (3σ) rule",
 sum:"z = (x − μ)/σ; |z| > 3 → outlier.",
 items:["p_m5t2_1","ex_m5t2_2"],
 key:"In normal data only 0.26% of values lie beyond ±3σ, so a value with <b>|z| &gt; 3</b> is flagged as an outlier.",
 theory:`<p><b>z = (x − μ)/σ</b>. Limits: μ − 3σ and μ + 3σ.</p>`,
 steps:["Limits μ ± 3σ.","z for each value.","|z| &gt; 3 → outlier.","Infer."],
 infer:`<p>“250 has z = 3.33 &gt; 3 → <b>outlier</b> (unusually busy day worth checking); 160 (z = −2.67) and 245 (z = 3.0, on the limit) are not beyond 3σ.”</p>`});
S({id:"m5t2b", p:"m5t2", kind:"num", title:"IQR fences vs the 3σ rule on the same data",
 sum:"Q₁ − 1.5 IQR, Q₃ + 1.5 IQR; the outlier inflates σ.",
 items:["ex_m5t2_1","ex_m5t2_3"],
 key:"The <b>IQR rule</b> does not assume normality and the outlier itself barely moves the quartiles; the 3σ rule can be fooled because the outlier inflates σ.",
 theory:`<p>IQR = Q₃ − Q₁ · fences <b>Q₁ − 1.5 IQR</b> and <b>Q₃ + 1.5 IQR</b>.</p>`,
 steps:["Arrange, Q₁ and Q₃.","Fences.","Mean and σ, limits μ ± 3σ.","Compare what each flags."],
 infer:`<p>“Both rules flag 45 here, but only just for 3σ (z = 3.11), because 45 itself raised σ to 9.27. With 10 or fewer values the 3σ rule can never fire, so on small samples the IQR rule is more reliable.”</p>`});

S({id:"m5t3a", p:"m5t3", kind:"num", title:"Distance-based outlier score (k-th nearest neighbour)",
 sum:"Score = distance to the k-th nearest neighbour; largest = outlier.",
 items:["ex_m5t3_1","ex_m5t3_2"],
 key:"A point is an outlier if it is <b>far from its neighbours</b>. Its score is the distance to its k-th nearest neighbour, or (COMP B deck) the average distance to its k nearest neighbours; above a threshold → anomaly.",
 theory:`<ul class="list"><li><b>Score</b> = distance to the k-th nearest neighbour, or the mean of the k nearest distances, as the question says.</li><li>Manhattan |x₁ − x₂| + |y₁ − y₂| or Euclidean √[(x₁ − x₂)² + (y₁ − y₂)²], as the question says.</li><li>Normalise the attributes first if their scales differ.</li></ul>`,
 steps:["Distance matrix.","Sort each point's distances.","Score = k-th smallest.","Rank; top score = outlier."],
 infer:`<p>“d has the largest score for both k = 1 and k = 2 (3), so <b>d is the outlier</b>: it is far from all the others, which sit close together.”</p>`,
 trap:"k = 1 misses two outliers that sit next to each other."});
S({id:"m5t3c", p:"m5t3", kind:"num", title:"DBSCAN: core, border and noise points",
 sum:"ε-neighbourhood, minPts; noise points are the outliers.",
 items:["ex_m5t3_3"],
 key:"<b>DBSCAN</b> is density-based clustering: dense regions become clusters, and points in no dense region are <b>noise</b>, which are the outliers.",
 theory:`<ul class="list"><li><b>ε</b>: neighbourhood radius · <b>minPts</b>: points needed (the point itself counts).</li>
<li><b>Core</b>: at least minPts points within ε (itself included).</li><li><b>Border</b>: not core, but within ε of a core point.</li>
<li><b>Noise</b>: neither, so an outlier.</li><li>Core points within ε of each other join the same cluster; their border points join it too.</li></ul>`,
 steps:["Distance table (Euclidean).","List each point's neighbours within ε.","Core: neighbours + itself ≥ minPts.","Border: within ε of a core.","Noise = the rest; link cores into clusters."],
 infer:`<p>“P9 is <b>noise</b>: its only neighbour P12 is not a core point, so P9 lies in no dense region and is the outlier. The other 11 points form two clusters.”</p>`,
 mistakes:["Forgetting that the point itself counts towards minPts.","Calling a border point noise."],
 clues:["“ε” and “minPts” given → DBSCAN."]});
S({id:"m5t3b", p:"m5t3", kind:"th", title:"Distance-based vs density-based detection",
 sum:"Fixed distance vs neighbourhood density; LOF handles varying density.",
 items:["p_m5t3_1"],
 key:"Distance-based uses one global distance; density-based counts how many points lie within distance d (proportion p). Both fail when clusters have <b>different densities</b>; LOF fixes this by comparing a point with its own neighbours."});

S({id:"m5t4a", p:"m5t4", kind:"num", title:"Local Outlier Factor on 2-D points (Manhattan)",
 sum:"k-distance → N_k → reach-dist → lrd → LOF.",
 items:["ex_m5t4_1"],
 key:"<b>LOF</b> compares a point's local density with that of its neighbours. LOF ≈ 1 → normal; <b>LOF clearly &gt; 1 → outlier</b>.",
 theory:`<ol class="list"><li><b>k-distance(p)</b>: distance to the k-th nearest neighbour.</li><li><b>N_k(p)</b>: all points within k-distance (ties included).</li>
<li><b>reach-dist(p, o) = max(k-distance(o), dist(p, o))</b></li><li><b>lrd(p) = |N_k(p)| / Σ reach-dist(p, o)</b></li><li><b>LOF(p) = [Σ lrd(o) / |N_k(p)|] / lrd(p)</b></li></ol>`,
 steps:["Distance matrix.","k-distance and N_k for every point.","reach-dist for each neighbour.","lrd for every point.","LOF; the largest is the outlier."],
 infer:`<p>“LOF(d) = 2.00, about twice as sparse as its neighbours, while a, c (0.88) and b (1.33) are near 1: <b>d is the outlier</b>; its neighbourhood is far less dense than its neighbours'.”</p>`,
 mistakes:["Using dist(p, o) instead of the max in reach-dist.","Dropping tied neighbours from N_k."]});
S({id:"m5t4b", p:"m5t4", kind:"num", title:"Local Outlier Factor for points on a line",
 sum:"Same five steps with distance |x − y|.",
 items:["ex_m5t4_2","p_m5t4_1"],
 key:"One-dimensional LOF: identical steps, simpler distances.",
 infer:`<p>“S has the largest LOF, far above 1, so S = 9 is the outlier; P, Q and R have LOF near 1.”</p>`});

S({id:"m5t5a", p:"m5t5", kind:"num", title:"Generating SMOTE synthetic points",
 sum:"x_new = x + λ(x_nn − x), 0 ≤ λ ≤ 1.",
 items:["ex_m5t5_1","ex_m5t5_3","p_m5t5_1"],
 key:"<b>SMOTE</b> creates new minority-class points on the line between a minority point and one of its nearest minority neighbours.",
 theory:`<p><b>x_new = x + λ × (x_nn − x)</b>, λ random in [0, 1]. λ = 0 gives x, λ = 1 gives x_nn.</p>`,
 steps:["Distances from x to the other minority points; pick the nearest.","Difference x_nn − x.","Multiply by λ, add to x.","Label the new point as minority."],
 infer:`<p>“(3, 4) lies halfway between A and B: SMOTE fills the gap between real fraud cases instead of copying them, so the model learns a wider fraud region.”</p>`});
S({id:"m5t5b", p:"m5t5", kind:"num", title:"How many synthetic points SMOTE must create",
 sum:"Needed = majority − minority; per point = needed / minority.",
 items:["ex_m5t5_2"],
 key:"To balance the classes, create (majority − minority) synthetic records, spread evenly over the minority points.",
 theory:`<p>Needed = N_major − N_minor · per original = needed / N_minor · over-sampling % = per original × 100.</p>`,
 steps:["Count majority and minority in the training set.","Needed = difference.","Per original = needed / minority.","Over-sampling % and the new class sizes."],
 infer:`<p>“After SMOTE the training set is 50:50, so the model can no longer score well by ignoring fraud. The test set is not touched, so its results still reflect the real fraud rate.”</p>`});
S({id:"m5t5c", p:"m5t5", kind:"th", title:"SMOTE vs random sampling; evaluating after SMOTE",
 sum:"Synthetic vs copied vs discarded; judge with precision, recall, F1.",
 items:["p_m5t5_2","p_m5t5_3"],
 key:"Random over-sampling <b>copies</b> minority points (overfits); random under-sampling <b>discards</b> majority points (loses data); SMOTE <b>synthesises</b> new ones. Apply it to the training set only and judge with precision, recall, F1, not accuracy."});

/* Module 5 self-study */
D.parents.push({id:"m5t6", m:"m5", title:"Self-study: Autoencoders and Anomaly Detection Metrics",
 classification:"bonly", priority:"medium", core:false, type:"problem-solving", marks:5, los:["LO 5.4","LO 5.6"],
 src:"Syllabus self-learning topics (Module 5) · standard textbook treatment",
 summary:"Reconstruction-error detection with autoencoders; confusion matrix, precision, recall, F1 and AUC-PR.",
 whatIs:SELF, concept:"", needToKnow:["Autoencoder: encoder → bottleneck → decoder, trained on normal data.","High reconstruction error → anomaly.","Confusion matrix, precision, recall, F1.","Why accuracy misleads and AUC-PR does not."],
 recognition:{clues:["“Confusion matrix”, “precision”, “recall”, “F1”, “AUC-PR”, “autoencoder”."], firstStep:"Fill the 2 × 2 confusion matrix and check the totals.", wording:["For the given confusion matrix compute precision, recall and F1.","Explain how an autoencoder detects anomalies."], trap:"Reporting accuracy for imbalanced data."},
 examAnswer:{short:"Define precision and recall.", medium:"Confusion matrix numerical.", long:"Numerical + why accuracy misleads + AUC-PR."},
 mistakes:[], examples:[], practice:[], questions:[{q:"For the given confusion matrix compute accuracy, precision, recall and F1 and interpret.", marks:5, source:"predicted"}]});
add("m5t6","examples",[
 {id:"ex_m5t6_1", title:"Fraud detector: confusion matrix, precision, recall, F1", category:"Anomaly detection metrics",
  recog:"Counts of correct and wrong flags are given for an imbalanced problem.",
  need:"TP, FP, FN, TN; the four formulas.",
  q:"A fraud model is tested on 1,000 transactions, of which 50 are actually fraud. It flags 60 transactions as fraud, and 40 of those are truly fraud. Build the confusion matrix and compute accuracy, precision, recall (sensitivity), specificity and F1. Is the model good?",
  steps:["TP = 40 (flagged and fraud); FP = 60 − 40 = <b>20</b>; FN = 50 − 40 = <b>10</b>; TN = 1000 − 40 − 20 − 10 = <b>930</b>.",
   "Accuracy = (TP + TN)/N = 970/1000 = <b>97%</b>.",
   "Precision = TP/(TP + FP) = 40/60 = <b>0.667</b>.",
   "Recall = TP/(TP + FN) = 40/50 = <b>0.80</b>.",
   "Specificity = TN/(TN + FP) = 930/950 = <b>0.979</b>.",
   "F1 = 2PR/(P + R) = 2(0.667)(0.80)/(1.467) = <b>0.727</b>."],
  answer:`<div class="scroll"><table class="t num"><thead><tr><th></th><th>Predicted fraud</th><th>Predicted normal</th><th>Total</th></tr></thead><tbody>
<tr><td><b>Actual fraud</b></td><td>TP = 40</td><td>FN = 10</td><td>50</td></tr><tr><td><b>Actual normal</b></td><td>FP = 20</td><td>TN = 930</td><td>950</td></tr>
<tr><td>Total</td><td>60</td><td>940</td><td>1000</td></tr></tbody></table></div>
<div class="answer">Accuracy 97% · Precision 0.667 · Recall 0.80 · Specificity 0.979 · F1 0.727</div>`,
  why:"With 95% normal transactions, a model that flags nothing scores 95% accuracy; precision and recall look only at the fraud class.",
  trap:"Calling the model excellent because accuracy is 97%."}]);
add("m5t6","practice",[
 {id:"p_m5t6_1", d:"basic", marks:5, q:"Explain how an autoencoder is used for anomaly detection. Draw its structure.",
  a:`An <b>autoencoder</b> is a neural network trained to reproduce its input: <b>encoder</b> → small <b>bottleneck</b> (compressed code) → <b>decoder</b> → reconstruction x̂.<br>
Input x → Encoder → Bottleneck → Decoder → x̂<br><br>
<ol class="list"><li>Train it on <b>normal data only</b>, so it learns to rebuild normal patterns well.</li>
<li>For a new point compute the <b>reconstruction error</b> ‖x − x̂‖² (MSE).</li>
<li>Set a threshold from the training errors (e.g. mean + 3σ, or the 95th–99th percentile).</li>
<li>Error above the threshold → <b>anomaly</b>: the network has never seen anything like it.</li></ol>
Advantages: unsupervised, handles many dimensions and non-linear patterns (images, sensor data). Limitations: needs a lot of normal data, the threshold must be chosen, and the model is hard to interpret.`},
 {id:"p_m5t6_2", d:"standard", marks:3, q:"An autoencoder's reconstruction errors on normal training data have mean 0.02 and SD 0.01. Using the threshold mean + 3σ, classify new points with errors 0.03, 0.12 and 0.05.",
  a:`Threshold = 0.02 + 3(0.01) = <b>0.05</b>.<br>0.03 → normal · <b>0.12 → anomaly</b> · 0.05 → on the threshold, normal (not above it).`},
 {id:"p_m5t6_3", d:"standard", marks:5, q:"A machine-failure detector gives TP = 30, FP = 10, FN = 20, TN = 940. Compute accuracy, precision, recall and F1 and interpret.",
  hint:"Recall = TP/(TP + FN).",
  a:`N = 1000. Accuracy = 970/1000 = <b>97%</b>. Precision = 30/40 = <b>0.75</b>. Recall = 30/50 = <b>0.60</b>. F1 = 2(0.75)(0.60)/1.35 = <b>0.667</b>.`},
 {id:"p_m5t6_4", d:"basic", marks:5, q:"What is AUC-PR? Why is it preferred to accuracy and to ROC-AUC for anomaly detection?",
  a:`The detector outputs a score; each threshold gives one (recall, precision) pair. Plotting precision (y) against recall (x) for all thresholds gives the <b>precision–recall curve</b>; <b>AUC-PR</b> is the area under it (0 to 1, higher is better).<br>
<ul class="list"><li>A random detector's AUC-PR equals the <b>share of anomalies</b> (e.g. 0.05 for 5%), so the baseline is honest about imbalance.</li>
<li>ROC-AUC uses the false-positive rate FP/(FP + TN); with a huge TN, many false alarms still give a tiny FPR, so ROC-AUC looks better than the model is.</li>
<li>Accuracy is dominated by the majority class: flagging nothing scores 95%.</li></ul>
Report AUC-PR together with precision, recall and F1 at the chosen threshold.`}]);
S({id:"m5t6a", p:"m5t6", kind:"num", tag:"self", title:"Confusion matrix, precision, recall and F1",
 sum:"TP, FP, FN, TN → precision, recall, F1; why accuracy misleads.",
 items:["ex_m5t6_1","p_m5t6_3"],
 key:"For anomaly detection, judge the model on the <b>rare class</b>: how many flags are right (<b>precision</b>) and how many anomalies are caught (<b>recall</b>).",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Measure</th><th>Formula</th><th>Question it answers</th></tr></thead><tbody>
<tr><td>Accuracy</td><td>(TP + TN)/N</td><td>How often right overall?</td></tr>
<tr><td>Precision</td><td>TP/(TP + FP)</td><td>Of the flags, how many are real?</td></tr>
<tr><td>Recall (sensitivity)</td><td>TP/(TP + FN)</td><td>Of the real anomalies, how many caught?</td></tr>
<tr><td>Specificity</td><td>TN/(TN + FP)</td><td>Of the normals, how many passed?</td></tr>
<tr><td>F1</td><td>2PR/(P + R)</td><td>Balance of precision and recall</td></tr></tbody></table></div>`,
 steps:["Fill the 2 × 2 matrix (check the totals).","Accuracy, precision, recall, F1.","Compare accuracy with the “flag nothing” baseline.","Infer which error is costlier."],
 infer:`<p>“Accuracy 97% looks excellent, but flagging nothing would already score 95%. Recall 0.80: the model <b>catches 80% of fraud</b> and misses 10 cases; precision 0.667: one in three alarms is false. F1 = 0.73 is the fairer single score.”</p>`,
 mistakes:["Swapping FP and FN.","Using accuracy as the main metric on imbalanced data."]});
S({id:"m5t6b", p:"m5t6", kind:"th", tag:"self", title:"Autoencoders for anomaly detection",
 sum:"Train on normal data; high reconstruction error → anomaly.",
 items:["p_m5t6_1","p_m5t6_2"],
 key:"An autoencoder squeezes the input through a bottleneck and rebuilds it. Trained on normal data, it rebuilds normal points well and anomalies badly: <b>reconstruction error above a threshold → anomaly</b>."});
S({id:"m5t6c", p:"m5t6", kind:"th", tag:"self", title:"AUC-PR",
 sum:"Area under the precision–recall curve; honest baseline for rare classes.",
 items:["p_m5t6_4"],
 key:"<b>AUC-PR</b> summarises precision vs recall over all thresholds. Its random baseline equals the anomaly share, so it is the right score for imbalanced data."});

/* ============================== MODULE 6 ============================== */
S({id:"m6t1a", p:"m6t1", kind:"th", title:"Components of a time series",
 sum:"Trend, seasonality, cyclical, irregular.",
 items:["ex_m6t1_1"],
 key:"<b>Trend</b> long-term movement · <b>Seasonality</b> repeats at a fixed interval · <b>Cyclical</b> long swings with no fixed period · <b>Irregular</b> random shocks.",
 write:{short:"Name and define the four.", long:"Four components identified in a story, with a sketch."}});
S({id:"m6t1b", p:"m6t1", kind:"th", title:"Taxonomy of forecasting methods; when to forecast",
 sum:"Decomposition, smoothing, regression, machine learning.",
 items:["p_m6t1_2"],
 key:"Four families: <b>decomposition</b> (classical, X11) · <b>smoothing</b> (moving average, exponential) · <b>regression</b> (on time, with seasonality, ARIMA) · <b>machine learning</b> (neural nets)."});
S({id:"m6t1c", p:"m6t1", kind:"th", tag:"nonum", title:"ARIMA (theory only)",
 sum:"AR(p) past values, I(d) differencing, MA(q) past errors.",
 items:["p_m6t1_1"],
 key:"<b>ARIMA(p, d, q)</b>: <b>AR</b> regresses the series on its own p past values; <b>I</b> differences it d times to make it stationary; <b>MA</b> regresses on q past forecast errors. Learn it as a short note: no numerical.",
 theory:`<ul class="list"><li>Built on <b>autocorrelation</b>: a series correlates with its own lags.</li><li><b>Stationary</b>: mean and variance do not change with time; differencing yₜ − yₜ₋₁ removes a trend.</li>
<li>Steps (Box–Jenkins): make stationary → identify p, q (ACF/PACF) → estimate → check residuals → forecast.</li><li>ARIMA(0, 1, 0) is the random walk (naïve forecast). It sits under <b>regression-based</b> methods in the taxonomy.</li></ul>`,
 write:{short:"Expand ARIMA and the three parameters.", long:"AR, I, MA + stationarity + Box–Jenkins steps + one use."},
 q:[{q:"Write a short note on ARIMA.", marks:5}]});

S({id:"m6t2a", p:"m6t2", kind:"num", title:"Additive decomposition of quarterly data",
 sum:"Centred MA trend → Y − T → seasonal indices summing to 0 → forecast T + S.",
 items:["ex_m6t2_1"],
 key:"<b>Additive model:</b> Y = T + S + I. Use it when the seasonal swing is about the <b>same size</b> every year.",
 theory:`<ul class="list"><li>Centred 2×4 MA: T(t) = [½Y(t−2) + Y(t−1) + Y(t) + Y(t+1) + ½Y(t+2)]/4</li><li>Detrend: Y − T</li>
<li>Seasonal index = average detrended value per quarter, adjusted so the four add to 0</li><li>Trend slope = (last T − first T)/(quarters between)</li><li>Forecast = projected T + S</li></ul>`,
 steps:["Centred moving averages (none for the first and last two quarters).","Y − T for each quarter.","Average per quarter; adjust to sum 0.","Trend slope; project T.","Forecast = T + S; infer."],
 infer:`<p>“Q4 has the largest index (about +16): sales in Q4 run about 16 units <b>above</b> trend, Q1–Q2 below it. The trend rises by about 0.5 per quarter, so the forecast is ___.”</p>`,
 mistakes:["Not centring the 4-quarter average.","Forgetting to adjust the indices to sum to 0."]});
S({id:"m6t2b", p:"m6t2", kind:"num", title:"Multiplicative decomposition",
 sum:"Y / T → seasonal indices summing to 4 → forecast T × S.",
 items:["ex_m6t2_2"],
 key:"<b>Multiplicative model:</b> Y = T × S × I. Use it when the seasonal swing <b>grows with the level</b> of the series.",
 theory:`<p>Detrend Y / T; indices average per quarter, adjusted so the four add to 4 (average 1). Forecast = T × S.</p>`,
 infer:`<p>“Index 1.525 for Q4: Q4 sales are about <b>52% above</b> trend; 0.628 for Q2: about 37% below.”</p>`});
S({id:"m6t2c", p:"m6t2", kind:"num", title:"Forecasting from trend and seasonal indices",
 sum:"Project T to the target quarter, then + S or × S.",
 items:["p_m6t2_1"],
 key:"Forecast = trend at the target quarter, adjusted by that quarter's seasonal index.",
 theory:`<p>T(target) = T(last) + slope × (quarters ahead). Additive: F = T + S · Multiplicative: F = T × S.</p>`,
 infer:`<p>“The two models agree closely; when the seasonal swing grows with the level, trust the multiplicative forecast.”</p>`});
S({id:"m6t2d", p:"m6t2", kind:"th", title:"Additive vs multiplicative decomposition",
 sum:"Constant vs growing seasonal swing; steps of classical decomposition.",
 items:["p_m6t2_2"],
 key:"Additive: seasonal effect in <b>units</b>, constant size. Multiplicative: seasonal effect as a <b>ratio</b>, grows with the trend."});

S({id:"m6t3a", p:"m6t3", kind:"num", title:"Average method and moving-average forecasts",
 sum:"Average of all past values vs average of the last k.",
 items:["ex_m6t3_1"],
 key:"Both forecast the next value as an average of past values; the <b>moving average</b> drops old values, so it follows changes faster.",
 theory:`<ul class="list"><li><b>Average:</b> Fₜ = (y₁ + … + yₜ₋₁)/(t − 1)</li><li><b>Moving average (k):</b> Fₜ = (yₜ₋₁ + … + yₜ₋ₖ)/k; no forecast for the first k periods</li></ul>`,
 steps:["Average-method forecasts from t = 2.","k-period MA forecasts from t = k + 1.","Errors eₜ = yₜ − Fₜ.","Forecast the next period; infer."],
 infer:`<p>“The 3-period moving average has smaller errors because the series is rising: the average method keeps old low values and <b>lags</b> behind the trend.”</p>`});
S({id:"m6t3b", p:"m6t3", kind:"num", title:"Naïve forecast and simple exponential smoothing",
 sum:"Fₙ₊₁ = yₙ; Fₙ₊₁ = αyₙ + (1 − α)Fₙ.",
 items:["p_m6t3_1","p_m6t3_2"],
 key:"<b>Exponential smoothing</b> weights recent values most, with weights falling by (1 − α) each step back.",
 theory:`<ul class="list"><li><b>Naïve:</b> Fₙ₊₁ = yₙ · seasonal naïve Fₙ₊₁ = yₙ₊₁₋ₛ</li><li><b>SES:</b> Fₙ₊₁ = α yₙ + (1 − α) Fₙ, 0 &lt; α &lt; 1</li><li>High α follows the data; low α smooths more; α = 1 is naïve. Holt adds trend (β), Holt–Winters adds seasonality (γ).</li></ul>`,
 steps:["Start value F₂ (given, often y₁).","Apply the recursion one period at a time.","Forecast the next period.","Infer the effect of α."],
 infer:`<p>“With α = 0.3 the forecast reacts slowly to the latest jump; a larger α would follow recent values more closely but also pass on more noise.”</p>`});

S({id:"m6t4a", p:"m6t4", kind:"num", title:"MAE, RMSE, MAPE and MASE for forecasts",
 sum:"MASE = MAE / naïve MAE; < 1 beats the naïve forecast.",
 items:["ex_m6t4_1","p_m6t4_1"],
 key:"Compare forecasting methods on their errors eₜ = yₜ − Fₜ. <b>MASE</b> compares a method with the naïve forecast.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Measure</th><th>Formula</th></tr></thead><tbody>
<tr><td>MAE</td><td>(1/n) Σ|eₜ|</td></tr><tr><td>RMSE</td><td>√[(1/n) Σeₜ²]</td></tr><tr><td>MAPE</td><td>(100/n) Σ|eₜ|/yₜ</td></tr>
<tr><td>MASE</td><td>MAE / naïve MAE, naïve MAE = mean of |yₜ − yₜ₋₁|</td></tr></tbody></table></div>`,
 steps:["Errors for each forecast.","|e|, e², |e|/y columns.","MAE, RMSE, MAPE.","Naïve MAE over the same periods; MASE.","Compare methods; infer."],
 infer:`<p>“MASE = 1.21 &gt; 1: the moving average is <b>worse than the naïve forecast</b> on this series. RMSE slightly above MAE → errors fairly even, no single big miss.”</p>`,
 mistakes:["Naïve MAE over different periods than the method's.","Reading MASE &lt; 1 as worse."]});
S({id:"m6t4b", p:"m6t4", kind:"num", title:"Linear regression on time and its evaluation",
 sum:"y′ = a·t + b by least squares, forecast, then the four measures.",
 items:["ex_m6t4_2"],
 key:"Treat time t = 1, 2, 3 … as x and fit a least-squares line; extend it to forecast.",
 theory:`<p>a = [nΣty − ΣtΣy]/[nΣt² − (Σt)²], b = ȳ − a·t̄. Forecast y′(n + 1).</p>`,
 infer:`<p>“Month 6 ≈ 53.6. MASE far below 1: the trend line beats the naïve forecast. These are in-sample errors on 5 points, and month 6 is an extrapolation.”</p>`});
S({id:"m6t4c", p:"m6t4", kind:"th", title:"Choosing an error measure",
 sum:"MAE simple, RMSE punishes big misses, MAPE %, MASE scale-free vs naïve.",
 items:["p_m6t4_2"],
 key:"MAE: easy, in units. RMSE: punishes large errors. MAPE: a percentage, fails near y = 0. MASE: scale-free, compares with naïve, works across series."});

/* Module 6 self-study */
D.parents.push({id:"m6t5", m:"m6", title:"Self-study: Seasonal Decomposition and Stationarity",
 classification:"bonly", priority:"medium", core:false, type:"theory", marks:5, los:["LO 6.1","LO 6.3"],
 src:"Syllabus self-learning topics (Module 6) · standard textbook treatment",
 summary:"Seasonal adjustment and STL; stationarity, differencing, and the ADF and KPSS tests.",
 whatIs:SELF, concept:"", needToKnow:["Seasonally adjusted series = Y − S or Y / S.","STL: seasonal-trend decomposition using LOESS.","Stationary: constant mean, variance and autocorrelation.","ADF: H₀ non-stationary; KPSS: H₀ stationary."],
 recognition:{clues:["“Stationarity”, “unit root”, “ADF”, “KPSS”, “seasonally adjusted”."], firstStep:"Define stationarity, then name ADF and KPSS with their null hypotheses.", wording:["Explain stationarity and how it is tested.","What is seasonal adjustment?"], trap:"ADF and KPSS have opposite null hypotheses."},
 examAnswer:{short:"Define stationarity.", medium:"Stationarity + ADF/KPSS.", long:"Stationarity, tests, differencing, link to ARIMA."},
 mistakes:[], examples:[], practice:[], questions:[{q:"Explain the concept of stationarity and the tests used to check it.", marks:5, source:"predicted"}]});
add("m6t5","practice",[
 {id:"p_m6t5_1", d:"basic", marks:5, q:"What is seasonal decomposition? Explain seasonal adjustment and the STL method.",
  a:`<b>Seasonal decomposition</b> splits a series into trend, seasonal and remainder components (Module 6: additive Y = T + S + I or multiplicative Y = T × S × I).<br><br>
<b>Seasonal adjustment</b> removes the seasonal part so the underlying movement shows: adjusted = Y − S (additive) or Y / S (multiplicative). Example: unemployment figures are published seasonally adjusted so a December rise is not mistaken for a real change.<br><br>
<b>STL</b> (Seasonal-Trend decomposition using LOESS) estimates trend and seasonality with local smoothing. Unlike classical decomposition it gives values for the first and last periods, lets the seasonal pattern change slowly over time, and resists outliers (robust option).`},
 {id:"p_m6t5_2", d:"standard", marks:5, q:"Explain the concept of stationarity. How is it checked and how is a non-stationary series made stationary?",
  a:`A series is <b>stationary</b> when its statistical properties do not depend on time: <b>constant mean</b>, <b>constant variance</b>, and autocorrelation that depends only on the lag. A trend or seasonality makes a series non-stationary.<br><br>
<b>Checks</b><ul class="list"><li>Plot: a visible trend or changing spread → non-stationary.</li><li>ACF that dies out very slowly → non-stationary.</li>
<li><b>ADF test</b> (Augmented Dickey–Fuller): H₀ = series has a unit root (non-stationary). p &lt; 0.05 → reject → stationary.</li>
<li><b>KPSS test</b>: H₀ = series is stationary. p &lt; 0.05 → reject → non-stationary.</li></ul>
<b>Making it stationary:</b> differencing yₜ − yₜ₋₁ (removes trend; this is the “I” in ARIMA), seasonal differencing yₜ − yₜ₋ₛ, and a log transform to steady the variance.`}]);
S({id:"m6t5a", p:"m6t5", kind:"th", tag:"self", title:"Seasonal decomposition and seasonal adjustment",
 sum:"Adjusted = Y − S or Y / S; STL handles changing seasonality.",
 items:["p_m6t5_1"],
 key:"<b>Seasonal adjustment</b> removes S so the trend shows. <b>STL</b> decomposes with local smoothing, allowing the seasonal pattern to change over time."});
S({id:"m6t5b", p:"m6t5", kind:"th", tag:"self", title:"Stationarity and its tests (ADF, KPSS)",
 sum:"Constant mean and variance; ADF H₀ non-stationary, KPSS H₀ stationary.",
 items:["p_m6t5_2"],
 key:"<b>Stationary</b> = constant mean, variance and autocorrelation over time. <b>ADF</b>: H₀ non-stationary. <b>KPSS</b>: H₀ stationary. Fix with <b>differencing</b>."});

/* new practice for parents (Modules 5–6) */
add("m6t1","practice",[
 {id:"p_m6t1_2", d:"basic", marks:5, q:"Give the taxonomy of time series forecasting methods. When should forecasting be used and when avoided?",
  a:`<div class="scroll"><table class="t"><thead><tr><th>Family</th><th>Methods</th></tr></thead><tbody>
<tr><td>Decomposition-based</td><td>Classical decomposition, STS, X11</td></tr><tr><td>Smoothing-based</td><td>Average, moving average, exponential smoothing (Holt, Holt–Winters)</td></tr>
<tr><td>Regression-based</td><td>Linear regression on time, regression with seasonality, ARIMA</td></tr><tr><td>Machine-learning-based</td><td>Neural networks, LSTM</td></tr></tbody></table></div>
<b>Use</b> when data are consistent, patterns exist and the future depends on the past. <b>Avoid</b> when the data are very noisy, show no pattern, or the drivers are unknown or changing (e.g. a sudden policy change).`}]);
add("m6t3","practice",[
 {id:"p_m6t3_2", d:"basic", marks:3, q:"y = 10, 12, 11, 14 for t = 1 … 4. Using simple exponential smoothing with α = 0.5 and F₂ = 10, find F₃, F₄ and the forecast F₅.",
  a:`F₃ = 0.5(12) + 0.5(10) = <b>11</b>.<br>F₄ = 0.5(11) + 0.5(11) = <b>11</b>.<br>F₅ = 0.5(14) + 0.5(11) = <b>12.5</b>.`}]);

/* inference for new and existing Module 5–6 items */
Object.assign(D.analysis, {
 ex_m5t3_1: A("<b>d is the top outlier for both k = 1 and k = 2</b> (score 3): its nearest neighbour is already 3 units away, while a, b and c are 1–2 units apart.",
   "The ranking does not change with k here, so the verdict is robust."),
 ex_m5t5_1: A("Both synthetic points lie <b>on the segment between A and its nearest minority neighbour B</b>: SMOTE fills the space between real minority cases instead of duplicating them.",
   "λ = 0.5 lands halfway; λ = 0.2 stays close to A. A random λ spreads the new points along the segment."),
 ex_m5t5_2: A("900 new fraud records, <b>18 per original</b>, give a 50:50 training set (950 : 950).",
   "Only the training set is balanced; the test set keeps its real 5% fraud rate so the evaluation stays honest."),
 p_m5t5_1: A("(2, 2.5) is a quarter of the way from P to Q and (4, 3.5) three-quarters of the way: both lie on the line PQ.",
   "Neither copies P or Q, so the minority region grows without exact duplicates."),
 ex_m5t6_1: A("Accuracy 97% looks excellent, but <b>flagging nothing would score 95%</b>, so accuracy says little here.",
   "Recall 0.80: 80% of fraud is caught and 10 cases slip through. Precision 0.667: one in three alarms is a false alarm.",
   "F1 = 0.73 is the fairer single score. If missed fraud is costly, push recall up even at some loss of precision."),
 p_m5t6_2: A("Only the point with error 0.12 is an <b>anomaly</b>: it is 10σ above the normal mean, so the network cannot rebuild it.",
   "0.05 sits exactly on the threshold; with a rule of “above the threshold” it is normal, but it is worth a second look."),
 p_m5t6_3: A("Accuracy 97% hides a weak detector: <b>recall 0.60 means 40% of failures are missed</b>.",
   "Precision 0.75: most alarms are real. For machine failures a miss is costlier than a false alarm, so the threshold should be lowered to raise recall."),
 ex_m5t2_2: A("<b>No anomalies</b>: all 30 z-scores lie inside ±3. The most unusual day, sales of 80, is 2.63 SDs below the mean: low, but within normal variation.",
   "σ uses n − 1 (sample SD), as in the COMP B deck."),
 ex_m5t2_3: A("<b>−50 and 1456 are outliers</b>. 1456 is far above the upper fence (131.5), most likely a data error such as an extra digit, so check it before deleting.",
   "−50 is only just below the lower fence (−48.5), so it is a mild outlier. The quartiles hardly move because of 1456, which is why the IQR rule works here."),
 ex_m5t3_2: A("<b>P8 (9, 9) is the anomaly</b>: its score 6.63 is far above the threshold 3, while P1–P7 score 1 to 1.28 because they sit in one tight group.",
   "The verdict is clear-cut, so it would hold for any threshold between about 1.3 and 6.6."),
 ex_m5t3_3: A("<b>P9 is noise, which makes it the outlier</b>: its only neighbour P12 is a border point, not a core point, so P9 belongs to no dense region.",
   "DBSCAN also finds two clusters without being told how many, which k-means cannot do. A different ε or minPts can change which points count as noise."),
 ex_m5t4_2: A("<b>A = 0 is the outlier</b> (LOF ≈ 4.96): its neighbourhood is about five times sparser than its neighbours'.",
   "B, C and D have LOF between 0.87 and 1.33, close to 1, so they are normal points in one dense group."),
 ex_m5t5_3: A("Z = (2.4, 2.2) lies 40% of the way along the segment from P1 to P4: a new minority point, not a copy.",
   "With k = 3, P4 was one of three candidate neighbours (P3, P4, P2); another random pick or λ would give a different point in the same minority region."),
 p_m6t3_2: A("The forecast moves only halfway towards each new value (α = 0.5): F₅ = 12.5 sits between the last value 14 and the old forecast 11.",
   "A larger α would put F₅ closer to 14; a smaller one would keep it nearer 11.")
});
})();
