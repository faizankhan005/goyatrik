import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TravelWidget from "@/components/TravelWidget";

export const metadata: Metadata = {
  title: "GoYatrik",
  description: "Travel Booking Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>

        <Navbar />
        
        {children}
        <TravelWidget />
        <Footer />

      </body>
    </html>
  );
}