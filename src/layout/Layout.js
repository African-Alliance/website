import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/index.css';
import Navbar from "../components/Navbar";
import Header from "../components/Header";


export default function Layout() {
  return (
    <div>
      <Navbar />
      {/* <Header /> */}
      <main style={{paddingTop: '4rem'}}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

