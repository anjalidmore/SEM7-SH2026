/* =====================================================================
   OR — step-by-step notes for syllabus.html
   One syllabus topic = one small predicted question (an array when a topic
   needs a theory step and a numerical step). Key = module.entry.topic.
   Note: {q, m (marks), a (plain text for SEM7.ui.rich, or HTML), trap, ask[]}
   Questions marked "Important list" are from the ESE important-questions
   list (2, 5 and 10 mark) in _resources/or. Other small worked examples
   are made for these notes; the methods are the class ones.
   ===================================================================== */
(function(){
  "use strict";
  var N = (window.SEM7_NOTES = window.SEM7_NOTES || {}).or = {};

  /* ------------------------------------------------ Module 1 */
  N["0.0.0"] = [
    { q:"Define Operations Research. State its features.", m:5,
      a:"Operations Research — the application of scientific methods, techniques and tools to problems involving the operations of a system, so as to give those in control the optimum solution.\nIn short: a scientific approach to decision making.\nFeatures:\n- Decision-making approach\n- Scientific method\n- System (whole-organisation) orientation\n- Inter-disciplinary team\n- Use of mathematical models and computers\n- Aims at the optimum solution\nOrigin: military operations in World War II (Britain).",
      ask:["Scope / applications of OR", "Phases (methodology) of OR"] },
    { q:"Important list: state two key advantages of using OR techniques in managerial decision-making.", m:2,
      a:"- Better decisions: OR gives the optimum solution from a model, instead of a decision by intuition.\n- Better use of resources: scarce resources (men, machines, material, money) are allocated to give maximum profit or minimum cost.\nOthers: better coordination between departments; better control; what-if analysis before acting.",
      ask:["List the advantages of OR techniques in decision-making"] },
    { q:"State the phases (methodology) of an OR study.", m:5,
      a:"1. Formulate the problem: objective, decision variables, constraints.\n2. Construct a mathematical model.\n3. Derive a solution from the model.\n4. Test (validate) the model and the solution.\n5. Establish controls over the solution.\n6. Implement the solution.",
      ask:["Explain the steps in solving an OR problem"] }
  ];
  N["0.0.1"] = [
    { q:"Explain the structure of the mathematical model.", m:5,
      a:"A mathematical model has:\n- Decision variables: the unknowns to be found (x1, x2).\n- Objective function: the quantity to be maximised or minimised, Z = c1 x1 + c2 x2.\n- Constraints: the restrictions on the variables, a11 x1 + a12 x2 ≤ b1.\n- Parameters: the known constants (c, a, b).\n- Non-negativity restriction: x1, x2 ≥ 0.\nGeneral form: optimise Z = f(x) subject to g(x) ≤, = or ≥ b and x ≥ 0.\nExample: Max Z = 3x1 + 2x2 subject to x1 + x2 ≤ 4, x1 − x2 ≤ 2, x1, x2 ≥ 0.",
      ask:["Types of models in OR"] },
    { q:"Important list: differentiate between a constraint and an objective function.", m:2,
      a:"<table><tr><th></th><th>Objective function</th><th>Constraint</th></tr><tr><td>Meaning</td><td>The goal to be optimised</td><td>A restriction on the variables</td></tr><tr><td>Form</td><td>Max or Min Z = c1x1 + c2x2</td><td>a1x1 + a2x2 ≤, = or ≥ b</td></tr><tr><td>Number</td><td>One</td><td>Many</td></tr><tr><td>Role</td><td>Picks the best solution</td><td>Defines the feasible region</td></tr></table>",
      ask:["Compare the roles of the objective function and a constraint"] }
  ];
  N["0.0.2"] = { q:"State the limitations of Operations Research.", m:5,
      a:"- Magnitude of computation: real problems have many variables and need computers.\n- Non-quantifiable factors: human behaviour, morale and goodwill cannot be put in the model.\n- Gap between manager and OR specialist: each may not understand the other's work.\n- Money and time: building, solving and updating a model is costly.\n- Implementation: people may resist the solution.\n- A model is only a simplification of reality; a wrong assumption gives a wrong answer.",
      ask:["Advantages and limitations of OR"] };
  N["0.1.0"] = { q:"What is linear programming?", m:2,
      a:"Linear programming — a mathematical technique for finding the best (maximum or minimum) value of a linear objective function, subject to linear constraints.\n- Linear: every relation is of the first degree.\n- Programming: planning a course of action.\nUses: product mix, diet (blending), transportation, assignment, production scheduling.",
      ask:["Applications of linear programming"] };
  N["0.1.1"] = { q:"Define the terms of an LPP: feasible solution, basic feasible solution, optimal solution.", m:5,
      a:"- Solution: any values of the variables that satisfy the constraints.\n- Feasible solution: a solution that also satisfies non-negativity.\n- Feasible region: the set of all feasible solutions.\n- Basic solution: with m constraints and n variables, set n − m variables to zero and solve for the rest.\n- Basic feasible solution: a basic solution with all variables ≥ 0. It is a corner point.\n- Degenerate solution: a basic variable is zero.\n- Optimal solution: the feasible solution that gives the best value of Z.\n- Unbounded solution: Z can be increased without limit.\n- Infeasible: no point satisfies all the constraints.\nSlack variable: added to a ≤ constraint. Surplus variable: subtracted from a ≥ constraint. Artificial variable: added to ≥ and = constraints to get a starting basis.",
      ask:["Feasible vs optimal solution", "Slack, surplus and artificial variables"] };
  N["0.1.2"] = { q:"State the requirements (assumptions) of an LPP.", m:5,
      a:"Requirements:\n- A well-defined objective (maximise or minimise).\n- Constraints on the resources.\n- Alternative courses of action.\n- Linear objective function and constraints.\n- Non-negative decision variables.\nAssumptions:\n- Proportionality: contribution is proportional to the level of the activity.\n- Additivity: the total is the sum of the individual contributions.\n- Divisibility: variables can take fractional values.\n- Certainty: all coefficients are known constants.\n- Finiteness: a finite number of activities and constraints.",
      ask:["Limitations of linear programming"] };
  N["0.1.3"] = { q:"Formulate: a firm makes chairs (profit Rs 30) and tables (profit Rs 50). A chair needs 1 h of carpentry and 2 h of finishing; a table needs 3 h and 2 h. Available: 90 h carpentry, 80 h finishing.", m:5,
      a:"Steps:\n1. Identify the decision variables.\n2. Write the objective function.\n3. Write the constraints.\n4. Add non-negativity.\nSolution:\n- Let x1 = number of chairs, x2 = number of tables.\n- Maximise Z = 30x1 + 50x2\n- Carpentry: x1 + 3x2 ≤ 90\n- Finishing: 2x1 + 2x2 ≤ 80\n- x1, x2 ≥ 0",
      trap:"Define the variables with units before writing any equation.",
      ask:["Formulate the given product-mix / diet problem as an LPP"] };
  N["0.1.4"] = { q:"Solve graphically: Max Z = 3x + 2y subject to x + y ≤ 4, x − y ≤ 2, x, y ≥ 0.", m:5,
      a:"<p><b>Steps:</b> draw each constraint as a line → shade the feasible region → find the corner points → evaluate Z at each → pick the best.</p><ul><li>x + y = 4 passes through (4, 0) and (0, 4).</li><li>x − y = 2 passes through (2, 0) and (3, 1).</li><li>The two lines meet at (3, 1).</li></ul><table><tr><th>Corner</th><th>Z = 3x + 2y</th></tr><tr><td>(0, 0)</td><td>0</td></tr><tr><td>(2, 0)</td><td>6</td></tr><tr><td>(3, 1)</td><td><b>11</b></td></tr><tr><td>(0, 4)</td><td>8</td></tr></table><p><b>Answer:</b> x = 3, y = 1, maximum Z = 11.</p><p><b>Special cases:</b> two corners with the same Z → multiple optima; open region → may be unbounded; no common region → infeasible.</p>",
      ask:["Solve the given LPP by the graphical method"] };
  N["0.1.5"] = [
    { q:"State the steps of the simplex method (maximisation).", m:5,
      a:"1. Write the problem in standard form: add a slack variable to each ≤ constraint.\n2. Set up the initial table; the slack variables form the basis.\n3. Compute Zj and Cj − Zj for each column.\n4. Optimality test: if all Cj − Zj ≤ 0, the solution is optimal. Stop.\n5. Entering variable: the column with the largest positive Cj − Zj (key column).\n6. Leaving variable: the row with the smallest non-negative ratio (solution ÷ key column entry) (key row).\n7. Key element: the intersection. Divide the key row by it; make the other entries of the key column zero by row operations.\n8. Repeat from step 3.\nIf the convention is Zj − Cj: optimal when all Zj − Cj ≥ 0; enter the most negative.",
      trap:"Ignore zero and negative entries of the key column when taking ratios.",
      ask:["Define key column, key row and key element"] },
    { q:"Solve by simplex: Max Z = 3x1 + 2x2 subject to x1 + x2 ≤ 4, x1 − x2 ≤ 2.", m:10,
      a:"<p>Standard form: x1 + x2 + s1 = 4; x1 − x2 + s2 = 2.</p><table><tr><th>Iteration</th><th>Basis</th><th>x1</th><th>x2</th><th>s1</th><th>s2</th><th>Solution</th><th>Ratio</th></tr><tr><td rowspan='3'>0</td><td>s1</td><td>1</td><td>1</td><td>1</td><td>0</td><td>4</td><td>4</td></tr><tr><td>s2</td><td><b>1</b></td><td>−1</td><td>0</td><td>1</td><td>2</td><td>2 ←</td></tr><tr><td>Cj − Zj</td><td>3 ↑</td><td>2</td><td>0</td><td>0</td><td>Z = 0</td><td></td></tr><tr><td rowspan='3'>1</td><td>s1</td><td>0</td><td><b>2</b></td><td>1</td><td>−1</td><td>2</td><td>1 ←</td></tr><tr><td>x1</td><td>1</td><td>−1</td><td>0</td><td>1</td><td>2</td><td>—</td></tr><tr><td>Cj − Zj</td><td>0</td><td>5 ↑</td><td>0</td><td>−3</td><td>Z = 6</td><td></td></tr><tr><td rowspan='3'>2</td><td>x2</td><td>0</td><td>1</td><td>½</td><td>−½</td><td>1</td><td></td></tr><tr><td>x1</td><td>1</td><td>0</td><td>½</td><td>½</td><td>3</td><td></td></tr><tr><td>Cj − Zj</td><td>0</td><td>0</td><td>−2.5</td><td>−0.5</td><td>Z = 11</td><td></td></tr></table><p>All Cj − Zj ≤ 0 → optimal. <b>x1 = 3, x2 = 1, Z = 11.</b></p>",
      ask:["Solve the given LPP by the simplex method"] }
  ];
  N["0.1.6"] = { q:"Explain the Big M (penalty cost) method.", m:5,
      a:"Used when the constraints are ≥ or =, so slack variables alone give no starting basis.\nSteps:\n1. ≤ constraint: add a slack. ≥ constraint: subtract a surplus and add an artificial variable. = constraint: add an artificial variable.\n2. Give each artificial variable a penalty in the objective: −M for maximisation, +M for minimisation (M is a very large number).\n3. Solve by simplex. The penalty drives the artificial variables out of the basis.\n4. Result:\n- No artificial variable in the final basis → optimal solution.\n- An artificial variable in the basis at a positive value → no feasible solution.\nExample: Min Z = 2x1 + 3x2 subject to x1 + x2 ≥ 4 becomes x1 + x2 − s1 + A1 = 4 with Min Z = 2x1 + 3x2 + 0s1 + M A1.",
      trap:"Minimisation: +M. Maximisation: −M.",
      ask:["Solve the given LPP by the Big M method"] };
  N["0.1.7"] = { q:"Explain the two-phase method.", m:5,
      a:"An alternative to Big M that avoids M.\nPhase I:\n1. Add slack, surplus and artificial variables as in Big M.\n2. New objective: minimise W = sum of the artificial variables (cost 1 for artificials, 0 for the rest).\n3. Solve by simplex.\n4. If minimum W = 0, a feasible solution exists; go to Phase II. If W > 0, the problem is infeasible.\nPhase II:\n1. Drop the artificial columns.\n2. Put back the original objective function.\n3. Start from the final Phase I table and continue the simplex method to optimality.",
      ask:["Big M vs two-phase method", "Solve the given LPP by the two-phase method"] };
  N["0.1.8"] = { q:"What is the revised simplex method?", m:5,
      a:"Revised simplex — the same steps as the simplex method, carried out with matrices: only the inverse of the basis matrix B⁻¹ is stored and updated, not the whole table.\nPer iteration:\n1. Simplex multipliers: π = C_B B⁻¹\n2. Price out the non-basic columns: Cj − π Pj. Choose the entering variable.\n3. Entering column: B⁻¹ Pj. Ratio test with X_B = B⁻¹ b gives the leaving variable.\n4. Update B⁻¹.\nAdvantages:\n- Less computation and less storage when there are many more variables than constraints.\n- Fewer rounding errors.\n- Suited to computers.",
      ask:["Simplex vs revised simplex"] };
  N["0.1.9"] = { q:"What is duality in linear programming?", m:3,
      a:"Duality — every LPP (the primal) has another LPP associated with it (the dual), built from the same data.\n- If the primal is a maximisation, the dual is a minimisation, and vice versa.\n- The optimal values of the two are equal.\n- The dual variables are the shadow prices of the primal resources.\nUses:\n- Solve whichever of the two has fewer constraints.\n- Economic interpretation: the worth of one more unit of a resource.\n- Basis of the dual simplex method and of sensitivity analysis.",
      ask:["Advantages of duality"] };
  N["0.1.10"] = { q:"Write the dual of: Max Z = 3x1 + 2x2 subject to x1 + x2 ≤ 4, x1 − x2 ≤ 2, x1, x2 ≥ 0.", m:5,
      a:"<table><tr><th>Primal (Max)</th><th>Dual (Min)</th></tr><tr><td>Objective coefficients c</td><td>Right-hand sides</td></tr><tr><td>Right-hand sides b</td><td>Objective coefficients</td></tr><tr><td>Each constraint (≤)</td><td>One variable y ≥ 0</td></tr><tr><td>Each variable x ≥ 0</td><td>One constraint (≥)</td></tr><tr><td>Coefficient matrix A</td><td>Transpose of A</td></tr></table><p><b>Dual:</b> Min W = 4y1 + 2y2</p><ul><li>y1 + y2 ≥ 3</li><li>y1 − y2 ≥ 2</li><li>y1, y2 ≥ 0</li></ul><p><b>Check:</b> y1 = 2.5, y2 = 0.5 gives W = 11 = the primal optimum Z = 11.</p>",
      trap:"First put the primal in standard form: all ≤ for a max problem, all ≥ for a min problem.",
      ask:["Construct the dual of the given primal"] };
  N["0.1.11"] = { q:"Differentiate the symmetric and the asymmetric dual.", m:3,
      a:"<table><tr><th></th><th>Symmetric</th><th>Asymmetric</th></tr><tr><td>Primal constraints</td><td>All inequalities (≤ for max)</td><td>Equalities</td></tr><tr><td>Primal variables</td><td>All ≥ 0</td><td>All ≥ 0</td></tr><tr><td>Dual variables</td><td>All ≥ 0</td><td>Unrestricted in sign</td></tr></table><p><b>Rules:</b> an equality constraint in the primal ↔ an unrestricted variable in the dual; an unrestricted variable in the primal ↔ an equality constraint in the dual.</p>",
      ask:["Write the dual when the primal has an equality constraint"] };
  N["0.1.12"] = { q:"State the weak duality theorem.", m:2,
      a:"Weak duality theorem — for a max primal and its min dual, if x is any feasible solution of the primal and y any feasible solution of the dual, then\nZ (primal) ≤ W (dual)\nMeaning: every feasible dual value is an upper bound on the primal maximum.\nCorollary: if the primal is unbounded, the dual is infeasible.",
      ask:["Prove the weak duality theorem"] };
  N["0.1.13"] = { q:"State the complementary slackness theorem.", m:3,
      a:"Complementary slackness — at the optimum:\n- If a primal constraint has slack (it is not binding), the corresponding dual variable is zero.\n- If a dual variable is positive, the corresponding primal constraint is binding (slack = 0).\n- In symbols: yi × si = 0 and xj × (dual surplus)j = 0.\nMeaning: a resource that is not fully used has a shadow price of zero.\nUse: find the dual solution from the primal solution, and the reverse.\nExample above: both primal constraints are binding (s1 = s2 = 0), and both dual variables are positive (2.5, 0.5).",
      ask:["Find the dual solution from the optimal primal table"] };
  N["0.1.14"] = { q:"State the main (fundamental) duality theorem.", m:2,
      a:"Main duality theorem — if either the primal or the dual has a finite optimal solution, then so does the other, and the optimal values of the two objective functions are equal:\nMax Z = Min W\nOther cases:\n- Primal unbounded → dual infeasible.\n- Primal infeasible → dual unbounded or infeasible.\nIn the final simplex table, the dual solution is read from the Cj − Zj row under the slack variables (with the sign changed).",
      ask:["Relationship between the primal and dual solutions"] };
  N["0.1.15"] = { q:"Explain the dual simplex method.", m:5,
      a:"Used when the starting solution is optimal (all Cj − Zj ≤ 0) but infeasible (some right-hand side is negative). No artificial variables are needed.\nSteps:\n1. Convert a min problem to max; change every ≥ constraint to ≤ by multiplying by −1; add slack variables.\n2. Leaving variable (chosen first): the row with the most negative solution value.\n3. Entering variable: among the negative entries of that row, take the smallest ratio |(Cj − Zj) ÷ entry|.\n4. Pivot as in simplex.\n5. Stop when all the solution values are ≥ 0.\nSimplex vs dual simplex: simplex keeps feasibility and works towards optimality; dual simplex keeps optimality and works towards feasibility.",
      trap:"In dual simplex the leaving variable is chosen first, then the entering variable.",
      ask:["Simplex vs dual simplex", "Solve the given LPP by the dual simplex method"] };
  N["0.1.16"] = { q:"What is sensitivity analysis?", m:5,
      a:"Sensitivity (post-optimality) analysis — the study of how the optimal solution changes when the data of the LPP change, without solving the problem again.\nChanges studied:\n- Objective coefficients cj: the range over which the present basis stays optimal.\n- Right-hand sides bi: the range over which the present basis stays feasible.\n- Adding a new variable or a new constraint.\n- Changes in the coefficients aij.\nShadow price — the change in the optimal Z for one more unit of a resource (the value of the dual variable).\nExample above: y1 = 2.5, so one more unit of resource 1 raises Z by 2.5.",
      ask:["What is a shadow price?", "Find the range of c1 for which the solution stays optimal"] };
  N["0.2.0"] = { q:"What is a transportation problem? Give its mathematical formulation.", m:5,
      a:"Transportation problem — ship a product from m sources to n destinations at minimum total cost.\n- ai: supply at source i\n- bj: demand at destination j\n- cij: unit cost from i to j\n- xij: units shipped from i to j\nMinimise Z = Σi Σj cij xij\nSubject to:\n- Σj xij = ai (supply), for each source\n- Σi xij = bj (demand), for each destination\n- xij ≥ 0\nBalanced when Σ ai = Σ bj.\nA basic feasible solution has m + n − 1 allocations.",
      ask:["Transportation problem as a special case of LPP"] };
  N["0.2.1"] = { q:"State the steps for solving a transportation problem.", m:3,
      a:"1. Check that the problem is balanced (total supply = total demand). If not, add a dummy.\n2. Find an initial basic feasible solution: North-West Corner Rule, Least Cost Method or Vogel's Approximation Method.\n3. Check the number of allocations = m + n − 1. Fewer → degeneracy: place a small ε in an independent empty cell.\n4. Test for optimality: MODI or stepping stone.\n5. If not optimal, re-allocate along a closed loop and test again.\nMaximisation problem: subtract every entry from the largest entry, then solve as a minimisation.",
      ask:["What is degeneracy in a transportation problem?"] };
  N["0.2.2"] = { q:"What is an unbalanced transportation problem? How is it solved?", m:3,
      a:"Unbalanced — total supply ≠ total demand.\n- Supply > demand: add a dummy destination (column) with demand = the excess.\n- Demand > supply: add a dummy source (row) with supply = the shortfall.\n- All the costs in the dummy row or column are 0.\nExample: supply = 100, demand = 80 → add a dummy column with demand 20.\nUnits allocated to the dummy are not actually shipped: they are unused supply or unmet demand.",
      ask:["Balance the given transportation problem"] };
  N["0.2.3"] = { q:"Find the initial solution by the North-West Corner Rule. Costs: S1 (2, 3, 1), S2 (5, 4, 8), S3 (5, 6, 8). Supply 20, 30, 50. Demand 30, 40, 30.", m:5,
      a:"<p><b>Rule:</b> start at the top-left cell; allocate the minimum of supply and demand; move right when the supply is used up, down when the demand is met.</p><table><tr><th></th><th>D1</th><th>D2</th><th>D3</th><th>Supply</th></tr><tr><th>S1</th><td>2 <b>[20]</b></td><td>3</td><td>1</td><td>20</td></tr><tr><th>S2</th><td>5 <b>[10]</b></td><td>4 <b>[20]</b></td><td>8</td><td>30</td></tr><tr><th>S3</th><td>5</td><td>6 <b>[20]</b></td><td>8 <b>[30]</b></td><td>50</td></tr><tr><th>Demand</th><td>30</td><td>40</td><td>30</td><td>100</td></tr></table><p>Cost = 2×20 + 5×10 + 4×20 + 6×20 + 8×30 = 40 + 50 + 80 + 120 + 240 = <b>530</b></p><p>Allocations = 5 = m + n − 1. Non-degenerate.</p>",
      trap:"NWCR ignores the costs, so its solution is usually far from optimal.",
      ask:["Find the IBFS by NWCR"] };
  N["0.2.4"] = [
    { q:"Solve the same problem by the Least Cost Method.", m:5,
      a:"<p><b>Rule:</b> allocate as much as possible to the cell with the lowest cost; cross out the satisfied row or column; repeat.</p><ol><li>Lowest cost 1 at (S1, D3): allocate 20. S1 is used up; D3 needs 10 more.</li><li>Next lowest 4 at (S2, D2): allocate 30. S2 is used up; D2 needs 10 more.</li><li>Only S3 is left: (S3, D1) = 30, (S3, D2) = 10, (S3, D3) = 10.</li></ol><p>Cost = 1×20 + 4×30 + 5×30 + 6×10 + 8×10 = 20 + 120 + 150 + 60 + 80 = <b>430</b></p>",
      ask:["Find the IBFS by the least cost (matrix minima) method"] },
    { q:"Solve the same problem by Vogel's Approximation Method (VAM).", m:5,
      a:"<p><b>Rule:</b> penalty = difference between the two lowest costs in each row and column. Pick the largest penalty; allocate to the lowest-cost cell of that row or column; repeat.</p><ol><li>Row penalties: S1 = 2 − 1 = 1, S2 = 5 − 4 = 1, S3 = 6 − 5 = 1. Column penalties: D1 = 5 − 2 = 3, D2 = 4 − 3 = 1, D3 = 8 − 1 = <b>7</b>.</li><li>Largest is 7 (D3). Lowest cost in D3 is 1 at S1: allocate 20. S1 is used up.</li><li>New penalties: S2 = 1, S3 = 1; D1 = 0, D2 = <b>2</b>, D3 = 0. Lowest cost in D2 is 4 at S2: allocate 30. S2 is used up.</li><li>S3 takes the rest: D1 = 30, D2 = 10, D3 = 10.</li></ol><p>Cost = 20 + 120 + 150 + 60 + 80 = <b>430</b></p><p>VAM usually gives the solution closest to the optimum.</p>",
      trap:"Recompute the penalties after every allocation.",
      ask:["Compare NWCR, LCM and VAM"] }
  ];
  N["0.2.5"] = [
    { q:"Test the solution (cost 430) for optimality by the MODI method.", m:5,
      a:"<p><b>Steps:</b> for the occupied cells set u<sub>i</sub> + v<sub>j</sub> = c<sub>ij</sub> (take one u = 0). For the empty cells compute Δ<sub>ij</sub> = c<sub>ij</sub> − (u<sub>i</sub> + v<sub>j</sub>). If all Δ ≥ 0, the solution is optimal.</p><p>Occupied: (S1, D3) = 1, (S2, D2) = 4, (S3, D1) = 5, (S3, D2) = 6, (S3, D3) = 8.</p><ul><li>u3 = 0 → v1 = 5, v2 = 6, v3 = 8</li><li>u1 = 1 − 8 = −7; u2 = 4 − 6 = −2</li></ul><table><tr><th>Empty cell</th><th>Δ = c − (u + v)</th></tr><tr><td>(S1, D1)</td><td>2 − (−7 + 5) = 4</td></tr><tr><td>(S1, D2)</td><td>3 − (−7 + 6) = 4</td></tr><tr><td>(S2, D1)</td><td>5 − (−2 + 5) = 2</td></tr><tr><td>(S2, D3)</td><td>8 − (−2 + 8) = 2</td></tr></table><p>All Δ ≥ 0 → optimal. <b>Minimum cost = 430.</b></p><p>If some Δ &lt; 0: draw a closed loop from the most negative cell, mark + and − alternately, shift the smallest − allocation, and test again.</p>",
      ask:["Find the optimal solution by MODI (u-v method)"] },
    { q:"Explain the stepping stone method.", m:5,
      a:"1. Start with an initial basic feasible solution having m + n − 1 allocations.\n2. For each empty cell, trace a closed path: start at the empty cell, move horizontally and vertically, turning only at occupied cells, and return.\n3. Mark the corners + and − alternately, starting with + at the empty cell.\n4. Net cost change = sum of the + costs − sum of the − costs.\n5. If every net change is ≥ 0, the solution is optimal.\n6. Otherwise take the cell with the most negative change; shift the smallest quantity among the − corners around the loop.\n7. Repeat.\nMODI finds all the net changes at once using u and v, and draws only one loop; stepping stone draws a loop for every empty cell.",
      ask:["MODI vs stepping stone"] }
  ];
  N["0.3.0"] = { q:"What is an assignment problem? How does it differ from a transportation problem?", m:3,
      a:"<p><b>Assignment problem:</b> assign n jobs to n persons (or machines), one to one, so that the total cost or time is minimum.</p><table><tr><th></th><th>Transportation</th><th>Assignment</th></tr><tr><td>Supply and demand</td><td>Any values</td><td>Each is 1</td></tr><tr><td>Matrix</td><td>m × n</td><td>Square n × n</td></tr><tr><td>Allocation</td><td>Many per row / column</td><td>Exactly one per row and column</td></tr><tr><td>Method</td><td>VAM + MODI</td><td>Hungarian method</td></tr></table>",
      ask:["Applications of the assignment problem"] };
  N["0.3.1"] = { q:"Give the mathematical formulation of the assignment problem.", m:3,
      a:"Let cij = cost of assigning job j to person i.\nxij = 1 if person i is given job j; 0 otherwise.\nMinimise Z = Σi Σj cij xij\nSubject to:\n- Σj xij = 1 for each person i (one job per person)\n- Σi xij = 1 for each job j (one person per job)\n- xij = 0 or 1\nUnbalanced (rows ≠ columns): add a dummy row or column of zeros.\nMaximisation: subtract every entry from the largest entry, then minimise.",
      ask:["How is an unbalanced assignment problem handled?"] };
  N["0.3.2"] = { q:"Solve by the Hungarian method: rows A (9, 2, 7), B (6, 4, 3), C (5, 8, 1).", m:5,
      a:"<p><b>Steps:</b></p><ol><li>Row reduction: subtract the row minimum from each row.</li><li>Column reduction: subtract the column minimum from each column.</li><li>Cover all zeros with the minimum number of lines. If lines = n, assign. If fewer, subtract the smallest uncovered entry from the uncovered entries, add it at the intersections, and repeat.</li><li>Assign: take a row with a single zero, assign it, cross out the other zeros in that column.</li></ol><p><b>Row reduction</b> (minima 2, 3, 1):</p><pre>7 0 5\n3 1 0\n4 7 0</pre><p><b>Column reduction</b> (minima 3, 0, 0):</p><pre>4 0 5\n0 1 0\n1 7 0</pre><p>Lines needed = 3 = n. Assign: A → 2, C → 3, B → 1.</p><p><b>Minimum cost</b> = 2 + 6 + 1 = 9.</p>",
      trap:"Read the cost from the original matrix, not the reduced one.",
      ask:["Solve the given assignment problem"] };
  N["0.3.3"] = [
    { q:"Sequence 5 jobs on two machines by Johnson's rule. M1: A 5, B 1, C 9, D 3, E 10. M2: A 2, B 6, C 7, D 8, E 4.", m:5,
      a:"<p><b>Johnson's rule:</b> find the smallest time. If it is on M1, place that job first; if on M2, place it last. Cross the job out and repeat.</p><ol><li>Smallest 1 (B on M1) → B first.</li><li>Next 2 (A on M2) → A last.</li><li>Next 3 (D on M1) → D second.</li><li>Next 4 (E on M2) → E fourth.</li><li>C in the middle.</li></ol><p><b>Sequence:</b> B → D → C → E → A</p><table><tr><th>Job</th><th>M1 in</th><th>M1 out</th><th>M2 in</th><th>M2 out</th></tr><tr><td>B</td><td>0</td><td>1</td><td>1</td><td>7</td></tr><tr><td>D</td><td>1</td><td>4</td><td>7</td><td>15</td></tr><tr><td>C</td><td>4</td><td>13</td><td>15</td><td>22</td></tr><tr><td>E</td><td>13</td><td>23</td><td>23</td><td>27</td></tr><tr><td>A</td><td>23</td><td>28</td><td>28</td><td>30</td></tr></table><p><b>Total elapsed time</b> = 30. Idle time: M1 = 30 − 28 = 2; M2 = 1 + 1 + 1 = 3.</p>",
      trap:"A job starts on M2 only when it has left M1 and M2 is free: take the larger of the two times.",
      ask:["Find the optimal sequence, total elapsed time and idle times"] },
    { q:"How are n jobs processed through m machines?", m:3,
      a:"Convert to a two-machine problem if either condition holds:\n- min time on M1 ≥ max time on the middle machines, or\n- min time on Mm ≥ max time on the middle machines.\nThen form two fictitious machines:\n- G = M1 + M2 + … + M(m−1)\n- H = M2 + M3 + … + Mm\nApply Johnson's rule to G and H to get the sequence.\nThen compute the elapsed time with the original times on all m machines.\nFor 3 machines: G = M1 + M2, H = M2 + M3.",
      ask:["Sequence n jobs through 3 machines"] }
  ];
  N["0.3.4"] = { q:"Explain the graphical method for two jobs on m machines.", m:5,
      a:"Each job has its own machine order; find the schedule with minimum total time.\nSteps:\n1. X-axis: processing times of job 1, in its machine order. Y-axis: job 2, in its order.\n2. Shade the rectangle where both jobs need the same machine (a blocked area).\n3. Start at the origin. Move:\n- Horizontally: only job 1 is worked (job 2 idle).\n- Vertically: only job 2 is worked (job 1 idle).\n- At 45°: both are worked together.\n4. Draw a path to the top-right corner that never crosses a shaded block, using as much 45° movement as possible.\n5. Total elapsed time = processing time of job 1 + idle time of job 1 (the vertical moves).",
      ask:["Solve the given 2 jobs × m machines problem graphically"] };
  N["0.3.5"] = { q:"What is the travelling salesman problem? How is it solved?", m:5,
      a:"Travelling salesman problem — a salesman starts from one city, visits every other city exactly once and returns to the start; find the route of minimum total distance.\nIt is an assignment problem with extra conditions:\n- The diagonal entries are ∞ (no city to itself).\n- The solution must form one complete tour, with no sub-tours.\nSteps:\n1. Solve as an assignment problem by the Hungarian method.\n2. If the assignment is a single tour (A → C → B → D → A), it is optimal.\n3. If it has sub-tours (A → B → A and C → D → C), take the next-smallest element in the reduced matrix, re-assign, and check again; or use branch and bound.\nRouting problems: find the shortest route through a network; the TSP is the classic case.",
      ask:["Why can an assignment solution fail for the TSP?", "Solve the given TSP"] };
  N["0.4.0"] = { q:"What is an integer programming problem? Why is rounding not enough?", m:3,
      a:"Integer programming problem (IPP) — an LPP in which some or all of the variables must take integer values.\nNeeded when fractions are meaningless: number of machines, workers, vehicles.\nWhy not round the LP solution:\n- The rounded point may violate a constraint (infeasible).\n- Even if feasible, it may not be the optimal integer point.\nMethods: Gomory's cutting plane, branch and bound.",
      ask:["Applications of integer programming"] };
  N["0.4.1"] = { q:"State the types of integer programming problems.", m:3,
      a:"- Pure (all-integer) IPP: every variable must be an integer.\n- Mixed IPP: only some variables must be integers.\n- Zero-one (binary) IPP: variables can be only 0 or 1 (yes / no decisions: capital budgeting, assignment).\nMethods:\n- Cutting plane (Gomory): pure and mixed.\n- Branch and bound: all types.",
      ask:["Pure vs mixed integer programming"] };
  N["0.4.2"] = { q:"Explain Gomory's cutting plane algorithm.", m:5,
      a:"1. Solve the problem as an LPP by simplex, ignoring the integer condition.\n2. If the solution is all integers, stop: it is optimal.\n3. Otherwise choose the row whose solution value has the largest fractional part (the source row).\n4. Write each coefficient of that row as integer + non-negative fraction: aj = [aj] + fj, b = [b] + f.\n5. Gomory cut: −Σ fj xj + s = −f, where s is a new slack variable.\n6. Add the cut as a new row. The table is now optimal but infeasible.\n7. Solve by the dual simplex method.\n8. Repeat until all the variables are integers.\nThe cut removes the fractional optimum but no integer point.\nExample of a fraction: −7/4 = −2 + 1/4, so f = 1/4.",
      trap:"The fractional part is always between 0 and 1, also for negative numbers.",
      ask:["Solve the given IPP by Gomory's method"] };
  N["0.4.3"] = { q:"Explain the branch and bound technique.", m:5,
      a:"1. Solve the LP relaxation (ignore the integer condition). Its Z is the upper bound for a max problem.\n2. If the solution is all integers, stop.\n3. Branch: pick a variable with a fractional value, say x1 = 2.6. Create two sub-problems: one with x1 ≤ 2, one with x1 ≥ 3.\n4. Solve each sub-problem as an LPP.\n5. Bound: the best integer solution found so far is the lower bound.\n6. Fathom (stop branching) a node when: it is infeasible; or its solution is all integers; or its Z is not better than the best integer solution.\n7. Continue until every node is fathomed. The best integer solution is optimal.\nDraw the tree of sub-problems.",
      ask:["Gomory vs branch and bound", "Solve the given IPP by branch and bound"] };
  N["0.4.4"] = { q:"Give an introduction to decomposition algorithms.", m:3,
      a:"Decomposition — breaking one large LPP into a master problem and several smaller sub-problems that are solved separately and coordinated.\nUsed when the constraint matrix has a block structure: each division has its own constraints, plus a few linking constraints shared by all.\nDantzig-Wolfe decomposition:\n1. The master problem holds the linking constraints.\n2. Each sub-problem holds one block's own constraints.\n3. The master sends prices (dual values) to the sub-problems; they return proposals (columns).\n4. Repeat until no proposal improves the master.\nAdvantage: solves very large problems with less memory; the sub-problems can be solved in parallel.",
      ask:["When can an LPP be decomposed?"] };

  /* ------------------------------------------------ Module 2 */
  N["1.0.0"] = [
    { q:"What is queuing theory? Explain the structure of a queuing system.", m:5,
      a:"Queuing theory — the mathematical study of waiting lines; it balances the cost of waiting against the cost of service.\nComponents:\n- Input (arrival) process: how customers arrive: arrival rate λ, usually Poisson; the size of the population.\n- Queue discipline: the order of service: FCFS, LCFS, SIRO (random), priority.\n- Service mechanism: number of servers, service rate μ, service time distribution.\n- System capacity: finite or infinite queue length.\nArrival → Queue → Service → Departure\nCustomer behaviour:\n- Balking: does not join a long queue.\n- Reneging: joins, then leaves.\n- Jockeying: switches between queues.\nStructures: single channel single phase; single channel multi-phase; multi-channel single phase; multi-channel multi-phase.",
      ask:["Explain balking, reneging and jockeying", "Queue disciplines"] },
    { q:"Explain Kendall's notation.", m:3,
      a:"Kendall's notation: (a / b / c) : (d / e / f)\n- a: arrival distribution\n- b: service time distribution\n- c: number of servers\n- d: queue discipline\n- e: maximum number in the system\n- f: size of the calling population\nSymbols: M = Markovian (Poisson arrivals / exponential service), D = deterministic (constant), G = general.\n(M / M / 1) : (FCFS / ∞ / ∞) — Poisson arrivals, exponential service, one server, first come first served, infinite capacity, infinite population.",
      ask:["Decode the notation M/D/1 and M/M/c"] }
  ];
  N["1.0.1"] = [
    { q:"Give the formulae of the single-server model (M/M/1).", m:5,
      a:"<p>λ = arrival rate, μ = service rate, both in the same time unit; λ &lt; μ.</p><table><tr><th>Measure</th><th>Formula</th></tr><tr><td>Utilisation (traffic intensity)</td><td>ρ = λ ÷ μ</td></tr><tr><td>Probability the system is idle</td><td>P0 = 1 − ρ</td></tr><tr><td>Probability of n customers</td><td>Pn = ρⁿ (1 − ρ)</td></tr><tr><td>Average number in the system</td><td>Ls = λ ÷ (μ − λ)</td></tr><tr><td>Average number in the queue</td><td>Lq = λ² ÷ [μ (μ − λ)]</td></tr><tr><td>Average time in the system</td><td>Ws = 1 ÷ (μ − λ)</td></tr><tr><td>Average waiting time in the queue</td><td>Wq = λ ÷ [μ (μ − λ)]</td></tr></table><p><b>Links:</b> Ls = λ Ws; Lq = λ Wq; Ls = Lq + ρ; Ws = Wq + 1 ÷ μ.</p>",
      trap:"Convert λ and μ to the same unit first. A 'mean service time of 3 minutes' means μ = 20 per hour.",
      ask:["Derive Ls for the M/M/1 model"] },
    { q:"Important list: one cashier; 9 customers arrive every 5 minutes; the cashier serves 10 in 5 minutes. Find Ls, Lq, Ws, Wq.", m:5,
      a:"λ = 9, μ = 10 (per 5 minutes). ρ = 0.9.\n1. Ls = λ ÷ (μ − λ) = 9 ÷ 1 = 9 customers\n2. Lq = λ² ÷ [μ (μ − λ)] = 81 ÷ 10 = 8.1 customers\n3. Ws = 1 ÷ (μ − λ) = 1 time unit = 5 minutes\n4. Wq = λ ÷ [μ (μ − λ)] = 9 ÷ 10 = 0.9 unit = 4.5 minutes\nCheck: Ls = Lq + ρ = 8.1 + 0.9 = 9.",
      trap:"The time unit here is 5 minutes. Multiply Ws and Wq by 5.",
      ask:["ATM: service 3 minutes, 15 arrivals per hour: find the average queue length (λ = 15, μ = 20, Lq = 2.25)"] },
    { q:"Important list: a TV repairman takes 30 minutes per set on average (exponential); sets arrive at 10 per 8-hour day (Poisson). Find his idle time per day and the number of sets ahead of a set just brought in.", m:5,
      a:"1. λ = 10 ÷ 8 = 1.25 sets per hour\n2. μ = 60 ÷ 30 = 2 sets per hour\n3. ρ = 1.25 ÷ 2 = 0.625\n4. Idle fraction = 1 − ρ = 0.375\n5. Idle time per day = 0.375 × 8 = 3 hours\n6. Sets ahead of a new set = Ls = λ ÷ (μ − λ) = 1.25 ÷ 0.75 = 1.67 sets",
      ask:["Find the expected waiting time of a set"] },
    { q:"Explain the multi-server model (M/M/c).", m:5,
      a:"c identical servers in parallel, one queue. ρ = λ ÷ (cμ) must be less than 1.\nP0 = 1 ÷ { Σ (n = 0 to c − 1) (λ/μ)ⁿ ÷ n! + (λ/μ)^c ÷ [c! (1 − ρ)] }\nLq = P0 × (λ/μ)^c × ρ ÷ [c! (1 − ρ)²]\nLs = Lq + λ ÷ μ\nWq = Lq ÷ λ\nWs = Wq + 1 ÷ μ\nExample: two tellers, λ = 10, μ = 6 per hour.\n1. λ/μ = 1.667; ρ = 10 ÷ 12 = 0.833\n2. P0 = 1 ÷ [1 + 1.667 + (1.667² ÷ 2) ÷ (1 − 0.833)] = 1 ÷ [2.667 + 8.333] = 0.0909\n3. Lq = 0.0909 × 2.778 × 0.833 ÷ [2 × 0.0278] = 3.79 customers\n4. Wq = 3.79 ÷ 10 = 0.379 h = 22.7 minutes",
      ask:["Single server vs multi-server model"] }
  ];
  N["1.0.2"] = { q:"What is Poisson input (arrivals)?", m:3,
      a:"Poisson input — customers arrive at random and independently, at a constant average rate λ.\nP(n arrivals in time t) = e^(−λt) (λt)ⁿ ÷ n!\nProperties:\n- Mean number of arrivals in time t = λt; variance = λt.\n- The time between arrivals is exponential with mean 1 ÷ λ.\n- Arrivals in non-overlapping intervals are independent.\n- At most one arrival in a very small interval.\nExample: λ = 3 per hour. P(no arrival in 1 hour) = e^(−3) = 0.0498.",
      ask:["Relation between the Poisson and exponential distributions"] };
  N["1.0.3"] = { q:"What is exponential service?", m:3,
      a:"Exponential service — the service time is random, with probability density f(t) = μ e^(−μt).\n- μ: service rate (customers served per unit time).\n- Mean service time = 1 ÷ μ.\n- P(service time > t) = e^(−μt)\n- Memoryless: the remaining service time does not depend on how long the service has already taken.\nExample: mean service time 3 minutes → μ = 20 per hour. P(service takes more than 6 minutes) = e^(−2) = 0.135.\nPoisson arrivals + exponential service = the M/M/1 model.",
      ask:["What is the memoryless property?"] };
  N["1.0.4"] = { q:"Explain the constant-rate service model (M/D/1).", m:3,
      a:"Service time is the same for every customer (a machine: automatic car wash, vending machine). Arrivals are Poisson.\nρ = λ ÷ μ\n- Lq = λ² ÷ [2μ (μ − λ)] = ρ² ÷ [2 (1 − ρ)]\n- Wq = λ ÷ [2μ (μ − λ)]\n- Ls = Lq + λ ÷ μ\n- Ws = Wq + 1 ÷ μ\nThe queue length and waiting time are half those of M/M/1.\nExample: λ = 8, μ = 10 per hour. Lq = 64 ÷ (2 × 10 × 2) = 1.6 cars; Wq = 1.6 ÷ 8 = 0.2 h = 12 minutes.",
      trap:"Only Lq and Wq are halved. Ls and Ws are found by adding λ/μ and 1/μ.",
      ask:["M/M/1 vs M/D/1"] };
  N["1.0.5"] = { q:"Explain the finite and infinite population (and finite queue) models.", m:5,
      a:"<table><tr><th></th><th>Infinite population</th><th>Finite population</th></tr><tr><td>Source</td><td>Very large; an arrival does not change the arrival rate</td><td>Small; each customer in the system lowers the arrival rate</td></tr><tr><td>Example</td><td>Bank, ticket counter</td><td>One mechanic serving 3 machines</td></tr><tr><td>Arrival rate</td><td>λ, constant</td><td>(M − n) λ when n of M are in the system</td></tr></table><p><b>Finite population (M customers, one server):</b> P0 = 1 ÷ Σ (n = 0 to M) [M! ÷ (M − n)!] (λ/μ)ⁿ</p><p><b>Finite queue (M/M/1 with at most N in the system):</b></p><ul><li>P0 = (1 − ρ) ÷ (1 − ρ<sup>N+1</sup>)</li><li>Pn = P0 ρⁿ</li><li>Customers who arrive when the system is full are lost: effective arrival rate = λ (1 − P<sub>N</sub>).</li></ul>",
      ask:["Finite vs infinite queue length"] };

  /* ------------------------------------------------ Module 3 */
  N["2.0.0"] = { q:"What is simulation?", m:2,
      a:"Simulation — imitating the operation of a real system over time with a model, and experimenting on the model to study how the system behaves.\nUsed when the system is too complex for an analytical solution, or when experimenting on the real system is costly, risky or impossible.\nExamples: flight simulators, queue at a bank, inventory policy, traffic flow.",
      ask:["Why is simulation needed?"] };
  N["2.0.1"] = { q:"Explain the methodology of simulation.", m:5,
      a:"1. Define the problem and the objectives.\n2. Identify the variables and the measures of performance.\n3. Construct the simulation model.\n4. Collect data; fit probability distributions to the inputs.\n5. Validate the model against the real system.\n6. Design the experiment: number of runs, length of each run.\n7. Run the simulation.\n8. Analyse the results.\n9. Recommend and implement.",
      ask:["Draw the flowchart of a simulation study"] };
  N["2.0.2"] = { q:"Explain the basic concepts of simulation.", m:3,
      a:"- System: a set of related parts working towards a goal (a bank).\n- Entity: an object in the system (customer).\n- Attribute: a property of an entity (arrival time).\n- Activity: an action over a period (service).\n- Event: an instant that changes the state (an arrival, a departure).\n- State: the values that describe the system at a time (number in the queue).\n- Model: the representation of the system.\n- Random number: a number in which each digit is equally likely; used to imitate chance.\nTypes: deterministic vs stochastic; static vs dynamic; discrete vs continuous.",
      ask:["Types of simulation models"] };
  N["2.0.3"] = { q:"State the simulation (Monte Carlo) procedure.", m:5,
      a:"1. Write the probability distribution of the variable.\n2. Compute the cumulative probabilities.\n3. Assign random number intervals to each value, in proportion to its probability.\n4. Take the random numbers in the given order.\n5. For each random number, read off the value whose interval contains it.\n6. Repeat for the required number of trials.\n7. Compute the results: average, stock position, waiting time.",
      ask:["Explain the steps of Monte Carlo simulation"] };
  N["2.0.4"] = { q:"What is the Monte Carlo method?", m:3,
      a:"Monte Carlo method — a simulation technique that uses random numbers to sample from a probability distribution, in order to solve problems that involve chance.\n- Named after the casino town: it works like a game of chance.\n- Random numbers are taken from a table or generated by computer.\n- Each random number stands for one outcome of the uncertain variable.\nUsed for: inventory, queuing, replacement, project completion time, risk analysis.",
      ask:["What are random numbers and pseudo-random numbers?"] };
  N["2.0.5"] = { q:"Important list: Sweet Delight pastry shop. Daily demand 10, 20, 30, 40, 50, 60 with probabilities 0.05, 0.10, 0.25, 0.40, 0.15, 0.05. Random numbers: 48, 78, 09, 87, 99, 12, 65, 31, 23, 55. Simulate 10 days; stock situation if 35 are made daily; average demand.", m:10,
      a:"<table><tr><th>Demand</th><th>Probability</th><th>Cumulative</th><th>Random no. interval</th></tr><tr><td>10</td><td>0.05</td><td>0.05</td><td>00–04</td></tr><tr><td>20</td><td>0.10</td><td>0.15</td><td>05–14</td></tr><tr><td>30</td><td>0.25</td><td>0.40</td><td>15–39</td></tr><tr><td>40</td><td>0.40</td><td>0.80</td><td>40–79</td></tr><tr><td>50</td><td>0.15</td><td>0.95</td><td>80–94</td></tr><tr><td>60</td><td>0.05</td><td>1.00</td><td>95–99</td></tr></table><table><tr><th>Day</th><th>Random no.</th><th>Demand</th><th>Made</th><th>Surplus (+) / Shortage (−)</th></tr><tr><td>1</td><td>48</td><td>40</td><td>35</td><td>−5</td></tr><tr><td>2</td><td>78</td><td>40</td><td>35</td><td>−5</td></tr><tr><td>3</td><td>09</td><td>20</td><td>35</td><td>+15</td></tr><tr><td>4</td><td>87</td><td>50</td><td>35</td><td>−15</td></tr><tr><td>5</td><td>99</td><td>60</td><td>35</td><td>−25</td></tr><tr><td>6</td><td>12</td><td>20</td><td>35</td><td>+15</td></tr><tr><td>7</td><td>65</td><td>40</td><td>35</td><td>−5</td></tr><tr><td>8</td><td>31</td><td>30</td><td>35</td><td>+5</td></tr><tr><td>9</td><td>23</td><td>30</td><td>35</td><td>+5</td></tr><tr><td>10</td><td>55</td><td>40</td><td>35</td><td>−5</td></tr><tr><th colspan='2'>Total</th><th>370</th><th>350</th><th></th></tr></table><p><b>Average daily demand</b> = 370 ÷ 10 = 37 donuts.</p><p><b>Stock situation</b> (each day taken separately, no carry-over): shortage on 6 days, surplus on 4 days. Making 35 a day is below the average demand of 37.</p>",
      trap:"The interval ends one below the cumulative probability: 0.40 → 15–39, not 15–40. If the paper says leftover stock is carried to the next day, keep a running balance.",
      ask:["Dairy: 110 litres a day", "Lajwaab Bakery: 30 cakes a day (10 marks)"] };
  N["2.0.6"] = { q:"List the applications of simulation.", m:3,
      a:"- Queuing: banks, hospitals, toll plazas, call centres.\n- Inventory: testing ordering policies under uncertain demand.\n- Production: scheduling, plant layout, machine breakdowns.\n- Project management: completion time under uncertain activity times.\n- Finance: risk analysis, investment decisions.\n- Transport: traffic signals, airport operations.\n- Training: flight simulators, business games.\n- Military and space: war games, mission rehearsal.",
      ask:["Applications of simulation in inventory and queuing"] };
  N["2.0.7"] = { q:"State the advantages of simulation.", m:3,
      a:"- Solves problems that are too complex for analytical methods.\n- No disturbance or risk to the real system.\n- Tests 'what if' policies before they are implemented.\n- Compresses time: years of operation are studied in minutes.\n- Flexible: easy to change the conditions and the assumptions.\n- Easy for managers to understand.\n- Useful for training.",
      ask:["Simulation vs analytical methods"] };
  N["2.0.8"] = { q:"State the limitations of simulation.", m:3,
      a:"- It does not give an optimal solution; it only shows what happens under the conditions tried.\n- Results are approximate; each run gives a different answer.\n- Many long runs are needed: costly in computer time.\n- Building and validating a model takes time and expertise.\n- The results are only as good as the model and the input data.\n- Each model is specific to its problem; it cannot be reused directly.",
      trap:"Simulation is not an optimisation technique.",
      ask:["Advantages and limitations of simulation"] };

  /* ------------------------------------------------ Module 4 */
  N["3.0.0"] = { q:"State the characteristics of dynamic programming.", m:5,
      a:"Dynamic programming — a technique for multi-stage decision problems: the problem is split into stages and solved one stage at a time.\nCharacteristics:\n- The problem is divided into stages; a decision is needed at each stage.\n- Each stage has a number of states.\n- A decision moves the system from a state in one stage to a state in the next.\n- Principle of optimality (Bellman): whatever the earlier decisions, the remaining decisions must be optimal for the state that results.\n- A recursive relation links the optimal value of stage n to that of stage n + 1: fn(s) = min or max { cost(s, x) + f(n+1)(next state) }.\n- Solved by backward (or forward) recursion.\nTerms: stage, state, decision variable, return function, policy.",
      ask:["State Bellman's principle of optimality", "DP vs LP"] };
  N["3.0.1"] = { q:"Explain the dynamic programming approach to employment smoothening.", m:5,
      a:"Problem — the workforce needed changes from month to month. Hiring and firing cost money; so does keeping extra workers. Find the workforce level for each month at minimum total cost.\nDP formulation:\n- Stage: each month i.\n- State: the workforce at the end of the previous month, x(i−1).\n- Decision: the workforce this month, xi (at least the requirement bi).\n- Cost: C1 (xi − bi) for excess workers + C2 (xi − x(i−1)) for hiring (with a fixed cost if any).\n- Recursion: fi(x(i−1)) = min over xi ≥ bi of { C1 (xi − bi) + C2 (xi − x(i−1)) + f(i+1)(xi) }\nSolve backward from the last month, then trace forward for the workforce plan.",
      ask:["Formulate the workforce size problem as a DP"] };
  N["3.0.2"] = { q:"Explain the dynamic programming approach to capital budgeting.", m:5,
      a:"Problem — a fixed capital C is to be shared among n projects (or plants). Each project gives a known return for each amount invested. Maximise the total return.\nDP formulation:\n- Stage: each project i.\n- State: the capital still available, s.\n- Decision: the amount xi given to project i (0 ≤ xi ≤ s).\n- Return: ri(xi).\n- Recursion: fi(s) = max over xi { ri(xi) + f(i+1)(s − xi) }\nSteps:\n1. Start with the last project: f_n(s) = best return for each s.\n2. Move back one project at a time, tabulating fi(s) for every s.\n3. At stage 1 read f1(C); trace forward for the allocation.",
      ask:["Allocate the given capital among three projects"] };
  N["3.0.3"] = { q:"Solve the shortest path (stage coach) problem: A–B 2, A–C 4; B–D 6, B–E 3; C–D 2, C–E 5; D–F 4, E–F 6.", m:10,
      a:"<p><b>Backward recursion:</b> f(node) = min over next nodes { distance + f(next) }.</p><p><b>Stage 3</b> (to F): f(D) = 4; f(E) = 6.</p><p><b>Stage 2:</b></p><table><tr><th>From</th><th>via D</th><th>via E</th><th>f</th><th>Best</th></tr><tr><td>B</td><td>6 + 4 = 10</td><td>3 + 6 = 9</td><td>9</td><td>E</td></tr><tr><td>C</td><td>2 + 4 = 6</td><td>5 + 6 = 11</td><td>6</td><td>D</td></tr></table><p><b>Stage 1:</b></p><table><tr><th>From</th><th>via B</th><th>via C</th><th>f</th><th>Best</th></tr><tr><td>A</td><td>2 + 9 = 11</td><td>4 + 6 = 10</td><td>10</td><td>C</td></tr></table><p><b>Shortest path:</b> A → C → D → F. <b>Distance</b> = 4 + 2 + 4 = 10.</p>",
      trap:"The greedy choice (A–B, the cheapest first arc) gives 11, not the optimum. Show the table for every stage.",
      ask:["Find the shortest route from node 1 to node 10 by dynamic programming"] };
  N["3.0.4"] = [
    { q:"Solve the cargo loading problem: capacity 4 tons; item 1 (2 tons, value 31), item 2 (3 tons, value 47), item 3 (1 ton, value 14).", m:10,
      a:"<p><b>DP formulation:</b> stage = item; state = capacity left s; decision = units loaded x. f<sub>i</sub>(s) = max { v<sub>i</sub> x + f<sub>i+1</sub>(s − w<sub>i</sub> x) }.</p><p><b>Stage 3</b> (item 3, 1 ton, 14): f3(s) = 14s.</p><table><tr><th>s</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>f3</td><td>0</td><td>14</td><td>28</td><td>42</td><td>56</td></tr></table><p><b>Stage 2</b> (item 2, 3 tons, 47): f2(s) = max { 47x + f3(s − 3x) }.</p><table><tr><th>s</th><th>0</th><th>1</th><th>2</th><th>3</th><th>4</th></tr><tr><td>f2</td><td>0</td><td>14</td><td>28</td><td>47 (x = 1)</td><td>61 (x = 1)</td></tr></table><p><b>Stage 1</b> (item 1, 2 tons, 31), s = 4:</p><ul><li>x = 0: 0 + f2(4) = 61</li><li>x = 1: 31 + f2(2) = 59</li><li>x = 2: 62 + f2(0) = <b>62</b></li></ul><p><b>Answer:</b> load 2 units of item 1. Maximum value = 62.</p>",
      ask:["Knapsack problem by dynamic programming"] },
    { q:"Explain the dynamic programming approach to reliability problems.", m:5,
      a:"Problem — a system has n components in series. Component i can have parallel (standby) units; more units mean higher reliability but higher cost. Maximise the system reliability within a budget C.\n- System reliability R = R1 × R2 × … × Rn (a product, since the components are in series).\nDP formulation:\n- Stage: each component i.\n- State: the budget still available, s.\n- Decision: the number of parallel units mi for component i.\n- Recursion: fi(s) = max over mi { Ri(mi) × f(i+1)(s − ci(mi)) }\nSolve backward, then trace forward for the number of units of each component.",
      trap:"Reliabilities are multiplied, not added.",
      ask:["Find the optimal number of parallel units for the given budget"] }
  ];

  /* ------------------------------------------------ Module 5 */
  N["4.0.0"] = { q:"What is a competitive game? Define the basic terms of game theory.", m:5,
      a:"Game theory — the study of decision making in situations of conflict or competition between two or more opponents.\nCompetitive game — a situation with:\n- A finite number of players.\n- A finite number of strategies for each.\n- Players choosing at the same time, without knowing the other's choice.\n- A payoff for every combination of choices.\nTerms:\n- Player: a competitor.\n- Strategy: a course of action. Pure: always the same one. Mixed: several, with probabilities.\n- Payoff: the gain or loss from a combination of strategies.\n- Payoff matrix: the table of payoffs to the row player.\n- Two-person zero-sum game: the gain of one = the loss of the other.\n- Value of the game: the expected payoff when both play optimally.",
      ask:["Assumptions of game theory", "Pure vs mixed strategy"] };
  N["4.0.1"] = { q:"What is a rectangular game?", m:2,
      a:"Rectangular game — a two-person zero-sum game written as a payoff matrix with m rows and n columns.\n- Rows: the m strategies of player A (the maximising player).\n- Columns: the n strategies of player B (the minimising player).\n- Entry aij: the payoff to A when A plays i and B plays j. B's payoff is −aij.\nExample: a 3 × 3 matrix gives A three strategies and B three.\nA positive entry is a gain to A; a negative entry is a gain to B.",
      ask:["What is a two-person zero-sum game?"] };
  N["4.0.2"] = { q:"What is a saddle point?", m:2,
      a:"Saddle point — the cell of the payoff matrix that is both the minimum of its row and the maximum of its column.\nIt exists when maximin = minimax.\n- The game is then strictly determinable.\n- Both players use pure strategies.\n- The value of the game = the entry at the saddle point.\nIf maximin ≠ minimax, there is no saddle point and the players use mixed strategies.",
      ask:["When is a game strictly determinable?"] };
  N["4.0.3"] = { q:"Explain the minimax (maximin) method of finding optimal strategies.", m:3,
      a:"Maximin principle (player A) — A assumes the worst: finds the minimum of each row, then picks the row with the largest of these minima. Maximin = the lower value of the game.\nMinimax principle (player B) — B finds the maximum of each column, then picks the column with the smallest of these maxima. Minimax = the upper value of the game.\nSteps:\n1. Write the row minima; circle the largest (maximin).\n2. Write the column maxima; circle the smallest (minimax).\n3. If they are equal, that cell is the saddle point.\nAlways: maximin ≤ value of the game ≤ minimax.",
      ask:["State the maximin and minimax principles"] };
  N["4.0.4"] = { q:"What is the value of the game?", m:2,
      a:"Value of the game (V) — the expected payoff to player A when both players use their optimal strategies.\n- V > 0: the game favours A.\n- V < 0: the game favours B.\n- V = 0: a fair game.\nWith a saddle point, V = the saddle point entry.\nWithout one, V lies between maximin and minimax and is found with mixed strategies.",
      ask:["What is a fair game?"] };
  N["4.0.5"] = { q:"Important list: find the saddle point, the best strategies and the value. A1 (10, 5, 7), A2 (8, 6, 9), A3 (−2, 4, 3).", m:2,
      a:"<table><tr><th></th><th>B1</th><th>B2</th><th>B3</th><th>Row min</th></tr><tr><th>A1</th><td>10</td><td>5</td><td>7</td><td>5</td></tr><tr><th>A2</th><td>8</td><td><b>6</b></td><td>9</td><td><b>6</b></td></tr><tr><th>A3</th><td>−2</td><td>4</td><td>3</td><td>−2</td></tr><tr><th>Col max</th><td>10</td><td><b>6</b></td><td>9</td><td></td></tr></table><ul><li>Maximin = max(5, 6, −2) = 6</li><li>Minimax = min(10, 6, 9) = 6</li><li>Maximin = minimax → saddle point at (A2, B2).</li></ul><p><b>Answer:</b> A plays A2, B plays B2, value of the game = 6.</p>",
      ask:["Solve the game (two-person zero-sum pay-off matrix)"] };
  N["4.0.6"] = [
    { q:"State the dominance principle.", m:3,
      a:"Dominance — a strategy that is never better than another can be removed, reducing the size of the game.\nRules:\n- Rows (player A wants more): if every entry of row i is ≤ the corresponding entry of row k, row i is dominated: delete row i.\n- Columns (player B wants less): if every entry of column j is ≥ the corresponding entry of column k, column j is dominated: delete column j.\n- A row or column can also be dominated by the average of two others.\nRepeat until no more can be deleted, then solve the reduced game.",
      trap:"Delete the smaller row, but the larger column.",
      ask:["Explain the principle of dominance with an example"] },
    { q:"Important list: reduce by dominance and find the value. A1 (3, 8), A2 (9, 6), A3 (6, 4).", m:5,
      a:"1. Compare A3 (6, 4) with A2 (9, 6): 6 ≤ 9 and 4 ≤ 6 → A3 is dominated. Delete A3.\n2. Reduced game: A1 (3, 8), A2 (9, 6).\n3. Row minima 3, 6 → maximin = 6. Column maxima 9, 8 → minimax = 8. No saddle point.\n4. Mixed strategies with a = 3, b = 8, c = 9, d = 6; D = (a + d) − (b + c) = 9 − 17 = −8\n5. A: p1 = (d − c) ÷ D = (6 − 9) ÷ (−8) = 3/8; p2 = 5/8\n6. B: q1 = (d − b) ÷ D = (6 − 8) ÷ (−8) = 1/4; q2 = 3/4\n7. V = (ad − bc) ÷ D = (18 − 72) ÷ (−8) = 6.75\nAnswer: A plays (3/8, 5/8, 0); B plays (1/4, 3/4); value = 6.75.\nCheck: against B1, A gets 3 × 3/8 + 9 × 5/8 = 6.75.",
      ask:["Solve the given game using dominance"] }
  ];
  N["4.0.7"] = [
    { q:"Give the formulae for a 2 × 2 game without a saddle point (mixed strategy).", m:5,
      a:"<p>Payoff matrix: A1 (a, b), A2 (c, d). Let D = (a + d) − (b + c).</p><table><tr><th>Quantity</th><th>Formula</th></tr><tr><td>A plays A1 with probability</td><td>p1 = (d − c) ÷ D</td></tr><tr><td>A plays A2</td><td>p2 = 1 − p1 = (a − b) ÷ D</td></tr><tr><td>B plays B1 with probability</td><td>q1 = (d − b) ÷ D</td></tr><tr><td>B plays B2</td><td>q2 = 1 − q1 = (a − c) ÷ D</td></tr><tr><td>Value of the game</td><td>V = (ad − bc) ÷ D</td></tr></table><p><b>Why:</b> A chooses p so that the expected gain is the same whichever column B plays: a p1 + c p2 = b p1 + d p2.</p><p><b>Oddments method:</b> A1's oddment = |c − d|, A2's = |a − b|; B1's = |b − d|, B2's = |a − c|. Probability = oddment ÷ sum of the oddments.</p>",
      trap:"First check that there is no saddle point. The formulae are wrong for a game that has one.",
      ask:["Solve by the oddments method"] },
    { q:"Important list: solve the game A1 (1, 4), A2 (3, 2).", m:2,
      a:"1. Row minima 1, 2 → maximin = 2. Column maxima 3, 4 → minimax = 3. No saddle point.\n2. a = 1, b = 4, c = 3, d = 2; D = (1 + 2) − (4 + 3) = −4\n3. p1 = (d − c) ÷ D = (2 − 3) ÷ (−4) = 1/4; p2 = 3/4\n4. q1 = (d − b) ÷ D = (2 − 4) ÷ (−4) = 1/2; q2 = 1/2\n5. V = (ad − bc) ÷ D = (2 − 12) ÷ (−4) = 2.5\nAnswer: A (1/4, 3/4), B (1/2, 1/2), value = 2.5.\nCheck: 2 ≤ 2.5 ≤ 3.",
      ask:["Solve the game A1 (5, 2), A2 (3, 4): A (1/4, 3/4), B (1/2, 1/2), V = 3.5"] }
  ];

  /* ------------------------------------------------ Module 6 */
  N["5.0.0"] = [
    { q:"Important list: recall the reasons for carrying inventory, and the basic terms of inventory models.", m:5,
      a:"Inventory — a stock of goods kept for future use or sale.\nReasons for carrying inventory:\n- To meet uncertain demand (safety stock).\n- To cover the lead time of supply.\n- To get quantity discounts and save ordering cost.\n- To keep production running smoothly.\n- To guard against price rises and shortages.\nTerms:\n- Demand (D): units needed per year.\n- Ordering (set-up) cost (Co): the cost of placing one order.\n- Carrying (holding) cost (Cc): the cost of holding one unit for a year; often a percentage of the unit cost.\n- Shortage cost (Cs): the cost of being out of stock, per unit per year.\n- Lead time: the time between placing an order and receiving it.\n- Reorder level: the stock level at which a new order is placed = demand rate × lead time (+ safety stock).\n- EOQ: the order quantity that minimises the total inventory cost.",
      ask:["Types of inventory", "Inventory costs"] },
    { q:"Derive / state the classical EOQ model.", m:5,
      a:"Assumptions: demand is known and constant; replenishment is instantaneous; no shortages; the costs are constant.\n- Number of orders per year = D ÷ Q\n- Annual ordering cost = (D ÷ Q) × Co\n- Average inventory = Q ÷ 2\n- Annual carrying cost = (Q ÷ 2) × Cc\n- Total cost TC = (D ÷ Q) Co + (Q ÷ 2) Cc\nTC is minimum when ordering cost = carrying cost:\nEOQ: Q* = √(2 D Co ÷ Cc)\n- Number of orders N = D ÷ Q*\n- Time between orders T = Q* ÷ D\n- Minimum inventory cost TC* = √(2 D Co Cc)\n- Total cost including purchase = D × unit cost + TC*",
      trap:"If the carrying cost is given as a percentage, Cc = percentage × unit cost.",
      ask:["Draw the inventory cost curves and mark the EOQ"] },
    { q:"Important list: demand 8000 units per annum, unit cost Re 1, carrying cost 20% of average inventory, ordering cost Rs 12.50 per order. Find the EOQ, order time, inventory cost and number of orders.", m:10,
      a:"1. D = 8000, Co = 12.50, Cc = 20% × 1 = Rs 0.20 per unit per year\n2. EOQ = √(2 D Co ÷ Cc) = √(2 × 8000 × 12.5 ÷ 0.2) = √1,000,000 = 1000 units\n3. Number of orders = D ÷ Q = 8000 ÷ 1000 = 8 per year\n4. Order time (cycle) = Q ÷ D = 1/8 year = 1.5 months\n5. Minimum inventory cost = √(2 D Co Cc) = √(2 × 8000 × 12.5 × 0.2) = √40,000 = Rs 200\nCheck: ordering = 8 × 12.5 = 100; carrying = (1000 ÷ 2) × 0.2 = 100; total = 200.\n6. Total cost with purchase = 8000 × 1 + 200 = Rs 8200",
      ask:["ABC Corporation: D = 10,000, cost Rs 2, Co = Rs 36, carrying 9%: EOQ = 2000, orders = 5, cost = Rs 360", "D = 3600, Cc = Rs 1.2, set-up Rs 80: EOQ = 693, orders = 5.2, cost = Rs 831"] }
  ];
  N["5.0.1"] = { q:"Explain the EOQ model with price breaks (quantity discounts).", m:5,
      a:"The unit price falls when the order quantity crosses a break quantity b.\nPrice p1 for Q < b; price p2 (lower) for Q ≥ b.\nSteps (single break):\n1. Compute the EOQ at the lowest price p2: Q2 = √(2 D Co ÷ (i × p2)), where i = carrying rate.\n2. If Q2 ≥ b, it is feasible: order Q2. Stop.\n3. If Q2 < b, compute the EOQ at p1: Q1.\n4. Compare the total annual cost at Q1 and at the break quantity b:\nTC(Q) = D × price + (D ÷ Q) Co + (Q ÷ 2) × i × price\n5. Choose the quantity with the lower total cost.\nFor several breaks: start from the lowest price and move up until an EOQ falls in its own price range; then compare it with every higher break quantity.",
      trap:"The purchase cost D × price must be included, because the price changes with the quantity.",
      ask:["Find the optimal order quantity for the given discount schedule"] };
  N["5.0.2"] = { q:"Explain the EOQ model with shortages. D = 1800, Co = 100, Cc = 4, Cs = 12.", m:5,
      a:"Shortages are allowed and back-ordered; they are filled when the next lot arrives.\n- Q* = √(2 D Co ÷ Cc) × √((Cc + Cs) ÷ Cs)\n- Maximum inventory M = Q* × Cs ÷ (Cc + Cs)\n- Maximum shortage S = Q* − M\n- Minimum cost TC* = √(2 D Co Cc) × √(Cs ÷ (Cc + Cs))\nNumerical:\n1. Basic EOQ = √(2 × 1800 × 100 ÷ 4) = √90,000 = 300\n2. Factor = √(16 ÷ 12) = 1.155\n3. Q* = 300 × 1.155 = 346 units\n4. M = 346 × 12 ÷ 16 = 260 units\n5. S = 346 − 260 = 86 units\n6. TC* = √(2 × 1800 × 100 × 4) × √(12 ÷ 16) = 1200 × 0.866 = Rs 1039\nWith shortages the order quantity is larger and the cost lower than in the classical model (1200).",
      ask:["Compare the EOQ with and without shortages"] };
  N["5.0.3"] = { q:"Explain the probabilistic EOQ model (reorder level and safety stock).", m:5,
      a:"Demand or lead time is uncertain, so extra stock is kept.\n- Safety (buffer) stock SS = z × σL, where σL = standard deviation of the demand during the lead time and z = the service-level factor (95% → 1.645).\n- Reorder level ROL = average demand during lead time + safety stock = d × L + SS\n- Order quantity: the EOQ computed with the average demand.\n- Maximum inventory = EOQ + SS; average inventory = EOQ ÷ 2 + SS.\nExample: d = 50 per day, L = 4 days, σL = 20, service level 95%.\n1. SS = 1.645 × 20 = 33 units\n2. ROL = 50 × 4 + 33 = 233 units\nSingle-period model (newsboy): order the quantity Q at which P(demand ≤ Q) = Cu ÷ (Cu + Co); Cu = cost of under-stocking per unit, Co = cost of over-stocking per unit.",
      ask:["Deterministic vs probabilistic inventory models", "Find the reorder level for the given service level"] };
})();
