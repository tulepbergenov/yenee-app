/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "app-fm-inter": ["'Inter', sans-serif", "system-ui"],
      },
      colors: {
        "app-clr-dark": "#141414",
        "app-clr-light": "#F3F3F3",
        "app-clr-primary": "#EF4444",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
};
