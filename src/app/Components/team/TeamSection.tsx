"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const TeamSection = () => {
  const founders = [
    { name: "Francisco", role: "Administración", image: "/francisco.webp" },
    { name: "Tomás", role: "Ventas", image: "/tomas.webp" },
  ];

  const team = [
    { name: "Camila", role: "Almacén", image: "/camila.webp" },
    { name: "Matías", role: "Operario Depósito", image: "/matias.webp" },
    { name: "Julio", role: "Encargado Depósito", image: "/julio.webp" },
    { name: "Luciano", role: "Ventas", image: "/luciano.webp" },
    { name: "Agustina", role: "Compras", image: "/agustina.webp" },
    { name: "Martín", role: "Operario Depósito", image: "/martin.webp" },
  ];

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
      className="bg-[url('/bgorange.png')] bg-no-repeat bg-cover bg-center min-h-screen  flex justify-center align-middle"
    >
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="py-16 px-6 text-center w-[80%]"
      >

        <motion.h2
          variants={fadeInUp}
          custom={0}
          className="text-4xl pt-16 pb-[0.5rem] text-white font-semibold text-center capitalize lg:text-6xl"
        >
          NOSOTROS
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          custom={1}
          className="flex justify-center mx-auto mb-8"
        >
          <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-5 h-1 bg-orange-500 rounded-full"></span>
        </motion.div>


        <div className="flex flex-col pt-[3rem] lg:flex-row items-center lg:items-start gap-12 mb-16">

          <motion.div
            variants={fadeInUp}
            custom={2}
            className="lg:w-1/2 text-center sm:text-left"
          >
            <p className="text-3xl text-white font-bold mb-2">
              Hace más de cinco años que ayudamos a clientes en proyectos
              públicos y privados.
            </p>
            <p className="text-xl text-gray-100 pt-[1rem]">
              Enfrentamos todo tipo de desafíos: Soporte en inundaciones,
              Sequías, Proyectos mineros, Campamentos, Oficinas, Nuevos
              emprendimientos.
            </p>
          </motion.div>


          <motion.div
            className="lg:w-1/2 flex flex-wrap justify-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                custom={index + 3}
                className="text-center"
              >
                <Image
                  src={founder.image}
                  alt={founder.name}
                  width={160}
                  height={160}
                  className="rounded-full object-cover mx-auto mb-4"
                />
                <h4 className="text-lg font-bold text-gray-100">
                  {founder.name}
                </h4>
                <p className="text-sm text-gray-200">{founder.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>


        <motion.h3
          variants={fadeInUp}
          custom={founders.length + 2}
          className="text-2xl font-bold text-white uppercase mb-6"
        >
          
        </motion.h3>
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              custom={index + founders.length + 5}
              className="text-center"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={140}
                height={140}
                className="rounded-full object-cover mx-auto mb-4"
              />
              <h4 className="text-lg font-bold text-gray-100">{member.name}</h4>
              <p className="text-sm text-gray-200">{member.role}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>
    </div>
  );
};

export default TeamSection;
