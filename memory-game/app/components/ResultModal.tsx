import React from "react";
import ResultCard from "./ResultCard";

type ResultModalProps = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setPause: (pause: boolean) => void;
  setGameState: (state: boolean) => void;
  resetGameState: () => void;
  gameScore: number;
  highScore: number | undefined;
};

const ResultModal = ({
  isOpen,
  setIsOpen,
  setPause,
  setGameState,
  resetGameState,
  gameScore,
  highScore,
}: ResultModalProps) => {
  if (!isOpen) return null;

  const handleClose = () => setIsOpen(false);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center animate-fade-in overflow-scroll">
      <div
        className="bg-base-100 dark:bg-base-200 p-6 dark:shadow-[0_0_8px_rgba(166,182,255,1),0_0_20px_rgba(166,182,255,0.2),0_0_30px_rgba(166,182,255,0.1)] rounded-xl shadow-md flex flex-col gap-5 w-[90%] max-w-md animate-fade-in justify-center items-center"
        onClick={(e) => e.stopPropagation()}
      >
        <ResultCard score={gameScore} highScore={highScore ?? gameScore} />

        <div className="flex justify-center gap-4 mt-4">
          <button
            className="px-5 py-2 btn"
            onClick={() => {
              resetGameState();
              setGameState(false);
              handleClose();
            }}
          >
            Main Menu
          </button>
          <button
            className="px-5 py-2 btn"
            onClick={() => {
              resetGameState();
              setPause(false);
              handleClose();
            }}
          >
            New Game
          </button>
        </div>
      </div>
    </div>
  );
};
export default ResultModal;
