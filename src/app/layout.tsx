import type { Metadata } from "next";
import "@objectifthunes/whiteboard/style.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
