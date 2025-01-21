import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Omega Soluciones",
  description:
    "Grupo Empresarial en Salta con experiencia en desarrollo de software, productos químicos para limpieza, construcción y distribución. Soluciones innovadoras para cada industria.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="Grupo Empresarial en Salta con experiencia en desarrollo de software, productos químicos para limpieza, construcción y distribución. Soluciones innovadoras para cada industria."
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/omegaSolucionesLogo2.png" />
        <meta property="og:title" content="Grupo Empresarial Salta | Software, Químicos, Construcción y Distribución" />
        <meta property="og:description" content="Ofrecemos soluciones integrales en desarrollo de software, productos químicos de limpieza, construcción y distribución en Salta." />
        <meta property="og:image" content="/omegalogo2.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.OmegaSoluciones.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Grupo Empresarial Salta" />
        <meta name="twitter:description" content="Consolidamos industrias: desarrollo de software, productos químicos, construcción y distribución en Salta." />
        <meta name="twitter:image" content="/og-image.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        style={{ fontFamily: "Montserrat, sans-serif" }} // Applying Montserrat globally
      >
        {children}
      </body>
    </html>
  );
}
