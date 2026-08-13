"use client";

import { useState, useEffect } from "react";
import { motion, PanInfo } from "motion/react";
import Image from "next/image";
import { Play } from "lucide-react";
import type { ThemeMode, ProjectItem } from "@/types";
import { PROJECTS } from "@/config/projects";

interface Props {
  themeMode?: ThemeMode;
  onSelectProject: (p: ProjectItem) => void;
}

const iconPaths: Record<string, string> = {
  ecograde: "/assets/projects/icons/ecograde.png",
  splittr: "/assets/projects/icons/splittr.png",
  "underwater-xplorers": "/assets/projects/icons/xplorers.png",
  lifestream: "/assets/projects/icons/lifestream.png",
};

const SWIPE_THRESHOLD = 60;
const SWIPE_VELOCITY = 400;

export default function Projects({
  themeMode = "dark",
  onSelectProject,
}: Props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);

  const isLight = themeMode === "light";
  const isMobile = windowWidth < 640;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const paginate = (direction: number) => {
    setActiveIndex((prev) => {
      const next = prev + direction;
      if (next < 0) return PROJECTS.length - 1;
      if (next >= PROJECTS.length) return 0;
      return next;
    });
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > SWIPE_VELOCITY) {
      paginate(-1);
    } else if (
      info.offset.x < -SWIPE_THRESHOLD ||
      info.velocity.x < -SWIPE_VELOCITY
    ) {
      paginate(1);
    }
  };

  return (
    <section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto overflow-hidden"
    >
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-3 text-center"
        >
          <div
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-md border text-xs font-mono mx-auto ${
              isLight
                ? "bg-blue-50 border-blue-200 text-blue-800"
                : "bg-white/5 border-white/10 text-slate-400"
            }`}
          >
            <span>projects</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
              isLight ? "text-slate-900" : "text-white"
            }`}
          >
            Featured Showcase
          </h2>
        </motion.div>

        <div className="relative py-4 my-4 flex flex-col items-center justify-center min-h-[460px]">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.12}
            onDragEnd={handleDragEnd}
            className="relative w-full max-w-2xl h-[380px] sm:h-[400px] flex items-center justify-center cursor-grab active:cursor-grabbing touch-pan-y"
          >
            {PROJECTS.map((proj, idx) => {
              const total = PROJECTS.length;
              let offset = idx - activeIndex;
              if (offset < -1) offset += total;
              if (offset > 1) offset -= total;

              const isActive = offset === 0;
              const iconSrc = iconPaths[proj.id];

              return (
                <motion.div
                  key={proj.id}
                  animate={{
                    x: offset === -1 ? (isMobile ? "-30%" : "-28%") : offset === 1 ? (isMobile ? "30%" : "28%") : 0,
                    rotate: offset === -1 ? -6 : offset === 1 ? 6 : 0,
                    scale: isActive ? 1 : isMobile ? 0.9 : 0.88,
                    opacity: isActive ? 1 : isMobile ? 0.9 : 0.75,
                    zIndex: isActive ? 20 : 10,
                  }}
                  transition={{ type: "spring", bounce: 0.15, duration: 0.55 }}
                  onTap={() => setActiveIndex(idx)}
                  className={`absolute w-[80%] sm:w-[500px] rounded-[28px] p-6 sm:p-7 border ${
                    isLight
                      ? "bg-white border-slate-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] text-slate-800"
                      : "bg-slate-900/95 border-white/15 shadow-[0_25px_60px_rgba(0,0,0,0.6)] text-white backdrop-blur-xl"
                  }`}
                >
                  <div className="space-y-6">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-1 rounded-full bg-slate-950 text-slate-100 font-mono text-[11px] font-bold tracking-wider uppercase border border-slate-800 shadow-sm flex items-center gap-1.5">
                        <span className="text-blue-400">{"{"}</span>
                        <span>{proj.type}</span>
                        <span className="text-blue-400">{"}"}</span>
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
                        <h3
                          className={`text-xl sm:text-2xl font-bold font-mono tracking-tight ${
                            isLight ? "text-slate-900" : "text-white"
                          }`}
                        >
                          {proj.title}
                        </h3>
                        <p
                          className={`text-xs sm:text-sm leading-relaxed ${
                            isLight ? "text-slate-600" : "text-slate-300"
                          }`}
                        >
                          {proj.shortDesc}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelectProject(proj);
                        }}
                        whileTap={{ scale: 0.96 }}
                        transition={{
                          type: "spring",
                          stiffness: 450,
                          damping: 22,
                        }}
                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-slate-950 hover:bg-slate-900 text-white font-mono text-xs font-bold border border-slate-800 flex items-center justify-center gap-2 shadow-md cursor-pointer group"
                      >
                        <Play className="w-3.5 h-3.5 text-blue-400 fill-blue-400 group-hover:scale-110 transition-transform" />
                        <span>View Details</span>
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
