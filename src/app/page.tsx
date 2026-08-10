'use client';

import { useState, useEffect } from 'react';
import type { ThemeMode, WorkspaceTab, ProjectItem } from '@/types';
import LiquidBackground from '@/components/ui/LiquidBackground';
import LinuxTopBar from '@/components/layout/LinuxTopBar';
import Hero from '@/components/sections/Hero';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Projects from '@/components/sections/Projects';
import Certifications from '@/components/sections/Certifications';
import Contact from '@/components/sections/Contact';
import CommandPalette from '@/components/ui/CommandPalette';
import ResumeModal from '@/components/ui/ResumeModal';
import DesktopWindowMode from '@/components/ui/DesktopWindowMode';
import { PERSONAL_INFO } from '@/config/site';

export default function Home() {
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [activeTab, setActiveTab] = useState<WorkspaceTab>('about');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [isDesktopMode, setIsDesktopMode] = useState(false);

  useEffect(() => {
    if (themeMode === 'light') {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  }, [themeMode]);

  const handleTabChange = (tab: WorkspaceTab) => {
    setActiveTab(tab);
    if (!isDesktopMode) {
      const el = document.getElementById(tab);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isLight = themeMode === 'light';

  return (
    <div
      className={`min-h-screen font-sans relative selection:bg-blue-500/30 selection:text-blue-200 ${
        isLight ? 'text-slate-800' : 'text-slate-200'
      }`}
    >
      {/* Liquid Glass Background */}
      <LiquidBackground themeMode={themeMode} />

      {/* Linux Top Bar / Panel */}
      <LinuxTopBar
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        isDesktopMode={isDesktopMode}
        setIsDesktopMode={setIsDesktopMode}
      />

      {/* Main View Mode Switch */}
      {isDesktopMode ? (
        <DesktopWindowMode
          themeMode={themeMode}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenContact={() => handleTabChange('contact')}
          onSelectProject={(p) => setSelectedProject(p)}
        />
      ) : (
        /* Scroll Mode */
        <main className="relative z-10 space-y-12 pb-24">
          <Hero
            themeMode={themeMode}
            onOpenResume={() => setIsResumeOpen(true)}
            onOpenContact={() => handleTabChange('contact')}
          />

          <Experience themeMode={themeMode} />

          <TechStack themeMode={themeMode} />

          <Projects
            themeMode={themeMode}
            onSelectProject={(p) => setSelectedProject(p)}
          />

          <Certifications themeMode={themeMode} />

          <Contact themeMode={themeMode} />
        </main>
      )}

      {/* Minimalist Linux Footer */}
      <footer
        className={`relative z-10 py-8 px-4 border-t text-center font-mono text-xs backdrop-blur-md ${
          isLight
            ? 'bg-slate-100/90 border-blue-200 text-slate-600'
            : 'bg-black/40 border-white/10 text-slate-500'
        }`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-blue-500">[VV]</span>
            <span>
              &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              GitHub
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-500 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>

      {/* Command Palette Overlay */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        setActiveTab={handleTabChange}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => handleTabChange('contact')}
        themeMode={themeMode}
        setThemeMode={setThemeMode}
      />

      {/* Formatted Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
