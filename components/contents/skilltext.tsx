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
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <motion.div variants={slideInFromTop}>
        <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          Skills
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[30px] text-white font-medium mt-[0px] text-center mb-[15px]"
      >
        Modern Technologies that I have used in recent projects
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[20px] text-white font-medium mt-[20px] text-center mb-[15px]"
      >
        Skills for specific projects are displayed in my{" "}
        <span className="text-[20px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
          projects{" "}
        </span>
        below
      </motion.div>
    </div>
  );
};

export default SkillText;
