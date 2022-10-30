import React from "react";
import { fondoHome } from "../assets";

const Hero = () => {
  return (
    <>
{/*     <div className="absolute inset-0 w-full bg-slate-600 bg-opacity-75"></div>
 */}    <div
      className="flex flex-col w-full bg-green-500 overflow-hidden relative h-[800px]"
      >
        <img src={fondoHome} alt="" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
        <div className="flex h-full justify-center relative flex-col items-center">
        <h1 className="font-poppins text-3xl text-white tracking-wider">CNEL. DORREGO</h1>
        <h4 className="font-poppins text-xl text-white tracking-wider text-center">EXPLORADORES ARGENTINOS DE DON BOSCO</h4>
        </div>
    </div>
    </>
  );
};

export default Hero;
