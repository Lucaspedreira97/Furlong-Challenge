import React from "react";
import { Routes, Route } from "react-router-dom";
import  Home  from "../pages/Home/Home";
import ContactPage from "../pages/Contact/ContactPage";
import HotelsPage from "../pages/Hotels/Hotels";



export default function Approuter() {
  return (
    <Routes>
        <Route exact path="/" element={<Home />} />
        <Route  path="/contact" element={<ContactPage />} />
        <Route  path="/hotels/:id" element={<HotelsPage />} />
    </Routes>
  );
};
