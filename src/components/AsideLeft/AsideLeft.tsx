import { TbBrandGithub } from "react-icons/tb"
import { SlSocialLinkedin } from "react-icons/sl"

export function AsideLeft() {
  return (
    <div className="flex h-full w-full flex-col items-center justify-end gap-4 text-textLight">
      <div className="flex flex-col gap-4 ">
        <a href="https://github.com/d-hcosta" target="_blank">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <TbBrandGithub />
          </span>
        </a>

        <a href="https://www.linkedin.com/in/diegohoc/" target="_blank">
          <span className="inline-flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-hoverColor text-xl transition-all duration-300 hover:-translate-y-2 hover:text-textGreen">
            <SlSocialLinkedin />
          </span>
        </a>
      </div>

      <div className="h-32 w-[2px] bg-textDark "></div>
    </div>
  )
}
