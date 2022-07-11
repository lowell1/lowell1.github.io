import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import Helmet from "react-helmet";

export default function IndexPage({ children }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
        />
      </Helmet>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
