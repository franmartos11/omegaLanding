"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

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
    description: "Multiples unidades de negocio diseñadas para abordar diferentes problemáticas",
  },
  {
    id: "omega-distribuciones",
    logo: "/omegaDistribucionesLogo_no_background.png",
    title: "OMEGA DISTRIBUCIONES",
    description: "Comercialización y distribución de todo tipo de productos y servicios.",
  },
  {
    id: "omega-clean",
    logo: "/omegaCleanLogo_no_background.png",
    title: "OMEGA CLEAN",
    description: "Fabricacion y envasado de productos de higiene domestica e institucional.",
  },
  {
    id: "omega-construcciones",
    logo: "/omegaConstruccionesLogo_no_background.png",
    title: "OMEGA CONSTRUCCIONES",
    description: "Diseño, construcción, remodelación y desarrollo de todo tipo de proyectos.",
  },
  {
    id: "omega-tech",
    logo: "/omegaTechLogo_no_background.png",
    title: "OMEGA TECH",
    description: "Desarrollo de software a medida y comercialización de todo tipo de hardware",
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
      className="bg-[url('/bggray.png')] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col items-center justify-center px-4 pt-6 lg:pt-10"
    >
      {/* Contenido Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 w-full max-w-5xl  sm:mt-[6rem] mb-6 lg:mb-10">
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
          <h1 className="text-2xl sm:text-4xl font-bold text-gray-800">
            {activeLogo.title}
          </h1>
          <p className="text-base sm:text-xl text-gray-600 mt-4">
            {activeLogo.description}
          </p>
          <Link to="tabsDemo" smooth={true} duration={1000}>
            <button className="mt-6 px-4 py-2 sm:px-6 sm:py-3 bg-white text-gray-800 font-bold rounded-full shadow-md hover:bg-gray-200 transition-all">
              Más información
            </button>
          </Link>
        </div>
      </div>

      {/* Botones Siempre Abajo */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full mt-[3rem]">
        {logos.map((logo) => (
          <button
            key={logo.id}
            onClick={() => handleLogoChange(logo)}
            className={`flex flex-col items-center transition-all duration-300 ${
              activeLogo.id === logo.id
                ? "opacity-100"
                : "opacity-50 hover:opacity-100"
            }`}
          >
            <div className="bg-white rounded-full p-2 sm:p-4 shadow-md">
              <img
                src={logo.logo}
                alt={logo.title}
                className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
              />
            </div>
            <span className="mt-2 text-xs sm:text-sm text-gray-800">
              {logo.title}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OmegaShowcase;
