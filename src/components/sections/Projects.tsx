"use client";

import { motion } from "motion/react";
import { Folder, ArrowUpRight } from "lucide-react";
import type { ProjectItem, ThemeMode } from "@/types";
import { PROJECTS } from "@/config/projects";

interface Props {
  themeMode?: ThemeMode;
  onSelectProject?: (p: ProjectItem) => void;
}

export default function Projects({
  themeMode = "dark",
  onSelectProject,
}: Props) {
  const isLight = themeMode === "light";

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="space-y-10">
        {/* Section Header */}
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
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
            <span>projects</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Featured Work
          </h2>
        </motion.div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((proj, idx) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`liquid-glass rounded-2xl p-6 border transition-all flex flex-col justify-between space-y-6 shadow-xl group ${
                isLight
                  ? "bg-white/90 border-blue-200 hover:border-blue-400 hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]"
                  : "border-white/10 hover:border-blue-400/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)]"
              }`}
            >
              <div className="space-y-4">
                {/* Header Icon & Type Pill */}
                <div className="flex items-center justify-between">
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isLight
                        ? "bg-blue-50 border-blue-200 text-blue-600"
                        : "bg-white/5 border-white/10 text-blue-400"
                    }`}
                  >
                    <Folder className="w-5 h-5" />
                  </div>
                  <span
                    className={`px-2.5 py-1 rounded-full text-[11px] font-mono border ${
                      isLight
                        ? "bg-blue-50 border-blue-200 text-blue-900 font-medium"
                        : "bg-white/5 border-white/10 text-slate-300"
                    }`}
                  >
                    {proj.type}
                  </span>
                </div>

                {/* Title & Description */}
                <div>
                  <h3
                    className={`text-xl font-bold font-sans tracking-tight transition-colors ${
                      isLight
                        ? "text-slate-900 group-hover:text-blue-600"
                        : "text-white group-hover:text-blue-400"
                    }`}
                  >
                    {proj.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mt-2 font-sans font-normal ${
                      isLight ? "text-slate-600" : "text-slate-300"
                    }`}
                  >
                    {proj.shortDesc}
                  </p>
                </div>

                {/* Metrics Badges */}
                {proj.metrics && (
                  <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[10px]">
                    {proj.metrics.map((m, mIdx) => (
                      <div
                        key={mIdx}
                        className={`p-2 rounded-lg border text-center ${
                          isLight
                            ? "bg-blue-50/80 border-blue-200"
                            : "bg-black/40 border-white/5"
                        }`}
                      >
                        <span
                          className={
                            isLight
                              ? "text-slate-500 block"
                              : "text-slate-400 block"
                          }
                        >
                          {m.label}
                        </span>
                        <span className="text-blue-500 font-bold">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Bottom Actions & Tech Tags */}
              <div
                className={`space-y-4 pt-4 border-t ${isLight ? "border-blue-100" : "border-white/10"}`}
              >
                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-0.5 rounded border text-[11px] ${
                        isLight
                          ? "bg-blue-50 border-blue-200 text-blue-900"
                          : "bg-white/5 border-white/5 text-slate-300"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Details / GitHub Link Button */}
                {proj.githubUrl ? (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isLight
                        ? "bg-blue-50 hover:bg-blue-600 hover:text-white border-blue-200 text-blue-900 font-medium"
                        : "bg-white/5 hover:bg-white/15 border-white/10 text-white group-hover:border-blue-500/40"
                    }`}
                  >
                    <span>View on GitHub</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : onSelectProject ? (
                  <button
                    onClick={() => onSelectProject(proj)}
                    className={`w-full py-2.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-center gap-2 cursor-pointer ${
                      isLight
                        ? "bg-blue-50 hover:bg-blue-600 hover:text-white border-blue-200 text-blue-900 font-medium"
                        : "bg-white/5 hover:bg-white/15 border-white/10 text-white group-hover:border-blue-500/40"
                    }`}
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                ) : null}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
