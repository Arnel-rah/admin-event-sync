import React from 'react';
// Correction des imports : Ajout des icônes manquantes
import {
  Globe,
  X,
  ArrowLeft,
  Calendar,
  MapPin,
  Clock,
  Mail
} from 'lucide-react';


// Simulation des données d'un intervenant (Speaker)
const SPEAKER_DATA = {
  id: "spk-01",
  name: "Tsiry Sandratraina",
  photo: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tsiry",
  bio: "Expert en architectures distribuées et passionné par les technologies Cloud-Native. Contributeur actif à l'écosystème Open Source, Tsiry accompagne les entreprises dans leur transition vers le Web3 et les infrastructures scalables en Go et Rust.",
  links: {
    website: "https://example.com",
    linkedin: "https://linkedin.com/in/example",
    twitter: "https://twitter.com/example"
  },
  sessions: [
    {
      id: "101",
      title: "Architecture Cloud-Native avec Spring Boot",
      startTime: "14:00",
      endTime: "16:00",
      room: "Amphi A",
      date: "24 Avril 2026"
    },
    {
      id: "102",
      title: "Introduction aux Smart Contracts",
      startTime: "10:00",
      endTime: "12:00",
      room: "Lab 404",
      date: "25 Avril 2026"
    }
  ]
};

export default function SpeakerPublicPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      {/* Header / Navigation Discrète */}
      <nav className="p-6 max-w-5xl mx-auto">
        <button className="flex items-center gap-2 text-slate-500 hover:text-purple-600 transition font-bold text-sm">
          <ArrowLeft size={18} /> Retour au programme
        </button>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Colonne Gauche : Profil & Bio */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100 text-center">
              <div className="relative w-32 h-32 mx-auto mb-6">
                <img
                  src={SPEAKER_DATA.photo}
                  alt={SPEAKER_DATA.name}
                  className="rounded-full bg-purple-100 border-4 border-white shadow-lg"
                />
              </div>
              <h1 className="text-2xl font-black text-slate-900 mb-2">{SPEAKER_DATA.name}</h1>
              <p className="text-purple-600 font-bold text-sm uppercase tracking-widest mb-6">Intervenant</p>

              {/* Liens Réseaux Sociaux */}
              <div className="flex justify-center gap-4">
                <SocialLink icon={<Globe size={20} />} href={SPEAKER_DATA.links.website} />
                <SocialLink icon={<X size={20} />} href={SPEAKER_DATA.links.twitter} />
              </div>
            </div>

            <div className="bg-white rounded-[2.5rem] p-8 shadow-sm border border-slate-100">
              <h2 className="text-lg font-black mb-4">À propos</h2>
              <p className="text-slate-600 leading-relaxed text-sm">
                {SPEAKER_DATA.bio}
              </p>
            </div>
          </div>

          {/* Colonne Droite : Sessions associées */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-black text-slate-900 mb-8">Sessions programmées</h2>

            <div className="space-y-6">
              {SPEAKER_DATA.sessions.map((session) => (
                <div key={session.id} className="group bg-white rounded-[2rem] p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-purple-100 transition-all cursor-pointer">
                  <div className="flex flex-col md:flex-row justify-between md:items-center gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-purple-600 text-xs font-black uppercase tracking-widest">
                        <Calendar size={14} /> {session.date}
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-purple-600 transition">{session.title}</h3>
                      <div className="flex gap-4 text-slate-400 text-sm font-medium">
                        <span className="flex items-center gap-1.5"><Clock size={16} /> {session.startTime} - {session.endTime}</span>
                        <span className="flex items-center gap-1.5"><MapPin size={16} /> {session.room}</span>
                      </div>
                    </div>
                    <button className="bg-slate-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-purple-600 transition whitespace-nowrap">
                      Voir la session
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Aide / Contact */}
            <div className="mt-12 p-8 bg-indigo-50 rounded-[2rem] border border-indigo-100 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-indigo-900">Une question pour {SPEAKER_DATA.name.split(' ')[0]} ?</h4>
                <p className="text-sm text-indigo-700/70">Préparez vos questions pour le Q&A en direct durant la session.</p>
              </div>
              <Mail className="text-indigo-300" size={32} />
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

function SocialLink({ icon, href }: { icon: React.ReactNode, href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-slate-50 text-slate-400 rounded-xl hover:bg-purple-50 hover:text-purple-600 transition shadow-sm"
    >
      {icon}
    </a>
  );
}
