import { mono } from "@/pages/_app";
import resources from "@/static";
import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white md:p-20 p-14"
    >
      <motion.h1
        className="text-4xl md:text-5xl font-bold mb-4 font-khula"
        whileHover={{ scale: 1.05 }}
      >
        <span className="text-custom-main bg-clip-text">Experience in        </span>
      </motion.h1>
      <div className={mono.className}>
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-lg mt-4 inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent font-bold drop-shadow-lg shadow-black"
          >
            Languages
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg mt-4 space-y-2"
          >
            {resources.technical.languages.map((language) => (
              <motion.li key={language} whileHover={{ x: 10 }}>
                {language}
              </motion.li>
            ))}
          </motion.ul>
        </section>

        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-lg mt-8 inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent font-bold drop-shadow-lg shadow-black"
          >
            Frameworks & Tools
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg mt-4 space-y-2"
          >
            {resources.technical.frameworks.map((framework) => (
              <motion.li key={framework} whileHover={{ x: 10 }}>
                {framework}
              </motion.li>
            ))}
          </motion.ul>
        </section>
        <section>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-lg mt-8 inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent font-bold drop-shadow-lg shadow-black"
          >
            Additional Skills
          </motion.h2>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-base md:text-lg mt-4 space-y-2"
          >
            {resources.technical.additional.map((additional) => (
              <motion.li key={additional} whileHover={{ x: 10 }}>
                {additional}
              </motion.li>
            ))}
          </motion.ul>
        </section>
      </div>
    </motion.div>
  );
}

export default Skills;
