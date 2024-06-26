import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/starbackground";
import Navbar from "@/components/main/navbar";
import Footer from "@/components/main/footer";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Deniz's Portfolio",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll over-x-hidden`}
      >
        <StarsCanvas></StarsCanvas>
        <Navbar></Navbar>
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
