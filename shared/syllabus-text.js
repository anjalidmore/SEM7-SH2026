/* =====================================================================
   SEMESTER 7 — official syllabus text, for syllabus.html
   Copied word for word from the official syllabus PDFs (module table only:
   title, hours, learning objective, contents, self-learning topics, learning
   outcomes). Typos and oddities in the source are kept on purpose. Do not
   reword anything here. Only PDF line wraps were joined.

   A `contents` entry is one line/bullet of the source: either a string, or
   [label, text] where the source gives a heading before the list. The page
   splits the text into checklist topics at commas (see syllabus.html); the
   text itself is stored whole.
   ===================================================================== */
(function(){
  "use strict";
  window.SEM7_SYLLABUS_TEXT = {

    ads: { course:"CEPEC7041", name:"APPLIED DATA SCIENCE", total:"45", modules:[
      { n:"01.", title:"Introduction to Data Science", hrs:"04", co:"CO- 1",
        objLabel:"Learning Objective/s:",
        obj:"To introduce the fundamental concepts of Data Science, its process, and the motivation for using data-driven techniques.",
        contentsLabel:"Contents:",
        contents:[
          "1.1 Introduction to Data Science, Data Science Process",
          ["1.2 Motivation to use Data Science Techniques:", "Volume, Dimensions and Complexity, Data Science Tasks and Examples"],
          "1.3 Overview of Data Preparation,",
          "1.4 Model building, Cross Validation, K-fold cross validation, leave-1 out, Bootstrapping",
          "1.5 Difference between data science and data analytics.",
          "1.6 Applications of Data Science"
        ],
        self:"Roles in Data Science: Data Engineer, ML Engineer, Analyst. Real-world Case Studies (Healthcare, Finance, Transportation, Recommender Systems).",
        loLabel:"Learning Outcomes:", loLead:"A learner will be able to",
        los:[
          "LO 1.1 - Apply the knowledge of discrete structures, linear algebra, statistics, and numerical techniques to interpret fundamental data characteristics such as volume, dimensionality, and complexity. (PI 1.1.1)",
          "LO 1.2-Apply engineering fundamentals to explain the core concepts of Data Science, its overall process, and the motivation for adopting data-driven approaches. (PI 1.3.1)",
          "LO 1.3- Evaluate a given data-related problem statements and determine the required analysis, while continually learning and adapting to new data science tools and techniques. (PI 2.1.1, PI 11.1.1)",
          "LO 1.4- Apply computer engineering principles to outline appropriate data science procedures and basic model evaluation methods such as cross-validation, K-fold, and bootstrapping, while remaining aware of ongoing technological advancements in the field. (PI 2.3.1, PI 11.2.2)"
        ] },
      { n:"02.", title:"Data Exploration using Descriptive Statistics", hrs:"12", co:"CO- 2",
        objLabel:"Learning Objective/s:",
        obj:"To provide learners with the knowledge to explore and summarize data using descriptive statistics, and to cultivate the ability to interpret patterns through appropriate graphical methods.",
        contentsLabel:"Contents:",
        contents:[
          "2.1 Types of data, Properties of data",
          "2.2 Statistical data–Classification, Tabulation, Diagrammatic & Graphic representation of data",
          ["2.3 Univariate Exploration:", "Measure of Central Tendency, Measure of Spread, Symmetry, Skewness: Karl Pearson Coefficient of skewness, Bowley ‘s Coefficient, Kurtosis"],
          ["2.4 Multivariate Exploration:", "Central Data Point, Correlation, Different forms of correlation, Karl Pearson Correlation Coefficient for bivariate distribution."],
          ["2.5 Data Visualization Univariate Visualization:", "Histogram, Quartile, Distribution Chart"],
          ["Multivariate Visualization:", "Scatter Plot, Scatter Matrix, Bubble chart."]
        ],
        self:"Shape of distributions: heavy-tailed, light-tailed, multimodal distributions. Advanced visualizations: Violin Plot, Boxen Plot, Pair plot, Heatmaps.",
        loLabel:"Learning Outcomes:", loLead:"A learner will be able to",
        los:[
          "LO 2.1-Apply the knowledge of statistics and numerical techniques to classify, tabulate, and summarize different types and properties of data. (PI 1.1.1)",
          "LO 2.2-Apply the concepts of probability and statistics to compute and interpret measures of central tendency, dispersion, skewness, kurtosis, and correlation. (PI 1.1.2)",
          "LO 2.3-Evaluate a given dataset to identify key objectives by examining univariate and multivariate characteristics using appropriate statistical measures. (PI 2.1.1)",
          "LO 2.4-Analyze and interpret data patterns using contemporary visualization tools through histograms, scatter plots, scatter matrices, bubble charts, and other graphical representations. (PI 2.4.2)",
          "LO 2.5-Identify suitable modern tools and techniques for performing univariate and multivariate data visualization. (PI 5.1.1)",
          "LO 2.6-Demonstrate proficiency in using appropriate data visualization tools to create histograms, scatter plots, bubble charts, and other graphical representations. (PI 5.2.2)"
        ] },
      { n:"03.", title:"Data Exploration using Inferential Statistics", hrs:"06", co:"CO- 3",
        objLabel:"Learning Objective/s:",
        obj:"To provide learners with the knowledge to apply inferential statistical methods for drawing conclusions from data, and to cultivate the ability to select appropriate hypothesis tests for valid decision-making.",
        contentsLabel:"Contents",
        contents:[
          "Overview of Various forms of distributions: Normal, Poisson, Test Hypothesis, Central limit theorem, Confidence Interval, Z-test, t-test, Type-I, Type-II Errors, ANOVA"
        ],
        self:"Neyman-Pearson lemma-MP and UMP tests. Practical examples using Python/Excel/R.",
        loLabel:"Learning Outcomes:", loLead:"Learner should be able to",
        los:[
          "LO 3.1-Apply the knowledge of statistics and numerical techniques to describe and analyse probability distributions such as normal and Poisson distributions. (PI 1.1.1)",
          "LO 3.2-Apply the concepts of probability and statistics to compute confidence intervals and perform hypothesis tests such as Z-test, t-test, and ANOVA. (PI 1.1.2)",
          "LO 3.3-Identify appropriate statistical methods and hypothesis testing procedures by determining the mathematical requirements of the given problem. (PI 2.1.3)",
          "LO 3.4-Arrive at valid statistical conclusions by interpreting test statistics, p-values, confidence levels, and the implications of Type-I and Type-II errors. (PI 2.4.4)"
        ] },
      { n:"04.", title:"Regression Analysis", hrs:"10", co:"CO- 4",
        objLabel:"Learning Objective/s:",
        obj:"To provide learners with the knowledge to build and interpret regression models, and to cultivate the ability to evaluate model performance using appropriate statistical measures.",
        contentsLabel:"Contents:",
        contents:[
          "4.1 Mathematical and Statistical Equation – Meaning of Intercept and Slope",
          "4.2 Error term – Measure for Model Fit –R2 – MAE – MAPE.",
          "4.3 Multiple Linear Regression Model,",
          "4.4 Partial Regression Coefficients,",
          "4.5Testing Significance overall significance of Overall fit of the model,",
          "4.6 Testing for Individual Regression Coefficients"
        ],
        self:"Residual analysis and its importance in regression diagnostics. Real regression case studies (house prices, sales forecasting).",
        loLabel:"Learning Outcomes:", loLead:"A learner will be able to",
        los:[
          "LO 4.1-Apply the knowledge of statistics and numerical techniques to construct regression equations and interpret parameters such as intercept, slope, and error term. (PI 1.1.1)",
          "LO 4.2-Apply the concepts of probability and statistics to compute model fit metrics such as R², MAE, and MAPE, and interpret their significance. (PI 1.1.2)",
          "LO 4.3-Identify appropriate mathematical and statistical methods required for selecting suitable regression models such as simple, multiple, and partial regression. (PI 2.1.3)",
          "LO 4.4-Analyze and interpret regression model outcomes using contemporary tools to assess significance of coefficients and overall model performance. (PI 2.4.2)",
          "LO 4.5-Explore alternative regression model designs by examining different model structures and variable selections for meeting analytical requirements. (PI 3.2.1)",
          "LO 4.6-Perform systematic evaluation of regression models by comparing fit statistics, significance tests, and error measures to select the optimal design. (PI 3.3.1)"
        ] },
      { n:"05.", title:"Anomaly Detection", hrs:"06", co:"CO- 5",
        objLabel:"Learning Objective/s:",
        obj:"To provide learners with the knowledge to identify and detect anomalies in data, and to cultivate the ability to apply appropriate statistical and distance-based techniques for recognizing unusual patterns.",
        contentsLabel:"Contents:",
        contents:[
          "5.1 Outliers, Causes of Outliers,",
          "5.2 Anomaly detection techniques,",
          "5.3 Outlier Detection using Statistics",
          "5.4 Outlier Detection using Distance based method,",
          "5.5 Outlier detection using density-based methods,",
          "5.6 SMOTE"
        ],
        self:"Introduction to autoencoders for anomaly detection, Performance metrics for anomaly detection (AUC-PR, F1, confusion matrix).",
        loLabel:"Learning Outcomes:", loLead:"A learner will be able to",
        los:[
          "LO 5.1-Apply statistical knowledge to explain the concept of outliers and identify their possible causes in real-world datasets. (PI 1.1.1)",
          "LO 5.2 -Apply probability and statistical techniques to detect anomalies using distribution-based and statistical thresholding methods. (PI 1.1.2)",
          "LO 5.3 -Identify appropriate mathematical and algorithmic approaches for detecting outliers using distance-based and density-based methods. (PI 2.1.3)",
          "LO 5.4-Analyze and interpret results of anomaly detection techniques using contemporary analytical tools and visualizations. (PI 2.4.2)",
          "LO 5.5-Explore alternative anomaly detection designs, including statistical, distance-based, and density-based techniques, to address varied data scenarios. (PI 3.2.1)",
          "LO 5.6 -Perform systematic evaluation of anomaly detection methods, including SMOTE for class imbalance, to determine the most effective solution. (PI 3.3.1)",
          "LO 5.7 -Identify suitable modern engineering and data science tools required for implementing anomaly detection algorithms effectively. (PI 5.1.1)",
          "LO 5.8 -Demonstrate proficiency in using discipline-specific tools for implementing anomaly detection techniques and interpreting their outputs. (PI 5.2.2)"
        ] },
      { n:"06.", title:"Time Series Forecasting", hrs:"05", co:"CO- 6",
        objLabel:"Learning Objective/s:",
        obj:"To provide learners with the knowledge to analyze and model time-dependent data, and to cultivate the ability to apply suitable forecasting techniques for predicting future trends.",
        contentsLabel:"Contents:",
        contents:[
          "6.1 Taxonomy of Time Series Forecasting methods, Time Series Decomposition",
          ["6.2 Smoothening Methods:", "Average method, Moving Average smoothing, Time series analysis using linear regression, ARIMA Model,"],
          ["6.3 Performance Evaluation:", "Mean Absolute Error, Root Mean Square Error, Mean Absolute Percentage Error, Mean Absolute Scaled Error"]
        ],
        self:"Seasonal decomposition, Stationarity concept and tests.",
        loLabel:"Learning Outcomes:", loLead:"A learner will be able to",
        los:[
          "LO 6.1 -Apply statistical and numerical techniques to interpret the taxonomy of time series forecasting methods and the components of time series decomposition such as trend, seasonality, and irregular variations. (PI 1.1.1)",
          "LO 6.2 -Apply concepts of probability and statistics to implement smoothing methods such as the average method, moving average smoothing, and exponential approaches for analysing time-dependent data. (PI 1.1.2)",
          "LO 6.3 -Identify appropriate mathematical and statistical methods, including linear regression and ARIMA, required for selecting suitable time series forecasting models. (PI 2.1.3)",
          "LO 6.4-Analyze and interpret time series model outputs using contemporary analytical tools to understand forecast patterns and model behaviour. (PI 2.4.2)",
          "LO 6.5-Identify modern analytical and visualization tools required for building, analysing, and validating time series forecasting models. (PI 5.1.1)",
          "LO 6.6-Demonstrate proficiency in using discipline-specific tools to implement time series models, generate forecasts, and visualize predictions effectively. (PI 5.2.2)"
        ] }
    ]},

    /* ------------------------------------------------------------ OR
       The OR syllabus gives contents only: no learning objectives, self-learning
       topics or learning outcomes per module. */
    or: { course:"OEC7015", name:"OPERATION RESEARCH", total:"45", modules:[
      { n:"01.", title:"Introduction to Operations Research", hrs:"15-17",
        contentsLabel:"Content:",
        contents:[
          "Introduction, Structure of the Mathematical Model, Limitations of Operations Research",
          ["Linear Programming:", "Introduction, Linear Programming Problem, Requirements of LPP, Mathematical Formulation of LPP, Graphical method, Simplex Method, Penalty Cost Method or Big M-method, Two Phase Method, Revised simplex method, Duality, Primal – Dual construction, Symmetric and Asymmetric Dual, Weak Duality Theorem, Complimentary Slackness Theorem, Main Duality Theorem, Dual Simplex Method, Sensitivity Analysis"],
          ["Transportation Problem:", "Formulation, solution, unbalanced Transportation problem. Finding basic feasible solutions – Northwest corner rule, least cost method and Vogel’s approximation method. Optimality test: the stepping stone method and MODI method."],
          ["Assignment Problem:", "Introduction, Mathematical Formulation of the Problem, Hungarian Method Algorithm, Processing of n Jobs Through Two Machines and m Machines, Graphical Method of Two Jobs m Machines Problem Routing Problem, Travelling Salesman Problem"],
          ["Integer Programming Problem:", "Introduction, Types of Integer Programming Problems, Gomory’s cutting plane Algorithm, Branch and Bound Technique. Introduction to Decomposition algorithms."]
        ] },
      { n:"02.", title:"Queuing models", hrs:"04-06",
        contentsLabel:"Contents:",
        contents:[
          "Queuing systems and structures, single server and multi-server models, Poisson input, exponential service, constant rate service, finite and infinite population."
        ] },
      { n:"03.", title:"Simulation", hrs:"06-08",
        contentsLabel:"Contents:",
        contents:[
          "Introduction, Methodology of Simulation, Basic Concepts, Simulation Procedure, Application of Simulation Monte-Carlo Method: Introduction, Monte-Carlo Simulation, Applications of Simulation, Advantages of Simulation, Limitations of Simulation"
        ] },
      { n:"04.", title:"Dynamic programming", hrs:"06-08",
        contentsLabel:"Contents:",
        contents:[
          "Characteristics of dynamic programming. Dynamic programming approach for Priority Management employment smoothening, capital budgeting, Stage Coach/Shortest Path, cargo loading and Reliability problems."
        ] },
      { n:"05.", title:"Game Theory", hrs:"04-06",
        contentsLabel:"Contents:",
        contents:[
          "Competitive games, rectangular game, saddle point, minimax (maximin) method of optimal strategies, value of the game. Solution of games with saddle points, dominance principle. Rectangular games without saddle point – mixed strategy for 2 X 2 games."
        ] },
      { n:"06.", title:"Inventory Models", hrs:"04-06",
        contentsLabel:"Contents:",
        contents:[
          "Classical EOQ Models, EOQ Model with Price Breaks, EOQ with Shortage, Probabilistic EOQ Model"
        ] }
    ]},

    /* ------------------------------------------------------------ DL */
    dl: { course:"HMCAL703", name:"DEEP LEARNING", total:"60", modules:[
      { n:"01.", title:"Fundamentals of Neural Network", hrs:"4-6",
        objLabel:"Learning Objective:",
        obj:"To explore the composition of biological neuron underlying the structure of deep neural network, key terminologies and historical evolution of deep learning.",
        contentsLabel:"Contents:",
        contents:[
          ["Fundamentals of Neural Network:", "Biological neuron"],
          "Mc-Culloch Pitts Neuron, Perceptron, Multilayer Perceptron",
          "Perceptron Learning, Delta learning",
          "Linearly separable, linearly non-separable classes",
          ["Deep Networks:", "Fundamentals, Brief History"],
          "Basic Terminologies of Deep Learning",
          "Classes of Deep Learning"
        ],
        self:"Transfer Learning",
        loLabel:"Learning Outcomes:", loLead:"A learner will be able to",
        los:[
          "LO 1.1: Apply linear-algebraic and discrete-mathematical techniques to model and interpret the mathematical representation of biological neurons and the McCulloch–Pitts neuron. (P.I.-1.1.1)",
          "LO 1.2: Apply principles of computer engineering to determine linear seperability of given dataset using perceptron-based model. (P.I - 1.4.1 )",
          "LO 1.3: Apply foundational and specialized engineering concepts to classify core terminologies and major categories of Deep Learning models.(P.I.-1.3.1)"
        ] },
      { n:"02.", title:"Training, Optimization and Regularization of Deep Neural Network", hrs:"10-12",
        objLabel:"Learning Objective:",
        obj:"To construe the training of deep networks, analyze and apply appropriate learning parameters and optimization techniques, and evaluate and implement effective regularization strategies for improved model performance.",
        contentsLabel:"Contents:",
        contents:[
          ["Training Feedforward DNN:", "Multi Layered Feed Forward Neural Network, Learning Factors"],
          ["Activation functions:", "Tanh, Logistic, Linear, Softmax, ReLU, Leaky ReLU"],
          ["Loss functions:", "Squared Error loss, Cross Entropy"],
          "Choosing output function and loss function",
          ["Optimization:", "Learning with backpropagation"],
          ["Learning Parameters:", "Gradient Descent (GD), Stochastic and Mini Batch GD, Momentum Based GD, Nesterov Accelerated GD, AdaGrad, Adam, RMSProp."],
          ["Regularization:", "Overview of Overfitting, Types of biases, Bias Variance Tradeoff."],
          ["Regularization Methods:", "L1, L2 regularization, Parameter sharing, Dropout, Weight Decay, Batch normalization, Early stopping, Data Augmentation, adding noise to input and output."]
        ],
        self:["Advanced Regularization Techniques in Modern Deep Learning Architectures.", "Hyperparameter Tuning Strategies for Efficient Deep Learning Model Optimization."],
        loLabel:"Learning Outcomes:", loLead:"A learner will be able to",
        los:[
          "LO 2.1: Apply linear-algebraic and discrete-mathematical techniques to mathematically represent Multi Layered Feed Forward Neural Network. (P.I.-1.1.1)",
          "LO 2.2: Apply engineering knowledge to formulate computational modules with suitable activation and loss functions for a given problem context. (P.I.-1.3.1)",
          "LO 2.3: Identify optimization algorithms of a computer based system and tune learning parameters by applying mathematical foundations of gradient-based methods to Enhance convergence and model performance. (P.I.- 2.1.2)",
          "LO 2.4: Compare and contrast alternative methods to select appropriate regularization technique to reduce over-fitting and improve model generalization using engineering fundamentals. (P.I.- 2.2.4)"
        ] },
      { n:"03.", title:"Convolutional Neural Networks (CNN): Supervised Learning", hrs:"8-10",
        objLabel:"Learning Objective:",
        obj:"To interpret supervised learning concepts in CNNs, apprehend convolution operations and architectural components, and interpret foundational models for effective feature extraction and classification.",
        contentsLabel:"Contents:",
        contents:[
          ["Supervised Learning:", "Convolution operation, Padding, Stride, Relation between input, output and filter size"],
          ["CNN architecture:", "Convolution layer, Pooling Layer, Weight Sharing in CNN"],
          "Fully Connected NN vs CNN",
          "Variants of basic Convolution function",
          ["LeNET:", "Architecture"],
          ["AlexNET:", "Architecture"]
        ],
        self:["Evolution of CNN Architectures: From VGG to ResNet", "Advanced CNN Architectures"],
        loLabel:"Learning Outcomes:", loLead:"",
        los:[
          "LO 3.1: Apply fundamental knowledge of mathematics to compute convolution, padding and stride operations in CNNs. (P.I.- 1.1.1)",
          "LO 3.2: Apply theory and principles of supervised learning to determine the relationship between input, output, and filter size in CNNs. (P.I.- 1.3.1)",
          "LO3.3: Design a variety of potential CNN architecture design solutions suited for specified image data to meet functional requirements. (P.I.- 3.2.2)",
          "LO 3.4: Explore classical architectural designs for basic image-classification problems. (P.I.-3.2.1)"
        ] },
      { n:"04.", title:"Autoencoders: Unsupervised Learning", hrs:"8-10",
        objLabel:"Learning Objective:",
        obj:"To construe the concepts of unsupervised learning and auto-encoder models for image processing tasks such as image compression and feature representation.",
        contentsLabel:"Contents:",
        contents:[
          ["Unsupervised Learning:", "Introduction"],
          "Linear Autoencoder, Undercomplete Autoencoder, Overcomplete Autoencoders, Denoising Autoencoders, Sparse Autoencoders, Contractive Autoencoders",
          "Autoencoders bottleneck and its impact.",
          ["Application of Auto-encoders:", "Image Compression, Image Denoising, Dimensionality Reduction."]
        ],
        self:"Variational Autoencoders (VAEs)",
        loLabel:"Learning Outcomes:", loLead:"A learner will be able to",
        los:[
          "LO 4.1: Apply fundamental knowledge of neural networks to interpret the working principles of autoencoder. (P.I.-1.3.1)",
          "LO 4.2: Apply foundational and specialized engineering concepts to categorize major autoencoder models. (P.I.-1.4.1)",
          "LO 4.3: Explore and design suitable autoencoder variants for image compression or denoising pipelines by evaluating multiple architectural alternatives. (P.I.-3.2.1)",
          "LO 4.4: Able to verify the functionalities influencing representation capacity and reconstruction quality for different datasets and validate design of auto-encoders. (P.I.-3.4.3)"
        ] },
      { n:"05.", title:"Recurrent Neural Networks (RNN)", hrs:"10-12",
        objLabel:"Learning Objective:",
        obj:"To construe the concepts of sequence learning that enhances usability of application.",
        contentsLabel:"Contents:",
        contents:[
          "Sequence Learning Problem, Unfolding Computational graphs",
          "Recurrent Neural Network, Bidirectional RNN",
          "Backpropagation Through Time (BTT), Vanishing and Exploding Gradients, Truncated BTT",
          ["Long Short-Term Memory:", "Selective Read, Selective write, Selective Forget, Gated Recurrent Unit."]
        ],
        self:["Attention Mechanisms in RNNs", "RNNs in Reinforcement Learning"],
        loLabel:"Learning Outcomes:", loLead:"A learner will be able to",
        los:[
          "LO 5.1: Apply fundamentals of engineering to solve sequencing learning problems. (P.I.-1.3.1)",
          "LO 5.2: Apply computer engineering principles to construe with working principles of Recurrent Neural Networks. (P.I. - 1.4.1)",
          "LO 5.3: Analyze and interpret the effect of vanishing and exploding gradient problems on learning performance in sequence modeling tasks.(PI.- 2.4.2)",
          "LO 5.4:Analyze sequence-learning problems to identify and conform suitable RNN variants and assess the strengths and limitations of relevant tools for their implementation. (P.I.- 2.1.2, 5.1.2, 5.2.1)",
          "LO 5.5: Interpret legislation and regulations relevant for the protection of the public and understand the relationship between the technical, socio-economic and environmental dimensions of sustainability while deploying RNN-based systems. (P.I.-6.2.1, 6.3.2)"
        ] },
      { n:"06.", title:"Emerging Trends", hrs:"6-8",
        objLabel:"Learning Objective:",
        obj:"Utilize emerging trends that enhance usability of generative models",
        contentsLabel:"Contents:",
        contents:[
          "Generative Adversarial Network (GAN) Architecture",
          "Image Generation and DeepFake",
          "Diffusion Models for Image Generation"
        ],
        self:["Advanced GAN Variants: StyleGAN, CycleGAN, and BigGAN.", "Responsible AI Practices for Generative Models"],
        loLabel:"Learning Outcomes:", loLead:"A learner will be able to",
        los:[
          "LO 6.1: Apply engineering fundamentals to interpret GAN architecture and training dynamics. (P.I.-1.3.1)",
          "LO 6.2: Apply theory and principles of computer science and engineering to generate synthetic images with GAN architecture. (P.I.-1.4.1)",
          "LO 6.3: Recognize ethical, legal and societal implications and understand the environmental dimensions of sustainability for image generation using Deep Fake technique. (P.I.-6.2.1, 6.3.2)",
          "LO 6.4: Demonstrate continuous professional learning by tracking developments in generative models, including diffusion-based image generation techniques, and analyzing sourced technical information for feasibility and sustainability to propose diverse applications. (P.I.-11.2.2, 11.3.2)"
        ] }
    ]}
  };
})();
