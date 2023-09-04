"use client"

import { useState } from "react"
import { SectionTitle } from "@/components/SectionTitle"
import { EloRocket, Freelancer, SignoWeb } from "./Summary"

export function Experience() {
  const [selectedSummary, setSelectedSummary] = useState<SummaryName>("SignoWeb")

  const summaries: Record<SummaryName, JSX.Element> = {
    SignoWeb: <SignoWeb />,
    EloRocket: <EloRocket />,
    Freelancer: <Freelancer />,
  }

  const handleSummaryClick = (summary: SummaryName) => {
    setSelectedSummary(summary)
  }

  return (
    <section id="experience" className="mx-auto max-w-containerxs px-4 py-10 lgl:py-24">
      <SectionTitle title="Where I have worked" number="02" />

      <div className="mt-10 flex w-full flex-col gap-16 md:flex-row">
        <ul className="flex flex-col md:w-32">
          {Object.keys(summaries).map((summaryName) => (
            <li
              key={summaryName}
              onClick={() => handleSummaryClick(summaryName as SummaryName)}
              className={`${
                selectedSummary === summaryName
                  ? "border-l-textGreen text-textGreen"
                  : "border-l-hoverColor text-textDark"
              } cursor-pointer border-l-2  bg-transparent px-8 py-3 text-sm font-medium  duration-300 hover:bg-[#112240]`}
            >
              {summaryName}
            </li>
          ))}
        </ul>

        {summaries[selectedSummary]}
      </div>
    </section>
  )
}
