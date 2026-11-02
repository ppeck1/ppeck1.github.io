import test from 'node:test';
import assert from 'node:assert/strict';
import { projectRows, publicSourceUrl, publicProjectLinks } from '../src/lib/project-publication.mjs';

const project = (slug, data = {}) => ({ slug, data: {
  title: slug, date: '2026-11-01', status: 'active', repo: `ppeck1/${slug}`, ...data,
} });

test('new repositories cannot become portfolio entries through metadata', () => {
  const rows = projectRows([project('chosen')], [
    { full_name: 'ppeck1/chosen', language: 'Python' },
    { full_name: 'ppeck1/unreviewed', language: 'Dart' },
  ]);
  assert.deepEqual(rows.map((row) => row.key), ['chosen']);
  assert.equal(rows[0].language, 'Python');
});

test('draft cases stay unpublished with present, missing, or private metadata', () => {
  for (const metadata of [[], [{ full_name: 'ppeck1/hidden' }], [{ full_name: 'ppeck1/hidden', private: true }]]) {
    assert.deepEqual(projectRows([project('hidden', { draft: true })], metadata), []);
  }
});

test('private and unspecified sources cannot produce links or social previews', () => {
  for (const sourceVisibility of ['private', 'none', undefined]) {
    const data = { repo: 'ppeck1/private-repo', github: 'https://github.com/ppeck1/private-repo', sourceVisibility };
    assert.equal(publicSourceUrl(data), null);
    const [row] = projectRows([project('private-case', data)]);
    assert.equal(row.githubUrl, null);
    assert.equal(row.image, null);
    assert.deepEqual(publicProjectLinks({ ...data, links: [
      { label: 'source', url: data.github }, { label: 'demo', url: '/demo/' },
    ] }), [{ label: 'demo', url: '/demo/' }]);
  }
});

test('public source links require an explicit declaration and valid repository', () => {
  assert.equal(publicSourceUrl({ sourceVisibility: 'public', repo: 'ppeck1/tool' }), 'https://github.com/ppeck1/tool');
  assert.equal(publicSourceUrl({ sourceVisibility: 'public', github: 'https://github.com/ppeck1/tool.git' }), 'https://github.com/ppeck1/tool');
  assert.equal(publicSourceUrl({ sourceVisibility: 'public', github: 'https://example.com/tool' }), null);
});

test('metadata loss does not change selected projects or their ordering', () => {
  const projects = [project('second', { priority: 2, portfolioGroup: 'selected' }), project('first', { priority: 1, portfolioGroup: 'selected' })];
  for (const metadata of [[], [{ full_name: 'ppeck1/second', archived: true }]]) {
    assert.deepEqual(projectRows(projects, metadata).map(({ key, group }) => [key, group]), [['first', 'selected'], ['second', 'selected']]);
  }
});
