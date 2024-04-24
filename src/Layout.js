import { Outlet, Link } from "react-router-dom";
import Footer from "./components/Footer";
import React from "react";

const Layout = () => {
  return (
    <div>
      <nav>
        <h1>圖片搜尋網站</h1>
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
