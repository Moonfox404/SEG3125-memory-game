"use client"

import { useEffect, useRef, useState } from "react";
import useHighScore from "../hooks/useHighScore";

type GameCardModel = {
  state: "rest" | "flipped" | "matched";
  item: number;
};

type GameProps = {
  theme: "Fruit" | "Animal" | "Heart";
  boardSize: number;  // 0, 1, or 2 (for small, medium, large)
  swapsPerTurn: number;  // 0, 1, or 2
};

const Game = ({ theme, boardSize, swapsPerTurn }: GameProps) => {
  // state from props
  const boardHeight = 2 + boardSize;
  const boardWidth = 4 + Number(boardSize === 2);

  // initialise state
  const [highScore, setHighScore] = useHighScore();
  const [time, setTime] = useState(0);
  const [turn, setTurn] = useState(true);
  const revealedCards = useRef([]);

  const [gameModel, setGameModel] = useState<GameCardModel[]>(
    Array.from({length: boardHeight * boardWidth / 2 + 1}, (_, i) => {
      return {
        state: "rest",
        item: i
      }
    })
  )
};

export default Game;
