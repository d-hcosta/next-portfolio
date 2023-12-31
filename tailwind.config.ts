import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024px",
        containerxs: "768px",
      },
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      fontFamily: {
        bodyFont: ["Inter", "sans-serif"],
        titleFont: ["Poppins", "sans-serif"],
      },
      boxShadow: { navbarShadow: "0 10px 30px -10px rgba(0, 1, 1, 0.3)" },
      colors: {
        bodyColor: "#111111",
        textGreen: "#0aff9d",
        textLight: "#ebecf3",
        textDark: "#a0a0a5",
        hoverColor: "rgba(100, 255, 218, 0.1)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
}
export default config
