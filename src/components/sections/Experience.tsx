"use client";

import { motion } from "motion/react";
import { GitCommit, Calendar, MapPin } from "lucide-react";
import type { ThemeMode } from "@/types";
import { EXPERIENCES } from "@/config/experience";

interface Props {
  themeMode?: ThemeMode;
}

export default function Experience({ themeMode = "dark" }: Props) {
  const isLight = themeMode === "light";

  return (
    <section
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3"
        >
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono ${
              isLight
                ? "bg-blue-50 border-blue-200 text-blue-800"
                : "bg-white/5 border-white/10 text-slate-400"
            }`}
          >
            <span>-experience</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Where I&apos;ve Worked
          </h2>
        </motion.div>

        {/* Git Timeline Tree Layout */}
        <div
          className={`relative pl-6 sm:pl-8 border-l-2 space-y-12 ${
            isLight ? "border-blue-200" : "border-white/10"
          }`}
        >
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-blue-500 bg-blue-500 shadow-[0_0_12px_#3b82f6] transition-transform group-hover:scale-125" />

              <div
                className={`liquid-glass rounded-2xl p-6 border transition-all shadow-xl space-y-4 ${
                  isLight
                    ? "bg-white/90 border-blue-200 text-slate-800"
                    : "border-white/10 text-slate-300"
                }`}
              >
                <div
                  className={`flex flex-wrap items-start justify-between gap-2 border-b pb-4 ${
                    isLight ? "border-blue-100" : "border-white/10"
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400 mb-1">
                      <span className="text-blue-500 font-semibold flex items-center gap-1">
                        <GitCommit className="w-3.5 h-3.5" />
                        commit {exp.commitHash}
                      </span>
                      <span>•</span>
                      <span className="text-sky-500 font-medium flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      {exp.status === "PRESENT" && (
                        <span className="px-2 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-600 dark:text-blue-300 border border-blue-500/30 font-bold ml-1">
                          ACTIVE
                        </span>
                      )}
                    </div>

                    <h3
                      className={`text-xl font-bold tracking-tight ${isLight ? "text-slate-900" : "text-white"}`}
                    >
                      {exp.role}
                    </h3>
                    <p
                      className={`font-medium text-sm ${isLight ? "text-blue-900" : "text-slate-300"}`}
                    >
                      {exp.company}
                    </p>
                  </div>

                  <div
                    className={`text-right font-mono text-xs flex items-center gap-1 px-3 py-1.5 rounded-lg border ${
                      isLight
                        ? "bg-blue-50 border-blue-200 text-blue-900"
                        : "bg-black/30 border-white/5 text-slate-400"
                    }`}
                  >
                    <MapPin className="w-3.5 h-3.5 text-blue-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                <ul
                  className={`space-y-2.5 text-sm leading-relaxed font-sans ${
                    isLight ? "text-slate-700" : "text-slate-300"
                  }`}
                >
                  {exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="text-blue-500 mt-1 select-none font-mono">
                        --
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div
                  className={`pt-2 flex flex-wrap gap-2 border-t ${
                    isLight ? "border-blue-100" : "border-white/5"
                  }`}
                >
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className={`px-2.5 py-1 rounded-md border text-xs font-mono transition-colors ${
                        isLight
                          ? "bg-blue-50 border-blue-200 text-blue-900"
                          : "bg-white/5 border-white/10 text-slate-300"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
