import React, { useState } from 'react';
import { Star, MessageSquare, Users, MapPin } from 'lucide-react';

// Types basés sur tes entités (Spec 3.2 & 3.3)
interface Session {
  id: string;
  title: string;
  speaker: string;
  room: string;
  time: string;
  isLive: boolean;
}

const SESSIONS_DATA: Session[] = [
  { id: '1', title: "Architecture Cloud-Native", speaker: "Jamian Borfendan", room: "Amphi A", time: "10:00", isLive: true },
  { id: '2', title: "Smart Contracts Intro", speaker: "Daritn Contraco", room: "Lab 404", time: "10:00", isLive: false },
  { id: '3', title: "UI/UX Futuriste", speaker: "Sarah Design", room: "Amphi A", time: "11:00", isLive: false },
];

export default function PlanningSection() {
  const [activeRoom, setActiveRoom] = useState('Toutes les salles');

  // Filtrage par salle (Spec 4.7)
  const filteredSessions = activeRoom === 'Toutes les salles'
    ? SESSIONS_DATA
    : SESSIONS_DATA.filter(s => s.room === activeRoom);

  return (
    <section className="py-20 bg-[#020617] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header avec Filtres (Spec 3.3) */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-4xl font-black text-white uppercase italic tracking-tighter mb-2">
              Time<span className="text-cyan-500">Table</span>
            </h2>
            <div className="h-1 w-20 bg-cyan-500 rounded-full" />
          </div>

          <div className="flex bg-slate-900/80 p-1.5 rounded-2xl border border-white/10 backdrop-blur-md">
            {['Toutes les salles', 'Amphi A', 'Lab 404'].map((room) => (
              <button
                key={room}
                onClick={() => setActiveRoom(room)}
                className={`px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all duration-300 ${
                  activeRoom === room ? 'bg-cyan-600 text-white shadow-lg shadow-cyan-500/20' : 'text-slate-500 hover:text-slate-300'
                }`}
              >
                {room}
              </button>
            ))}
          </div>
        </div>

        {/* Liste Chronologique (Spec 4.2) */}
        <div className="space-y-4">
          {filteredSessions.map((session) => (
            <div key={session.id} className="group relative">
              {/* Ligne de temps visuelle */}
              <div className="absolute left-[72px] top-0 bottom-0 w-px bg-slate-800 group-last:h-0" />

              <div className="flex gap-8 items-start">
                {/* Heure (Spec 3.2) */}
                <div className="w-20 pt-1 shrink-0">
                  <span className="text-xl font-black text-slate-500 group-hover:text-cyan-500 transition-colors">
                    {session.time}
                  </span>
                </div>

                {/* Card (Spec 4.4) */}
                <div className={`flex-1 p-6 rounded-3xl border transition-all duration-500 ${
                  session.isLive
                  ? 'bg-cyan-500/5 border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.1)]'
                  : 'bg-slate-900/20 border-white/5 hover:border-white/10'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <span className="flex items-center gap-1.5 px-3 py-1 bg-slate-800 rounded-full text-[9px] font-black text-slate-400 uppercase tracking-widest border border-white/5">
                          <MapPin size={10} className="text-cyan-500" /> {session.room}
                        </span>
                        {session.isLive && (
                          <span className="flex items-center gap-1.5 px-3 py-1 bg-red-500/10 rounded-full text-[9px] font-black text-red-500 uppercase tracking-widest border border-red-500/20 animate-pulse">
                            Live Now
                          </span>
                        )}
                      </div>

                      <h3 className="text-2xl font-bold text-white tracking-tight group-hover:text-cyan-400 transition-colors">
                        {session.title}
                      </h3>

                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-cyan-600 to-blue-600" />
                        <span className="text-xs font-medium text-slate-400">{session.speaker}</span>
                      </div>
                    </div>

                    {/* Actions (Spec 4.5 & 4.8) */}
                    <div className="flex items-center gap-3 self-end md:self-center">
                      <button className="p-3 bg-slate-800/50 hover:bg-slate-800 rounded-2xl text-slate-400 hover:text-yellow-500 transition-all border border-white/5">
                        <Star size={20} />
                      </button>

                      {/* Le Q&A n'apparaît que si Live (Spec 4.5) */}
                      {session.isLive && (
                        <button className="flex items-center gap-2 px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-2xl text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-cyan-900/20">
                          <MessageSquare size={16} /> Poser une question
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
