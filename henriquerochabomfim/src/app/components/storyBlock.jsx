"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const StoryBlock = ({ title, text, image, caption, reverse }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0.75, 1], [0.75, 1]);

  const images = Array.isArray(image) ? image : [image];
  const captions = Array.isArray(caption) ? caption : [caption];
  const [currentIndex, setCurrentIndex] = useState(0);

  const getImageTitle = (imgPath) => {
    if (!imgPath || typeof imgPath !== "string") return "";
    const fileName = imgPath.split("/").pop() || "";
    const decoded = decodeURIComponent(fileName);
    return decoded.replace(/\.[^/.]+$/, "").trim();
  };

  const getCaption = (index) => {
    const explicitCaption = captions[index];
    if (typeof explicitCaption === "string" && explicitCaption.trim()) {
      return explicitCaption;
    }
    return getImageTitle(images[index]);
  };

  const handleDragEnd = (e, info) => {
    if (info.offset.x < -80) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (info.offset.x > 80) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <motion.div
      ref={ref}
      style={{ opacity }}
      className={`flex flex-col md:flex-row items-center gap-8 py-16 px-4 sm:px-6 max-w-6xl mx-auto ${
        reverse ? "md:flex-row-reverse" : ""
      }`}
    >
      <div className="md:w-1/2 w-full flex flex-col items-center gap-4">
        {images.length <= 1 ? (
          images.map((img, idx) => (
            <div key={`single-${idx}`} className="flex flex-col items-center">
              <img
                src={img}
                alt={getCaption(idx) || `${title} - ${idx + 1}`}
                className="rounded-xl shadow-lg w-full max-w-3xl object-contain bg-transparent"
              />
              {getCaption(idx) && (
                <p className="text-lg text-gray-500 mt-4 text-center">
                  {getCaption(idx)}
                </p>
              )}
            </div>
          ))
        ) : (
          <div className="w-full min-h-[78vh] flex flex-col items-center justify-center">
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              className="w-full flex flex-col items-center cursor-grab active:cursor-grabbing select-none"
              style={{ touchAction: "pan-y" }}
            >
              {getCaption(currentIndex) && (
                <p className="text-lg text-gray-700 mb-4 text-center bg-white/80 px-4 py-2 rounded shadow-md">
                  {getCaption(currentIndex)}
                </p>
              )}
              <img
                src={images[currentIndex]}
                alt={getCaption(currentIndex) || `${title} - ${currentIndex + 1}`}
                className="rounded-xl shadow-md w-full max-w-4xl max-h-[76vh] object-contain bg-transparent"
              />
            </motion.div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {images.map((_, index) => (
                <button
                  key={`${title}-${index}`}
                  type="button"
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === currentIndex ? "w-8 bg-gray-800" : "w-2.5 bg-gray-400"
                  }`}
                  aria-label={`Ir para a foto ${index + 1}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="md:w-1/2 w-full text-center md:text-left px-4">
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
              {paragraph.includes(
                "The Final Recipes - Minecraft Mods - CurseForge"
              ) && (
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
