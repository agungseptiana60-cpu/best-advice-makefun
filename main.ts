import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One sentence about the best advice I ever got: my grandfather's rule
// for judging a man — by how he treats people who can do nothing for
// him — now carried into a moment I still use, watching how someone
// speaks to the waiter, so the advice is lived and the ending turns
// instead of just restating the rule. Revised from a plainer draft
// that ended on the rule itself: this version keeps the same advice
// but shows me using it, which is what makes it mine.
const sentence =
  "My grandfather said a man is judged by how he treats people who can do nothing for him, so I watch how someone speaks to the waiter before I trust anything else they say.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), sentence + "\n", "utf8");
console.log(`Wrote ${sentence.length} characters to entry.txt`);
