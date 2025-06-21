import { Dispatch, useEffect, useState } from "react";

const useHighScore: () => [number, Dispatch<number>] = () => {
  const [highScore, setHighScore] = useState<number>();

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

  return [highScore ?? NaN, setHighScore];
}

export default useHighScore;
