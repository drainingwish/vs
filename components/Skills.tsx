import { mono } from "@/pages/_app";
import config from "@/static";
import React from "react";

const Skills: React.FC = () => {
  return (
    <div className="text-white md:p-20 p-14">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 font-khula">
        <span className="text-custom-main bg-clip-text">Experience in</span>
      </h1>
      <div className={mono.className}>
        <section>
          <h2 className="text-xl md:text-lg mt-4 text-custom-main font-bold drop-shadow-lg shadow-black">
            Languages
          </h2>
          <ul className="text-base md:text-lg mt-4 space-y-2">
            {config.technical.languages.map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-lg mt-8 text-custom-main font-bold drop-shadow-lg shadow-black">
            Frameworks & Tools
          </h2>
          <ul className="text-base md:text-lg mt-4 space-y-2">
            {config.technical.frameworks.map((framework) => (
              <li key={framework}>{framework}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl md:text-lg mt-8 text-custom-main font-bold drop-shadow-lg shadow-black">
            Additional Skills
          </h2>
          <ul className="text-base md:text-lg mt-4 space-y-2">
            {config.technical.additional.map((additional) => (
              <li key={additional}>{additional}</li>
            ))}{" "}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Skills;
