"use client";

import { useState } from "react";
import GameMenu from "./components/GameMenu";
import NavBar from "./components/NavBar";
import GameBar from "./components/GameBar";
import InfoModal from "./components/InfoModal";
import Game from "./components/Game";
import ResultModal from "./components/ResultModal";
import GameModal from "./components/GameModal";
import useHighScore from "./hooks/useHighScore";
import useDarkMode from "./hooks/useDarkMode";

export default function Home() {
  const [boardSize, setBoardSize] = useState<number>(0);
  const [swapsPerTurn, setSwapsPerTurn] = useState(0);
  const [gameTheme, setGameTheme] = useState<"fruit" | "animal" | "heart">(
    "fruit"
  );
  const [gameState, setGameState] = useState(false);
  const [pause, setPause] = useState(false);
  const [gameScore, setGameScore] = useState<number>(0);
  const [highScore, setHighScore] = useHighScore();
  const [theme, setTheme] = useDarkMode();

  const [gameNumber, setGameNumber] = useState(0); // counter incremented to reset game

  const [currentGameSetting, setCurrentGameSetting] = useState<
    "Theme" | "Gameplay" | "Menu" | null
  >(null);

  function resetGameState() {
    setGameScore(0);
    setGameNumber(gameNumber + 1);
  }

  function handleGameEnd(score: number, highScore: number) {
    setPause(true);
    setGameScore(score);
    setHighScore(highScore);
    console.log("setting highscore to ", highScore);
    openResultModal();
  }

  function openResultModal() {
    const chk = document.getElementById("result_modal");
    if (chk) (chk as HTMLInputElement).checked = true; // opens
  }

  const [isGameModalOpen, setIsGameModalOpen] = useState(false);

  function openGameModal(setting: "Theme" | "Gameplay" | "Menu") {
    setCurrentGameSetting(setting);
    setPause(true);
    setIsGameModalOpen(true);
  }
  return (
    <div className="w-screen min-h-screen flex flex-col">
      <NavBar
        setGameState={setGameState}
        theme={theme}
        setTheme={setTheme}
        openMenu={() => openGameModal("Menu")}
      />
      <section className="w-full h-full flex p-5 grow justify-center items-center">
        <div className="w-fit h-fit">
          {!gameState ? (
            <GameMenu
              boardSize={boardSize}
              swapsPerTurn={swapsPerTurn}
              gameTheme={gameTheme}
              setBoardSize={(size) => setBoardSize(size)}
              setGameTheme={(theme) => setGameTheme(theme)}
              setSwapsPerTurn={(num) => setSwapsPerTurn(num)}
              startGame={() => {
                setGameState(true);
                setPause(false);
              }}
            />
          ) : (
            <div className="w-full h-full flex justify-center items-center flex-col p-5">
              <Game
                theme={gameTheme}
                dark={theme === "dark"}
                boardSize={boardSize}
                swapsPerTurn={swapsPerTurn}
                paused={pause}
                handleGameEnd={handleGameEnd}
                gameNumber={gameNumber}
                highScore={highScore}
                setHighScore={setHighScore}
              />
              <div className="w-full flex justify-center p-5">
                <GameBar
                  pause={pause}
                  setPause={(pause: boolean) => setPause(pause)}
                  onOpenTheme={() => openGameModal("Theme")}
                  onOpenGameplay={() => openGameModal("Gameplay")}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      <InfoModal />

      <ResultModal
        setGameState={setGameState}
        gameScore={gameScore}
        resetGameState={resetGameState}
        setPause={setPause}
        highScore={highScore}
      />

      <GameModal
        isOpen={isGameModalOpen}
        setIsOpen={setIsGameModalOpen}
        boardSize={boardSize}
        swapsPerTurn={swapsPerTurn}
        gameTheme={gameTheme}
        setBoardSize={(size) => setBoardSize(size)}
        setGameTheme={(theme) => setGameTheme(theme)}
        setSwapsPerTurn={(num) => setSwapsPerTurn(num)}
        setPause={setPause}
        currentGameSetting={currentGameSetting}
        setCurrentGameSetting={setCurrentGameSetting}
      />
    </div>
  );
}
