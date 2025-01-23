"use client";

import React, { useState, useEffect } from "react";

const BrandsComponent = () => {
  const allBrands = [
    // 1. Tecnología y Electrónica
    { name: "Epson", logo: "/epsonLogo.webp" },
    { name: "Brother", logo: "/brotherLogo.webp" },
    { name: "Noblex", logo: "/noblexLogo.png" },
    { name: "Philco", logo: "/philcoLogo.webp" },
    { name: "Kanji", logo: "/kanjiLogo.webp" },
    { name: "LG", logo: "/lg_logo.webp" },
    { name: "Motorola", logo: "/motorolaLogo.png" },
    { name: "Lenovo", logo: "/lenovoLogo.webp" },
    { name: "Hp", logo: "/hpLogo.webp" }, 
    { name: "Dell", logo: "/dellLogo.webp" },
    { name: "Asus", logo: "/asusLogo.webp" },
    { name: "Intel", logo: "/intelLogo.png" },
    { name: "Kingston", logo: "/kingston.png" },
  
    // 2. Herramientas y Equipamiento Industrial
    { name: "Bosh", logo: "/BoschLogo.png" }, // Parece Bosch, si es correcto corrige el nombre
    { name: "Makita", logo: "/makitaLogo.png" },
    { name: "Stihl", logo: "/stihlLogo.png" },
    { name: "Biassoni", logo: "/biassoniLogo.png" },
  
    // 3. Electrodomésticos
    { name: "Drean", logo: "/dreanLogo.png" },
    { name: "Noblex", logo: "/noblexLogo.png" }, // Noblex ya está en otra categoría, pero coincide
  
    // 4. Materiales de Construcción
    { name: "Tinacos", logo: "/tinacosLogo.webp" },
  
    // 5. Cuidado Personal y Familiar
    { name: "Johnson y Johnson", logo: "/j&j.svg" }, // Nombre correcto sería "Johnson & Johnson"
    { name: "Pampers", logo: "/pampersLogo.png" },
    { name: "Babysec", logo: "/babysecLogo.png" },
  
    // 6. Descartable
    { name: "Kovalplast", logo: "/kovalplastLogo.png" }, // Nombre correcto sería "Koval"
    { name: "Cellpack", logo: "/cellpackLogo.png" },
  
    // 7. Productos Químicos y de Limpieza
    { name: "Raid", logo: "/raidLogo.webp" },
    { name: "Sacchi", logo: "/sacchiLogo.png" },
    { name: "Elite (papel)", logo: "/eliteLogo.png" }, // Nombre correcto sería "Elite"
    { name: "Virulana", logo: "/virulanaLogo3.png" },
    { name: "Washington", logo: "/wassingtonLogo.webp" }, // Nombre correcto sería "Wassington"
    { name: "Lysoform", logo: "/lisoform.webp" },
    { name: "Media Naranja", logo: "/mediaNaranjaLogo.webp" },
  ];

  const [visibleBrands, setVisibleBrands] = useState(8);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
      setVisibleBrands(window.innerWidth < 640 ? 8 : 16);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleShowMore = () => {
    setVisibleBrands((prev) => Math.min(prev + (isMobile ? 8 : 16), allBrands.length));
  };

  return (
    <section
      id="marcas"
      className="bg-[url('/bggray.png')] bg-no-repeat bg-cover bg-center min-h-screen pt-[5rem] py-[5rem] px-4 text-center"
    >
      {/* Título */}
      <div className="container px-6 pt-7 pb-0 mx-auto">
        <h2 className="text-4xl text-black font-semibold text-center capitalize lg:text-6xl">
          TRABAJAMOS CON LAS MEJORES MARCAS
        </h2>
        <div className="flex justify-center mx-auto mt-4">
          <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-5 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      {/* Grid de Marcas */}
      <div className="flex sm:pt-[5rem] pt-[3rem] pb-[3rem] justify-center">
        <div
          className="w-full max-w-[80%] grid grid-cols-2 sm:grid-cols-4 gap-6"
        >
          {allBrands.slice(0, visibleBrands).map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 transition-all duration-300 hover:bg-gradient-to-b hover:to-orange-400 hover:from-orange-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                title={brand.name}
                className="h-[4rem] w-[4rem] object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Botón "Mostrar Más" */}
      {visibleBrands < allBrands.length && (
        <div className="mt-10">
          <button
            onClick={handleShowMore}
            className="px-6 py-2 bg-orange-500 uppercase text-white font-semibold rounded-full shadow-md hover:bg-orange-600 transition duration-300"
          >
            Descubre más
          </button>
        </div>
      )}
    </section>
  );
};
export default BrandsComponent;