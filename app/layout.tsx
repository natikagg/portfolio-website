import type { Metadata } from "next";
import { Inter } from 'next/font/google';
import "./globals.css";
import BottomNav from "./components/BottomNav";
import ClientLayout from "./components/ClientLayout";
import Background from "./components/Background";

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
        <ClientLayout>
          {children}
          <BottomNav />
        </ClientLayout>
      </body>
    </html>
  );
}