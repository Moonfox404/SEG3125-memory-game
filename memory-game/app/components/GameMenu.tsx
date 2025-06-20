import { faHeart, faLemon, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type GameMenuProp = {
  boardSize?: number;
  setBoardSize?: (size: number) => void;
  swapsPerTurn?: number; // 0 1 or 2
  setSwapsPerTurn?: (num: number) => void;
  gameTheme?: "fruit" | "animal" | "heart";
  setGameTheme?: (theme: "fruit" | "animal" | "heart") => void;
  startGame?: () => void;
};

const GameMenu = ({
  boardSize,
  setBoardSize,
  swapsPerTurn,
  setSwapsPerTurn,
  gameTheme,
  setGameTheme,
  startGame,
}: GameMenuProp) => {
  return (
    <div
      className={`flex flex-col gap-10 w-fit rounded-xl  p-15 ${
        startGame
          ? "shadow-md dark:shadow-[0_0_8px_rgba(166,182,255,1),0_0_20px_rgba(166,182,255,0.2),0_0_30px_rgba(166,182,255,0.1)]"
          : null
      }`}
    >
      {boardSize != null && !!setBoardSize ? (
        <div className="text-primary flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-center">Board Size</h1>
          <div className="flex flex-row justify-between gap-5  max-[440px]:flex-col">
            <button
              className={`btn text-primary ${
                boardSize === 0 ? "bg-indigo-200 dark:bg-indigo-700" : null
              }`}
              onClick={() => setBoardSize(0)}
            >
              Small
            </button>
            <button
              className={`btn text-primary ${
                boardSize === 1 ? "bg-indigo-200 dark:bg-indigo-700" : null
              }`}
              onClick={() => setBoardSize(1)}
            >
              Medium
            </button>
            <button
              className={`btn text-primary ${
                boardSize === 2 ? "bg-indigo-200 dark:bg-indigo-700" : null
              }`}
              onClick={() => setBoardSize(2)}
            >
              Large
            </button>
          </div>
        </div>
      ) : null}

      {swapsPerTurn != null && !!setSwapsPerTurn ? (
        <div className="text-primary flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-center">Swaps per Turn</h1>
          <div className="flex flex-row justify-center gap-5 max-[440px]:flex-col">
            <button
              className={`btn text-primary ${
                swapsPerTurn === 0 ? "bg-indigo-200 dark:bg-indigo-700" : null
              }`}
              onClick={() => setSwapsPerTurn(0)}
            >
              0
            </button>
            <button
              className={`btn text-primary ${
                swapsPerTurn === 1 ? "bg-indigo-200 dark:bg-indigo-700" : null
              }`}
              onClick={() => setSwapsPerTurn(1)}
            >
              1
            </button>
            <button
              className={`btn text-primary ${
                swapsPerTurn === 2 ? "bg-indigo-200 dark:bg-indigo-700" : null
              }`}
              onClick={() => setSwapsPerTurn(2)}
            >
              2
            </button>
          </div>
        </div>
      ) : null}

      {!!gameTheme && !!setGameTheme ? (
        <div className="text-primary flex flex-col gap-2">
          <h1 className="text-xl font-semibold text-center">Theme</h1>
          <div className="flex flex-row justify-center gap-5  max-[440px]:flex-col">
            <button
              className={`btn text-primary ${
                gameTheme === "fruit"
                  ? "bg-indigo-200 dark:bg-indigo-700"
                  : null
              }`}
              onClick={() => setGameTheme("fruit")}
            >
              <FontAwesomeIcon icon={faLemon} />
            </button>
            <button
              className={`btn text-primary ${
                gameTheme === "animal"
                  ? "bg-indigo-200 dark:bg-indigo-700"
                  : null
              }`}
              onClick={() => setGameTheme("animal")}
            >
              <FontAwesomeIcon icon={faPaw} />
            </button>
            <button
              className={`btn text-primary ${
                gameTheme === "heart"
                  ? "bg-indigo-200 dark:bg-indigo-700"
                  : null
              }`}
              onClick={() => setGameTheme("heart")}
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      ) : null}

      {startGame ? (
        <button
          className="btn text-primary-content bg-primary rounded-xl hover:bg-indigo-500 hover:text-white"
          onClick={startGame}
        >
          <strong>Start</strong>
        </button>
      ) : null}
    </div>
  );
};

export default GameMenu;
