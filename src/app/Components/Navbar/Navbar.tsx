"use client";
import React from "react";
import { HoveredLink, Menu } from "./NavbarMenu";
import { cn } from "@/app/utils/cn";

export function NavbarDemo() {
    return (
        <Navbar />
    );
}

function Navbar({ className }: { className?: string }) {
    
    return (
        <nav
            className={cn("fixed nav gowun-batang-bold inset-x-0 mx-auto z-50 flex justify-between items-center bg-white p-[0.6rem] border-b-2 border-gray-300", className)}
        >   <div className="logo">
                <img src="/omegalogo2.png" alt="Company Logo" className=" logo h-[4rem] w-auto" />
            </div>

            <div className=" option pr-[0rem] sm:pr-[5rem] lg:pr-[10rem]">
                <Menu >
                    <HoveredLink href="/">INICIO</HoveredLink>
                    <HoveredLink href="/">UNIDADES DE NEGOCIO</HoveredLink>
                    <HoveredLink href="/">MARCAS</HoveredLink>
                    <HoveredLink href="/">NOSOTROS</HoveredLink>
                </Menu>
            </div>
        </nav>
    );
}