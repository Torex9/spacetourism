import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        customBlack:"#0B0D17",
        customPurple:"#D0D6F9",
        customWhite:"hsl(10°,50%, 50%)",
        customDarkBlue: "#1a1b26",
        customGrey: "#979797"
      },
      fontFamily: {
        Bellefair: "Bellefair",
        barlow: "Barlow Condensed",
        barlow_regular: "Barlow"
      },
      fontSize:{
        xs: '.75em', //12px
        sm: '.875em', //14px
        base: '1em', //16px
        lg: '1.125em', // 18px
        xl: '1.25em', // 20px
        '15p':"0.9375em",//15px
        '40p': "2.5em", //40px
        '2xl': '1.5em', //24px
        "3xl" : "1.75em", //28px
        '4xl': '1.875em', //30px
        "5xl" : "2em", //32px,
        '6xl': '2.25em', //36px
        '7xl': '3em', // 48px
        "8xl" : "3.5em", //56px
        '9xl': '3.75em', //60px
        '10xl': '4.5em', //72px
        '11xl': '5em', //80px
        '12xl': '6em', //96px
        "13xl" : "6.25em", //100px
        '14xl': '8em', //128px
        "15xl":"9.375em" //150px
      },
      letterSpacing: {
    wide_xl: '.18em',
    wide_lg:'.15em'
      }
    },
  },
  plugins: [],
};
export default config;
