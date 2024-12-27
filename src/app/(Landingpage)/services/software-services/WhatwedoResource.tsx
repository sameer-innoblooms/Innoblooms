"use client";

import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { Cloud, Devices, Science } from "@mui/icons-material";

export default function WhatWeDoSoftware() {
  const services = [
    {
      title: "Custom Software Engineering",
      icon: Science,
      description:
        "Develop bespoke software solutions tailored to your business requirements. Our scalable and robust applications drive efficiency and growth.",
    },
    {
      title: "User-Centric Application Design",
      icon: Cloud,
      description:
        "Create applications that prioritize user experience. Our designs focus on usability and functionality to ensure a seamless user journey.",
    },
    {
      title: "Reliable Maintenance and Support",
      icon: Devices,
      description:
        "Ensure your software stays up-to-date and efficient with our dedicated maintenance and support. We provide timely updates and solutions to any issues.",
    },
  ];

  return (
    <Box
      sx={{
        // bgcolor: "#F5F9FF",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 600,
            color: "#4A4A4A",
          }}
        >
          <Box
            sx={{
              background: "linear-gradient(to right, #476884, #35A7C6)",
              // background: "linear-gradient(to right , #4294a5, #48c5a8);",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Innovative
          </Box>{" "}
          Software Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: "16px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                  overflow: "hidden",
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    color: "#4294A5",
                  },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    pt: 4,
                    pb: 2,
                    bgcolor: "#4d7990",
                    transition: "color 0.2s ease-in-out",
                    // "&:hover": {
                    //   color: "#4294A5",
                    //   "& svg": {
                    //     color: "#4294A5", // Change icon color on hover
                    //   },
                    // },
                  }}
                >
                  <service.icon
                    sx={{
                      fontSize: 64,
                      color: "white",
                      transition: "color 0.2s ease-in-out",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    py: 2,
                    px: 3,
                    bgcolor: "#4d7990",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: "white",
                      textAlign: "center",
                      fontWeight: 500,
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    pt: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: "#666",
                      textAlign: "center",
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
