"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FileText, ArrowRight } from "lucide-react";
import type { ThemeMode } from "@/types";

interface Props {
  themeMode: ThemeMode;
  onOpenContact: () => void;
}

export default function Hero({ themeMode, onOpenContact }: Props) {
  const isLight = themeMode === "light";

  return (
    <section
      id="about"
      className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      <div className="grid grid-cols-1 min-[1080px]:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="min-[1080px]:col-span-7 space-y-6"
        >
          <div className="flex justify-center min-[1080px]:justify-start">
            <div
              className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono ${
                isLight
                  ? "bg-blue-50 border-blue-200 text-blue-800"
                  : "bg-white/5 border-white/10 text-slate-400"
              }`}
            >
              <span>hello there, mabuhay!</span>
            </div>
          </div>

          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-sans text-center min-[1080px]:text-left ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Vian Andrei Vargas
          </h1>

          <div
            className={`space-y-4 text-base sm:text-lg leading-relaxed font-normal text-center min-[1080px]:text-left ${
              isLight ? "text-slate-700" : "text-slate-300"
            }`}
          >
            <p>
              An aspiring Software Engineer and a Computer Science graduate. I
              combine technical problem-solving with a strong focus on teamwork,
              clear communication, and adaptability. Always learning, always
              building, and ready for the next big challenge
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 justify-center min-[1080px]:justify-start">
            <motion.button
              onClick={onOpenContact}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              className="px-6 py-3 rounded-xl font-medium text-sm flex items-center gap-2 cursor-pointer bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-700 shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <motion.a
              href="/docs/Vargas_Resume.pdf"
              download
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 450, damping: 22 }}
              className={`px-6 py-3 rounded-xl border font-medium text-sm flex items-center gap-2 cursor-pointer backdrop-blur-md ${
                isLight
                  ? "bg-white hover:bg-blue-50 border-blue-200 text-blue-900 shadow-sm"
                  : "bg-white/5 hover:bg-white/10 border-white/15 text-slate-200"
              }`}
            >
              <FileText className="w-4 h-4 text-blue-500" />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="min-[1080px]:col-span-5"
        >
          <div
            className={`liquid-glass rounded-2xl border p-1 transition-all ${
              isLight
                ? "border-blue-200/80 shadow-[0_10px_30px_rgba(37,99,235,0.1)]"
                : "border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.15)]"
            }`}
          >
            <div
              className={`px-4 py-1 rounded-t-xl border-b flex items-center justify-between font-mono text-xs ${
                isLight
                  ? "bg-slate-100 border-blue-200 text-slate-700"
                  : "bg-slate-900/80 border-white/10 text-slate-400"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span
                  className={`ml-2 font-medium ${isLight ? "text-slate-900" : "text-slate-300"}`}
                >
                  vacv: ~/profile
                </span>
              </div>
            </div>

            <div
              className={`${
                isLight ? "bg-white/90" : "bg-black/50"
              } rounded-b-xl overflow-hidden`}
            >
              <Image
                src="/assets/myprofile.webp"
                alt="Vian Andrei Vargas"
                width={325}
                height={300}
                unoptimized
                className="h-auto mx-auto"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
