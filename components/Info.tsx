"use client";

import { mono } from "@/pages/_app";
import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const phrases = [
    "projects",
    "communities",
    "socials",
  ];
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false);

      setTimeout(() => {
        setCurrentPhrase((prev) => {
          const currentIndex = phrases.indexOf(prev);
          return phrases[(currentIndex + 1) % phrases.length];
        });
        setIsVisible(true);
      }, 500);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="text-white md:p-20 p-14">
      <h1 className="text-6xl md:text-7xl font-bold mb-4 font-khula">
        <span className="bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent">
          Hello!
        </span>
      </h1>
      <div className={mono.className}>  
        <h2 className="text-xl md:text-lg mt-4 font-bold drop-shadow-lg shadow-black">
          I{"'"}m <span className="text-custom-main">momt</span>, a Project
          Manager from Florida
        </h2>
        <ul className="text-base md:text-lg mt-4 space-y-4">
          <li>
            <p className="text-white drop-shadow-lg shadow-black">
              I {"like"} managing{"  "}
              <span
                className={`text-custom-main transition-opacity duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {currentPhrase}
              </span>
            </p>
          </li>
          <li>
            <p className="text-white drop-shadow-lg shadow-black">
              I am currently looking for projects to work on.
            </p>
          </li>          
        </ul>
      </div>
    </div>
  );
};

export default About;
