import React, { useState } from "react";
import Cuadros from "../components/Cuadros";
import { calculateWinner } from "../helpers";
const Index = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [next, setNext] = useState(false);

  const winner = calculateWinner(value);

  const mensaje = winner
    ? `Ganador es: ${winner}`
    : `Siguiente Jugador: ${next ? "X" : "O"}`;

  const handleClickCuadros = (position) => {
    if (value[position] || winner) {
      return;
    }
    setValue((elem) =>
      elem.map((item, key) => {
        if (position === key) {
          return next ? "X" : "O";
        }
        return item;
      })
    );
    setNext(!next);
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-72 space-y-4 ">
        <section className="text-center">
          <h1 className="text-3xl font-bold">Tic Toc</h1>
          <h2 className="text-xl">{mensaje}</h2>
        </section>
        <section className="">
          <Cuadros value={value} handleClickCuadros={handleClickCuadros} />
        </section>
      </div>
    </section>
  );
};

export default Index;
