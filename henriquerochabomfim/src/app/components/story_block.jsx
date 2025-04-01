"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const StoryBlock = ({ title, text, image, caption, reverse }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`flex flex-col md:flex-row items-center gap-8 py-16 px-8 max-w-5xl mx-auto ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 flex flex-col items-center">
        <img src={image} alt={title} className="rounded-xl shadow-lg w-full max-w-sm" />
        {caption && (
          <p className="text-sm text-gray-500 mt-2 text-center">{caption}</p>
        )}
      </div>
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-2xl font-bold mb-4 space-y-2">
          {title.split("/n").map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </h2>

        <div className="text-lg text-gray-700 space-y-4">
          {text.split("/n").map((paragraph, index) => (
            <p key={index}>
              {paragraph.replace(
                "The Final Recipes - Minecraft Mods - CurseForge",
                ""
              )}
              {paragraph.includes("The Final Recipes - Minecraft Mods - CurseForge") && (
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/the-final-recipes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  The Final Recipes - Minecraft Mods - CurseForge
                </a>
              )}
            </p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default StoryBlock;
