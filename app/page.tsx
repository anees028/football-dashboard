// app/page.tsx
import { players } from "./data";
import PlayerCard from "./components/PlayerCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-green-500/30">
      
      {/* Background decoration (Subtle Glow) */}
      <div className="fixed top-0 left-0 w-full h-96 bg-green-600/10 blur-[100px] pointer-events-none rounded-full translate-y-[-50%]"></div>

      <div className="relative max-w-6xl mx-auto px-6 py-12">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 border-b border-slate-800 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-900/30 border border-green-500/30 text-green-400 text-xs font-medium mb-4">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Live Training Data
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight mb-2">
              Team Performance
            </h1>
            <p className="text-slate-400 max-w-lg text-lg">
              AI-driven insights for the we.train.football squad.
            </p>
          </div>

          <div className="flex gap-3">
             <button className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium border border-slate-700 transition-colors">
              Filter
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-green-600 hover:bg-green-500 text-white font-bold shadow-lg shadow-green-900/20 transition-all hover:scale-105">
              + Add Player
            </button>
          </div>
        </header>

        {/* The Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </section>

      </div>
    </main>
  );
}