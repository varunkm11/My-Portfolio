import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import DownloadResumeButton from "./DownloadResumeButton";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="relative z-10 mt-20 text-center md:mt-50 md:text-left flex flex-col items-start c-space">
      <motion.h1
        className="text-4xl font-medium"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
      >
        Hi I'm Varun
      </motion.h1>
      <motion.p
        className="text-5xl font-medium text-neutral-300"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
      >
        A Developer <br /> Dedicated to Crafting
      </motion.p>
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.5 }}
      >
        <FlipWords
          words={words}
          className="font-black text-white text-8xl"
        />
      </motion.div>
      <motion.p
        className="text-4xl font-medium text-neutral-300"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.8 }}
      >
        Web Solutions
      </motion.p>
      
      {/* Download Resume Button */}
      <motion.div
        className="mt-8"
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 2.2 }}
      >
        <DownloadResumeButton />
      </motion.div>
    </div>
  );
};

export default HeroText;
