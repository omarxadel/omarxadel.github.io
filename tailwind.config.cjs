const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Bricolage Grotesque Variable"', "Bricolage Grotesque", ...defaultTheme.fontFamily.sans],
        mono: ["DM Mono", ...defaultTheme.fontFamily.mono],
      },
      maxWidth: {
        page: "1080px",
      },
    },
  },
  plugins: [],
};
