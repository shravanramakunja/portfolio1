import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiImage } from 'react-icons/fi';

const achievements = [
  {
    id: 1,
    emoji: '🏆',
    title: '2nd Place — InnovEx Project Expo',
    date: '22nd November 2025',
    description: (
      <>
        Won 2nd place at the InnovEx Project Expo with{' '}
        <span className="text-foreground font-semibold">FinInsightAI</span> — a platform
        that helps everyday investors understand why their mutual funds or ETFs go up or
        down, connecting market changes with real-world events and explaining them in a
        simple way so investing feels less confusing and more informed.
      </>
    ),
    team: 'S Pavan, S Naren Kumar, Surabhi M R',
    mentor: 'Ms. Suruthi S',
    image: '/26-11 (2).jpg',
    imageAlt: 'InnovEx Project Expo - Team FinInsightAI',
    link: null,
  },
  {
    id: 2,
    emoji: '🏅',
    title: 'Top 10 out of 138 Colleges — HackNEXt 1.0',
    date: 'Apr 11–12, 2026',
    description: (
      <>
        Placed Top 10 out of 138 colleges in a 24-hour hackathon with{' '}
        <span className="text-foreground font-semibold">Voice Diary AI</span> — a web app
        where users record or upload short voice notes and get a mental-wellbeing style
        analysis using vocal biomarkers like tremors, breathlessness, and pitch variation.
      </>
    ),
    team: 'Credible',
    teamDetail: 'Shilpa (Lead), Pavan, Rana',
    mentor: null,
    image: '/image.png',
    imageAlt: 'HackNEXt 1.0 - Team Credible',
    link: 'https://hacknext-1.vercel.app/#results',
  },
];

const AchievementCard = ({ achievement }) => {
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
          <span className="text-2xl">{achievement.emoji}</span>
          <div className="flex items-center gap-2">
            <h3 className="text-base font-bold">{achievement.title}</h3>
            {achievement.link && (
              <a
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                title="Visit project website"
                className="inline-flex items-center justify-center rounded-md border border-border bg-card size-7 text-muted-foreground no-underline transition-all hover:bg-accent hover:border-accent hover:text-foreground group/exlink"
              >
                <FiExternalLink size={13} className="transition-transform duration-300 group-hover/exlink:rotate-12 group-hover/exlink:scale-110" />
              </a>
            )}
          </div>
        </div>
        <p className="text-xs text-[#909092] mb-3">{achievement.date}</p>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">
          {achievement.description}
        </p>
        <p className="text-muted-foreground text-xs mt-3">
          Team: <span className="text-foreground font-semibold">{achievement.team}</span>
          {achievement.teamDetail && (
            <span className="text-muted-foreground"> — {achievement.teamDetail}</span>
          )}
          {achievement.mentor && (
            <span className="text-muted-foreground"> · Mentor: {achievement.mentor}</span>
          )}
        </p>

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
              src={achievement.image}
              alt={achievement.imageAlt}
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
            style={{ left: mouseClient.x - 300, top: mouseClient.y -160}}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ opacity: { duration: 0.15 }, scale: { duration: 0.15 } }}
          >
            <img
              src={achievement.image}
              alt={achievement.imageAlt}
              className="w-full h-auto object-cover"
              draggable={false}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Achievements = () => {
  return (
    <section id="achievements" className="mt-10">
      <div>
        <p className="text-sm text-[#909092]">recognition</p>
        <h2 className="text-xl font-bold mt-1">achievements</h2>
      </div>

      <div className="mt-6 flex flex-col gap-4">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
