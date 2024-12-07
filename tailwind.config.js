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
        "primary-light": "#52AEA3",
        "secondary": "#AEDDCB",
        "background": "#F7F8F3",
        "success": "#AADF87",
        "danger": "#E57373",
        "warning": "#FFB74D",
        gray: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
        categories: {
          "utilities": "#4ECDC4",
          "transportation": "#36A2EB",
          "foodAndDining": "#FF7043",
          "housing": "#FF6F61",
          "groceries": "#F7B801",
          "health": "#8BC34A",
          "entertainment": "#AB47BC",
          "personal care": "#FF8A65",
          "education": "#3F51B5",
          "debtPay": "#EF5350",
          "savings": "#66BB6A",
          "shopping": "#FFCA28",
          "travel": "#FFA726",
          "gifts": "#FFB74D",
          "misc": "#607D8B"
        }
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}