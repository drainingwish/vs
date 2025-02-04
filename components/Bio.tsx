import { mono } from "@/pages/_app";
import { motion } from "framer-motion";

function Bio() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white md:p-20 p-14"
    >
      <motion.h1
        className="text-6xl md:text-7xl font-bold mb-4 font-khula hover:scale-105 transition-transform"
        whileHover={{ scale: 1.05 }}
      >
        <span className="bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent">
          momt
        </span>
      </motion.h1>

      <div className={`${mono.className} space-y-6`}>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-2xl font-bold drop-shadow-lg shadow-black"
        >
          Community / Project{" "}
          <span className="text-custom-secondary hover:text-custom-main transition-colors">
            Management
          </span>
        </motion.h2>

        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-xl space-y-3 drop-shadow-lg shadow-black"
        >
          {["2+ Years of Experience", "LUA, JS & PY"].map(
            (item, index) => (
              <motion.li
                key={index}
                whileHover={{ x: 10 }}
                className="hover:text-custom-secondary transition-colors"
              >
                {item}
              </motion.li>
            )
          )}
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default Bio;
