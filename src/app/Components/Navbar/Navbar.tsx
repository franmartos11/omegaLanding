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
        "fixed inset-x-0 mx-auto z-50 flex items-center justify-between bg-white p-4 border-b-2 border-gray-300",
        className
      )}
    >
      {/* Logo */}
      <div className="logo">
        <img
          src="/omegaLogo3.png"
          alt="Company Logo"
          className="h-[4rem] w-auto"
        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex pr-[0rem] sm:pr-[5rem] lg:pr-[10rem] ">
        <Menu>
          <Link
            className="text-neutral-700 text-xl hover:text-orange-500 cursor-pointer" // Aquí agregamos cursor-pointer
            to="hero"
            smooth={true}
            duration={1000}
          >
            INICIO
          </Link>
          <Link
            className="text-neutral-700 text-xl hover:text-orange-500 cursor-pointer"
            to="tabsDemo"
            smooth={true}
            duration={1000}
          >
            UNIDADES DE NEGOCIO
          </Link>
          <Link
            className="text-neutral-700 text-xl hover:text-orange-500 cursor-pointer"
            to="marcas"
            smooth={true}
            duration={1000}
          >
            MARCAS
          </Link>
          <Link
            className="text-neutral-700 text-xl hover:text-orange-500 cursor-pointer"
            to="team"
            smooth={true}
            duration={1000}
          >
            NOSOTROS
          </Link>
        </Menu>
      </div>

      {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg z-40 sm:hidden">
          <Menu>
            <Link
              className="text-neutral-700 text-xl hover:text-orange-500 cursor-pointer"
              to="hero"
              smooth={true}
              duration={1000}
            >
              INICIO
            </Link>
            <Link
              className="text-neutral-700 text-xl hover:text-orange-500 cursor-pointer"
              to="tabsDemo"
              smooth={true}
              duration={1000}
            >
              UNIDADES DE NEGOCIO
            </Link>
            <Link
              className="text-neutral-700 text-xl hover:text-orange-500 cursor-pointer"
              to="marcas"
              smooth={true}
              duration={1000}
            >
              MARCAS
            </Link>
            <Link
              className="text-neutral-700 text-xl hover:text-orange-500 cursor-pointer"
              to="team"
              smooth={true}
              duration={1000}
            >
              NOSOTROS
            </Link>
          </Menu>
        </div>
      )}
    </nav>
  );
}
