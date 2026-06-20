import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiImage } from 'react-icons/fi';

const extras = [
  {
    id: 1,
    icon: '/images.jpg',
    title: 'Vertechx 2024 \u2014 Annual Technical Fest',
    role: 'Design Sub Lead & Core Organizing Team',
    date: '2024',
    image: '/vertechx_24.jpg',
    imageAlt: 'Vertechx 2024 - Design Sub Lead',
    link: 'https://www.instagram.com/p/DGAvas_TG-J/?img_index=2',
  },
  {
    id: 2,
    icon: '/images.jpg',
    title: 'Vertechx 2025 \u2014 Annual Technical Fest',
    role: 'Design Lead  & Core Organizing Team' ,
    date: '2025',
    image: '/vertechx_25.jpg',
    imageAlt: 'Vertechx 2025 - Design Lead',
    link: 'https://www.instagram.com/p/DRPpKmLAWJM/?img_index=1',
  },
];

const ExtraCard = ({ item }) => {
  const [mouseClient, setMouseClient] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [showMobileImage, setShowMobileImage] = useState(false);
  const handleMouseMove = useCallback((e) => {
    setMouseClient({ x: e.clientX, y: e.clientY });
  }, []);

  return (
    <div

      className="relative rounded-xl border border-border bg-card p-6 cursor-default"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-3">
          <img src={item.icon} alt="SVT" className="size-8 rounded-md object-cover shrink-0 mix-blend-screen" />
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="text-base font-bold">{item.title}</h3>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              title="View on Instagram"
              className="inline-flex items-center justify-center rounded-md border border-border bg-card size-7 text-muted-foreground no-underline transition-all hover:bg-accent hover:border-accent hover:text-foreground group/exlink"
            >
              <FiExternalLink size={13} className="transition-transform duration-300 group-hover/exlink:rotate-12 group-hover/exlink:scale-110" />
            </a>
          </div>
        </div>
        <p className="text-xs text-[#909092] mb-3">{item.date}</p>
        <p className="text-foreground font-semibold text-sm">{item.role}</p>

        {/* Mobile view photo button */}
        <button
          onClick={() => setShowMobileImage(prev => !prev)}
          className="sm:hidden mt-3 inline-flex items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground transition-all hover:bg-accent hover:border-accent hover:text-foreground cursor-pointer"
        >
          <FiImage size={13} />
          {showMobileImage ? 'Hide Photo' : 'View Photo'}
        </button>
      </div>

      {/* Mobile inline image */}
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
              src={item.image}
              alt={item.imageAlt}
              className="w-full h-auto object-cover"
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop cursor-following image */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="pointer-events-none hidden sm:block fixed z-50 w-56 lg:w-64 rounded-xl overflow-hidden shadow-2xl border border-border/50"
            style={{ left: mouseClient.x  -325, top: mouseClient.y - 25 }}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ opacity: { duration: 0.15 }, scale: { duration: 0.15 } }}
          >
            <img
              src={item.image}
              alt={item.imageAlt}
              className="w-full h-auto object-cover"
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Extras = () => {
  return (
    <section id="extras" className="mt-10">
      <div>
        <p className="text-sm text-[#909092]">other stuff</p>
        <h2 className="text-xl font-bold mt-1">extras</h2>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {extras.map((item) => (
          <ExtraCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
};

export default Extras;
