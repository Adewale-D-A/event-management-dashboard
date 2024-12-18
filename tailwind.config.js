/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#8576FF",
          500: "#8576FF",
        },
        dark: {
          DEFAULT: "#484554",
          500: "#6A6676",
        },
      },
    },
    plugins: [],
  },
  safelist: [
    "primary", // Add more classes as needed
    // Patterns are also supported
    "primary-*", // Safelists all brand color utilities
  ],
};
