import { Geist, Geist_Mono } from "next/font/google";
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
        <link rel="icon" href="/logo.png" />
        <title>Henrique Rocha Bomfim</title>
        <meta
          name="description"
          content="Tudo sobre Henrique Rocha Bomfim, estudante de engenharia da computação no Insper."
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

