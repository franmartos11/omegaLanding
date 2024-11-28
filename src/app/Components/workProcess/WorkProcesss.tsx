"use client";

import React from "react";
import { motion } from "framer-motion";

const WorkProcess = () => {
  const steps = [
    { title: "Análisis", icon: "/lupa.png" },
    { title: "Gestión", icon: "/management-icon.png" },
    { title: "Entrega", icon: "/delivery-icon.png" },
    { title: "Seguimiento", icon: "/tracking-icon.png" },
  ];

  const stepVariants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 0, // Comienza en el centro
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0, // Se queda en la misma posición horizontal
      y: index % 2 === 0 ? -50 : 50, // Alterna posiciones en Y
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: index * 0.5, // Añade un pequeño retraso para cada paso
      },
    }),
  };

  return (
    <section className="bg-[url('/background3.png')] bg-no-repeat bg-cover bg-center min-h-screen pt-[5rem] py-20 px-6 text-center mh-[50rem]">
      {/* Título */}
      <div className="container px-6 pt-7 mx-auto sm:pt-0 pb-[14rem]">
        <h2 className="text-4xl pt-16 text-white font-semibold text-center capitalize lg:text-6xl">
          FORMA DE TRABAJO
        </h2>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      {/* Pasos */}
      <div className="relative flex flex-col items-center lg:flex-row lg:justify-center lg:gap-16 space-y-10 lg:space-y-0">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className={`relative flex flex-col items-center ${
              index % 2 === 0 ? "lg:translate-y-16" : "lg:-translate-y-16"
            }`}
            initial={window.innerWidth >= 1024 ? "hidden" : null} // Sin animación en móviles
            animate={window.innerWidth >= 1024 ? "visible" : null} // Animación solo en desktop
            variants={stepVariants}
            custom={index}
          >
            {/* Línea de conexión */}
            {index > 0 && window.innerWidth >= 1024 && ( // Línea solo en desktop
              <div
                className="absolute bg-orange-500"
                style={{
                  width: "0px",
                  height: "4px",
                  top: "50%",
                  left: "-130px",
                  transform: `rotate(${index % 2 === 0 ? "45deg" : "-45deg"})`,
                  transformOrigin: "center",
                }}
              ></div>
            )}

            {/* Círculo con ícono */}
            <motion.div
              whileHover={window.innerWidth >= 1024 ? { scale: 1.1 } : {}} // Hover solo en desktop
              className="flex items-center justify-center w-48 h-48 bg-white rounded-full shadow-lg border-4 border-orange-500"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-[7rem] h-[7rem] object-contain"
              />
            </motion.div>

            {/* Título */}
            <p className="mt-6 text-lg font-bold text-white">{step.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
