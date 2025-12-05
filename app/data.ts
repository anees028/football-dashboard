// app/data.ts

export interface Player {
  id: number;
  name: string;
  position: string;
  image: string; // We'll use a placeholder image
  stats: {
    pace: number;
    shooting: number;
    passing: number;
    dribbling: number;
  };
  aiInsight: string; // The "AI" feature
}

export const players: Player[] = [
  {
    id: 1,
    name: "Alex Striker",
    position: "Forward",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    stats: { pace: 88, shooting: 92, passing: 75, dribbling: 85 },
    aiInsight: "High scoring probability inside the box. Recommend finishing drills.",
  },
  {
    id: 2,
    name: "Sam Midfielder",
    position: "Midfield",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sam",
    stats: { pace: 74, shooting: 65, passing: 94, dribbling: 88 },
    aiInsight: "Exceptional vision. Suggest increasing role in transition play.",
  },
  {
    id: 3,
    name: "Jordan Defender",
    position: "Defender",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jordan",
    stats: { pace: 82, shooting: 40, passing: 78, dribbling: 60 },
    aiInsight: "Strong recovery speed. Needs improvement in aerial duels.",
  },
];