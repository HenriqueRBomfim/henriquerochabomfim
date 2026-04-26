"use client";

const HighlightsCarousel = ({ highlights = [], title = "Destaques" }) => {
  return (
    <section id="highlights" className="p-12 bg-gray-200 mt-20">
      <h2 className="text-2xl font-bold text-center mb-6">{title}</h2>
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
