import { useCallback } from "react"
import { Particles as ReactTsParticles } from "react-tsparticles"
import { Engine } from "tsparticles-engine"
import { loadFull } from "tsparticles"

export function Particles() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async () => {}, [])

  return (
    <ReactTsParticles
      id="tsparticles"
      className="absolute left-0 top-0 h-full w-full opacity-60"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: { color: { value: "" } },
        fpsLimit: 120,
        interactivity: {
          events: {
            onclick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: { quantity: 90 },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: { value: "#078816" },
          links: {
            color: "#a3f593",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          collisions: { enable: true },
          move: {
            direction: "none",
            enable: true,
            outModes: { default: "bounce" },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  )
}
