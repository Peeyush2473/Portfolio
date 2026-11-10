import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio Website for Peeyush",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">

        <div className="flex-1 grid grid-cols-1 md:grid-cols-[132px_minmax(0,1fr)_132px]">
          {/* Left decorative panel*/}
          <aside className="hidden md:block"></aside>

          <main className="min-w-0 w-full">
            <Header />
            {children}
          </main>

          {/* Right decorative panel*/}
          <aside className="hidden md:block"></aside>
        </div>

        <Footer />
      </body>
    </html>
  );
}
