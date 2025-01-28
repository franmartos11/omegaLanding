"use client";

import React, { useState } from "react";

const BrandsComponentDivition = () => {
  type Brand = {
    name: string;
    logo: string;
    type: string;
  };

  const allBrands: Brand[] = [
    { name: "Epson", logo: "/epsonLogo.webp", type: "Tecnología y Electrónica" },
    { name: "Brother", logo: "/brotherLogo.webp", type: "Tecnología y Electrónica" },
    { name: "Noblex", logo: "/noblexLogo.png", type: "Tecnología y Electrónica" },
    { name: "Philco", logo: "/philcoLogo.webp", type: "Tecnología y Electrónica" },
    { name: "Kanji", logo: "/kanjiLogo.webp", type: "Tecnología y Electrónica" },
    { name: "LG", logo: "/lg_logo.webp", type: "Tecnología y Electrónica" },
    { name: "LG", logo: "/lg_logo.webp", type: "Electrodomésticos" },
    { name: "Motorola", logo: "/motorolaLogo.png", type: "Tecnología y Electrónica" },
    { name: "Lenovo", logo: "/lenovoLogo.webp", type: "Tecnología y Electrónica" },
    { name: "Hp", logo: "/hpLogo.webp", type: "Tecnología y Electrónica" },
    { name: "Dell", logo: "/dellLogo.webp", type: "Tecnología y Electrónica" },
    { name: "Asus", logo: "/asusLogo.webp", type: "Tecnología y Electrónica" },
    { name: "Intel", logo: "/intelLogo.png", type: "Tecnología y Electrónica" },
    { name: "Bosch", logo: "/BoschLogo.png", type: "Herramientas y Equipamiento Industrial" },
    { name: "Cat", logo: "/cat.png", type: "Herramientas y Equipamiento Industrial" },
    { name: "Makita", logo: "/makitaLogo.png", type: "Herramientas y Equipamiento Industrial" },
    { name: "Stihl", logo: "/stihlLogo.png", type: "Herramientas y Equipamiento Industrial" },
    { name: "Biassoni", logo: "/biassoniLogo.png", type: "Herramientas y Equipamiento Industrial" },
    { name: "Drean", logo: "/dreanLogo.png", type: "Electrodomésticos" },
    { name: "Noblex", logo: "/noblexLogo.png", type: "Electrodomésticos" },
    { name: "Inelro", logo: "/inelro.png", type: "Electrodomésticos" },
    { name: "Tinacos", logo: "/tinacosLogo.webp", type: "Materiales de Construcción" },
    { name: "Johnson & Johnson", logo: "/j&j.svg", type: "Cuidado Personal y Familiar" },
    { name: "Pampers", logo: "/pampersLogo.png", type: "Cuidado Personal y Familiar" },
    { name: "Babysec", logo: "/babysecLogo.png", type: "Cuidado Personal y Familiar" },
    { name: "Koval", logo: "/kovalplastLogo.png", type: "Descartable" },
    { name: "Cellpack", logo: "/cellpackLogo.png", type: "Descartable" },
    { name: "Raid", logo: "/raidLogo.webp", type: "Productos Químicos y de Limpieza" },
    { name: "Sacchi", logo: "/sacchiLogo.png", type: "Productos Químicos y de Limpieza" },
    { name: "Elite", logo: "/eliteLogo.png", type: "Productos Químicos y de Limpieza" },
    { name: "Virulana", logo: "/virulanaLogo3.png", type: "Productos Químicos y de Limpieza" },
    { name: "Wassington", logo: "/wassingtonLogo.webp", type: "Productos Químicos y de Limpieza" },
    { name: "Lysoform", logo: "/lisoform.webp", type: "Productos Químicos y de Limpieza" },
    { name: "Media Naranja", logo: "/mediaNaranjaLogo.webp", type: "Productos Químicos y de Limpieza" },
  ];

  const groupedBrands: { [key: string]: Brand[] } = allBrands.reduce((acc, brand) => {
    if (!acc[brand.type]) {
      acc[brand.type] = [];
    }
    acc[brand.type].push(brand);
    return acc;
  }, {} as { [key: string]: Brand[] });

  // Por defecto, mostrar "Tecnología y Electrónica"
  const [visibleCategory, setVisibleCategory] = useState<string | null>("Tecnología y Electrónica");

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

      {/* Botones de Categorías */}
      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(groupedBrands).map(([type]) => (
            <button
              key={type}
              onClick={() =>
                setVisibleCategory((prev) => (prev === type ? null : type))
              }
              className={`px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300 ${
                visibleCategory === type ? "bg-orange-700" : ""
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Marcas de la Categoría Seleccionada */}
        {visibleCategory && (
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-left text-black mb-4">
              {visibleCategory}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {groupedBrands[visibleCategory].map((brand, index) => (
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
        )}
      </div>
    </section>
  );
};

export default BrandsComponentDivition;
