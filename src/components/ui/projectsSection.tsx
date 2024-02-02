
import { ProjectsData } from "./projectsData";
import ProjectCard from "./projectCard";

export default function ProjectsSection() {
    return (
      <section className="py-16">
        <div className="flex flex-col items-center">
            <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
                My Projects
            </h2>
        </div>
        <div className="grid gap-8  md:grid-cols-3 md:gap-12">
          {ProjectsData.map((project,index) => (
            <ProjectCard
            key={index}
            title={project.title} 
            img={project.img} 
            description={project.description}
            siteUrl={project.siteUrl}
            githubUrl={project.githubUrl}
            />
          ))}
        </div>
      </section>
    )
  }