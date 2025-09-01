import type { Metadata } from "next";
import { Fahkwang, Fredoka, Fustat, Gilda_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";

// highlight font
const fahkwang = Fahkwang({
  variable: "--font-highlight",
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// serif font
const gilda = Gilda_Display({
  variable: "--font-serif",
  weight: "400",
  subsets: ["latin"],
});

// body font
const fredoka = Fredoka({
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

// secondary font
const fustat = Fustat({
  variable: "--font-secondary",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pico Minds",
  description: "Tiny Minds, Big Impact!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="apple-mobile-web-app-title" content="Picominds" />
      </head>
      <body
        className={`${fahkwang.variable} ${gilda.variable} ${fustat.variable} ${fredoka.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
