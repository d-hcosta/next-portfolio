import Link from "next/link"

export function NavbarLi({ icon, href, name, onClick }: NavbarLiProps) {
  function handleScroll(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault()

    const { href } = event.currentTarget

    const targetId = href.replace(/.*\#/, "")
    const element = document.getElementById(targetId)

    element?.scrollIntoView({ behavior: "smooth" })

    onClick()
  }

  return (
    <li>
      <Link
        className="flex flex-col items-center hover:text-textGreen"
        href={href}
        onClick={handleScroll}
      >
        <label className="text-textGreen">{icon}</label>
        {name}
      </Link>
    </li>
  )
}
