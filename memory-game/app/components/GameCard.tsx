"use client"

import { useState } from "react";

// using colours to test game logic before implementing animations
const colours = ["red", "blue", "green", "yellow", "purple", "aqua", "coral", "pink", "orchid", "aquamarine"];
const backColour = "beige";

type GameCardProps = {
  item: number;
  index: number;
  state: "rest" | "flipped" | "matched";
  theme: "Fruit" | "Animal" | "Heart";
  disabled: boolean;
  onClick: (index: number) => void;
}

const GameCard = ({ item, index, state, theme, disabled, onClick }: GameCardProps) => {
  const handleClick = () => {
    if (!disabled) {
      onClick(index);
    }
  }

  return (
    <div className="card w-50 h-50" onClick={() => {handleClick()}} style={{background: state === "rest" ? backColour : colours[item]}}>
    </div>
  );
}

export default GameCard;