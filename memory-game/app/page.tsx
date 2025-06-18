"use client";

import { useState } from "react";
import GameMenu from "./components/GameMenu";
import NavBar from "./components/NavBar";

export default function Home() {
  const [boardSize, setBoardSize] = useState<"Small" | "Medium" | "Large">(
    "Small"
  );
  const [swapsPerTurn, setSwapsPerTurn] = useState(0);
  const [gameTheme, setGameTheme] = useState<"Fruit" | "Animal" | "Heart">(
    "Fruit"
  );
  return (
    <div>
      <NavBar />
      <section className="min-w-screen min-h-screen">
        {/* content */}
        <div className="w-screen min-h-[50vh] flex flex-col justify-center items-center">
          <GameMenu
            boardSize={boardSize}
            swapsPerTurn={swapsPerTurn}
            gameTheme={gameTheme}
            setBoardSize={(size) => setBoardSize(size)}
            setGameTheme={(theme) => setGameTheme(theme)}
            setSwapsPerTurn={(num) => setSwapsPerTurn(num)}
          />
        </div>
      </section>
    </div>
  );
}
