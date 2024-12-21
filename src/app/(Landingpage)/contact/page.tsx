"use client";

import { Box, Container, Typography } from "@mui/material";
import { Phone, Mail, LocationOn } from "@mui/icons-material";
import Feedbackform from "@/app/Feedbackform";
import BackgroundImage from "@/app/BackgroundImage";
import Footer from "@/app/Footer";
import Breadcrumb from "./Breadcrumb";
import ContactPage from "@/app/components/FormFeedback";

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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2848.8444388087937!2d26.1019833!3d44.4568359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff4461e878dd%3A0x4075fedadb22b72a!2sBucharest%2C%20Romania!5e0!3m2!1sen!2s!4v1635959562000!5m2!1sen!2s"
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
                  color: "#000000DE",
                  fontSize: "1.1rem",
                  "&:hover": { color: "#000000" },
                }}
                component="a"
                href="tel:+40728303133"
              >
                +40728303133
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Mail sx={{ color: "#00000099", fontSize: 24, ml: 5 }} />
              <Typography
                variant="body1"
                sx={{
                  color: "#000000DE",
                  fontSize: "1.1rem",
                  "&:hover": { color: "#000000" },
                }}
                component="a"
                href="mailto:contact@brandaffair.ro"
              >
                contact@brandaffair.ro
              </Typography>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <LocationOn sx={{ color: "#00000099", fontSize: 24, ml: 5 }} />
              <Typography
                variant="body1"
                sx={{
                  color: "#000000DE",
                  fontSize: "1.1rem",
                  maxWidth: "300px",
                }}
              >
                Amman St, no 35, 4th floor, ap 10, Bucharest
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>

      <Footer />
    </>
  );
}
