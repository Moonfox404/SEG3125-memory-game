"use client"

import { useEffect, useRef, useState } from "react";
import useHighScore from "../hooks/useHighScore";
import GameCard from "./GameCard";

type GameCardModel = {
  state: "rest" | "flipped" | "matched";
  item: number;
};

type GameProps = {
  theme: "Fruit" | "Animal" | "Heart";
  boardSize: number;  // 0, 1, or 2 (for small, medium, large)
  swapsPerTurn: number;  // 0, 1, or 2
  paused: boolean;
  handleGameEnd: (score: number, highScore: number) => void;
};

const calculateScore = (time: number, moves: number, boardSize: number) => {
  return (60 * 60 - time) * (boardSize / moves);
}

const Game = ({ theme, boardSize, swapsPerTurn, paused, handleGameEnd }: GameProps) => {
  // state from props
  const boardHeight = 2 + boardSize;
  const boardWidth = 4 + Number(boardSize === 2);
  const boardValues = Array.from({ length: boardHeight * boardWidth / 2 }, (_, i) => i );

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
    const newGameModel = [...gameModel];
    newGameModel[index].state = "flipped";
    setGameModel(newGameModel);
    setMoves(moves + 1);

    if (revealedCards.current.length === 2) {
      setTurn(false);
      checkMatch();
    }
  };

  const checkMatch = async () => {
    const updateModel = (state: "matched" | "rest") => {
      console.log("updating model");
      console.log(gameModel);

      const updatedModel = [...gameModel];
      updatedModel[revealedCards.current[0]].state = state;
      updatedModel[revealedCards.current[1]].state = state;
      setGameModel(updatedModel);

      console.log(updatedModel);

      // reset revealedCards
      revealedCards.current.length = 0;
    }

    if (gameModel[revealedCards.current[0]].item === gameModel[revealedCards.current[1]].item) {
      // match
      const newTilesMatched = cardsMatched + 2;
      if (newTilesMatched === boardHeight * boardWidth) {
        // game won
        handleGameCompletion();
      }

      activeIndices.current.delete(revealedCards.current[0]);
      activeIndices.current.delete(revealedCards.current[1]);
      
      setCardsMatched(newTilesMatched);
      updateModel("matched");

    } else {
      // no match
      setTimeout(() => {
        updateModel("rest");
      }, 500);
    }
  };

  const swapCards = () => {
    if (swapNumber < swapsPerTurn) {
      console.log("swapping cards");
      console.log(gameModel);

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
        setSwapNumber(swapNumber + 1);
      }, 1000);
    } else {
      setTurn(true);
    }
  };

  const handleGameCompletion = () => {
    const score = calculateScore(time, moves, boardHeight * boardWidth);
    if (!highScore || score > highScore) {
      setHighScore(score);
      handleGameEnd(score, score);
    } else {
      handleGameEnd(score, highScore);
    }
  };

  useEffect(() => {
    if (!turn) {
      swapCards();
    } else {
      setSwapNumber(0);
    }
  }, [gameModel]);  // run swap every time game model is updated at end of user's turn

  // tsx component
  return (
    <div className="grid grid-cols-4">
      {
        gameModel.map((model, idx) => {
          return <div key={idx} className="row w-fit">
            <GameCard index={idx} item={model.item} state={model.state} theme={theme} disabled={paused || !turn} onClick={handleClick}/>
          </div>;
        })
      }
    </div>
  );
};

export default Game;
