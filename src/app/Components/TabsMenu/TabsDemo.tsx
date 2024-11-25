"use client";

import { Tabs } from "./Tabs";


export function TabsDemo() {
    

    const tabs = [
        {
            title: "test",
            value: "product",
            link: "/carcheck",
            logo: '/omegaDistribucionesLogo.webp',
            content: (
                <div className="flex items-center justify-center w-full h-[26rem]">
                    <img
                        src="/image.png"
                        alt="carcheck-data"
                        title="carcheck-data"
                        className="rounded-2xl justify-center align-middle"
                    />
                </div>
            ),
        },
        {
            title: "test",
            value: "services",
            link: "/auditorias",
            logo: '/omegaConstruccionesLogo.webp',
            content: (
                <div className="flex items-center justify-center w-full h-[26rem]">
                    <img
                        src="/image.png"
                        alt="Auditorias-data"
                        title="Auditorias-data"
                        className="rounded-2xl"
                    />
                </div>
            ),
        },
        {
            title: "test",
            value: "playground",
            link: "/desarrollo-web",
            logo: '/omegaCleanLogo.webp',
            content: (
                <div className="flex items-center justify-center w-full h-[26rem] ">
                    <img
                        src="/image.png"
                        alt="Paginas-Web-data"
                        title="Paginas-Web-data"
                        className="rounded-2xl"
                    />
                </div>
            ),
        },
        {
            title: "test",
            value: "content",
            link: "/apps-a-medida",
            logo: '/omegaTechLogo.webp',
            content: (
                <div className="flex items-center justify-center w-full h-[26rem]">
                    <img
                        src="/image.png"
                        alt="Apps-a-Medida-data"
                        title="Apps-a-Medida-data"
                        className="rounded-2xl"
                    />
                </div>
            ),
        },
    ];

    return (
        <div className="pt-[5rem]" id="tabsDemo"> 
            <div className="container    px-6 pt-7 pb-0 mx-auto sm:pt-0  ">
                <h2 className="text-4xl pt-16  font-semibold text-center  capitalize lg:text-6xl ">
                    UNIDADES DE NEGOCIO
                </h2>
                <div className="flex justify-center mx-auto mt-6">
                    <span className="inline-block w-40 h-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-3 h-1 mx-1 bg-orange-500 rounded-full"></span>
                    <span className="inline-block w-1 h-1 bg-orange-500 rounded-full"></span>
                </div>
            </div>
            <div className="h-[20rem] md:h-[37rem]  [perspective:1000px] relative  flex flex-col max-w-5xl mx-auto w-full align-middle   items-start justify-start mt-10 mb-40">
                <Tabs tabs={tabs} />
            </div></div>
    );
}


