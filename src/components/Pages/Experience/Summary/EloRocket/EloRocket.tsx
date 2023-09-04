"use client"

import { motion } from "framer-motion"
import { TiArrowForward } from "react-icons/ti"

export function EloRocket() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-titleFont text-xl font-medium">
        Software Developer
        <a href="https://www.elorocket.com/" target="_blank">
          <span className="tracking-wide text-textGreen">@EloRocket</span>
        </a>
      </h3>

      <p className="mt-l text-sm font-medium text-textDark">May 13, 2022 - August 2, 2023 </p>

      <ul className="mt-6 flex flex-col gap-3 ">
        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-l text-textGreen">
            <TiArrowForward />
          </span>
          Active participation in the software architecture and construction of the entire flow.
        </li>

        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-l text-textGreen">
            <TiArrowForward />
          </span>
          Development of highly functional and adaptable systems to meet the needs of the company.
        </li>

        <li className="flex gap-2 text-base text-textDark">
          <span className="mt-l text-textGreen">
            <TiArrowForward />
          </span>
          Development of a complete administrative dashboard for e-commerce management using React,
          Typescript, Node and PostgreSQL
        </li>
      </ul>
    </motion.div>
  )
}
