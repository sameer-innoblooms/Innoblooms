"use client";
import React from "react";
import Home from "../Home/index";
import { Box } from "@mui/material";
import Services from "../services";
import ClientsSay from "../ClientsSay";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Headers from "../Headers";
import OurPartners from "../OurPartners";
import Footer from "../Footer";
import Feedbackform from "../Feedbackform";
import BackgroundImage from "../BackgroundImage";
import ServicesAccordion from "../components/ServicesAccordian";
import Partners from "../components/Ourpartners";
import ContactPage from "../components/FormFeedback";
function Dashboard() {
  return (
    <Box>
      <Home />
      <Services />
      {/* <BackgroundImage /> */}
      <ClientsSay />
      {/* <OurPartners /> */}

      <Partners />
      {/* <Feedbackform /> */}
      <ContactPage />
      <ServicesAccordion />
      <Footer />
    </Box>
  );
}

export default Dashboard;
