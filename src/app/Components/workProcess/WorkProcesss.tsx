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
    <section className=" py-20 px-6 text-center mh-[50rem]">
      {/* Título */}
      <div className="container    px-6 pt-7  mx-auto sm:pt-0 pb-[14rem]  ">
                <h2 className="text-4xl pt-16  font-semibold text-center  capitalize lg:text-6xl ">
                    FORMA DE TRABAJO
                </h2>
                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
                </div>
            </div>

      {/* Pasos */}
      <div className="relative flex flex-col items-center lg:flex-row lg:justify-center lg:gap-16">
        {steps.map((step, index) => (
          <div
            key={index}
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
            <div className="flex items-center justify-center w-48 h-48 bg-white rounded-full shadow-lg border-4 border-orange-500">
              <img
                src={step.icon}
                alt={step.title}
                className="w-20 h-20 object-contain"
              />
            </div>

            {/* Título */}
            <p className="mt-6 text-lg font-bold text-gray-700">{step.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WorkProcess;