import {
  faPalette,
  faPause,
  faPlay,
  faPuzzlePiece,
  faRotateRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type GameBarProps = {
  pause: boolean;
  setPause: (pause: boolean) => void;
  onOpenTheme: () => void;
  onOpenGameplay: () => void;
};

const GameBar = ({
  pause,
  setPause,
  onOpenTheme,
  onOpenGameplay,
}: GameBarProps) => {
  return (
    <div
      className="
      self-center            
      mt-auto                
      flex flex-row
      min-[515px]:min-w-[430px]
      gap-10 w-fit p-5 rounded-xl
      bg-base shadow-md text-primary
      dark:shadow-[0_0_8px_rgba(166,182,255,1),0_0_20px_rgba(166,182,255,0.2),0_0_30px_rgba(166,182,255,0.1)]
      mb-5                 
    "
    >
      <div
        className="flex flex-row items-center gap-1 cursor-pointer active:bg-indigo-300 dark:active:text-indigo-600 transition-all ease-in-out duration-200 hover:-translate-y-0.5 p-2 rounded-xl"
        onClick={onOpenTheme}
      >
        <FontAwesomeIcon icon={faPalette} />
        <h1 className="hidden min-[516px]:inline">Theme</h1>
      </div>

      <div
        className="flex flex-row items-center gap-1 cursor-pointer active:bg-indigo-300 dark:active:text-indigo-600 transition-all ease-in-out duration-200 hover:-translate-y-0.5 p-2 rounded-xl"
        onClick={onOpenGameplay}
      >
        <FontAwesomeIcon icon={faPuzzlePiece} />
        <h1 className="hidden min-[516px]:inline">Gameplay</h1>
      </div>

      <div
        className="flex flex-row items-center gap-1 cursor-pointer active:bg-indigo-300 dark:active:text-indigo-600 transition-all ease-in-out duration-200 hover:-translate-y-0.5 p-2 rounded-xl"
        onClick={() => {
          setPause(!pause);
        }}
      >
        {!pause ? (
          <>
            <FontAwesomeIcon icon={faPause} />
            <h1 className="hidden min-[516px]:inline">Pause Game</h1>
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faPlay} />
            <h1 className="hidden min-[516px]:inline">Resume Game</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default GameBar;
