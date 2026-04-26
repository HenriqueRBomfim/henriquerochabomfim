"use client";

export default function CarrosselGrupos({ grupos = [] }) {
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
