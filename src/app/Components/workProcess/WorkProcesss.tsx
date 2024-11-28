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
      x: 0, // Empieza desde el centro horizontal
      y: 0, // Empieza desde el centro vertical
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0, // Posiciona horizontalmente para mantener responsive
      y: index % 2 === 0 ? -50 : 50, // Alterna posiciones en Y
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: index * 0.3, // Añade un pequeño retraso para cada paso
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
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} // Anima solo una vez cuando el 30% del elemento está en vista
        className="relative flex flex-col items-center lg:flex-row lg:justify-center lg:gap-16"
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            custom={index} // Pasamos el índice al controlador de variantes
            variants={stepVariants}
            className={`relative flex flex-col items-center ${
              index % 2 === 0 ? "lg:translate-y-16" : "lg:-translate-y-16"
            }`}
          >
            {/* Línea de conexión */}
            {index > 0 && (
              <div
                className="absolute bg-orange-500"
                style={{
                  width: "0px",
                  height: "4px", // Línea más gruesa
                  top: "50%",
                  left: "-130px",
                  transform: `rotate(${index % 2 === 0 ? "45deg" : "-45deg"})`,
                  transformOrigin: "center",
                }}
              ></div>
            )}

            {/* Círculo con ícono */}
            <motion.div
              whileHover={{ scale: 1.1 }} // Efecto de hover
              className="flex items-center justify-center w-48 h-48 bg-white rounded-full shadow-lg border-4 border-orange-500"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-[7rem] h-[7rem] object-contain"
              />
            </motion.div>

            {/* Título */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 * index }}
              className="mt-6 text-lg font-bold text-white"
            >
              {step.title}
            </motion.p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default WorkProcess;
