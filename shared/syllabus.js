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
      { id:"m3", built:true, title:"Data Exploration using Inferential Statistics" },
      { id:"m4", built:true, title:"Regression Analysis" },
      { id:"m5", built:true, title:"Anomaly Detection" },
      { id:"m6", built:true, title:"Time Series Forecasting" }
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
