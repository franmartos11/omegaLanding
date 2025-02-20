'use client'
import React from "react";
import Link from "next/link";
import { Link as Link2 } from 'react-scroll';
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-[#f86709] text-white py-8 text-center">
      

      <div className="flex justify-center mb-6">
        <Image
          src="/omegaSolucionesLogo.webp"
          alt="Omega Soluciones Logo"
          width={80}
          height={80}
          className="rounded-full bg-white"
        />
      </div>

      <nav className="mb-6">
        <ul className="flex flex-wrap justify-center space-x-4 lg:space-x-8 font-bold text-sm md:text-base">
          <li>
            <Link2 className=" cursor-pointer mb-6 text-xs md:text-xl hover:underline"
              to="hero"
              smooth={true}
              duration={1000}
            >
              INICIO
            </Link2>
          </li>
          <li>
            <Link2 className="cursor-pointer mb-6 text-xs md:text-xl hover:underline"
              to="nosotros"
              smooth={true}
              duration={1000}
            >
              NOSOTROS
            </Link2>
          </li>
          <li>
            <Link2 className="cursor-pointer mb-6 text-xs md:text-xl hover:underline"
              to="tabsDemo"
              smooth={true}
              duration={1000}
            >
              UNIDADES DE NEGOCIO
            </Link2>
          </li>
          <li>
            <Link2 className="cursor-pointer mb-6 text-xs md:text-xl hover:underline"
              to="marcas"
              smooth={true}
              duration={1000}
            >
              MARCAS
            </Link2>
          </li>
          <li>
            <Link2 className="cursor-pointer mb-6 text-xs md:text-xl hover:underline"
              to="contactanos"
              smooth={true}
              duration={1000}
            >
              CONTACTANOS
            </Link2>

          </li>
        </ul>
      </nav>




      <div className="flex justify-center space-x-4 md:space-x-6">
        <Link
          href="https://www.linkedin.com/company/omegasoluciones/about/"
          target="_blank"
          aria-label="Linkedin"
        >
          <Image
            src="/linkedin.png"
            alt="Linkedin"
            width={30}
            height={30}
            className="rounded-full"
          />
        </Link>
        <Link
          href="https://www.instagram.com/omegasoluciones.srl/"
          target="_blank"
          aria-label="Instagram"
        >
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={30}
            height={30}
            className="rounded-full"
          />
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=61560097936589"
          target="_blank"
          aria-label="Facebook"
        >
          <Image
            src="/facebook.png"
            alt="Facebook"
            width={30}
            height={30}
            className="rounded-full"
          />
        </Link>
      </div>

    </footer>
  );
};

export default Footer;
