import GameMenu from "./GameMenu";

type GameModalProp = {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  setPause: (pause: boolean) => void;
  currentGameSetting: "Theme" | "Gameplay" | null;
  setCurrentGameSetting: (setting: "Theme" | "Gameplay" | null) => void;
  gameTheme?: "fruit" | "animal" | "heart";
  setGameTheme?: (theme: "fruit" | "animal" | "heart") => void;
  boardSize?: number;
  setBoardSize?: (size: number) => void;
  swapsPerTurn?: number; // 0 1 or 2
  setSwapsPerTurn?: (num: number) => void;
};

const GameModal = ({
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
}: GameModalProp) => {
  function closeGameModal() {
    const chk = document.getElementById("game_modal");
    if (chk) (chk as HTMLInputElement).checked = false; // closes
  }
  return (
    <>
      <input
        type="checkbox"
        id="game_modal"
        className="modal-toggle"
        checked={isOpen}
        onChange={(e) => setIsOpen(e.target.checked)}
      />
      <div className="modal" role="dialog">
        <div
          className="modal-box flex justify-center items-center flex-col gap-5 shadow-md
    dark:shadow-[0_0_8px_rgba(166,182,255,1),0_0_20px_rgba(166,182,255,0.2),0_0_30px_rgba(166,182,255,0.1)] rounded-xl"
        >
          {currentGameSetting === "Theme" ? (
            <GameMenu gameTheme={gameTheme} setGameTheme={setGameTheme} />
          ) : currentGameSetting ? (
            <GameMenu
              swapsPerTurn={swapsPerTurn}
              setSwapsPerTurn={setSwapsPerTurn}
              boardSize={boardSize}
              setBoardSize={setBoardSize}
            />
          ) : null}
          <div className="modal-action flex justify-center align-center flex-row ">
            <button
              className="btn"
              onClick={() => {
                setIsOpen(false);
                setCurrentGameSetting(null);
                setPause(false);
              }}
            >
              Save & Continue
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GameModal;
