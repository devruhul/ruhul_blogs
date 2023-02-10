/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d88263",

          secondary: "#f4b2d3",

          accent: "#a4e2f2",

          neutral: "#2B303B",

          "base-100": "#2C2D3A",

          info: "#6FA1F6",

          success: "#0C6A3E",

          warning: "#E98307",

          error: "#F8533A",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
