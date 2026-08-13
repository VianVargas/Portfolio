'use client';

import { useState, useEffect } from 'react';
import {
  Search,
  User,
  Briefcase,
  Cpu,
  FolderGit2,
  Award,
  Mail,
  FileText,
  Sun,
  Moon,
  X,
} from 'lucide-react';
import type { ThemeMode, WorkspaceTab } from '@/types';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  setActiveTab: (tab: WorkspaceTab) => void;
  onOpenResume: () => void;
  onOpenContact: () => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
}

export default function CommandPalette({
  isOpen,
  onClose,
  setActiveTab,
  onOpenResume,
  onOpenContact,
  themeMode,
  setThemeMode,
}: Props) {
  const [query, setQuery] = useState('');
  const isLight = themeMode === 'light';

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      } else if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const actions = [
    { id: 'ws-about', title: 'Navigate to About / Bio', category: 'Workspace', icon: User, action: () => { setActiveTab('about'); onClose(); } },
    { id: 'ws-experience', title: "Navigate to Where I've Worked (Experience)", category: 'Workspace', icon: Briefcase, action: () => { setActiveTab('experience'); onClose(); } },
    { id: 'ws-tech', title: 'Navigate to Technologies I Work With', category: 'Workspace', icon: Cpu, action: () => { setActiveTab('tech'); onClose(); } },
    { id: 'ws-projects', title: 'Navigate to Featured Projects', category: 'Workspace', icon: FolderGit2, action: () => { setActiveTab('projects'); onClose(); } },
    { id: 'ws-certs', title: 'Navigate to Certifications & Courses', category: 'Workspace', icon: Award, action: () => { setActiveTab('certs'); onClose(); } },
    { id: 'ws-contact', title: 'Navigate to Contact & Get in Touch', category: 'Workspace', icon: Mail, action: () => { setActiveTab('contact'); onClose(); } },
    { id: 'cmd-resume', title: 'View / Export Formatted Resume PDF', category: 'System', icon: FileText, action: () => { onOpenResume(); onClose(); } },
    { id: 'cmd-hire', title: 'Send Direct Message / Contact Vian', category: 'Action', icon: Mail, action: () => { onOpenContact(); onClose(); } },
    { id: 'theme-light', title: 'Switch to Light Theme Mode', category: 'Theme', icon: Sun, action: () => { setThemeMode('light'); onClose(); } },
    { id: 'theme-dark', title: 'Switch to Dark Theme Mode', category: 'Theme', icon: Moon, action: () => { setThemeMode('dark'); onClose(); } },
  ];

  const filteredActions = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/60 backdrop-blur-md">
      <div
        className={`w-full max-w-xl liquid-glass rounded-2xl border overflow-hidden shadow-2xl ${
          isLight ? 'bg-white border-blue-200 text-slate-800' : 'bg-slate-900 border-blue-500/30 text-white'
        }`}
      >
        {/* Search Header */}
        <div className={`p-4 border-b flex items-center gap-3 ${isLight ? 'bg-blue-50/80 border-blue-200' : 'bg-slate-900/80 border-white/10'}`}>
          <Search className="w-5 h-5 text-blue-500 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to workspace..."
            className={`flex-1 bg-transparent outline-none font-mono text-sm ${isLight ? 'text-slate-900 placeholder-slate-400' : 'text-white placeholder-slate-400'}`}
            autoFocus
          />
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-blue-500 cursor-pointer transition-transform active:scale-[0.97]">
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Action List */}
        <div className={`max-h-80 overflow-y-auto p-2 space-y-1 ${isLight ? 'bg-slate-50/50' : 'bg-black/40'}`}>
          {filteredActions.length === 0 ? (
            <div className="p-6 text-center text-slate-400 font-mono text-xs">
              No matching commands or workspaces found.
            </div>
          ) : (
            filteredActions.map((item) => {
              const IconComp = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all active:scale-[0.97] text-left cursor-pointer group ${
                    isLight
                      ? 'hover:bg-blue-50 border-transparent hover:border-blue-200'
                      : 'hover:bg-white/10 border-transparent hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg border transition-colors ${
                        isLight
                          ? 'bg-blue-100/50 text-blue-600 border-blue-200 group-hover:bg-blue-600 group-hover:text-white'
                          : 'bg-white/5 text-slate-300 border-white/10 group-hover:bg-blue-500/20 group-hover:text-blue-300'
                      }`}
                    >
                      <IconComp className="w-4 h-4" />
                    </div>
                    <div>
                      <p className={`text-sm font-medium ${isLight ? 'text-slate-800 group-hover:text-blue-900' : 'text-slate-200 group-hover:text-white'}`}>
                        {item.title}
                      </p>
                      <p className="text-[11px] font-mono text-slate-400">{item.category}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-blue-500 group-hover:underline">Jump →</span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer */}
        <div className={`px-4 py-2.5 border-t flex items-center justify-between text-xs font-mono ${
          isLight ? 'bg-slate-100 border-blue-200 text-slate-600' : 'bg-slate-900/90 border-white/10 text-slate-400'
        }`}>
          <span>Navigation Shortcuts</span>
          <span>Press <kbd className={`px-1.5 py-0.5 rounded ${isLight ? 'bg-blue-200 text-blue-900' : 'bg-black text-blue-300'}`}>ESC</kbd> to exit</span>
        </div>
      </div>
    </div>
  );
}
