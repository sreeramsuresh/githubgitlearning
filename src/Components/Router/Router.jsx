import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Portfolio from "../Pages/Portfolio";
import Header from "../Pages/Header";

function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
