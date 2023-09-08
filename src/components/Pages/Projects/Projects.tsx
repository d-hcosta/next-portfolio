import { useState } from "react"
import { SectionTitle, ProjectModal } from "@/components"
import { FeaturedProject } from "./FeaturedProject"
import { ProjectsConstants } from "@/constants"

export function Projects() {
  const [openedProject, setOpenedProject] = useState<ProjectProps | null>(null)
  const [isOpen, setIsOpen] = useState(false)

  function handleOpenDetailedProjectModal(project: ProjectProps) {
    setIsOpen(!isOpen)
    setOpenedProject(project)
  }

  return (
    <section id="projects" className="mx-auto max-w-container py-24 lgl:px-20">
      <SectionTitle number="03" title="Some things I built" />

      <div className="mt-10 flex w-full flex-col items-center justify-center gap-28">
        <div className="mt-10 flex w-full flex-col items-center justify-between gap-28 tracking-wide">
          {ProjectsConstants.map((project, index) => (
            <FeaturedProject
              key={`project-${index}`}
              imgSrc={project.image}
              projectName={project.name}
              projectShortDescription={project.shortDescription}
              techArray={project.techArray}
              reverse={project.reverse}
              openDetailedProject={() => handleOpenDetailedProjectModal(project)}
            />
          ))}
        </div>
      </div>
      <ProjectModal isOpen={isOpen} setIsOpen={setIsOpen} project={openedProject} />
    </section>
  )
}
