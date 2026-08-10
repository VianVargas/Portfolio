'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { Layout, Server, Database, Cpu, Check } from 'lucide-react';
import type { ThemeMode } from '@/types';
import { TECH_STACK } from '@/config/tech-stack';

interface Props {
  themeMode?: ThemeMode;
}

const categoryIcons: Record<string, React.ElementType> = {
  Frontend: Layout,
  'Backend & Frameworks': Server,
  'Databases & Tools': Database,
};

export default function TechStack({ themeMode = 'dark' }: Props) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const isLight = themeMode === 'light';

  const filteredGroups = activeCategory
    ? TECH_STACK.filter((g) => g.category === activeCategory)
    : TECH_STACK;

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="space-y-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono uppercase tracking-widest ${
            isLight ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-white/5 border-white/10 text-slate-400'
          }`}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
            <span>TECH STACK</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Technologies I Work With
          </h2>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2 font-mono text-xs">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                activeCategory === null
                  ? isLight
                    ? 'bg-blue-600 border-blue-600 text-white font-bold'
                    : 'bg-white/15 border-white/30 text-white font-bold'
                  : isLight
                    ? 'bg-white border-blue-200 text-slate-700 hover:bg-blue-50'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
              }`}
            >
              All Technologies
            </button>
            {TECH_STACK.map((group) => (
              <button
                key={group.category}
                onClick={() => setActiveCategory(activeCategory === group.category ? null : group.category)}
                className={`px-3 py-1.5 rounded-xl border transition-all cursor-pointer ${
                  activeCategory === group.category
                    ? isLight
                      ? 'bg-blue-600 border-blue-600 text-white font-bold'
                      : 'bg-blue-500/20 border-blue-400/50 text-blue-300 font-bold'
                    : isLight
                      ? 'bg-white border-blue-200 text-slate-700 hover:bg-blue-50'
                      : 'bg-white/5 border-white/10 text-slate-400 hover:text-slate-200'
                }`}
              >
                {group.category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Liquid Glass Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredGroups.map((group, idx) => {
            const IconComp = categoryIcons[group.category] || Cpu;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`liquid-glass rounded-2xl p-6 border transition-all flex flex-col justify-between space-y-6 shadow-xl ${
                  isLight ? 'bg-white/90 border-blue-200' : 'border-white/10'
                }`}
              >
                <div>
                  {/* Category Title */}
                  <div className={`flex items-center gap-3 border-b pb-4 mb-5 ${
                    isLight ? 'border-blue-100' : 'border-white/10'
                  }`}>
                    <div className={`p-2.5 rounded-xl border ${
                      isLight ? 'bg-blue-50 border-blue-200 text-blue-600' : 'bg-white/5 border-white/10 text-blue-400'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg font-sans ${isLight ? 'text-slate-900' : 'text-white'}`}>{group.category}</h3>
                      <p className="text-[11px] font-mono text-slate-400">{group.skills.length} core technologies</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4 font-mono text-xs">
                    {group.skills.map((skill) => (
                      <div key={skill.name} className="space-y-1.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1.5">
                            <span className={`font-semibold ${isLight ? 'text-slate-800' : 'text-slate-200'}`}>{skill.name}</span>
                            {skill.highlight && (
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" title="Core Expertise" />
                            )}
                          </div>
                          <span className={isLight ? 'text-slate-500 text-[11px]' : 'text-slate-400 text-[11px]'}>{skill.experienceYears}</span>
                        </div>

                        {/* Level Progress Meter */}
                        <div className={`h-1.5 w-full rounded-full overflow-hidden border p-0.5 ${
                          isLight ? 'bg-blue-50 border-blue-200' : 'bg-black/40 border-white/5'
                        }`}>
                          <div
                            className="h-full rounded-full bg-gradient-to-r from-blue-600 to-sky-400 transition-all duration-1000"
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Tag */}
                <div className={`pt-2 border-t flex items-center justify-between text-[11px] font-mono ${
                  isLight ? 'border-blue-100 text-slate-500' : 'border-white/5 text-slate-500'
                }`}>
                  <span>PRODUCTION READY</span>
                  <span className="text-blue-500 font-semibold flex items-center gap-1">
                    <Check className="w-3 h-3" /> Verified
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
