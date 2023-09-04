"use client"

import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

export function SignoWeb() {
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

      <p className="mt-l text-sm font-medium text-textDark">July 6, 2022 - October 10, 2022</p>

      <ul className="mt-6 flex flex-col gap-3 ">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-l text-textGreen">
            <TiArrowForward />
          </span>
          Continuous improvement of existing systems with the implementation of new features and bug
          fixes.
        </li>

        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-l text-textGreen">
            <TiArrowForward />
          </span>
          Maintenance on existing projects and monolithic application development using the MERN
          Stack.
        </li>

        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-l text-textGreen">
            <TiArrowForward />
          </span>
          Implementation of new functionalities and maintenance in diversified systems.
        </li>
      </ul>
    </motion.div>
  )
}
