'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Image from 'next/image';
import { X, ArrowUpRight } from 'lucide-react';
import type { ProjectItem } from '@/types';

interface Props {
  project: ProjectItem | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="project-modal-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            key="project-modal-panel"
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ type: 'spring', bounce: 0.12, duration: 0.45 }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl max-h-[90vh] liquid-glass rounded-2xl border border-blue-500/30 flex flex-col shadow-2xl overflow-hidden bg-slate-950 text-white"
          >
            <div className="px-5 py-4 bg-slate-900 border-b border-blue-500/20 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
                  {project.type}
                </span>
                <h3 className="text-lg font-bold text-white font-sans">{project.title}</h3>
              </div>

              <motion.button
                onClick={onClose}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 450, damping: 22 }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </motion.button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950/80">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={394}
                  unoptimized
                  className="w-full h-auto rounded-xl border border-white/10"
                />
              )}

              <p className="text-slate-300 text-sm leading-relaxed">{project.fullDesc}</p>
            </div>

            <div className="px-5 py-4 bg-slate-900 border-t border-blue-500/20 space-y-3">
              <div className="flex flex-wrap gap-1.5 font-mono text-xs">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded border text-[11px] bg-white/5 border-white/10 text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.githubUrl && (
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 450, damping: 22 }}
                  className="w-full py-2.5 rounded-xl border font-mono text-xs transition-colors flex items-center justify-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white font-medium"
                >
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </motion.a>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
