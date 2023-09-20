import { useLanguageContext } from "@/hooks"
import { LanguageModal } from ".."
import { DefaultNavbar } from "./DefaultNavbar"
import { MobileNavbar } from "./MobileNavbar"

export function Navbars() {
  const { handleOpenLanguageModal, isLanguageModalOpen } = useLanguageContext()

  return (
    <>
      <DefaultNavbar />
      <MobileNavbar />
      <LanguageModal isOpen={isLanguageModalOpen} setIsOpen={handleOpenLanguageModal} />
    </>
  )
}
