export const projectGroups = [
  { key: 'selected', title: 'Selected Work' },
  { key: 'research', title: 'Research and Prototypes' },
  { key: 'tools', title: 'Practical Tools' },
  { key: 'creative', title: 'Creative and Embedded Work' },
];

export function publishedProjects(projects) {
  return projects.filter(({ data }) => data.draft !== true).sort((a, b) =>
    (a.data.priority ?? 100) - (b.data.priority ?? 100) ||
    new Date(b.data.date).valueOf() - new Date(a.data.date).valueOf()
  );
}

export function repositoryFor(data) {
  if (data.repo) return data.repo.toLowerCase();
  const match = data.github?.match(/^https:\/\/github\.com\/([^/]+\/[^/?#]+)/i);
  return match ? match[1].replace(/\.git$/, '').toLowerCase() : null;
}

// Publication is an authored decision. GitHub metadata never grants it.
export function publicSourceUrl(data) {
  if (data.sourceVisibility !== 'public') return null;
  const repo = repositoryFor(data);
  return repo ? `https://github.com/${repo}` : null;
}

export function publicProjectLinks(data) {
  return (data.links ?? []).filter(({ url }) =>
    data.sourceVisibility === 'public' || !/^https:\/\/github\.com\//i.test(url)
  );
}

export function projectRows(projects, repositories = []) {
  const metadata = new Map(repositories.filter((repo) => !repo.private)
    .map((repo) => [String(repo.full_name ?? '').toLowerCase(), repo]));
  return publishedProjects(projects).map(({ slug, data }) => {
    const repo = repositoryFor(data);
    const meta = repo ? metadata.get(repo) : undefined;
    const githubUrl = publicSourceUrl(data);
    return {
      key: slug,
      group: data.portfolioGroup ?? 'tools',
      title: data.title,
      status: meta?.archived ? 'archived' : data.status,
      description: data.description,
      tags: data.tags ?? [],
      language: meta?.language ?? '',
      pushed: String(meta?.pushed_at ?? '').slice(0, 10),
      writeupUrl: `/projects/${slug}/`,
      githubUrl,
      demoUrl: data.demo ?? null,
      demoLinkLabel: data.demoLinkLabel ?? data.demoLabel ?? 'Demo',
      image: data.image ?? (githubUrl ? `https://opengraph.githubusercontent.com/1/${repo}` : null),
      imageAlt: data.imageAlt || `${data.title} preview`,
    };
  });
}
