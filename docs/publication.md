# Portfolio publication

Project Markdown files are the explicit portfolio list. GitHub metadata can refresh language, activity dates, and archive status; it cannot add a project.

Every project declares:

```yaml
portfolioGroup: tools
sourceVisibility: public
```

`portfolioGroup` is `selected`, `research`, `tools`, or `creative`. The four selected cases are ordered by `priority`. Supporting cases render in their own group.

`sourceVisibility` is `public`, `private`, or `none`; omission defaults to `none`. Only an explicit `public` declaration produces a source link or GitHub social image. Private-source case studies can use reviewed portfolio images without linking the repository. This setting also controls source links in the individual case header and its `SoftwareSourceCode` metadata.

`draft: true` removes a case from both the index and generated case routes. Before changing source visibility, check Markdown body links and separately copied demos/downloads too. Publication settings do not withdraw files already present in `public/` or Git history.

## Verification

```bash
npm ci
npm run check
```

The check runs publication-policy and optional-intro regression tests, builds the site, and scans generated HTML for held private source URLs and unresolved authoring citations. It verifies the four selected cases and the private-source Focal Loom case. An optional offline build can set `PORTFOLIO_OFFLINE=1`; source publication decisions remain identical without GitHub metadata.

Pull requests run the same check with read-only repository permissions. Pages artifacts and deployment are limited to main-branch runs. The existing weekly rebuild refreshes optional repository metadata.

The homepage opens directly to the portfolio. The dock's Play Intro action starts the optional animation; no saved suppression preference is required.
