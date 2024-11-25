import React, { useEffect, useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import profilePic from "../assets/profilepic.png";
import reactlogo from "../assets/react.png";
import tailwindCssLogo from "../assets/tailwindcss.png";
import html from "../assets/html.png";
import js from "../assets/js.png";

import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const Hero1 = () => {
  const color = useMotionValue(COLORS_TOP[0]);
  const ref = useRef(null);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`radial-gradient(150% 150% at 50% 0%, #020617 50%, ${color})`;
  const border = useMotionTemplate`1px solid ${color}`;
  const boxShadow = useMotionTemplate`0px 4px 24px ${color}`;

  return (
    <motion.section
      id="home"
      style={{
        backgroundImage,
      }}
      className="relative grid min-h-screen place-content-center overflow-hidden px-4 py-24 text-gray-200"
      ref={ref}
    >
      <motion.div
        className="hidden md:block absolute left-[140px] top-[90px] z-[99999]"
        drag
        dragConstraints={ref}
        whileDrag={{ scale: 1.2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        <img
          src={reactlogo}
          height="170"
          width="190"
          alt="cursor"
          className=""
          draggable="false"
        />
      </motion.div>

      <motion.div
        className="hidden md:block absolute right-[140px] top-[110px] z-[99999]"
        drag
        dragConstraints={ref}
        whileDrag={{ scale: 1.2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        <img
          src={html}
          height="140"
          width="150"
          alt="cursor"
          className=""
          draggable="false"
        />
      </motion.div>

      <motion.div
        className="hidden md:block absolute left-[120px] bottom-[200px] z-[99999]"
        drag
        dragConstraints={ref}
        whileDrag={{ scale: 1.2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        <img
          src={js}
          height="210"
          width="220"
          alt="cursor"
          className=""
          draggable="false"
        />
      </motion.div>

      <motion.div
        className="hidden md:block absolute right-[120px] bottom-[200px] z-[999999]"
        drag
        dragConstraints={ref}
        whileDrag={{ scale: 1.2 }}
        dragTransition={{ bounceStiffness: 600, bounceDamping: 10 }}
      >
        <img
          src={tailwindCssLogo}
          height="190"
          width="200"
          alt="cursor"
          className=""
          draggable="false"
        />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center md:bg-black md:rounded-full md:py-20 md:px-28">
        <span className="mb-3 flex items-center gap-3 rounded-full bg-gray-600/50 px-5 py-2 text-lg font-semibold">
          <div className="bg-green-500 size-2.5 rounded-full relative">
            <div className="bg-green-500 absolute inset-0 rounded-full animate-ping-large"></div>
          </div>
          Open for Work
        </span>
        <h1 className="max-w-3xl text-white bg-clip-text text-center text-4xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
          Hi, I am
        </h1>
        <h1 className="max-w-3xl bg-gradient-to-br from-white to-gray-700 bg-clip-text text-center text-4xl font-bold leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight font-calistoga">
          Rith Banerjee
        </h1>
        <img src={profilePic} alt="profile pic" width={250} />
        <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
          Front-end Developer based in Kolkata, India. I have a passion for
          creating engaging and user-friendly web experiences.
        </p>
        <a
          href="https://drive.google.com/file/d/1egpqZdxNkBim9y4fyMw0qBcDFfml8dnl/view?usp=sharing"
          target="_blank"
        >
          <motion.button
            style={{
              border,
              boxShadow,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.985,
            }}
            className="group relative flex w-fit items-center gap-1.5 rounded-full bg-gray-950/10 px-4 py-2 text-gray-50 transition-colors hover:bg-gray-950/50 text-lg font-semibold"
          >
            Download Resume
            <FiArrowRight className="transition-transform group-hover:-rotate-45 group-active:-rotate-12" />
          </motion.button>
        </a>
      </div>
    </motion.section>
  );
};
