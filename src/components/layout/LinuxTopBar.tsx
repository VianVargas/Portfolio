"use client";

import { useMemo } from "react";
import Image from "next/image";
import { Search, Sun, Moon, LayoutGrid, FileText } from "lucide-react";
import type { ThemeMode, WorkspaceTab } from "@/types";

interface Props {
  activeTab: WorkspaceTab;
  setActiveTab: (tab: WorkspaceTab) => void;
  themeMode: ThemeMode;
  setThemeMode: (mode: ThemeMode) => void;
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
  isDesktopMode: boolean;
  setIsDesktopMode: (val: boolean) => void;
}

const workspaceMap: { id: WorkspaceTab; label: string; num: string }[] = [
  { id: "about", label: "home", num: "1" },
  { id: "projects", label: "proj", num: "2" },
  { id: "experience", label: "exp", num: "3" },
  { id: "tech", label: "stack", num: "4" },
  { id: "certs", label: "certs", num: "5" },
  { id: "contact", label: "contact", num: "6" },
];

export default function LinuxTopBar({
  activeTab,
  setActiveTab,
  themeMode,
  setThemeMode,
  onOpenCommandPalette,
  onOpenResume,
  isDesktopMode,
  setIsDesktopMode,
}: Props) {
  const isLight = themeMode === "light";

  const debouncedSetTheme = useMemo(() => {
    let timer: ReturnType<typeof setTimeout>;
    return (mode: ThemeMode) => {
      clearTimeout(timer);
      timer = setTimeout(() => setThemeMode(mode), 50);
    };
  }, [setThemeMode]);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-3 py-2">
      <div
        className={`liquid-glass rounded-xl px-3 py-2 flex items-center justify-between gap-2 text-xs font-mono shadow-2xl transition-all duration-300 ${
          isLight
            ? "bg-white/80 border-blue-200/80 text-slate-800"
            : "bg-slate-950/80 border-blue-500/20 text-slate-200"
        }`}
      >
        {/* Left Section: Branding & Workspaces */}
        <div className="flex items-center gap-3 overflow-x-auto no-scrollbar">
          {/* Logo Badge */}
          <div
            className={`flex items-center gap-2 px-2.5 py-1 rounded-lg border ${
              isLight
                ? "bg-blue-50 border-blue-200 text-blue-900"
                : "bg-white/5 border-white/10 text-white"
            }`}
          >
            <Image
              src={isLight ? "/assets/mylogo-dark.png" : "/assets/mylogo-light.png"}
              alt="Logo"
              width={20}
              height={20}
              unoptimized
              className="h-5 w-auto"
            />
            <span
              className={`text-[10px] hidden sm:inline ${isLight ? "text-blue-600" : "text-slate-400"}`}
            >
              vacv
            </span>
          </div>

          {/* Workspaces Switcher */}
          <div
            className={`flex items-center gap-1 p-1 rounded-lg border ${
              isLight
                ? "bg-slate-100 border-slate-200"
                : "bg-black/30 border-white/5"
            }`}
          >
            {workspaceMap.map((ws) => {
              const isActive = activeTab === ws.id;
              return (
                <button
                  key={ws.id}
                  onClick={() => setActiveTab(ws.id)}
                  className={`px-2 py-1 rounded-md transition-all duration-200 flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? isLight
                        ? "bg-blue-600 text-white font-semibold shadow-sm"
                        : "border border-blue-500/50 bg-blue-500/20 text-blue-300 font-semibold shadow-[0_0_12px_rgba(59,130,246,0.25)]"
                      : isLight
                        ? "text-slate-600 hover:text-slate-900 hover:bg-slate-200/60"
                        : "text-slate-400 hover:text-slate-200 hover:bg-white/5"
                  }`}
                  title={`Go to ${ws.label}`}
                >
                  <span className="text-[10px] opacity-60">[{ws.num}]</span>
                  <span className="hidden sm:inline">{ws.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Section: Mode Switch, Resume, Theme Toggle, Quick Menu */}
        <div className="flex items-center gap-2">
          {/* Mode Switcher: Desktop Windows vs Scroll */}
          <button
            onClick={() => setIsDesktopMode(!isDesktopMode)}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer hidden md:flex items-center ${
              isDesktopMode
                ? "bg-blue-600 text-white border-blue-500 shadow-sm"
                : isLight
                  ? "bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200"
                  : "bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10"
            }`}
            title={
              isDesktopMode
                ? "Switch to Scroll Page View"
                : "Switch to Linux Desktop Windows View"
            }
          >
            <LayoutGrid className="w-3.5 h-3.5" />
          </button>

          {/* Resume Modal Launcher */}
          <button
            onClick={onOpenResume}
            className={`p-1.5 rounded-lg border transition-all cursor-pointer flex items-center gap-1 ${
              isLight
                ? "bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-900"
                : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
            }`}
            title="View Formatted Resume"
          >
            <FileText className="w-3.5 h-3.5 text-blue-500" />
            <span className="text-[11px] font-mono hidden sm:inline">
              Resume
            </span>
          </button>

          {/* Light / Dark Mode Toggle Button */}
          <button
            onClick={() => debouncedSetTheme(isLight ? "dark" : "light")}
            className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg border transition-all cursor-pointer font-medium ${
              isLight
                ? "bg-amber-100/80 hover:bg-amber-200/80 border-amber-300 text-amber-900 shadow-sm"
                : "bg-blue-950/80 hover:bg-blue-900/80 border-blue-500/40 text-blue-300 shadow-[0_0_12px_rgba(59,130,246,0.3)]"
            }`}
            title={`Switch to ${isLight ? "Dark" : "Light"} Mode`}
          >
            {isLight ? (
              <>
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span className="text-[11px] hidden sm:inline font-mono">
                  Light
                </span>
              </>
            ) : (
              <>
                <Moon className="w-3.5 h-3.5 text-blue-400" />
                <span className="text-[11px] hidden sm:inline font-mono">
                  Dark
                </span>
              </>
            )}
          </button>

          {/* Quick Menu Launcher */}
          <button
            onClick={onOpenCommandPalette}
            className={`flex items-center gap-2 px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
              isLight
                ? "bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-900"
                : "bg-white/5 hover:bg-white/10 border-white/10 text-slate-300 hover:text-white"
            }`}
            title="Open Quick Command Menu (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-blue-500" />
            <span className="font-medium">Quick Menu</span>
          </button>
        </div>
      </div>
    </header>
  );
}
