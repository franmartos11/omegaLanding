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
      <Link  aria-label="maps" target="_blank" href={"https://www.google.com/maps/place/Omega+Soluciones/@-24.7618653,-65.41137,15z/data=!4m6!3m5!1s0x941bc36adcbf6bd9:0x9db0642ee2c946ce!8m2!3d-24.7618653!4d-65.41137!16s%2Fg%2F11gmds8b0m?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D"}>
          <p className="mb-6 text-xs md:text-sm hover:underline">
            Arias Velázquez 733, A4400 Salta
          </p>
      </Link>
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
