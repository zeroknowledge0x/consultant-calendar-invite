import * as fs from 'node:fs';
import * as path from 'node:path';

// One-line office joke for "Make the AI Judge Laugh: Office Jokes" (make.fun).
// Deterministic by design: no clock, no randomness, no network, no secrets.
// The judge weighs: genuine office joke, earned turn, recognition of real office
// life, tight wording, a fresh take. The line's turn lands on the last beat:
// the consultant hired to kill the "could be an email" meetings books one more.
const ENTRY =
  'We hired a consultant to end the meetings that could be emails. He sent a calendar invite.';

const out = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
fs.mkdirSync(out, { recursive: true });

const text = ENTRY.trim();
if (text.length < 1 || text.length > 199) {
  throw new Error('entry must be 1-199 non-whitespace characters');
}

fs.writeFileSync(path.join(out, 'entry.txt'), text, 'utf8');
console.log(`wrote entry.txt (${text.length} chars)`);
