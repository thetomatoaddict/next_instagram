import "./globals.css";
import { Open_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import AuthContext from "@/context/AuthContext";
import SWRContext from "@/context/SWRContext";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Dogstagram",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={openSans.className}>
      <body className="w-full overflow-auto bg-neutral-100">
        <AuthContext>
          <header className="sticky top-0 bg-white z-10 shadow-md mx-auto">
            <div className="max-w-screen-lg mx-auto"><Navbar /></div>
          </header>
          <main>
            <SWRContext>{children}</SWRContext>
          </main>
        </AuthContext>
        <div id='portal'/>
      </body>
    </html>
  );
}
