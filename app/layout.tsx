import "@/style/globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { inter, lexendDeca } from "./fonts";

export const metadata: Metadata = {
  title: "Stats Preview Card Component",
};

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="en" className={`${inter.variable} ${lexendDeca.variable}`}>
      <body className="flex h-screen w-screen items-center justify-center bg-veryDarkBlue">
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
