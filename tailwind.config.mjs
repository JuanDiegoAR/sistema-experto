/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      boxShadow: {
        stable: "0px 4px 12px 0px rgba(0, 0, 0, 0.25)",
        emphasis: "0px 4px 12px 8px rgba(21, 103, 3, 0.80);",
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        exploreContentGrid: "repeat(auto-fit, minmax(200px, 1fr))",
        optionsContentGrid: "repeat(auto-fit, minmax(200px, 350px))",
        phylumInfoGrid: "repeat(auto-fit, minmax(300px, 600px))",
        phylumTagsGrid: "repeat(auto-fit, minmax(150px, 165px))",
      },
      screens: {
        xs: "375px",
      },
    },
  },
  plugins: [],
};
