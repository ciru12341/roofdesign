import type { Metadata } from "next";
import "./globals.css";
import Navbar from "../../components/nav";

export const metadata: Metadata = {
  title: "Roof Design",
  description: "Dach selbst Decken mit Unterstützung vom Meister",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
