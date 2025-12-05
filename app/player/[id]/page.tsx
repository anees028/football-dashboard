// app/player/[id]/page.tsx
import { players } from "@/app/data";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

// This generates routes for all players at build time
export function generateStaticParams() {
  return players.map((player) => ({
    id: player.id.toString(),
  }));
}

// FIX: Make the component 'async' and type params as a Promise
export default async function PlayerProfile({ params }: { params: Promise<{ id: string }> }) {
  
  // FIX: Await the params object before using it
  const { id } = await params;
  
  // Find the player matching the URL ID
  const player = players.find((p) => p.id === Number(id));

  // If ID doesn't exist, show 404
  if (!player) return notFound();

  return (
    <main className="min-h-screen bg-slate-950 text-white p-6 md:p-12 font-sans">
      
      {/* Back Button */}
      <Link href="/" className="inline-flex items-center text-slate-400 hover:text-green-400 mb-8 transition-colors">
        ← Back to Dashboard
      </Link>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Profile & Key Stats */}
        <div className="space-y-6">
          
          {/* Main Profile Card */}
          <div className="bg-slate-900 rounded-3xl p-8 border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-10">
               <span className="text-9xl font-black text-white">{player.id}</span>
            </div>
            
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src={player.image}
                alt={player.name}
                fill
                unoptimized
                className="rounded-full border-4 border-slate-700 object-cover"
              />
            </div>
            
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-2">{player.name}</h1>
              <span className="bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-semibold uppercase tracking-wider">
                {player.position}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-center border-t border-slate-800 pt-6">
              <div>
                <p className="text-slate-500 text-xs uppercase">Height</p>
                <p className="text-xl font-bold">{player.details.height}</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase">Age</p>
                <p className="text-xl font-bold">{player.details.age}</p>
              </div>
              <div>
                <p className="text-slate-500 text-xs uppercase">Preferred Foot</p>
                <p className="text-xl font-bold">{player.details.foot}</p>
              </div>
               <div>
                <p className="text-slate-500 text-xs uppercase">Matches</p>
                <p className="text-xl font-bold">{player.details.matches}</p>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
            <h3 className="text-slate-400 text-sm uppercase mb-3 font-semibold">Coach's Notes</h3>
            <p className="text-slate-300 leading-relaxed text-sm">
              {player.bio || "No specific notes available for this player."}
            </p>
          </div>
        </div>

        {/* RIGHT COLUMN: Training Performance */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* AI Insight Banner */}
          <div className="bg-gradient-to-r from-green-900/40 to-slate-900 border border-green-500/30 rounded-2xl p-6 flex items-start gap-4">
            <div className="p-3 bg-green-500/20 rounded-lg text-green-400">
               <span>⚡️</span> 
            </div>
            <div>
              <h3 className="text-lg font-bold text-green-400 mb-1">AI Performance Analysis</h3>
              <p className="text-slate-300 italic">"{player.aiInsight}"</p>
            </div>
          </div>

          {/* Recent Training Sessions */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 overflow-hidden">
            <div className="p-6 border-b border-slate-800 flex justify-between items-center">
              <h3 className="font-bold text-lg">Recent Training Sessions</h3>
              <button className="text-xs bg-slate-800 hover:bg-slate-700 px-3 py-1 rounded text-slate-300 transition-colors">View All</button>
            </div>
            
            <table className="w-full text-left text-sm text-slate-400">
              <thead className="bg-slate-950 uppercase text-xs font-semibold tracking-wider">
                <tr>
                  <th className="px-6 py-4">Date</th>
                  <th className="px-6 py-4">Drill Type</th>
                  <th className="px-6 py-4">Intensity</th>
                  <th className="px-6 py-4">Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800">
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">Oct 24, 2024</td>
                  <td className="px-6 py-4 text-white">Sprint Intervals</td>
                  <td className="px-6 py-4"><span className="text-red-400">High</span></td>
                  <td className="px-6 py-4"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">9.2</span></td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">Oct 22, 2024</td>
                  <td className="px-6 py-4 text-white">Tactical Positioning</td>
                  <td className="px-6 py-4"><span className="text-yellow-400">Med</span></td>
                  <td className="px-6 py-4"><span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">7.8</span></td>
                </tr>
                <tr className="hover:bg-slate-800/50 transition-colors">
                  <td className="px-6 py-4">Oct 20, 2024</td>
                  <td className="px-6 py-4 text-white">Shooting Drills</td>
                  <td className="px-6 py-4"><span className="text-blue-400">Low</span></td>
                  <td className="px-6 py-4"><span className="bg-green-500/20 text-green-400 px-2 py-1 rounded">8.5</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Detailed Stats Bars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <h4 className="text-white font-bold mb-4">Physical Metrics</h4>
                <div className="space-y-4">
                  <DetailedStat label="Speed / Pace" value={player.stats.pace} />
                  <DetailedStat label="Stamina" value={85} /> 
                  <DetailedStat label="Strength" value={78} />
                </div>
             </div>
             <div className="bg-slate-900 rounded-2xl p-6 border border-slate-800">
                <h4 className="text-white font-bold mb-4">Technical Metrics</h4>
                <div className="space-y-4">
                  <DetailedStat label="Ball Control" value={player.stats.dribbling} />
                  <DetailedStat label="Passing Accuracy" value={player.stats.passing} /> 
                  <DetailedStat label="Finishing" value={player.stats.shooting} />
                </div>
             </div>
          </div>

        </div>
      </div>
    </main>
  );
}

function DetailedStat({ label, value }: { label: string; value: number }) {
  return (
    <div>
      <div className="flex justify-between text-xs mb-1">
        <span>{label}</span>
        <span className="text-white font-bold">{value}%</span>
      </div>
      <div className="w-full bg-slate-800 rounded-full h-2">
        <div className="bg-green-500 h-2 rounded-full" style={{ width: `${value}%` }}></div>
      </div>
    </div>
  )
}