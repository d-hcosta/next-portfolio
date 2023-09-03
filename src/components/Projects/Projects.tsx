import Image from "next/image"
import { SectionTitle } from "../SectionTitle"
import { eloRocket, pomodoro, portfolioV1 } from "@/assets"
import { RxOpenInNewWindow } from "react-icons/rx"

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-container py-24 lgl:px-20">
      <SectionTitle number="03" title="Some things I built" />

      <div className="mt-10 flex w-full flex-col items-center justify-center gap-28">
        <div className="mt-10 flex w-full flex-col items-center justify-between gap-28">
          <div className="flex flex-col gap-6 xl:flex-row">
            <a
              href="https://www.elorocket.com/"
              target="_blank"
              className="group relative h-auto w-full xl:w-1/2"
            >
              <div>
                <Image className="h-full w-full object-contain" alt="elorocket" src={eloRocket} />
                <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-textGreen/10 duration-300 group-hover:bg-transparent"></div>
              </div>
            </a>

            <div className="z-10 flex w-full flex-col items-end gap-6 text-right lgl:justify-between xl:-ml-16 xl:w-1/2">
              <div>
                <p className="font-titleFont text-sm tracking-wide text-textGreen">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">EloRocket</h3>
              </div>

              <p className="rounded-md bg-[#112240] p-2 text-sm md:p-6 md:text-base">
                EloRocket is an <span className="text-textGreen">e-commerce</span> platform
                committed to providing exceptional booster and training services to players,
                providing a wide range of innovative solutions to enhance their gaming skills and
                overall experience.
              </p>

              <ul className="flex justify-between gap-2 font-titleFont text-xs tracking-wide text-textDark md:gap-5 md:text-sm">
                <li>React.js</li>
                <li>Node.js</li>
                <li>Styled-Components</li>
                <li>Sass</li>
                <li>PostgreSQL</li>
              </ul>

              <div className="flex gap-4 text-2xl">
                <a
                  href="http://elorocket.com"
                  target="_blank"
                  className="duration-300 hover:text-textGreen"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 xl:flex-row-reverse">
            <a
              href="https://dhcosta.vercel.app/"
              target="_blank"
              className="group relative h-auto w-full xl:w-1/2"
            >
              <div>
                <Image
                  className="h-full w-full object-contain"
                  alt="portfolioV1"
                  src={portfolioV1}
                />
                <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-textGreen/10 duration-300 group-hover:bg-transparent"></div>
              </div>
            </a>

            <div className="z-10 flex w-full flex-col items-end gap-6 text-right lgl:justify-between xl:w-1/2">
              <div>
                <p className="font-titleFont text-sm tracking-wide text-textGreen">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Personal Portfolio V.1</h3>
              </div>

              <p className="rounded-md bg-[#112240] p-2 text-sm md:p-6 md:text-base xl:-mr-16">
                My previous portfolio, developed in <span className="text-textGreen">React.js</span>
                &nbsp; with <span className="text-textGreen">Typescript</span> and&nbsp;
                <span className="text-textGreen">Sass</span>, <br />
                featured a <span className="text-textGreen">language-switching system</span>
                &nbsp;(pt-BR/en-US) and a <span className="text-textGreen">theme-switcher</span>
                &nbsp;both implemented using only&nbsp;
                <span className="text-textGreen">React Hooks</span>
              </p>

              <ul className="flex justify-between gap-2 font-titleFont text-xs tracking-wide text-textDark md:gap-5 md:text-sm">
                <li>React.js</li>
                <li>Sass</li>
                <li>React Hooks</li>
                <li>Typescript</li>
              </ul>

              <div className="flex gap-4 text-2xl">
                <a
                  href="http://elorocket.com"
                  target="_blank"
                  className="duration-300 hover:text-textGreen"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 xl:flex-row">
            <a
              href="https://vrag-pomodoro.vercel.app/"
              target="_blank"
              className="group relative h-auto w-full xl:w-1/2"
            >
              <div>
                <Image className="h-full w-full object-contain" alt="pomodoro" src={pomodoro} />
                <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-textGreen/5 duration-300 group-hover:bg-transparent"></div>
              </div>
            </a>

            <div className="z-10 flex w-full flex-col items-end gap-6 text-right lgl:justify-between xl:-ml-16 xl:w-1/2">
              <div>
                <p className="font-titleFont text-sm tracking-wide text-textGreen">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold">Pomodoro Timer</h3>
              </div>

              <p className="rounded-md bg-[#112240] p-2 text-sm md:p-6 md:text-base">
                I created a robust and efficient Pomodoro Timer using React with Typescript and
                SaSS. This project demonstrates my ability to develop modern applications, with a
                minimalist approach, using exclusively React Hooks for state management.
              </p>

              <ul className="flex justify-between gap-2 font-titleFont text-xs tracking-wide text-textDark md:gap-5 md:text-sm">
                <li>React.js</li>
                <li>React Hooks</li>
                <li>Typescript</li>
                <li>Sass</li>
              </ul>

              <div className="flex gap-4 text-2xl">
                <a
                  href="https://vrag-pomodoro.vercel.app/"
                  target="_blank"
                  className="duration-300 hover:text-textGreen"
                >
                  <RxOpenInNewWindow />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
