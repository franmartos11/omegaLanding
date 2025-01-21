"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const OmegaShowcase2 = () => {
  const [activeSection, setActiveSection] = useState("omega-soluciones");

  const sections = [
    {
      id: "omega-distribuciones",
      logo: "/2.png",
      title: "OMEGA DISTRIBUCIONES",
      description:
        "Comercialización y distribución de todo tipo de productos y servicios.",
    },
    {
      id: "omega-clean",
      logo: "/3.png",
      title: "OMEGA CLEAN",
      description:
        "Fabricación y envasado de productos de higiene doméstica e institucional.",
    },
    {
      id: "omega-construcciones",
      logo: "/4.png",
      title: "OMEGA CONSTRUCCIONES",
      description:
        "Diseño, construcción, remodelación y desarrollo de todo tipo de proyectos.",
    },
    {
      id: "omega-tech",
      logo: "/5.png",
      title: "OMEGA TECH",
      description:
        "Desarrollo de software a medida y comercialización de hardware.",
    },
    {
      id: "omega-soluciones",
      logo: "/1.png",
      title: "OMEGA SOLUCIONES",
      description:
        "Multiples unidades de negocio diseñadas para abordar diferentes problemáticas.",
    },
  ];

  const handleLogoClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center p-2 lg:p-8 bg-[#DBDBDB] min-h-screen">
      {/* Contenedor central con logo e imágenes */}
      <div className="bg-[url('/bgHero.png')] bg-center relative flex items-center justify-center w-[20rem] lg:w-[29rem] h-[20rem] lg:h-[29rem]">
        {/* Imágenes en las esquinas */}
        {sections.map((section, index) => {
          const positionClasses = [
            "absolute top-2 left-2",
            "absolute top-2 right-2",
            "absolute bottom-2 left-2",
            "absolute bottom-2 right-2",
          ];

          const isActive = section.id === activeSection;

          const isMainButton = section.id === "omega-soluciones";

          return (
            <button
              key={section.id}
              onClick={() => handleLogoClick(section.id)}
              className={`${positionClasses[index]} ${
                isMainButton
                  ? "w-[7rem] lg:w-[15rem] h-[7rem] lg:h-[15rem]"
                  : "w-[4rem] lg:w-[6rem] h-[4rem] lg:h-[6rem]" 
              } rounded-full border-2 ${
                isActive
                  ? "shadow-lg shadow-orange-500 border-orange-500 scale-110"
                  : "shadow-md border-gray-300"
              } bg-white transition-all duration-300`}
            >
              <img
                src={section.logo}
                alt={section.title}
                className={`w-full h-full object-contain rounded-full ${
                  isActive ? "brightness-110" : ""
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Section for title and description */}
      <motion.div
        className="mt-2 lg:mt-0 text-center max-w-[25rem] lg:max-w-[35rem] px-4"
        key={activeSection} // Key helps re-trigger transition
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} // Smooth fade in/out for text
      >
        <h2 className="text-3xl lg:text-5xl font-bold text-orange-500">
          {sections.find((section) => section.id === activeSection)?.title}
        </h2>
        <p className="text-lg lg:text-xl text-gray-700 mt-[1.5rem]">
          {sections.find((section) => section.id === activeSection)?.description}
        </p>
      </motion.div>
    </div>
  );
};

export default OmegaShowcase2;


