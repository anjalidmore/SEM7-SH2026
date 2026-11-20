# NLP Study Site — CEPEC7032 Natural Language Processing

> **Folder layout (same in every subject):** `index.html` the site · `README.md` this file ·
> `_ORGANISATION.md` how the resources are filed and what is missing · `_LO-MAP.md` learning outcomes and
> files per module. Resources: `_resources/nlp/<division>/<module>/` (local only, gitignored).

A single self-contained `index.html` for **CEPEC7032 Natural Language Processing** (B.Tech Computer
Engineering, Curriculum N-2024, Semester 7). End Sem exam: **21 Nov 2026**.

No backend, no build step, no dependencies, no network requests. It works from disk (`file://`) and on
GitHub Pages. It is wired to the shared Semester 7 layer (`../../shared/sem7.css`, `sem7.js`, `syllabus.js`).

## ESE important questions list (added 20 Nov 2026)

Seven 10-mark questions were sent to the class on 20 Nov as near-certain for the paper. All seven are
answered on the site and every page that answers one carries an **Important** tag (filled pill), ranks
first in its module list, and is listed in an **Important questions** card at the foot of the Dashboard
and at the top of the Full-Marks Guide. Six pages were added because of the list and its material:
`m6i1` RAG five stages, `s_m6_ragfix` RAG faulty-stage diagnosis, `s_m6_errsrc` application error
sources, `m6i2` summarization steps (10 marks), `s_m5_hobbs` Hobbs on the class tree and the Camelot
tree, `s_m5_center` the class centering examples. Existing Lesk, Hobbs, centering, RAG, ethics and
summarization pages are tagged too, as is the HMM 'hot lead cold feet' problem (sent 19 Nov).
The data is `IMPORTANT_LIST` in `index.html`, just before `NEW_CONTENT_END`.

## What is in the site

Content is built for **Modules 1–6**:

| Module | Title |
|---|---|
| 1 | Introduction to NLP |
| 2 | Text Processing & Word-Level Analysis |
| 3 | Syntax Analysis & Sequence Modeling |
| 4 | Semantic Analysis & Word Representations |
| 5 | Discourse & Advanced NLP |
| 6 | Applications & Ethical Perspectives |

Modules 4–6 were built from the decks, practice sets and seminar PDF in `_resources/nlp/Comp B/`. There is no class material for 6.1 Machine Translation, 6.5 Ethics or 6.6 Low-resource languages: those follow the syllabus and standard textbook content. The MSE Focus tab has been removed.

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
