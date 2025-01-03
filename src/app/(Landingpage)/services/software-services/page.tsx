"use client";
import { Box, Typography } from "@mui/material";
import React from "react";
import Overview from "./Overview";
import WhatWeDoSoftware from "./WhatwedoResource";
import ServicesAccordion from "@/app/components/ServicesAccordian";
import Footer from "@/app/Footer";
import Breadcrumb from "@/app/components/Breadcrumb";
import Process from "../../aboutus/Process";

const page = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          justifyItems: "center",
          alignItems: "center",
          flexDirection: "column",
          height: { xs: "50vh", sm: "60vh", md: "70vh" },
          width: "100%",
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          transition: "background-size 0.5s ease",
          position: "relative",
          objectFit: "cover",
          maxHeight: "1500px",
          backgroundImage: `url(/images/software-service-video.gif)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            // backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))", // Gradient overlay

            zIndex: 1, // Ensure the overlay is above the background image
          },
        }}
      >
        <Typography
          variant="h1"
          color="white"
          align="center"
          sx={{
            zIndex: 9,
            mb: 2,
            fontSize: {xs: "2.5rem", sm: "3rem", md: "6rem"},
          }}
        >
          Software Services
          </Typography>
        <Box
          sx={{
            zIndex: 9,
            width: "700px",
            display: "flex",
            justifyContent: "center",
            justifyItems: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Breadcrumb />
        </Box>
        {/* <Typography
    variant="body1"
    color="white"
    sx={{
      zIndex: 2, // Ensure text is above the overlay
      width: '700px',
      textAlign: 'center', // Center align the text
    }}
  >
   Innoblooms Info Services Pvt Ltd: Bringing Your Ideas To Life Finest Software Services with Innovative Solutions Designed to Optimize
  </Typography> */}
      </Box>
      <Overview />
      {/* <OurProcess /> */}
      <Process />
      <WhatWeDoSoftware />
      <ServicesAccordion />
      <Footer />
    </>
  );
};

export default page;
