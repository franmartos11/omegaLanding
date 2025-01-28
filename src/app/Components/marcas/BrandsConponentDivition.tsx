"use client";

import React, { useState, useRef } from "react";

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
  ];

  const groupedBrands: { [key: string]: Brand[] } = allBrands.reduce((acc, brand) => {
    if (!acc[brand.type]) {
      acc[brand.type] = [];
    }
    acc[brand.type].push(brand);
    return acc;
  }, {} as { [key: string]: Brand[] });

  const [visibleCategory, setVisibleCategory] = useState<string | null>("Tecnología y Electrónica");
  const brandsRef = useRef<HTMLDivElement | null>(null);

  const handleCategoryClick = (type: string) => {
    setVisibleCategory((prev) => (prev === type ? null : type));

    // Solo hacer scroll en mobile y si la referencia no es null
    if (window.innerWidth < 768) {
      setTimeout(() => {
        if (brandsRef.current) {
          window.scrollTo({
            top: brandsRef.current.offsetTop - 120, // Offset para ver el título
            behavior: "smooth",
          });
        }
      }, 200);
    }
  };

  return (
    <section id="marcas" className="bg-gray-200 min-h-screen pt-20 py-20 px-4 text-center">
      <div className="container mx-auto">
        <h2 className="text-4xl font-semibold text-center capitalize lg:text-6xl text-black">
          TRABAJAMOS CON LAS MEJORES MARCAS
        </h2>
        <div className="flex justify-center mx-auto mt-4">
          <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-5 h-1 bg-orange-500 rounded-full"></span>
          <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
        </div>
      </div>

      <div className="container mx-auto mt-10">
        <div className="flex flex-wrap justify-center gap-4">
          {Object.keys(groupedBrands).map((type) => (
            <button
              key={type}
              onClick={() => handleCategoryClick(type)}
              className="w-[48%] sm:w-auto px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-lg hover:bg-orange-700 transition duration-300 text-center"
            >
              {type}
            </button>
          ))}
        </div>

        {visibleCategory && (
          <div ref={brandsRef} className="mt-10">
            <h3 className="text-2xl font-bold text-left text-black mb-4">{visibleCategory}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {groupedBrands[visibleCategory].map((brand, index) => (
                <div key={index} className="flex items-center justify-center bg-white rounded-lg shadow-md p-4 hover:bg-orange-300 transition duration-300">
                  <img src={brand.logo} alt={brand.name} title={brand.name} className="h-[4rem] w-[4rem] object-contain" />
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
