"use client";
import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: i * 0.2,
      },
    }),
  };

  return (
    <div
      id="team"
      className="bg-[url('/bgorange.png')] bg-no-repeat bg-cover bg-center min-h-[80vh] flex justify-center items-center"
    >
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center px-6"
      >
        {/* Título */}
        <motion.h2
          variants={fadeInUp}
          custom={0}
          className="text-4xl text-white font-semibold capitalize lg:text-6xl"
        >
          NOSOTROS
        </motion.h2>

        {/* Separador */}
        <motion.div
          variants={fadeInUp}
          custom={1}
          className="flex justify-center mt-4 mb-8"
        >
          <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-5 h-1 bg-orange-500 rounded-full"></span>
        </motion.div>

        {/* Texto */}
        <motion.div
          variants={fadeInUp}
          custom={2}
          className="max-w-5xl mx-auto pt-[4rem]"
        >
          <p className="text-4xl text-white font-bold mb-4">
            Desde 2019 que ayudamos a nuestros clientes en proyectos públicos y privados.
          </p>
          <p className="text-2xl text-gray-100 pt-[1rem]">
            Enfrentamos todo tipo de desafíos: soporte en inundaciones, sequías, proyectos mineros, campamentos, oficinas, colegios, hospitales, nuevos emprendimientos y más.
          </p>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default TeamSection;

