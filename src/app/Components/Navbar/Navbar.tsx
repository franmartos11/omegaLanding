"use client";
import React, { useState } from "react";
import { HoveredLink, Menu } from "./NavbarMenu";
import { cn } from "@/app/utils/cn";

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
      <div className="hidden sm:flex pr-[0rem] sm:pr-[5rem] lg:pr-[10rem]">
        <Menu>
          <HoveredLink href="/">INICIO</HoveredLink>
          <HoveredLink href="/">UNIDADES DE NEGOCIO</HoveredLink>
          <HoveredLink href="/">MARCAS</HoveredLink>
          <HoveredLink href="/">NOSOTROS</HoveredLink>
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
            <HoveredLink href="/">INICIO</HoveredLink>
            <HoveredLink href="/">UNIDADES DE NEGOCIO</HoveredLink>
            <HoveredLink href="/">MARCAS</HoveredLink>
            <HoveredLink href="/">NOSOTROS</HoveredLink>
          </Menu>
        </div>
      )}
    </nav>
  );
}
