import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/header";
import Container from "@/components/container";

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
        <Header ></Header>
        <Container>
          {children}
        </Container>
      </body>
    </html>
  );
}
