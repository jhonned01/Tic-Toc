import React, { useState, useEffect } from "react";
import Button from "../components/Botton";
const Cuadros = ({ value, handleClickCuadros, combinacion, winner }) => {
  const [buttonWin, setButtonWin] = useState([]);
  useEffect(() => {
    if (combinacion || winner) {
      const [a, b, c] = combinacion;
      let cuadrosWin = value.map((x, id) => {
        if (id === a || id === b || id === c) {
          return "win";
        }

        return x;
      });

      setButtonWin(cuadrosWin);
    }
  }, [winner, combinacion]);

  return (
    <div className="h-64 grid grid-cols-3  gap-4 ">
      <div className={`cuadros ${buttonWin[0] === "win" && "bg-blue-700"}`}>
        <Button value={value[0]} onClick={() => handleClickCuadros(0)} />
      </div>
      <div className={`cuadros ${buttonWin[1] === "win" && "bg-blue-700"}`}>
        <Button value={value[1]} onClick={() => handleClickCuadros(1)} />
      </div>
      <div className={`cuadros ${buttonWin[2] === "win" && "bg-blue-700"}`}>
        <Button value={value[2]} onClick={() => handleClickCuadros(2)} />
      </div>
      <div className={`cuadros ${buttonWin[3] === "win" && "bg-blue-700"}`}>
        <Button value={value[3]} onClick={() => handleClickCuadros(3)} />
      </div>
      <div className={`cuadros ${buttonWin[4] === "win" && "bg-blue-700"}`}>
        <Button value={value[4]} onClick={() => handleClickCuadros(4)} />
      </div>
      <div className={`cuadros ${buttonWin[5] === "win" && "bg-blue-700"}`}>
        <Button value={value[5]} onClick={() => handleClickCuadros(5)} />
      </div>
      <div className={`cuadros ${buttonWin[6] === "win" && "bg-blue-700"}`}>
        <Button value={value[6]} onClick={() => handleClickCuadros(6)} />
      </div>
      <div className={`cuadros ${buttonWin[7] === "win" && "bg-blue-700"}`}>
        <Button value={value[7]} onClick={() => handleClickCuadros(7)} />
      </div>
      <div className={`cuadros ${buttonWin[8] === "win" && "bg-blue-700"}`}>
        <Button value={value[8]} onClick={() => handleClickCuadros(8)} />
      </div>
    </div>
  );
};

export default Cuadros;
