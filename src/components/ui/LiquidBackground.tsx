'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import type { ThemeMode } from '@/types';

interface Props {
  themeMode: ThemeMode;
}

export default function LiquidBackground({ themeMode }: Props) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const isLight = themeMode === 'light';

  const glowConfig = isLight
    ? {
        primary: 'rgba(59, 130, 246, 0.25)',
        secondary: 'rgba(147, 197, 253, 0.35)',
        tertiary: 'rgba(96, 165, 250, 0.25)',
      }
    : {
        primary: 'rgba(59, 130, 246, 0.22)',
        secondary: 'rgba(30, 58, 138, 0.45)',
        tertiary: 'rgba(14, 116, 144, 0.3)',
      };

  return (
    <div
      className={`fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-500 ${
        isLight ? 'bg-[#f0f5ff]' : 'bg-[#030712]'
      }`}
    >
      {/* Radial Blue Ambient Backdrop */}
      <div
        className="absolute inset-0 z-0 transition-opacity duration-500"
        style={{
          background: isLight
            ? 'radial-gradient(circle at 20% 20%, #dbeafe 0%, transparent 50%), radial-gradient(circle at 80% 80%, #eff6ff 0%, transparent 50%)'
            : 'radial-gradient(circle at 20% 30%, #1e3a8a 0%, transparent 45%), radial-gradient(circle at 80% 70%, #0f172a 0%, transparent 45%)',
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className={`absolute inset-0 bg-grid-pattern z-0 ${isLight ? 'opacity-40' : 'opacity-25'}`} />

      {/* Floating Fluid Blobs */}
      <motion.div
        animate={{ x: [0, 80, -60, 0], y: [0, -100, 40, 0], scale: [1, 1.2, 0.9, 1] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full blur-[90px] z-0 ${
          isLight ? 'opacity-60' : 'opacity-30'
        }`}
        style={{ background: glowConfig.primary }}
      />

      <motion.div
        animate={{ x: [0, -100, 80, 0], y: [0, 90, -70, 0], scale: [1, 1.15, 0.85, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full blur-[90px] z-0 ${
          isLight ? 'opacity-50' : 'opacity-30'
        }`}
        style={{ background: glowConfig.secondary }}
      />

      <motion.div
        animate={{ x: [0, 70, -90, 0], y: [0, 110, -50, 0], scale: [1, 1.25, 0.95, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
        className={`absolute -bottom-40 left-1/4 w-[650px] h-[650px] rounded-full blur-[110px] z-0 ${
          isLight ? 'opacity-50' : 'opacity-25'
        }`}
        style={{ background: glowConfig.tertiary }}
      />

      {/* Interactive Cursor Fluid Light Follower */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[90px] transition-transform duration-300 ease-out z-0 opacity-40"
        style={{
          left: mousePos.x - 200,
          top: mousePos.y - 200,
          background: `radial-gradient(circle, ${glowConfig.primary} 0%, transparent 70%)`,
        }}
      />
    </div>
  );
}
