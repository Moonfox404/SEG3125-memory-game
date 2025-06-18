import {
  faPalette,
  faPuzzlePiece,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GameBar = () => {
  // implement functionality
  return (
    <div className="flex flex-row gap-10 w-fit p-5 rounded-xl bg-base shadow-xl text-primary items-center justify-center">
      <div className="flex flex-row items-center gap-1 cursor-pointer active:translate-y-0.5 transition-all ease-in-out duration-200 hover:-translate-y-0.5">
        <FontAwesomeIcon icon={faPalette} />
        <h1>Theme</h1>
      </div>

      <div className="flex flex-row items-center gap-1 cursor-pointer active:translate-y-0.5 transition-all ease-in-out duration-200 hover:-translate-y-0.5">
        <FontAwesomeIcon icon={faPuzzlePiece} />
        <h1>Gameplay</h1>
      </div>

      <div className="flex flex-row items-center gap-1 cursor-pointer active:translate-y-0.5 transition-all ease-in-out duration-200 hover:-translate-y-0.5">
        <FontAwesomeIcon icon={faRotateRight} />
        <h1>New Game</h1>
      </div>
    </div>
  );
};

export default GameBar;
