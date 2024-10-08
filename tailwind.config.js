module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      fontWeight: {
        medium: 500,
        light: 300,
        bold: 700
      },
      colors: {  // Use "colors" instead of "color"
        white: "#ffffff",  // You can also use named color "white"
      },
    },
  },
  plugins: [],
}
