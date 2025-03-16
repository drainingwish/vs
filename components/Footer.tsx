import { mono } from "@/pages/_app";
import resources from "@/static";
import { motion } from "framer-motion";
import { AtSignIcon, BirdIcon, GithubIcon, BoxIcon } from "lucide-react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="text-white py-12 px-8 md:px-0"
    >
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="text-2xl mb-4 font-mono text-center md:text-left">
          <div className={mono.className}>
            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="text-white mb-1"
            >
              <a href={`//${resources.default.redir}`}>
                {resources.default.redir}
              </a>
            </motion.div>

          </div>
        </div>

        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-16">
          <div>
            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="font-medium mb-4 flex items-center space-x-2 text-white"
            >
              <GithubIcon className="h-5 w-5" />
              <span>
                <a target="_blank" href={resources.socials.github}>
                  GitHub
                </a>
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="font-medium flex items-center space-x-2 text-white"
            >
              <BirdIcon className="h-5 w-5" />
              <span>
                <a target="_blank" href={resources.socials.bluesky}>
                  Bluesky
                </a>
              </span>
            </motion.div>
          </div>

          <div>
            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="font-medium flex mb-4 items-center space-x-2 text-white"
            >
              <AtSignIcon className="h-5 w-5" />
              <span>
                <a target="_blank" href={resources.socials.discorduser}>
                  Discord
                </a>
              </span>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05, color: resources.colors.main }}
              transition={{ duration: 0.2 }}
              className="font-medium flex items-center space-x-2 text-white"
            >
              <BoxIcon className="h-5 w-5" />
              <span>
                <a target="_blank" href={resources.socials.roblox}>
                  Roblox
                </a>
              </span>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
