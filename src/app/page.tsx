import { Navbar } from "@/components"
import { AsideLeft } from "@/components/AsideLeft/AsideLeft"
import { AsideRight } from "@/components/AsideRight"

export default function Home() {
  return (
    <main className="scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 h-screen w-full  overflow-x-hidden overflow-y-scroll bg-bodyColor font-bodyFont text-textLight">
      <Navbar />

      <div className="h-[88vh] w-full items-center justify-between gap-20 xl:flex">
        <div className="fixed bottom-0 left-0 hidden h-full w-32 xl:inline-flex">
          <AsideLeft />
        </div>

        <div className="mx-auto h-[88vh] p-4">MIddle</div>

        <div className="fixed bottom-0 right-0 hidden h-full w-32 xl:inline-flex">
          <AsideRight />
        </div>
      </div>
    </main>
  )
}
