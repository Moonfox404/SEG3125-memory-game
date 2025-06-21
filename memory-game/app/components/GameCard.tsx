"use client";

import { motion } from "motion/react";

type GameCardProps = {
  item: number;
  index: number;
  state: "rest" | "flipped" | "matched";
  theme: "fruit" | "animal" | "heart";
  dark: boolean;
  disabled: boolean;
  onClick: (index: number) => void;
};

type GameImgProps = Pick<GameCardProps, "item" | "theme" | "dark">;

const GameImg = ({ item, theme, dark }: GameImgProps) => {
  return (
    <img
      src={"./" + theme + "-" + item + "-" + (dark ? "dark" : "light") + ".PNG"}
    />
  );
};

const GameImgWithReveal = ({ item, theme, dark }: GameImgProps) => {
  return (
    <div className="grid">
      <motion.div
        className="col-start-1 row-start-1 z-2"
        initial={{ y: 0 }}
        animate={{ y: "clamp(-100px, -9.8vw, -55px)" }}
      >
        <img src={"./cup-trans-" + (dark ? "dark" : "light") + ".PNG"} />
      </motion.div>
      <div className="col-start-1 row-start-1 z-1">
        <GameImg item={item} theme={theme} dark={dark} />
      </div>
    </div>
  );
};

const GameCard = ({
  item,
  index,
  state,
  theme,
  dark,
  disabled,
  onClick,
}: GameCardProps) => {
  const handleClick = () => {
    if (!disabled && state != "matched") {
      onClick(index);
    }
  };

  return (
    <div
      className="w-full h-full 
             flex items-center justify-center"
      onClick={() => {
        handleClick();
      }}
    >
      {state === "rest" ? (
        <img src={"./cup-solid-" + (dark ? "dark" : "light") + ".PNG"} />
      ) : state === "matched" ? (
        <GameImg item={item} theme={theme} dark={dark} />
      ) : (
        <GameImgWithReveal item={item} theme={theme} dark={dark} />
      )}
    </div>
  );
};

export default GameCard;
