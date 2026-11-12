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
      { id:"m4", built:true, title:"Semantic Analysis and Word Representations" },
      { id:"m5", built:true, title:"Discourse and Advanced NLP" },
      { id:"m6", built:true, title:"Applications and Ethical Perspectives in NLP" }
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
      { id:"m3", built:true, title:"Simulation" },
      { id:"m4", built:true, title:"Dynamic Programming" },
      { id:"m5", built:true, title:"Game Theory" },
      { id:"m6", built:true, title:"Inventory Models" }
    ]},

    dl: { paper:null, modules:[
      { id:"m1", built:true, title:"Fundamentals of Neural Network" },
      { id:"m2", built:true, title:"Training, Optimization and Regularization of DNN" },
      { id:"m3", built:true, title:"Convolutional Neural Networks (CNN)" },
      { id:"m4", built:true, title:"Autoencoders: Unsupervised Learning" },
      { id:"m5", built:true, title:"Recurrent Neural Networks (RNN)" },
      { id:"m6", built:true, title:"Emerging Trends" }
    ]}
  };

  /* number each module from its id */
  Object.keys(S).forEach(function(code){
    S[code].modules.forEach(function(m){ m.n = +m.id.slice(1); });
  });
})();
