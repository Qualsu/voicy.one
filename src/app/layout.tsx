import type { Metadata } from "next";
import "./globals.css";
import "./scroll.css";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

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
      <body className="calibri bg-linear-to-r from-[#000] to-[#1A0220]">
        <div className="flex flex-col min-h-screen">
          <Header />
    
          <div className="flex flex-col grow justify-center items-center w-full">
            <span className="hidden">
              Voicy — ваш незаменимый радио бот для Discord! Слушайте любимую музыку и наслаждайтесь атмосферой взаимодействия 24/7. Легкий доступ к разнообразным жанрам и хитам. Создайте идеальное звуковое сопровождение для ваших встреч и игр
            </span>
            {children}
          </div>

          <Footer />
        </div>
      </body>
    </html>
  );
}
