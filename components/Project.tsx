import ProjectCard from "./ProjectCard";
import type { SanityProject } from "@/sanity/types";

const Project = ({ projects }: { projects: SanityProject[] }) => {
  return (
    <div className="flex flex-col md:gap-10">
      {projects.map((project, index) => (
        <ProjectCard key={project._id} project={project} index={index} />
      ))}
    </div>
  );
};

export default Project;
