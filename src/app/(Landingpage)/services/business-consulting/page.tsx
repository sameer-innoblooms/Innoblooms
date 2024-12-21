import React from "react";
import Container from "@mui/material/Container";
import { Box, Typography } from "@mui/material";
import Overview from "./Overview";
import ServicesAccordion from "@/app/components/ServicesAccordian";
import Footer from "@/app/Footer";
import WhatWeDo from "./WhatwedoBusiness";
import Breadcrumb from "@/app/components/Breadcrumb";

const page = () => {
  return (
    <div>
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
            backgroundImage: `url(/Business-consulting.jpg)`,
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
            Business Consulting
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
              zIndex: 9,
              width: '700px'
            }}
          >
            Overcome challenges, tap into opportunities and achieve your
            business potential. Our experienced consultants provide customized
            solutions that suit the needs at every level.
          </Typography> */}
        </Box>
        <Overview />
        <WhatWeDo />
        <ServicesAccordion />
        <Footer />
    </div>
  );
};

export default page;
