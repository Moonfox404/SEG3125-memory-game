"use client";

import { useEffect, useRef, useState } from "react";
import useHighScore from "../hooks/useHighScore";
import GameCard from "./GameCard";
import TimeCounter from "./TimeCounter";
import { motion } from "motion/react";

type GameCardModel = {
  state: "rest" | "flipped" | "matched";
  item: number;
  key: number;
};

type GameProps = {
  theme: "fruit" | "animal" | "heart";
  boardSize: number; // 0, 1, or 2 (for small, medium, large)
  swapsPerTurn: number; // 0, 1, or 2
  paused: boolean;
  dark: boolean;
  handleGameEnd: (score: number, highScore: number) => void;
  gameNumber: number;
  highScore: number;
  setHighScore: (score: number) => void;
};

const calculateScore = (time: number, moves: number, boardSize: number) => {
  return (60 * 60 - time) * (boardSize / moves);
};

const Game = ({
  theme,
  dark,
  boardSize,
  swapsPerTurn,
  paused,
  handleGameEnd,
  gameNumber,
  highScore,
  setHighScore,
}: GameProps) => {
  // state from props
  const boardHeight = 2 + boardSize;
  // set board height to constant value of 5 to avoid setting num cols dynamically
  const numCards = boardHeight * 6;
  const boardValues = Array.from({ length: numCards / 2 }, (_, i) => i);

  // initialise state
  const [time, setTime] = useState(0);
  const [turn, setTurn] = useState(true);
  const [cardsMatched, setCardsMatched] = useState(0);
  const [moves, setMoves] = useState(0);
  const revealedCards = useRef<number[]>([]);
  const [gameModel, setGameModel] = useState<GameCardModel[]>([]);
  const activeIndices = useRef<Set<number>>(new Set());

  // rendering state
  const [render3d, setRender3d] = useState(false);

  useEffect(() => {
    // reset state

    const resetModel = [...boardValues, ...boardValues]
      .map((value, idx) => {
        return { state: "rest", item: value, key: idx };
      })
      .sort(() => Math.random() - 0.5) as GameCardModel[];

    setGameModel(resetModel);

    setCardsMatched(0);
    setMoves(0);
    setTime(0);
    setTurn(true);
    revealedCards.current.length = 0;
    activeIndices.current = new Set(
      Array.from({ length: resetModel.length }, (_, i) => i)
    );
  }, [numCards, swapsPerTurn, gameNumber]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1440px");
    console.log(mq.matches);
    setRender3d(mq.matches);
    mq.addEventListener("change", (evt) => { setRender3d(evt.matches) });
  }, []);

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
      const updatedModel = [...gameModel];
      updatedModel[revealedCards.current[0]].state = state;
      updatedModel[revealedCards.current[1]].state = state;
      setGameModel(updatedModel);

      // reset revealedCards
      revealedCards.current.length = 0;
    };

    if (
      gameModel[revealedCards.current[0]].item ===
      gameModel[revealedCards.current[1]].item
    ) {
      // match
      setTimeout(() => {
        const newTilesMatched = cardsMatched + 2;
        if (newTilesMatched === numCards) {
          // game won
          handleGameCompletion();
        }

        activeIndices.current.delete(revealedCards.current[0]);
        activeIndices.current.delete(revealedCards.current[1]);

        setCardsMatched(newTilesMatched);
        updateModel("matched");
        setTurn(true);
      }, 500);
    } else {
      // no match
      setTimeout(() => {
        updateModel("rest");
        swapCards(); // swap cards if the player guesses wrong
      }, 1000);
    }
  };

  const swapCards = () => {
    let previousModel = gameModel;

    if (swapsPerTurn == 0) {
      setTurn(true);
    }

    for (let i = 0; i < swapsPerTurn; i++) {
      console.log("swapping cards");
      console.log(previousModel);

      const indexArray = Array.from(activeIndices.current);
      const firstIndex = Math.floor(Math.random() * indexArray.length);
      const secondIndex = Math.floor(Math.random() * (indexArray.length - 1));

      const firstCard = indexArray[firstIndex];
      const secondCard = [
        ...indexArray.slice(0, firstIndex),
        ...indexArray.slice(firstIndex + 1, indexArray.length),
      ][secondIndex];

      const updatedModel = [...previousModel];
      updatedModel[firstCard] = previousModel[secondCard];
      updatedModel[secondCard] = previousModel[firstCard];

      previousModel = updatedModel;

      console.log(updatedModel);

      setTimeout(() => {
        setGameModel(updatedModel);

        if (i == swapsPerTurn - 1) {
          setTurn(true);
        }
      }, i * 2000);
    }
  };

  const handleGameCompletion = () => {
    const score = Math.round(calculateScore(time, moves, numCards));
    if (!highScore || score > highScore) {
      setHighScore(score);
      handleGameEnd(score, score);
    } else {
      handleGameEnd(score, highScore);
    }
  };

  // tsx component
  return (
    <div className="flex flex-col gap-5">
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
        <div className="col flex justify-center md:justify-start">
          <p className="mr-2">Time:</p>
          <TimeCounter running={!paused && turn} time={time} setTime={setTime} />
        </div>
        <div className="col flex justify-center md:justify-start">
          <p className="mr-2">Moves:</p>
          <p>{moves}</p>
        </div>
        <div className="col flex justify-center md:justify-end md:col-start-4 lg:col-start-6 xl:col-start-8">
          <p className="mr-2">High Score:</p>
          <p>{Number.isNaN(highScore) ? "_ _" : highScore}</p>
        </div>
      </div>
      {
        !render3d ?
          <div
            className={`grid gap-2 grid-cols-[repeat(6,minmax(30px,150px))] ${boardSize === 0
              ? "max-[515px]:grid-cols-4 max-[400px]:grid-cols-3 "
              : boardSize === 1
                ? "max-[515px]:grid-cols-6 max-[400px]:grid-cols-3"
                : "max-[515px]:grid-cols-4 max-[400px]:grid-cols-3"
              }`}
          >
            {gameModel.map((model, idx) => {
              return (
                <motion.div
                  key={model.key}
                  className="row w-fit"
                  layout
                  transition={{ type: "spring", duration: 1, bounce: 0.1 }}
                >
                  <GameCard
                    index={idx}
                    item={model.item}
                    state={model.state}
                    theme={theme}
                    dark={dark}
                    disabled={paused || !turn}
                    onClick={handleClick}
                  />
                </motion.div>
              );
            })}
          </div>
          :
          <div className={`grid gap-2 ${boardSize === 0
            ? "grid-cols-13"
            : boardSize === 1
              ? "grid-cols-14"
              : "grid-cols-15"
            }`}>
            {
              Array.from({ length: boardHeight }, (_, i) => i).map((value) => {
                return (
                  <div className={`row col-span-12 row-span-2 ${value === 0 ? "col-start-1 row-start-1" : value === 1 ? "col-start-2 row-start-2" : value === 2 ? "col-start-3 row-start-3" : "col-start-4 row-start-4"} grid gap-2 grid-cols-6`}>
                    {gameModel.slice(value * 6, (value + 1) * 6).map((model, idx) => {
                      return (
                        <motion.div
                          key={model.key}
                          className="row w-fit"
                          layout
                          transition={{ type: "spring", duration: 1, bounce: 0.1 }}
                        >
                          <GameCard
                            index={idx + 6 * value}
                            item={model.item}
                            state={model.state}
                            theme={theme}
                            dark={dark}
                            disabled={paused || !turn}
                            onClick={handleClick}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                )
              })
            }
          </div>
      }
    </div>
  );
};

export default Game;
