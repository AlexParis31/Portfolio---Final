/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
        Montez: ["Montez", ...defaultTheme.fontFamily.sans],
        SpaceMono: ["Space Mono", ...defaultTheme.fontFamily.sans],
        LilitaOne: ['Lilita One', ...defaultTheme.fontFamily.sans],
        Montaga: ['Montaga', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};


// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
//     // Or if using `src` directory:
//     "./src/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: 
//       {
//         fontFamily: {
//           'Montserrat': ['Montserrat', 'sans-serif']
//         },

//     },
//   },
//   plugins: [],
// }

