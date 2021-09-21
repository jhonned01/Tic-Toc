import React, { useState } from "react";
import ButtonHistory from "../components/ButtonHistory";
import Cuadros from "../components/Cuadros";
import StatusMenssage from "../components/StatusMenssage";
import { calculateWinner } from "../helpers";
const Index = () => {
  const [history, setHistory] = useState([
    {
      value: Array(9).fill(null),
      next: true,
    },
  ]);

  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];

  const winner = calculateWinner(current.value);

  const handleClickCuadros = (position) => {
    if (current.value[position] || winner) {
      return;
    }
    setHistory((prev) => {
      const last = prev[prev.length - 1];
      const newValue = last.value.map((item, key) => {
        if (position === key) {
          return last.next ? "X" : "O";
        }
        return item;
      });
      console.log("====================================");
      console.log(last);
      console.log("====================================");
      console.log(newValue);
      console.log("====================================");
      console.log(prev);

      return prev.concat({ value: newValue, next: !last.next });
    });
    setCurrentMove((prev) => prev + 1);
  };

  const moveTo = (move) => {
    setCurrentMove(move);
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-72 space-y-4 ">
        <section className="text-center">
          <h1 className="text-3xl font-bold">Tic Toc</h1>
          <StatusMenssage winner={winner} current={current} />
        </section>
        <section className="">
          <Cuadros
            value={current.value}
            handleClickCuadros={handleClickCuadros}
          />
          <ButtonHistory
            history={history}
            moveTo={moveTo}
            currentMove={currentMove}
          />
        </section>
      </div>
    </section>
  );
};

export default Index;
