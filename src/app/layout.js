import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="container mx-auto">
          <nav className="w-full sticky bg-white/300 backdrop-blur-md p-2 rounded-md top-0 right-0">
            <ul className="flex gap-2 ">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/profile"}>Profile</Link>
              </li>
            </ul>
            <hr />
          </nav>

          {children}
        </div>
      </body>
    </html>
  );
}
