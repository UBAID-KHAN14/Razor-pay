/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      backgroundImage: {
        'sparking-symbol': "url('/assets/—Pngtree—sparkling black and white symbol_5574568.png')",
        'colorful': "url('/assets/colorful.png')",
      },
      fontFamily: {
        mullish: ["Mulish", "sens-serif"],
        lato: ["Lato, -apple - system, BlinkMacSystemFont", "Segoe UI", "Roboto, Helvetica, sans - serif", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"],
      },
      colors: {
        deepblue: "#02042a",
        lightblue: "#2b84ea",
        lightblue300: "#4b94ed",
        lightblue500: "#0b72e7",
        greenlight: "#61cea6",
        greytext: "#818597",
        lightgrey: "#e2e2e2",
        greyblue: "#344a6c",
        deepbluehead: "#162f56",
        grey2: "#525a76",
      },
    },
  },
  plugins: [],
}

