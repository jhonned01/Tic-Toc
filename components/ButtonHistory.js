import React from "react";

const ButtonHistory = ({ history, moveTo, currentMove }) => {
  return (
    <ul>
      {history.map((_, key) => (
        <li key={key}>
          <button
            className={`cursor-pointer ${
              key === currentMove ? "font-bold" : ""
            }`}
            type="button"
            onClick={() => {
              moveTo(key);
            }}
          >
            {key === 0 ? "Movimientos:" : `ver movimiento #${key}`}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ButtonHistory;
