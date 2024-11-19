import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8 text-center">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src="/omegaSolucionesLogo.webp"
          alt="Omega Soluciones Logo"
          width={80}
          height={80}
          className="rounded-full bg-white"
        />
      </div>

      {/* Navegación */}
      <nav className="mb-6">
        <ul className="flex flex-wrap justify-center space-x-4 lg:space-x-8 font-bold text-sm md:text-base">
          <li>
            <Link href="/" className="hover:underline">
              INICIO
            </Link>
          </li>
          <li>
            <Link href="/filiales" className="hover:underline">
              UNIDADES DE NEGOCIO
            </Link>
          </li>
          <li>
            <Link href="/clientes" className="hover:underline">
              MARCAS
            </Link>
          </li>
          <li>
            <Link href="/nosotros" className="hover:underline">
              NOSOTROS
            </Link>
          </li>
        </ul>
      </nav>

      {/* Dirección */}
      <p className="mb-6 text-xs md:text-sm">
        Arias Velázquez 733, A4400 Salta
      </p>

      {/* Redes sociales */}
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
