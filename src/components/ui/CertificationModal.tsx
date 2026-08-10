'use client';

import { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import type { CertificationItem } from '@/types';

interface Props {
  cert: CertificationItem | null;
  onClose: () => void;
}

export default function CertificationModal({ cert, onClose }: Props) {
  useEffect(() => {
    if (!cert) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-lg max-h-[90vh] liquid-glass rounded-2xl border border-blue-500/30 flex flex-col shadow-2xl overflow-hidden bg-slate-950 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-5 py-4 bg-slate-900 border-b border-blue-500/20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-[10px] font-mono rounded bg-blue-500/20 text-blue-300 border border-blue-500/30 font-bold">
              {cert.year}
            </span>
            <h3 className="text-lg font-bold text-white font-sans">{cert.title}</h3>
          </div>

          <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-5 bg-slate-950/80">
          <p className={`text-xs font-mono text-slate-400`}>
            {cert.issuer}
          </p>

          <p className="text-slate-300 text-sm leading-relaxed">{cert.description}</p>

          <div className="flex flex-wrap gap-1.5 font-mono text-xs">
            {cert.skills.map((skill) => (
              <span
                key={skill}
                className="px-2.5 py-1 rounded border text-[11px] bg-white/5 border-white/10 text-slate-300"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {cert.link && (
          <div className="px-5 py-4 bg-slate-900 border-t border-blue-500/20">
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border font-mono text-xs transition-all flex items-center justify-center gap-2 cursor-pointer bg-blue-600 hover:bg-blue-500 text-white font-medium"
            >
              <span>View Credential</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
