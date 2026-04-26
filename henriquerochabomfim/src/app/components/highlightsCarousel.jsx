"use client";

const highlights = [
  {
    title: "Startellite (2026 – Presente)",
    description: "Fundador e Tech Lead de plataforma que conecta startups aos melhores engenheiros do Brasil.",
    image: "/coding.png",
  },
  {
    title: "BASF — Sede Mundial (2025–2026)",
    description: "Estágio de Engenharia de Software na maior empresa química do mundo, em Ludwigshafen, Alemanha. Otimização 20x de pipeline global.",
    image: "/thi.jpeg",
  },
  {
    title: "Intercâmbio na Europa (2025–2026)",
    description: "Intercâmbio pela Europa durante a THI Ingolstadt, com passagem por Vaticano e Inglaterra.",
    image: "/thi.png",
  },
  {
    title: "Troféu Trajetória de Impacto — Insper (2025)",
    description: "Eleito 1 de 2 bolsistas premiados entre 400 — Top 0,5% da instituição. 642 horas extracurriculares.",
    image: "/premio_bolsista_trajetoria_de_impacto.jpeg",
  },
  {
    title: "Insper Code",
    description: "Presidente da maior organização estudantil de software do Insper. Escalou de 9 para 46 membros.",
    image: "/coding.png",
  },
  {
    title: "BTG Pactual (2025)",
    description: "Estágio de férias no maior banco de investimentos da América Latina. Economia comprovada de 42 horas/mês.",
    image: "/btg.jpeg",
  },
  {
    title: "Aspire Leaders Program (2023 – Presente)",
    description: "Líder Comunitário de SP em programa de liderança global fundado em Harvard. Cresceu de 5 para 467 alumni em SP.",
    image: "/aspire.jpeg",
  },
  {
    title: "Insper Academy",
    description: "CoFundador da entidade e diretor do clube de idiomas Raposa Fluente.",
    image: "/academy.jpeg",
  },
  {
    title: "Fundação Estudar (2024)",
    description: "Summer Job voluntário e diversas experiências em liderança.",
    image: "/summerjobvoluntario.jpg",
  },
];

const HighlightsCarousel = () => {
  return (
    <section id="highlights" className="p-12 bg-gray-200 mt-20">
      <h2 className="text-2xl font-bold text-center mb-6">Destaques</h2>
      <div className="overflow-hidden w-full relative">
        <div className="flex w-max scroll-animation space-x-6 items-stretch">
          {[...highlights, ...highlights].map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md min-w-[250px] sm:min-w-[300px] min-h-[430px] flex-shrink-0 flex flex-col"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-[280px] object-contain bg-gray-50 rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{highlight.title}</h3>
              <p className="mt-2">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsCarousel;
