import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiImage } from 'react-icons/fi';

const publications = [
  {
    id: 1,
    type: 'paper',
    title: 'Visual Debugging of Graph Algorithms through Behavioral and Semantic Analysis',
    venue: '2nd International Conference on Distributed Systems, Computer Networks and Cybersecurity (ICDSNC 2026)',
    organizer: 'Sri Krishna Institute of Technology, Bengaluru',
    date: '28–29 August 2026',
    link: 'https://ieeexplore.ieee.org/document/11746346',
    image: '/certificate.jpeg',
    imageAlt: 'Certificate of Appreciation — ICDSNC 2026, Sri Krishna Institute of Technology',
  },
];

const PublicationCard = ({ publication }) => {
  const [showMobileImage, setShowMobileImage] = useState(false);

  return (
    <div className="relative rounded-xl border border-border bg-card p-6 cursor-default">
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">📄</span>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold">{publication.title}</h3>
            {publication.link && (
              <a
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                title="View publication on IEEE Xplore"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card size-7 text-muted-foreground no-underline transition-all hover:bg-accent hover:border-accent hover:text-foreground group/exlink"
              >
                <FiExternalLink size={13} className="transition-transform duration-300 group-hover/exlink:rotate-12 group-hover/exlink:scale-110" />
              </a>
            )}
          </div>
        </div>

        <p className="text-xs text-[#909092] mb-3">{publication.date}</p>

        <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
          <span className="text-foreground font-semibold">{publication.venue}</span>
          <span className="text-muted-foreground"> — organized by {publication.organizer}</span>
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          {publication.link && (
            <a
              href={publication.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-inner-shadow inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-bold text-primary-foreground no-underline transition-all duration-300 hover:gap-2.5 group/exlink"
            >
              <FiExternalLink size={13} className="transition-transform duration-300 group-hover/exlink:rotate-12 group-hover/exlink:scale-110" />
              View paper on IEEE Xplore
            </a>
          )}
          <button
            onClick={() => setShowMobileImage((prev) => !prev)}
            className="sm:hidden inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-accent hover:border-accent hover:text-foreground cursor-pointer"
          >
            <FiImage size={13} />
            {showMobileImage ? 'Hide Certificate' : 'View Certificate'}
          </button>
        </div>
      </div>

      {/* Mobile inline certificate */}
      <AnimatePresence>
        {showMobileImage && (
          <motion.div
            className="sm:hidden mt-4 rounded-lg overflow-hidden border border-border/50"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <img
              src={publication.image}
              alt={publication.imageAlt}
              className="w-full h-auto object-cover"
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Research = () => {
  return (
    <section id="research" className="mt-10">
      <div>
        <p className="text-sm text-[#909092]">research</p>
        <h2 className="text-xl font-bold mt-1">research &amp; publications</h2>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {publications.map((publication) => (
          <PublicationCard key={publication.id} publication={publication} />
        ))}
      </div>
    </section>
  );
};

export default Research;