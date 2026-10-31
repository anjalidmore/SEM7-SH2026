/* =====================================================================
   SEMESTER 7 — End Sem syllabus
   All six modules of every subject, from the official syllabus PDFs.
   `built:true` means the subject site has its own content for the module.
   A module that is not built yet carries its syllabus topics and learning
   outcomes here, verbatim (lightly trimmed of P.I. codes), so the site can
   show it as "Material pending" until the notes arrive. When a module's
   content is added to its site, set `built:true` and drop its topics/los.
   `paper` is the End Sem paper pattern, null until it is shared.
   ===================================================================== */
(function(){
  "use strict";
  var S = window.SEM7_SYLLABUS = {

    ai: { paper:null, modules:[
      { id:"m1", built:true, title:"Fundamentals of Artificial Intelligence and Agents" },
      { id:"m2", built:true, title:"Problem Solving, Search and Optimization" },
      { id:"m3", built:true, title:"Knowledge Representation and Reasoning" },
      { id:"m4", built:true, title:"Planning and Uncertainty" },
      { id:"m5", built:true, title:"Generative AI, Explainable AI, Responsible AI & Ethics" },
      { id:"m6", built:true, title:"AI in Real-World Domains and Future Directions" }
    ]},

    nlp: { paper:null, modules:[
      { id:"m1", built:true, title:"Introduction to NLP" },
      { id:"m2", built:true, title:"Text Processing & Word-Level Analysis" },
      { id:"m3", built:true, title:"Syntax Analysis & Sequence Modeling" },
      { id:"m4", title:"Semantic Analysis and Word Representations", hours:"7–9",
        topics:[
          "4.1 Semantic Analysis: meaning representation, lexical semantics; synonymy, polysemy, hyponymy, meronymy, semantic ambiguity",
          "4.2 Word Sense Disambiguation: knowledge-based (Lesk's Algorithm), supervised (Naïve Bayes), unsupervised (clustering-based)",
          "4.3 Vector Semantics and Word Embeddings: distributional semantics, Word2Vec, GloVe; FastText and BERT (introduction)"
        ],
        los:[
          "LO 4.1: Apply mathematical and statistical concepts to analyze semantic meaning, word relations, and word-sense patterns in NLP.",
          "LO 4.2: Apply computer science and AI principles to understand semantic analysis and meaning representation.",
          "LO 4.3: Implement semantic and word-sense models using appropriate mathematical formulations.",
          "LO 4.4: Analyze the limitations of semantic models used in NLP.",
          "LO 4.5: Able to choose appropriate procedures, algorithms, and test cases for semantic analysis tasks.",
          "LO 4.6: Interpret data-driven trends in Word Sense Disambiguation and word embedding techniques.",
          "LO 4.7: Create tools or workflows for word embeddings and semantic modeling.",
          "LO 4.8: Adapt modern NLP frameworks to implement and refine semantic and embedding-based models."
        ]},
      { id:"m5", title:"Discourse and Advanced NLP", hours:"5–7",
        topics:[
          "5.1 Discourse Structure and Coherence: discourse relations, cohesion and coherence; constraints on discourse interpretation",
          "5.2 Reference and Coreference Resolution: anaphora resolution with Hobbs' Algorithm and Centering Theory; neural coreference (introduction)",
          "5.3 Pragmatics in NLP: implicature, presupposition, speech acts",
          "5.4 Evaluation Metrics: BLEU, ROUGE, F1-score"
        ],
        los:[
          "LO 5.1: Apply mathematical techniques to analyze and evaluate discourse and coreference resolution methods.",
          "LO 5.2: Apply theoretical principles of computer science and linguistic knowledge to analyze discourse structure and coherence.",
          "LO 5.3: Apply algorithmic and engineering mathematics principles to implement discourse and coreference resolution techniques.",
          "LO 5.4: Analyze evaluation metrics to assess NLP system performance.",
          "LO 5.5: Choose appropriate algorithms and procedures for reference and coreference resolution tasks.",
          "LO 5.6: Identify strengths, limitations, and trends revealed through metric-based evaluation."
        ]},
      { id:"m6", title:"Applications and Ethical Perspectives in NLP", hours:"4–6",
        topics:[
          "6.1 Machine Translation: rule-based, statistical and neural; transformer-based models (introduction)",
          "6.2 Text Summarization: extractive vs. abstractive; evaluation metrics",
          "6.3 Sentiment Analysis: lexicon-based and supervised approaches",
          "6.4 Information Extraction and Question Answering: NER, relation extraction, RAG for QA",
          "6.5 Ethics and Societal Impact: bias and fairness, privacy, hallucinations, misinformation, cultural inclusivity",
          "6.6 NLP for Low-Resource and Regional Languages: challenges and tools for Indian languages"
        ],
        los:[
          "LO 6.1: Apply mathematical and statistical foundations to understand and analyze core components of complex NLP systems.",
          "LO 6.2: Apply principles of computer science and engineering to design and evaluate solutions for diverse NLP tasks.",
          "LO 6.3: Identify the key components and processing steps involved in advanced NLP applications to determine requirements for solving a given task.",
          "LO 6.4: Identify the limitations and potential sources of error in advanced NLP applications.",
          "LO 6.5: Define a clear problem statement with appropriate objectives and scope for advanced NLP tasks.",
          "LO 6.6: Generate multiple design approaches to address functional requirements in NLP applications.",
          "LO 6.7: Create or adapt tools and techniques to address NLP problems.",
          "LO 6.8: Elaborate effective use of NLP tools and frameworks.",
          "LO 6.9: Demonstrate effective communication, collaborative problem-solving, and teamwork in NLP tasks.",
          "LO 6.10: Present integrated team results with clear coordination and contribution from all members."
        ]}
    ]},

    ads: { paper:null, modules:[
      { id:"m1", built:true, title:"Introduction to Data Science" },
      { id:"m2", built:true, title:"Data Exploration using Descriptive Statistics" },
      { id:"m3", title:"Data Exploration using Inferential Statistics",
        topics:[
          "Normal and Poisson distributions",
          "Testing of hypothesis, Central Limit Theorem",
          "Confidence interval",
          "Z-test, t-test",
          "Type-I and Type-II errors",
          "ANOVA"
        ],
        los:[
          "LO 3.1: Apply the knowledge of statistics and numerical techniques to describe and analyse probability distributions such as normal and Poisson distributions.",
          "LO 3.2: Apply the concepts of probability and statistics to compute confidence intervals and perform hypothesis tests such as Z-test, t-test, and ANOVA.",
          "LO 3.3: Identify appropriate statistical methods and hypothesis testing procedures by determining the mathematical requirements of the given problem.",
          "LO 3.4: Arrive at valid statistical conclusions by interpreting test statistics, p-values, confidence levels, and the implications of Type-I and Type-II errors."
        ]},
      { id:"m4", title:"Regression Analysis",
        topics:[
          "4.1 Mathematical and statistical equation: meaning of intercept and slope",
          "4.2 Error term; measures of model fit: R², MAE, MAPE",
          "4.3 Multiple Linear Regression model",
          "4.4 Partial regression coefficients",
          "4.5 Testing overall significance of the model fit",
          "4.6 Testing individual regression coefficients"
        ],
        los:[
          "LO 4.1: Apply the knowledge of statistics and numerical techniques to construct regression equations and interpret parameters such as intercept, slope, and error term.",
          "LO 4.2: Apply the concepts of probability and statistics to compute model fit metrics such as R², MAE, and MAPE, and interpret their significance.",
          "LO 4.3: Identify appropriate mathematical and statistical methods required for selecting suitable regression models such as simple, multiple, and partial regression.",
          "LO 4.4: Analyze and interpret regression model outcomes using contemporary tools to assess significance of coefficients and overall model performance.",
          "LO 4.5: Explore alternative regression model designs by examining different model structures and variable selections for meeting analytical requirements.",
          "LO 4.6: Perform systematic evaluation of regression models by comparing fit statistics, significance tests, and error measures to select the optimal design."
        ]},
      { id:"m5", title:"Anomaly Detection",
        topics:[
          "5.1 Outliers and causes of outliers",
          "5.2 Anomaly detection techniques",
          "5.3 Outlier detection using statistics",
          "5.4 Outlier detection using distance-based methods",
          "5.5 Outlier detection using density-based methods",
          "5.6 SMOTE"
        ],
        los:[
          "LO 5.1: Apply statistical knowledge to explain the concept of outliers and identify their possible causes in real-world datasets.",
          "LO 5.2: Apply probability and statistical techniques to detect anomalies using distribution-based and statistical thresholding methods.",
          "LO 5.3: Identify appropriate mathematical and algorithmic approaches for detecting outliers using distance-based and density-based methods.",
          "LO 5.4: Analyze and interpret results of anomaly detection techniques using contemporary analytical tools and visualizations.",
          "LO 5.5: Explore alternative anomaly detection designs, including statistical, distance-based, and density-based techniques, to address varied data scenarios.",
          "LO 5.6: Perform systematic evaluation of anomaly detection methods, including SMOTE for class imbalance, to determine the most effective solution.",
          "LO 5.7: Identify suitable modern engineering and data science tools required for implementing anomaly detection algorithms effectively.",
          "LO 5.8: Demonstrate proficiency in using discipline-specific tools for implementing anomaly detection techniques and interpreting their outputs."
        ]},
      { id:"m6", title:"Time Series Forecasting",
        topics:[
          "6.1 Taxonomy of time series forecasting methods; time series decomposition",
          "6.2 Smoothing methods: average, moving average; time series with linear regression; ARIMA",
          "6.3 Performance evaluation: MAE, RMSE, MAPE, MASE"
        ],
        los:[
          "LO 6.1: Apply statistical and numerical techniques to interpret the taxonomy of time series forecasting methods and the components of time series decomposition such as trend, seasonality, and irregular variations.",
          "LO 6.2: Apply concepts of probability and statistics to implement smoothing methods such as the average method, moving average smoothing, and exponential approaches for analysing time-dependent data.",
          "LO 6.3: Identify appropriate mathematical and statistical methods, including linear regression and ARIMA, required for selecting suitable time series forecasting models.",
          "LO 6.4: Analyze and interpret time series model outputs using contemporary analytical tools to understand forecast patterns and model behaviour.",
          "LO 6.5: Identify modern analytical and visualization tools required for building, analysing, and validating time series forecasting models.",
          "LO 6.6: Demonstrate proficiency in using discipline-specific tools to implement time series models, generate forecasts, and visualize predictions effectively."
        ]}
    ]},

    /* The OR syllabus has course-level outcomes only, so its modules carry no LOs. */
    or: { paper:null, modules:[
      { id:"m1", built:true, title:"Introduction to OR & Linear Programming" },
      { id:"m2", built:true, title:"Queuing Models" },
      { id:"m3", title:"Simulation", hours:"6–8",
        topics:[
          "Introduction, methodology of simulation, basic concepts",
          "Simulation procedure",
          "Monte-Carlo method and Monte-Carlo simulation",
          "Applications, advantages and limitations of simulation"
        ]},
      { id:"m4", title:"Dynamic Programming", hours:"6–8",
        topics:[
          "Characteristics of dynamic programming",
          "Employment smoothening",
          "Capital budgeting",
          "Stage coach / shortest path",
          "Cargo loading",
          "Reliability problems"
        ]},
      { id:"m5", built:true, title:"Game Theory" },
      { id:"m6", title:"Inventory Models", hours:"4–6",
        topics:[
          "Classical EOQ model",
          "EOQ with price breaks",
          "EOQ with shortages",
          "Probabilistic EOQ model"
        ]}
    ]},

    dl: { paper:null, modules:[
      { id:"m1", built:true, title:"Fundamentals of Neural Network" },
      { id:"m2", built:true, title:"Training, Optimization and Regularization of DNN" },
      { id:"m3", built:true, title:"Convolutional Neural Networks (CNN)" },
      { id:"m4", title:"Autoencoders: Unsupervised Learning", hours:"8–10",
        topics:[
          "Unsupervised learning: introduction",
          "Linear, undercomplete and overcomplete autoencoders",
          "Denoising, sparse and contractive autoencoders",
          "The autoencoder bottleneck and its impact",
          "Applications: image compression, image denoising, dimensionality reduction"
        ],
        los:[
          "LO 4.1: Apply fundamental knowledge of neural networks to interpret the working principles of autoencoder.",
          "LO 4.2: Apply foundational and specialized engineering concepts to categorize major autoencoder models.",
          "LO 4.3: Explore and design suitable autoencoder variants for image compression or denoising pipelines by evaluating multiple architectural alternatives.",
          "LO 4.4: Able to verify the functionalities influencing representation capacity and reconstruction quality for different datasets and validate design of auto-encoders."
        ]},
      { id:"m5", title:"Recurrent Neural Networks (RNN)", hours:"10–12",
        topics:[
          "Sequence learning problem; unfolding computational graphs",
          "Recurrent Neural Network; Bidirectional RNN",
          "Backpropagation Through Time; vanishing and exploding gradients; truncated BPTT",
          "LSTM: selective read, write and forget; Gated Recurrent Unit"
        ],
        los:[
          "LO 5.1: Apply fundamentals of engineering to solve sequencing learning problems.",
          "LO 5.2: Apply computer engineering principles to construe with working principles of Recurrent Neural Networks.",
          "LO 5.3: Analyze and interpret the effect of vanishing and exploding gradient problems on learning performance in sequence modeling tasks.",
          "LO 5.4: Analyze sequence-learning problems to identify and conform suitable RNN variants and assess the strengths and limitations of relevant tools for their implementation.",
          "LO 5.5: Interpret legislation and regulations relevant for the protection of the public and understand the relationship between the technical, socio-economic and environmental dimensions of sustainability while deploying RNN-based systems."
        ]},
      { id:"m6", title:"Emerging Trends", hours:"6–8",
        topics:[
          "Generative Adversarial Network (GAN) architecture",
          "Image generation and DeepFake",
          "Diffusion models for image generation"
        ],
        los:[
          "LO 6.1: Apply engineering fundamentals to interpret GAN architecture and training dynamics.",
          "LO 6.2: Apply theory and principles of computer science and engineering to generate synthetic images with GAN architecture.",
          "LO 6.3: Recognize ethical, legal and societal implications and understand the environmental dimensions of sustainability for image generation using Deep Fake technique.",
          "LO 6.4: Demonstrate continuous professional learning by tracking developments in generative models, including diffusion-based image generation techniques, and analyzing sourced technical information for feasibility and sustainability to propose diverse applications."
        ]}
    ]}
  };

  /* number each module from its id */
  Object.keys(S).forEach(function(code){
    S[code].modules.forEach(function(m){ m.n = +m.id.slice(1); });
  });
})();
