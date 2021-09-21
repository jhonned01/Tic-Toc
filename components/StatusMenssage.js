import React from "react";

const StatusMenssage = ({ winner, current }) => {
  const ganador = winner && `Ganador es: ${winner}`;

  const noMovesLeft = current.value.every((el) => el !== null);
  const empate = !winner && noMovesLeft && "X y O Empate";
  const nextPlay =
    !winner && !noMovesLeft && `Siguiente Jugador: ${current.next ? "X" : "O"}`;
  return (
    <h2>
      {ganador}
      {empate}
      {nextPlay}
    </h2>
  );
};

export default StatusMenssage;
