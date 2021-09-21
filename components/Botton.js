import React from "react";

const Botton = ({ value, onClick }) => {
  return (
    <>
      <button
        key={value}
        onClick={onClick}
        type="button"
        className="w-full h-full rounded-2xl hover:bg-blue-400 "
      >
        {value}
      </button>
    </>
  );
};

export default Botton;
