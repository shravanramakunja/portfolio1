import React from 'react';
import { FiExternalLink, FiGitPullRequest } from 'react-icons/fi';

const contributions = [
  {
    id: 1,
    project: 'nanocoder',
    org: 'Nano-Collective',
    title: 'fix(file-ops): move system-directory guard into shared path validator',
    description:
      'moved the system-directory write guard into the shared path validator, covering write_file, string_replace, diff_edit, file_op and lsp_format_document — added filesystem-root tests and a move-source guard along the way.',
    pr: '#1955',
    date: 'Nov 2026',
    status: 'Merged',
    link: 'https://github.com/Nano-Collective/nanocoder/pull/1955',
  },
  {
    id: 2,
    project: 'nanocoder',
    org: 'Nano-Collective',
    title: 'feat(execute-bash): let the model set a per-call timeout',
    description:
      'added an optional timeout_seconds to execute_bash, clamped to 1–300s with 120s default, forwarded through both the tool handler and the TUI streaming path — long builds no longer die at 2 minutes, and timeouts report the limit actually applied.',
    pr: '#2176',
    date: 'Nov 2026',
    status: 'Merged',
    link: 'https://github.com/Nano-Collective/nanocoder/pull/2176',
  },
  {
    id: 3,
    project: 'nanocoder',
    org: 'Nano-Collective',
    title: 'feat(prompt): inline @path imports from AGENTS.md',
    description:
      'added @path imports to AGENTS.md so a line that is exactly a file reference is replaced with the file contents when the prompt is built — imports resolve relative to the importing file, nest up to 5 levels, stay contained to the project root or config dir, and leave fenced code blocks untouched.',
    pr: '#2311',
    date: 'Nov 2026',
    status: 'Merged',
    link: 'https://github.com/Nano-Collective/nanocoder/pull/2311',
  },
];

const ContributionCard = ({ contribution }) => {
  return (
    <a
      href={contribution.link}
      target="_blank"
      rel="noopener noreferrer"
      title="View pull request on GitHub"
      className="group relative block rounded-xl border border-border bg-card p-6 no-underline transition-all hover:border-border/50 hover:bg-card/80"
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <FiGitPullRequest size={20} className="text-muted-foreground shrink-0" />
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold">
              {contribution.project}
              <span className="text-muted-foreground font-normal"> — {contribution.title}</span>
            </h3>
            <span className="inline-flex items-center justify-center rounded-md border border-border bg-card size-7 text-muted-foreground transition-all group-hover:bg-accent group-hover:border-accent group-hover:text-foreground">
              <FiExternalLink size={13} className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 mb-3">
          <p className="text-xs text-[#909092]">{contribution.date}</p>
          <span className="rounded-md border border-green-500/20 bg-green-500/10 px-1.5 py-0.5 text-[10px] font-medium text-green-400">
            {contribution.status}
          </span>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
          {contribution.description}
        </p>

        <p className="text-muted-foreground text-xs mt-3">
          {contribution.org}/{contribution.project} ·{' '}
          <span className="text-foreground font-semibold underline-offset-2 group-hover:underline">
            PR {contribution.pr}
          </span>
        </p>
      </div>
    </a>
  );
};

const OpenSource = () => {
  return (
    <section id="opensource" className="mt-10">
      <div>
        <p className="text-sm text-[#909092]">community</p>
        <h2 className="text-xl font-bold mt-1">open source</h2>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {contributions.map((contribution) => (
          <ContributionCard key={contribution.id} contribution={contribution} />
        ))}
      </div>
    </section>
  );
};

export default OpenSource;
