"use client";

import { useState } from "react";

const grupos = [
  {
    logo: "/logo_ccb.png",
    nome: "CCB",
    cargo: "Violinista",
    link: "https://congregacaocristanobrasil.org.br/",
  },
  {
    logo: "/logo_btg.png",
    nome: "BTG Pactual",
    cargo: "Estagiário de Férias - IT Funds",
    link: "https://www.btgpactual.com/",
  },
  {
    logo: "/logo_aspire.png",
    nome: "Aspire",
    cargo: "Alumni Community Leader - SP",
    link: "https://www.aspireleaders.org/program/aspire-leaders-program/",
  },
  {
    logo: "/logo_code.png",
    nome: "Insper Code",
    cargo: "Presidente e Diretor de Game Development",
    link: "https://www.instagram.com/inspercoding/",
  },
  {
    logo: "/logo_academy.png",
    nome: "Insper Academy",
    cargo: "CoFundador, Presidente e Diretor de Idiomas",
    link: "https://www.instagram.com/insperacademy/",
  },
  {
    logo: "/logo_sec.png",
    nome: "Insper Sec",
    cargo: "Membro e Gerente de Marketing",
    link: "https://www.instagram.com/inspersec/",
  },
  {
    logo: "/logo_gas.png",
    nome: "GAS Insper Informar",
    cargo: "Professor Voluntário de Python, HTML e CSS",
    link: "https://www.gasinsper.com/",
  },
  {
    logo: "/logo_comite.png",
    nome: "Comitê de Bolsistas Insper",
    cargo: "Diretor do Apoio Acadêmico",
    link: "https://www.instagram.com/bolsistasinsper/",
  },
  {
    logo: "/logo_dd.png",
    nome: "Desafio do Design - Insper",
    cargo: "Runner da 2ª Fase do Vestibular",
    link: "https://www.instagram.com/insperdd/",
  },
  {
    logo: "/logo_embaixadores.png",
    nome: "Embaixadores - Insper",
    cargo: "Guia de Tours pelo Insper",
    link: "https://www.instagram.com/embaixadores.insper/",
  },
  {
    logo: "/logo_objetivo.png",
    nome: "Colégio Objetivo",
    cargo: "Aluno Olímpico do Ensino Médio",
    link: "https://objetivo.br/",
  },
  {
    logo: "/logo_ismart.png",
    nome: "Ismart",
    cargo: "Bolsista desde o Ensino Médio",
    link: "https://www.ismart.org.br/",
  },
  {
    logo: "/logo_fe.png",
    nome: "Fundação Estudar",
    cargo: "Summer Job Voluntário e Participante de Eventos",
    link: "https://lider.estudar.org.br/programa-de-bolsas-lideres-estudar/",
  },
  {
    logo: "/logo_insper.png",
    nome: "Insper",
    cargo: "Aluno de Eng Comp, Líder de Sala e Monitor",
    link: "https://lider.estudar.org.br/programa-de-bolsas-lideres-estudar/",
  },
  {
    logo: "/logo_youtube.png",
    nome: "Youtube",
    cargo: "Ex-Criador de Conteúdo",
    link: "https://www.youtube.com/@GuiRochaOficial",
  },
  {
    logo: "/logo_bloomberg.png",
    nome: "Bloomberg",
    cargo: "Aluno de Análise de Dados com Python",
    link: "https://www.bloomberg.com/",
  },
  {
    logo: "/logo_mm.png",
    nome: "Mundo Maker",
    cargo: "Aluno de Verão em Robótica, Programação e Impressão 3D",
    link: "https://www.mundomaker.cc/",
  },
  {
    logo: "/logo_fgv.png",
    nome: "EESP FGV",
    cargo: "Aluno de Verão em Introdução à Economia",
    link: "https://portal.fgv.br/",
  },
  {
    logo: "/logo_four.png",
    nome: "Four Summit",
    cargo: "Espectador do Summit",
    link: "https://foursummit.com.br/",
  },
  {
    logo: "/logo_cp.png",
    nome: "Campus Party",
    cargo: "Voluntário de Organização do Evento",
    link: "https://brasil.campus-party.org/",
  },
  {
    logo: "/logo_hackersec.png",
    nome: "Hackersec",
    cargo: "Voluntário de Organização do Evento",
    link: "https://hackersec.com/",
  },
  {
    logo: "/logo_mckinsey.png",
    nome: "McKinsey & Company",
    cargo: "Curso de Transformação Digital e Inovação",
    link: "https://www.mckinsey.com.br/", 
  },
];

export default function CarrosselGrupos() {
  return (
    <section className="py-2">
      <div className="max-w-4xl mx-auto overflow-hidden relative">
        <div className="flex w-max animate-slide">
          {[...Array(2)].flatMap((_, repeatIdx) =>
            grupos.map((item, idx) => (
              <a
                key={`${repeatIdx}-${idx}-${item.nome}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[250px] sm:w-[300px] text-center px-4 shrink-0 inline-block"
              >
                <p className="text-sm font-semibold mb-2">{item.nome}</p>
                <div className="bg-white rounded-full w-20 h-20 mx-auto flex items-center justify-center shadow-md overflow-hidden hover:scale-105 transition-transform duration-200">
                  <img
                    src={item.logo}
                    alt={item.nome}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-xs mt-2 text-gray-600">{item.cargo}</p>
              </a>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
