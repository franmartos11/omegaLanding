"use client";

import React, { useState } from "react";

const BrandsComponent = () => {
    
        const allBrands = [
          { name: "Epson", logo: "/epsonLogo.webp" },
          { name: "Brother", logo: "/brotherLogo.webp" },
          { name: "Noblex", logo: "/noblexLogo.png" },
          { name: "Fedefers", logo: "/fedefersLogo.webp" },
          { name: "Philco", logo: "/philcoLogo.webp" },
          { name: "Kanji", logo: "/kanjiLogo.webp" },
          { name: "LG", logo: "/lg_Logo.webp" },
          { name: "Motorola", logo: "/motorolaLogo.png" },
          { name: "Hisense", logo: "/hisenseLogo.png" },
          { name: "Lenovo", logo: "/lenovoLogo.webp" },
          { name: "Hp", logo: "/hpLogo.webp" },
          { name: "Dell", logo: "/dellLogo.webp" },
          { name: "Asus", logo: "/asusLogo.webp" },
          { name: "Bosh", logo: "/boschLogo.png" },
          { name: "Tinacos", logo: "/tinacosLogo.webp" },
          { name: "Fema", logo: "/femaLogo.webp" },
          { name: "Biassoni", logo: "/biassoniLogo.png" },
          { name: "Makita", logo: "/makitaLogo.png" },
          { name: "Stihl", logo: "/stihlLogo.png" },
          { name: "Gladiador", logo: "/gladiadorLogo.webp" },
          { name: "Escorial", logo: "/escorialLogo.webp" },
          { name: "Dibra", logo: "/dibraLogo.png" },
          { name: "Inelro", logo: "/inelroLogo.png" },
          { name: "Pauna", logo: "/pauna.jpg" },
          { name: "Moretti", logo: "/morettiLogo.webp" },
          { name: "Depaolo", logo: "/depaoloLogo.avif" },
          { name: "Neba", logo: "/nebaLogo.webp" },
          { name: "Drean", logo: "/dreanLogo.png" },
          { name: "Patagonia", logo: "/patagoniaLogo.webp" },
          { name: "Barbecue", logo: "/barbecueLogo.webp" },
          { name: "Media Naranja", logo: "/mediaNaranjaLogo.webp" },
          { name: "Johnson y Johnson", logo: "/j&j.svg" },
          { name: "Elite (papel)", logo: "/eliteLogo.png" },
          { name: "Washington", logo: "/wassingtonLogo.webp" },
          { name: "Sacchi", logo: "/sacchiLogo.png" },
          { name: "Raid", logo: "/raidLogo.webp" },
          { name: "Virulana", logo: "/virulanaLogo3.png" },
          { name: "Lysoform", logo: "/lisoform.webp" },
          { name: "Estisol", logo: "/estisolLogo.webp" },
          { name: "Noninos", logo: "/noninosLogo.webp" },
          { name: "Pampers", logo: "/pampersLogo.png" },
          { name: "Babysec", logo: "/babysecLogo.png" },
          { name: "Kovalplast", logo: "/kovalplastLogo.png" },
          { name: "Banplas", logo: "/banplasLogo.webp" },
          { name: "Cellpack", logo: "/cellpackLogo.png" },
        ];
      
      


    const [visibleBrands, setVisibleBrands] = useState(8);

    const handleShowMore = () => {
        setVisibleBrands((prev) => Math.min(prev + 8, allBrands.length));
    };

    return (
        <section
            id="marcas"
            className="bg-[url('/bggray.png')] bg-no-repeat bg-cover bg-center min-h-screen pt-[5rem] py-[5rem] px-4 text-center"
        >
            <div className="container px-6 pt-7 pb-0 mx-auto sm:pt-0">
                <h2 className="text-4xl text-black pt-16 font-semibold text-center capitalize lg:text-6xl">
                    TRABAJAMOS CON LAS MEJORES MARCAS
                </h2>

                <div className="flex justify-center mx-auto mt-4">
                    <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-5 h-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-10 h-1 mx-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-20 h-1 bg-orange-500 rounded-full"></span>
                </div>
            </div>

            <div className="flex pt-[5rem] pb-[5rem] align-middle justify-center">
                <div className="w-[80%] grid grid-cols-2 md:grid-cols-4 gap-[2rem] mt-10">
                    {allBrands.slice(0, visibleBrands).map((brand, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:bg-gradient-to-b hover:to-orange-400 hover:from-orange-100 opacity-0 animate-fadeIn"
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                title={brand.name}
                                className="h-[9rem] w-[9rem] object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {visibleBrands < allBrands.length && (
                <div className="mt-10">
                    <button
                        onClick={handleShowMore}
                        className="px-8 py-3 bg-orange-500 text-white font-medium rounded-full shadow-md hover:bg-orange-600 transition duration-300"
                    >
                        Descubre más
                    </button>
                </div>
            )}
        </section>
    );
};

export default BrandsComponent;
