/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      padding: {
        xSmall: 10,
        small: 12,
        medium: 16,
        large: 20,
        xLarge: 24,
        xxLarge: 32,
      },
      shadows: {
        small: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 2,
        },
        medium: {
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 5.84,
          elevation: 5,
        },
      },
    },
    colors: {
      primary: "#312651",
      secondary: "#444262",
      tertiary: "#FF7754",

      gray: "#83829A",
      gray2: "#C1C0C8",

      white: "#F3F4F8",
      lightWhite: "#FAFAFC",
    },
    fontFamily: {
      reg: "DMRegular",
      med: "DMMedium",
      dark: "DMBold",
    },
  },
  plugins: [],
};
