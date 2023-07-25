import plugin from "tailwindcss/plugin";

/** @type {import('tailwindcss').Config} */
export const content = [
  "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  "./components/**/*.{js,ts,jsx,tsx,mdx}",
  "./app/**/*.{js,ts,jsx,tsx,mdx}",
];
export const theme = {
  screens: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    "2xl": "1536px",
  },
  extend: {
    backgroundImage: {
      "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
    },
    colors: {
      oscar: "#c2cf19",
    },
    spacing: {
      oscar: "200px",
    },
  },
};
export const plugins = [
  plugin(function ({ addComponents }) {
    addComponents({
      ".btn": {
        padding: ".5rem 1rem",
        borderRadius: ".25rem",
        fontWeight: "600",
      },
      ".btn-blue": {
        backgroundColor: "#3490dc",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#2779bd",
        },
      },
      ".btn-red": {
        backgroundColor: "#e3342f",
        color: "#fff",
        "&:hover": {
          backgroundColor: "#cc1f1a",
        },
      },
    });
  }),
];
