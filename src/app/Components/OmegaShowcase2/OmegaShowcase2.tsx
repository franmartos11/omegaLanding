"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Import motion from framer-motion
import { Link } from "react-scroll";

const OmegaShowcase2 = () => {
  const [activeSection, setActiveSection] = useState("omega-soluciones");

  const sections = [
    {
      id: "omega-distribuciones",
      logo: "/33.png",
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
    <div id="hero" className=" bg-[url('/1bg.png')] bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row items-center justify-center p-2 lg:p-8 min-h-screen">
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
              className={`${positionClasses[index]} ${isMainButton
                  ? "w-[10rem] lg:w-[15rem] h-[10rem] lg:h-[15rem]"
                  : "w-[5rem] lg:w-[8rem] h-[5rem] lg:h-[8rem]"
                } rounded-full border-2 ${isActive
                  ? "shadow-lg shadow-orange-500 border-orange-500 scale-110"
                  : "shadow-md border-gray-300"
                } bg-white transition-all duration-300`}
            >
              <img
                src={section.logo}
                alt={section.title}
                className={`w-full h-full object-contain rounded-full ${isActive ? "brightness-110" : ""
                  }`}
              />
            </button>
          );
        })}
      </div>

      {/* Section for title and description */}
      <motion.div
        className="ml-[0rem] lg:ml-[5rem] mt-2 lg:mt-0 text-center lg:text-start lg:pl-[2rem] max-w-[25rem] lg:max-w-[35rem] px-4"
        key={activeSection} // Key helps re-trigger transition
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }} // Smooth fade in/out for text
      >
        <h2 className=" pt-[1rem] text-3xl lg:text-4xl font-semibold text-[#f86709]">
          {sections.find((section) => section.id === activeSection)?.title}
        </h2>
        <p className="text-lg lg:text-2xl font-bold text-gray-500 mt-[1rem]">
          {sections.find((section) => section.id === activeSection)?.description}
        </p>
        <div className="pt-[1.5rem]">
        <Link
          className="px-6 py-3 bg-white text-black font-medium rounded-full shadow-md hover:bg-[#f86709] cursor-pointer"
          to="tabsDemo"
          smooth={true}
          duration={500}
        >
          MAS INFORMACION
        </Link>

        </div>
        
      </motion.div>
    </div>
  );
};

export default OmegaShowcase2;


