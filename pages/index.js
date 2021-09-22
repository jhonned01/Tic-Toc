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

  const { winner, combinacion } = calculateWinner(current?.value);

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
      return prev.concat({ value: newValue, next: !last.next });
    });
    setCurrentMove((prev) => prev + 1);
  };
  const moveTo = (move) => {
    setCurrentMove(move);
  };
  const handleClickNewGame = () => {
    setHistory([
      {
        value: Array(9).fill(null),
        next: true,
      },
    ]);
    setCurrentMove(0);
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center bg-blue-100">
      <div className="w-80 space-y-4 ">
        <section className="text-center">
          <h1 className="text-3xl font-bold text-blue-900">Tic Toc</h1>

          <StatusMenssage winner={winner} current={current} />
        </section>
        <section className="space-y-3">
          <Cuadros
            combinacion={combinacion}
            winner={winner}
            value={current.value}
            handleClickCuadros={handleClickCuadros}
          />
          <button
            type="button"
            onClick={handleClickNewGame}
            className="w-full h-11 rounded-xl text-center font-bold cursor-pointer ring-4 ring-blue-300 text-blue-900 hover:scale-110"
          >
            Iniciar Nuevo Juego
          </button>
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
