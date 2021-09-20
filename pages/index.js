import React from "react";
import Cuadros from "../components/Cuadros";

const index = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center">
      <div className="w-72 ">
        <section className="text-center">
          <h1 className="text-3xl font-bold">Tic Toc</h1>
        </section>
        <section className="">
          <Cuadros />
        </section>
      </div>
    </section>
  );
};

export default index;
