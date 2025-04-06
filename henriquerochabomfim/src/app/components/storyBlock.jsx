"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const StoryBlock = ({ title, text, image, caption, reverse }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const images = Array.isArray(image) ? image : [image];
  const captions = Array.isArray(caption) ? caption : [caption];
  const useOpacity = images.length <= 2;

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  const nextIndex = (currentIndex + 1) % images.length;

  const Wrapper = useOpacity ? motion.div : "div";
  const wrapperProps = useOpacity ? { ref, style: { opacity } } : { ref };

  const handleDragEnd = (e, info) => {
    if (info.offset.y < -50) {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    } else if (info.offset.y > 50) {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <Wrapper
      {...wrapperProps}
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
                alt={`${title} - ${idx + 1}`}
                className="rounded-xl shadow-lg w-full max-w-3xl"
              />
              {captions[idx] && (
                <p className="text-lg text-gray-500 mt-4 text-center">
                  {captions[idx]}
                </p>
              )}
            </div>
          ))
        ) : (
          <div className="relative w-full h-[80vh] max-h-[700px] overflow-hidden">
            {[prevIndex, currentIndex, nextIndex].map((index, i) => {
              const isCurrent = index === currentIndex;
              const yOffset = i === 0 ? -350 : i === 2 ? 350 : 0;
              const scale = isCurrent ? 1 : 0.75;
              const opacityVal = isCurrent ? 1 : 0.5;

              return (
                <motion.div
                  key={`${index}-${i}`}
                  drag="y"
                  dragConstraints={{ top: 0, bottom: 0 }}
                  onDragEnd={handleDragEnd}
                  onClick={() => setCurrentIndex(index)}
                  animate={{
                    y: yOffset,
                    scale,
                    opacity: opacityVal,
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="absolute flex flex-col items-center w-[90%] max-w-xl px-4 cursor-pointer"
                  style={{
                    zIndex: isCurrent ? 10 : 1,
                    top: "0%",
                    left: "5%",
                    transform: "translate(-50%, -50%)",
                    touchAction: "pan-y",
                  }}
                >
                  {isCurrent && captions[index] && (
                    <p className="text-lg text-gray-700 mb-4 text-center bg-white/80 px-4 py-2 rounded shadow-md">
                      {captions[index]}
                    </p>
                  )}
                  <img
                    src={images[index]}
                    alt={`${title} - ${index}`}
                    className="rounded-xl shadow-md w-full object-contain max-h-[600px]"
                  />
                </motion.div>
              );
            })}
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
    </Wrapper>
  );
};

export default StoryBlock;
