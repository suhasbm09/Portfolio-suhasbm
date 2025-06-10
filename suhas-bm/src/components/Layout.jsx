// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import ThemeBackground from "./ThemeBackground";

const Layout = () => {
  return (
    <div className="relative flex flex-col min-h-screen overflow-x-hidden text-white">
      {/* Global Background Layer */}
      <ThemeBackground />

      {/* Floating Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-10 top-25 flex-1 px-4 md:px-8 lg:px-16">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Layout;
