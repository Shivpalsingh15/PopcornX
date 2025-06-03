import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ReduxProvider from "src/redux/provider";
import Navbar from "src/components/movie/dashboard/navbar";
import SideBar from "src/components/movie/dashboard/sideBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Popcorn-X",
  description: "the movie website",
};
//bg-gradient-to-b from-blue-950  to-black
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
          <div className=" bg-[#0f1014]  h-screen overflow-hidden">

            <Navbar />
          <div className=" bg-[#0f1014] flex h-screen overflow-hidden">
            <div className="hidden md:block">
              
            <SideBar/>
            </div>
            <div className="flex-1 overflow-y-scroll">{children}</div>
          </div>
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
