"use client";

import Image from "next/image";
import Header from "../components/header";
import Footer from "../components/footer";
import { FloatingGears } from "../components/gears";
import { useLanguage } from "../context/languageContext";

export default function PortfolioPage() {
  const { lang } = useLanguage();

  const projects = [
    {
      id: "startellite",
      title: "Startellite",
      description: {
        pt: "Plataforma que conecta fundadores de startups a desenvolvedores de software de confiança. Como Tech Lead e desenvolvedor solo, conduzo o desenvolvimento full-stack (front-end e back-end), arquitetura em nuvem (AWS), cybersecurity e o MVP escalável.",
        en: "Platform connecting startup founders with reliable software developers. As Tech Lead and solo developer, I manage full-stack development (front-end and back-end), cloud architecture (AWS), cybersecurity, and the scalable MVP.",
      },
      image: "/site_startellite.png",
      tags: ["React", "Node.js", "AWS", "Full-Stack"],
    },
    {
      id: "kardium",
      title: "Kardium",
      description: {
        pt: "Plataforma de contabilidade especializada para médicos recém-formados. Atuo como desenvolvedor full-stack, traduzindo regras de negócio complexas do mercado médico-financeiro em código estruturado, escalável e seguro.",
        en: "Accounting platform specialized for recently graduated doctors. I act as a full-stack developer, translating complex business rules of the medical-financial market into structured, scalable, and secure code.",
      },
      image: "/kardium.png",
      tags: ["Full-Stack", "Finance", "Healthcare"],
    },
    {
      id: "basf",
      title: lang === "pt" ? "Web App de Calorimetria Preditiva (BASF)" : "Predictive Calorimetry Web App (BASF)",
      description: {
        pt: "Substituição de um software legado em MatLab por um Web App moderno em React/Vite para análise de calorimetria preditiva. Redução do tempo de processamento de predições químicas de 5 minutos para apenas 15 segundos (melhoria de 20x).",
        en: "Replacement of legacy MatLab software with a modern web application in React/Vite for predictive calorimetry analysis. Reduced chemical prediction processing time from 5 minutes to just 15 seconds (20x improvement).",
      },
      image: "/Estágio na BASF Ludwigshafen Alemanha.jpg",
      tags: ["React", "Vite", "Performance Optimization"],
    },
    {
      id: "btg",
      title: lang === "pt" ? "Motor de Contas Contábeis (BTG Pactual)" : "Accounting Accounts Engine (BTG Pactual)",
      description: {
        pt: "Sistema automatizado que otimizou processos no BTG Pactual, economizando 42 horas mensais da equipe de analistas, ampliando a capacidade de revisão de fechamentos incorretos e reduzindo erros humanos.",
        en: "Automated system that optimized processes at BTG Pactual, saving the analyst team 42 hours per month, expanding the capacity to review incorrect closings, and reducing human errors.",
      },
      image: "/btgequipe.jpeg",
      tags: ["Automation", "Finance", "Process Optimization"],
    },
    {
      id: "nutriu",
      title: "NutriU",
      description: {
        pt: "Protótipo de aplicativo de nutrição personalizado feito como projeto final do curso de Análise de Dados com Python na Bloomberg.",
        en: "Personalized nutrition app prototype made as a final project for the Python Data Analysis course at Bloomberg.",
      },
      image: "/nutriu.jpeg",
      tags: ["Python", "Data Analysis", "Bloomberg"],
    },
    {
      id: "palworld",
      title: lang === "pt" ? "Controle Bluetooth Palworld" : "Palworld Bluetooth Controller",
      description: {
        pt: "Controle Bluetooth feito com Raspberry Pi Pico para jogar o jogo Palworld sem precisar de cabos. Projeto desenvolvido para a disciplina de Computação Embarcada no Insper.",
        en: "Bluetooth controller made with Raspberry Pi Pico to play the game Palworld wirelessly. Project developed for the Embedded Computing course at Insper.",
      },
      image: "/palworld.jpeg",
      tags: ["Raspberry Pi", "C++", "Hardware", "Bluetooth"],
    },
    {
      id: "minecraft",
      title: "The Final Recipes (Minecraft Mod)",
      description: {
        pt: "Modificação para o jogo Minecraft desenvolvida em Java. Trabalhei meses para deixá-lo bonito e com uma jogabilidade engajante.",
        en: "Modification for the game Minecraft developed in Java. Worked for months to make it visually appealing and with engaging gameplay.",
      },
      image: "/1semestre.jpg",
      tags: ["Java", "Game Dev", "Modding"],
    },
    {
      id: "robo",
      title: lang === "pt" ? "Robô Seguidor de Linha" : "Line-Following Robot",
      description: {
        pt: "Robô seguidor de linhas com luz infravermelha, primeiro contato prático com programação em C++/Arduíno, robótica, impressão 3D e corte a laser.",
        en: "Line-following robot with infrared light, my first practical contact with C++/Arduino programming, robotics, 3D printing, and laser cutting.",
      },
      image: "/mundomaker.jpg",
      tags: ["Arduino", "Robotics", "C++", "3D Printing"],
    },
  ];

  return (
    <div className="bg-slate-50 text-gray-900 relative min-h-screen flex flex-col">
      <FloatingGears />
      <Header />

      <main className="flex-1 pt-24 pb-12 px-4 max-w-7xl mx-auto w-full relative z-10">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4">
            {lang === "pt" ? "Meu Portfólio" : "My Portfolio"}
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {lang === "pt"
              ? "Uma coleção dos projetos que desenvolvi ao longo da minha jornada, desde os primeiros robôs até sistemas escaláveis para grandes empresas."
              : "A collection of projects I've developed throughout my journey, from my first robots to scalable systems for large companies."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col border border-gray-100 group"
            >
              <div className="relative w-full h-56 bg-gray-100 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-2xl font-bold text-slate-800 mb-3">{project.title}</h3>
                <p className="text-slate-600 text-sm mb-6 flex-1 leading-relaxed">
                  {project.description[lang]}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
