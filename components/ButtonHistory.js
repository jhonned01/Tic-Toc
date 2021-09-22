import React from "react";

const ButtonHistory = ({ history, moveTo, currentMove }) => {
  return (
    <ul className="grid grid-cols-2 gap-3 ">
      {history.map((_, key) => (
        <li key={key} className="">
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
