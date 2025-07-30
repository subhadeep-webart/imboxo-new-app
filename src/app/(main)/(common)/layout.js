import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";

export default function RootLayout({ children }) {
  return (
    <>
      <header className="header-section">
        <Header />
      </header>
      {children}
      <Footer />
    </>
  );
}
