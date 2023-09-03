import {
  About,
  AsideLeft,
  AsideRight,
  HeroSection,
  Navbar,
  Experience,
  Projects,
  Contact,
} from "@/components"

export default function Home() {
  return (
    <main className="scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60 h-screen w-full  overflow-x-hidden overflow-y-scroll bg-bodyColor font-bodyFont text-textLight">
      <Navbar />

      <div className="h-[88vh] w-full items-center justify-between gap-20 xl:flex">
        <AsideLeft />

        <div className="mx-auto h-[88vh] w-full p-4">
          <HeroSection />
          <About />
          <Experience />
          <Projects />
          <Contact />
        </div>

        <AsideRight />
      </div>
    </main>
  )
}
