"use client";

import { Box, Container, Typography } from "@mui/material";

export default function AboutusSection() {
  return (
    <Box
      sx={{
        // bgcolor: "#F7F7F7",
        // background:"url('https://www.transparenttextures.com/patterns/diagonal-waves.png')",

        // bgcolor: 'grey',
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            textAlign: "center",
            maxWidth: "1200px",
            mx: "auto",
          }}
        >
          {/* <Typography
            variant="overline"
            sx={{
              color: "text.secondary",
              fontWeight: 500,
              letterSpacing: 1.5,
              mb: 2,
              display: "block",
            }}
          >
            ABOUT US
          </Typography> */}

          <Typography
            variant="h2"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "2.75rem" },
              lineHeight: 1.2,
            }}
          >
            Innoblooms Info Services
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: { xs: "1rem", md: "1.125rem" },
              lineHeight: 1.7,
              maxWidth: "1200px",
              mx: "auto",
            }}
          >
            At Innoblooms Info Services, we are committed to delivering
            cutting-edge IT solutions and services tailored to the dynamic needs
            of businesses across industries. Based on years of expertise of our
            resources, we specialize in crafting innovative and efficient
            solutions, with a strong focus on AI, Cybersecurity, Cloud
            Computing, CRM, and ERP. Our team comprises highly skilled
            professionals with deep expertise in disruptive technologies,
            empowering us to stay ahead in the ever-evolving digital landscape.
            From implementing advanced IT systems to creating bespoke solutions,
            we help businesses streamline their operations, enhance customer
            engagement, and achieve their strategic goals.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
