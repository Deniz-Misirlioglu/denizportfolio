"use client";
import React, { useEffect, useState } from "react";
import ProjectCard from "../contents/projectcard";
import Projectstext from "../contents/projectstext";
import items from "./items.json";
const projects = items.items.projects;

const Projects = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 640);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check screen size on initial render

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div
      className="flex flex-col items-center justify-center "
      id="projects  z-10"
    >
      <Projectstext />
      <div
        className={` ${
          isSmallScreen
            ? "h-full w-full flex-col md:flex-row gap-20 px-10 py-5  z-30"
            : "h-1/2 w-1/2 flex-col md:flex-row gap-20 px-10 py-5  z-30"
        } `}
      >
        {projects.map((items) => (
          <ProjectCard
            key={items.id}
            src={items.src}
            title={items.title}
            description={items.description}
            skills={items.skills}
            skillsImage={items.skillsImage}
            github={items.Github}
            research={items.Research}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
