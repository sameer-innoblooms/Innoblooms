"use client";

import { Box, Container, Typography } from "@mui/material";
import { Phone, Mail, LocationOn } from "@mui/icons-material";
import Feedbackform from "@/app/Feedbackform";
import BackgroundImage from "@/app/BackgroundImage";
import Footer from "@/app/Footer";
import Breadcrumb from "./Breadcrumb";
import ContactPage from "@/app/components/FormFeedback";
import ServicesAccordion from "@/app/components/ServicesAccordian";

export default function ContactSection() {
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
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
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
          }}
        >
          Contact Us
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
      </Box>
      <ContactPage />
      {/* <Feedbackform/> */}
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          height: "700px",
          overflow: "hidden",
          maxWidth: "1600px",
          mb: 3,
        }}
      >
        <Box
          sx={{
            flex: 1,
            height: { xs: "300px", md: "600px" },
            borderRadius: "10px",
            my: 7,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed/v1/place?q=C-47(SH-120),+Sector+63+A,+Noida,+Chotpur,+Uttar+Pradesh+201307&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            width="109%"
            height="100%"
            style={{
              border: 0,
              borderRadius: "10px",
              filter: "invert(90%) hue-rotate(180deg)",
            }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            p: { xs: 4, md: 8 },
            backgroundColor: "#ffffff",
            overflow: "auto",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              mb: 6,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 600,
              color: "#4A4A4A",
              ml: 5,
            }}
          >
            Meet us
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Phone sx={{ color: "#00000099", fontSize: 24, ml: 5 }} />
              <Typography
                variant="body1"
                sx={{
                  // color: "#000000DE",
                  color: "#4A4A4A",
                  fontSize: "1.1rem",
                  "&:hover": { color: "#000000" },
                }}
                component="a"
                href="tel:+918979799833"
              >
                +91 7252833134
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Mail sx={{ color: "#00000099", fontSize: 24, ml: 5 }} />
              <Typography
                variant="body1"
                sx={{
                  // color: "#000000DE",
                  color: "#4A4A4A",
                  fontSize: "1.1rem",
                  "&:hover": { color: "#000000" },
                }}
                component="a"
                href="mailto:info@innoblooms.com"
              >
                info@innoblooms.com
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LocationOn sx={{ color: "#00000099", fontSize: 24, ml: 5 }} />
              <Typography
                variant="body1"
                sx={{
                  // color: "#000000DE",
                  color: "#4A4A4A",
                  fontSize: "1.1rem",
                  maxWidth: "300px",
                }}
              >
                C-47(SH-120), Sector 63 A, Noida, Chotpur, Uttar Pradesh 201307
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
      <ServicesAccordion />
      <Footer />
    </>
  );
}
