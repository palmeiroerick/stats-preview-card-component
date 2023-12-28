import type { NextFontWithVariable } from "next/dist/compiled/@next/font";
import { Inter, Lexend_Deca } from "next/font/google";

export const inter: NextFontWithVariable = Inter({
  weight: ["400", "700"],
  style: "normal",
  subsets: ["latin"],
  variable: "--inter",
});

export const lexendDeca: NextFontWithVariable = Lexend_Deca({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--lexend-deca",
});
