import { title } from "process";

import "./globals.css";
import { Inter } from "next/font/google";

import { SliderInput } from "../../components/pushWeekIndicator";
import dynamic from "next/dynamic";

import RenderWeek from "../../components/whichWeek";
import weekData from "../../components/whichWeek";

import { CardsCarousel } from "../../components/pictureCars";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <CardsCarousel />
        <SeasonalCutoff />

        {/* <RenderWeek   /> */}
      </body>
    </html>
  );
}
