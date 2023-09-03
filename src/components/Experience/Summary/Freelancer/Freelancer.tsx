"use client"

import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

export function Freelancer() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-titleFont text-xl font-medium">
        Fullstack Developer
        <a href="https://site.signoweb.com.br/" target="_blank">
          <span className="tracking-wide text-textGreen">@SignoWeb</span>
        </a>
      </h3>

      <p className="mt-l text-sm font-medium text-textDark">Jan 23, 2022 - Present</p>

      <ul className="mt-6 flex flex-col gap-3 ">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-l text-textGreen">
            <TiArrowForward />
          </span>
          Successful development of e-commerce and landing pages in React with Styled Components/
          Tailwind.
        </li>

        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-l text-textGreen">
            <TiArrowForward />
          </span>
          Strengthening skills in agile software development and fullstack.
        </li>

        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-l text-textGreen">
            <TiArrowForward />
          </span>
          Strengthening machine learning with Python.
        </li>
      </ul>
    </motion.div>
  )
}
