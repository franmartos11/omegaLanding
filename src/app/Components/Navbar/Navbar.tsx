"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./NavbarMenu";
import { cn } from "@/app/utils/cn";

export function NavbarDemo() {
    return (
        <Navbar />
    );
}

function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <nav
            className={cn("fixed nav gowun-batang-bold inset-x-0 mx-auto z-50 flex justify-between items-center bg-white p-[0.6rem] border-b-2 border-gray-300", className)}
        >   <div className="logo">
                <a href="/"><img src="/omegalogo2.png" alt="Company Logo" className=" logo h-[4rem] w-auto" /></a>
            </div>

            <div className=" option pr-[0rem] sm:pr-[5rem] lg:pr-[10rem]">
                <Menu setActive={setActive} >
                    <HoveredLink href="/">INICIO</HoveredLink>
                    <HoveredLink href="/">UNIDADES DE NEGOCIO</HoveredLink>
                    <HoveredLink href="/">MARCAS</HoveredLink>
                    <HoveredLink href="/">NOSOTROS</HoveredLink>
                </Menu>
            </div>
        </nav>
    );
}