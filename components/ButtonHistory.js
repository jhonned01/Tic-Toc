import React from "react";

const ButtonHistory = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, key) => (
        <li key={key}>
          <button
            className={`${key === currentMove ? "font-bold" : ""}`}
            type="button"
            onClick={() => {
              moveTo(key);
            }}
          >
            {key === 0 ? "Inicia el juego" : `ver movimiento #${key}`}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ButtonHistory;
