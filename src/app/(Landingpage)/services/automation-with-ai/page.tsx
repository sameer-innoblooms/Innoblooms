import { Box, Typography } from "@mui/material";
import React from "react";
import Overview from "./Overview";
import ServicesAccordion from "@/app/components/ServicesAccordian";
import Footer from "@/app/Footer";
import WhatWeDoAutomation from "./Whatwedo";
import Breadcrumb from "@/app/components/Breadcrumb";

const page = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          height: { xs: "50vh", sm: "60vh", md: "70vh" },
          width: "100%",
          position: "relative",
          overflow: "hidden", // Ensure no overflow from the video
          maxHeight: "1500px",
        }}
      >
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover", // Cover the entire area
            zIndex: 0, // Behind other content
          }}
        >
          <source src="/images/software-service-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
            zIndex: 1, // Ensure the overlay is above the video
          }}
        />

        {/* Content */}
        <Typography
          variant="h1"
          color="white"
          align="center"
          sx={{
            zIndex: 2, // Ensure text is above the overlay
            md:2
          }}
        >
          Automation With Ai
        </Typography>
        <Box sx={{
            zIndex: 9,
            width: '700px',
            display: 'flex',
            justifyContent: 'center',
            justifyItems: 'center',
            alignItems: 'center',
            flexDirection: 'column'
          }}>
          <Breadcrumb/>

          </Box>
        {/* <Typography
          variant="body1"
          color="white"
          sx={{
            zIndex: 2, // Ensure text is above the overlay
            width: "700px",
            textAlign: "center", // Center align the text
          }}
        >
          Overcome challenges, tap into opportunities and achieve your business
          potential. Our experienced consultants provide customized solutions
          that suit the needs at every level.
        </Typography> */}
      </Box>
      <Overview/>
      <WhatWeDoAutomation/>
      <ServicesAccordion/>
      <Footer/>


    </>
  );
};

export default page;
