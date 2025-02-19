"use client";
import React from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMail } from "react-icons/fi";
import Image from "next/image";

export const Contacto = () => {
    return (
        <section id="contactanos" className="py-10 px-[1.5rem] lg:px-[3rem] bg-[url('/bgorange.png')] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col justify-center">

            <div className="container text-center sm:text-left mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Imagen a la izquierda */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="flex justify-center md:order-1"
                >
                    <Image
                        src="/1.webp"
                        alt="Omega Logo"
                        width={350}
                        height={350}
                        className="w-[10rem] lg:w-[18rem] h-[10rem] lg:h-[18rem] rounded-full border-2"
                        priority
                    />
                </motion.div>

                {/* Información de contacto a la derecha */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="space-y-6 md:order-2"
                >
                    <h2 className="text-2xl uppercase text-white font-semibold lg:text-5xl">
                        Contactanos
                    </h2>

                    <p className="text-white text-sm lg:text-lg">
                        Ven a visitarnos o contáctanos por teléfono o correo electrónico.
                    </p>

                    {/* Sección de contacto con menor espacio */}
                    <div className="space-y-3">
                        {/* Compras */}
                        <div>
                            <p className="text-lg lg:text-xl text-white font-semibold">Compras</p>
                            <div className="flex items-center gap-4">
                                <FiMail className="text-white h-5 w-5" />
                                <span className="text-white text-xs lg:text-lg hover:text-[#f86709]">
                                    <a href="mailto:compras@omegasoluciones.com.ar">
                                        compras@omegasoluciones.com.ar
                                    </a>
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FiPhone className="text-white h-5 w-5" />
                                <span className="text-white text-xs lg:text-lg hover:text-[#f86709]">
                                    <a href="https://wa.me/5493872105425?text=Hola!%20">
                                        +54 9 387 210 5425
                                    </a>
                                </span>
                            </div>
                        </div>

                        {/* Ventas */}
                        <div>
                            <p className="text-lg lg:text-xl text-white font-semibold">Ventas</p>
                            <div className="flex items-center gap-4">
                                <FiMail className="text-white h-5 w-5" />
                                <span className="text-white text-xs lg:text-lg hover:text-[#f86709]">
                                    <a href="mailto:ventas@omegasoluciones.com.ar">
                                        ventas@omegasoluciones.com.ar
                                    </a>
                                </span>
                            </div>
                            <div className="flex items-center gap-4">
                                <FiPhone className="text-white h-5 w-5" />
                                <span className="text-white text-xs lg:text-lg hover:text-[#f86709]">
                                    <a href="https://wa.me/5493876195572?text=Hola!%20">
                                        +54 9 387 619 5572
                                    </a>
                                </span>
                            </div>
                        </div>

                        {/* Administración */}
                        <div>
                            <p className="text-lg lg:text-xl text-white font-semibold">Administración</p>
                            <div className="flex items-center gap-4">
                                <FiMail className="text-white h-5 w-5" />
                                <span className="text-white text-xs lg:text-lg hover:text-[#f86709]">
                                    <a href="mailto:administracion@omegasoluciones.com.ar">
                                        administracion@omegasoluciones.com.ar
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Sección del mapa con subtítulo de ubicación */}
            <div className="mt-6">
                <h2 className="text-2xl uppercase text-white font-semibold lg:text-5xl text-center">
                    ¿Dónde Nos Encontramos?
                </h2>
                <p className="text-white text-center text-sm lg:text-lg mt-2">
                    Arias Velásquez 733, A4400 Salta
                </p>

                <div className="rounded-lg overflow-hidden shadow-lg mt-4 max-w-3xl mx-auto">
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
            </div>

        </section>
    );
};
