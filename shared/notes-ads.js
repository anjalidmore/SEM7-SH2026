/* =====================================================================
   ADS — step-by-step notes for syllabus.html
   One syllabus topic = one small predicted question (an array when a topic
   needs a theory step and a numerical step). Key = module.entry.topic.
   Note: {q, m (marks), a (plain text for SEM7.ui.rich, or HTML), trap, ask[]}
   Formulae and symbols follow the class formula sheet used in the ADS site
   (e.g. the regression line is y' = ax + b with a = slope). The small
   worked examples are made for these notes; the methods are the class ones.
   ===================================================================== */
(function(){
  "use strict";
  var N = (window.SEM7_NOTES = window.SEM7_NOTES || {}).ads = {};

  /* ------------------------------------------------ Module 1 */
  N["0.0.0"] = { q:"What is Data Science?", m:2,
      a:"Data Science — an interdisciplinary field that extracts useful knowledge and insight from data, using statistics, computer science (programming, machine learning) and domain knowledge.\nIt works on structured and unstructured data.\nGoal: turn raw data into decisions: describe, predict, prescribe.\nExamples: recommendation systems, fraud detection, demand forecasting.",
      ask:["Define data science and list its components"] };
  N["0.0.1"] = { q:"Explain the Data Science process.", m:5,
      a:"1. Business understanding: define the problem and the objective.\n2. Data collection / understanding: gather the data; explore it.\n3. Data preparation: clean, handle missing values and outliers, transform, select features.\n4. Modelling: choose an algorithm; train on the training data.\n5. Evaluation: test on unseen data; check against the objective.\n6. Deployment: put the model into use; monitor and update.\nThe process is iterative: poor evaluation sends you back to preparation or modelling.\nThis is the CRISP-DM cycle.",
      ask:["Draw the data science life cycle", "Explain CRISP-DM"] };
  N["0.1.0"] = { q:"How does data volume motivate data science techniques?", m:2,
      a:"Volume — the amount of data is far too large for manual analysis or simple tools.\n- Data is generated continuously: transactions, sensors, social media, logs.\n- Sizes run from terabytes to petabytes.\n- Patterns are hidden in millions of records.\nSo we need automated, scalable techniques: distributed storage, sampling, machine learning.",
      ask:["Why are traditional methods not enough for today's data?"] };
  N["0.1.1"] = { q:"How do dimensions and complexity motivate data science techniques?", m:3,
      a:"Dimensions — the number of attributes (columns) per record. A customer record can have hundreds.\n- Curse of dimensionality: as dimensions grow, data becomes sparse and distances lose meaning.\n- Humans cannot visualise more than 3 dimensions.\nComplexity — data comes in many types (numbers, text, images, time series), with complex, non-linear relationships between variables.\nSo we need: dimensionality reduction, feature selection, and models that learn complex relations.",
      ask:["What is the curse of dimensionality?"] };
  N["0.1.2"] = { q:"What are the data science tasks? Give an example of each.", m:5,
      a:"<table><tr><th>Task</th><th>What it does</th><th>Example</th></tr><tr><td>Classification</td><td>Predicts a category</td><td>Spam or not spam</td></tr><tr><td>Regression</td><td>Predicts a number</td><td>House price</td></tr><tr><td>Clustering</td><td>Groups similar records; no labels</td><td>Customer segmentation</td></tr><tr><td>Association analysis</td><td>Finds items that occur together</td><td>Market basket: bread → butter</td></tr><tr><td>Anomaly detection</td><td>Finds unusual records</td><td>Credit card fraud</td></tr><tr><td>Time series forecasting</td><td>Predicts future values from past ones</td><td>Next month's sales</td></tr></table><p><b>Supervised</b> (labels given): classification, regression. <b>Unsupervised</b>: clustering, association.</p>",
      ask:["Identify the data science task in the given scenario", "Supervised vs unsupervised learning"] };
  N["0.2.0"] = { q:"Give an overview of data preparation.", m:5,
      a:"Data preparation — making raw data fit for modelling. It takes most of the project time.\n- Data exploration: understand the structure and summary statistics.\n- Data quality: remove duplicates, fix errors.\n- Missing values: delete the record, or fill with the mean / median / mode.\n- Outliers: detect and treat.\n- Data type conversion: categorical → numeric (encoding); numeric → categorical (binning).\n- Transformation: normalisation / standardisation, so that all attributes are on one scale.\n- Feature selection: drop irrelevant or redundant attributes.\n- Sampling: take a representative subset.",
      ask:["How are missing values handled?", "Why is normalisation needed?"] };
  N["0.3.0"] = { q:"Explain model building. What are training and test sets?", m:5,
      a:"Model — an abstract representation of the relationship between the input variables and the output, learned from data.\nSteps:\n1. Split the data: training set (to learn) and test set (to check).\n2. Choose the algorithm.\n3. Train: fit the model to the training data.\n4. Evaluate on the test data.\n5. Tune and repeat.\nHold-out method: Train = p × N, Test = (1 − p) × N; usually two-thirds / one-third.\n- Overfitting: memorises the training data; fails on new data.\n- Underfitting: too simple to capture the pattern.",
      trap:"Never evaluate on the training data.",
      ask:["Overfitting vs underfitting", "With N = 900 and a 2:1 split, find the train and test sizes"] };
  N["0.3.1"] = { q:"What is cross validation? Why is it used?", m:3,
      a:"Cross validation — testing a model by repeatedly splitting the data into training and test parts, so that every record is used for testing at some point.\nWhy:\n- A single hold-out split may be lucky or unlucky.\n- It uses all the data for both training and testing.\n- It gives a more reliable estimate of performance on unseen data.\n- It detects overfitting.\nTypes: hold-out, k-fold, leave-one-out, leave-p-out, bootstrapping.\nAccuracy = average of the accuracies of all the rounds.",
      ask:["Types of cross validation"] };
  N["0.3.2"] = { q:"Explain k-fold cross validation. For N = 100 and k = 5, find the train and test size per iteration.", m:5,
      a:"Steps:\n1. Divide the data into k equal folds.\n2. Use 1 fold as the test set and the other k − 1 folds as the training set.\n3. Repeat k times, so that each fold is the test set once.\n4. Accuracy = (1 ÷ k) × Σ accuracy of each round.\nNumerical: N = 100, k = 5\n- Fold size = N ÷ k = 20\n- Test per iteration = 20\n- Train per iteration = N − N ÷ k = 80\n- Iterations = 5\nUsual choice: k = 5 or 10.",
      trap:"The held-out fold is not used for training: train = N − N/k, not N.",
      ask:["Draw the k-fold diagram for k = 4"] };
  N["0.3.3"] = { q:"Explain leave-one-out cross validation (LOOCV).", m:3,
      a:"LOOCV — k-fold with k = n (the number of records).\n- Train on n − 1 records; test on the 1 left out.\n- Repeat n times.\nFor n = 50: train = 49, test = 1, iterations = 50.\nAdvantage — uses almost all the data for training; no randomness.\nDisadvantage — n models must be trained: very slow for large data.\nBest for: very small datasets.\nLeave-p-out: leave p records out each time; C(n, p) iterations: C(10, 2) = 45.",
      ask:["k-fold vs leave-one-out"] };
  N["0.3.4"] = { q:"Explain bootstrapping.", m:3,
      a:"Bootstrapping — building training sets by sampling with replacement.\nSteps:\n1. From n records, draw n records at random, with replacement. This is one bootstrap sample.\n2. Some records repeat; some are never picked.\n3. Train on the bootstrap sample; test on the records not picked (out-of-bag).\n4. Repeat many times and average.\nAbout 63.2% of the distinct records appear in a sample; about 36.8% are out-of-bag.\nUse: small datasets; estimating the variability of a statistic; bagging and random forests.",
      trap:"With replacement is the key phrase. Cross validation samples without replacement.",
      ask:["Bootstrapping vs k-fold cross validation"] };
  N["0.4.0"] = { q:"Differentiate data science and data analytics.", m:5,
      a:"<table><tr><th></th><th>Data Science</th><th>Data Analytics</th></tr><tr><td>Scope</td><td>Broad: the whole process from collection to deployment</td><td>Narrower: analysing existing data</td></tr><tr><td>Question</td><td>What will happen? What should we do?</td><td>What happened? Why?</td></tr><tr><td>Focus</td><td>Building predictive models; finding new questions</td><td>Answering specific, known questions</td></tr><tr><td>Data</td><td>Structured and unstructured</td><td>Mostly structured</td></tr><tr><td>Techniques</td><td>Machine learning, deep learning, statistics</td><td>Descriptive statistics, SQL, dashboards</td></tr><tr><td>Tools</td><td>Python, R, TensorFlow, Spark</td><td>Excel, SQL, Tableau, Power BI</td></tr><tr><td>Output</td><td>Models, data products</td><td>Reports, insights</td></tr></table>",
      ask:["Data scientist vs data analyst"] };
  N["0.5.0"] = { q:"List applications of Data Science.", m:5,
      a:"- Healthcare: disease prediction, medical image analysis.\n- Finance: fraud detection, credit scoring, algorithmic trading.\n- E-commerce: recommendation systems, price optimisation.\n- Marketing: customer segmentation, churn prediction.\n- Transport: route optimisation, demand forecasting (Uber, Ola).\n- Manufacturing: predictive maintenance, quality control.\n- Social media: sentiment analysis, targeted advertising.\n- Agriculture: crop yield prediction.\nFor each, name the task: fraud detection = anomaly detection; churn = classification; demand = forecasting.",
      ask:["Explain any two applications in detail"] };

  /* ------------------------------------------------ Module 2 */
  N["1.0.0"] = { q:"Explain the types of data.", m:5,
      a:"<table><tr><th>Type</th><th>Sub-type</th><th>Meaning</th><th>Example</th></tr><tr><td rowspan='2'>Qualitative (categorical)</td><td>Nominal</td><td>Names; no order</td><td>Gender, blood group</td></tr><tr><td>Ordinal</td><td>Ordered categories</td><td>Grades, ratings</td></tr><tr><td rowspan='2'>Quantitative (numerical)</td><td>Discrete</td><td>Countable whole numbers</td><td>Number of students</td></tr><tr><td>Continuous</td><td>Any value in a range</td><td>Height, weight</td></tr></table><p><b>Scales of measurement:</b> nominal → ordinal → interval (no true zero: temperature in °C) → ratio (true zero: weight, income).</p><p><b>By source:</b> primary (collected first-hand) and secondary (already collected).</p>",
      ask:["Classify the given variables", "Interval vs ratio scale"] };
  N["1.0.1"] = { q:"What are the properties of data (of a frequency distribution)?", m:3,
      a:"A dataset is described by four properties:\n- Central tendency: the typical or central value (mean, median, mode).\n- Dispersion (spread): how scattered the values are (range, quartile deviation, standard deviation).\n- Skewness: lack of symmetry; which side the tail is on.\n- Kurtosis: how peaked or flat the distribution is.\nTogether they give the shape, centre and spread of the data.",
      ask:["Name the measures used to describe a distribution"] };
  N["1.1.0"] = { q:"What is classification of data? Explain its types.", m:5,
      a:"Classification — arranging data into groups or classes by a common characteristic.\nTypes:\n- Geographical: by place (state-wise population).\n- Chronological: by time (year-wise sales).\n- Qualitative: by attribute (gender, literacy).\n- Quantitative: by a numerical value (marks, income), giving a frequency distribution.\nFrequency distribution terms:\n- Class interval i = (L − S) ÷ k\n- Number of classes: k = 1 + 3.322 log N (Sturges' rule)\n- Mid-point m = (lower limit + upper limit) ÷ 2\n- Exclusive classes: 10–20, 20–30. Inclusive classes: 10–19, 20–29.\n- Inclusive → exclusive: correction factor = (lower limit of 2nd class − upper limit of 1st class) ÷ 2.",
      ask:["Form a frequency distribution from the given raw data"] };
  N["1.1.1"] = { q:"What is tabulation? State the parts of a table.", m:3,
      a:"Tabulation — the systematic arrangement of classified data in rows and columns.\nParts of a table:\n1. Table number\n2. Title\n3. Captions: column headings\n4. Stubs: row headings\n5. Body: the figures\n6. Head note: units\n7. Footnote and source\nTypes: simple (one-way: one characteristic), two-way, manifold (many characteristics).\nClassification comes first; tabulation presents the classified data.",
      ask:["Classification vs tabulation"] };
  N["1.1.2"] = { q:"Explain the diagrammatic and graphic representation of data.", m:5,
      a:"<table><tr><th>Diagrams (categories)</th><th>Graphs (frequency / time)</th></tr><tr><td>Simple bar diagram</td><td>Histogram</td></tr><tr><td>Multiple bar diagram</td><td>Frequency polygon</td></tr><tr><td>Sub-divided (component) bar diagram</td><td>Frequency curve</td></tr><tr><td>Percentage bar diagram</td><td>Ogive (cumulative frequency curve)</td></tr><tr><td>Pie diagram</td><td>Line graph of a time series</td></tr></table><p><b>Pie angle</b> = (component ÷ total) × 360°. A 25% share → 90°.</p><p><b>Ogive:</b> 'less than' and 'more than' curves; they cross at the median.</p><p><b>Histogram:</b> gives the mode. <b>Ogive:</b> gives the median and quartiles.</p>",
      ask:["Draw a pie diagram for the given data", "Diagram vs graph"] };
  N["1.2.0"] = [
    { q:"What are the measures of central tendency? Find the mean, median and mode of 2, 4, 4, 6, 9.", m:5,
      a:"Mean — X̄ = ΣX ÷ N\nMedian — the middle value of the sorted data: the (N + 1) ÷ 2 th item.\nMode — the most frequent value.\nData: 2, 4, 4, 6, 9 (N = 5)\n1. Mean = 25 ÷ 5 = 5\n2. Median = 3rd item = 4\n3. Mode = 4\nEmpirical relation: Mode = 3 Median − 2 Mean\nMean is affected by extreme values; median and mode are not.",
      ask:["Merits and demerits of mean, median and mode"] },
    { q:"Give the formulae for mean, median and mode of a continuous (grouped) series.", m:5,
      a:"Mean (step deviation): X̄ = A + (Σfd′ ÷ N) × i, where d′ = (m − A) ÷ i\nMedian = L + [(N/2 − cf) ÷ f] × i\n- L: lower limit of the median class (the class containing the N/2 th item)\n- cf: cumulative frequency of the class before\n- f: frequency of the median class\nMode = L + [Δ1 ÷ (Δ1 + Δ2)] × i\n- Δ1 = f1 − f0, Δ2 = f1 − f2 (modal class frequency minus the one before / after)\nExample: classes 0–10, 10–20, 20–30 with f = 3, 5, 2. N = 10.\n- Median class: 10–20 (N/2 = 5). Median = 10 + [(5 − 3) ÷ 5] × 10 = 14\n- Mode = 10 + [2 ÷ (2 + 3)] × 10 = 14\n- Mean = (5×3 + 15×5 + 25×2) ÷ 10 = 140 ÷ 10 = 14",
      trap:"cf is the cumulative frequency of the class before the median class, not of the median class.",
      ask:["Compute the mean, median and mode of the given frequency distribution"] }
  ];
  N["1.2.1"] = [
    { q:"What are the measures of spread (dispersion)?", m:5,
      a:"<table><tr><th>Measure</th><th>Formula</th><th>Relative measure</th></tr><tr><td>Range</td><td>L − S</td><td>(L − S) ÷ (L + S)</td></tr><tr><td>Interquartile range</td><td>Q3 − Q1</td><td></td></tr><tr><td>Quartile deviation</td><td>(Q3 − Q1) ÷ 2</td><td>(Q3 − Q1) ÷ (Q3 + Q1)</td></tr><tr><td>Standard deviation</td><td>σ = √(Σx² ÷ N), x = X − X̄</td><td>C.V. = (σ ÷ X̄) × 100</td></tr><tr><td>Variance</td><td>σ²</td><td></td></tr></table><p><b>Coefficient of variation:</b> lower C.V. = more consistent.</p><p><b>Grouped data:</b> σ = √[Σfd′² ÷ N − (Σfd′ ÷ N)²] × i</p>",
      trap:"The coefficient of quartile deviation has a sum in the denominator.",
      ask:["Absolute vs relative measures of dispersion"] },
    { q:"Find the standard deviation and coefficient of variation of 2, 4, 4, 4, 5, 5, 7, 9.", m:5,
      a:"1. N = 8, ΣX = 40, X̄ = 5\n2. Deviations x = X − X̄: −3, −1, −1, −1, 0, 0, 2, 4\n3. x²: 9, 1, 1, 1, 0, 0, 4, 16 → Σx² = 32\n4. σ = √(32 ÷ 8) = √4 = 2\n5. Variance = 4\n6. C.V. = (2 ÷ 5) × 100 = 40%",
      ask:["Which of two batsmen / firms is more consistent?"] }
  ];
  N["1.2.2"] = { q:"What is symmetry of a distribution?", m:2,
      a:"Symmetrical distribution — the two sides of the centre are mirror images.\n- Mean = Median = Mode\n- Q3 − Median = Median − Q1\n- Skewness = 0\n- The curve is bell-shaped (the normal curve).\nAsymmetrical (skewed) distribution — one tail is longer than the other; the three averages differ.",
      ask:["Symmetric vs skewed distribution"] };
  N["1.2.3"] = { q:"What is skewness? State Karl Pearson's coefficient. Find it for Mean = 45, Mode = 42, σ = 5.", m:5,
      a:"Skewness — lack of symmetry.\n- Positive skew: long tail to the right. Mode < Median < Mean.\n- Negative skew: long tail to the left. Mean < Median < Mode.\nKarl Pearson's coefficient:\n- Sk = (Mean − Mode) ÷ σ\n- If the mode is ill-defined: Sk = 3 (Mean − Median) ÷ σ\nNumerical:\n1. Sk = (45 − 42) ÷ 5 = 0.6\n2. Positive, so the distribution is positively skewed.\nRange: usually −1 to +1 (−3 to +3 for the median form).",
      trap:"Use the median formula when the series is bimodal or the mode is not clear.",
      ask:["Compute Karl Pearson's coefficient of skewness for the given distribution"] };
  N["1.2.4"] = { q:"State Bowley's coefficient of skewness. Find it for Q1 = 20, Median = 30, Q3 = 50.", m:5,
      a:"Bowley's coefficient — based on quartiles.\nSk(B) = (Q3 + Q1 − 2 Median) ÷ (Q3 − Q1)\nNumerical:\n1. Numerator = 50 + 20 − 2 × 30 = 10\n2. Denominator = 50 − 20 = 30\n3. Sk(B) = 10 ÷ 30 = 0.33 → positively skewed\nRange: −1 to +1.\nUse it when: classes are open-ended, or the mode is not reliable.\nQuartiles (continuous): Qk = L + [(kN/4 − cf) ÷ f] × i",
      ask:["Karl Pearson vs Bowley", "Compute Bowley's coefficient from a frequency table"] };
  N["1.2.5"] = { q:"What is kurtosis? Find β2 for μ2 = 4, μ4 = 60 and interpret.", m:5,
      a:"<p><b>Kurtosis:</b> the peakedness or flatness of a distribution compared with the normal curve.</p><p>β2 = μ4 ÷ μ2², where μ2 = Σf(x − x̄)² ÷ N and μ4 = Σf(x − x̄)⁴ ÷ N.</p><table><tr><th>β2</th><th>Type</th><th>Shape</th></tr><tr><td>&gt; 3</td><td>Leptokurtic</td><td>More peaked than normal</td></tr><tr><td>= 3</td><td>Mesokurtic</td><td>Normal</td></tr><tr><td>&lt; 3</td><td>Platykurtic</td><td>Flatter than normal</td></tr></table><p><b>Numerical:</b> β2 = 60 ÷ 4² = 60 ÷ 16 = 3.75 &gt; 3 → leptokurtic.</p><p>Excess kurtosis γ2 = β2 − 3 = 0.75.</p>",
      trap:"μ2 is squared in the denominator.",
      ask:["Skewness vs kurtosis"] };
  N["1.3.0"] = { q:"What is the central data point in multivariate exploration?", m:2,
      a:"Central data point (centroid) — the point whose coordinates are the mean of each attribute.\nFor attributes X1, X2, …, Xk the centroid is (X̄1, X̄2, …, X̄k).\nExample: points (1, 2), (3, 4), (5, 9) → centroid = (3, 5).\nIt is the multivariate equivalent of the mean: a single typical record. It may not be an actual data point.\nUse: clustering (k-means centres), measuring how far a record is from the centre.",
      ask:["Find the central data point of the given dataset"] };
  N["1.3.1"] = { q:"What is correlation?", m:3,
      a:"Correlation — a measure of the strength and direction of the relationship between two variables.\n- r > 0: they move together (height and weight).\n- r < 0: they move in opposite directions (price and demand).\n- r = 0: no linear relationship.\nRange: −1 ≤ r ≤ +1.\nMethods: scatter diagram, Karl Pearson's coefficient, Spearman's rank correlation.\nCorrelation does not imply causation.",
      ask:["Correlation vs causation", "Correlation vs regression"] };
  N["1.3.2"] = { q:"Explain the different forms (types) of correlation.", m:5,
      a:"<table><tr><th>Basis</th><th>Types</th><th>Example</th></tr><tr><td>Direction</td><td>Positive / negative</td><td>Income and spending / price and demand</td></tr><tr><td>Number of variables</td><td>Simple (2) / multiple (3+) / partial (2, holding others constant)</td><td>Yield with rainfall and fertiliser</td></tr><tr><td>Ratio of change</td><td>Linear (constant ratio) / non-linear (curvilinear)</td><td>Straight line / curve</td></tr></table><p><b>Degree:</b> perfect (r = ±1), high (±0.75 to ±1), moderate (±0.25 to ±0.75), low (0 to ±0.25), none (0).</p><p><b>On a scatter plot:</b> points rising to the right → positive; falling → negative; no pattern → zero.</p>",
      ask:["Identify the type of correlation from the given scatter plots"] };
  N["1.3.3"] = { q:"Find Karl Pearson's correlation coefficient for X: 1, 2, 3, 4, 5 and Y: 2, 4, 5, 4, 5.", m:10,
      a:"<p>r = Σxy ÷ √(Σx² × Σy²), with x = X − X̄, y = Y − Ȳ.</p><p>X̄ = 3, Ȳ = 4.</p><table><tr><th>X</th><th>Y</th><th>x</th><th>y</th><th>xy</th><th>x²</th><th>y²</th></tr><tr><td>1</td><td>2</td><td>−2</td><td>−2</td><td>4</td><td>4</td><td>4</td></tr><tr><td>2</td><td>4</td><td>−1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>3</td><td>5</td><td>0</td><td>1</td><td>0</td><td>0</td><td>1</td></tr><tr><td>4</td><td>4</td><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr><tr><td>5</td><td>5</td><td>2</td><td>1</td><td>2</td><td>4</td><td>1</td></tr><tr><th colspan='4'>Σ</th><th>6</th><th>10</th><th>6</th></tr></table><p>r = 6 ÷ √(10 × 6) = 6 ÷ 7.746 = 0.775 → high positive correlation.</p><p><b>Direct method</b> (when the means are fractions): r = [NΣXY − ΣXΣY] ÷ √{[NΣX² − (ΣX)²][NΣY² − (ΣY)²]}</p><p><b>Probable error:</b> P.E. = 0.6745 (1 − r²) ÷ √N; r is significant if r &gt; 6 P.E.</p>",
      trap:"r must lie between −1 and +1. Anything else is an arithmetic error.",
      ask:["Calculate r and comment on the result"] };
  N["1.4.0"] = { q:"What is a histogram?", m:3,
      a:"Histogram — a graph of a continuous frequency distribution: adjacent rectangles with class intervals on the X-axis and frequencies on the Y-axis.\n- No gaps between the bars.\n- The area of each bar is proportional to the frequency.\n- Shows the shape: symmetric, skewed, bimodal.\n- The mode can be located from the tallest bar.\nBins: number of bins ≈ √n.\nHistogram vs bar chart: a histogram is for continuous numerical data with no gaps; a bar chart is for categories with gaps.",
      ask:["Draw a histogram and locate the mode", "Histogram vs bar diagram"] };
  N["1.4.1"] = { q:"What is a quartile (box) plot? Draw one for Q1 = 4, Median = 6, Q3 = 8, min = 2, max = 30.", m:5,
      a:"<p><b>Box plot:</b> shows the five-number summary: minimum, Q1, median, Q3, maximum.</p><ul><li>Box: from Q1 to Q3 (the middle 50%); a line at the median.</li><li>IQR = Q3 − Q1</li><li>Lower fence = Q1 − 1.5 × IQR; upper fence = Q3 + 1.5 × IQR</li><li>Whiskers: to the smallest and largest values inside the fences.</li><li>Points outside the fences are outliers.</li></ul><p><b>Numerical:</b> IQR = 8 − 4 = 4. Fences: 4 − 6 = −2 and 8 + 6 = 14. The value 30 is above 14, so it is an outlier.</p><pre>  2     4    6    8                         30\n  |-----[====|====]-----|                    o\n       Q1   Med   Q3    (whisker ends at the largest value ≤ 14)</pre>",
      ask:["Find the quartiles and outliers of the given data"] };
  N["1.4.2"] = { q:"What is a distribution chart?", m:3,
      a:"Distribution chart — a smooth curve showing how the values of a continuous variable are distributed (the probability density).\nThe most common is the normal distribution: a bell-shaped, symmetric curve.\nf(x) = [1 ÷ √(2πσ²)] × e^[−(x − μ)² ÷ (2σ²)]\nEmpirical rule:\n- 68.2% of values lie within μ ± 1σ\n- 95.4% within μ ± 2σ\n- 99.7% within μ ± 3σ\nUse: see the shape and spread at a glance; compare the distributions of several classes; spot outliers beyond 3σ.",
      ask:["State the empirical (68-95-99.7) rule"] };
  N["1.5.0"] = { q:"What is a scatter plot?", m:3,
      a:"Scatter plot — each record is a point; one attribute on the X-axis, another on the Y-axis.\nShows the relationship between two numerical variables:\n- Points rise to the right: positive correlation.\n- Points fall to the right: negative correlation.\n- No pattern: no correlation.\n- Close to a line: strong; widely spread: weak.\nAlso shows clusters and outliers.\nA third, categorical attribute can be shown by colour.",
      ask:["Draw a scatter plot for the given data and comment"] };
  N["1.5.1"] = { q:"What is a scatter matrix?", m:2,
      a:"Scatter matrix — a grid of scatter plots for every pair of attributes.\n- For k attributes: a k × k grid.\n- Cell (i, j) plots attribute i against attribute j.\n- The diagonal usually shows each attribute's histogram.\nUse: see all the pairwise relationships at once; pick out correlated attributes; choose features.\nExample: the Iris dataset with 4 attributes → a 4 × 4 matrix.",
      ask:["Scatter plot vs scatter matrix"] };
  N["1.5.2"] = { q:"What is a bubble chart?", m:2,
      a:"Bubble chart — a scatter plot in which the size of each point (bubble) shows a third numerical attribute.\n- X-axis: attribute 1\n- Y-axis: attribute 2\n- Bubble size: attribute 3\n- Colour (optional): a fourth, categorical attribute\nExample: countries with GDP per person (X), life expectancy (Y), population (size).\nLimit: sizes are hard to compare exactly; overlapping bubbles.",
      ask:["Scatter plot vs bubble chart"] };

  /* ------------------------------------------------ Module 3 */
  N["2.0.0"] = [
    { q:"Explain the normal distribution and its properties.", m:5,
      a:"Normal distribution — a continuous distribution with a bell-shaped curve.\nf(x) = [1 ÷ (σ√(2π))] × e^[−(x − μ)² ÷ (2σ²)]\nProperties:\n- Symmetric about the mean.\n- Mean = Median = Mode.\n- Defined by μ and σ.\n- The total area under the curve is 1.\n- The tails never touch the X-axis (asymptotic).\n- 68.2% / 95.4% / 99.7% of the area lies within ±1σ / ±2σ / ±3σ.\n- Skewness = 0; β2 = 3.\nStandard normal variate: z = (X − μ) ÷ σ, with mean 0 and standard deviation 1.",
      ask:["What is the standard normal distribution?"] },
    { q:"Numerical: marks are normal with μ = 50, σ = 10. Find P(X > 60) and P(40 < X < 60).", m:5,
      a:"1. z = (X − μ) ÷ σ\n2. For X = 60: z = (60 − 50) ÷ 10 = 1\n3. From the table, the area between 0 and z = 1 is 0.3413.\n4. P(X > 60) = 0.5 − 0.3413 = 0.1587\n5. For X = 40: z = −1. Area between −1 and 0 = 0.3413.\n6. P(40 < X < 60) = 0.3413 + 0.3413 = 0.6826",
      trap:"Draw the curve and shade the area. Check whether the table gives the area from 0 to z or from −∞ to z.",
      ask:["Find the number of students scoring above a given mark"] }
  ];
  N["2.0.1"] = { q:"Explain the Poisson distribution. If the mean is 2, find P(0), P(1), P(2).", m:5,
      a:"Poisson distribution — a discrete distribution for the number of times a rare event occurs in a fixed interval.\nP(X = x) = e^(−m) × m^x ÷ x!\n- m: the average number of occurrences.\n- Mean = variance = m.\nConditions: n is large, p is small, events are independent, m = np is constant.\nExamples: calls per minute, defects per sheet, accidents per day.\nNumerical (m = 2, e^(−2) = 0.1353):\n1. P(0) = 0.1353 × 2⁰ ÷ 0! = 0.1353\n2. P(1) = 0.1353 × 2 ÷ 1 = 0.2707\n3. P(2) = 0.1353 × 4 ÷ 2 = 0.2707\nP(at least 1) = 1 − P(0) = 0.8647",
      ask:["Normal vs Poisson distribution", "Find P(X ≥ 2)"] };
  N["2.0.2"] = { q:"What is hypothesis testing? State the steps.", m:5,
      a:"Hypothesis — an assumption about a population parameter.\n- Null hypothesis H0: no difference / no effect (μ = 50).\n- Alternative hypothesis H1: what we want to show (μ ≠ 50, μ > 50 or μ < 50).\nSteps:\n1. State H0 and H1.\n2. Choose the level of significance α (5% or 1%).\n3. Choose the test: z, t or F.\n4. Compute the test statistic.\n5. Find the critical (table) value.\n6. Decide: |calculated| > critical → reject H0; otherwise fail to reject H0.\n7. State the conclusion in words.\nTwo-tailed test: H1 has ≠. One-tailed test: H1 has > or <.\nCritical z: 1.96 (5%, two-tailed), 1.645 (5%, one-tailed), 2.58 (1%, two-tailed).",
      ask:["One-tailed vs two-tailed test", "Define the level of significance and the p-value"] };
  N["2.0.3"] = { q:"State the central limit theorem.", m:3,
      a:"Central limit theorem — if random samples of size n are drawn from any population with mean μ and standard deviation σ, then for large n (n ≥ 30) the distribution of the sample means is approximately normal.\n- Mean of the sample means = μ\n- Standard error = σ ÷ √n\n- z = (x̄ − μ) ÷ (σ ÷ √n)\nIt holds whatever the shape of the population.\nImportance: it lets us use the normal distribution (z-test, confidence intervals) for sample means.\nExample: σ = 10, n = 100 → standard error = 10 ÷ 10 = 1.",
      ask:["What is the standard error?"] };
  N["2.0.4"] = { q:"What is a confidence interval? Find the 95% interval for x̄ = 52, σ = 10, n = 100.", m:5,
      a:"Confidence interval — a range of values that contains the population parameter with a stated confidence.\nCI = x̄ ± z × σ ÷ √n\nz: 1.645 (90%), 1.96 (95%), 2.576 (99%)\nNumerical:\n1. Standard error = 10 ÷ √100 = 1\n2. Margin of error = 1.96 × 1 = 1.96\n3. CI = 52 ± 1.96 = (50.04, 53.96)\nMeaning: we are 95% confident that μ lies between 50.04 and 53.96.\nHigher confidence → wider interval. Larger n → narrower interval.",
      ask:["Find the 99% confidence interval"] };
  N["2.0.5"] = { q:"Explain the z-test. A sample of 100 has mean 52; the population has σ = 10. Test μ = 50 at 5%.", m:5,
      a:"z-test — used when the sample is large (n ≥ 30) or σ is known.\nz = (x̄ − μ) ÷ (σ ÷ √n)\nNumerical:\n1. H0: μ = 50. H1: μ ≠ 50 (two-tailed).\n2. α = 5% → critical z = 1.96.\n3. z = (52 − 50) ÷ (10 ÷ √100) = 2 ÷ 1 = 2\n4. |z| = 2 > 1.96 → reject H0.\n5. Conclusion: the population mean differs significantly from 50.",
      trap:"Divide σ by √n. Using σ alone is the most common slip.",
      ask:["Test the difference between two sample means using the z-test"] };
  N["2.0.6"] = { q:"Explain the t-test. A sample of 9 has mean 52 and s = 3. Test μ = 50 at 5% (t table, 8 df = 2.306).", m:5,
      a:"t-test — used when the sample is small (n < 30) and σ is unknown.\nOne sample: t = (x̄ − μ) ÷ (s ÷ √n), df = n − 1, s² = Σ(x − x̄)² ÷ (n − 1)\nNumerical:\n1. H0: μ = 50. H1: μ ≠ 50.\n2. t = (52 − 50) ÷ (3 ÷ √9) = 2 ÷ 1 = 2\n3. df = 8; critical t = 2.306\n4. |t| = 2 < 2.306 → fail to reject H0.\n5. Conclusion: the sample mean does not differ significantly from 50.\nOther forms:\n- Independent samples: t = (x̄ − ȳ) ÷ √(s²/n1 + s²/n2), df = n1 + n2 − 2\n- Paired: t = d̄ ÷ (s_d ÷ √n), df = n − 1",
      ask:["z-test vs t-test", "Paired t-test on before/after data"] };
  N["2.0.7"] = { q:"What is a Type-I error?", m:2,
      a:"Type-I error — rejecting the null hypothesis when it is actually true (a false positive).\n- Probability = α, the level of significance.\n- Example: a healthy person is declared sick; an innocent person is convicted.\n- Reducing α (5% → 1%) reduces Type-I errors, but increases Type-II errors.",
      ask:["What does a 5% level of significance mean?"] };
  N["2.0.8"] = { q:"What is a Type-II error? Compare Type-I and Type-II errors.", m:5,
      a:"<p><b>Type-II error:</b> accepting the null hypothesis when it is actually false (a false negative). Probability = β. Power of the test = 1 − β.</p><table><tr><th></th><th>H0 is true</th><th>H0 is false</th></tr><tr><th>Reject H0</th><td>Type-I error (α)</td><td>Correct decision (power)</td></tr><tr><th>Accept H0</th><td>Correct decision</td><td>Type-II error (β)</td></tr></table><p><b>Example:</b> H0: the patient is healthy. Type-I: a healthy patient is told they are sick. Type-II: a sick patient is told they are healthy.</p><p>For a fixed sample size, lowering α raises β. Increasing n lowers both.</p>",
      trap:"Type-I: reject a true H0. Type-II: accept a false H0.",
      ask:["Identify the Type-I and Type-II error in the given situation"] };
  N["2.0.9"] = [
    { q:"What is ANOVA? State the steps of one-way ANOVA.", m:5,
      a:"<p><b>ANOVA (Analysis of Variance):</b> tests whether the means of three or more groups are equal, using the F-test.</p><p>H0: μ1 = μ2 = μ3. H1: at least one mean differs.</p><table><tr><th>Source</th><th>Sum of squares</th><th>df</th><th>Mean square</th><th>F</th></tr><tr><td>Between groups</td><td>SSB = Σ n<sub>j</sub>(X̄<sub>j</sub> − X̿)²</td><td>k − 1</td><td>MSB = SSB ÷ (k − 1)</td><td>MSB ÷ MSW</td></tr><tr><td>Within groups</td><td>SSW = ΣΣ(X − X̄<sub>j</sub>)²</td><td>n − k</td><td>MSW = SSW ÷ (n − k)</td><td></td></tr><tr><td>Total</td><td>SST = SSB + SSW</td><td>n − 1</td><td></td><td></td></tr></table><p>If F calculated &gt; F table (k − 1, n − k), reject H0.</p><p><b>Assumptions:</b> normal populations, equal variances, independent samples.</p>",
      ask:["One-way vs two-way ANOVA", "Why not use several t-tests?"] },
    { q:"One-way ANOVA: A = 1, 2, 3; B = 2, 3, 4; C = 5, 6, 7. Test at 5% (F table (2, 6) = 5.14).", m:10,
      a:"1. Group means: X̄A = 2, X̄B = 3, X̄C = 6. Grand mean X̿ = 33 ÷ 9 = 3.667\n2. SSB = 3 [(2 − 3.667)² + (3 − 3.667)² + (6 − 3.667)²] = 3 [2.778 + 0.444 + 5.444] = 26\n3. SSW = (1 + 0 + 1) + (1 + 0 + 1) + (1 + 0 + 1) = 6\n4. df between = k − 1 = 2; df within = n − k = 6\n5. MSB = 26 ÷ 2 = 13; MSW = 6 ÷ 6 = 1\n6. F = 13 ÷ 1 = 13\n7. 13 > 5.14 → reject H0.\nConclusion: the group means differ significantly.",
      trap:"Multiply each squared deviation by the group size when computing SSB.",
      ask:["Prepare the ANOVA table for the given data"] }
  ];

  /* ------------------------------------------------ Module 4 */
  N["3.0.0"] = [
    { q:"What is regression? Explain the meaning of intercept and slope.", m:5,
      a:"Regression — a method that models the relationship between a dependent variable y and one or more independent variables x, to predict y.\nSimple linear regression (class notation): y′ = ax + b\n- a: slope: the change in y for a one-unit increase in x.\n- b: intercept: the value of y when x = 0.\nLeast squares: choose a and b so that the sum of squared errors Σ(y − y′)² is minimum.\n- a = [nΣxy − ΣxΣy] ÷ [nΣx² − (Σx)²]\n- b = ȳ − a x̄\nMathematical equation: y = ax + b (exact). Statistical equation: y = ax + b + e (with an error term).\nExample: sales = 5 × advertising + 20 → each extra unit of advertising adds 5 to sales; with no advertising, sales = 20.",
      trap:"In this course a is the slope and b the intercept. Many books use the opposite letters, so state your equation.",
      ask:["Interpret the slope and intercept of the given regression equation"] },
    { q:"Fit a regression line to X: 1, 2, 3, 4, 5 and Y: 2, 4, 5, 4, 5. Predict y for x = 6.", m:10,
      a:"1. n = 5, Σx = 15, Σy = 20, Σxy = 2 + 8 + 15 + 16 + 25 = 66, Σx² = 55\n2. Slope a = [5 × 66 − 15 × 20] ÷ [5 × 55 − 15²] = (330 − 300) ÷ (275 − 225) = 30 ÷ 50 = 0.6\n3. Intercept b = ȳ − a x̄ = 4 − 0.6 × 3 = 2.2\n4. Line: y′ = 0.6x + 2.2\n5. For x = 6: y′ = 3.6 + 2.2 = 5.8",
      ask:["Fit a least-squares line to the given data"] }
  ];
  N["3.1.0"] = [
    { q:"What is the error term? Define R², MAE and MAPE.", m:5,
      a:"Error term (residual) — e = y − y′: the part of y that the line does not explain (other factors, measurement error, randomness).\n- MAE = Σ|y − y′| ÷ n: the average absolute error, in the units of y.\n- MSE = Σ(y − y′)² ÷ n; RMSE = √MSE.\n- MAPE = (100 ÷ n) × Σ |y − y′| ÷ |y|: the average percentage error; unit-free.\n- R² = 1 − Σ(y − y′)² ÷ Σ(y − ȳ)²: the share of the variation in y explained by the model; 0 to 1.\nR² = 0.8 → 80% of the variation in y is explained by x.\nLower MAE / MAPE and higher R² mean a better fit.",
      ask:["Interpret an R² of 0.85", "MAE vs RMSE"] },
    { q:"For y′ = 0.6x + 2.2 on X: 1 to 5, Y: 2, 4, 5, 4, 5, find R², MAE and MAPE.", m:10,
      a:"<table><tr><th>x</th><th>y</th><th>y′</th><th>e = y − y′</th><th>e²</th><th>|e| ÷ y</th></tr><tr><td>1</td><td>2</td><td>2.8</td><td>−0.8</td><td>0.64</td><td>0.40</td></tr><tr><td>2</td><td>4</td><td>3.4</td><td>0.6</td><td>0.36</td><td>0.15</td></tr><tr><td>3</td><td>5</td><td>4.0</td><td>1.0</td><td>1.00</td><td>0.20</td></tr><tr><td>4</td><td>4</td><td>4.6</td><td>−0.6</td><td>0.36</td><td>0.15</td></tr><tr><td>5</td><td>5</td><td>5.2</td><td>−0.2</td><td>0.04</td><td>0.04</td></tr><tr><th colspan='3'>Σ</th><th>Σ|e| = 3.2</th><th>2.40</th><th>0.94</th></tr></table><ul><li>Σ(y − ȳ)² = 4 + 0 + 1 + 0 + 1 = 6</li><li>R² = 1 − 2.4 ÷ 6 = 0.6</li><li>MAE = 3.2 ÷ 5 = 0.64</li><li>MAPE = (0.94 ÷ 5) × 100 = 18.8%</li></ul><p>60% of the variation in y is explained by x.</p>",
      trap:"For MAPE divide each error by the actual y, not by the predicted value.",
      ask:["Compute the error measures for the given actual and predicted values"] }
  ];
  N["3.2.0"] = { q:"Explain the multiple linear regression model.", m:5,
      a:"Multiple linear regression — predicts y from two or more independent variables.\nY = b0 + b1 X1 + b2 X2 + … + bk Xk + e\n- b0: intercept\n- b1 … bk: partial regression coefficients\n- e: error term\nFor two predictors (deviation sums, x = X − X̄):\n- b1 = [Σx2² Σx1y − Σx1x2 Σx2y] ÷ [Σx1² Σx2² − (Σx1x2)²]\n- b2 = [Σx1² Σx2y − Σx1x2 Σx1y] ÷ [Σx1² Σx2² − (Σx1x2)²]\n- b0 = Ȳ − b1 X̄1 − b2 X̄2\nAssumptions: linear relation, independent errors, constant error variance, normal errors, no multicollinearity.\nExample: house price = b0 + b1 (area) + b2 (age).",
      ask:["Simple vs multiple regression", "Fit a two-predictor regression to the given sums"] };
  N["3.3.0"] = { q:"What are partial regression coefficients?", m:3,
      a:"Partial regression coefficient b1 — the change in Y for a one-unit increase in X1, with all the other independent variables held constant.\nExample: Price = 50 + 2 (Area) − 3 (Age)\n- b1 = 2: for the same age, one more unit of area raises the price by 2.\n- b2 = −3: for the same area, one more year of age lowers the price by 3.\n'Partial' because each coefficient gives the effect of one variable alone.\nThey are not comparable when the units differ; use standardised (beta) coefficients to compare.",
      trap:"Always add 'holding the other variables constant' when you interpret.",
      ask:["Interpret the coefficients of the given multiple regression equation"] };
  N["3.4.0"] = { q:"How is the overall significance (overall fit) of a regression model tested?", m:5,
      a:"F-test for the model as a whole.\n1. H0: b1 = b2 = … = bk = 0 (no predictor helps). H1: at least one b ≠ 0.\n2. F = [(n − k − 1) R²] ÷ [k (1 − R²)], or F = MSR ÷ MSE\n3. df = (k, n − k − 1); k = number of predictors.\n4. If F > F table, reject H0: the model is significant.\nGoodness of fit:\n- R² = (b1 Σx1y + b2 Σx2y) ÷ Σy²\n- Adjusted R² = 1 − (1 − R²)(n − 1) ÷ (n − k − 1): penalises extra predictors.\nExample: R² = 0.6, n = 5, k = 1 → F = (3 × 0.6) ÷ (1 × 0.4) = 4.5. F table (1, 3) at 5% = 10.13. 4.5 < 10.13, so not significant.",
      ask:["R² vs adjusted R²", "Test the overall significance of the given model"] };
  N["3.5.0"] = { q:"How are individual regression coefficients tested?", m:5,
      a:"t-test for each coefficient, done only if the overall F-test is significant.\n1. H0: bi = 0 (Xi has no effect on Y). H1: bi ≠ 0.\n2. t = bi ÷ SE(bi)\n3. df = n − k − 1\n4. If |t| > t table, reject H0: Xi is a significant predictor.\nSE(b1) = √{ [Σ(y − y′)² ÷ (n − k − 1)] ÷ [Σx1² (1 − r12²)] }\nExample: b1 = 2.4, SE = 0.8 → t = 3. With df = 10, t table (5%) = 2.228. 3 > 2.228 → X1 is significant.\nUse: drop the variables that are not significant.",
      trap:"F tests the whole model. t tests one coefficient.",
      ask:["F-test vs t-test in regression"] };

  /* ------------------------------------------------ Module 5 */
  N["4.0.0"] = { q:"What is an outlier? State the types of outliers.", m:5,
      a:"Outlier (anomaly) — a data point that differs greatly from the rest of the data, as if generated by a different mechanism.\nTypes:\n- Point (global) outlier: one value far from all the others. A ₹5 lakh transaction among ₹500 ones.\n- Contextual outlier: unusual only in a context. 30 °C is normal in May, abnormal in December.\n- Collective outlier: a group of points that is unusual together, though each alone is normal. A run of failed logins.\nEffects: distorts the mean and standard deviation; harms models.\nBut the outlier may be the object of interest: fraud, a fault, a disease.",
      ask:["Outlier vs noise", "Applications of anomaly detection"] };
  N["4.0.1"] = { q:"What are the causes of outliers?", m:3,
      a:"- Data entry / human errors: a typing mistake (age 250).\n- Measurement / instrument errors: a faulty sensor.\n- Sampling errors: data from a different population mixed in.\n- Data processing errors: wrong units, bad merges.\n- Natural variation: genuine extreme values (a very tall person).\n- Intentional: fraud, intrusion, false reporting.\n- Novelty: a new, real behaviour.\nErrors should be corrected or removed. Genuine outliers should be studied.",
      ask:["How should outliers be treated?"] };
  N["4.1.0"] = { q:"Classify the anomaly detection techniques.", m:5,
      a:"<table><tr><th>Technique</th><th>Idea</th><th>Example</th></tr><tr><td>Statistical</td><td>Fit a distribution; points in the low-probability region are outliers</td><td>Z-score, IQR</td></tr><tr><td>Distance-based</td><td>An outlier is far from its neighbours</td><td>k-nearest-neighbour distance</td></tr><tr><td>Density-based</td><td>An outlier lies in a region of low density</td><td>LOF, DBSCAN</td></tr><tr><td>Clustering-based</td><td>Points that belong to no cluster or to tiny clusters</td><td>k-means distance to centroid</td></tr><tr><td>Classification-based</td><td>Train on labelled normal / anomaly data</td><td>One-class SVM, decision tree</td></tr></table><p><b>By labels:</b> supervised (both labelled), semi-supervised (only normal labelled), unsupervised (no labels).</p>",
      ask:["Supervised vs unsupervised anomaly detection"] };
  N["4.2.0"] = [
    { q:"Explain outlier detection using statistics (Z-score and IQR).", m:5,
      a:"Z-score method (data assumed normal):\n1. z = (x − μ) ÷ σ\n2. If |z| > 3, the point is an outlier (3σ rule: 99.7% of the data lies within ±3σ).\nIQR method (no distribution assumed):\n1. Sort the data; find Q1 and Q3.\n2. IQR = Q3 − Q1\n3. Lower fence = Q1 − 1.5 × IQR; upper fence = Q3 + 1.5 × IQR\n4. Points outside the fences are outliers.\nAdvantage — simple, with a statistical basis.\nLimitation — the Z-score needs normal data and is itself distorted by outliers; both work on one attribute at a time.",
      ask:["Z-score vs IQR method"] },
    { q:"Find the outliers in 2, 4, 5, 6, 7, 8, 30 using the IQR method.", m:5,
      a:"1. N = 7, sorted.\n2. Q1 = (N + 1) ÷ 4 = 2nd item = 4\n3. Q3 = 3 (N + 1) ÷ 4 = 6th item = 8\n4. IQR = 8 − 4 = 4\n5. Lower fence = 4 − 1.5 × 4 = −2\n6. Upper fence = 8 + 1.5 × 4 = 14\n7. 30 > 14 → 30 is an outlier.",
      trap:"Sort first. The fences use 1.5 × IQR, not 1.5 × Q.",
      ask:["Detect outliers using the Z-score for the given data"] }
  ];
  N["4.3.0"] = { q:"Explain outlier detection using the distance-based method.", m:5,
      a:"Idea — a normal point has close neighbours; an outlier is far from its neighbours.\nMethod (k-nearest neighbour):\n1. Choose k and a distance measure: Euclidean √[(x1 − x2)² + (y1 − y2)²] or Manhattan |x1 − x2| + |y1 − y2|.\n2. For each point, find the distance to its k-th nearest neighbour.\n3. This distance is the outlier score.\n4. Points with the highest scores (or above a threshold) are outliers.\nExample (k = 1): points 1, 2, 3, 10 → nearest-neighbour distances 1, 1, 1, 7 → 10 is the outlier.\nAdvantage — no distribution assumed; simple.\nLimitation — O(n²) distance computations; fails when clusters have different densities; sensitive to k.",
      ask:["Find the outlier among the given points using the distance-based method"] };
  N["4.4.0"] = { q:"Explain outlier detection using density-based methods (LOF).", m:5,
      a:"Idea — compare the density around a point with the density around its neighbours. An outlier lies in a sparser region than its neighbours.\nLocal Outlier Factor (LOF):\n1. k-distance(o): the distance from o to its k-th nearest neighbour.\n2. Reachability distance: reach-dist(p, o) = max(k-distance(o), dist(p, o))\n3. Local reachability density: lrd(p) = |Nk(p)| ÷ Σ reach-dist(p, o)\n4. LOF(p) = [Σ lrd(o) ÷ |Nk(p)|] ÷ lrd(p)\nInterpretation:\n- LOF ≈ 1: same density as the neighbours → normal.\n- LOF > 1: lower density than the neighbours → outlier.\nAdvantage — finds local outliers even when clusters have different densities.\nLimitation — costly; the choice of k matters.\nDBSCAN also marks points in low-density regions as noise.",
      trap:"LOF is a ratio: neighbours' density over the point's own density. Greater than 1 means outlier.",
      ask:["Compute the LOF of a point for the given data (Manhattan distance, k = 2)", "Distance-based vs density-based methods"] };
  N["4.5.0"] = { q:"What is SMOTE? Generate a synthetic sample from x = (2, 3) and neighbour (4, 7) with λ = 0.5.", m:5,
      a:"Class imbalance — one class has far fewer records (fraud: 1%). A model then ignores the minority class.\nSMOTE (Synthetic Minority Over-sampling Technique) — creates new, synthetic minority records instead of copying existing ones.\nSteps:\n1. Take a minority record x.\n2. Find its k nearest minority neighbours.\n3. Pick one neighbour x_nn at random.\n4. New record = x + λ × (x_nn − x), where λ is random in [0, 1].\n5. Repeat until the classes are balanced.\nNumerical: new = (2, 3) + 0.5 × [(4, 7) − (2, 3)] = (2, 3) + (1, 2) = (3, 5)\nAdvantage — less overfitting than plain duplication.\nLimitation — can create noisy points where classes overlap; apply it only to the training data.",
      ask:["Oversampling vs undersampling", "Why is accuracy misleading on imbalanced data?"] };

  /* ------------------------------------------------ Module 6 */
  N["5.0.0"] = [
    { q:"What is a time series? What is time series forecasting?", m:2,
      a:"Time series — a sequence of observations recorded at regular time intervals: daily prices, monthly sales.\nTime series forecasting — predicting future values from the past values of the same series.\nDifference from regression: the order of the data matters; the predictor is time or the series' own past.\nUses: sales and demand forecasting, stock prices, weather, energy load.",
      ask:["Cross-sectional data vs time series data"] },
    { q:"Give the taxonomy of time series forecasting methods.", m:5,
      a:"<table><tr><th>Group</th><th>Idea</th><th>Methods</th></tr><tr><td>Decomposition-based</td><td>Split the series into components, forecast each</td><td>Classical decomposition, STL</td></tr><tr><td>Smoothing-based</td><td>Smooth past values to remove noise</td><td>Naïve, average, moving average, exponential smoothing</td></tr><tr><td>Regression-based</td><td>Time (and season) as the predictor</td><td>Linear regression on time, ARIMA (autoregression)</td></tr><tr><td>Machine-learning-based</td><td>Lagged values as inputs to a model</td><td>Windowing, neural networks (LSTM)</td></tr></table>",
      ask:["Classify the forecasting methods"] }
  ];
  N["5.0.1"] = { q:"Explain time series decomposition.", m:5,
      a:"Components of a time series:\n- Trend (T): the long-term rise or fall.\n- Seasonality (S): a pattern that repeats in a fixed period (every year, every week).\n- Cycle (C): long swings with no fixed period (business cycles).\n- Random / noise (R): irregular variation.\nModels:\n- Additive: Y = T + S + R: the seasonal swing is constant. ΣS = 0.\n- Multiplicative: Y = T × S × R: the seasonal swing grows with the trend. ΣS = 4 for quarterly data.\nSteps (classical):\n1. Estimate the trend with a centred moving average.\n2. Remove the trend: Y − T (or Y ÷ T).\n3. Average the result for each season → seasonal index.\n4. Remainder = Y − T − S.\nCentred 2 × 4 moving average: T(t) = [½Y(t−2) + Y(t−1) + Y(t) + Y(t+1) + ½Y(t+2)] ÷ 4",
      ask:["Additive vs multiplicative model", "Trend vs seasonality"] };
  N["5.1.0"] = { q:"Explain the average method of forecasting. Forecast period 6 for 10, 12, 14, 16, 18.", m:3,
      a:"Average method — the forecast is the mean of all the past observations.\nF(t) = (y1 + y2 + … + y(t−1)) ÷ (t − 1)\nNumerical: F6 = (10 + 12 + 14 + 16 + 18) ÷ 5 = 70 ÷ 5 = 14\nNaïve method (for comparison): forecast = the last value = 18.\nLimit: gives equal weight to old and new data, so it lags behind a trend (14 against a series that has reached 18).",
      ask:["Naïve vs average method"] };
  N["5.1.1"] = { q:"Explain moving average smoothing. Forecast period 6 for 10, 12, 14, 16, 18 with a 3-period moving average.", m:5,
      a:"Moving average — the forecast is the mean of the last k observations.\nF(t) = (y(t−1) + y(t−2) + … + y(t−k)) ÷ k\nNumerical (k = 3):\n- F4 = (10 + 12 + 14) ÷ 3 = 12\n- F5 = (12 + 14 + 16) ÷ 3 = 14\n- F6 = (14 + 16 + 18) ÷ 3 = 16\nSmall k: reacts fast, less smoothing. Large k: smoother, slower to react.\nWeighted moving average: recent values get more weight.\nExponential smoothing: F(n+1) = α y(n) + (1 − α) F(n).",
      trap:"The forecast for period t uses values up to t − 1 only.",
      ask:["Compute the 3-yearly and 5-yearly moving averages"] };
  N["5.1.2"] = { q:"Explain time series analysis using linear regression. Fit a trend to 10, 12, 14, 16, 18 and forecast period 6.", m:5,
      a:"Idea — treat time t = 1, 2, 3, … as the independent variable and fit y′ = at + b by least squares.\nNumerical: t = 1 to 5; y = 10, 12, 14, 16, 18\n1. Σt = 15, Σy = 70, Σty = 10 + 24 + 42 + 64 + 90 = 230, Σt² = 55\n2. a = [5 × 230 − 15 × 70] ÷ [5 × 55 − 15²] = (1150 − 1050) ÷ 50 = 2\n3. b = ȳ − a t̄ = 14 − 2 × 3 = 8\n4. Trend line: y′ = 2t + 8\n5. Forecast t = 6: y′ = 12 + 8 = 20\nCaptures the trend. Seasonality can be added with dummy variables for the seasons.",
      ask:["Fit a straight-line trend by least squares and estimate the next year"] };
  N["5.1.3"] = { q:"Explain the ARIMA model.", m:5,
      a:"ARIMA (p, d, q) — AutoRegressive Integrated Moving Average.\n- AR (p): the value depends on its own p past values. y(t) = c + φ1 y(t−1) + … + φp y(t−p) + e(t)\n- I (d): the number of times the series is differenced to make it stationary. y′(t) = y(t) − y(t−1)\n- MA (q): the value depends on the past q forecast errors. y(t) = c + e(t) + θ1 e(t−1) + … + θq e(t−q)\nStationary series — constant mean and variance over time; no trend or seasonality.\nSteps:\n1. Plot the series; check stationarity.\n2. Difference until stationary → d.\n3. Use the ACF and PACF plots to choose q and p.\n4. Fit the model.\n5. Check the residuals; forecast.\nExamples: ARIMA(1, 0, 0) = AR(1); ARIMA(0, 1, 0) = random walk.",
      ask:["What do p, d and q stand for?", "What is stationarity?"] };
  N["5.2.0"] = { q:"Define Mean Absolute Error. Find it for actual 10, 12, 14 and forecast 12, 11, 15.", m:3,
      a:"MAE = Σ|actual − forecast| ÷ n\nThe average size of the error, in the units of the data.\nNumerical:\n1. Errors: 10 − 12 = −2; 12 − 11 = 1; 14 − 15 = −1\n2. Absolute errors: 2, 1, 1\n3. MAE = 4 ÷ 3 = 1.33\nEasy to interpret; treats all errors equally.",
      ask:["Why take absolute values?"] };
  N["5.2.1"] = { q:"Define Root Mean Square Error. Find it for actual 10, 12, 14 and forecast 12, 11, 15.", m:3,
      a:"RMSE = √[Σ(actual − forecast)² ÷ n]\nNumerical:\n1. Errors: −2, 1, −1\n2. Squared errors: 4, 1, 1 → sum = 6\n3. MSE = 6 ÷ 3 = 2\n4. RMSE = √2 = 1.41\nRMSE penalises large errors more than MAE, so RMSE ≥ MAE (here 1.41 against 1.33).",
      ask:["MAE vs RMSE"] };
  N["5.2.2"] = { q:"Define Mean Absolute Percentage Error. Find it for actual 10, 12, 14 and forecast 12, 11, 15.", m:3,
      a:"MAPE = (100 ÷ n) × Σ |actual − forecast| ÷ |actual|\nNumerical:\n1. 2 ÷ 10 = 0.2000\n2. 1 ÷ 12 = 0.0833\n3. 1 ÷ 14 = 0.0714\n4. Sum = 0.3547\n5. MAPE = (0.3547 ÷ 3) × 100 = 11.8%\nUnit-free, so series on different scales can be compared.\nLimit: undefined when an actual value is 0; inflated when actual values are small.",
      trap:"Divide by the actual value, not by the forecast.",
      ask:["When should MAPE not be used?"] };
  N["5.2.3"] = { q:"Define Mean Absolute Scaled Error. Find it for actual 10, 12, 14 and forecast 12, 11, 15.", m:5,
      a:"MASE = MAE of the forecast ÷ MAE of the naïve forecast\nNaïve MAE = mean of |y(t) − y(t−1)|\nNumerical:\n1. MAE of the forecast = 1.33\n2. Naïve differences: |12 − 10| = 2, |14 − 12| = 2 → mean = 2\n3. MASE = 1.33 ÷ 2 = 0.67\nInterpretation:\n- MASE < 1: better than the naïve forecast.\n- MASE > 1: worse than the naïve forecast.\nHere 0.67 < 1, so the method beats the naïve forecast.\nAdvantage: scale-free and defined even when actual values are 0.",
      ask:["Compare two forecasting methods using MAE, RMSE, MAPE and MASE"] };
})();
