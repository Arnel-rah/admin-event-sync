import React, { useState } from 'react';
import {
  Search, Calendar, MapPin, Music, Users, PartyPopper,
  Gamepad2, Bookmark, Filter, ArrowUpRight, Play, Clock
} from 'lucide-react';
import SpeakerPublicPage from './components/SpeakerPublicPage';

// --- TYPES & MOCK DATA ---
interface Session {
  id: string;
  title: string;
  organizer: string;
  startTime: string;
  endTime: string;
  room: string;
  type: string;
  isFree: boolean;
  category: string;
}

const SESSIONS: Session[] = [
  { id: "1", title: "Civil Padura", organizer: "Civil Engineering Dept", startTime: "08:00", endTime: "10:00", room: "University of Moratuwa", type: "Musical Event", isFree: true, category: "Music" },
  { id: "2", title: "Devthon", organizer: "Lea Club UOM", startTime: "14:00", endTime: "16:00", room: "IT Lab 01", type: "Web Design", isFree: true, category: "Conference" },
  { id: "3", title: "CBE 4.0", organizer: "CSE Department", startTime: "20:00", endTime: "22:00", room: "Main Auditorium", type: "Coding Competition", isFree: true, category: "Game" },
];

// --- COMPOSANTS ---

export default function App() {
  // Simule l'heure actuelle pour le filtrage "Live" [cite: 132, 137]
  const currentTime = "21:00";

  const isLive = (start: string, end: string) => currentTime >= start && currentTime <= end;

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* SECTION HERO & NAV [Inspiration Design] */}
      <div className="bg-gradient-to-br from-fuchsia-500 via-purple-600 to-indigo-600 pb-32 pt-6 px-6 relative">
        <nav className="max-w-7xl mx-auto flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <div className="bg-white p-1.5 rounded-lg">
              <span className="text-purple-600 font-black text-xl">Uni</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Events</span>
          </div>
          <div className="hidden md:flex gap-8 text-white/90 text-sm font-medium">
            <button className="hover:text-white transition">Events</button>
            <button className="hover:text-white transition">About</button>
            <button className="bg-white/20 px-6 py-2 rounded-full border border-white/30 backdrop-blur-md">Login</button>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto relative text-center md:text-left py-12">
          <h1 className="text-white text-5xl md:text-7xl font-black mb-6 leading-tight">UNI Events</h1>
          <p className="text-white/80 text-lg mb-8 max-w-md">
            Plateforme dynamique d'engagement en temps réel pour vos conférences et workshops[cite: 12, 13].
          </p>
          <button className="bg-pink-500 text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform">
            En savoir plus
          </button>

          {/* BARRE DE RECHERCHE FLOTTANTE */}
          <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-4xl bg-white rounded-3xl shadow-2xl p-4 grid grid-cols-1 md:grid-cols-4 gap-4 items-center border border-slate-100 z-20">
            <SearchItem label="Date" val="Select Month" icon={<Calendar size={18}/>} />
            <SearchItem label="University" val="Select Venue" icon={<MapPin size={18}/>} />
            <SearchItem label="Event" val="Find Event" icon={<Filter size={18}/>} />
            <button className="bg-slate-900 text-white h-full rounded-2xl flex items-center justify-center gap-2 font-bold py-4 hover:bg-slate-800 transition">
              <Search size={18} /> Search
            </button>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-20">

        {/* SECTION SESSIONS LIVE [cite: 37, 111, 139] */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-3 w-3 rounded-full bg-red-500 animate-ping" />
            <h2 className="text-2xl font-black text-slate-900">Sessions en direct</h2>
          </div>
          <div className="grid gap-6">
            {SESSIONS.filter(s => isLive(s.startTime, s.endTime)).map(session => (
              <div key={session.id} className="bg-white/60 backdrop-blur-md border border-white rounded-[2.5rem] p-8 shadow-xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex gap-6 items-center">
                  <div className="bg-gradient-to-br from-red-500 to-pink-600 p-5 rounded-3xl text-white shadow-lg shadow-red-100">
                    <Play size={32} fill="currentColor" />
                  </div>
                  <div>
                    <span className="text-red-500 font-black text-[10px] uppercase tracking-[0.2em]">Live Now</span>
                    <h3 className="text-2xl font-black text-slate-900 mt-1">{session.title}</h3>
                    <div className="flex items-center gap-4 text-slate-500 text-sm font-medium mt-2">
                      <span className="flex items-center gap-1"><Clock size={14}/> {session.startTime} - {session.endTime}</span>
                      <span className="flex items-center gap-1"><MapPin size={14}/> {session.room}</span>
                    </div>
                  </div>
                </div>
                <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-purple-600 transition shadow-lg">
                  Participer au Q&A
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* GRILLE DES ÉVÉNEMENTS À VENIR [cite: 36, 113] */}
        <section>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-4xl font-black text-slate-900">Upcoming Events</h2>
            <button className="text-purple-600 font-bold hover:underline">See All Events</button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {SESSIONS.map(item => (
              <div key={item.id} className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl border border-slate-100 transition-all group">
                <div className="h-56 bg-slate-200 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  {item.isFree && <span className="absolute top-6 right-6 bg-red-500 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-widest z-10">Free Event</span>}
                </div>
                <div className="p-8">
                  <div className="flex gap-4 mb-6">
                    <div className="bg-purple-50 text-purple-600 px-4 py-2 rounded-2xl flex flex-col items-center justify-center min-w-[70px]">
                      <span className="text-[10px] font-black uppercase">APR</span>
                      <span className="text-2xl font-black">24</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-xl group-hover:text-purple-600 transition leading-tight">{item.title}</h4>
                      <p className="text-slate-400 text-xs mt-1">By {item.organizer}</p>
                    </div>
                  </div>
                  <div className="space-y-3 mb-8 text-slate-500 text-sm font-medium">
                    <div className="flex items-center gap-2"><ArrowUpRight size={16} className="text-purple-400"/> {item.type}</div>
                    <div className="flex items-center gap-2"><MapPin size={16} className="text-purple-400"/> {item.room}</div>
                  </div>
                  <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                    <button className="bg-slate-900 text-white text-xs font-bold px-8 py-3 rounded-xl hover:bg-purple-600 transition">View Details</button>
                    <button className="text-slate-300 hover:text-yellow-500 transition"><Bookmark size={22} /></button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <SpeakerPublicPage/>
      </main>

      <footer className="py-10 border-t border-slate-200 text-center text-slate-400 text-xs font-bold uppercase tracking-widest">
        EventSync &bull; Itinéraire localisé [cite: 200]
      </footer>
    </div>
  );
}

// --- SOUS-COMPOSANTS RÉUTILISABLES ---

function SearchItem({ label, val, icon }: { label: string, val: string, icon: React.ReactNode }) {
  return (
    <div className="px-4 border-r border-slate-100 last:border-0 text-left">
      <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{label}</label>
      <div className="flex items-center gap-2 text-sm font-bold text-slate-700">
        <span className="text-purple-500">{icon}</span>
        {val}
      </div>
    </div>
  );
}
