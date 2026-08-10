'use client';

import { useState } from 'react';
import {
  X,
  Copy,
  Check,
  FileText,
  Printer,
} from 'lucide-react';
import { PERSONAL_INFO } from '@/config/site';
import { EXPERIENCES } from '@/config/experience';
import { TECH_STACK } from '@/config/tech-stack';
import { CERTIFICATIONS } from '@/config/certifications';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const text = `
VIAN ANDREI VARGAS
${PERSONAL_INFO.role} | ${PERSONAL_INFO.education}
Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}

SUMMARY
${PERSONAL_INFO.bio}

EXPERIENCE
${EXPERIENCES.map((e) => `${e.role} @ ${e.company} (${e.period})\n- ${e.bullets.join('\n- ')}`).join('\n\n')}

TECH STACK
${TECH_STACK.map((g) => `${g.category}: ${g.skills.map((s) => s.name).join(', ')}`).join('\n')}

CERTIFICATIONS
${CERTIFICATIONS.map((c) => `${c.title} - ${c.issuer} (${c.year})`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md">
      <div className="w-full max-w-4xl max-h-[90vh] liquid-glass rounded-2xl border border-white/20 flex flex-col shadow-2xl overflow-hidden bg-slate-950 text-white">
        {/* Header Bar */}
        <div className="px-5 py-4 bg-slate-900/90 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-slate-300">
            <FileText className="w-4 h-4 text-amber-400" />
            <span className="font-bold text-white">Vian_Andrei_Vargas_Resume.pdf</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy Raw'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 cursor-pointer ml-2">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Resume Canvas */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 bg-[#080b11] text-slate-200 space-y-8 font-sans">
          {/* Header */}
          <div className="border-b border-white/10 pb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-white tracking-tight">{PERSONAL_INFO.name}</h1>
              <p className="text-cyan-400 font-semibold font-mono text-sm mt-1">{PERSONAL_INFO.role}</p>
              <p className="text-slate-400 text-xs font-mono mt-0.5">{PERSONAL_INFO.education}</p>
            </div>

            <div className="text-xs font-mono text-slate-300 space-y-1 bg-white/5 p-3 rounded-xl border border-white/10">
              <p>{PERSONAL_INFO.email}</p>
              <p>{PERSONAL_INFO.github}</p>
              <p>{PERSONAL_INFO.linkedin}</p>
            </div>
          </div>

          {/* Professional Bio */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">Professional Summary</h2>
            <p className="text-slate-300 text-sm leading-relaxed">{PERSONAL_INFO.bio}</p>
          </div>

          {/* Work Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">Work Experience</h2>
            <div className="space-y-6">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="space-y-2 border-l-2 border-cyan-500/40 pl-4">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3 className="font-bold text-white text-base">{exp.role} <span className="text-cyan-400">@ {exp.company}</span></h3>
                    <span className="text-xs font-mono text-slate-400">{exp.period}</span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1 text-slate-300 text-xs leading-relaxed">
                    {exp.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
                  </ul>
                  <div className="flex flex-wrap gap-1 pt-1 font-mono text-[10px]">
                    {exp.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-slate-300">{t}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono">
              {TECH_STACK.map((group) => (
                <div key={group.category} className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                  <p className="font-bold text-cyan-300">{group.category}</p>
                  <p className="text-slate-300">{group.skills.map((s) => s.name).join(', ')}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase text-slate-400 font-bold tracking-wider">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
              {CERTIFICATIONS.map((c) => (
                <div key={c.id} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-white">{c.title}</p>
                  <p className="text-slate-400 text-[11px]">{c.issuer} ({c.year})</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-5 py-3 bg-slate-900/90 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <span>{PERSONAL_INFO.name} • Portfolio Resume</span>
          <button onClick={onClose} className="px-4 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-sans cursor-pointer">
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
