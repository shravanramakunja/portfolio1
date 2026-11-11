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
];

const ContributionCard = ({ contribution }) => {
  return (
    <div className="relative rounded-xl border border-border bg-card p-6 cursor-default">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <FiGitPullRequest size={20} className="text-muted-foreground shrink-0" />
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold">
              {contribution.project}
              <span className="text-muted-foreground font-normal"> — {contribution.title}</span>
            </h3>
            <a
              href={contribution.link}
              target="_blank"
              rel="noopener noreferrer"
              title="View pull request on GitHub"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card size-7 text-muted-foreground no-underline transition-all hover:bg-accent hover:border-accent hover:text-foreground group/exlink"
            >
              <FiExternalLink size={13} className="transition-transform duration-300 group-hover/exlink:rotate-12 group-hover/exlink:scale-110" />
            </a>
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
          {contribution.org}/{contribution.project} · <span className="text-foreground font-semibold">PR {contribution.pr}</span>
        </p>
      </div>
    </div>
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
