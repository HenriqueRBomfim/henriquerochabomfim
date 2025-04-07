import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
  description: "Tudo sobre Henrique Rocha Bomfim, engenheiro da computação no Insper.",
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
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Henrique Rocha Bomfim",
            "image": "https://www.henriquerochabomfim.com.br/henrique-rocha-bomfim.jpeg",
            "url": "https://www.henriquerochabomfim.com.br/",
            "jobTitle": "Engenheiro da Computação",
            "affiliation": "Insper",
            "sameAs": [
              "https://www.linkedin.com/in/henriquerochabomfim/",
              "https://www.facebook.com/profile.php?id=100010716075101",
              "https://www.instagram.com/_riquerocha_/"
            ]
          }),
        }}
      />
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
