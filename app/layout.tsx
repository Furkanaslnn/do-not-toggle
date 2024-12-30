import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Do Not Toogle",
  description: "Think 2 times. :D",
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
