"use client";
import React, { useState } from "react";
import { Box, Typography, Grid, styled, Button } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { ArrowForwardIos } from "@mui/icons-material";

const ServiceSubcategories = [
  {
    category: "BUSINESS CONSULTING",
    description:
      "Streamline operations, boost efficiency, and unlock growth with cutting-edge AI solutions tailored to your needs.",
  },
  {
    category: "AUTOMATION WITH AI",
    description:
      "Streamline operations, boost efficiency, and unlock growth with cutting-edge AI solutions tailored to your needs.",
  },
  {
    category: "RESOURCE AUGMENTATION",
    description:
      "Streamline operations, boost efficiency, and unlock growth with cutting-edge AI solutions tailored to your needs.",
  },
  {
    category: "SOFTWARE SERVICES",
    description:
      "Streamline operations, boost efficiency, and unlock growth with cutting-edge AI solutions tailored to your needs.",
  },
];

const SnakeButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  color: "red", // Set the text color
  "&:before": {
    content: '""',
    position: "absolute",
    top: "-2px",
    right: "-2px",
    bottom: "1em",
    left: "0",
    transformOrigin: "50% 50%",
    animation: "snake-3-before 0.2s ease forwards",
    zIndex: 1,
  },
  "&:after": {
    content: '""',
    position: "absolute",
    color: "red",
    top: "1em",
    right: "0",
    bottom: "-2px",
    left: "-2px",
    transformOrigin: "50% 50%",
    animation: "snake-3-after 0.2s ease forwards",
    zIndex: 0,
  },
  "&:hover:before": {
    animation: "snake-3-hover-before 0.2s ease forwards",
  },
  "&:hover:after": {
    animation: "snake-3-hover-after 0.2s ease forwards",
  },
}));

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Box
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{ position: "static" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
        <Typography
          variant="h6"
          component="span"
          sx={{
            pr: 5,
            pl: 3,
            py: 3,
            fontSize: { xs: "16px", sm: "18px" },
            cursor: "pointer",
            fontWeight: 500,
            position: "relative", // Required for the pseudo-element to work

            // Set the color based on the current pathname or hover state
            borderBottom: pathname.startsWith("/services")
              ? "3.5px solid #4294a5" // Show underline if not on /services pages
              : "none", // Hide the bottom underline when on /services pages
            color:
              pathname.startsWith("/services") || isOpen ? "#4294a5" : "none",

            display: "inline-block",
            alignItems: "center",

            // Use the ::after pseudo-element to create the underline effect
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: -1.5, // Position it at the bottom of the text
              left: 0,
              width: "100%",
              height: "3px", // Thickness of the underline
              backgroundColor: "#4294a5", // Color of the underline
              transform: isOpen ? "scaleX(0)" : "scaleX(0)",
              // transform: isOpen ? "scaleX(1)" : "scaleX(0)", // Persist underline when open
              transition: pathname.startsWith("/services")
                ? "none"
                : "transform 0.3s ease", // No transition if on services page
            },

            // Reveal the underline on hover (only if not on the "/services" page)
            "&:hover::after": pathname.startsWith("/services")
              ? "none" // Don't show underline on hover when on /services page
              : {
                  transform: pathname.startsWith("/services")
                    ? "none"
                    : "scaleX(1)", // Make the underline appear
                },
          }}
        >
          Service
          <ArrowForwardIos
            sx={{
              fontSize: "16px",
              position: "absolute",
              mx: 0.5,
              mt: 0.8,
              transition: "transform 0.3s ease",
              transform: isOpen ? "rotate(270deg)" : "rotate(90deg)",
            }}
          />
        </Typography>
      </Box>

      {isOpen && (
        <Box
          sx={{
            mt: 0.5,
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            width: "100vw",
            bgcolor: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            p: 4,
            zIndex: 1000,
          }}
        >
          <Grid container spacing={4} sx={{ maxWidth: "1400px" }}>
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  justifyContent: "center",
                }}
              >
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "#4A4A4A",
                    fontSize: "50px",
                    lineHeight: 1.2,
                    textAlign: "center",
                  }}
                >
                  OUR
                  <br />
                  SERVICES
                </Typography>
                <Box sx={{ pl: 12 }}>
                  <Image
                    src="/Setting-image.png?height=100&width=100"
                    alt="Our Services"
                    color="#4A4A4A"
                    width={100}
                    height={100}
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={4}>
                {ServiceSubcategories.map((serviceGroup) => (
                  <Grid item xs={12} sm={6} md={3} key={serviceGroup.category}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "#4A4A4A",
                          fontSize: "16px",
                          borderBottom: "2px solid #eee",
                          pb: 1,
                        }}
                      >
                        {serviceGroup.category}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          mb: 2,
                          fontSize: "0.9rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {serviceGroup.description}
                      </Typography>

                      <Link
                        href={`/services/${serviceGroup.category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        passHref
                      >
                        <Typography
                          sx={{
                            color: "#333",
                            fontSize: "0.9rem",
                            mt: "auto",
                            pt: 2,
                            textAlign: "center",
                            border: "1.5px solid #4294a5",
                            borderRadius: "6px",
                            p: 1,
                            transition: "all 0.2s ease",
                            "&:hover": {
                              bgcolor: "#e9f5f9",
                            },
                          }}
                        >
                          View more
                        </Typography>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ServicesDropdown;
