import { Dispatch, useEffect, useState } from "react";

const useHighScore: () => [number | undefined, Dispatch<number | undefined>] = () => {
  const [highScore, setHighScore] = useState<number | undefined>();

  useEffect(() => {
    if (!highScore) {
      const savedScore = localStorage.highScore;
      if (savedScore) {
        setHighScore(Number(savedScore));
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("highScore", String(highScore))
  }, [highScore])

  return [highScore, setHighScore];
}

export default useHighScore;
