'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { Play, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ThemeMode, ProjectItem } from '@/types';
import { PROJECTS } from '@/config/projects';

interface Props {
  themeMode?: ThemeMode;
  onSelectProject: (p: ProjectItem) => void;
}

const iconPaths: Record<string, string> = {
  ecograde: '/assets/projects/icons/ecograde.png',
  splittr: '/assets/projects/icons/splittr.png',
  'underwater-xplorers': '/assets/projects/icons/xplorers.png',
  lifestream: '/assets/projects/icons/lifestream.png',
};

export default function Projects({ themeMode = 'dark', onSelectProject }: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const isLight = themeMode === 'light';

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? PROJECTS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === PROJECTS.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 text-center"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono mx-auto ${
            isLight ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-white/5 border-white/10 text-slate-400'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
            <span>projects</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Featured Showcase
          </h2>
        </motion.div>

        <div className="relative py-4 my-4 flex flex-col items-center justify-center min-h-[460px]">
          <div className="relative w-full max-w-2xl h-[380px] sm:h-[400px] flex items-center justify-center">
            {PROJECTS.map((proj, idx) => {
              const total = PROJECTS.length;
              let offset = idx - activeIndex;
              if (offset < -1) offset += total;
              if (offset > 1) offset -= total;

              const isActive = offset === 0;

              let transformClass = 'scale-75 opacity-0 pointer-events-none z-0';
              if (isActive) {
                transformClass = 'scale-100 translate-x-0 rotate-0 z-20 opacity-100 shadow-2xl';
              } else if (offset === -1) {
                transformClass = 'scale-[0.88] -translate-x-[22%] sm:-translate-x-[28%] -rotate-[6deg] z-10 opacity-75 hover:opacity-100 cursor-pointer';
              } else if (offset === 1) {
                transformClass = 'scale-[0.88] translate-x-[22%] sm:translate-x-[28%] rotate-[6deg] z-10 opacity-75 hover:opacity-100 cursor-pointer';
              }

              const iconSrc = iconPaths[proj.id];

              return (
                <motion.div
                  key={proj.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: isActive ? 1 : 0.75, scale: isActive ? 1 : 0.88 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 25 }}
                  onClick={() => setActiveIndex(idx)}
                  className={`absolute w-[92%] sm:w-[500px] rounded-[28px] p-6 sm:p-7 border transition-all duration-300 ${transformClass} ${
                    isLight
                      ? 'bg-white border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] text-slate-800'
                      : 'bg-slate-900/95 border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)] text-white backdrop-blur-xl'
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-100 font-mono text-[11px] font-bold tracking-wider uppercase border border-slate-800 shadow-sm flex items-center gap-1.5">
                        <span className="text-blue-400">{'{'}</span>
                        <span>{proj.type}</span>
                        <span className="text-blue-400">{'}'}</span>
                      </span>
                    </div>

                    <div className="flex items-start gap-4 pt-1">
                      {iconSrc && (
                        <Image
                          src={iconSrc}
                          alt={proj.title}
                          width={64}
                          height={64}
                          unoptimized
                          className="w-16 h-16 rounded-2xl shrink-0 shadow-xl"
                        />
                      )}

                      <div className="space-y-1">
                        <h3 className={`text-xl sm:text-2xl font-bold font-mono tracking-tight ${
                          isLight ? 'text-slate-900' : 'text-white'
                        }`}>
                          {proj.title}
                        </h3>
                        <p className={`text-xs sm:text-sm leading-relaxed ${
                          isLight ? 'text-slate-600' : 'text-slate-300'
                        }`}>
                          {proj.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(proj);
                        }}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-mono text-xs font-bold transition-all border border-slate-800 flex items-center justify-center gap-2 shadow-md cursor-pointer group"
                      >
                        <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400 group-hover:scale-110 transition-transform" />
                        <span>View Details</span>
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="flex items-center gap-6 mt-6 z-30 font-mono text-xs">
            <button
              onClick={handlePrev}
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 border-white/15 text-slate-200 shadow-lg'
              }`}
              title="Previous Project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {PROJECTS.map((_, dotIdx) => (
                <button
                  key={dotIdx}
                  onClick={() => setActiveIndex(dotIdx)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    dotIdx === activeIndex
                      ? 'w-7 bg-blue-500 shadow-[0_0_10px_#3b82f6]'
                      : isLight
                        ? 'w-2.5 bg-slate-300 hover:bg-slate-400'
                        : 'w-2.5 bg-white/20 hover:bg-white/40'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className={`p-2.5 rounded-full border transition-all cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 border-white/15 text-slate-200 shadow-lg'
              }`}
              title="Next Project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
