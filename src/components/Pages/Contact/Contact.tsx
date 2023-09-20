import { useLanguageContext } from "@/hooks"
import { Reveal } from "@/components"
import { MdEmail } from "react-icons/md"

export function Contact() {
  const { translate } = useLanguageContext()

  return (
    <section
      id="contact"
      className="mx-auto flex max-w-contentContainer flex-col items-center justify-center gap-4 py-10 xl:py-32"
    >
      <Reveal>
        <p className="txt-lg flex items-center font-titleFont font-semibold tracking-wide text-textGreen">
          04. {translate("ContactSectionTitle")}
        </p>
      </Reveal>

      <Reveal>
        <h1 className="font-titleFont text-7xl font-black">
          {translate("ContactSectionSubtitle")}
          <span className="text-textGreen">.</span>
        </h1>
      </Reveal>

      <div className="w-2/3 text-center text-base tracking-wider">
        <Reveal>
          <p>
            {translate("ContactSectionDescription")}&nbsp;
            <span className="text-textGreen">
              <a href="https://www.linkedin.com/in/diegohoc/" target="_blank">
                LinkedIn
              </a>
            </span>{" "}
            {translate("ContactSectionEndDescription")}
          </p>
        </Reveal>

        <div className="mt-5 flex items-center justify-center gap-3 text-2xl font-semibold hover:text-textGreen ">
          <Reveal>
            <MdEmail />
          </Reveal>

          <Reveal>
            <a href="mailto:d.hcosta@proton.me" target="_blank">
              d.hcosta@proton.me
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
