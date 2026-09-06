# AI Study Hub — CEPCC712 Artificial Intelligence

A self-contained, offline-capable study site for **CEPCC712 Artificial Intelligence**
(B.Tech Computer Engineering, Curriculum N-2024).

Everything lives in a single `index.html`. No build step, no server, no dependencies.
Open the file in a browser, or host the folder on GitHub Pages.

## Using it

- **Local:** double-click `index.html`.
- **GitHub Pages:** push this folder, then Settings → Pages → deploy from branch (root).
  The site is static, so it works as-is.

## Your progress

Progress is stored in **your own browser** via `localStorage`. There is no account,
no backend and no telemetry — nothing you do is sent anywhere or visible to anyone else.

- Everyone who opens the same link gets their own fresh 0% dashboard.
- **Settings → Export progress** writes a JSON file; **Import** restores it on another
  device or browser. Imported files are validated, so a malformed file is rejected
  rather than corrupting what you already have.
- **Settings → Reset my progress** clears only your browser's data, after confirmation.

## What's inside

| Section | What it does |
|---|---|
| Dashboard | Overall / theory / numerical / practice progress, weak topics, and one clear "study next" recommendation |
| Modules 1–6 | Organised exactly as the official syllabus, with theory and numericals kept separate |
| Study mode | Learn → Understand → Formula → Worked example → Exam answer → Common mistakes → Practice |
| Learning outcomes | All 28 syllabus LOs with their Performance Indicators, Course Outcomes, mapped topics and LO-framed questions |
| Numericals | Formula, every variable's meaning, when to use it, a fully worked example and graded practice |
| Important questions | Filterable by module, outcome, priority, marks and type — each says *why* it is rated as it is |
| Quizzes | MCQ, true/false, multi-select and numerical, with explanations; wrong answers feed weak-topic detection |
| Flashcards | Definitions, formulas, FOL patterns, comparisons and exam traps |
| Quick revision | Condensed sheets for the last 30 minutes, plus the diagrams worth drawing |
| Formula sheet | Every formula supported by the uploaded material |
| Syllabus coverage | An honest map of which topics have teacher material behind them |

## Sources

All academic content is derived from the uploaded course material:

- `AI Syllabus.pdf` — the official syllabus (Curriculum N-2024)
- Lecture decks — Chapter 1 (Fundamentals), Chapter 2 (uninformed + informed search),
  Chapter 3 (Knowledge & Reasoning, Forward/Backward Chaining, Semantic Networks)
- Handwritten class notes — `AI Notes.pdf`, `AI.pdf`
- Assessments — `CIA 1.docx`, `CIA-02.docx`, `extra problems.docx`

## Known coverage gaps

These are **flagged in the site itself** rather than filled with generic textbook content:

- **Module 4 — Planning** (state space, hierarchical, partial-order, multi-agent):
  no lecture material was uploaded.
- **Module 5** (Generative AI, Explainable AI, Responsible AI): no lecture material.
  Related risk/ethics content from Chapter 1 is cross-linked.
- **Module 6** (AI in real-world domains): no lecture material. Overlapping agentic-AI
  content from Chapter 1 is cross-linked.

Syllabus scope and learning outcomes for these are still listed so nothing is missed.
Add the missing decks and these sections can be written up properly.

## Accessibility

Semantic HTML, keyboard-operable controls, visible focus states, ARIA labels on the
status controls and progress bars, status communicated by text and shape as well as
colour, and a `prefers-reduced-motion` fallback. Light, dark and system themes.
