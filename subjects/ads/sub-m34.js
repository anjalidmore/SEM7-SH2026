/* =====================================================================
   ADS — subtopics, Modules 3 and 4 (format: see sub-m12.js)
   ===================================================================== */
(function(){
"use strict";
var D = window.ADS_SUBS = window.ADS_SUBS || {subs:[], newItems:{}, analysis:{}, parents:[]};
var S = function(o){ D.subs.push(o); };
var add = function(p, kind, list){ var n = D.newItems[p] = D.newItems[p] || {examples:[], practice:[]}; n[kind] = n[kind].concat(list); };
var A = function(){ return '<ul class="list">' + Array.prototype.map.call(arguments, function(p){ return "<li>" + p + "</li>"; }).join("") + "</ul>"; };
var SELF = '<div class="box neutral"><h5>Self-study topic</h5><p style="margin:0">Listed under <b>Self-learning</b> in the syllabus. Your lecture decks do not cover it, so this page follows the standard textbook treatment. Learn the definitions and one example; expect at most a short note.</p></div>';
/* the same closing step for every test */
var DECIDE = `<p><b>Decision rule:</b> |calculated| &lt; table value → <b>accept H₀</b> (difference not significant, could be chance). |calculated| ≥ table value → <b>reject H₀</b> (difference significant).</p>`;

/* ============================== MODULE 3 ============================== */
S({id:"m3t1a", p:"m3t1", kind:"num", title:"Areas under the standard normal curve",
 sum:"Same side → subtract areas; opposite sides → add; tail → 0.5 − area.",
 items:["ex_m3t1_1"],
 key:"The standard normal curve has mean 0 and SD 1; the total area is 1 and each half is 0.5. The z-table gives the area from 0 to z.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Wanted</th><th>Area</th></tr></thead><tbody>
<tr><td>0 to z</td><td>table value</td></tr><tr><td>z₁ to z₂, same side</td><td>A(z₂) − A(z₁)</td></tr>
<tr><td>−z₁ to z₂, opposite sides</td><td>A(z₁) + A(z₂)</td></tr><tr><td>beyond z (tail)</td><td>0.5 − A(z)</td></tr>
<tr><td>below a positive z</td><td>0.5 + A(z)</td></tr></tbody></table></div>`,
 steps:["Sketch the curve and shade the wanted area.","Read A(z) for each z from the table.","Add, subtract or take 0.5 − A.","Write the probability and infer."],
 infer:`<p>“About ___% of values lie between ___ and ___.”</p>`,
 mistakes:["Subtracting areas that lie on opposite sides of 0."], trap:"Always sketch first: it tells you whether to add or subtract."});
S({id:"m3t1b", p:"m3t1", kind:"num", title:"Normal probabilities with a given mean and SD",
 sum:"Convert X to z = (X − μ)/σ, then use the table.",
 items:["ex_m3t1_2","p_m3t1_1"],
 key:"Any normal variable is turned into the standard one by <b>z = (X − μ)/σ</b>: z counts how many SDs X is from the mean.",
 steps:["Write μ and σ (σ = √variance).","z for each limit.","Areas from the table, combine.","Probability → percentage → inference."],
 infer:`<p>“P(X &gt; 72) = 0.0668: only about <b>7% of packets</b> weigh more than 72 g.”</p>`,
 mistakes:["Using the variance as σ."]});
S({id:"m3t1c", p:"m3t1", kind:"num", title:"Combining normal probabilities (“at least one of n”)",
 sum:"P(at least one) = 1 − P(none) = 1 − (1 − p)ⁿ.",
 items:["ex_m3t1_3"],
 key:"First get p for one item from the normal curve; then treat the n items as independent.",
 theory:`<p>P(none) = (1 − p)ⁿ · <b>P(at least one) = 1 − (1 − p)ⁿ</b></p>`,
 infer:`<p>“There is a ___% chance that at least one of the three students scores above 75.”</p>`});
S({id:"m3t1d", p:"m3t1", kind:"th", title:"Properties of the normal distribution",
 sum:"Bell-shaped, symmetric, mean = median = mode, 68–95–99.7.",
 items:["p_m3t1_2"],
 key:"Bell-shaped and symmetric about μ; mean = median = mode; tails never touch the axis; total area 1; 68% / 95% / 99.7% within 1 / 2 / 3 σ.",
 theory:`<p>pdf: f(x) = [1/(σ√(2π))] e<sup>−(x − μ)²/(2σ²)</sup></p>`});

S({id:"m3t2a", p:"m3t2", kind:"num", title:"Poisson probabilities: exactly, at most, at least",
 sum:"P(x) = e⁻ᵐ mˣ / x!; at least 1 = 1 − P(0).",
 items:["ex_m3t2_1","p_m3t2_1"],
 key:"Poisson counts <b>rare events</b> in a fixed interval (calls per 10 min, mistakes per page) with a known average m.",
 theory:`<p><b>P(X = x) = e<sup>−m</sup> m<sup>x</sup> / x!</b>, x = 0, 1, 2, … · mean = variance = m.</p>
<ul class="list"><li>At most k: P(0) + … + P(k)</li><li>At least 1: 1 − P(0)</li></ul>`,
 steps:["Read m (scale it if the interval changes).","e⁻ᵐ first.","P for each x needed.","Add or complement.","Infer."],
 infer:`<p>“There is a ___% chance of at most 2 calls in 10 minutes, so the switchboard is usually quiet; 3 or more calls happen ___% of the time.”</p>`,
 mistakes:["Forgetting x! in the denominator.","Not scaling m when the interval changes."]});
S({id:"m3t2b", p:"m3t2", kind:"num", title:"Poisson: probability within m ± 2σ",
 sum:"σ = √m; list the integers in the range and add.",
 items:["ex_m3t2_2"],
 key:"For Poisson, σ = √m. Find the integer values inside m ± 2σ and add their probabilities.",
 infer:`<p>“About ___% of intervals have a count within two SDs of the mean, close to the 95% of the normal rule.”</p>`});
S({id:"m3t2c", p:"m3t2", kind:"th", title:"Conditions and applications of the Poisson distribution",
 sum:"n large, p small, np = m finite; rare independent events.",
 items:["p_m3t2_2"],
 key:"Binomial → Poisson when n is very large, p very small and np = m stays finite. Uses: accidents per week, calls at an exchange, misprints per page, deaths from a rare disease."});

S({id:"m3t3a", p:"m3t3", kind:"th", title:"Central Limit Theorem",
 sum:"Sample means are normal with SE σ/√n for n ≥ 30.",
 items:["p_m3t3_2"],
 key:"Whatever the population's shape, the mean of a large sample (n ≥ 30) is approximately normal with mean μ and standard error <b>σ/√n</b>.",
 theory:`<p>That is why z-tests and confidence intervals work for large samples: z = (x̄ − μ)/(σ/√n).</p>`});
S({id:"m3t3b", p:"m3t3", kind:"num", title:"Confidence interval for a mean",
 sum:"x̄ ± z·σ/√n; z = 1.645, 1.96, 2.576 for 90, 95, 99%.",
 items:["ex_m3t3_1","p_m3t3_1"],
 key:"A <b>confidence interval</b> is a range that contains the true mean with a stated confidence (e.g. 95%).",
 theory:`<p><b>CI = x̄ ± z · σ/√n</b> (large n or σ known). Small n, σ unknown: x̄ ± t(n − 1) · s/√n.</p>
<div class="scroll"><table class="t"><thead><tr><th>Confidence</th><th>90%</th><th>95%</th><th>99%</th></tr></thead><tbody><tr><td>z</td><td>1.645</td><td>1.96</td><td>2.576</td></tr></tbody></table></div>`,
 steps:["SE = σ/√n.","Margin = z × SE.","x̄ − margin, x̄ + margin.","Infer."],
 infer:`<p>“We are 95% confident that the true mean waiting time lies between <b>42.23 and 47.77 minutes</b>. A higher confidence would give a wider interval; a larger sample, a narrower one.”</p>`,
 trap:"95% confidence is about the method, not a 95% chance for this one interval."});

S({id:"m3t4a", p:"m3t4", kind:"th", title:"Hypotheses and the testing procedure",
 sum:"H₀ → H₁ → α → test statistic → decision.",
 items:["p_m3t4_1"],
 key:"<b>H₀</b> states no difference (μ = μ₀). <b>H₁</b> is what we accept if H₀ is rejected. <b>α</b> (5% or 1%) is the risk of rejecting a true H₀.",
 theory:`<p>Five steps: H₀ → H₁ (one- or two-tailed) → α → compute z or t → compare with the table value and conclude.</p>
<p>Which statistic: n ≥ 30 → z · n &lt; 30, σ known → z · n &lt; 30, σ unknown → t.</p>`,
 write:{short:"Define H₀, H₁ and α.", long:"The five steps with an example."}});
S({id:"m3t4b", p:"m3t4", kind:"th", title:"One-tailed vs two-tailed tests",
 sum:"≠ → two-tailed (±1.96 at 5%); > or < → one-tailed (1.645).",
 items:["p_m3t4_2"],
 key:"H₁: μ ≠ μ₀ → <b>two-tailed</b>, rejection area split into both tails. H₁: μ &gt; μ₀ or μ &lt; μ₀ → <b>one-tailed</b>, all of α in one tail.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>α</th><th>Two-tailed</th><th>One-tailed</th></tr></thead><tbody>
<tr><td>10%</td><td>1.645</td><td>1.28</td></tr><tr><td>5%</td><td>1.96</td><td>1.645</td></tr><tr><td>1%</td><td>2.58</td><td>2.33</td></tr></tbody></table></div>`});
S({id:"m3t4c", p:"m3t4", kind:"th", title:"Type I and Type II errors",
 sum:"Reject a true H₀ (α) vs accept a false H₀ (β).",
 items:["ex_m3t4_1"],
 key:"<b>Type I</b>: rejecting a true H₀, probability α (producer's risk). <b>Type II</b>: accepting a false H₀, probability β (consumer's risk). Only a <b>larger sample</b> reduces both together.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th></th><th>H₀ true</th><th>H₀ false</th></tr></thead><tbody>
<tr><td>Accept H₀</td><td>Correct</td><td>Type II (β)</td></tr><tr><td>Reject H₀</td><td>Type I (α)</td><td>Correct (power 1 − β)</td></tr></tbody></table></div>`});
S({id:"m3t4d", p:"m3t4", kind:"num", title:"p-value and the decision",
 sum:"p = tail area beyond the calculated z; p < α → reject.",
 items:["p_m3t4_3"],
 key:"The <b>p-value</b> is the probability, if H₀ were true, of a result at least as extreme as the one observed.",
 theory:`<ul class="list"><li>One-tailed: p = 0.5 − A(|z|)</li><li>Two-tailed: p = 2 × [0.5 − A(|z|)]</li><li><b>p &lt; α → reject H₀</b>; p ≥ α → accept.</li></ul>`,
 infer:`<p>“p = 0.036 &lt; 0.05, so the result is significant at 5%; but p &gt; 0.01, so it is not significant at 1%.”</p>`});

S({id:"m3t5a", p:"m3t5", kind:"num", title:"Z-test for a single mean (two-tailed)",
 sum:"Z = (x̄ − μ)/(σ/√n); compare with 1.96 or 2.58.",
 items:["ex_m3t5_1","p_m3t5_1"],
 key:"Tests whether a large sample (n ≥ 30) could come from a population with the claimed mean μ.",
 theory:`<p><b>Z = (x̄ − μ) / (σ/√n)</b>; use s if σ is unknown.</p>`+DECIDE,
 steps:["H₀: μ = claim; H₁: μ ≠ claim.","SE = σ/√n.","Z.","Compare |Z| with 1.96 (5%) / 2.58 (1%).","Conclude in the words of the problem."],
 infer:`<p>“|Z| = 2.22 &gt; 1.96, so H₀ is rejected at 5%: the sample does <b>not</b> support a mean of 1200 hours; the bulbs last less than claimed.”</p>`,
 mistakes:["Dividing by σ instead of σ/√n."]});
S({id:"m3t5b", p:"m3t5", kind:"num", title:"Z-test for a single mean (one-tailed)",
 sum:"H₁: μ < μ₀ or μ > μ₀; critical 1.645 (5%), 2.33 (1%).",
 items:["p_m3t5_2"],
 key:"When the claim has a direction (“at least”, “more than”, “has decreased”), put all of α in one tail.",
 theory:`<p>Same Z; critical values one-tailed: <b>1.645</b> at 5%, <b>2.33</b> at 1% (with the sign of the tail).</p>`,
 infer:`<p>“Z = −2.0 is beyond −1.645, so at 5% the claim is rejected; it is inside −2.33, so at 1% it is accepted. The evidence is moderate, not strong.”</p>`});

S({id:"m3t6a", p:"m3t6", kind:"num", title:"One-sample t-test",
 sum:"t = (x̄ − μ)/(s/√n), df = n − 1.",
 items:["ex_m3t6_1","p_m3t6_1"],
 key:"Use when the sample is <b>small (n &lt; 30)</b> and σ is unknown: test one sample mean against a claimed value.",
 theory:`<p><b>t = (x̄ − μ) / (s/√n)</b>, s² = Σ(x − x̄)²/(n − 1), df = n − 1.</p>`+DECIDE,
 steps:["H₀: μ = claim.","x̄ and s (divide by n − 1).","t.","df = n − 1, table t at 5%.","Conclude."],
 infer:`<p>“|t| = 0.62 &lt; t(9) = 2.262, so H₀ is accepted: the data <b>support</b> a population mean I.Q. of 100.”</p>`,
 mistakes:["Using n instead of n − 1 for s.","Using z for a small sample."]});
S({id:"m3t6b", p:"m3t6", kind:"num", title:"Independent two-sample t-test",
 sum:"Pooled s², t = (x̄ − ȳ)/√(s²/n₁ + s²/n₂), df = n₁ + n₂ − 2.",
 items:["ex_m3t6_2","p_m3t6_3"],
 key:"Compares the means of <b>two separate groups</b> (two diets, two methods) with small samples.",
 theory:`<ul class="list"><li>Pooled <b>s² = [Σ(x − x̄)² + Σ(y − ȳ)²] / (n₁ + n₂ − 2)</b></li><li><b>t = (x̄ − ȳ) / √(s²/n₁ + s²/n₂)</b></li><li>df = n₁ + n₂ − 2</li></ul>`+DECIDE,
 steps:["H₀: μ₁ = μ₂.","Both means and both sums of squared deviations.","Pooled s².","t.","df, table value, conclusion."],
 infer:`<p>“|t| &lt; table t, so the two diets do <b>not differ significantly</b> in weight gain; the observed difference could be chance.”</p>`});
S({id:"m3t6c", p:"m3t6", kind:"num", title:"Paired t-test (before / after)",
 sum:"t = d̄/(s_d/√n) on the differences, df = n − 1.",
 items:["ex_m3t6_3","p_m3t6_2"],
 key:"Use when the <b>same subjects</b> are measured twice (before and after training). Work with the differences d.",
 theory:`<p>d = after − before · <b>t = d̄ / (s_d/√n)</b>, s_d² = Σ(d − d̄)²/(n − 1), df = n − 1 (n = number of pairs).</p>`+DECIDE,
 steps:["d for each pair.","d̄ and s_d.","t.","df = pairs − 1.","Conclude: did the treatment change the score?"],
 infer:`<p>“t = 6.53 &gt; t(4) = 2.776, so the treatment <b>significantly changes</b> the score; on average it rises by d̄ = 1.6.”</p>`,
 trap:"Using the independent test on paired data throws away the pairing."});

S({id:"m3t7a", p:"m3t7", kind:"num", title:"One-way ANOVA table",
 sum:"SS between, SS within, df, MS, F = MS between / MS within.",
 items:["ex_m3t7_1","p_m3t7_1"],
 key:"<b>One-way ANOVA</b> tests whether three or more group means are equal, with one factor (variety, method, machine).",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Source</th><th>SS</th><th>df</th><th>MS</th><th>F</th></tr></thead><tbody>
<tr><td>Between</td><td>Σ nⱼ(X̄ⱼ − X̿)²</td><td>k − 1</td><td>SS/(k − 1)</td><td>MS between / MS within</td></tr>
<tr><td>Within</td><td>Σ Σ(X − X̄ⱼ)²</td><td>n − k</td><td>SS/(n − k)</td><td></td></tr>
<tr><td>Total</td><td>Σ(X − X̿)²</td><td>n − 1</td><td></td><td></td></tr></tbody></table></div>`+DECIDE,
 steps:["H₀: all group means equal.","Group means and grand mean.","SS between (× nⱼ!) and SS within; check the total.","df, MS, F.","F table at (k − 1, n − k); conclude."],
 infer:`<p>“F = 1.5 &lt; F(2, 9) = 4.26, so H₀ is accepted: the three wheat varieties <b>do not differ significantly</b> in yield; the differences are chance variation between plots.”</p>`,
 mistakes:["Forgetting nⱼ in SS between.","Within df = n − 1 (it is n − k)."],
 clues:["Three or more groups, one factor, “are the differences significant?”"]});
S({id:"m3t7b", p:"m3t7", kind:"th", tag:"brief", title:"Principle of ANOVA; one-way vs two-way (comparison)",
 sum:"Why not many t-tests; two-way only as a comparison, no numerical.",
 items:["p_m3t7_2"],
 key:"ANOVA compares two estimates of the variance: <b>between</b> groups and <b>within</b> groups. <b>Two-way ANOVA</b> is the same idea with <b>two factors</b> at once; learn it only as a comparison.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th></th><th>One-way ANOVA</th><th>Two-way ANOVA</th></tr></thead><tbody>
<tr><td>Factors</td><td>One (e.g. wheat variety)</td><td>Two (e.g. seed variety × fertilizer)</td></tr>
<tr><td>Data layout</td><td>Groups in columns</td><td>A grid: one factor in columns, the other in rows</td></tr>
<tr><td>Variation split into</td><td>Between groups + within groups</td><td>Between columns + between rows + residual</td></tr>
<tr><td>F-ratios</td><td>One</td><td>Two (one per factor)</td></tr>
<tr><td>Hypotheses</td><td>H₀: all group means equal</td><td>H₀₁: column means equal; H₀₂: row means equal</td></tr>
<tr><td>Strength</td><td>Simple</td><td>Removes the second factor's variation from the error, so it detects effects more easily</td></tr>
<tr><td>Example</td><td>Do 3 teaching methods give different scores?</td><td>Do methods <i>and</i> teachers both affect scores?</td></tr></tbody></table></div>`,
 write:{short:"Principle of ANOVA in two lines.", long:"Principle + why not repeated t-tests + one-way vs two-way table."},
 q:[{q:"Distinguish one-way and two-way ANOVA.", marks:5},{q:"Explain the principle of ANOVA.", marks:5}]});

/* Module 3 self-study */
D.parents.push({id:"m3t8", m:"m3", title:"Self-study: Neyman–Pearson Lemma and Tests in Python, Excel and R",
 classification:"bonly", priority:"medium", core:false, type:"theory", marks:5, los:["LO 3.3","LO 3.4"],
 src:"Syllabus self-learning topics (Module 3) · standard textbook treatment",
 summary:"Most powerful (MP) and uniformly most powerful (UMP) tests; running z, t and ANOVA in software.",
 whatIs:SELF, concept:"", needToKnow:["Power = 1 − β.","Neyman–Pearson lemma: the likelihood-ratio test is most powerful.","MP vs UMP.","The software function for each test."],
 recognition:{clues:["“Neyman–Pearson”, “most powerful test”, “UMP”, “Python / Excel / R”."], firstStep:"State the lemma for simple H₀ vs simple H₁, then contrast MP with UMP.", wording:["State the Neyman–Pearson lemma.","Distinguish MP and UMP tests."], trap:"A UMP test usually exists only for one-sided alternatives."},
 examAnswer:{short:"State the lemma.", medium:"Lemma + MP vs UMP.", long:"Lemma, MP, UMP, example."},
 mistakes:[], examples:[], practice:[], questions:[{q:"State the Neyman–Pearson lemma and distinguish MP and UMP tests.", marks:5, source:"predicted"}]});
add("m3t8","practice",[
 {id:"p_m3t8_1", d:"standard", marks:5, q:"State the Neyman–Pearson lemma. Distinguish a most powerful (MP) test from a uniformly most powerful (UMP) test.",
  a:`<b>Power</b> of a test = 1 − β = P(reject H₀ when H₀ is false). Among tests with the same α we want the one with the highest power.<br><br>
<b>Neyman–Pearson lemma.</b> For a <b>simple</b> H₀: θ = θ₀ against a <b>simple</b> H₁: θ = θ₁, the most powerful test of size α rejects H₀ when the <b>likelihood ratio</b><br>
L(θ₁)/L(θ₀) &gt; k, with k chosen so that P(reject | H₀) = α.<br><br>
<div class="scroll"><table class="t"><thead><tr><th></th><th>MP test</th><th>UMP test</th></tr></thead><tbody>
<tr><td>Alternative</td><td>One simple value θ₁</td><td>Composite: every θ in H₁ (e.g. μ &gt; μ₀)</td></tr>
<tr><td>Property</td><td>Highest power at θ₁ among size-α tests</td><td>Highest power at <b>every</b> θ in H₁</td></tr>
<tr><td>Existence</td><td>Always (by the lemma)</td><td>Often for one-sided H₁; usually not for two-sided</td></tr>
<tr><td>Example</td><td>H₀: μ = 50 vs H₁: μ = 55</td><td>One-sided z-test of H₀: μ = 50 vs H₁: μ &gt; 50 (normal, σ known)</td></tr></tbody></table></div>`},
 {id:"p_m3t8_2", d:"basic", marks:5, q:"Name the Python, Excel and R functions you would use for a one-sample t-test, an independent t-test, a paired t-test and one-way ANOVA. How do you read the result?",
  a:`<div class="scroll"><table class="t"><thead><tr><th>Test</th><th>Python (scipy.stats)</th><th>Excel</th><th>R</th></tr></thead><tbody>
<tr><td>Normal / Poisson probabilities</td><td>norm.cdf, poisson.pmf</td><td>NORM.DIST, POISSON.DIST</td><td>pnorm, dpois</td></tr>
<tr><td>One-sample t</td><td>ttest_1samp(x, 100)</td><td>compute t, then T.DIST.2T</td><td>t.test(x, mu = 100)</td></tr>
<tr><td>Independent t</td><td>ttest_ind(x, y)</td><td>T.TEST(x, y, 2, 2)</td><td>t.test(x, y, var.equal = TRUE)</td></tr>
<tr><td>Paired t</td><td>ttest_rel(before, after)</td><td>T.TEST(x, y, 2, 1)</td><td>t.test(x, y, paired = TRUE)</td></tr>
<tr><td>One-way ANOVA</td><td>f_oneway(a, b, c)</td><td>Data Analysis ToolPak → ANOVA: Single Factor</td><td>summary(aov(y ~ group))</td></tr></tbody></table></div>
Each returns the statistic and a <b>p-value</b>: p &lt; 0.05 → reject H₀ at 5%; p ≥ 0.05 → accept.`}]);
S({id:"m3t8a", p:"m3t8", kind:"th", tag:"self", title:"Neyman–Pearson lemma: MP and UMP tests",
 sum:"Likelihood ratio gives the most powerful test; UMP for one-sided H₁.",
 items:["p_m3t8_1"],
 key:"For simple H₀ vs simple H₁, rejecting when <b>L(θ₁)/L(θ₀) &gt; k</b> gives the <b>most powerful</b> test of size α. A test that is most powerful for every θ in a composite H₁ is <b>UMP</b>."});
S({id:"m3t8b", p:"m3t8", kind:"th", tag:"self", title:"Running the tests in Python, Excel and R",
 sum:"ttest_1samp / T.TEST / t.test …; read the p-value.",
 items:["p_m3t8_2"],
 key:"Software gives the statistic and a <b>p-value</b>; p &lt; α → reject H₀."});

add("m3t5","practice",[
 {id:"p_m3t5_2", d:"standard", marks:5, q:"A company claims its packets weigh at least 50 g on average. A sample of 36 packets has mean 48 g; σ = 6 g. Test the claim at 5% and at 1%.",
  hint:"“At least” → H₁: μ < 50, left-tailed.",
  a:`H₀: μ = 50; H₁: μ &lt; 50 (left-tailed).<br>SE = 6/√36 = 1; Z = (48 − 50)/1 = <b>−2.00</b>.<br>5%: critical −1.645 → −2.00 &lt; −1.645 → <b>reject H₀</b>.<br>1%: critical −2.33 → −2.00 &gt; −2.33 → <b>accept H₀</b>.`}]);
add("m3t6","practice",[
 {id:"p_m3t6_3", d:"standard", marks:10, q:"Scores with method A: 10, 12, 14. Scores with method B: 15, 17, 19, 21. Test at 5% whether the two methods differ. (t(5) at 5%, two-tailed = 2.571)",
  hint:"Means 12 and 18.",
  a:`H₀: μ_A = μ_B; H₁: μ_A ≠ μ_B.<br>x̄ = 12, Σ(x − x̄)² = 4 + 0 + 4 = 8. ȳ = 18, Σ(y − ȳ)² = 9 + 1 + 1 + 9 = 20.<br>
Pooled s² = (8 + 20)/(3 + 4 − 2) = 28/5 = <b>5.6</b>.<br>SE = √(5.6/3 + 5.6/4) = √(1.867 + 1.4) = √3.267 = 1.807.<br>
t = (12 − 18)/1.807 = <b>−3.32</b>, df = 5.<div class="answer">|t| = 3.32 &gt; 2.571 → reject H₀.</div>`}]);

/* ============================== MODULE 4 ============================== */
S({id:"m4t1a", p:"m4t1", kind:"num", title:"Fit a regression line by least squares and predict",
 sum:"a = [nΣxy − ΣxΣy]/[nΣx² − (Σx)²]; b = ȳ − a x̄.",
 items:["ex_m4t1_1","p_m4t1_1"],
 key:"<b>Simple linear regression</b> fits the straight line y′ = ax + b that makes the sum of squared errors as small as possible (least squares). a is the slope, b the intercept.",
 theory:`<ul class="list"><li><b>a = [nΣxy − ΣxΣy] / [nΣx² − (Σx)²]</b></li><li><b>b = (Σy − aΣx)/n = ȳ − a x̄</b></li><li>The line passes through (x̄, ȳ); residuals e = y − y′ add to 0.</li></ul>`,
 steps:["Table: x, y, xy, x².","Sums and n.","a, then b.","Write y′ = ax + b.","Predict, then interpret a and b."],
 infer:`<p>“Slope a = 1.7: each extra ₹1 lakh of advertising raises sales by about <b>₹1.7 lakh</b>. Intercept b = 0.9: predicted sales with no advertising. Sales at x = 6 ≈ ₹11.1 lakh, an extrapolation, valid only if the trend continues.”</p>`,
 mistakes:["Swapping a and b.","Predicting far outside the data range without a warning."]});
S({id:"m4t1b", p:"m4t1", kind:"th", title:"Correlation vs regression",
 sum:"Degree vs nature of the relationship; prediction.",
 items:["p_m4t1_2"],
 key:"Correlation measures the <b>degree</b> of association (r, symmetric). Regression gives the <b>equation</b> for predicting y from x (b_yx ≠ b_xy)."});

S({id:"m4t2a", p:"m4t2", kind:"num", title:"Error measures and R² for a fitted line",
 sum:"MAE, MSE, RMSE, MAPE and R² = 1 − SSE/SST.",
 items:["ex_m4t2_1","p_m4t2_1"],
 key:"Each measure summarises the errors e = y − ŷ. Lower error is better; R² near 1 is better.",
 theory:`<div class="scroll"><table class="t"><thead><tr><th>Measure</th><th>Formula</th><th>Meaning</th></tr></thead><tbody>
<tr><td>MAE</td><td>Σ|e| / n</td><td>Average error, in y's units</td></tr>
<tr><td>MSE</td><td>Σe² / n</td><td>Punishes large errors</td></tr>
<tr><td>RMSE</td><td>√MSE</td><td>Back in y's units</td></tr>
<tr><td>MAPE</td><td>(100/n) Σ|e|/|y|</td><td>Average % error</td></tr>
<tr><td>R²</td><td>1 − Σe² / Σ(y − ȳ)²</td><td>Share of variation explained</td></tr></tbody></table></div>`,
 steps:["ŷ for each x.","e, |e|, e², |e|/y columns.","Σ(y − ȳ)².","All five measures.","Infer."],
 infer:`<p>“MAE = 0.48 and MAPE = 2.33%: predictions are off by about 2.3% on average. R² = 0.998: the line explains <b>99.8%</b> of the variation in expenditure, an excellent fit. RMSE ≈ MAE, so there are no large individual errors.”</p>`,
 mistakes:["Dividing MAPE errors by ŷ instead of y."]});
S({id:"m4t2b", p:"m4t2", kind:"th", title:"The error term and the meaning of R²",
 sum:"e = y − ŷ; R² = 0.95 means 95% explained; R² alone is not enough.",
 items:["p_m4t2_2"],
 key:"The <b>error term</b> is the part of y the line does not explain. <b>R²</b> is the share of y's variation the model explains; it never falls when a variable is added, so check adjusted R² and residuals too."});

S({id:"m4t3a", p:"m4t3", kind:"num", title:"Fitting a multiple regression with two predictors",
 sum:"Deviation sums → b₁, b₂ → b₀ = Ȳ − b₁X̄₁ − b₂X̄₂.",
 items:["ex_m4t3_1","p_m4t3_1"],
 key:"<b>Multiple linear regression</b> predicts Y from two or more X's: Y′ = b₀ + b₁X₁ + b₂X₂.",
 theory:`<ul class="list"><li>Σx₁² = ΣX₁² − (ΣX₁)²/n, Σx₁y = ΣX₁Y − ΣX₁ΣY/n, Σx₁x₂ = ΣX₁X₂ − ΣX₁ΣX₂/n (same for x₂)</li>
<li><b>b₁ = [Σx₂²·Σx₁y − Σx₁x₂·Σx₂y] / [Σx₁²·Σx₂² − (Σx₁x₂)²]</b></li>
<li><b>b₂ = [Σx₁²·Σx₂y − Σx₁x₂·Σx₁y] / [Σx₁²·Σx₂² − (Σx₁x₂)²]</b></li><li><b>b₀ = Ȳ − b₁X̄₁ − b₂X̄₂</b></li></ul>`,
 steps:["Raw sums and means.","Deviation sums.","Common denominator.","b₁, b₂, then b₀.","Equation, prediction, interpretation."],
 infer:`<p>“b₁ = 3.15: with X₂ held fixed, one more unit of X₁ raises Y by about 3.15. b₂ = −1.66: with X₁ fixed, one more unit of X₂ <b>lowers</b> Y by about 1.66.”</p>`,
 mistakes:["Using raw sums instead of deviation sums.","Interpreting b₁ without “holding X₂ constant”."]});
S({id:"m4t3b", p:"m4t3", kind:"num", title:"Interpreting partial regression coefficients",
 sum:"bᵢ = change in Y per unit of Xᵢ, others held constant.",
 items:["p_m4t3_2"],
 key:"A <b>partial regression coefficient</b> is the effect of one X on Y when all other X's are held constant.",
 infer:`<p>“Y = 10 + 2(5) + 3(4) = 32. X₂ has the larger coefficient, so a one-unit change in X₂ moves Y more than a one-unit change in X₁.”</p>`});

S({id:"m4t4a", p:"m4t4", kind:"num", title:"R², adjusted R² and the overall F-test",
 sum:"Adj R² = 1 − (1 − R²)(n − 1)/(n − k − 1); F = [(n − k − 1)R²]/[k(1 − R²)].",
 items:["ex_m4t4_1","p_m4t4_1"],
 key:"The <b>F-test</b> asks whether the model as a whole explains Y (H₀: all slopes are 0). <b>Adjusted R²</b> corrects R² for the number of predictors.",
 theory:`<ul class="list"><li>R² = explained SS / Σy² = (b₁Σx₁y + b₂Σx₂y)/Σy²</li><li><b>Adj R² = 1 − (1 − R²)(n − 1)/(n − k − 1)</b></li>
<li><b>F = [(n − k − 1) R²] / [k (1 − R²)]</b>, df (k, n − k − 1)</li></ul>`+DECIDE,
 steps:["R².","Adjusted R².","F.","Compare with F(k, n − k − 1).","Conclude; if H₀ is accepted, stop."],
 infer:`<p>“F = 21.3 &gt; F(3, 16) = 3.24, so the model is <b>significant overall</b>: at least one predictor explains Y. Adjusted R² = 0.76 (vs R² = 0.80) shows the extra variables still help after the penalty.”</p>`,
 trap:"If the F-test accepts H₀, do not go on to test the individual coefficients."});
S({id:"m4t4b", p:"m4t4", kind:"num", title:"t-test for an individual coefficient",
 sum:"t = bᵢ / SE(bᵢ), df = n − k − 1.",
 items:["p_m4t4_2"],
 key:"After a significant F-test, test each coefficient: H₀: bᵢ = 0 (Xᵢ adds nothing).",
 theory:`<p><b>t = bᵢ / SE(bᵢ)</b>, df = n − k − 1.</p>`+DECIDE,
 infer:`<p>“t = 3.0 &gt; 2.120, so b₂ is <b>significant</b>: X₂ contributes to predicting Y and should stay in the model.”</p>`});

/* Module 4 self-study */
D.parents.push({id:"m4t5", m:"m4", title:"Self-study: Residual Analysis and Regression Case Studies",
 classification:"bonly", priority:"medium", core:false, type:"problem-solving", marks:5, los:["LO 4.4","LO 4.6"],
 src:"Syllabus self-learning topics (Module 4) · standard textbook treatment",
 summary:"Compute and read residuals to check the model; house-price and sales-forecasting case studies.",
 whatIs:SELF, concept:"", needToKnow:["Residual e = y − ŷ; Σe = 0.","What a random, curved or funnel residual pattern means.","Case study structure: variables → model → interpretation."],
 recognition:{clues:["“Residuals”, “residual plot”, “diagnostics”, “house prices”."], firstStep:"Compute ŷ and e = y − ŷ, check Σe = 0, then read the pattern.", wording:["Compute the residuals and comment on the fit.","Explain the importance of residual analysis."], trap:"A high R² does not prove the line is the right shape: check the residual pattern."},
 examAnswer:{short:"Define a residual.", medium:"Residual table + comment.", long:"Residuals, plot patterns, case study."},
 mistakes:[], examples:[], practice:[], questions:[{q:"Compute the residuals for the fitted line and comment on the adequacy of the model.", marks:5, source:"predicted"}]});
add("m4t5","examples",[
 {id:"ex_m4t5_1", title:"Residuals of the expenditure line", category:"Residual analysis",
  recog:"A fitted line is given with its data and you are asked whether the line is adequate.",
  need:"ŷ for each x, e = y − ŷ, Σe = 0 check, pattern of signs, size against s.",
  q:"Expenditure (₹ thousand) for months 1–5 is 12, 19, 29, 37, 45, and the least-squares line is y′ = 8.4x + 3.2. Compute the residuals, their standard error, and comment on whether a straight line is adequate.",
  steps:["ŷ: 11.6, 20.0, 28.4, 36.8, 45.2.",
   "e = y − ŷ: <b>0.4, −1.0, 0.6, 0.2, −0.2</b>. Σe = 0 ✓.",
   "Σe² = 0.16 + 1.00 + 0.36 + 0.04 + 0.04 = <b>1.60</b>.",
   "Standard error s = √[Σe²/(n − 2)] = √(1.60/3) = <b>0.73</b>.",
   "Largest |e| = 1.0 &lt; 2s = 1.46 → no outlier. Signs +, −, +, +, −: no run or curve."],
  answer:`<div class="scroll"><table class="t num"><thead><tr><th>x</th><th>y</th><th>ŷ</th><th>e</th><th>e²</th></tr></thead><tbody>
<tr><td>1</td><td>12</td><td>11.6</td><td>0.4</td><td>0.16</td></tr><tr><td>2</td><td>19</td><td>20.0</td><td>−1.0</td><td>1.00</td></tr>
<tr><td>3</td><td>29</td><td>28.4</td><td>0.6</td><td>0.36</td></tr><tr><td>4</td><td>37</td><td>36.8</td><td>0.2</td><td>0.04</td></tr>
<tr><td>5</td><td>45</td><td>45.2</td><td>−0.2</td><td>0.04</td></tr><tr><td colspan="3">Σ</td><td>0.0</td><td>1.60</td></tr></tbody></table></div>`,
  why:"If the line is the right shape, what is left over should look like random noise: small, centred on zero and with no pattern.",
  trap:"Judging the fit from R² alone; a curved pattern can hide behind a high R²."}]);
add("m4t5","practice",[
 {id:"p_m4t5_1", d:"standard", marks:5, q:"For the advertising data x = 1, 2, 3, 4, 5 and y = 3, 4, 6, 7, 10, the least-squares line is y′ = 1.7x + 0.9. Compute the residuals and comment on their pattern.",
  hint:"Look at the signs from left to right.",
  a:`ŷ: 2.6, 4.3, 6.0, 7.7, 9.4 → e = <b>0.4, −0.3, 0.0, −0.7, 0.6</b>; Σe = 0 ✓; Σe² = 1.10.<br>
Signs: + at both ends, − in the middle (a U shape).`},
 {id:"p_m4t5_2", d:"basic", marks:5, q:"Explain the importance of residual analysis. What do a random pattern, a curved pattern and a funnel pattern in a residual plot tell you?",
  a:`A <b>residual</b> is e = y − ŷ. Plotting residuals against ŷ (or x) checks the regression assumptions that R² cannot show.
<div class="scroll"><table class="t"><thead><tr><th>Pattern</th><th>Meaning</th><th>Action</th></tr></thead><tbody>
<tr><td>Random scatter around 0</td><td>Linear model adequate, constant variance</td><td>Keep the model</td></tr>
<tr><td>Curve (U or ∩)</td><td>Relationship is not linear</td><td>Add x², transform, or use a non-linear model</td></tr>
<tr><td>Funnel (spread grows)</td><td>Variance not constant (heteroscedasticity)</td><td>Transform y (log) or use weighted regression</td></tr>
<tr><td>One point far away</td><td>Outlier or influential point</td><td>Check the data; refit with and without it</td></tr>
<tr><td>Runs over time</td><td>Errors not independent (autocorrelation)</td><td>Add time terms or use time-series methods</td></tr></tbody></table></div>`},
 {id:"p_m4t5_3", d:"standard", marks:5, q:"Describe a regression case study for (a) predicting house prices and (b) sales forecasting: variables, model, interpretation and evaluation.",
  a:`<b>(a) House prices.</b> Y = price; X₁ = area (sq ft), X₂ = bedrooms, X₃ = distance to city, X₄ = age. Multiple linear regression Price′ = b₀ + b₁X₁ + … . Interpret: b₁ = ₹4,000 → each extra sq ft adds ₹4,000 with the other features fixed; a negative b₃ → price falls with distance. Evaluate with R², adjusted R², the F-test, t-tests for each b, RMSE/MAPE on a test set, and a residual plot (a funnel is common: errors grow with price → model log price).<br><br>
<b>(b) Sales forecasting.</b> Y = monthly sales; X = advertising spend (or time t). Simple regression Sales′ = a·X + b: slope = extra sales per ₹ of advertising. Forecast next month, evaluate with MAE/RMSE/MAPE, and check residuals for a seasonal pattern (if present, add seasonal terms or use decomposition).`}]);
S({id:"m4t5a", p:"m4t5", kind:"num", tag:"self", title:"Residual analysis",
 sum:"e = y − ŷ, Σe = 0, standard error, read the pattern.",
 items:["ex_m4t5_1","p_m4t5_1","p_m4t5_2"],
 key:"A <b>residual</b> is what the model misses: e = y − ŷ. If the model is right, residuals are small, add to 0 and show <b>no pattern</b>.",
 theory:`<ul class="list"><li>Σe = 0 always for a least-squares line (arithmetic check).</li><li>Standard error of estimate <b>s = √[Σe²/(n − 2)]</b>.</li><li>|e| &gt; 2s → possible outlier.</li><li>Pattern: random → adequate · curve → non-linear · funnel → unequal variance.</li></ul>`,
 steps:["ŷ for each x.","e = y − ŷ; check Σe = 0.","Σe² and s.","Compare each |e| with 2s.","Read the sign pattern; conclude."],
 infer:`<p>“Residuals are small (largest 1.0 &lt; 2s = 1.46), add to zero and change sign at random, so the <b>straight line is adequate</b>.” Or: “positive at both ends and negative in the middle: a <b>curved</b> pattern, so a non-linear model may fit better.”</p>`});
S({id:"m4t5b", p:"m4t5", kind:"th", tag:"self", title:"Case studies: house prices and sales forecasting",
 sum:"Variables → model → interpretation → evaluation.",
 items:["p_m4t5_3"],
 key:"Write every case study as <b>variables → model → interpretation of the b's → evaluation</b> (R², F, t, RMSE, residuals)."});

/* inference for new and existing Module 3–4 items */
Object.assign(D.analysis, {
 p_m3t4_3: A("<b>Z = 1.50, two-tailed:</b> p = 0.134 &gt; 0.05, so the difference is not significant; it could easily be chance.",
   "<b>Z = 1.80, right-tailed:</b> p = 0.036 sits between 0.01 and 0.05: significant at 5% but not at 1%. The evidence is moderate.",
   "The p-value lets you decide at any α without looking up a new critical value."),
 p_m3t5_2: A("At 5% the claim of “at least 50 g” is <b>rejected</b>: a mean of 48 g from 36 packets is too low to be chance.",
   "At 1% it is <b>accepted</b>, so the verdict depends on how strict we are; the evidence against the claim is moderate, not overwhelming.",
   "One-tailed because the claim has a direction (“at least”)."),
 p_m3t6_3: A("|t| = 3.32 &gt; 2.571, so the methods <b>differ significantly</b> at 5%.",
   "Method B scores higher on average by 6 marks (18 vs 12), so B is the better method on this evidence.",
   "With only 7 students in all, the result should be confirmed with a larger sample."),
 ex_m4t5_1: A("Residuals are small (largest |e| = 1.0, less than 2s = 1.46): <b>no outliers</b>.",
   "They add to zero and change sign with no run or curve, so the <b>straight line is adequate</b> for this data.",
   "s = 0.73 means a typical prediction is within about ₹0.73 thousand of the actual expenditure."),
 p_m4t5_1: A("The residuals are <b>positive at both ends and negative in the middle</b>: a U-shaped pattern.",
   "That suggests sales rise faster than a straight line at high advertising spend; a curved (quadratic) model may fit better.",
   "With only 5 points the evidence is weak, but the pattern is the warning sign to check.")
});
})();
