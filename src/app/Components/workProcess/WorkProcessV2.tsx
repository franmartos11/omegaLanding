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
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: index * 0.5,
      },
    }),
  };

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 1024;

  return (
    <section
      
      className="bg-[url('/bgorange.png')] bg-no-repeat bg-cover bg-center min-h-screen pt-[5rem] py-20 px-6 text-center mh-[50rem]"
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl text-white font-semibold capitalize lg:text-6xl">
          FORMA DE TRABAJO
        </h2>
        <div className="flex justify-center mt-6">
          <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      <div className="relative flex flex-col items-center lg:flex-row lg:justify-center lg:gap-16 space-y-10 lg:space-y-0 mt-10">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative flex flex-col items-center"
            custom={index}
            initial="hidden"
            animate="visible"
            variants={stepVariants}
          >
            

            {/* Íconos con círculos */}
            <motion.div
              whileHover={isDesktop ? { scale: 1.1 } : {}}
              className="flex items-center justify-center w-48 h-48 bg-white rounded-full shadow-lg border-4 border-orange-500"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-[7rem] h-[7rem] object-contain"
              />
            </motion.div>

            <p className="mt-6 text-lg font-bold text-white">{step.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
