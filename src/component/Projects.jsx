import React from 'react';
import {
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiNextdotjs,
  SiGooglegemini,
  SiStreamlit,
  SiGooglechrome,
} from 'react-icons/si';
import {
  FiDatabase,
  FiCode,
  FiCpu,
  FiSearch,
  FiGithub,
  FiFileText,
} from 'react-icons/fi';

const techConfig = {
  JavaScript: { icon: SiJavascript, color: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20' },
  Node: { icon: SiNodedotjs, color: 'bg-green-500/10 text-green-400 border-green-500/20' },
  Python: { icon: SiPython, color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  'Chrome API': { icon: SiGooglechrome, color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
  Gemini: { icon: SiGooglegemini, color: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' },
  RAG: { icon: FiSearch, color: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' },
  Transformers: { icon: FiCpu, color: 'bg-orange-500/10 text-orange-400 border-orange-500/20' },
  BeautifulSoup: { icon: FiCode, color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  Streamlit: { icon: SiStreamlit, color: 'bg-red-500/10 text-red-400 border-red-500/20' },
  ChromaDB: { icon: FiDatabase, color: 'bg-teal-500/10 text-teal-400 border-teal-500/20' },
  HTML: { icon: SiHtml5, color: 'bg-orange-600/10 text-orange-400 border-orange-600/20' },
  CSS: { icon: SiCss3, color: 'bg-blue-600/10 text-blue-400 border-blue-600/20' },
  Express: { icon: SiExpress, color: 'bg-zinc-500/10 text-zinc-400 border-zinc-500/20' },
  EJS: { icon: FiFileText, color: 'bg-pink-500/10 text-pink-400 border-pink-500/20' },
  'GitHub API': { icon: FiGithub, color: 'bg-gray-500/10 text-gray-400 border-gray-500/20' },
  AI: { icon: FiCpu, color: 'bg-violet-500/10 text-violet-400 border-violet-500/20' },
};

const techStacks = {
  AutoBulkSender: ['JavaScript', 'Node'],
  EventEase: ['EJS', 'Express', 'Node'],
  Inquisit: ['Python', 'RAG', 'Gemini'],
  ZenAI: ['Python', 'ChromaDB', 'Streamlit', 'Gemini'],
  BriefBot: ['Python', 'BeautifulSoup', 'Gemini'],
  TabZero: ['HTML', 'CSS'],
  CodeSage: ['GitHub API', 'AI'],
  CasualGPTx: ['Python', 'Transformers'],
  Flow: ['JavaScript', 'Chrome API'],
};

const TechTag = ({ name }) => {
  const config = techConfig[name];
  const colorClass = config?.color || 'bg-gray-500/10 text-gray-400 border-gray-500/20';
  const Icon = config?.icon;

  return (
    <div
      className={`group/tag inline-flex items-center gap-0 rounded-md border border-dashed ${colorClass} px-1.5 py-1 text-xs font-medium outline-none transition-all duration-300 ease-out hover:scale-[1.03] hover:gap-1.5 hover:shadow-sm`}
    >
      <span className="size-3.5 flex items-center justify-center shrink-0">
        {Icon && <Icon size={14} />}
      </span>
      <span className="max-w-0 overflow-hidden opacity-0 whitespace-nowrap transition-all duration-300 ease-out group-hover/tag:max-w-24 group-hover/tag:opacity-100 group-hover/tag:ml-0.5">
        {name}
      </span>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: 'AutoBulkSender',
      description: 'automates certificate creation and email delivery.',
      link: 'https://github.com/shravanramakunja/AutoBulkSender'
    },
    {
      title: 'EventEase',
      description: 'seamless event registration and check-in platform with automated workflows and attendance management.',
      link: 'https://github.com/shravanramakunja/EventEase'
    },
    {
      title: 'Inquisit',
      description: 'rag-based ai application for generating questions and evaluating answers from documents.',
      link: 'https://github.com/shravanramakunja/Inquisit'
    },
    {
      title: 'ZenAI',
      description: 'medical rag chatbot using retrieval-augmented generation to provide accurate answers.',
      link: 'https://github.com/shravanramakunja/ZenAI'
    },
    {
      title: 'BriefBot',
      description: 'ai-powered tool that automatically extracts and summarizes website content.',
      link: 'https://github.com/shravanramakunja/BriefBot'
    },
    {
      title: 'TabZero',
      description: 'minimal browser-based interface built with clean html for lightweight usage (open source).',
      link: 'https://github.com/shravanramakunja/TabZero'
    },
    {
      title: 'CodeSage',
      description: 'ai-powered github code review system using gemini for automated pull request feedback.',
      link: 'https://github.com/shravanramakunja/CodeSage'
    },
    {
      title: 'CasualGPTx',
      description: 'lightweight conversational ai chatbot built using transformers.',
      link: 'https://github.com/shravanramakunja/CasualGPTx'
    },
    {
      title: 'Flow',
      description: 'intent-driven browser extension for managing tabs and boosting productivity (open source).',
      link: 'https://github.com/shravanramakunja/Flow'
    }
  ];

  return (
    <section id="projects">
      <div>
        <p className="text-sm text-[#909092]">work</p>
        <h2 className="text-xl font-bold mt-1">projects</h2>
      </div>

      <div className="mt-4 grid grid-cols-1 gap-2.5 md:grid-cols-2">
        {projects.map((project, index) => {
          const tags = techStacks[project.title] || [];
          return (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl border border-border bg-card p-4 no-underline transition-all hover:border-border/50 hover:bg-card/80"
            >
              <h3 className="text-base font-semibold leading-tight group-hover:text-foreground transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mt-1.5 text-sm leading-relaxed flex-1">
                {project.description}
              </p>

              {/* Tech Stack Tags */}
              {tags.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {tags.map((tech) => (
                    <TechTag key={tech} name={tech} />
                  ))}
                </div>
              )}

              {/* GitHub Link */}
              <div className="mt-2.5 flex items-center gap-1.5 text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                <svg viewBox="0 0 24 24" className="size-4 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span>View on GitHub</span>
              </div>
            </a>
          );
        })}
      </div>

      {/* Currently working on */}
      <div className="mt-4 rounded-xl border border-border bg-card p-4">
        <p className="text-sm text-muted-foreground mb-1">currently working on</p>
        <a
          href="https://swtich-board.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group no-underline"
        >
          <h3 className="text-base font-semibold leading-tight group-hover:text-foreground transition-colors inline">
            SwtichBoard
          </h3>
          <span className="text-muted-foreground text-sm ml-2">
            - full-stack web application for managing school attendance.
          </span>
        </a>
      </div>
    </section>
  );
};

export default Projects;
