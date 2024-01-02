import { FC } from "react";

interface ISquareProps {
  value: String | null;
  onClick: () => void;
}

export const Squares: FC<ISquareProps> = ({ value, onClick }) => {
  const isXValue = value === "X";
  const isOValue = value === "O";
  const squareClassName = `square ${isXValue ? "x" : isOValue ? "o" : ""}`;
  return (
    
    <div onClick={onClick} className={squareClassName}>
      {value}
    </div>
  );
};