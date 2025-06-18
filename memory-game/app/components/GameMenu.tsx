import { faHeart, faLemon, faPaw } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type GameMenu = {
  boardSize: "Small" | "Medium" | "Large";
  setBoardSize: (size: "Small" | "Medium" | "Large") => void;
  swapsPerTurn: number; // 0 1 or 2
  setSwapsPerTurn: (num: number) => void;
  gameTheme: "Fruit" | "Animal" | "Heart";
  setGameTheme: (theme: "Fruit" | "Animal" | "Heart") => void;
};

const GameMenu = ({
  boardSize,
  setBoardSize,
  swapsPerTurn,
  setSwapsPerTurn,
  gameTheme,
  setGameTheme,
}: GameMenu) => {
  return (
    <div className="flex flex-col gap-10 w-fit shadow-md rounded-xl  p-15">
      <div className="text-primary flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-center">Board Size</h1>
        <div className="flex flex-row justify-between gap-5">
          <button
            className={`btn text-primary ${
              boardSize === "Small" ? "bg-indigo-200 dark:bg-indigo-700" : null
            }`}
            onClick={() => setBoardSize("Small")}
          >
            Small
          </button>
          <button
            className={`btn text-primary ${
              boardSize === "Medium" ? "bg-indigo-200 dark:bg-indigo-700" : null
            }`}
            onClick={() => setBoardSize("Medium")}
          >
            Medium
          </button>
          <button
            className={`btn text-primary ${
              boardSize === "Large" ? "bg-indigo-200 dark:bg-indigo-700" : null
            }`}
            onClick={() => setBoardSize("Large")}
          >
            Large
          </button>
        </div>
      </div>

      <div className="text-primary flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-center">Swaps per Turn</h1>
        <div className="flex flex-row justify-center gap-5">
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

      <div className="text-primary flex flex-col gap-2">
        <h1 className="text-xl font-semibold text-center">Theme</h1>
        <div className="flex flex-row justify-center gap-5">
          <button
            className={`btn text-primary ${
              gameTheme === "Fruit" ? "bg-indigo-200 dark:bg-indigo-700" : null
            }`}
            onClick={() => setGameTheme("Fruit")}
          >
            <FontAwesomeIcon icon={faLemon} />
          </button>
          <button
            className={`btn text-primary ${
              gameTheme === "Animal" ? "bg-indigo-200 dark:bg-indigo-700" : null
            }`}
            onClick={() => setGameTheme("Animal")}
          >
            <FontAwesomeIcon icon={faPaw} />
          </button>
          <button
            className={`btn text-primary ${
              gameTheme === "Heart" ? "bg-indigo-200 dark:bg-indigo-700" : null
            }`}
            onClick={() => setGameTheme("Heart")}
          >
            <FontAwesomeIcon icon={faHeart} />
          </button>
        </div>
      </div>

      <button className="btn text-primary-content bg-primary rounded-xl">
        <strong>Start</strong>
      </button>
    </div>
  );
};

export default GameMenu;
