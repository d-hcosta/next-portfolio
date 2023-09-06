import { MdEmail } from "react-icons/md"

export function Contact() {
  return (
    <section
      id="contact"
      className="mx-auto flex max-w-contentContainer flex-col items-center justify-center gap-4 py-10 xl:py-32"
    >
      <p className="txt-lg flex items-center font-titleFont font-semibold tracking-wide text-textGreen">
        04. What's next?
      </p>

      <h1 className="font-titleFont text-7xl font-black">Contact</h1>

      <div className="w-2/3 text-center text-base tracking-wider">
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

        <div className="mt-5 flex items-center justify-center gap-3 text-2xl font-semibold hover:text-textGreen ">
          <MdEmail />

          <a href="mailto:d.hcosta@proton.me" target="_blank">
            d.hcosta@proton.me
          </a>
        </div>
      </div>
    </section>
  )
}
