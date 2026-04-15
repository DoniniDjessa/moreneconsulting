import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { LanguageProvider } from "../context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M Consulting | Digital Growth & Brand Strategy",
  description: "M Consulting helps businesses stand out and scale up with expert digital marketing, brand strategy, and revenue-driven solutions. Founded by former Google Ads specialists.",
  keywords: ["Digital Marketing", "SEO", "Google Ads", "Brand Strategy", "M Consulting", "Growth Engine", "UI/UX Design", "Social Media Management"],
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  alternates: {
    canonical: "https://moreneconsulting.com",
  },
  openGraph: {
    title: "M Consulting | Digital Growth & Brand Strategy",
    description: "Build a sustainable revenue engine with M Consulting.",
    images: ["/logo.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "M Consulting | Digital Growth & Brand Strategy",
    description: "Build a sustainable revenue engine with M Consulting.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <LanguageProvider>
          <div className="global-grid-mask"></div>
          <Navbar />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
