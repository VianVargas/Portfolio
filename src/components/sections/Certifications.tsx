"use client";

import { motion } from "motion/react";
import { Cloud, Code2, Coffee, CheckCircle2, Shield } from "lucide-react";
import type { ThemeMode } from "@/types";
import { CERTIFICATIONS } from "@/config/certifications";

interface Props {
  themeMode?: ThemeMode;
}

const iconMap: Record<string, React.ElementType> = {
  Cloud: Cloud,
  Code2: Code2,
  Coffee: Coffee,
};

export default function Certifications({ themeMode = "dark" }: Props) {
  const isLight = themeMode === "light";

  return (
    <section
      id="certs"
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
            <span>certifications</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Certifications &amp; Courses
          </h2>
        </motion.div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, idx) => {
            const IconComp = iconMap[cert.badgeIcon] || Shield;
            return (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`liquid-glass rounded-2xl p-6 border transition-all flex flex-col justify-between space-y-6 shadow-xl ${
                  isLight ? "bg-white/90 border-blue-200" : "border-white/10"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className={`p-3 rounded-xl border ${
                        isLight
                          ? "bg-blue-50 border-blue-200 text-blue-600"
                          : "bg-white/5 border-white/10 text-blue-400"
                      }`}
                    >
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-mono border ${
                        isLight
                          ? "bg-blue-50 border-blue-200 text-blue-900 font-medium"
                          : "bg-black/40 border-white/10 text-slate-400"
                      }`}
                    >
                      {cert.year}
                    </span>
                  </div>

                  <div>
                    <h3
                      className={`text-lg font-bold font-sans tracking-tight ${
                        isLight ? "text-slate-900" : "text-white"
                      }`}
                    >
                      {cert.title}
                    </h3>
                    <p
                      className={`text-xs font-mono mt-1 ${
                        isLight ? "text-blue-900 font-medium" : "text-slate-400"
                      }`}
                    >
                      {cert.issuer}
                    </p>
                  </div>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-0.5 rounded text-[10px] font-mono border ${
                          isLight
                            ? "bg-blue-50 border-blue-200 text-blue-900"
                            : "bg-white/5 text-slate-300 border-white/5"
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Footer Credential Verification */}
                <div
                  className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                    isLight
                      ? "border-blue-100 text-slate-500"
                      : "border-white/5 text-slate-500"
                  }`}
                >
                  <span>ID: {cert.credentialId}</span>
                  <span className="text-blue-500 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Verified
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
