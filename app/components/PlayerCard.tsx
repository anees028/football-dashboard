import { Player } from "../data";
import Image from "next/image";

export default function PlayerCard({ player }: { player: Player }) {
  // Calculate average rating
  const overall = Math.round(
    (player.stats.pace + player.stats.shooting + player.stats.passing + player.stats.dribbling) / 4
  );

  return (
    <div className="group relative bg-slate-800 rounded-2xl p-5 border border-slate-700 hover:border-green-500 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.3)]">
      
      {/* Top Header: Image & Role */}
      <div className="flex justify-between items-start mb-6">
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16">
            <Image
              src={player.image}
              alt={player.name}
              fill
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
        
        {/* Overall Score Badge */}
        <div className="flex flex-col items-center justify-center bg-slate-900 w-12 h-12 rounded-lg border border-slate-700 shadow-inner">
          <span className="text-lg font-bold text-white">{overall}</span>
          <span className="text-[9px] text-gray-500 uppercase">OVR</span>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 gap-3 mb-6">
        <StatBox label="PAC" value={player.stats.pace} />
        <StatBox label="SHO" value={player.stats.shooting} />
        <StatBox label="PAS" value={player.stats.passing} />
        <StatBox label="DRI" value={player.stats.dribbling} />
      </div>

      {/* AI Insight Box */}
      <div className="relative overflow-hidden rounded-xl bg-slate-900/80 p-4 border border-slate-700/50">
        <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-green-500 to-transparent"></div>
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <p className="text-xs font-bold text-green-400 uppercase tracking-widest">
            AI Insight
          </p>
        </div>
        <p className="text-sm text-gray-300 leading-relaxed italic">
          "{player.aiInsight}"
        </p>
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