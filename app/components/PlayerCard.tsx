import { Player } from "../data";
import Image from "next/image";

export default function PlayerCard({ player }: { player: Player }) {
  const overall = Math.round(
    (player.stats.pace + player.stats.shooting + player.stats.passing + player.stats.dribbling) / 4
  );

  return (
    <div className="group relative bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)] overflow-hidden">
      
      {/* --- STANDARD CARD CONTENT --- */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <Image
              src={player.image}
              alt={player.name}
              fill
              unoptimized
              className="rounded-full border-2 border-slate-600 group-hover:border-green-400 object-cover bg-slate-700"
            />
            <div className="absolute -bottom-1 -right-1 bg-slate-900 text-white text-xs px-2 py-0.5 rounded-full border border-slate-600 z-10">
              #{player.id}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-bold text-white leading-tight">{player.name}</h2>
            <span className="text-xs font-semibold uppercase tracking-wider text-green-400">
              {player.position}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center bg-slate-900 w-12 h-12 rounded-lg border border-slate-700 shadow-inner">
          <span className="text-lg font-bold text-white">{overall}</span>
          <span className="text-[9px] text-gray-500 uppercase">OVR</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <StatBox label="PAC" value={player.stats.pace} />
        <StatBox label="SHO" value={player.stats.shooting} />
        <StatBox label="PAS" value={player.stats.passing} />
        <StatBox label="DRI" value={player.stats.dribbling} />
      </div>

      <div className="relative overflow-hidden rounded-xl bg-slate-900/80 p-4 border border-slate-700/50">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-transparent"></div>
        <p className="text-sm text-gray-300 italic">"{player.aiInsight}"</p>
      </div>

      {/* --- NEW: HOVER OVERLAY (The Tooltip) --- */}
      <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 p-6 text-center translate-y-4 group-hover:translate-y-0">
        
        <h3 className="text-2xl font-bold text-white mb-1">{player.name}</h3>
        <p className="text-green-400 font-medium mb-6">Season Stats</p>

        <div className="grid grid-cols-2 gap-6 w-full mb-6">
          <div className="flex flex-col">
             <span className="text-slate-400 text-xs uppercase">Matches</span>
             <span className="text-2xl font-bold text-white">{player.details.matches}</span>
          </div>
          <div className="flex flex-col">
             <span className="text-slate-400 text-xs uppercase">Goals</span>
             <span className="text-2xl font-bold text-white">{player.details.goals}</span>
          </div>
          <div className="flex flex-col">
             <span className="text-slate-400 text-xs uppercase">Height</span>
             <span className="text-xl font-bold text-white">{player.details.height}</span>
          </div>
          <div className="flex flex-col">
             <span className="text-slate-400 text-xs uppercase">Foot</span>
             <span className="text-xl font-bold text-white">{player.details.foot}</span>
          </div>
        </div>

        <button className="w-full py-2 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold transition-colors">
          View Full Profile
        </button>
      </div>

    </div>
  );
}

function StatBox({ label, value }: { label: string; value: number }) {
  let color = "bg-red-500";
  if (value >= 80) color = "bg-green-500";
  else if (value >= 60) color = "bg-yellow-500";

  return (
    <div className="flex items-center justify-between bg-slate-700/50 p-2 rounded-md">
      <span className="text-xs font-bold text-slate-400">{label}</span>
      <div className="flex items-center gap-2">
         <div className="w-8 h-1 bg-slate-600 rounded-full overflow-hidden">
            <div className={`h-full ${color}`} style={{ width: `${value}%` }}></div>
         </div>
         <span className="text-sm font-bold text-white">{value}</span>
      </div>
    </div>
  );
}