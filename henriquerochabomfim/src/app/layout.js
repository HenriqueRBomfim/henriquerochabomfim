import { Geist, Geist_Mono } from "next/font/google";
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

export const metadata = {
  title: "Henrique Rocha Bomfim",
  description: "Tudo sobre Henrique Rocha Bomfim, engenheiro da computação no Insper.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <title>Henrique Rocha Bomfim</title>
        <meta
          name="description"
          content="Tudo sobre Henrique Rocha Bomfim, estudante de engenharia da computação no Insper."
        />
        <meta name="google-site-verification" content="-B4i2LAMEhBoe-4BmPpeNpVzakrtNU6HptbUxDFJlpc" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}

