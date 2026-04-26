import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Henrique Rocha Bomfim",
  description: "Site oficial de Henrique Rocha Bomfim — engenheiro de computação no Insper, fundador da Startellite e ex-estagiário da BASF global (Alemanha). Trajetória da escola pública ao intercâmbio europeu, com passagem por Vaticano e Inglaterra.",
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "-B4i2LAMEhBoe-4BmPpeNpVzakrtNU6HptbUxDFJlpc",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Script
        type="application/ld+json"
        id="structured-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Person",
                "@id": "https://www.henriquerochabomfim.com.br/#henrique",
                "name": "Henrique Rocha Bomfim",
                "alternateName": "Rique Rocha",
                "image": {
                  "@type": "ImageObject",
                  "url": "https://www.henriquerochabomfim.com.br/henrique-rocha-bomfim.jpeg",
                  "width": 623,
                  "height": 682
                },
                "url": "https://www.henriquerochabomfim.com.br/",
                "jobTitle": "Engenheiro de Computação e Fundador",
                "affiliation": [
                  {
                    "@type": "Organization",
                    "name": "Insper",
                    "url": "https://www.insper.edu.br/"
                  },
                  {
                    "@type": "Organization",
                    "name": "Startellite",
                    "url": "https://www.startellite.com/"
                  }
                ],
                "alumniOf": [
                  {
                    "@type": "CollegeOrUniversity",
                    "name": "Insper",
                    "url": "https://www.insper.edu.br/"
                  },
                  {
                    "@type": "CollegeOrUniversity",
                    "name": "Technische Hochschule Ingolstadt",
                    "url": "https://www.thi.de/"
                  }
                ],
                "worksFor": {
                  "@type": "Organization",
                  "name": "Startellite",
                  "url": "https://www.startellite.com/"
                },
                "description": "Henrique Rocha Bomfim é engenheiro de computação no Insper, fundador da Startellite e ex-estagiário da BASF na Alemanha. Percorreu a Europa durante intercâmbio na THI Ingolstadt, incluindo Vaticano e Inglaterra, e venceu o Troféu Trajetória de Impacto do Insper em 2025.",
                "nationality": "Brazilian",
                "sameAs": [
                  "https://www.linkedin.com/in/henriquerochabomfim/",
                  "https://github.com/HenriqueRBomfim",
                  "https://www.instagram.com/_riquerocha_/",
                  "https://www.facebook.com/profile.php?id=100010716075101",
                  "https://www.startellite.com/"
                ]
              },
              {
                "@type": "Organization",
                "@id": "https://www.startellite.com/#organization",
                "name": "Startellite",
                "url": "https://www.startellite.com/",
                "founder": {
                  "@type": "Person",
                  "@id": "https://www.henriquerochabomfim.com.br/#henrique",
                  "name": "Henrique Rocha Bomfim"
                },
                "description": "Plataforma que conecta fundadores de startups a engenheiros de software pré-selecionados das melhores universidades do Brasil.",
                "foundingDate": "2026",
                "sameAs": [
                  "https://www.startellite.com/"
                ]
              }
            ]
          }),
        }}
      />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3440014283691586"
        crossOrigin="anonymous"></script>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
