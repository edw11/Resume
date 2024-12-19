import ProjectCard from "./ProjectCard";
import { project } from "@/constant";

const Project = () => {
  return (
    <div>
      {project.map((project, index) => (
        <ProjectCard key={index} {...project} id={index} />
      ))}
    </div>
  );
};

export default Project;
