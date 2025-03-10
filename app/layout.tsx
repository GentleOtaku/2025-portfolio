import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "sonner";
import Footer from "@/components/footer";
import { roboto, silkscreen, ptmono, montserrat } from "@/lib/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Colin Yang | Portfolio",
  description: "Computer Science student @ UC Irvine",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body
        className={`bg-gray-50 text-gray-960 relative pt-28 sm:pt-36  ${silkscreen} ${roboto} ${ptmono} ${montserrat}`}
      >
        <div
          className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem]
         h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"
        ></div>
        <div
          className="bg-[#dbd7fb] absolute top-[-1rem] -z-10  left-[-35rem]
         h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"
        ></div>
        <div className="montserrat">
          <ActiveSectionContextProvider>
            <Toaster />
            <Header />
            {children}
            <Footer />
          </ActiveSectionContextProvider>
        </div>
      </body>
    </html>
  );
}
