"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

const Header = () => {
  const [sound, setSound] = useState(null);
  const [donateClicks, setDonateClicks] = useState(0);
  const [showBorder, setShowBorder] = useState(false);
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    setSound(new Audio());

    const interval = setInterval(() => {
      setShowArrow(true);
      setTimeout(() => setShowArrow(false), 1500); // visível por 1.5s
    }, 3000); // aparece a cada 3s

    return () => clearInterval(interval);
  }, []);

  const playSound = (audioPath) => {
    if (sound) {
      sound.src = audioPath;
      sound.currentTime = 0;
      sound.play();
    }
  };

  const handleClick = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    playSound("/orb.mp3");
    setDonateClicks((prev) => prev + 1);

    if (donateClicks === 1) {
      setShowBorder(true);

      setTimeout(() => {
        setShowBorder(false);
        setDonateClicks(0);
      }, 10000);
    }

    document.getElementById("donate")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.div className="fixed top-0 left-0 w-full bg-white shadow-md p-4 flex justify-between items-center z-50">
      <h1 className="text-xl font-bold">Henrique Rocha Bomfim</h1>
      <nav className="flex space-x-4 p-2 relative">
        {[
          { label: "Sobre", id: "about" },
          { label: "Destaques", id: "highlights" },
          { label: "Jogo", id: "game_drop" },
          {
            label: "Doar",
            id: "donate",
            onClick: handleDonateClick,
            green: true,
          },
        ].map(({ label, id, onClick, green }) => (
          <div key={id} className="relative flex flex-col items-center">
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                if (onClick) {
                  onClick(e);
                } else {
                  handleClick(id);
                }
              }}
              className={`relative rounded px-4 py-2 transition border-2 border-transparent
                ${green ? "bg-green-500 text-white hover:bg-green-700" : "hover:bg-gray-200"}`}
            >
              {label}
            </a>

            {/* Seta animada vindo de baixo do botão DOAR */}
            {id === "donate" && (
              <AnimatePresence>
                {showArrow && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.6 }}
                    className="absolute -bottom-6"
                  >
                    <ArrowUp className="text-green-600" size={30} />
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </div>
        ))}
      </nav>
    </motion.div>
  );
};

export default Header;
