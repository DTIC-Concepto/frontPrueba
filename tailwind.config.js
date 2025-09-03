/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gainsboro: "#dee1e6",
        gray: {
          100: "#fafafb",
          200: "#1e2128",
          300: "#171a1f",
          400: "rgba(23, 26, 31, 0.4)",
          500: "rgba(0, 0, 0, 0)",
        },
        dimgray: "#565d6d",
        whitesmoke: "#f3f4f6",
        cornflowerblue: "#0f74c7",
        brown: "#c53443",
      },
      fontFamily: {
        inter: "Inter",
        "noto-sans": "Noto Sans",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
