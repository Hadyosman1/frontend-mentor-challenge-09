/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Kumbh Sans", "sans-serif"],
    },
    fontWeight: {
      thin: '400',
      bold: '700'
    },
    extend: {
      colors: {
        // ### Primary

        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",

        // ### Neutral

        VeryDarkBlue: "hsl(220, 13%, 13%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        GrayishBlue: "hsl(220, 14%, 75%)",
        LightGrayishBlue: "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)",
        Black: "rgba(0 ,0 ,0 ,.75)",
      },
    },
  },
  plugins: [],
};
