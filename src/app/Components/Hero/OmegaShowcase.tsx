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
    description:
      "Multiples unidades de negocio diseñadas para abordar diferentes problemáticas.",
  },
  {
    id: "omega-distribuciones",
    logo: "/omegaDistribucionesLogo_no_background.png",
    title: "OMEGA DISTRIBUCIONES",
    description:
      "Comercialización y distribución de todo tipo de productos y servicios.",
  },
  {
    id: "omega-clean",
    logo: "/omegaCleanLogo_no_background.png",
    title: "OMEGA CLEAN",
    description:
      "Fabricación y envasado de productos de higiene doméstica e institucional.",
  },
  {
    id: "omega-construcciones",
    logo: "/omegaConstruccionesLogo_no_background.png",
    title: "OMEGA CONSTRUCCIONES",
    description:
      "Diseño, construcción, remodelación y desarrollo de todo tipo de proyectos.",
  },
  {
    id: "omega-tech",
    logo: "/omegaTechLogo_no_background.png",
    title: "OMEGA TECH",
    description:
      "Desarrollo de software a medida y comercialización de hardware.",
  },
];

const OmegaShowcase: React.FC = () => {
  const [activeLogo, setActiveLogo] = useState<LogoData>(logos[0]);

  const handleLogoChange = (logo: LogoData) => {
    setActiveLogo(logo);
  };

  return (
    <div
      id="hero"
      className="bg-[url('/bggray.png')] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col items-center justify-start px-4 pt-[5rem] sm:pt-[10rem] pb-[3rem]"
    >
      {/* Contenido Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 w-full max-w-5xl mb-0 lg:mb-10">
        <motion.div
          key={activeLogo.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <div className="bg-white rounded-full p-6 lg:p-8 shadow-lg">
            <img
              src={activeLogo.logo}
              alt={activeLogo.title}
              className="h-32 w-32 lg:h-[20rem] lg:w-[20rem] object-contain"
            />
          </div>
        </motion.div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
            {activeLogo.title}
          </h2>
          <p className="text-base sm:text-xl text-gray-600 mt-4">
            {activeLogo.description}
          </p>
        </div>
      </div>

      {/* Botones - Logos de Unidades */}
      <div className="flex flex-wrap justify-center items-start gap-4 sm:gap-6 w-full mt-[1.5rem] sm:mt-[3rem]">
        {logos.map((logo) => (
          <button
            key={logo.id}
            onClick={() => handleLogoChange(logo)}
            className={`flex flex-col items-center transition-all duration-300 ${
              activeLogo.id === logo.id
                ? "opacity-100 scale-110"
                : "opacity-50 hover:opacity-100"
            } ${
              logo.id === "omega-soluciones"
                ? "order-first mb-4 w-full sm:w-auto"
                : ""
            }`}
          >
            <div className="bg-white rounded-full p-2 sm:p-4 shadow-md">
              <img
                src={logo.logo}
                alt={logo.title}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            </div>
            <span className="mt-2 text-xs sm:text-sm text-gray-800 font-medium">
              {logo.title}
            </span>
            {logo.id !== "omega-soluciones" && (
              <span className="text-[10px] sm:text-xs text-orange-500 font-semibold mt-1">
                Unidad de Negocio
              </span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default OmegaShowcase;
