"use client"

import { Box, Typography} from "@mui/material";
import React from "react";
import WorkingProcess from ".";
import WhyChooseUs from "./WhyChooseUs";
import FounderPage from "./FoundersPage";
import AboutusSection from "./AboutusSection";
import Process from "./Process";
import Breadcrumb from "./Breadcrumb";
import Footer from "@/app/Footer";

function About() {
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
            // backgroundPositionY: -115,
            backgroundImage: `url(/images/about-us-background.jpg)`,
            "&::before": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Black overlay with 50% opacity
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
              mb:2
            }}
          >
            About Us
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
         
        </Box>
      <AboutusSection/>
  
      <FounderPage/>
      <Process/>
      {/* <OurProcess/> */}
      <WorkingProcess />
      <WhyChooseUs/>
      <Footer/>
      
      </>
  );
}

export default About;
