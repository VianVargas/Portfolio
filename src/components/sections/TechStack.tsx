"use client";

import { motion } from "motion/react";
import { Layout, Database, Braces, Wrench, Cpu } from "lucide-react";
import type { ThemeMode } from "@/types";
import { TECH_STACK } from "@/config/tech-stack";

interface Props {
  themeMode?: ThemeMode;
}

const categoryIcons: Record<string, React.ElementType> = {
  "Tech Stack": Braces,
  Database: Database,
  Frameworks: Layout,
  "Dev Tools": Wrench,
};

export default function TechStack({ themeMode = "dark" }: Props) {
  const isLight = themeMode === "light";

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
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
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
            <span>tech stack</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_STACK.map((group, idx) => {
            const IconComp = categoryIcons[group.category] || Cpu;
            return (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`liquid-glass rounded-2xl p-6 border transition-all shadow-xl ${
                  isLight ? "bg-white/90 border-blue-200" : "border-white/10"
                }`}
              >
                <div
                  className={`flex items-center gap-3 border-b pb-4 mb-5 ${
                    isLight ? "border-blue-100" : "border-white/10"
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-xl border ${
                      isLight
                        ? "bg-blue-50 border-blue-200 text-blue-600"
                        : "bg-white/5 border-white/10 text-blue-400"
                    }`}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3
                      className={`font-bold text-lg font-sans ${isLight ? "text-slate-900" : "text-white"}`}
                    >
                      {group.category}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                  {group.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className={`px-2.5 py-1 rounded-md border ${
                        isLight
                          ? "bg-blue-50 border-blue-200 text-blue-900"
                          : "bg-white/5 border-white/10 text-slate-300"
                      }`}
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
