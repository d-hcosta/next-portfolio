import { useState } from "react"
import { SectionTitle } from "@/components/SectionTitle"
import { Reveal } from "@/components"
import { ExperiencesConstants } from "@/constants"
import { Summary } from "./Summary"

export function Experience() {
  const [selectedSummary, setSelectedSummary] = useState("SignoWeb")

  const handleSummaryClick = (name: string) => {
    setSelectedSummary(name)
  }

  return (
    <section id="experience" className="mx-auto max-w-containerxs px-4 py-10 lgl:py-24">
      <SectionTitle title="Where I have worked" number="02" />

      <div className="mt-10 flex w-full flex-col gap-16 md:flex-row">
        <ul className="flex flex-col md:w-32">
          {ExperiencesConstants.map((experience, index) => (
            <Reveal key={`experience-${index}`}>
              <li
                onClick={() => handleSummaryClick(experience.name)}
                className={`${
                  selectedSummary === experience.name
                    ? "border-l-textGreen text-textGreen"
                    : "border-l-hoverColor text-textDark"
                } cursor-pointer border-l-2  bg-transparent px-8 py-3 text-sm font-medium  duration-300 hover:bg-[#112240]`}
              >
                {experience.name}
              </li>
            </Reveal>
          ))}
        </ul>

        {selectedSummary && (
          <Summary
            projectUrl={
              ExperiencesConstants.find((s) => s.name === selectedSummary)?.projectUrl || ""
            }
            projectName={
              ExperiencesConstants.find((s) => s.name === selectedSummary)?.projectName || ""
            }
            periodInTheProject={
              ExperiencesConstants.find((s) => s.name === selectedSummary)?.periodInTheProject || ""
            }
            arrayOfDescriptions={
              ExperiencesConstants.find((s) => s.name === selectedSummary)?.arrayOfDescriptions ||
              []
            }
            positionHeld={
              ExperiencesConstants.find((s) => s.name === selectedSummary)?.positionHeld || ""
            }
          />
        )}
      </div>
    </section>
  )
}
