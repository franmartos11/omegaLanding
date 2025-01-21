"use client";

import React, { useState, useEffect } from "react";

const BrandsComponent = () => {
  const allBrands = [
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
    { name: "Bosh", logo: "/BoschLogo.png" },
    { name: "Tinacos", logo: "/tinacosLogo.webp" },
    { name: "Biassoni", logo: "/biassoniLogo.png" },
    { name: "Makita", logo: "/makitaLogo.png" },
    { name: "Stihl", logo: "/stihlLogo.png" },
    { name: "Dibra", logo: "/dibraLogo.png" },
    { name: "Pauna", logo: "/pauna.jpg" },
    { name: "Depaolo", logo: "/depaoloLogo.avif" },
    { name: "Drean", logo: "/dreanLogo.png" },
    { name: "Media Naranja", logo: "/mediaNaranjaLogo.webp" },
    { name: "Johnson y Johnson", logo: "/j&j.svg" },
    { name: "Elite (papel)", logo: "/eliteLogo.png" },
    { name: "Washington", logo: "/wassingtonLogo.webp" },
    { name: "Sacchi", logo: "/sacchiLogo.png" },
    { name: "Raid", logo: "/raidLogo.webp" },
    { name: "Virulana", logo: "/virulanaLogo3.png" },
    { name: "Lysoform", logo: "/lisoform.webp" },
    { name: "Pampers", logo: "/pampersLogo.png" },
    { name: "Babysec", logo: "/babysecLogo.png" },
    { name: "Kovalplast", logo: "/kovalplastLogo.png" },
    { name: "Cellpack", logo: "/cellpackLogo.png" },
    
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
            className="px-6 py-2 bg-orange-500 text-white font-medium rounded-full shadow-md hover:bg-orange-600 transition duration-300"
          >
            Descubre más
          </button>
        </div>
      )}
    </section>
  );
};

export default BrandsComponent;
