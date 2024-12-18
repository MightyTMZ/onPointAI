import type { Metadata } from "next";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./globals.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

{
  /*const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
}); */
}

export const metadata: Metadata = {
  title: "OnPoint AI",
  description:
    "Giving individuals and businesses their full potential by seamlessly integrating and optimizing AI within their workflows and operations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Navbar />
        {children}
        <Footer />

      </body>
    </html>
  );
}
