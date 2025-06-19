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
        {/* <GameCard item={0} state="rest" onClick={() => {console.log("clicked")}} /> */}
        <TimeCounter running />
        <Game theme="Animal" boardSize={0} swapsPerTurn={0} paused={false} handleGameEnd={() => {}}/>
      </main>
    </div>
  );
}
