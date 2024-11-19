"use client";

import React from "react";

const WorkProcess = () => {
  const steps = [
    { title: "Análisis", icon: "/analysis-icon.png" },
    { title: "Gestión", icon: "/management-icon.png" },
    { title: "Entrega", icon: "/delivery-icon.png" },
    { title: "Seguimiento", icon: "/tracking-icon.png" },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      {/* Título */}
      <h2 className="text-4xl font-bold text-gray-800 uppercase mb-4">
        Forma de trabajo
      </h2>
      <div className="flex justify-center mx-auto mb-12">
        <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
        <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
        <span className="inline-block w-5 h-1 bg-orange-500 rounded-full"></span>
      </div>

      {/* Pasos */}
      <div className="flex items-center justify-center relative lg:gap-12">
        {steps.map((step, index) => (
          <div key={index} className="relative flex flex-col items-center">
            {/* Línea de conexión */}
            {index > 0 && (
              <div
                className="absolute top-1/2 -left-[50%] w-full h-[2px] bg-orange-500"
                style={{ zIndex: -1 }}
              ></div>
            )}

            {/* Icono */}
            <div className="flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-md">
              <img
                src={step.icon}
                alt={step.title}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* Título */}
            <p className="mt-4 text-lg font-bold text-gray-700">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;
