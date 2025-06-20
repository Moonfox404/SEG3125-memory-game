"use client"

import ThemeToggle from "./components/ThemeToggle";
import GameCard from "./components/GameCard";
import TimeCounter from "./components/TimeCounter";
import Game from "./components/Game";

export default function Home() {
  return (
    <div>
      <main className="grid">
        <ThemeToggle />
        <Game theme="Animal" boardSize={0} swapsPerTurn={2} paused={false} handleGameEnd={(score) => {console.log(score)}}/>
      </main>
    </div>
  );
}
