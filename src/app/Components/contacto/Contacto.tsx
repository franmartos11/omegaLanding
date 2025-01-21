"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";

export const Contacto = () => {
    return (
        <section className="py-16 px-[5rem] bg-[url('/bgorange.png')] bg-no-repeat bg-cover bg-center ">
            <div className="container text-center sm:text-left mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center"
                >
                    <Image
                        src="/callmen.webp" // Imagen de una persona hablando
                        alt="Persona hablando por teléfono"
                        width={400}
                        height={400}
                        className="object-contain rounded-lg shadow-lg"
                        priority
                    />
                </motion.div>
                {/* Columna Izquierda: Información de Contacto y Mapa */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-8"
                >
                    <h2 className="text-4xl text-white font-semibold capitalize lg:text-6xl">
                        ¿Dónde Nos Encontramos?
                    </h2>
                    <p className="text-white text-lg">
                        Ven a visitarnos o contáctanos por teléfono o correo electrónico.
                    </p>

                    {/* Información de Contacto */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 ">
                            <FiPhone className="text-white h-6 w-6 " />
                            <span className="text-white text-lg font-semibold hover:text-black  ">
                                <a href="https://wa.me/5493876195572?text=Hola!%20" >
                                    +54 9 387 619 5572
                                </a>
                            </span>
                        </div>
                        <div className="flex items-center gap-4">
                            <FiMail className="text-white h-6 w-6" />
                            <span className="text-white text-lg font-semibold hover:text-black ">
                                <a href="mailto:ventas@omegasoluciones.com.ar ">
                                ventas@omegasoluciones.com.ar 
                                </a>
                            </span>
                        </div>
                    </div>

                    {/* Mapa */}
                    <div className="rounded-lg overflow-hidden shadow-lg">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4917.1284462890555!2d-65.41137!3d-24.7618653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x941bc36adcbf6bd9%3A0x9db0642ee2c946ce!2sOmega%20Soluciones!5e0!3m2!1ses-419!2sar!4v1699621807831!5m2!1ses-419!2sar"
                            width="100%"
                            height="300"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Ubicación en el mapa"
                        ></iframe>
                    </div>
                </motion.div>


            </div>
        </section>
    );
};
