import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RootLayout = () => {
  return (
    <div className="relative font-mono flex flex-col">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default RootLayout;
