import useHighScore from "../hooks/useHighScore";
import ResultCard from "./ResultCard";

type ResultModal = {
  setPause: (pause: boolean) => void;
  setGameState: (state: boolean) => void;
  resetGameState: () => void;
  gameScore: number;
};
const ResultModal = ({
  setPause,
  setGameState,
  resetGameState,
  gameScore,
}: ResultModal) => {
  const [highScore, setHighScore] = useHighScore();

  function closeResultModal() {
    const chk = document.getElementById("result_modal");
    if (chk) (chk as HTMLInputElement).checked = false; // closes
  }
  return (
    <>
      <input type="checkbox" id="result_modal" className="modal-toggle" />
      <div className="modal" role="dialog">
        <div
          className="modal-box flex justify-center items-center flex-col gap-5 shadow-md
    dark:shadow-[0_0_8px_rgba(166,182,255,1),0_0_20px_rgba(166,182,255,0.2),0_0_30px_rgba(166,182,255,0.1)] rounded-xl"
        >
          <ResultCard score={gameScore} highScore={highScore ?? gameScore} />
          <div className="modal-action flex justify-center align-center flex-row ">
            <button
              className="btn"
              onClick={() => {
                resetGameState();
                setGameState(false);

                closeResultModal();
              }}
            >
              Main Menu
            </button>
            <button
              className="btn"
              onClick={() => {
                resetGameState();

                closeResultModal();
                setPause(false);
              }}
            >
              New Game
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResultModal;
