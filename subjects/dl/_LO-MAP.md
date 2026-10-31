# `_LO-MAP.md` — Resource ↔ Learning-Outcome map
**HMCAL703 Deep Learning · MSE scope: Modules 1, 2, 3**

---

## 1 · The learning outcomes, verbatim from the syllabus

### Module 01 — Fundamentals of Neural Network
| LO | Statement (verbatim) | P.I. |
|---|---|---|
| **LO 1.1** | Apply linear-algebraic and discrete-mathematical techniques to model and interpret the mathematical representation of biological neurons and the McCulloch–Pitts neuron. | 1.1.1 |
| **LO 1.2** | Apply principles of computer engineering to determine linear seperability of given dataset using perceptron-based model. | 1.4.1 |
| **LO 1.3** | Apply foundational and specialized engineering concepts to classify core terminologies and major categories of Deep Learning models. | 1.3.1 |

### Module 02 — Training, Optimization and Regularization of Deep Neural Network
| LO | Statement (verbatim) | P.I. |
|---|---|---|
| **LO 2.1** | Apply linear-algebraic and discrete-mathematical techniques to mathematically represent Multi Layered Feed Forward Neural Network. | 1.1.1 |
| **LO 2.2** | Apply engineering knowledge to formulate computational modules with suitable activation and loss functions for a given problem context. | 1.3.1 |
| **LO 2.3** | Identify optimization algorithms of a computer based system and tune learning parameters by applying mathematical foundations of gradient-based methods to Enhance convergence and model performance. | 2.1.2 |
| **LO 2.4** | Compare and contrast alternative methods to select appropriate regularization technique to reduce over-fitting and improve model generalization using engineering fundamentals. | 2.2.4 |

### Module 03 — Convolutional Neural Networks (CNN): Supervised Learning
| LO | Statement (verbatim) | P.I. |
|---|---|---|
| **LO 3.1** | Apply fundamental knowledge of mathematics to compute convolution, padding and stride operations in CNNs. | 1.1.1 |
| **LO 3.2** | Apply theory and principles of supervised learning to determine the relationship between input, output, and filter size in CNNs. | 1.3.1 |
| **LO 3.3** | Design a variety of potential CNN architecture design solutions suited for specified image data to meet functional requirements. | 3.2.2 |
| **LO 3.4** | Explore classical architectural designs for basic image-classification problems. | 3.2.1 |

*(Modules 4–6 and LOs 4.1–6.4 are out of MSE scope and have no material in this folder.)*

---

## 2 · Per-module file table

### Module 1 — Fundamentals of Neural Network
| File | Slides | LOs served | Recommended order |
|---|---|---|---|
| `1.01 [LO1.1, LO1.2, LO1.3] Fundamentals of Neural Network …pdf` | 67 | LO 1.1, LO 1.2, LO 1.3 | 1st |
| `…/Module 2/2.01 …pdf` **slides 214–230 only** | 17 | **LO 1.2** (Perceptron Learning, Delta rule) | 2nd — read after the Module 1 deck |

### Module 2 — Training, Optimization and Regularization of DNN
| File | Slides | LOs served | Recommended order |
|---|---|---|---|
| `2.01 [LO2.1 … LO2.4 + LO1.2] Training, Optimization and Regularization of DNN …pdf` | 292 | LO 2.1, 2.2, 2.3, 2.4 (**+ LO 1.2**) | 1st |

Internal reading order within that one file:
| Slides | Content | LO |
|---|---|---|
| 1–37 | Narrative build-up of the training pipeline (14 "stages") | LO 2.1 |
| 38–46 | Training of DNN, MLFFNN structure, forward propagation | **LO 2.1** |
| 47–79 | Activation functions: linear, sigmoid, tanh, ReLU, Leaky ReLU, softmax | **LO 2.2** |
| 80–96 | Loss functions: MSE, entropy, cross-entropy; choosing output ↔ loss | **LO 2.2** |
| 97–112 | Four task types mapped to output layer + loss (regression, binary, multi-class, multi-label) | **LO 2.2** |
| 113–153 | Backpropagation, gradient, derivative, chain rule, weight update | **LO 2.3** |
| 154–213 | GD family: batch, SGD, mini-batch, LR decay, momentum, NAG, AdaGrad, RMSProp, Adam | **LO 2.3** |
| 214–230 | **Perceptron Learning Rule & Delta Learning Rule** | **LO 1.2** ⚑ |
| 231–235 | Training FF DNN — worked Ex1 and Ex2 | **LO 2.1, 2.3** |
| 236–292 | Regularization: over/underfitting, bias, variance, tradeoff, L1, L2, parameter sharing, dropout, weight decay, batch norm, early stopping, data augmentation, noise | **LO 2.4** |

### Module 3 — Convolutional Neural Networks (CNN)
| File | Slides | LOs served | Recommended order |
|---|---|---|---|
| `3.01 [LO3.1 … LO3.4] CNN …pdf` | 83 | LO 3.1, 3.2, 3.3, 3.4 | 1st |

Internal reading order within that one file:
| Slides | Content | LO |
|---|---|---|
| 1–23 | Images as input, convolution 1-D and 2-D, receptive field, depth/channels | **LO 3.1** |
| 24–32 | Padding, stride, striding for hierarchies, filter size | **LO 3.1** |
| 33–34 | Output-size formula and parameter count | **LO 3.2** |
| 35–55 | CNN architecture: conv layer, ReLU, pooling, flattening, fully connected | **LO 3.3** |
| 56–59 | Weight sharing; Fully Connected NN vs CNN | **LO 3.3** |
| 61–64 | Variants of basic convolution (full, unshared, tiled) | **LO 3.3** |
| 65–80 | Feature hierarchy; **LeNet-5** architecture | **LO 3.4** |
| 81–83 | **AlexNet** architecture with full dimension arithmetic | **LO 3.4** |

---

## 3 · LOs with **no material anywhere in the folder**

Every LO in MSE scope (1.1 → 3.4) has material behind it. **No in-scope LO is unserved.**

Thinly served, in order of thinness:

| LO | What is thin | Evidence |
|---|---|---|
| **LO 1.3** | "Basic Terminologies of Deep Learning" is a named syllabus bullet with no dedicated slide anywhere. The *categories* half of LO 1.3 is well served (slides 61–67); the *terminologies* half is not. | Module 1 deck slides 61–67 cover paradigms + architectures only |
| **LO 3.3** | "Variants of basic Convolution function" gets four slides with diagrams and no worked numbers. | Module 3 slides 61–64 |
| **LO 1.2** | Fully served — **but only if the Module 2 deck is read.** The Module 1 deck alone covers linear separability without either learning rule. | Module 2 slides 214–230 |

Out-of-scope LOs 4.1–6.4 have no material, as expected — Modules 4, 5 and 6 are not in the MSE.

---

## 4 · Self-learning topics (syllabus-named, no material)

| Module | Self-learning topic | Material in folder |
|---|---|---|
| 1 | Transfer Learning | **None** |
| 2 | Advanced Regularization Techniques in Modern Deep Learning Architectures | **None** |
| 2 | Hyperparameter Tuning Strategies for Efficient Deep Learning Model Optimization | **None** |
| 3 | Evolution of CNN Architectures: From VGG to ResNet | **None** |
| 3 | Advanced CNN Architectures | **None** |
