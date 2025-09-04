import "./global.css";
import { Inter } from 'next/font/google';
import { ReactNode } from "react";
import BackendStatus from "../components/BackendStatus";

const inter = Inter({ 
  subsets: ['latin', 'latin-ext'],
  display: 'swap',
  variable: '--font-inter'
});

export const metadata = {
  title: `Gestión RAAs`,
  description: 'Sistema de gestión de Resultados de Aprendizaje de la Asignatura',
  charset: 'UTF-8',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
        <BackendStatus />
      </body>
    </html>
  );
}
