import { SectionTitle } from "@/components"
import { FeaturedProject } from "./FeaturedProject"
import { ProjectsConstants } from "@/constants"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-container py-24 lgl:px-20">
      <SectionTitle number="03" title="Some things I built" />

      <div className="mt-10 flex w-full flex-col items-center justify-center gap-28">
        <div className="mt-10 flex w-full flex-col items-center justify-between gap-28">
          {ProjectsConstants.map((project, index) => (
            <FeaturedProject
              key={`project-${index}`}
              imgSrc={project.image}
              projectName={project.name}
              projectShortDescription={project.description}
              techArray={project.techArray}
              reverse={project.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
