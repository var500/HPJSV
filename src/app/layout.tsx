import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Common/Footer";
import { StickyNavbar } from "@/components/Common/Navbar";
import { Toaster } from "@/components/ui/toaster"
import ScrollToTopButton from "@/components/Common/ScrollToTopButton";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HPJSV",
  description: "HP Jal Shakti Vibhag",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StickyNavbar />

        {children}
        <ScrollToTopButton />
        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
