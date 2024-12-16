"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

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
      y: 0,
    },
    visible: (index: number) => ({
      opacity: 1,
      x: 0,
      y: index % 2 === 0 ? -50 : 50,
      transition: {
        duration: 2,
        ease: "easeOut",
        delay: index * 0.5,
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
      className="bg-[url('/bgorange.png')] bg-no-repeat bg-cover bg-center min-h-screen pt-[5rem] py-20 px-6 text-center mh-[50rem]"
    >
      <div className="container px-6  mx-auto sm:pt-0 mb-[5rem] sm:pb-[8rem]">
        <h2 className="text-4xl  text-white font-semibold text-center capitalize lg:text-6xl">
          FORMA DE TRABAJO
        </h2>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </div>


      <div className="relative flex  items-center space-y-16 flex-row justify-center lg:space-y-0 lg:gap-16">
  {steps.map((step, index) => (
    <motion.div
      key={index}
      className={`relative flex flex-col items-center ${
        index % 2 === 0 ? "lg:translate-y-16" : "lg:-translate-y-16"
      }`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={stepVariants}
      custom={index}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
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
