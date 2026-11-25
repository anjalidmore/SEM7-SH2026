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
