import React, { useState, useCallback, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiImage } from 'react-icons/fi';

const publications = [
  {
    id: 1,
    type: 'paper',
    title: 'Visual Debugging of Graph Algorithms through Behavioral and Semantic Analysis',
    venue: '2nd International Conference on Distributed Systems, Computer Networks and Cybersecurity (ICDSNC 2026)',
    organizer: 'Sri Krishna Institute of Technology, Bengaluru',
    date: '28–29 August 2026',
    image: '/certificate.jpeg',
    imageAlt: 'Certificate of Appreciation — ICDSNC 2026, Sri Krishna Institute of Technology',
  },
];

const PublicationCard = ({ publication }) => {
  const [mouseClient, setMouseClient] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileImage, setShowMobileImage] = useState(false);
  const previewRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    setMouseClient({ x: e.clientX, y: e.clientY });
  }, []);

  // Keep the floating preview fully inside the viewport using its real size.
  const getPreviewStyle = useCallback(() => {
    const margin = 16;
    const el = previewRef.current;
    const width = el?.offsetWidth ?? 320;
    const height = el?.offsetHeight ?? 240;
    const maxLeft = Math.max(margin, window.innerWidth - width - margin);
    const maxTop = Math.max(margin, window.innerHeight - height - margin);
    return {
      left: Math.min(Math.max(mouseClient.x - 340, margin), maxLeft),
      top: Math.min(Math.max(mouseClient.y - height / 2, margin), maxTop),
    };
  }, [mouseClient]);

  return (
    <div
      className="relative rounded-xl border border-border bg-card p-6 cursor-default"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-2xl">📄</span>
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold">{publication.title}</h3>
          </div>
        </div>

        <p className="text-xs text-[#909092] mb-3">{publication.date}</p>

        <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
          <span className="text-foreground font-semibold">{publication.venue}</span>
          <span className="text-muted-foreground"> — organized by {publication.organizer}</span>
        </p>

        {/* Mobile view certificate button */}
        <button
          onClick={() => setShowMobileImage((prev) => !prev)}
          className="sm:hidden mt-3 inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-accent hover:border-accent hover:text-foreground cursor-pointer"
        >
          <FiImage size={13} />
          {showMobileImage ? 'Hide Certificate' : 'View Certificate'}
        </button>
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

      {/* Desktop cursor-following certificate.
          Rendered via portal so the `fixed` positioning resolves against the
          viewport; the Reveal wrapper's filter/transform would otherwise make
          it a containing block and offset the preview. */}
      {createPortal(
        <AnimatePresence>
          {isHovered && (
            <motion.div
              ref={previewRef}
              className="pointer-events-none hidden sm:block fixed z-50 w-72 lg:w-80 rounded-xl overflow-hidden shadow-2xl border border-border/50"
              style={getPreviewStyle()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ opacity: { duration: 0.15 }, scale: { duration: 0.15 } }}
            >
              <img
                src={publication.image}
                alt={publication.imageAlt}
                className="w-full h-auto object-cover"
                draggable={false}
              />
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
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