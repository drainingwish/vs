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
        className="flex flex-col items-center p-4 text-white mt-8 w-full z-30 top-0"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-lg md:text-xl tracking-widest mb-8 md:mb-0"
        >
          draining.info
        </motion.div>

        <nav className="md:static">
          <motion.ul
            variants={navItems}
            initial="hidden"
            animate="show"
            className="flex flex-row space-x-10 text-lg font-mono justify-center"
          >
            <motion.li
              variants={item}
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="text-white cursor-pointer"
            >
              <span className="text-custom-secondary hover:text-custom-main transition-colors">
                <Link href="/">Home</Link>
              </span>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="text-white cursor-pointer"
            >
              <span className="text-custom-secondary hover:text-custom-main transition-colors">
                <Link href="/about">Bio</Link>
              </span>
            </motion.li>
            <motion.li
              variants={item}
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="text-white cursor-pointer"
            >
              <span className="text-custom-secondary hover:text-custom-main transition-colors">
                <Link href="/skills">Experience</Link>
              </span>
            </motion.li>
          </motion.ul>
        </nav>
      </motion.header>
    </div>
  );
}

export default Header;
