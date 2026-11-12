# `_ORGANISATION.md` — Folder organisation & gap report
**CEPCC712 Artificial Intelligence** · exam 19 Nov 2026 · regenerated 12 Nov 2026

Resources are filed as **subject → division → module**: `_resources/ai/<Comp A|Comp B>/<Module N - title>/`. Division rule: **Comp A** = the file's content is in the `Comp A Sem 7` download; **Comp B** = everything else. Course-level folders (`_Syllabus`, `_Books`, `_Notes`, `_CIA`, ...) sit inside each division. Every move is logged in `_resources/_REORG-LOG.md`.

---

## 1 · Module folders and file counts

| Module folder | Comp A | Comp B |
|---|---|---|
| Module 1 - Fundamentals of AI & Agents | 3 | 1 |
| Module 2 - Problem Solving, Search & Optimization | 12 | 2 |
| Module 3 - Knowledge Representation & Reasoning | 9 | 3 |
| Module 4 - Planning & Uncertainty | 9 | 1 |
| Module 5 - Generative AI, XAI & Responsible AI | 2 | 2 |
| Module 6 - AI in Real-World Domains | 0 | 4 |
| `_Books` | 4 | 1 |
| `_CIA` | 0 | 3 |
| `_Notes` | 0 | 2 |
| `_Syllabus` | 1 | 3 |

## 2 · Gaps

- Module 6: nothing in Comp A (material exists in the other division).

## 3 · Findings from the audit

- Two source trees were merged: the chapter decks (`AI/Chpt 1-6`, now Comp B) and the lecture series (`COMP A/Lectures`, now Comp A). Comp A has no Module 6 material.
- Old chapter numbers do not match the syllabus. `Module4 Knowledge & Reasoning.pdf` and the deck titled "Chapter 4" are Module 3; the decks named "Chpt3" are Module 2 search.
- Near-duplicates kept side by side, not deleted: `Chapter5` (two copies), `CHPT 4 Uncertainity` (30 vs 23 slides), `chpt 5 part 2` vs `Chap 5_Generative_AI_Final`, and two semantic-network decks.
- Two versions of the full B.Tech Computer curriculum (v1 12 Jul, v2 newer) sit in `_Syllabus`; use the 7-page CEPCC712 syllabus first.
- `ai/ese.html` and `ai/ESE-COVERAGE.md` stay at the subject root as a reference-only earlier draft; the coverage report still cites the old `Chpt N/` paths.
