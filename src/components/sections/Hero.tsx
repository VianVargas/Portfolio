'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowRight } from 'lucide-react';
import type { ThemeMode } from '@/types';
import { PERSONAL_INFO } from '@/config/site';

interface Props {
  themeMode: ThemeMode;
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export default function Hero({ themeMode, onOpenResume, onOpenContact }: Props) {
  const [activeTab, setActiveTab] = useState<'neofetch' | 'code'>('neofetch');
  const isLight = themeMode === 'light';

  return (
    <section id="about" className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono uppercase tracking-widest ${
              isLight ? 'bg-blue-50 border-blue-200 text-blue-800' : 'bg-white/5 border-white/10 text-slate-400'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
            <span>ABOUT</span>
          </div>

          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Who I Am
          </h1>

          <div className={`space-y-4 text-base sm:text-lg leading-relaxed font-normal ${
            isLight ? 'text-slate-700' : 'text-slate-300'
          }`}>
            <p>
              I&apos;m a <strong className={isLight ? 'text-blue-900 font-semibold' : 'text-white font-semibold'}>Software Engineer</strong> with a BS in Computer Science, specializing in Software Engineering. My academic foundation gave me a deep understanding of algorithms, systems design, and modern development practices.
            </p>
            <p>
              I focus on building reliable, maintainable software — from crafting intuitive frontends with <span className="text-blue-600 font-medium dark:text-blue-400">React</span> and <span className="text-blue-600 font-medium dark:text-blue-400">TypeScript</span>, to designing robust backends with <span className="text-sky-600 font-medium dark:text-sky-300">Java</span> and <span className="text-sky-600 font-medium dark:text-sky-300">Spring Boot</span>. I thrive in environments where I can collaborate with experienced mentors and contribute as an individual contributor on meaningful projects.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 pt-2 font-mono text-xs">
            <div className={`liquid-glass p-3 rounded-xl border ${isLight ? 'bg-white/80 border-blue-200' : 'border-white/10'}`}>
              <span className={`block text-[10px] uppercase ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Experience</span>
              <span className="text-lg font-bold text-blue-500">2+ Years</span>
            </div>
            <div className={`liquid-glass p-3 rounded-xl border ${isLight ? 'bg-white/80 border-blue-200' : 'border-white/10'}`}>
              <span className={`block text-[10px] uppercase ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Degree</span>
              <span className={`text-lg font-bold ${isLight ? 'text-slate-900' : 'text-white'}`}>BS in CS</span>
            </div>
            <div className={`liquid-glass p-3 rounded-xl border ${isLight ? 'bg-white/80 border-blue-200' : 'border-white/10'}`}>
              <span className={`block text-[10px] uppercase ${isLight ? 'text-slate-500' : 'text-slate-400'}`}>Core Stack</span>
              <span className={`text-lg font-bold ${isLight ? 'text-blue-900' : 'text-slate-200'}`}>Java / TS</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenContact}
              className="px-6 py-3 rounded-xl font-medium text-sm transition-all flex items-center gap-2 cursor-pointer bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenResume}
              className={`px-6 py-3 rounded-xl border font-medium text-sm transition-all flex items-center gap-2 cursor-pointer backdrop-blur-md ${
                isLight
                  ? 'bg-white hover:bg-blue-50 border-blue-200 text-blue-900 shadow-sm'
                  : 'bg-white/5 hover:bg-white/10 border-white/15 text-slate-200'
              }`}
            >
              <FileText className="w-4 h-4 text-blue-500" />
              <span>Download Resume</span>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5"
        >
          <div
            className={`liquid-glass rounded-2xl border p-1 transition-all ${
              isLight
                ? 'border-blue-200/80 shadow-[0_10px_30px_rgba(37,99,235,0.1)]'
                : 'border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]'
            }`}
          >
            <div
              className={`px-4 py-3 rounded-t-xl border-b flex items-center justify-between font-mono text-xs ${
                isLight ? 'bg-slate-100 border-blue-200 text-slate-700' : 'bg-slate-900/80 border-white/10 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className={`ml-2 font-medium ${isLight ? 'text-slate-900' : 'text-slate-300'}`}>vian@arch: ~/bio</span>
              </div>

              <div className={`flex items-center p-0.5 rounded-lg border ${isLight ? 'bg-white border-blue-200' : 'bg-black/40 border-white/10'}`}>
                <button
                  onClick={() => setActiveTab('neofetch')}
                  className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                    activeTab === 'neofetch'
                      ? isLight ? 'bg-blue-600 text-white font-bold' : 'bg-white/15 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  neofetch
                </button>
                <button
                  onClick={() => setActiveTab('code')}
                  className={`px-2 py-0.5 rounded text-[10px] transition-colors cursor-pointer ${
                    activeTab === 'code'
                      ? isLight ? 'bg-blue-600 text-white font-bold' : 'bg-white/15 text-white font-bold'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  spec.ts
                </button>
              </div>
            </div>

            <div className={`p-5 font-mono text-xs space-y-4 rounded-b-xl min-h-[320px] ${
              isLight ? 'bg-white/90 text-slate-800' : 'bg-black/50 text-slate-300'
            }`}>
              {activeTab === 'neofetch' ? (
                <div className="space-y-3">
                  <div className={`flex items-center gap-4 p-3 rounded-xl border ${isLight ? 'bg-blue-50/80 border-blue-200' : 'bg-white/5 border-white/10'}`}>
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-blue-900 border border-blue-400/30 flex items-center justify-center font-bold text-xl text-white shadow-inner">
                      VV
                    </div>
                    <div>
                      <h3 className={`font-bold text-sm ${isLight ? 'text-slate-900' : 'text-white'}`}>{PERSONAL_INFO.name}</h3>
                      <p className={isLight ? 'text-slate-600 text-[11px]' : 'text-slate-400 text-[11px]'}>{PERSONAL_INFO.role}</p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30">
                        Available for Opportunities
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-2">
                    <div className={`flex justify-between border-b pb-1 ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
                      <span className={isLight ? 'text-slate-500' : 'text-slate-500'}>OS:</span>
                      <span className="text-blue-500 font-semibold">{PERSONAL_INFO.neofetch.os}</span>
                    </div>
                    <div className={`flex justify-between border-b pb-1 ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
                      <span className={isLight ? 'text-slate-500' : 'text-slate-500'}>Degree:</span>
                      <span className={isLight ? 'text-slate-800' : 'text-slate-200'}>BS Computer Science</span>
                    </div>
                    <div className={`flex justify-between border-b pb-1 ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
                      <span className={isLight ? 'text-slate-500' : 'text-slate-500'}>Primary Backend:</span>
                      <span className="text-blue-600 dark:text-sky-300">Java &amp; Spring Boot</span>
                    </div>
                    <div className={`flex justify-between border-b pb-1 ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
                      <span className={isLight ? 'text-slate-500' : 'text-slate-500'}>Primary Frontend:</span>
                      <span className="text-blue-500">React &amp; TypeScript</span>
                    </div>
                    <div className={`flex justify-between border-b pb-1 ${isLight ? 'border-slate-200' : 'border-white/5'}`}>
                      <span className={isLight ? 'text-slate-500' : 'text-slate-500'}>Database Engine:</span>
                      <span className="text-indigo-600 dark:text-indigo-300">PostgreSQL</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className={isLight ? 'text-slate-500' : 'text-slate-500'}>Shell / WM:</span>
                      <span className="text-sky-600 dark:text-sky-300">zsh + Hyprland</span>
                    </div>
                  </div>

                  <div className={`pt-2 flex items-center justify-between text-[10px] border-t ${isLight ? 'border-slate-200 text-slate-500' : 'border-white/10 text-slate-500'}`}>
                    <span>BLUE PALETTE:</span>
                    <div className="flex gap-1.5">
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-900" />
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-700" />
                      <span className="w-3.5 h-3.5 rounded-full bg-blue-500" />
                      <span className="w-3.5 h-3.5 rounded-full bg-sky-400" />
                      <span className="w-3.5 h-3.5 rounded-full bg-indigo-500" />
                    </div>
                  </div>
                </div>
              ) : (
                <div className="leading-relaxed overflow-x-auto">
                  <p className="text-slate-500">{'//'} Vian Andrei Vargas Spec</p>
                  <p><span className="text-blue-600 dark:text-blue-400">interface</span> <span className="text-indigo-600 dark:text-indigo-300">Engineer</span> {'{'}</p>
                  <p className="pl-4"><span className="text-sky-600 dark:text-sky-300">name</span>: <span className="text-blue-600 dark:text-blue-400">&quot;{PERSONAL_INFO.name}&quot;</span>;</p>
                  <p className="pl-4"><span className="text-sky-600 dark:text-sky-300">degree</span>: <span className="text-blue-600 dark:text-blue-400">&quot;BS Computer Science&quot;</span>;</p>
                  <p className="pl-4"><span className="text-sky-600 dark:text-sky-300">specialization</span>: <span className="text-blue-600 dark:text-blue-400">&quot;Software Engineering&quot;</span>;</p>
                  <p className="pl-4"><span className="text-sky-600 dark:text-sky-300">skills</span>: <span className="text-indigo-600 dark:text-indigo-300">string[]</span>;</p>
                  <p className="pl-4"><span className="text-sky-600 dark:text-sky-300">isAvailableForHire</span>: <span className="text-blue-600 dark:text-blue-400">true</span>;</p>
                  <p>{'}'}</p>
                  <br />
                  <p><span className="text-blue-600 dark:text-blue-400">const</span> <span className="text-sky-600 dark:text-sky-300">vian</span>: <span className="text-indigo-600 dark:text-indigo-300">Engineer</span> = {'{'}</p>
                  <p className="pl-4">skills: [<span className="text-blue-600 dark:text-blue-400">&quot;Java&quot;</span>, <span className="text-blue-600 dark:text-blue-400">&quot;Spring Boot&quot;</span>, <span className="text-blue-600 dark:text-blue-400">&quot;React&quot;</span>, <span className="text-blue-600 dark:text-blue-400">&quot;TypeScript&quot;</span>, <span className="text-blue-600 dark:text-blue-400">&quot;PostgreSQL&quot;</span>]</p>
                  <p>{'}'};</p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
