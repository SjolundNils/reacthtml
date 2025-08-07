import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footer";

const FooterWrapper = () => {
  const location = useLocation();
  return <Footer location={location} />;
};

export default FooterWrapper;