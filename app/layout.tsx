import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Navbar from "@/components/layout/navbar";

const font = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Superdao",
  description: "Get start DAO",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
