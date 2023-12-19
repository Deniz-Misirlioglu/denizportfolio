"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div
      className="w-full h-auto flex flex-col items-center justify-center"
      style={{ transform: "scale(0.9" }}
    >
      <motion.div variants={slideInFromTop}>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          My Projects
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[0px] text-center mb-[15px]"
      >
        Personal projects which served as a platform for developing and honing
        my skills
      </motion.div>
    </div>
  );
};

export default SkillText;
