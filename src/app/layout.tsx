import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";
import localFont from "next/font/local";


const font = localFont({
  src: [
    {
      path: "../../public/fonts/Estedad-Thin.woff2",
      weight: "300",
      style: "light",
    },
    {
      path: "../../public/fonts/Estedad-Regular.woff2",
      weight: "400",
      style: "regular",
    },
    {
      path: "../../public/fonts/Estedad-Medium.woff2",
      weight: "500",
      style: "medium",
    },
    {
      path: "../../public/fonts/Estedad-SemiBold.woff2",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../../public/fonts/Estedad-Bold.woff2",
      weight: "700",
      style: "bold",
    },
  ],
});


export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body className={`${font.className} h-full flex flex-col bg-[#FFFFFF]`}>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );

}

