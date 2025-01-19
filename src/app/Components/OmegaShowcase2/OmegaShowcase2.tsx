"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion

const OmegaShowcase2 = () => {
  const [activeSection, setActiveSection] = useState("omega-soluciones");

  const sections = [
    {
      id: "omega-soluciones",
      logo: "/1.png",
      title: "OMEGA SOLUCIONES",
      description:
        "Multiples unidades de negocio diseñadas para abordar diferentes problemáticas.",
    },
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
  ];

  const handleLogoClick = (id: string) => {
    setActiveSection(id);
  };

  return (
    <div className="flex lg:flex-row flex-col items-center justify-around p-8 bg-[#DBDBDB] min-h-screen">
      {/* Contenedor central con logo e imágenes */}
      <div className="bg-[url('/bgHero.png')] bg-center relative flex items-center justify-center w-[29rem] h-[29rem]">
        {/* Logo central */}
        <motion.div
          className="flex items-center justify-center w-[14rem] h-[14rem] rounded-full shadow-2xl"
          key={activeSection} // Key will help trigger a re-render
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }} // Smooth fade in/out
        >
          <img
            src={sections.find((section) => section.id === activeSection)?.logo}
            alt="logo central"
            className="rounded-full shadow-2xl"
          />
        </motion.div>

        {/* Imágenes en las esquinas */}
        {sections
          .filter((section) => section.id !== activeSection)
          .map((section, index) => {
            const positionClasses = [
              "absolute top-4 left-4",
              "absolute top-4 right-4",
              "absolute bottom-4 left-4",
              "absolute bottom-4 right-4",
            ];

            return (
              <button
                key={section.id}
                onClick={() => handleLogoClick(section.id)}
                className={`${positionClasses[index]} w-[6rem] h-[6rem] rounded-full shadow-md border-2 bg-white`}
              >
                <img
                  src={section.logo}
                  alt={section.title}
                  className="w-full h-full object-contain rounded-full shadow-2xl"
                />
              </button>
            );
          })}
      </div>

      {/* Section for title and description */}
      <motion.div
        className="mt-0 text-center max-w-[35rem]"
        key={activeSection} // Key helps re-trigger transition
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} // Smooth fade in/out for text
      >
        <h2 className="text-5xl font-bold text-orange-500">
          {sections.find((section) => section.id === activeSection)?.title}
        </h2>
        <p className="text-xl text-gray-700 mt-[1.5rem]">
          {sections.find((section) => section.id === activeSection)?.description}
        </p>
      </motion.div>
    </div>
  );
};

export default OmegaShowcase2;

