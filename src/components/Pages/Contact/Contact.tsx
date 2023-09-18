import { Reveal } from "@/components"
import { MdEmail } from "react-icons/md"

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-contentContainer flex-col items-center justify-center gap-4 py-10 xl:py-32"
    >
      <Reveal>
        <p className="txt-lg flex items-center font-titleFont font-semibold tracking-wide text-textGreen">
          04. What's next?
        </p>
      </Reveal>

      <Reveal>
        <h1 className="font-titleFont text-7xl font-black">
          Contact<span className="text-textGreen">.</span>
        </h1>
      </Reveal>

      <div className="w-2/3 text-center text-base tracking-wider">
        <Reveal>
          <p>
            Please feel free to contact me via email if you would like to establish a connection.
            Also, I'm available on{" "}
            <span className="text-textGreen">
              <a href="https://www.linkedin.com/in/diegohoc/" target="_blank">
                LinkedIn
              </a>
            </span>{" "}
            if you prefer a more agile approach to communication.
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
