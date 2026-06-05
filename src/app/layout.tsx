import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import "./globals.css";



export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  
  return (
    <html lang="fa" dir="rtl">
      <body className="min-h-full flex flex-col">
        <Header/>
        <main>{children}</main>
        <Footer/>
      </body>
    </html>
  );

}
