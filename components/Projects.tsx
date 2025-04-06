import { mono } from "@/pages/_app";
import resources from "@/static";
import { motion } from "framer-motion";

function Projects() {
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
        <span className="text-custom-main bg-clip-text">Projects</span>
      </motion.h1>
      <div className={mono.className}>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-lg mt-8 inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent font-bold drop-shadow-lg shadow-black"
        >
          Current Projects
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg mt-4 space-y-2"
        >
          {resources.technical.currentprojects.map((currentprojects) => (
            <motion.li key={currentprojects} whileHover={{ x: 10 }}>
              {currentprojects}
            </motion.li>
          ))}
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-lg mt-8 inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent font-bold drop-shadow-lg shadow-black"
        >
          Former Projects
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg mt-4 space-y-2"
        >
          {resources.technical.formerprojects.map((formerprojects) => (
            <motion.li key={formerprojects} whileHover={{ x: 10 }}>
              {formerprojects}
            </motion.li>
          ))}
        </motion.ul>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-lg mt-8 inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent font-bold drop-shadow-lg shadow-black"
        >
          Current Communities
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg mt-4 space-y-2"
        >
          {resources.technical.currentcommunities.map((currentcommunities) => (
            <motion.li key={currentcommunities} whileHover={{ x: 10 }}>
              {currentcommunities}
            </motion.li>
          ))}
        </motion.ul>
        
    <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xl md:text-lg mt-8 inline-block bg-gradient-to-r from-custom-main to-custom-secondary bg-clip-text text-transparent font-bold drop-shadow-lg shadow-black"
        >
          Former Communities
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-base md:text-lg mt-4 space-y-2"
        >
          {resources.technical.formercommunities.map((formercommunities) => (
            <motion.li key={formercommunities} whileHover={{ x: 10 }}>
              {formercommunities}
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default Projects;
