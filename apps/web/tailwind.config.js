/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fadeinout 25s infinite ease-in-out",
    },
    keyframes: {
        fadeinout: {
          "0%" : {backgroundImage: `url(${"/bg1.jpg"})`},
          "20%" : {backgroundImage: `url(${"/bg2.jpg"})`},
          "45%" : {backgroundImage: `url(${"/bg3.jpg"})`},
          "70%" : {backgroundImage: `url(${"/bg4.jpg"})`},
          "90%" : {backgroundImage: `url(${"/bg5.jpg"})`},
          "100%" : {backgroundImage: `url(${"/bg1.jpg"})`}
        },
    },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

