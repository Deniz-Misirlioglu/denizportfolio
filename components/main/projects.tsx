import React from "react";
import ProjectCard from "../contents/projectcard";
import Projectstext from "../contents/projectstext";
import items from "./items.json";
const projects = items.items.projects;

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center "
      id="projects  z-10"
    >
      <Projectstext />
      <div className="h-1/2 w-1/2 flex-col md:flex-row gap-20 px-10 py-5  z-30">
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
