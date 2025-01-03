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

export default function WhatWeDoAutomation() {
  const services = [
    {
      title: "Intelligent Process Automation",
      icon: Science,
      description:
        "Leverage AI to transform raw data into actionable insights. Our AI-powered data analysis tools help you make informed decisions, identify trends, and predict future outcomes, giving you a competitive edge.",
    },
    {
      title: "AI-Powered Data Analysis",
      icon: Cloud,
      description:
        "An AI Data Analyst initiates and leads data analysis projects, conducts research to identify trends and insights, provides advice and recommendations, formulates strategic data plans, and assists in data management, visualization, and reportin.",
    },
    {
      title: "Smart Customer Engagement",
      icon: Devices,
      description:
        "Enhance customer experience with AI-driven solutions that provide personalized interactions and support. From chatbots to recommendation systems, our AI tools ensure your customers receive timely and relevant assistance.",
    },
  ];
  return (
    <Box
      sx={{
        bgcolor: "#F5F9FF",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: "center",
            mb: 6,
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
            Comprehensive
          </Box>{" "}
          Ai Automation Solution
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
