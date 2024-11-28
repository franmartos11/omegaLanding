"use client";

import React, { useState } from "react";

const BrandsComponent = () => {
    const allBrands = [
        { name: "Lysoform", logo: "/lisoform.webp" },
        { name: "Sony", logo: "/sonyLogo.webp" },
        { name: "Campanita", logo: "/tinacosLogo.webp" },
        { name: "Tinacos", logo: "/philipsLogo.webp" },
        { name: "Raid", logo: "/cifLogo.webp" },
        { name: "Higienol", logo: "/epsonLogo.webp" },
        { name: "Media Naranja", logo: "/mediaNaranjaLogo.webp" },
        { name: "Epson", logo: "/raidLogo.webp" },
        { name: "Kanji", logo: "/kanjiLogo.webp" },
        { name: "Fuyi", logo: "/fuyiLogo.webp" },
        { name: "Rotoplas", logo: "/rotoplasLogo.webp" },
        { name: "Homelite", logo: "/homeliteLogo.webp" },
        { name: "Wassington", logo: "/wassingtonLogo.webp" },
        { name: "Poet", logo: "/poetLogo.webp" },
        { name: "Higienol", logo: "/higienolLogo.webp" },
        { name: "Campanita", logo: "/campanitaLogo.webp" },
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
