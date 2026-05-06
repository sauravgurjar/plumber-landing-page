/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF5FF",
          100: "#DDEBFF",
          200: "#B6D2FF",
          300: "#8CB7FF",
          400: "#4F8FFF",
          500: "#1F6BFF",
          600: "#1156E6",
          700: "#0B3B8C",
          800: "#082E6E",
          900: "#061F4A"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(2, 6, 23, 0.08)"
      }
    }
  },
  plugins: []
};

