// news-summary-01 entry: copies summary.txt (our 11 November 2026 world news
// summary) to $MAKEFUN_OUTPUT_DIR/entry.txt, else /output/entry.txt.
// Node 22, standard library only, no network, deterministic by construction.

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./summary.txt', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.txt'));
