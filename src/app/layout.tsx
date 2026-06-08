import type { Metadata } from "next";
import "@objectifthunes/whiteboard/style.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "@objectifthunes/whiteboard — Component Showcase",
  description: "Live demo of the @objectifthunes/whiteboard React component library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
