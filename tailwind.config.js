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
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "rick-title": "url('/herorick.png')",
      },
      gridTemplateColumns: {
        "auto-fill-100": "repeat(auto-fill, minmax(150px, 180px))",
        "auto-fit-100": "repeat(auto-fit, minmax(100px, 1fr))",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["lofi", "black"],
  },
};
