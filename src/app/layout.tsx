import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import clsx from "clsx";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Frey",
  description: "Personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(robotoFlex.className, "antialiased h-screen")}>
        {children}
      </body>
    </html>
  );
}
