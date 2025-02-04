import { mono } from "@/pages/_app";
import resources from "@/static";
import { motion } from "framer-motion";
import Link from "next/link";

function Header() {
  const navItems = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: -20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className={mono.className}>
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row justify-center md:justify-between items-center p-4 relative md:relative text-white mt-8 w-full z-30 top-0 md:right-0 md:pr-60"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-lg md:text-xl tracking-widest mb-4 md:mb-0 absolute w-full text-center md:relative md:text-left left-0 pl-40"
        >
          draining.info
        </motion.div>

        <nav className="md:absolute right-0 pr-40">
          <motion.ul
            variants={navItems}
            initial="hidden"
            animate="show"
            className="flex flex-col md:flex-row space-y-4 md:pl-40 md:space-y-0 md:space-x-10 text-lg font-mono"
          >
            <motion.li
              variants={item}
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="text-white cursor-pointer"
            >
              <Link href="/">Home</Link>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="text-white cursor-pointer"
            >
              <Link href="/about">About</Link>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="text-white cursor-pointer"
            >
              <Link href="/skills">Experience</Link>
            </motion.li>
          </motion.ul>
        </nav>
      </motion.header>
    </div>
  );
}

export default Header;
