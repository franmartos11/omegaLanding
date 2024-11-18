
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
        
        <Link href="https://instagram.com/your-profile" target="_blank">
          <Image
            src="/instagram.png" // Reemplaza con la ruta correcta del ícono de Instagram
            alt="Instagram"
            width={40}
            height={40}
            className="rounded-full"
          />
        </Link>
        <Link href="https://facebook.com/your-page" target="_blank">
          <Image
            src="/facebook.png" // Reemplaza con la ruta correcta del ícono de Facebook
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
