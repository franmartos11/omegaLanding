"use client";

import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MissionVision = () => {
  const [missionRef, missionInView] = useInView({ triggerOnce: true });
  const [visionRef, visionInView] = useInView({ triggerOnce: true });

  return (
    <section className="bg-[url('/background3.png')] bg-no-repeat bg-cover bg-center min-h-screen py-16 px-6 relative text-center lg:text-left">
      {/* Contenedor principal */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Misión */}
        <motion.div
          ref={missionRef}
          initial={{ x: -100, opacity: 0 }}
          animate={missionInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold text-white uppercase mb-4">
            Nuestra Misión
          </h2>
          <div className="flex justify-center lg:justify-start mb-4">
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          </div>
          <p className="text-gray-100 text-2xl">
            Solucionar los problemas de abastecimiento de nuestros clientes,
            ofreciéndoles todo lo que requieran sin importar el tipo de producto
            o servicio.
          </p>
        </motion.div>

        {/* Imagen misión */}
        <motion.div
          ref={missionRef}
          initial={{ x: -100, opacity: 0 }}
          animate={missionInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="relative flex justify-center lg:justify-end"
        >
          <img
            src="/nuestraMision.webp"
            alt="Misión"
            className="w-[22rem] h-auto object-cover rounded shadow-lg"
          />
        </motion.div>

        {/* Imagen visión */}
        <motion.div
          ref={visionRef}
          initial={{ x: 100, opacity: 0 }}
          animate={visionInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative flex justify-center lg:justify-start"
        >
          <img
            src="/nuestraVision.webp"
            alt="Visión"
            className="w-[22rem] h-auto object-cover rounded shadow-lg"
          />
        </motion.div>

        {/* Visión */}
        <motion.div
          ref={visionRef}
          initial={{ x: 100, opacity: 0 }}
          animate={visionInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          className="relative z-10"
        >
          <h2 className="text-4xl font-bold text-white uppercase mb-4">
            Nuestra Visión
          </h2>
          <div className="flex justify-center lg:justify-start mb-4">
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          </div>
          <p className="text-gray-100 text-2xl">
            Apuntamos a trabajar en conjunto con las empresas más grandes de la
            región y convertirnos así, en un aliado estratégico para su
            desarrollo.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
