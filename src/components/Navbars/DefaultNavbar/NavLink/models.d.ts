interface NavLinkProps {
  href: string
  handleClick: (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  name: string
}
