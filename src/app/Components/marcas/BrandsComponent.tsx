"use client";

import React from "react";

const BrandsComponent = () => {
    const brands = [
        { name: "Lysoform", logo: "/lisoform.webp" },
        { name: "Sony", logo: "/sonyLogo.webp" },
        { name: "Campanita", logo: "/tinacosLogo.webp" },
        { name: "Tinacos", logo: "/philipsLogo.webp" },
        { name: "Raid", logo: "/cifLogo.webp" },
        { name: "Higienol", logo: "/epsonLogo.webp" },
        { name: "Media Naranja", logo: "/fuyiLogo.webp" },
        { name: "Epson", logo: "/raidLogo.webp" },
    ];

    return (
        <section id="marcas" className=" py-[5rem] px-4 text-center  ">
            <div className="container    px-6 pt-7 pb-0 mx-auto sm:pt-0  ">
                <h2 className="text-4xl pt-16  font-semibold text-center  capitalize lg:text-6xl ">
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
            
            <div className="flex pt-[5rem] pb-[5rem]  align-middle justify-center"> 
            <div className=" w-[80%] grid grid-cols-2 md:grid-cols-4 gap-[2rem] mt-10">
                {brands.map((brand, index) => (
                    <div
                    key={index}
                    className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6 transition-all duration-500 hover:bg-gradient-to-b hover:to-orange-400 hover:from-orange-100 "
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
            <div className="mt-10">
                <button className="px-8 py-3 bg-orange-500 text-white font-medium rounded-full shadow-md hover:bg-orange-600">
                    Descubre más
                </button>
            </div>
        </section>
    );
};

export default BrandsComponent;