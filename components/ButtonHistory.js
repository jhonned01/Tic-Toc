import React from "react";

const ButtonHistory = ({ history, moveTo, currentMove }) => {
  return (
    <ul className="grid grid-cols-2 gap-3 ">
      {history.map((_, key) => (
        <li key={key} className="filter drop-shadow-lg ">
          <button
            className={`cursor-pointer hover:scale-125 text-blue-900 ${
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
