"use client";

import { mono } from "@/pages/_app";
import React, { useEffect, useState } from "react";

const About: React.FC = () => {
  const phrases = [
    "building things",
    "problem solving",
    "open source",
    "experimenting",
    "reversing",
    "automating",
    "breaking things",
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
          Hi!
        </span>
      </h1>
      <div className={mono.className}>
        <h2 className="text-xl md:text-lg mt-4 font-bold drop-shadow-lg shadow-black">
          I{"'"}m <span className="text-custom-main">proto</span>, a software
          engineer from Canada
        </h2>
        <ul className="text-base md:text-lg mt-4 space-y-4">
          <li>
            <p className="text-white drop-shadow-lg shadow-black">
              I {"<3"} software{" & "}
              <span
                className={`text-custom-main transition-opacity duration-500 ${
                  isVisible ? "opacity-100" : "opacity-0"
                }`}
              >
                {currentPhrase}
              </span>
            </p>
          </li>
          <li className="space-y-2">
            <p className="text-white drop-shadow-lg shadow-black">
              I{"'"}m currently working at{" "}
              <a
                target="blank"
                href="https://tritan.gg/"
                className="hover:underline text-custom-main font-semibold"
              >
                Tritan Internet
              </a>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;
