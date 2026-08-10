'use client';

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { ThemeMode, CertificationItem } from '@/types';
import { CERTIFICATIONS } from '@/config/certifications';

interface Props {
  themeMode?: ThemeMode;
  onSelectCert: (cert: CertificationItem) => void;
}

export default function Certifications({ themeMode = 'dark', onSelectCert }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(1024);

  const isLight = themeMode === 'light';
  const total = CERTIFICATIONS.length;

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const visibleCount = windowWidth < 768 ? 1 : 3;
  const maxIndex = Math.max(0, total - visibleCount);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  return (
    <section id="certs" className="py-16 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-lg border text-xs font-mono ${
            isLight
              ? 'bg-blue-50 border-blue-200 text-blue-900'
              : 'bg-white/5 border-white/10 text-slate-400'
          }`}>
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            <span>certifications</span>
          </div>

          <h2 className={`text-3xl sm:text-4xl font-bold tracking-tight font-sans ${
            isLight ? 'text-slate-900' : 'text-white'
          }`}>
            Certifications &amp; Courses
          </h2>
        </motion.div>

        <div className="relative pt-2 pb-2">
          <button
            onClick={handlePrev}
              className={`absolute left-0 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
                isLight
                  ? 'bg-white hover:bg-slate-100 border-slate-300 text-slate-800 shadow-md'
                  : 'bg-slate-900/80 hover:bg-slate-800 border-white/10 text-slate-300 hover:text-white hover:bg-white/10 shadow-lg'
              }`}
            aria-label="Previous certification"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="px-6 sm:px-8 overflow-hidden rounded-2xl">
            <motion.div
              className="flex gap-5"
              animate={{
                x: `calc(-${currentIndex} * (100% + 1.25rem) / ${visibleCount})`
              }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
            >
              {CERTIFICATIONS.map((cert) => (
                <div
                  key={cert.id}
                  className={`w-full md:w-[calc((100%-2.5rem)/3)] shrink-0 liquid-glass rounded-2xl p-6 border transition-all shadow-xl flex flex-col justify-between space-y-6 cursor-pointer ${
                    isLight
                      ? 'bg-white/90 border-blue-200 text-slate-800'
                      : 'border-white/10 text-slate-300'
                  }`}
                  onClick={() => onSelectCert(cert)}
                >
                  <div className="space-y-5">
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-mono ${
                      isLight
                        ? 'bg-slate-100 border border-slate-200 text-slate-700 font-medium'
                        : 'bg-white/5 border-white/10 text-slate-300'
                    }`}>
                      {cert.year}
                    </span>

                    <div className="space-y-1.5">
                      <h3 className={`text-xl font-bold font-sans tracking-tight leading-snug ${
                        isLight ? 'text-slate-900' : 'text-white'
                      }`}>
                        {cert.title}
                      </h3>
                      <p className={`text-xs font-mono ${
                        isLight ? 'text-slate-500' : 'text-slate-400'
                      }`}>
                        {cert.issuer}
                      </p>
                    </div>
                  </div>

                  <div>
                    <span
                      className={`px-4 py-2 rounded-xl border text-xs font-mono transition-all flex items-center gap-1.5 ${
                        isLight
                          ? 'border-blue-300 bg-blue-50 text-blue-800 font-medium'
                          : 'border-white/10 bg-white/5 text-slate-300 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <span>View Credential</span>
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          <button
            onClick={handleNext}
            className={`absolute right-0 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full border flex items-center justify-center transition-all cursor-pointer ${
              isLight
                ? 'bg-white hover:bg-slate-100 border-blue-400 text-slate-800 shadow-md ring-2 ring-blue-200'
                : 'bg-slate-900/80 hover:bg-slate-800 border-white/10 text-slate-300 hover:text-white hover:bg-white/10 shadow-lg'
            }`}
            aria-label="Next certification"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        <div className="flex items-center justify-center gap-2 pt-2 font-mono text-xs">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIdx) => (
            <button
              key={dotIdx}
              onClick={() => setCurrentIndex(dotIdx)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                dotIdx === currentIndex
                  ? 'w-6 bg-blue-500 shadow-[0_0_8px_#3b82f6]'
                  : isLight
                    ? 'w-2 bg-slate-300 hover:bg-slate-400'
                    : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Go to slide ${dotIdx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
