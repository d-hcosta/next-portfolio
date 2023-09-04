import { motion } from "framer-motion"

export function AsideRight() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      className="fixed bottom-0 right-0 hidden h-full w-32 xl:inline-flex"
    >
      <div className="flex h-full w-full flex-col items-center justify-end gap-6 text-textLight">
        <a href="mailto:d.hcosta@proton.me">
          <p className="w-72 rotate-90 text-sm tracking-wide text-textGreen">d.hcosta@proton.me</p>
        </a>

        <span className="inline-flex h-32 w-[2px] bg-textDark"></span>
      </div>
    </motion.div>
  )
}
