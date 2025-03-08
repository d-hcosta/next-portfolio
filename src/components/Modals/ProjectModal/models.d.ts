interface ProjectModalProps {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  project: ProjectProps | null
}

interface ProjectProps {
  image: StaticImageData
  name: string
  shortDescription: {
    BR: string
    EN: string
  }
  techArray: string[]
  reverse: boolean
  completeDescription?: CompleteDescription
  githubLink?: string | boolean
  liveLink?: string | boolean
  showFooter?: boolean
}

type CompleteDescription = {
  [key: string]: string[]
}
