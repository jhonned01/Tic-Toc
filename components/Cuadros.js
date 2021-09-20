import React, { useState } from "react";
import Button from "../components/Botton";
const Cuadros = () => {
  const [value, setValue] = useState(Array(9).fill(null));
  const [next, setNext] = useState(true);

  const handleClickCuadros = (position) => {
    if (value[position]) {
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

  console.log(value);
  return (
    <div className="h-64 grid grid-cols-3  gap-4 ">
      <div className=" cuadros ">
        <Button value={value[0]} onClick={() => handleClickCuadros(0)} />
      </div>
      <div className=" cuadros">
        <Button value={value[1]} onClick={() => handleClickCuadros(1)} />
      </div>
      <div className=" cuadros">
        <Button value={value[2]} onClick={() => handleClickCuadros(2)} />
      </div>
      <div className=" cuadros">
        <Button value={value[3]} onClick={() => handleClickCuadros(3)} />
      </div>
      <div className=" cuadros">
        <Button value={value[4]} onClick={() => handleClickCuadros(4)} />
      </div>
      <div className=" cuadros">
        <Button value={value[5]} onClick={() => handleClickCuadros(5)} />
      </div>
      <div className=" cuadros">
        <Button value={value[6]} onClick={() => handleClickCuadros(6)} />
      </div>
      <div className=" cuadros">
        <Button value={value[7]} onClick={() => handleClickCuadros(7)} />
      </div>
      <div className=" cuadros">
        <Button value={value[8]} onClick={() => handleClickCuadros(8)} />
      </div>
    </div>
  );
};

export default Cuadros;
