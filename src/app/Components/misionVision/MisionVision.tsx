"use client";

import React from "react";

const MissionVision = () => {
  return (
    <section className=" py-16 px-6 relative text-center lg:text-left">
      {/* Contenedor principal */}
      <div className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Misión */}
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">
            Nuestra Misión
          </h2>
          <div className="flex justify-center lg:justify-start mb-4">
          <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          </div>
          <p className="text-gray-600 text-lg">
            Solucionar los problemas de abastecimiento de nuestros clientes,
            ofreciéndoles todo lo que requieran sin importar el tipo de producto
            o servicio.
          </p>
        </div>
        {/* Imagen misión */}
        <div className="relative flex justify-center lg:justify-end">
          <img
            src="/nuestraMision.webp"
            alt="Misión"
            className="w-[22rem] h-auto object-cover rounded shadow-lg"
          />
        </div>

        {/* Visión */}
        <div className="relative flex justify-center lg:justify-start">
          <img
            src="/nuestraVision.webp"
            alt="Visión"
            className="w-[22rem] h-auto object-cover rounded shadow-lg"
          />
        </div>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-gray-800 uppercase mb-4">
            Nuestra Visión
          </h2>
          <div className="flex justify-center lg:justify-start mb-4">
          <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
            <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          </div>
          <p className="text-gray-600 text-lg">
            Apuntamos a trabajar en conjunto con las empresas más grandes de la
            región y convertirnos así, en un aliado estratégico para su
            desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;