import type { Metadata } from "next";
import "@objectifthunes/whiteboard/style.css";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "@objectifthunes/whiteboard — Component reference",
  description: "Live documentation for the @objectifthunes/whiteboard React component library.",
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
