"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

interface LogoData {
  id: string;
  logo: string;
  title: string;
  description: string;
}

const logos: LogoData[] = [
  {
    id: "omega-soluciones",
    logo: "/omegaSolucionesLogo3.png",
    title: "OMEGA SOLUCIONES",
    description: "Lo necesitas? Lo tenemos.",
  },
  {
    id: "omega-distribuciones",
    logo: "/omegaDistribucionesLogo_no_background.png",
    title: "OMEGA DISTRIBUCIONES",
    description: "Distribución confiable y rápida.",
  },
  {
    id: "omega-clean",
    logo: "/omegaCleanLogo_no_background.png",
    title: "OMEGA CLEAN",
    description: "Limpieza al alcance de tu mano.",
  },
  {
    id: "omega-construcciones",
    logo: "/omegaConstruccionesLogo_no_background.png",
    title: "OMEGA CONSTRUCCIONES",
    description: "Construyendo el futuro contigo.",
  },
  {
    id: "omega-tech",
    logo: "/omegaTechLogo_no_background.png",
    title: "OMEGA TECH",
    description: "Innovación en cada clic.",
  },
];

const OmegaShowcase: React.FC = () => {
  const [activeLogo, setActiveLogo] = useState<LogoData>(logos[0]);

  const handleLogoChange = (logo: LogoData) => {
    setActiveLogo(logo);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col items-center justify-center pt-[12rem] lg:pt-[3rem]">
      {/* Contenedor principal con dos columnas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 w-full max-w-5xl">
        {/* Columna izquierda: Logo principal */}
        <motion.div
          key={activeLogo.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-full p-8 shadow-lg">
            <img
              src={activeLogo.logo}
              alt={activeLogo.title}
              className="h-[20rem] w-[20rem] object-contain"
            />
          </div>
        </motion.div>

        {/* Columna derecha: Información */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h1 className="text-4xl font-bold text-gray-800">{activeLogo.title}</h1>
          <p className="text-lg text-gray-600 mt-4">{activeLogo.description}</p>
          <button className="mt-6 px-6 py-3 bg-white text-gray-800 font-bold rounded-full shadow-md hover:bg-gray-200 transition-all">
            Más información
          </button>
        </div>
      </div>

      {/* Logos secundarios con separador */}
      <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6 mt-12 w-full">
        {/* OMEGA SOLUCIONES */}
        <div className="flex flex-col items-center">
          <button
            onClick={() => handleLogoChange(logos[0])}
            className={`flex flex-col items-center transition-all duration-300 ${
              activeLogo.id === logos[0].id
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <div className="bg-white rounded-full p-4 shadow-md">
              <img
                src={logos[0].logo}
                alt={logos[0].title}
                className="h-[9rem] w-[9rem] object-contain"
              />
            </div>
            <span className="mt-2 text-sm text-gray-800">{logos[0].title}</span>
          </button>
        </div>

        {/* Línea divisoria */}
        <div className="h-[9rem] w-[2px] bg-gray-400"></div>

        {/* Otros logos secundarios */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center gap-6">
          {logos.slice(1).map((logo) => (
            <button
              key={logo.id}
              onClick={() => handleLogoChange(logo)}
              className={`flex flex-col items-center transition-all duration-300 ${
                activeLogo.id === logo.id
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
            >
              <div className="bg-white rounded-full p-4 shadow-md">
                <img
                  src={logo.logo}
                  alt={logo.title}
                  className="h-[9rem] w-[9rem] object-contain"
                />
              </div>
              <span className="mt-2 text-sm text-gray-800">{logo.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OmegaShowcase;
