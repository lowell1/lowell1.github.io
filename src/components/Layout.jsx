import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Navbar";
import Footer from "../components/Footer";
import Helmet from "react-helmet";
// import Container from "react-bootstrap/Container";

export default function Layout({ children }) {
  return (
    <>
      <Helmet>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css"
        />
      </Helmet>
      <div className="min-vh-100 d-flex flex-column">
        <Navbar />
        <div className="d-flex align-items-center flex-grow-1">
          {/* <Container>{children}</Container> */}
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
