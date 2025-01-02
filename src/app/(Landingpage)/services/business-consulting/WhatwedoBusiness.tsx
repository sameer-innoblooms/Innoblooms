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

export default function WhatWeDo() {
  const services = [
    {
      title: "Strategy Consulting",
      icon: Science,
      description:
        "Strategy consultants advise organisations on high-level decisions in an unbiased fashion, using deep industry knowledge to deliver the best results.",
    },
    {
      title: "HR Consulting",
      icon: Cloud,
      description:
        "A Human Resources Consultant initiates and leads HR programs and projects, conducts research to identify issues, provides advice and recommendations, formulates strategic plans, and assists in recruitment, training, and management of personnel.",
    },
    {
      title: "Information Technology Consulting",
      icon: Devices,
      description:
        "This can involve assessing elements of a company's computer systems like cybersecurity, software performance and data and analytics that can affect how a business might benefit from the technology they use.",
    },
  ];

  return (
    <Box
      sx={{
        // bgcolor: "#F5F9FF",
        bgcolor: "#e9f5f9",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
            // color: "#333",
            color: "#4A4A4A",
            fontSize: { xs: "2rem", md: "2.5rem" },
            fontWeight: 600,
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
            Consulting
          </Box>{" "}
          We Provide
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
                    // bgcolor: "black",
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
