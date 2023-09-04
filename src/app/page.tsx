"use client"

import {
  About,
  AsideLeft,
  AsideRight,
  BackgroundParticles,
  Contact,
  Experience,
  HeroSection,
  Navbar,
  Projects,
} from "@/components"

export default function Home() {
  return (
    <main className="h-screen w-full overflow-x-hidden overflow-y-scroll bg-bodyColor  font-bodyFont text-textLight scrollbar scrollbar-track-textDark/20 scrollbar-thumb-textDark/60">
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

      {/* <BackgroundParticles /> */}
    </main>
  )
}
