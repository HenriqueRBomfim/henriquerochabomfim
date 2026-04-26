"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const handleClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false); // Fecha menu se clicado dentro do drawer
  };

  return (
    <>
      <motion.div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold">Henrique Rocha Bomfim</h1>
        <nav className="flex space-x-4 p-2 relative">
          {[
            { label: "Sobre", id: "about" },
          ].map(({ label, id, onClick, green }) => (
            <div key={id} className="relative flex flex-col items-center">
              <a
                href={`#${id}`}
                onClick={(e) => {
                  e.preventDefault();
                  console.log(router.pathname);  // Use router.pathname aqui

                  if (router.pathname !== "/") {  // Verifique se não é a página principal
                    router.push("/");
                    setTimeout(() => {
                      onClick ? onClick(e) : handleClick(id);
                    }, 100); // Espera o redirecionamento
                  } else {
                    onClick ? onClick(e) : handleClick(id);
                  }
                }}
                className={`relative rounded px-4 py-2 transition border-2 border-transparent
                  ${green
                    ? "bg-green-500 text-white hover:bg-green-700"
                    : "hover:bg-gray-200"
                  }`}
              >
                {label}
              </a>
            </div>
          ))}

          {/* Botão do menu sanduíche */}
          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded hover:bg-gray-200 text-black"
          >
            <Menu size={28} />
          </button>
        </nav>
      </motion.div>

      {/* Drawer lateral */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 p-6 flex flex-col space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-bold">Menu</h2>
              <button onClick={() => setMenuOpen(false)}>
                <X size={24} />
              </button>
            </div>
          
            <a
              href="/"
              onClick={() => {
                router.push("/");
                setMenuOpen(false);
              }}
              className="text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              Página principal
            </a>
          
            <a
              href="/jogos"
              className="text-left px-4 py-2 hover:bg-gray-100 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Jogos
            </a>
          
            <a
              href="/curriculo.pdf"
              download
              className="text-left px-4 py-2 hover:bg-gray-100 rounded block"
            >
              Currículo
            </a>
            {/* <button
              onClick={() => handleClick("projects")}
              className="text-left px-4 py-2 hover:bg-gray-100 rounded"
            >
              Projetos
            </button> */}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
