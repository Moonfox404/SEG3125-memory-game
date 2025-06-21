import GameMenu from "./GameMenu";

type GameModalProp = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setPause: (pause: boolean) => void;
  currentGameSetting: "Theme" | "Gameplay" | "Menu" | null;
  setCurrentGameSetting: (setting: "Theme" | "Gameplay" | null) => void;
  gameTheme?: "fruit" | "animal" | "heart";
  setGameTheme?: (theme: "fruit" | "animal" | "heart") => void;
  boardSize?: number;
  setBoardSize?: (size: number) => void;
  swapsPerTurn?: number;
  setSwapsPerTurn?: (num: number) => void;
};

function GameModal({
  isOpen,
  setIsOpen,
  setPause,
  currentGameSetting,
  setCurrentGameSetting,
  gameTheme,
  setGameTheme,
  boardSize,
  setBoardSize,
  swapsPerTurn,
  setSwapsPerTurn,
}: GameModalProp) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 animate-fade-in">
      <div
        className="bg-base-100 p-6 shadow-xl flex flex-col gap-5 w-[90%] max-w-md justify-center items-center
    dark:shadow-[0_0_8px_rgba(166,182,255,1),0_0_20px_rgba(166,182,255,0.2),0_0_30px_rgba(166,182,255,0.1)] rounded-xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        {currentGameSetting === "Theme" ? (
          <GameMenu gameTheme={gameTheme} setGameTheme={setGameTheme} />
        ) : currentGameSetting === "Gameplay" ? (
          <GameMenu
            swapsPerTurn={swapsPerTurn}
            setSwapsPerTurn={setSwapsPerTurn}
            boardSize={boardSize}
            setBoardSize={setBoardSize}
          />
        ) : currentGameSetting === "Menu" ? (
          <GameMenu
            gameTheme={gameTheme}
            setGameTheme={setGameTheme}
            swapsPerTurn={swapsPerTurn}
            setSwapsPerTurn={setSwapsPerTurn}
            boardSize={boardSize}
            setBoardSize={setBoardSize}
          />
        ) : null}

        <div className="flex justify-center">
          <button
            className="btn"
            onClick={() => {
              setIsOpen(false);
              setCurrentGameSetting(null);
              setPause(false);
            }}
          >
            {currentGameSetting === "Menu" ? "Restart Game" : "Save & Continue"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameModal;
