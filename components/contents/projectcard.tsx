"use client";
import { slideInFromTop } from "@/utils/motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { Project_skill_data } from "@/constants/projectSkills";
import { FaGithub } from "react-icons/fa";

interface Props {
  src: string;
  title: string;
  description: string;
  skills: string[];
  skillsImage: number[];
  github?: string | null; // Accepts string or null
  research?: string | null; // Accepts string or null
}

const ProjectCard = ({
  src,
  title,
  description,
  skills,
  skillsImage,
  github,
  research,
}: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] mb-8">
      <div className="relative p-1">
        <Image
          src={src}
          alt={title}
          width={800}
          height={1000}
          className="w-full object-contain"
        />
      </div>
      <div className="relative p-6 z-10">
        <h1 className="text-2xl font-semibold text-white mb-6 relative z-20">
          {title}{" "}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block ml-2"
            >
              <FaGithub
                width={24}
                height={24}
                style={{ color: "#ffffff", width: 24, height: 24 }}
              />
            </a>
          )}
        </h1>
        <h1>
          {research && (
            <a
              href={research}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-lg my-[15px] underline py-5"
              style={{ color: "#ffffff", width: 24, height: 24 }}
            >
              Research Paper
            </a>
          )}
        </h1>
        <p className="relative mt-2 text-gray-300 my-[15px] z-20">
          {description}
        </p>
        {skills.map((skill, index) => {
          const image = Project_skill_data[skillsImage[index]];
          return (
            <motion.div
              key={index}
              variants={slideInFromTop}
              className="Welcome-box py-2 my-1 px-3 border border-[#7042f88b] opacity-90 relative z-20 flex flex-wrap items-center"
            >
              <div className="flex items-center space-x-2 px-2">
                <Image
                  src={image.Image}
                  width={image.width}
                  height={image.height}
                  alt={`skill image ${skill}`}
                  id={"img" + index.toString()}
                />
                <p className="Welcome-text text-xs sm:text-sm md:text-base hidden sm:block">
                  {skill}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
