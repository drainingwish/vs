import { mono } from "@/pages/_app";
import { motion } from "framer-motion";

function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-white md:p-20 p-14"
    >
      <motion.h1
        className="text-6xl md:text-7xl font-bold mb-4 font-khula"
        whileHover={{ scale: 1.05 }}
      >
        <span className="bg-gradient-to-r from-custom-main to-custom-secondary text-transparent bg-clip-text">
          404
        </span>
      </motion.h1>
      <div className={mono.className}>
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          Not Found
        </motion.h2>
        <motion.ul
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-xl md:text-xl mt-4 space-y-2"
        >
          <motion.li whileHover={{ x: 10 }}>
            Whoops! The page you are looking for does not exist. {":("}
          </motion.li>
        </motion.ul>
      </div>
    </motion.div>
  );
}

export default NotFound;
