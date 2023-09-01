import Image from "next/image"
import { SectionTitle } from "../SectionTitle"
import { characterAbout } from "@/assets"
import { AiFillThunderbolt } from "react-icons/ai"

export function About() {
  return (
    <section
      id="about"
      className="mx-auto flex max-w-containerSmall flex-col gap-8 py-10 lgl:py-32"
    >
      <SectionTitle number="01" title="About" />

      <div className="flex flex-col gap-16 lgl:flex-row">
        <div className="flex w-full flex-col gap-4 text-base font-medium text-textDark lgl:w-2/3">
          <p>
            I'm a curious and competent full-stack software developer. I see myself as an eternal
            learner, motivated to solve complex problems. Programming for me is a way to find peace
            in the midst of chaos.
          </p>

          <p>Here are a few technologies i work:</p>

          <ul className="mt-6 grid max-w-[450px] grid-cols-2 gap-2 font-titleFont text-sm">
            <li className="flex-items flex gap-2">
              <span className="text-textGreen ">
                <AiFillThunderbolt />
              </span>
              Javascript (ES6+)
            </li>

            <li className="flex-items flex gap-2">
              <span className="text-textGreen ">
                <AiFillThunderbolt />
              </span>
              Typescrpt
            </li>

            <li className="flex-items flex gap-2">
              <span className="text-textGreen ">
                <AiFillThunderbolt />
              </span>
              React
            </li>

            <li className="flex-items flex gap-2">
              <span className="text-textGreen ">
                <AiFillThunderbolt />
              </span>
              Next.js
            </li>

            <li className="flex-items flex gap-2">
              <span className="text-textGreen ">
                <AiFillThunderbolt />
              </span>
              Node.js
            </li>

            <li className="flex-items flex gap-2">
              <span className="text-textGreen ">
                <AiFillThunderbolt />
              </span>
              Nest.js
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
