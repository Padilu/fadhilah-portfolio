import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fadhilah Alkahfi | Portfolio & Resume",
  description:
    "Portfolio & Resume Fadhilah Alkahfi - Mahasiswa S1 Informatika Universitas Gunadarma dengan fokus pada Software Engineering & Creative Media.",
  keywords: [
    "Fadhilah Alkahfi",
    "Informatics",
    "Software Engineering",
    "Creative Media",
    "Gunadarma",
    "React",
    "Next.js",
    "Portfolio",
    "Padilu",
  ],
  authors: [{ name: "Fadhilah Alkahfi", url: "https://github.com/Padilu" }],
  creator: "Fadhilah Alkahfi",
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://github.com/Padilu",
    title: "Fadhilah Alkahfi | Portfolio & Resume",
    description:
      "Mahasiswa Informatika yang adaptif dengan fokus mendalam pada pengembangan perangkat lunak dan eksekusi media visual yang presisi.",
    siteName: "Fadhilah Alkahfi Portfolio",
  },
  icons: {
    icon: "/avatar.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
