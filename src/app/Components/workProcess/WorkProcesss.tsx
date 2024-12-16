"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const WorkProcess = () => {
  const steps = [
    { title: "Análisis", icon: "/lupa.png" },
    { title: "Gestión", icon: "/management-icon.png" },
    { title: "Entrega", icon: "/delivery-icon.png" },
    { title: "Seguimiento", icon: "/tracking-icon.png" },
  ];

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Ejecutar al cargar la página
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const stepVariants = {
    hidden: { opacity: 0 }, // Sin movimiento por defecto
    visible: (index: number) => ({
      opacity: 1,
      y: !isMobile ? (index % 2 === 0 ? -50 : 50) : 0, // Movimiento solo si no es móvil
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: index * 0.3,
      },
    }),
  };

  // Intersection Observer
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="bg-[url('/bgorange.png')] bg-no-repeat bg-cover bg-center min-h-screen py-10 px-4 text-center"
    >
      {/* Título */}
      <div className="container mx-auto mb-10">
        <h2 className="text-4xl text-white font-semibold capitalize sm:text-5xl">
          FORMA DE TRABAJO
        </h2>
        <div className="flex justify-center mt-4">
          <span className="inline-block w-32 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-2 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      {/* Pasos */}
      <div className="flex flex-wrap justify-center gap-4 lg:flex-row lg:gap-16">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center w-1/2 sm:w-1/4 mb-4 lg:mb-0"
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={stepVariants}
            custom={index}
          >
            {/* Círculo */}
            <motion.div
              whileHover={!isMobile ? { scale: 1.1 } : {}}
              className="flex items-center justify-center w-[5rem] h-[5rem] sm:w-48 sm:h-48 bg-white rounded-full shadow-lg border-4 border-orange-500"
            >
              <img
                src={step.icon}
                alt={step.title}
                className="w-[3rem] h-[3rem] sm:w-[7rem] sm:h-[7rem] object-contain"
              />
            </motion.div>
            {/* Título */}
            <p className="mt-4 text-sm sm:text-lg font-bold text-white">
              {step.title}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
