import { mono } from "@/pages/_app";
import React from "react";

const Bio: React.FC = () => {
  return (
    <div className="text-white md:p-20 p-14">
      <h1 className="text-6xl md:text-7xl font-bold mb-4 font-khula">
        <span className="bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent">
          momt
        </span>
      </h1>
      <div className={mono.className}>
        <h2 className="text-xl md:text-lg mt-4 font-bold drop-shadow-lg shadow-black">
          Community / Project{" "}
          <span className="text-custom-secondary">Management</span>
        </h2>
        <ul className="text-xl md:text-xl mt-4 space-y-2 drop-shadow-lg shadow-black">
          <li>2 Years of LUA</li>
          <li>3 Years of JS & PY</li>
        </ul>
      </div>
    </div>
  );
};

export default Bio;
