import type { Metadata } from "next";
import { Exo } from "next/font/google";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const exoFont = Exo({
  variable: "--font-exo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Swapped! Memory Game",
  description: "Test your sharpness and mind abilities in a cup flipping memory game. \
    But there's a twist: match wrong and you'll notice the cups may be moving around on you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${exoFont.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
