import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import Header from "./_components/layout/Header/index";
import Footer from "./_components/layout/Footer";
import { almarai, helveticaNeue, montserrat } from "./font";

export const metadata: Metadata = {
  title: "Asian Travels & Manpower",
  description:
    "Reliable travel and manpower solutions for a seamless experience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${helveticaNeue.variable} ${almarai.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster richColors position="top-center" />
      </body>
    </html>
  );
}
