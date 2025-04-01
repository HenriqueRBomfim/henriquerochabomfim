"use client";
import { useEffect, useState } from "react";

const Header = () => {
  const [clickSound, setClickSound] = useState(null);

  useEffect(() => {
    setClickSound(new Audio("/orb.mp3")); // Som no diretório /public
  }, []);

  const playSound = () => {
    if (clickSound) {
      clickSound.currentTime = 0; // Reinicia o áudio para múltiplos cliques
      clickSound.play();
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold">Henrique Rocha</h1>
      <nav>
        <a href="#about" className="hover:bg-gray-200 rounded mx-2 px-4 py-2">Sobre</a>
        <a href="#highlights" className="hover:bg-gray-200 rounded mx-2 px-4 py-2">Destaques</a>
        <a
          href="#donate"
          onClick={playSound}
          className="mx-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Doar
        </a>
      </nav>
    </header>
  );
};

export default Header;
