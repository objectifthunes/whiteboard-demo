import type { Metadata } from "next";
import { Source_Serif_4 } from "next/font/google";
import "@objectifthunes/whiteboard/style.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--docs-display-font",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "@objectifthunes/whiteboard — Component reference",
  description:
    "Live, source-paired reference for every export in @objectifthunes/whiteboard — the pan/zoom canvas + 50 themed React primitives.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={serif.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
