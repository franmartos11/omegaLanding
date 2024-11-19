"use client";

import React from "react";
import Image from "next/image";

const MissionVision = () => {
  return (
    <section className="bg-gray-50 py-16 px-8 relative">
      {/* Título de Misión */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 uppercase">
          Nuestra Misión
        </h2>
        <div className="flex justify-center mx-auto mt-2">
          <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-5 h-1 bg-orange-500 rounded-full"></span>
        </div>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Solucionar los problemas de abastecimiento de nuestros clientes,
          ofreciéndoles todo lo que requieran sin importar el tipo de producto
          o servicio.
        </p>
      </div>

      {/* Contenido Principal */}
      <div className="flex flex-col lg:flex-row items-center lg:justify-around gap-16">
        {/* Imagen de la izquierda */}
        <div className="w-full lg:w-1/3">
          <div className="relative overflow-hidden rounded-tl-[120px] rounded-br-[120px] shadow-lg">
            <Image
              src="/office-photo.jpg" // Cambia esto a la ruta correcta
              alt="Oficina"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>

        {/* Logo central */}
        <div className="hidden lg:flex items-center justify-center w-1/6">
          <Image
            src="/logo-icon.png" // Cambia esto a la ruta correcta
            alt="Logo"
            width={100}
            height={100}
          />
        </div>

        {/* Imagen de la derecha */}
        <div className="w-full lg:w-1/3">
          <div className="relative overflow-hidden rounded-tr-[120px] rounded-bl-[120px] shadow-lg">
            <Image
              src="/warehouse-photo.jpg" // Cambia esto a la ruta correcta
              alt="Almacén"
              width={600}
              height={400}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Título de Visión */}
      <div className="text-center mt-16">
        <h2 className="text-4xl font-bold text-gray-800 uppercase">
          Nuestra Visión
        </h2>
        <div className="flex justify-center mx-auto mt-2">
          <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-5 h-1 bg-orange-500 rounded-full"></span>
        </div>
        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
          Apuntamos a trabajar en conjunto con las empresas más grandes de la
          región y convertirnos así, en un aliado estratégico para su desarrollo.
        </p>
      </div>
    </section>
  );
};

export default MissionVision;
