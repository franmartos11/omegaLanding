"use client";
import React, { useState } from "react";
import { Menu } from "./NavbarMenu";
import { cn } from "@/app/utils/cn";
import { Link } from "react-scroll";

export function NavbarDemo() {
  return <Navbar />;
}

function Navbar({ className }: { className?: string }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={cn(
        "fixed inset-x-0 mx-auto z-50 flex items-center justify-between bg-white p-[0.5rem] border-b-2 border-gray-300",
        className
      )}
    >

      <div className="logo">
        <Link
          className="cursor-pointer"
          to="hero"
          smooth={true}
          duration={500}
        >
          <img
            src="/omegaLogo3.png"
            alt="Company Logo"
            className="h-[3rem] w-auto"
          />
        </Link>
      </div>

      <div className="hidden sm:flex  ">
        <Menu>
          <Link
            className="text-neutral-700 font-bold  px-[0.1rem] lg:px-[0.5rem] text-sm lg:text-lg hover:text-orange-500 cursor-pointer"
            to="hero"
            smooth={true}
            duration={1000}
          >
            INICIO
          </Link>
          <Link
            className="text-neutral-700 font-bold px-[0.1rem] lg:px-[0.5rem] text-sm lg:text-lg hover:text-orange-500 cursor-pointer"
            to="nosotros"
            smooth={true}
            duration={500}
          >
            NOSOTROS
          </Link>
          <Link
            className="text-neutral-700 font-bold px-[0.1rem] lg:px-[0.5rem] text-sm lg:text-lg hover:text-orange-500 cursor-pointer"
            to="tabsDemo"
            smooth={true}
            duration={500}
          >
            UNIDADES DE NEGOCIO
          </Link>
          <Link
            className="text-neutral-700 font-bold px-[0.1rem] lg:px-[0.5rem]  text-sm lg:text-lg hover:text-orange-500 cursor-pointer"
            to="marcas"
            smooth={true}
            duration={1000}
          >
            MARCAS
          </Link>
          <Link
            className="text-neutral-700 font-bold px-[0.1rem] lg:px-[0.5rem] text-sm lg:text-lg hover:text-orange-500 cursor-pointer"
            to="contactanos"
            smooth={true}
            duration={1000}
          >
            CONTACTANOS
          </Link>
        </Menu>
      </div>

      <button
        className="sm:hidden flex items-center text-neutral-700 focus:outline-none"
        onClick={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        <div className="space-y-2">
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
          <span className="block w-6 h-0.5 bg-gray-700"></span>
        </div>
      </button>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-40 sm:hidden">
          <Menu>
            <Link
              className="text-neutral-700 font-bold text-lg hover:text-orange-500 cursor-pointer"
              to="hero"
              smooth={true}
              duration={500}
            >
              INICIO
            </Link>
            <Link
              className="text-neutral-700 font-bold  text-lg hover:text-orange-500 cursor-pointer"
              to="tabsDemo"
              smooth={true}
              duration={500}
            >
              UNIDADES DE NEGOCIO
            </Link>
            <Link
              className="text-neutral-700 font-bold  text-lg hover:text-orange-500 cursor-pointer"
              to="marcas"
              smooth={true}
              duration={500}
            >
              MARCAS
            </Link>
            <Link
              className="text-neutral-700 font-bold  text-lg hover:text-orange-500 cursor-pointer"
              to="nosotros"
              smooth={true}
              duration={500}
            >
              NOSOTROS
            </Link>
            <Link
              className="text-neutral-700 font-bold  text-lg hover:text-orange-500 cursor-pointer"
              to="contactanos"
              smooth={true}
              duration={1000}
            >
              CONTACTANOS
            </Link>
          </Menu>
        </div>
      )}
    </nav>
  );
}
