"use client";

import { Tabs } from "./Tabs";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

export function TabsDemo() {
  const [titleRef, titleInView] = useInView({ triggerOnce: true });
  const [tabsRef, tabsInView] = useInView({ triggerOnce: true });

  const tabs = [
    {
      value: "product",
      link: "/carcheck",
      logo: "/omegaDistribucionesLogo.webp",
      src: "/image.png",

      alt: "OmegaDistribucionesLogo",
      title: "carcheck-data",
    },
    {
      value: "services",
      link: "/auditorias",
      logo: "/omegaConstruccionesLogo.webp",
      src: "/image.png",

      alt: "OmegaConstruccionesLogo",
      title: "Auditorias-data",
    },
    {

      value: "playground",
      link: "/desarrollo-web",
      logo: "/omegaCleanLogo.webp",
      src: "/image.png",
      alt: "OmegaCleanLogo",
      title: "Paginas-Web-data",
    },
    {

      value: "content",
      link: "/apps-a-medida",
      logo: "/omegaTechLogo.webp",
      src: "/image.png",

      alt: "OmegaTechLogo",
      title: "Apps-a-Medida-data",
    },
  ];


  return (
    <div className=" bg-[url('/test3.png')] bg-no-repeat bg-cover bg-center  pt-[5rem] min-h-[60rem] " id="tabsDemo">
      <motion.div
        ref={titleRef}
        initial={{ opacity: 0, y: 50 }}
        animate={titleInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="container px-6 pt-7 pb-0 mx-auto sm:pt-0"
      >
        <h2 className="text-4xl text-black pt-16 font-semibold text-center capitalize lg:text-6xl">
          UNIDADES DE NEGOCIO
        </h2>
        <div className="flex justify-center mx-auto mt-6">
          <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-3 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </motion.div>

      <motion.div
        ref={tabsRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={tabsInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="h-[20rem] md:h-[37rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full align-middle items-start justify-start mt-10 mb-40"
      >
        <Tabs tabs={tabs} />
      </motion.div>
    </div>
  );
}


