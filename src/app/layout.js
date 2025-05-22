import { Geist, Geist_Mono } from "next/font/google";

import Header from "@/components/Header";

import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Cogna test",
  description: "Cogna teste - Frontend",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >    
        <div className="min-h-screen font-[family-name:var(--font-geist-sans)] text-white">
          <Header />
          <main>
            {children}
            </main>
          <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
              Made with tons of code
          </footer>
        </div>
      </body>
    </html>
  );
}
