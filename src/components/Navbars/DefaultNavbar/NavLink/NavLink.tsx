import { motion } from "framer-motion"
import Link from "next/link"

export function NavLink({ href, handleClick, name }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="nav-link font-mediumduration-300 flex cursor-pointer items-center gap-1 hover:text-textGreen"
      onClick={handleClick}
    >
      <motion.li
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        {name}
      </motion.li>
    </Link>
  )
}
