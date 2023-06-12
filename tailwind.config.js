/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#f7b4e2",

          secondary: "#7cea9d",

          accent: "#f4ca3f",

          neutral: "#261B2D",

          "base-100": "#fff",

          info: "#8DE0F6",

          success: "#1AD57E",

          warning: "#FBA504",

          error: "#DC3254",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
