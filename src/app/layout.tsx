import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mavunzuka & Filhos LDA",
  description:
    "Empresa angolana multissetorial com atuação em segurança rodoviária, construção civil, saúde e fornecimentos diversos. Comprometida com o progresso sustentável de Angola.",
  openGraph: {
    title: "Mavunzuka & Filhos LDA",
    description:
      "Serviços integrados em segurança rodoviária, engenharia, construção civil, tecnologias aplicadas e fornecimentos hospitalares com foco em inovação, qualidade e impacto social.",
    type: "website",
    siteName: "Mavunzuka & Filhos LDA",
    url: "https://www.mavunzuka.co.ao",
    images: [
      {
        url: "https://mavunzuka.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FScreenshot.547b2797.png&w=1920&q=75", // substitua com imagem real hospedada
        secureUrl: "https://mavunzuka.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FScreenshot.547b2797.png&w=1920&q=75",
        type: "image/jpeg",
        width: 1200,
        height: 630,
        alt: "Website Mavunzuka & Filhos LDA",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mavunzuka & Filhos LDA",
    description:
      "Excelência que constrói confiança. Soluções que transformam realidades em múltiplos setores estratégicos de Angola.",
    images: [
      "https://mavunzuka.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FScreenshot.547b2797.png&w=1920&q=75", // substitua com imagem real hospedada
    ],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/Primary.svg", // substitua pelo caminho real do ícone
    apple: "/Primary.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <Analytics/>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
