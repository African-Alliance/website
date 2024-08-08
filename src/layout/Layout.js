import React from "react";
import { Outlet } from "react-router-dom";
// import Header from "../components/Header";
import Footer from "../components/Footer";
import '../styles/index.css';
import Navbar from "../components/Navbar";


export default function Layout() {
  return (
    <div>
      <Navbar />
      <main style={{paddingTop: '4rem'}}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

