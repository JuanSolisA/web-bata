import React from "react";
import { fondoHome1, fondoHome2, fondoHome3, fondoHome4 } from "../assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Hero = () => {
  return (
    <>
      <div className="flex flex-col w-full bg-black overflow-hidden relative h-[600px] md:h-[800px]">
        <img
          src={fondoHome1}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-40"></div>
        <div className="flex h-full justify-center relative flex-col items-center">
          <h1 className="font-poppins text-3xl md:text-8xl  text-white tracking-wider text-center">
            CNEL. DORREGO
          </h1>
          <h4 className="font-poppins text-xl md:text-4xl text-white tracking-wider text-center">
            EXPLORADORES ARGENTINOS DE DON BOSCO
          </h4>
          <a
            href="#"
            className="font-poppins bg-sky-900 absolute  md:right-10 bottom-10 w-60 md:w-96 h-20 font-bold text-2xl md:text-4xl text-white tracking-wide flex justify-center"
          >
            <div className="self-center ">
              Inscribite <FontAwesomeIcon icon={faEnvelope} />
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Hero;
