import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import Navbar from "./components/Navbar";
import ClientLayout from "./components/ClientLayout";
import Background from "./components/Background";
import ScrollMeter from "./components/ScrollMeter";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: "Natik Aggarwal - Software Developer",
  description: "Personal portfolio of Natik Aggarwal, Software Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <Background />
        <ScrollMeter />
        <ClientLayout>
          <Navbar />
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}