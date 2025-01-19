"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const CombinedSection = () => {
  const [missionRef, missionInView] = useInView({ triggerOnce: true });
  const [visionRef, visionInView] = useInView({ triggerOnce: true });

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
    <section id="nosotros" className="bg-[url('/bgorange.png')] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col justify-center items-center px-6 py-[3rem] lg:py-[0rem] overflow-hidden">
      {/* Team Section (Parte Superior) */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="text-center max-w-5xl mx-auto mb-[3rem] sm:mb-[7rem]"
      >
        <motion.h2
          variants={fadeInUp}
          custom={0}
          className="text-4xl text-white font-semibold capitalize lg:text-6xl"
        >
          NOSOTROS
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          custom={1}
          className="flex justify-center mt-4 mb-8"
        >
          <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-5 h-1 bg-orange-500 rounded-full"></span>
        </motion.div>
        <motion.p
          variants={fadeInUp}
          custom={2}
          className="text-4xl text-white font-bold mb-4"
        >
          Desde 2019 que ayudamos a nuestros clientes en proyectos públicos y
          privados.
        </motion.p>
        <motion.p
          variants={fadeInUp}
          custom={3}
          className="text-2xl text-gray-100 pt-[1rem]"
        >
          Enfrentamos todo tipo de desafíos: soporte en inundaciones, sequías,
          proyectos mineros, campamentos, oficinas, colegios, hospitales,
          nuevos emprendimientos y más.
        </motion.p>
      </motion.div>

      {/* MissionVision (Parte Inferior) */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Bloque de Misión - Izquierda */}
        <motion.div
          ref={missionRef}
          initial={{ opacity: 0, translateX: -50 }}
          animate={missionInView ? { opacity: 1, translateX: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 flex flex-col text-center "
        >
          <h2 className="text-3xl font-bold text-white uppercase mb-4">
            Nuestra Misión
          </h2>
          <div className="flex justify-center  mb-4">
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          </div>
          <p className="text-gray-100 text-2xl max-w-[35rem] mx-auto lg:mx-0 ">
            Solucionar los problemas de distinta indole de nuestros clientes,
            ofreciéndoles todo lo que requieran sin importar el tipo de producto
            o servicio.
          </p>
        </motion.div>

        {/* Bloque de Visión - Derecha */}
        <motion.div
          ref={visionRef}
          initial={{ opacity: 0, translateX: 50 }}
          animate={visionInView ? { opacity: 1, translateX: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative z-10 flex flex-col text-center "
        >
          <h2 className="text-3xl font-bold text-white uppercase mb-4">
            Nuestra Visión
          </h2>
          <div className="flex justify-center mb-4">
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          </div>
          <p className="text-gray-100 text-2xl max-w-[35rem] mx-auto lg:mx-0 ">
            Trabajar en conjunto con las empresas más grandes de la región y
            convertirnos así, en un aliado estratégico para su desarrollo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedSection;
