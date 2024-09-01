/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      //  "bgImage" : "url(/public/bgImage.png)"
      },
      colors: {
        "gray": "#80898F",
        "gray-dark": "#485966"
      }
    },
  },
  plugins: [],
};
