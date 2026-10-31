# Phase 0 — Folder organisation & gap report
**HMCAL703 Deep Learning · MSE · Modules 1, 2, 3 · 30 marks · 1.5 hours**
Generated before the study site was built. Every file was placed by **reading its contents**, not its filename.

---

## 1 · Module folders created

| Folder | Syllabus title (verbatim) |
|---|---|
| `_Syllabus/` | — (course document) |
| `Module 1 - Fundamentals of Neural Network` | 01. Fundamentals of Neural Network |
| `Module 2 - Training, Optimization and Regularization of DNN` | 02. Training, Optimization and Regularization of Deep Neural Network |
| `Module 3 - Convolutional Neural Networks (CNN) Supervised Learning` | 03. Convolutional Neural Networks (CNN): Supervised Learning |
| `_Question Bank/` | **created but EMPTY — see §4** |
| `_NOTES (highest priority)/` | **created but EMPTY — see §4** |

---

## 2 · Every document placed, with what it actually contains

### `_Syllabus/`
**`0.01 [all LOs] HMCAL703 Deep Learning - official syllabus, LOs, exam scheme.pdf`** — 7 pages, text-based.
The official N-2024 curriculum entry: course code, credits, examination scheme (CA 20 + MSE 30 + ESE 50), all six modules with
verbatim contents and learning outcomes, performance indicators, course outcomes, CO–PO mapping, textbooks. Explicitly states
*"Mid semester examination will be based on 40% to 50% syllabus"* — Modules 1–3 of 6 is exactly 50%, which corroborates the stated scope.

### `Module 1 - Fundamentals of Neural Network/`
**`1.01 [LO1.1, LO1.2, LO1.3] Fundamentals of Neural Network …pdf`** — 67 slides.
Biological neuron and its anatomy; the 1943 McCulloch–Pitts neuron (Boolean inputs, summation, threshold θ, excitatory vs
inhibitory/veto inputs) with AND / OR / NOR / NOT worked as logic gates and a geometric line interpretation; limitations of the
M-P neuron; the 1958 Rosenblatt perceptron as a 3-step pipeline (weights → summation → activation), bias as w₀ with x₀ = 1;
the OR function solved with w = (−1, 1.1, 1.1); a Perceptron vs M-P comparison table; linear separability and linearly
non-separable data via a running "student readiness" classroom example; XOR; the multilayer perceptron; deep networks and
their advantages/drawbacks; ML vs DL; AI vs ML vs DL; and Classes of Deep Learning split into **learning paradigms**
(supervised, unsupervised, semi-supervised, self-supervised, reinforcement) and **network architectures** (MLP, CNN, RNN/LSTM/GRU,
autoencoder, transformer, GNN).
*Structure note:* this deck interleaves the lecturer's own PowerPoint slides with AI-generated recap slides (NotebookLM / Gemini
Notebook, credited on-slide to Dr. Pravin S. Rahate). Both were read. Where the two disagree, §5 records it.

### `Module 2 - Training, Optimization and Regularization of DNN/`
**`2.01 [LO2.1 … LO2.4 + LO1.2] Training, Optimization and Regularization of DNN …pdf`** — 292 slides. The largest and
highest-yield document in the folder.
A 37-slide narrative build-up of the training pipeline; the Multi-Layered Feed-Forward Neural Network; **activation functions**
(linear, sigmoid/logistic, tanh, ReLU with the dying-ReLU problem, Leaky ReLU, softmax) each with pros/cons and worked numbers;
**loss functions** (MSE, entropy, cross-entropy, binary and categorical) with a worked cross-entropy example; the
output-function ↔ loss-function pairing rules across four task types; **backpropagation** (gradient, derivative, chain rule,
weight-update blueprint W_new = W_old − η·∂E/∂W) with a numerical step; the **gradient-descent family** — batch GD, SGD,
mini-batch GD, learning-rate decay, momentum-based GD, Nesterov accelerated gradient, AdaGrad, RMSProp, Adam — with formulas and a
comparison matrix; the **Perceptron Learning Rule and the Delta Learning Rule** with a full 4-feature worked update and a
side-by-side comparison table; two **Training FF DNN worked examples**; and **regularization** — overfitting/underfitting/good fit,
bias, variance, the bias–variance tradeoff, then L1, L2, parameter sharing, dropout, weight decay, batch normalization,
early stopping, data augmentation and noise addition.

> **⚑ Cross-module document (flagged, not duplicated).** Slides 214–230 of this Module 2 deck teach **Perceptron Learning and
> Delta Learning**, which the syllabus lists under **Module 1**. The file stays in Module 2 (its primary content is Module 2),
> but the site gives that material a **Module 1 topic page**, because that is where the exam will ask for it.

### `Module 3 - Convolutional Neural Networks (CNN) Supervised Learning/`
**`3.01 [LO3.1 … LO3.4] CNN …pdf`** — 83 slides.
Why images are a special class of input; convolution in 1-D and 2-D with a hand-worked kernel sweep and a numeric sharpen-filter
example; depth/channels (grayscale = 1, RGB = 3); padding and zero-padding; stride; striding for hierarchies; the
**output-size formula ⌊(n − f + 2p)/s⌋ + 1** with a worked 28×28 case and an unsolved parameter-count exercise; CNN architecture
(convolution layer, ReLU rectification, pooling layer, flattening, fully connected layer) with a max/average pooling numeric
example; weight sharing and its three advantages; Fully Connected NN vs CNN; variants of the basic convolution function
(full, unshared, tiled); **LeNet-5** with its full dimension chain; and **AlexNet** with its full dimension chain and
layer-by-layer arithmetic.

---

## 3 · Documents flagged as spanning modules

| Document | Filed in | Also teaches | Handling |
|---|---|---|---|
| `2.01 … Training, Optimization and Regularization of DNN` | Module 2 | **Module 1** — Perceptron Learning rule, Delta learning rule (slides 214–230) | File **not** duplicated. Flagged here, mapped in `_LO-MAP.md`, and surfaced as a Module 1 topic page on the site. |

No other document spans modules.

---

## 4 · Syllabus topics in scope with **no material in the folder**

Named exactly as the syllabus names them.

### Module 1
- **"Perceptron Learning, Delta learning"** — *not absent from the folder, but absent from the Module 1 deck.* Both rules are
  taught only in the Module 2 deck (slides 214–230). Anyone revising from `Module1.pdf` alone would miss a named Module 1 syllabus
  topic entirely. This is the single most consequential finding of Phase 0.
- **"Basic Terminologies of Deep Learning"** — no slide in the Module 1 deck carries this heading and no consolidated
  terminology list exists anywhere in the folder. The terms themselves (epoch, batch, learning rate, weights, bias, activation,
  loss) are each defined in passing inside the Module 2 narrative, but never gathered.
- **"Deep Networks: … Brief History"** — thin. Two dates are anchored (1943 McCulloch–Pitts, 1958 Rosenblatt perceptron). There is
  no slide covering the 1969 Minsky–Papert critique, the 1986 backpropagation revival, or the 2012 AlexNet moment as history.
- **"Self-Learning Topics: Transfer Learning"** — no material at all in the folder.

### Module 2
- Nothing missing. Every syllabus bullet has substantial material behind it.
- **"Self-Learning Topics: Advanced Regularization Techniques…; Hyperparameter Tuning Strategies…"** — no material (self-learning
  topics are outside the taught deck by design).

### Module 3
- **"Variants of basic Convolution function"** — present but thin: four slides (61–64) naming full, unshared and tiled convolution
  with one diagram each and no worked numbers.
- **"Self-Learning Topics: Evolution of CNN Architectures: From VGG to ResNet; Advanced CNN Architectures"** — no material.

### Assessment material
- **There is no question bank in the folder.**
- **There is no past paper — neither a previous MSE nor an IA paper.** Nothing on the site is or can be labelled "previous year".
- **There are no handwritten or class notes.** The `_NOTES (highest priority)/` folder was created and left empty so that notes
  dropped later land in the right place.

Everything else in the Module 1–3 syllabus has material behind it. This list is complete; nothing has been left to inference.

---

## 5 · Files that could not be read

**None.** All four PDFs were read in full.

Two of the three decks are effectively image-only — text extraction returned ~110 characters per page for Module 1 and
Module 2, because most slides are full-page rasterised images (1376×768) rather than text frames. Every one of the
**442 slide pages** was therefore rendered to PNG at 1400 px wide and read as an image. Nothing was skipped and nothing was inferred
from a filename or a slide title alone.

| Document | Pages | Extractable text | Method used |
|---|---|---|---|
| `0.01 … syllabus.pdf` | 7 | 16,650 chars | Text extraction |
| `1.01 … Module 1.pdf` | 67 | 7,373 chars (110/page) | **All 67 pages read as images** |
| `2.01 … Module 2.pdf` | 292 | 34,153 chars (116/page) | **All 292 pages read as images** |
| `3.01 … Module 3.pdf` | 83 | 13,407 chars (161/page) | Text extraction **+ all figure pages read as images** |

---

## 6 · Contradictions found while reading

Recorded in full in `README.md` §"Contradictions found in the source material". Summary: six arithmetic or labelling slips, all in
Module 2, five of them on AI-generated recap slides rather than the lecturer's own worked slides. The teacher's numbers are
presented as authoritative on every topic page, each with a short note.
