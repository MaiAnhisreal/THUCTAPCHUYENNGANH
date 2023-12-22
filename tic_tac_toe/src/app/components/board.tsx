"use client";

import { FC, useState } from "react";
import { Squares } from "./square";

type TSquareValue = string | null;
type TBoard = TSquareValue[];
type THistory = TBoard[];

interface IBoardProps {
  size?: number;
  winCount?: number;
}

const Board: FC<IBoardProps> = ({ size = 5, winCount = 5 }) => {
  const [board, setBoard] = useState<TBoard>(new Array(size * size).fill(null));
  const [history, setHistory] = useState<THistory>([board]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isX, setIsX] = useState(true);

  const [winner, setWinner] = useState<TSquareValue>(null);

  const onClick = (index: number) => {
    const newBoard = [...board];
    const newHistory = [...history];

    if (newBoard[index] !== null) return;

    //lưu value của cell
    newBoard[index] = isX ? "X" : "O";
    setBoard(newBoard);

    //lưu lịch sử
    newHistory.push(newBoard);
    setHistory(newHistory);

    //check win
    checkWin(newBoard);

    setIsX(!isX);
  };

  const onClickHistory = (index: number) => {
    setBoard(history[index]);
    setCurrentStep(index);
  };
  const checkWin = (board: TBoard) => {
    //biến sẽ là căn bậc 2 của độ dài bàn cờ vì nó có khích thước size x size
    const size = Math.sqrt(board.length);
  
    const directions = [
      [0, 1], // Ngang
      [1, 0], // Dọc
      [1, 1], // Chéo trái - phải
      [-1, 1], // Chéo phải - trái
    ];
  
    board.forEach((cell, index) => {
      const x = Math.ceil((index + 1) / size);
      const y = (index % size) + 1;
  
      if (cell !== null) {
        for (const [dx, dy] of directions) {
          let count = 1;
          //lưu tọa độ ô kế tiếp cần kiểm tra
          let newRow = x + dx;
          let newCol = y + dy;
  
          while (
            count < size &&
            newRow >= 1 &&
            newRow <= size &&
            newCol >= 1 &&
            newCol <= size &&
            board[(newRow - 1) * size + (newCol - 1)] === cell//so sánh giá trị ô kế tiếp với cell phải giống nhau
          ) {
            count++;
            newRow += dx;
            newCol += dy;
          }
  
          if (count === size) {
            setWinner(cell);
            return;
          }
        }
      }
    });
  
    if (board.every((cell) => cell !== null)) {
      setWinner("Hòa");
    }
  };

  return (
    <div className="flex gap-10 justify-center items-center h-screen w-screen">
      {winner && <div className="p-10 bg-red-50 ">Winner: {winner}</div>}
      <div className="">
        {new Array(size).fill(null).map((_value, row) => {
          return (
            <div className="flex" key={row}>
              {new Array(size).fill(null).map((_value, col) => {
                return <Squares key={col} value={board[row * size + col]} onClick={() => onClick(row * size + col)} />;
              })}
            </div>
          );
        })}
      </div>
      <div className="">
  {history.map((value: TBoard, index: number) => {
    return (
      <div key={index} className={`flex gap-4 cursor-pointer ${index === currentStep ? 'highlight' : ''}`} onClick={() => onClickHistory(index)}>
        <div className=""> Go to move #{index}</div>
        {index === currentStep && (
          <div className="">{value.map((e, i) => <span key={i}>{e || "null"}{i !== value.length - 1 && "-"}</span>)}</div>
        )}
      </div>
    );
  })}
</div>
    </div>
  );
};
export default Board;