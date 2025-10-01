import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";
import { PointerHighlight } from "./highlight_word";

const HeroText = () => {
  const words = ["Secure", "Modern", "Scalable"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* Desktop View */}
      <div className="flex-col hidden md:flex c-space">
        <h1
          className="text-4xl font-medium mb-5 flex  items-center "
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi I'm
          <PointerHighlight
            rectangleClassName="ml-1 border-dashed bg-[#6C244B]/40 backdrop-blur-xl  border-yellow-600 "
            pointerClassName="text-[#EFA3B7]"
          >
            <span className=" text-5xl ml-2 z-10 relative text-purple-400">
              Gasser
            </span>
          </PointerHighlight>
        </h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300 flex items-center"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Tech
            <PointerHighlight
              rectangleClassName=" ml-1 bg-yellow-700  border-yellow-600 relative z-10"
              pointerClassName="text-yellow-400"
            >
              <span className="text-5xl ml-2 z-10 relative text-yellow-400">
                Entrepreneur
              </span>
            </PointerHighlight>
          </motion.p>
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Dedicated to Crafting
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
        </div>
      </div>
      {/* Mobile View */}
      <div className="flex flex-col items-center space-y-4 md:hidden w-full max-w-sm mx-auto h-96 overflow-hidden px-4">
        <motion.p
          className="text-3xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1 }}
        >
          Hi, I'm
          <PointerHighlight
            rectangleClassName="ml-1 border-dashed bg-[#6C244B]/40 backdrop-blur-xl  border-yellow-600 "
            pointerClassName="text-[#EFA3B7]"
          >
            <span className=" text-5xl ml-2 z-10 relative text-purple-400">
              Gasser
            </span>
          </PointerHighlight>
        </motion.p>
        <div className="flex flex-col space-y-2">
          <motion.p
            className="text-4xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            Building
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
            className="  "
          >
            <PointerHighlight
              rectangleClassName="bg-yellow-700  border-yellow-600"
              pointerClassName="text-yellow-400"
            >
              <h1 className="font-black text-5xl  relative z-10 text-yellow-400">
                Legendary
              </h1>
            </PointerHighlight>
          </motion.div>

          <motion.p
            className="text-3xl font-black text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Web Applications
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
