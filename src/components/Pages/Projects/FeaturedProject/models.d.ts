interface FeaturedProjectProps {
  projectName: string
  projectShortDescription: string
  imgSrc: StaticImageData
  techArray: Array<string>
  reverse?: boolean
  openDetailedProject: () => void
}
