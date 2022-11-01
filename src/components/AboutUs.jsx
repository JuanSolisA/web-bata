import React from "react";
import CardAboutUs from "./CardAboutUs";
import { fondoHome2, fondoHome3, fondoHome4 } from "../assets";

const info = [
  {
    id: 1,
    title: "CAMPAMENTOS",
    url: "#",
    image: fondoHome2,
    alt: "campamento",
  },
  {
    id: 2,
    title: "JUEGOS",
    url: "#",
    image: fondoHome3,
    alt: "juegos",
  },
  {
    id: 3,
    title: "GRUPOS",
    url: "#",
    image: fondoHome4,
    alt: "grupos",
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="flex flex-col bg-slate-300 items-center">
        <div className=" w-auto">
          <h2 className="font-poppins text-xl ml-10 mr-10 mt-10 mb-3 font-semibold md:text-4xl">
            QUIENES SOMOS?
          </h2>
          <h4 className="text-base ml-10 mr-10 text-center md:text-2xl">
            SOMOS JÓVENES QUE ENCUENTRAN EN EL SERVICIO A LOS DEMÁS, AL ESTILO
            DE DON BOSCO, EN CONTACTO CON LA NATURALEZA Y LA VIDA EN COMUNIDAD.
          </h4>
        </div>
        <div className="flex flex-col w-11/12 md:flex-row mt-7 mb-12">
          {info.map((inf) => (
            <div key={inf.id} className="md:w-1/3">
              <CardAboutUs
                title={inf.title}
                imageSource={inf.image}
                url={inf.url}
                alt={inf.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutUs;
