'use client';

import { motion } from 'motion/react';
import type { ThemeMode } from '@/types';
import { TECH_STACK } from '@/config/tech-stack';

interface Props {
  themeMode?: ThemeMode;
}

export default function TechStack({ themeMode = 'dark' }: Props) {
  const isLight = themeMode === 'light';

  return (
    <section id="tech" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono ${
            isLight ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-white/5 border-white/10 text-slate-400'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
            <span>tech stack</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="space-y-4">
          {TECH_STACK.map((group, groupIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: groupIdx * 0.1 }}
              className="space-y-3"
            >
              <div className="flex items-center gap-3">
                <h3 className={`text-xs font-mono font-semibold tracking-widest uppercase ${
                  isLight ? 'text-slate-500' : 'text-slate-400'
                }`}>
                  {group.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl border text-xs sm:text-sm font-mono ${
                      isLight
                        ? 'bg-white/60 backdrop-blur-sm border-blue-200/50 text-slate-800'
                        : 'bg-white/5 backdrop-blur-sm border-white/10 text-slate-200'
                    }`}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
