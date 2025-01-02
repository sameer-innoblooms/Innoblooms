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

export default function WhatWeDoResource() {
  const services = [
    {
      title: "Skilled Talent Integration",
      icon: Science,
      description:
        "Augment your team with highly skilled professionals who seamlessly integrate into your existing workflow. Our experts bring specialized knowledge and experience to enhance your project capabilities and accelerate your business outcomes.",
    },
    {
      title: "Flexible Staffing Solutions",
      icon: Cloud,
      description:
        " Adapt to changing business needs with our flexible staffing solutions. Whether you require short-term support or long-term partnerships, we provide the right resources to meet your project demands, ensuring you always have the right talent at the right time.",
    },
    {
      title: "Efficient Resource Management",
      icon: Devices,
      description:
        "Optimize your budget with our cost-effective resource management strategies. By leveraging our resource augmentation services, you can reduce overhead costs, minimize hiring risks, and achieve greater efficiency in your operations..",
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
          Resource Augmentation Solution
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
