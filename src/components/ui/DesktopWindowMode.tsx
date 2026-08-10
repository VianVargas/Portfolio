'use client';

import { useState } from 'react';
import { motion } from 'motion/react';
import {
  User,
  Briefcase,
  Cpu,
  FolderGit2,
  Award,
  Mail,
  X,
  Minus,
  FileText,
} from 'lucide-react';
import type { ThemeMode, WorkspaceTab, FloatingWindow, ProjectItem, CertificationItem } from '@/types';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';

interface Props {
  themeMode: ThemeMode;
  onOpenResume: () => void;
  onOpenContact: () => void;
  onSelectProject: (p: ProjectItem) => void;
  onSelectCert: (cert: CertificationItem) => void;
}

const initialWindows: FloatingWindow[] = [
  {
    id: 'about',
    title: 'About / Bio - Vian Andrei Vargas',
    icon: 'User',
    isOpen: true,
    isMinimized: false,
    position: { x: 40, y: 80 },
    size: { width: 780, height: 500 },
    zIndex: 10,
  },
  {
    id: 'experience',
    title: "Where I've Worked (Experience.sh)",
    icon: 'Briefcase',
    isOpen: true,
    isMinimized: false,
    position: { x: 120, y: 140 },
    size: { width: 750, height: 480 },
    zIndex: 9,
  },
  {
    id: 'projects',
    title: 'Featured Work (Projects.app)',
    icon: 'FolderGit2',
    isOpen: false,
    isMinimized: false,
    position: { x: 180, y: 120 },
    size: { width: 800, height: 520 },
    zIndex: 8,
  },
];

export default function DesktopWindowMode({
  themeMode,
  onOpenResume,
  onOpenContact,
  onSelectProject,
  onSelectCert,
}: Props) {
  const [windows, setWindows] = useState<FloatingWindow[]>(initialWindows);
  const [maxZIndex, setMaxZIndex] = useState(20);
  const isLight = themeMode === 'light';

  const bringToFront = (id: string) => {
    const nextZ = maxZIndex + 1;
    setMaxZIndex(nextZ);
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, zIndex: nextZ, isMinimized: false } : w))
    );
  };

  const toggleWindowOpen = (id: WorkspaceTab) => {
    setWindows((prev) => {
      const exists = prev.find((w) => w.id === id);
      if (exists) {
        return prev.map((w) =>
          w.id === id ? { ...w, isOpen: !w.isOpen, isMinimized: false, zIndex: maxZIndex + 1 } : w
        );
      }
      return [
        ...prev,
        {
          id,
          title: `Workspace - ${id}`,
          icon: 'FolderGit2',
          isOpen: true,
          isMinimized: false,
          position: { x: 80, y: 100 },
          size: { width: 750, height: 480 },
          zIndex: maxZIndex + 1,
        },
      ];
    });
    setMaxZIndex((z) => z + 1);
  };

  const handleClose = (id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isOpen: false } : w)));
  };

  const handleMinimize = (id: string) => {
    setWindows((prev) => prev.map((w) => (w.id === id ? { ...w, isMinimized: true } : w)));
  };

  const desktopApps: { id: WorkspaceTab; label: string; icon: React.ElementType }[] = [
    { id: 'about', label: 'Who I Am', icon: User },
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'tech', label: 'Tech Stack', icon: Cpu },
    { id: 'projects', label: 'Projects', icon: FolderGit2 },
    { id: 'certs', label: 'Certifications', icon: Award },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const renderWindowContent = (id: string) => {
    switch (id) {
      case 'about':
        return <Hero themeMode={themeMode} onOpenResume={onOpenResume} onOpenContact={onOpenContact} />;
      case 'experience':
        return <Experience themeMode={themeMode} />;
      case 'tech':
        return <TechStack themeMode={themeMode} />;
      case 'projects':
        return <Projects themeMode={themeMode} onSelectProject={onSelectProject} />;
      case 'certs':
        return <Certifications themeMode={themeMode} onSelectCert={onSelectCert} />;
      case 'contact':
        return <Contact themeMode={themeMode} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative w-full min-h-screen pt-16 pb-20 overflow-hidden">
      {/* Desktop Grid Icons Area */}
      <div className="p-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 max-w-4xl z-10 relative mx-auto">
        {desktopApps.map((app) => {
          const IconComp = app.icon;
          const win = windows.find((w) => w.id === app.id);
          const isOpen = win?.isOpen && !win?.isMinimized;
          return (
            <button
              key={app.id}
              onClick={() => toggleWindowOpen(app.id)}
              className={`flex flex-col items-center gap-2 p-3 rounded-2xl transition-all group cursor-pointer border border-transparent ${
                isLight ? 'hover:bg-blue-100/50 hover:border-blue-200' : 'hover:bg-white/10 hover:border-white/10'
              }`}
            >
              <div
                className={`p-4 rounded-2xl liquid-glass border group-hover:scale-110 transition-transform shadow-xl ${
                  isOpen
                    ? 'text-blue-500 border-blue-400/50 shadow-[0_0_20px_rgba(59,130,246,0.3)]'
                    : isLight
                      ? 'text-slate-700 border-blue-200'
                      : 'text-slate-300 border-white/15'
                }`}
              >
                <IconComp className="w-7 h-7" />
              </div>
              <span
                className={`text-xs font-mono font-medium drop-shadow ${
                  isLight ? 'text-slate-800 group-hover:text-blue-900' : 'text-slate-300 group-hover:text-white'
                }`}
              >
                {app.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Render Floating Liquid Glass Windows */}
      {windows.map((win) => {
        if (!win.isOpen || win.isMinimized) return null;
        return (
          <motion.div
            key={win.id}
            drag
            dragMomentum={false}
            onMouseDown={() => bringToFront(win.id)}
            style={{
              zIndex: win.zIndex,
              left: win.position.x,
              top: win.position.y,
            }}
            className={`absolute w-[90vw] sm:w-[700px] md:w-[780px] max-h-[80vh] liquid-glass rounded-2xl border flex flex-col shadow-2xl overflow-hidden ${
              isLight ? 'bg-white border-blue-200' : 'border-white/20'
            }`}
          >
            {/* Title Bar */}
            <div
              className={`px-4 py-3 border-b flex items-center justify-between cursor-move select-none ${
                isLight ? 'bg-slate-100 border-blue-200' : 'bg-slate-900/90 border-white/10'
              }`}
            >
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleClose(win.id)}
                  className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors cursor-pointer"
                  title="Close"
                />
                <button
                  onClick={() => handleMinimize(win.id)}
                  className="w-3 h-3 rounded-full bg-amber-500 hover:bg-amber-600 transition-colors cursor-pointer"
                  title="Minimize"
                />
                <button className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors cursor-pointer" title="Maximize" />
                <span className={`ml-3 text-xs font-mono font-semibold truncate ${isLight ? 'text-slate-900' : 'text-slate-300'}`}>
                  {win.title}
                </span>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={() => handleMinimize(win.id)}
                  className="p-1 rounded text-slate-400 hover:text-blue-500 cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => handleClose(win.id)}
                  className="p-1 rounded text-slate-400 hover:text-blue-500 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Window Content */}
            <div className={`flex-1 overflow-y-auto p-4 ${isLight ? 'bg-white/90' : 'bg-black/40'}`}>
              {renderWindowContent(win.id)}
            </div>
          </motion.div>
        );
      })}

      {/* Bottom Linux Desktop Dock */}
      <div className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40">
        <div
          className={`liquid-glass rounded-2xl px-4 py-2 border flex items-center gap-3 shadow-2xl backdrop-blur-xl ${
            isLight ? 'bg-white/90 border-blue-200' : 'border-white/15'
          }`}
        >
          {desktopApps.map((app) => {
            const IconComp = app.icon;
            const win = windows.find((w) => w.id === app.id);
            const isOpen = win?.isOpen && !win?.isMinimized;
            return (
              <button
                key={app.id}
                onClick={() => toggleWindowOpen(app.id)}
                className={`p-2.5 rounded-xl transition-all cursor-pointer relative ${
                  isOpen
                    ? 'bg-blue-500/20 text-blue-500 border border-blue-500/40'
                    : isLight
                      ? 'bg-slate-100 hover:bg-blue-50 text-slate-600 hover:text-blue-700 border border-slate-200'
                      : 'bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white border border-white/5'
                }`}
                title={app.label}
              >
                <IconComp className="w-5 h-5" />
                {isOpen && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_6px_#3b82f6]" />
                )}
              </button>
            );
          })}

          <div className={`w-px h-6 mx-1 ${isLight ? 'bg-slate-200' : 'bg-white/10'}`} />

          <button
            onClick={onOpenResume}
            className={`p-2.5 rounded-xl border cursor-pointer ${
              isLight
                ? 'bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100'
                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
            }`}
            title="Resume PDF"
          >
            <FileText className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
