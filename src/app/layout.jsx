import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sp-code",
  description: "Информационный портал для молодых программистов",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={inter.className + ' w-full bg-gray-50 text-gray-800 text-base'}>
        <div className="__next">
          <div className="w-full">
            <Sidebar />
            <div className="w-full">
              <Header />
              <main className="w-full" id="main">
                <div className="w-full" id="main-content">
                  {children}
                </div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
