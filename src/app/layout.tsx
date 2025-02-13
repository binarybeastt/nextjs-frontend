import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import { Html, Head, Main, NextScript } from "next/document";
// import type { Viewport } from 'next'

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
        {/* <Head> */}
        {/* Theme color for light and dark modes */}
        {/* <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        /> */}
        {/* <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="black"
        /> */}
      {/* </Head> */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white`}
      >
        {children}
      </body>
    </html>
  );
}

