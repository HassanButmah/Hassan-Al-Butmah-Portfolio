import type { Metadata, Viewport } from "next";
import { Manrope, Noto_Sans_Arabic, Syne } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const notoArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-arabic",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Hassan Al-Butmah — Software Developer",
  description:
    "الموقع الشخصي لـ Hassan Al-Butmah — خريج Computer Science من جامعة الخليل، يطور منتجات باستخدام React و Node و PHP و MySQL و Firebase والذكاء الاصطناعي.",
};

export const viewport: Viewport = {
  themeColor: "#F3F5F7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${manrope.variable} ${notoArabic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
