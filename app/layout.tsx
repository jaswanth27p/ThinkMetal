import type { Metadata } from "next";
// import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/Nav";
import { Inter } from 'next/font/google'


// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "ThinkMetal",
  description: "ThinkMetal",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${inter.className} antialiased`}
      >
        <Nav/>
        {children}
      </body>
    </html>
  );
}
