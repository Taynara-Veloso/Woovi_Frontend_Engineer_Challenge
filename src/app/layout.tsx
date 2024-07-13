import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import Image from "next/image";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Woovi Challenge",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={nunito.className}>
        <div className="flex justify-center my-9 ">
          <Image
            src="/LogoWoovi.svg"
            alt="logo da empresa woovi"
            width={123}
            height={36}
          />
        </div>
        {children}
      </body>
    </html>
  );
}
