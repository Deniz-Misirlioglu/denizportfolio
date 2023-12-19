import React from "react";
import ProjectCard from "../contents/projectcard";
import Projectstext from "../contents/projectstext";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center " id="projects">
      <Projectstext />
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/stockify.png"
          title="Stockify Web Application"
          description="Created a full stack web application with the use of Polygons.io stock retrieval API letting users pick an 
          exchange, and stock to view data."
        />
        <ProjectCard
          src="/merged.png"
          title="ANSYS Pcie7.0 Simulation"
          description=" Modeled and designed a data trace of a PCIe 7.0 interconnect and used ANSYS to analyze the signal
          conditions. Data was gained and analyzed at various data speeds."
        />
        <ProjectCard
          src="/hideandseek.png"
          title="Red/Blue Attack Defense Analysis"
          description=" Created a multiplayer networking game to simulate a cybersecurity model with red vs blue team principles in Unreal 
          Engine 5. Analyzed human behavoir an choices under strict conditions."
        />
      </div>
    </div>
  );
};

export default Projects;
