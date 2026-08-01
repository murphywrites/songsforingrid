import type { Metadata } from "next";
import { Uncial_Antiqua, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const uncial = Uncial_Antiqua({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-uncial",
  display: "swap",
});

const garamond = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
  variable: "--font-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Songs for Ingrid | Dr. Murphy's Band",
  description:
    "Songs for Ingrid — Irish folk from Chicago by Dr. Murphy's Band. Stream the album, get the CD, and support Ingrid's special needs trust.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${uncial.variable} ${garamond.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body">{children}</body>
    </html>
  );
}
