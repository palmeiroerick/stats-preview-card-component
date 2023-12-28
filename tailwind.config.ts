import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      lg: "1440px",
    },
    colors: {
      /* Primary */
      veryDarkBlue: "#090b1a",
      darkDesaturatedBlue: "#1b1938",
      SoftViolet: "#aa5cdb",

      /* Neutral */
      white: "#ffffff",
      slightlyTransparentWhiteMain: "#ffffffbf",
      slightlyTransparentWhiteStat: "#ffffff99",
    },
    fontFamily: {
      inter: "var(--inter)",
      lexendDeca: "var(--lexend-deca)",
    },
    fontWeight: {
      normal: "400",
      bold: "700",
    },
  },
  plugins: [],
};

export default config;
