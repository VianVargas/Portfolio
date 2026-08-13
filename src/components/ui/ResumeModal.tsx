'use client';

import { useRef } from 'react';
import {
  X,
  FileText,
  Printer,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/config/site';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: Props) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  if (!isOpen) return null;

  const handlePrint = () => {
    if (iframeRef.current) {
      iframeRef.current.contentWindow?.print();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-4xl max-h-[90vh] liquid-glass rounded-2xl border border-white/20 flex flex-col shadow-2xl overflow-hidden bg-slate-950 text-white">
        <div className="px-5 py-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-white">Vargas_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono transition-all active:scale-[0.97] cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer ml-2 transition-transform active:scale-[0.97]">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex-1 bg-[#080b11]">
          <iframe
            ref={iframeRef}
            src="/docs/Vargas_Resume.pdf"
            className="w-full h-full"
            style={{ minHeight: '70vh' }}
            title="Resume PDF"
          />
        </div>

        <div className="px-5 py-3 bg-slate-900/90 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>{PERSONAL_INFO.name} • Portfolio Resume</span>
          <button onClick={onClose} className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans cursor-pointer transition-transform active:scale-[0.97]">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
