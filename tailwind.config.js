/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#2F8076",
        "primary light": "#52AEA3",
        "secondary": "#AEDDCB",
        "background": "#F7F8F3",
        "success": "#AADF87",
        "danger": "#E57373",
        "warning": "#FFB74D",
        "divider": "#D4D4D4",
        "gray": "#D4D4D4",
        categories: {
          "utilities": "#4ECDC4",
          "transportation": "#36A2EB",
          "food & dining": "#FF7043",
          "housing": "#FF6F61",
          "groceries": "#F7B801",
          "health": "#8BC34A",
          "entertainment": "#AB47BC",
          "personal care": "#FF8A65",
          "education": "#3F51B5",
          "debt pay": "#EF5350",
          "savings": "#66BB6A",
          "shopping": "#FFCA28",
          "travel": "#FFA726",
          "gifts": "#FFB74D",
          "misc.": "#607D8B"
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}