"use client";

const highlights = [
  {
    title: "Insper Code",
    description: "Presidente da maior organização estudantil de software do Insper.",
    image: "/coding.png",
  },
  {
    title: "Insper Academy",
    description: "Sou CoFundador da entidade e diretor do clube de idiomas Raposa Fluente.",
    image: "/academy.jpeg",
  },
  {
    title: "Aspire Leaders Program (2023 - atualidade)",
    description: "Líder Comunitário de SP em programa de liderança global fundado em Harvard.",
    image: "/aspire.jpeg",
  },
  {
    title: "BTG Pactual (2025)",
    description: "Estágio de férias no maior banco de investimentos da América Latina.",
    image: "/btg.jpeg",
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
        <div className="flex w-max scroll-animation space-x-6">
          {[...highlights, ...highlights].map((highlight, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md min-w-[250px] sm:min-w-[300px] flex-shrink-0"
            >
              <img
                src={highlight.image}
                alt={highlight.title}
                className="w-full h-[200px] object-cover object-top rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold">{highlight.title}</h3>
              <p>{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HighlightsCarousel;
