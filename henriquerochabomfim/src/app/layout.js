import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import Script from "next/script";
import { LanguageProvider } from "./context/languageContext";
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
  metadataBase: new URL("https://www.henriquerochabomfim.com.br"),
  title: {
    default: "Henrique Rocha Bomfim | Site Oficial",
    template: "%s | Henrique Rocha Bomfim",
  },
  description:
    "Site oficial de Henrique Rocha Bomfim, Founder & CEO da Startellite, engenheiro de computacao no Insper, com experiencia em BTG Pactual e BASF.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "-B4i2LAMEhBoe-4BmPpeNpVzakrtNU6HptbUxDFJlpc",
  },
};

export default function RootLayout({ children }) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.henriquerochabomfim.com.br/#henrique-rocha-bomfim",
    name: "Henrique Rocha Bomfim",
    alternateName: "Rique Rocha",
    url: "https://www.henriquerochabomfim.com.br/",
    image: "https://www.henriquerochabomfim.com.br/henrique-rocha-bomfim.jpeg",
    jobTitle: "Founder & CEO da Startellite",
    worksFor: {
      "@type": "Organization",
      name: "Startellite",
      url: "https://www.startellite.com/",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Insper",
      url: "https://www.insper.edu.br/",
    },
    sameAs: [
      "https://www.linkedin.com/in/henriquerochabomfim/",
      "https://github.com/HenriqueRBomfim",
      "https://www.startellite.com/",
      "https://www.instagram.com/_riquerocha_/",
    ],
    description:
      "Henrique Rocha Bomfim e engenheiro de computacao no Insper, ex-BTG Pactual e BASF, e Founder & CEO da Startellite.",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.henriquerochabomfim.com.br/#website",
    name: "Henrique Rocha Bomfim",
    url: "https://www.henriquerochabomfim.com.br/",
    inLanguage: ["pt-BR", "en"],
    about: {
      "@id": "https://www.henriquerochabomfim.com.br/#henrique-rocha-bomfim",
    },
    mainEntity: {
      "@id": "https://www.henriquerochabomfim.com.br/#henrique-rocha-bomfim",
    },
  };

  return (
    <html lang="pt-br">
      <Script
        type="application/ld+json"
        id="person-structured-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personSchema),
        }}
      />
      <Script
        type="application/ld+json"
        id="website-structured-data"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3440014283691586"
        crossOrigin="anonymous"></script>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
