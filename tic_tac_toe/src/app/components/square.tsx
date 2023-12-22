import { FC } from "react";

interface ISquareProps {
  value: String | null;
  onClick: () => void;
}

export const Squares: FC<ISquareProps> = ({ value, onClick }) => {
  return (
    <div onClick={onClick} className="cursor-pointer w-20 h-20 border flex justify-center items-center font-black text-3xl">
      {value}
    </div>
  );
};