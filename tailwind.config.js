/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "british-green": "#004225",
        "gulf-blue": "#007fff",
        "gulf-orange": "#ff6600",
        "merc-silver": "#000d2be",
        "rb-blue": "#1e41ff",
        "rb-red": "#d90d29",
        "mclaren-orange": "#ff8700",
        "ferrari-red": "#dc0000",
        "pure-yellow": "#ffff00",
      },
    },
  },
  plugins: [],
};
