interface ProjectModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  project: ProjectProps | null
}

interface ProjectProps {
  image: StaticImageData
  name: string
  shortDescription: string
  techArray: string[]
  reverse: boolean
  completeDescription?: string[]
}
