import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Voicy",
  description: "Voicy - твое идеальное радио!",
  icons: {
    icon: "https://combative-moose-852.convex.site/getImage?storageId=kg2dvc04b9jbhkhzpm68kjbevn7dcdq1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className="calibri bg-gradient-to-r from-[#000] to-[#1A0220]">
        {children}
      </body>
    </html>
  );
}
