import Footer from "@/components/layout/Footer/Footer";
import Header from "@/components/layout/Header/Header";



export default async function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
      <div className="flex flex-col w-full">
        <header>
          <Header/>
        </header>
          <main>
            {children}
          </main>
          <Footer/>
      </div>
  );
}
