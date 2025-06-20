import { faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLink, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ResultCardProp = {
  score: number;
  highScore: number;
};

const ResultCard = ({ score, highScore }: ResultCardProp) => {
  return (
    <div className="flex flex-col gap-10 w-fit rounded-xl  p-15">
      <div className="flex flex-col justify-center items-center text-center gap-5">
        <h1 className="text-primary text-2xl">You Win!</h1>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col ">
            <h2 className="text-primary text-lg">Score</h2>
            <p>{score}</p>
          </div>
          <div className="flex flex-col ">
            <h2 className="text-primary text-lg">High Score</h2>
            <p>
              {Number.isFinite(highScore)
                ? highScore
                : Number.isFinite(score)
                ? score
                : "--"}
            </p>
          </div>
        </div>
        <div className="max-w-md mx-auto flex items-center justify-center space-x-6 gap-5">
          <a className="text-primary hover:text-accent transition-colors">
            <FontAwesomeIcon icon={faLink} />
          </a>
          <a className="text-primary hover:text-accent transition-colors">
            <FontAwesomeIcon icon={faMessage} />
          </a>
          <a className="text-primary hover:text-accent transition-colors">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a className="text-primary hover:text-accent transition-colors">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
