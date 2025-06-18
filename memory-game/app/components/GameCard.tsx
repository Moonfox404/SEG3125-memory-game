"use client"

// using colours to test game logic before implementing animations
const colours = ["red", "blue", "green", "yellow", "purple", "aqua", "coral", "pink", "orchid", "aquamarine"];
const backColour = "beige";

type GameCardProps = {
  item: number;
  state: "rest" | "flipped" | "matched";
  theme: "Fruit" | "Animal" | "Heart";
  disabled: boolean;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const GameCard = ({ item, state, onClick }: GameCardProps) => {
  return (
    <div className="card w-50 h-50" onClick={onClick} style={{background: state === "rest" ? backColour : colours[item]}}>
    </div>
  );
}

export default GameCard;