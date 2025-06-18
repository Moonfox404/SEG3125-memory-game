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
  const boardValues = Array.from({ length: boardHeight * boardWidth / 2 + 1 }, (_, i) => i );

  // initialise state
  const [highScore, setHighScore] = useHighScore();
  const [time, setTime] = useState(0);
  const [turn, setTurn] = useState(true);
  const [swapNumber, setSwapNumber] = useState(0);
  const [cardsMatched, setCardsMatched] = useState(0);
  const [moves, setMoves] = useState(0);
  const revealedCards = useRef<number[]>([]);

  const [gameModel, setGameModel] = useState<GameCardModel[]>(
    [...boardValues, ...boardValues]
      .map((value) => {return {state: "rest", item: value}})
      .sort(() => Math.random() - 0.5) as GameCardModel[]
  );

  const activeIndices = useRef<Set<number>>(new Set(Array.from({ length: gameModel.length }, (_, i) => i )));

  // functions for game logic
  const handleClick = (index: number) => {
    revealedCards.current.push(index);
    setMoves(moves + 1);

    if (revealedCards.current.length === 2) {
      setTurn(false);
      checkMatch();
    }
  };

  const checkMatch = async () => {
    const updateModel = (state: "matched" | "rest") => {
      const updatedModel = [...gameModel];
      updatedModel[revealedCards.current[0]].state = state;
      updatedModel[revealedCards.current[1]].state = state;
      setGameModel(updatedModel);

      // reset revealedCards
      revealedCards.current.length = 0;
    }

    if (gameModel[revealedCards.current[0]].item === gameModel[revealedCards.current[1]].item) {
      // match
      const newTilesMatched = cardsMatched + 2;
      if (newTilesMatched === boardHeight * boardWidth) {
        // game won
      }
      setCardsMatched(newTilesMatched);

      activeIndices.current.delete(revealedCards.current[0]);
      activeIndices.current.delete(revealedCards.current[1]);

      updateModel("matched");

    } else {
      // no match
      setTimeout(() => {
        updateModel("rest");
      }, 500);
    }
  };

  const swapCards = (i: number) => {
    const indexArray = Array.from(activeIndices.current);
    const firstIndex = Math.floor(Math.random() * indexArray.length);
    const secondIndex = Math.floor(Math.random() * (indexArray.length - 1));

    const firstCard = indexArray[firstIndex];
    const secondCard = [...indexArray.slice(0, firstIndex), ...indexArray.slice(firstIndex + 1, -1)][secondIndex];

    const updatedModel = [...gameModel];
    updatedModel[firstCard] = gameModel[secondCard];
    updatedModel[secondCard] = gameModel[firstCard];

    setTimeout(() => {
      setGameModel(updatedModel);

      if (i === swapsPerTurn - 1) {
        setTurn(true);
      }
    }, 1000 * i);
  }

  useEffect(() => {
    if (!turn) {
      swapCards(swapNumber);
      setSwapNumber(swapNumber + 1);
    } else {
      setSwapNumber(0);
    }
  }, [gameModel]);  // run swap every time game model is updated at end of user's turn
};

export default Game;
