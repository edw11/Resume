import ProjectCard from "./ProjectCard";
import { project } from "@/constant";

const Project = () => {
  return (
    <div className="flex flex-col md:gap-10">
      {project.map((project, index) => (
        <ProjectCard key={index} {...project} id={index} />
      ))}
    </div>
  );
};

export default Project;
