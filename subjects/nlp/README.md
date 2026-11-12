# NLP Study Site — CEPEC7032 Natural Language Processing

> **Folder layout (same in every subject):** `index.html` the site · `README.md` this file ·
> `_ORGANISATION.md` how the resources are filed and what is missing · `_LO-MAP.md` learning outcomes and
> files per module. Resources: `_resources/nlp/<division>/<module>/` (local only, gitignored).

A single self-contained `index.html` for **CEPEC7032 Natural Language Processing** (B.Tech Computer
Engineering, Curriculum N-2024, Semester 7). End Sem exam: **21 Nov 2026**.

No backend, no build step, no dependencies, no network requests. It works from disk (`file://`) and on
GitHub Pages. It is wired to the shared Semester 7 layer (`../../shared/sem7.css`, `sem7.js`, `syllabus.js`).

## What is in the site

Content is built for **Modules 1–3** at the moment:

| Module | Title |
|---|---|
| 1 | Introduction to NLP |
| 2 | Text Processing & Word-Level Analysis |
| 3 | Syntax Analysis & Sequence Modeling |

**Modules 4–6 are not built yet.** Their decks, practice sets and a seminar PDF are now in
`_resources/nlp/Comp B/` (see `_ORGANISATION.md`), so they are the open work.

Each module follows the same study method as every other subject: dashboard → module page with
**Numericals · Theory · Quick Review · Flashcards · Quiz** → topic page. The site also has an
**Exam Pattern** notes tab and a Core / Extra switch on the dashboard.

## Your progress

Stored in your own browser (`localStorage`, key `nlpExamPrepProgress_v3`; the older `…_v2` key is read once
and migrated). Nothing is sent anywhere. The hub reads only the small summary the shared layer writes.

## Source material

Lecture decks, practice problems, the Module 1 notebooks, past IA papers and the syllabus are in
`_resources/nlp/`. `_LO-MAP.md` lists the learning outcomes and the files per module;
`_ORGANISATION.md` lists what is missing or duplicated.

## Publishing

Static files only: push the repository and serve it with GitHub Pages (`.nojekyll` is already present).
