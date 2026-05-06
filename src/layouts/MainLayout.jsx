import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import ScrollToTop from "../components/ScrollToTop.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-dvh bg-white">
      <ScrollToTop />
      <Navbar />
      <main className="pt-16">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

