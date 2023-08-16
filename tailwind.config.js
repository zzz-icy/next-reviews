/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        orbitron: ["var(--font-orbitron)", "sans-serif"],
        // this overrides the default by tailwind
        sans: ["var(--font-exo2)", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
