import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function IndexPage({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
