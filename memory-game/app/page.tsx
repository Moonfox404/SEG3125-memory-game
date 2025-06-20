"use client";

import { useState } from "react";
import GameMenu from "./components/GameMenu";
import NavBar from "./components/NavBar";
import GameBar from "./components/GameBar";
import InfoModal from "./components/InfoModal";
import ResultCard from "./components/ResultCard";

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
      <section className="min-w-screen min-h-screen flex p-5 ">
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

          <div className="self-center pt-10">
            <GameBar />
          </div>
        </div>
      </section>

      <InfoModal />
    </div>
  );
}
