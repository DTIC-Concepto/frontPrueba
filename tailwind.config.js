/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./types/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
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
        inter: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        "noto-sans": "Noto Sans",
      },
      screens: {
        'xs': '475px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
};
