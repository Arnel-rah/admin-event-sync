import React from 'react';
import { Bookmark, Zap, Calendar, Users, Menu, Radio } from 'lucide-react';

interface NavbarProps {
  favoriteCount: number;
  onOpenFavorites: () => void;
}

export default function Navbar({ favoriteCount, onOpenFavorites }: NavbarProps) {
  return (
    // Utilisation d'un padding top pour détacher la navbar du bord (effet flottant)
    <div className="fixed top-0 left-0 w-full z-50 px-4 py-4 pointer-events-none">
      <nav className="max-w-7xl mx-auto h-16 pointer-events-auto
                    bg-slate-950/40 backdrop-blur-2xl
                    border border-white/10 rounded-2xl
                    shadow-[0_8px_32px_0_rgba(0,0,0,0.8)]
                    flex items-center justify-between px-6">

        {/* LOGO & BRAND */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="relative">
            {/* Effet de lueur derrière le logo */}
            <div className="absolute -inset-1 bg-cyan-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div className="relative w-10 h-10 bg-slate-900 border border-white/10 rounded-xl flex items-center justify-center">
              <Zap size={20} className="text-cyan-400 fill-cyan-400/20 group-hover:scale-110 transition-transform" />
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-black tracking-tighter text-white uppercase italic leading-none">
              EventSync
            </span>
            <span className="text-[8px] text-cyan-500 font-bold tracking-[0.3em] uppercase opacity-80">
              HEI 2026
            </span>
          </div>
        </div>

        {/* NAVIGATION CENTRALE */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-xl border border-white/5">
          <a href="#schedule" className="px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2">
            <Calendar size={14} className="text-cyan-500" /> Planning
          </a>
          <a href="#speakers" className="px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-white hover:bg-white/5 transition-all flex items-center gap-2">
            <Users size={14} className="text-cyan-500" /> Speakers
          </a>
          <div className="w-px h-4 bg-white/10 mx-1"></div>
          <a href="#live" className="px-4 py-2 rounded-lg text-[10px] font-black uppercase tracking-widest text-red-500 hover:bg-red-500/10 transition-all flex items-center gap-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </div>
            Direct
          </a>
        </div>

        {/* ACTIONS & STATUT */}
        <div className="flex items-center gap-4">
          {/* Bouton Favoris avec design néon */}
          <button
            onClick={onOpenFavorites}
            className="group relative p-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all"
          >
            <Bookmark size={20} className="text-slate-300 group-hover:text-cyan-400 transition-colors" />
            {favoriteCount > 0 && (
              <span className="absolute -top-1 -right-1 flex h-5 w-5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-cyan-500 text-[10px] text-black font-black items-center justify-center">
                  {favoriteCount}
                </span>
              </span>
            )}
          </button>

          {/* Indicateur Mode Invité (Public Access) */}
          <div className="hidden lg:flex items-center gap-3 pl-4 border-l border-white/10">
            <div className="flex flex-col items-end">
              <span className="text-[9px] font-black text-white uppercase tracking-tighter">Guest Mode</span>
              <span className="text-[7px] text-green-500 font-bold uppercase tracking-widest flex items-center gap-1">
                ● Connected
              </span>
            </div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-slate-800 to-slate-700 border border-white/10 flex items-center justify-center">
              <Users size={16} className="text-slate-400" />
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden p-2 text-white/70 hover:text-white">
            <Menu size={24} />
          </button>
        </div>
      </nav>
    </div>
  );
}
