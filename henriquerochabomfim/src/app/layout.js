import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
