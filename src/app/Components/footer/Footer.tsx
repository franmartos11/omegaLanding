
import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-orange-500 text-white py-8 text-center">
      <div className="flex justify-center mb-[2rem]">
        <Image
          src="/omegaSolucionesLogo.webp" 
          alt="Omega Soluciones Logo"
          width={100}
          height={100}
          className="rounded-full bg-white" 
        />
      </div>
      <nav className="mb-[2rem]">
        <ul className="flex justify-center space-x-8 font-bold">
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
      <p className="mb-4 text-sm">
        Arias Velázquez 733, A4400 Salta
      </p>
      <div className="flex justify-center space-x-6">
      <Link href="https://www.linkedin.com/company/omegasoluciones/about/" target="_blank">
          <Image
            src="/linkedin.png" 
            alt="Linkedin"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <Link href="https://www.instagram.com/omegasoluciones.srl/" target="_blank">
          <Image
            src="/instagram.png"
            alt="Instagram"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <Link href="https://www.facebook.com/profile.php?id=61560097936589" target="_blank">
          <Image
            src="/facebook.png"
            alt="Facebook"
            width={40}
            height={40}
            className="rounded-full "
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
