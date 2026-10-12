import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mahdi Jenhani - Portfolio",
  description: "Professional portfolio of Mahdi Jenhani, Software Developer at Linedata, showcasing skills, projects, and experience in software engineering and AI.",
  keywords: ["portfolio", "software developer", "Linedata", "EKIP", "AI", "LLM", "RAG", "Java"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
