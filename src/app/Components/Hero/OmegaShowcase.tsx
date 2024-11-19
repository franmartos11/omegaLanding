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
    logo: "/omega-soluciones-logo.png",
    title: "OMEGA SOLUCIONES",
    description: "Lo necesitas? Lo tenemos.",
  },
  {
    id: "omega-distribuciones",
    logo: "/omega-distribuciones-logo.png",
    title: "OMEGA DISTRIBUCIONES",
    description: "Distribución confiable y rápida.",
  },
  {
    id: "omega-clean",
    logo: "/omega-clean-logo.png",
    title: "OMEGA CLEAN",
    description: "Limpieza al alcance de tu mano.",
  },
  {
    id: "omega-construcciones",
    logo: "/omega-construcciones-logo.png",
    title: "OMEGA CONSTRUCCIONES",
    description: "Construyendo el futuro contigo.",
  },
  {
    id: "omega-tech",
    logo: "/omega-tech-logo.png",
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
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen flex flex-col items-center justify-center">
      {/* Logo principal */}
      <motion.div
        key={activeLogo.id}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <div className="bg-white rounded-full p-8 shadow-lg">
          <img
            src={activeLogo.logo}
            alt={activeLogo.title}
            className="h-40 w-40 object-contain"
          />
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mt-6">
          {activeLogo.title}
        </h1>
        <p className="text-lg text-gray-600 mt-2">{activeLogo.description}</p>
      </motion.div>

      {/* Botones para cambiar logo */}
      <div className="flex justify-center mt-12 space-x-8">
        {logos.map((logo) => (
          <button
            key={logo.id}
            onClick={() => handleLogoChange(logo)}
            className={`flex flex-col items-center transition-all duration-300 ${
              activeLogo.id === logo.id ? "opacity-100" : "opacity-50 hover:opacity-100"
            }`}
          >
            <div className="bg-white rounded-full p-4 shadow-md">
              <img
                src={logo.logo}
                alt={logo.title}
                className="h-16 w-16 object-contain"
              />
            </div>
            <span className="mt-2 text-sm text-gray-800">{logo.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default OmegaShowcase;
