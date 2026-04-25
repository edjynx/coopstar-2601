import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coopstar Express | Serviços de Moto Frete",
  description: "Especialistas em entregas e coletas rápidas com mais de 12 anos de mercado. Moto Frete 24h em São Paulo e Grande São Paulo.",
  keywords: "moto frete, entregas rápidas, delivery sp, motoboy são paulo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-slate-50 flex flex-col text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
