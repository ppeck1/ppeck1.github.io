import assert from 'node:assert/strict';
import { readFile, readdir, access } from 'node:fs/promises';
import path from 'node:path';

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  return (await Promise.all(entries.map((entry) => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(file) : entry.name.endsWith('.html') ? [file] : [];
  }))).flat();
}

const privateSources = ['coheron', 'hearth-media-center', 'photoshop-focus-stack-wizard'];
const files = await htmlFiles('dist');
for (const file of files) {
  const html = await readFile(file, 'utf8');
  for (const name of privateSources) {
    assert.ok(!new RegExp(`https://github\\.com/ppeck1/${name}(?=[/\\s"'<>?#]|$)`, 'i').test(html), `Private source URL in ${file}`);
  }
  assert.ok(!html.includes(':contentReference['), `Unresolved authoring citation in ${file}`);
}
await assert.rejects(access('dist/projects/coheron/index.html'), 'Draft Coheron case must not be generated');
const home = await readFile('dist/index.html', 'utf8');
assert.ok(!home.includes('every public repo'));
assert.ok(!home.includes('not yet filed on this chart'));
assert.ok(!home.includes('github.com/ppeck1/hearth-media-center'));
const selected = home.split('id="pinned-heading"')[1]?.split('</section>')[0] ?? '';
const cases = ['smartphrase-builder', 'project-atlas', 'bag_of_holding', 'mathematical-expression-atlas'];
let previous = -1;
for (const slug of cases) {
  const position = selected.indexOf(`/projects/${slug}/`);
  assert.ok(position > previous, `Missing or reordered selected case: ${slug}`);
  previous = position;
}
const focal = await readFile('dist/projects/focal-loom/index.html', 'utf8');
assert.ok(!focal.includes('codeRepository'), 'Private-source case must omit source structured data');
assert.ok(focal.includes('mantis-before-after.jpg'));
console.log(`Publication checks passed across ${files.length} built HTML pages.`);
