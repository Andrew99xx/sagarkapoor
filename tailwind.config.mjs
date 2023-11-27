/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          1: "#12F7D6",
          2: "#98FAEC",
        },
        grey: "#98FAEC",
        html: "#E54F26",
        css: "#0C73B8",
        js: "#E7A020",
        react: "#28A9E0",
        bg: {
          1: "#292F36",
          2: "#1A1E23",
        },
      },
    },
  },
  plugins: [],
};
