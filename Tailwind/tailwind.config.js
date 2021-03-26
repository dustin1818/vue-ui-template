module.exports = {
  purge: [
    './src/**/*.html',
    './src/**/*.{vue,js,ts, jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      minHeight: {
        "60/40" : "60vh",
        "40/60" : "40vh",
        "110" : "110%",
        "navigation" : "15vh",
      },
      screens: {
        "max-xl": { max: "1440px" },
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "425px" },
        "max-xs": { max: "320px" },
        'max-h-md': {'raw': '(max-height: 768px)'},
      },
      fontFamily: {
        // callback-name: ["font", "font"],
      },
      colors: {
        'white-dark': '#F2F4E8',
        'white-light': '#FBFCF5'
      },
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
