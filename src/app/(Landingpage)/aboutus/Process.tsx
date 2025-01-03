"use client";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box, styled } from "@mui/material";
import Image from "next/image";

const StyledSection = styled(Box)(({ }) => ({
  //   marginBottom: theme.spacing(12),
  position: "relative",
}));

export default function Process() {
  
  return (
    <Box
      sx={{
        borderRadius: "0 0 70px 70px",
        // boxShadow: "0 0 30px black",
        // bgcolor: "rgb(45 45 100)",
        // bgcolor: "#F5F9FF",
        bgcolor: "#e9f5f9",
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          py: 10,
          mt: 10,
          mb: 10,
        }}
      >
        <Typography
          variant="h3"
          component="h1"
          // color="initial"
          align="center"
          gutterBottom
          sx={{
            mb: 1,
            fontWeight: "bold",
            color: "#4A4A4A",
          }}
        >
          <Box
            component="span"
            sx={{
              background: "linear-gradient(to right, #476884, #35A7C6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Our
          </Box>{" "}
          Process
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            mb: 8,
            maxWidth: "600px",
            mx: "auto",
            color: "#4A4A4A",
          }}
        >
          Our process is a flexible framework that adapts, evolves and responds
          to your needs. It is the streamlined result of two decades of website
          design and marketing for hundreds of clients.
        </Typography>
        <Grid container spacing={4}>
          {/* Plan section */}
          <Grid item xs={12}>
            <StyledSection>
              <Box
                sx={{
                  fontSize: "5.584rem",
                  fontWeight: 700,
                  color: "#d1d5db",
                  position: "absolute",
                  top: -25,
                  left: -75,
                  zIndex: 9,
                  // bgcolor: "#fdfdfd",
                  // bgcolor: "#F5F9FF",
                  bgcolor: "#e9f5f9",
                }}
              >
                01
              </Box>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    borderLeft: "2px solid rgb(227, 227, 227)",
                    borderBottom: "2px solid rgb(227, 227, 227)",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", mb: 2, ml: 5, color: "#4A4A4A" }}
                  >
                    Plan
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      ml: 5,
                      color: "#4A4A4A",
                    }}
                  >
                    We set priorities, organize content, and understand the
                    buyer’s journey that your audience takes as they navigate
                    your website. At the end of strategy, you will have a
                    Blueprint for your website project, a comprehensive
                    strategic plan for your website design, content, and
                    functionality.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ position: "relative", height: 300 }}>
                    <Image
                      src="/process-01.svg"
                      alt="Planning illustration"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </StyledSection>
          </Grid>
          {/* Design section */}
          <Grid item xs={12}>
            <StyledSection>
              <Box
                sx={{
                  fontSize: "5.584rem",
                  fontWeight: 700,
                  color: "#d1d5db",

                  position: "absolute",
                  top: 100,
                  right: 550,
                  zIndex: 9,
                  // bgcolor: "#fdfdfd",
                  // bgcolor: "#F5F9FF",
                  bgcolor: "#e9f5f9",
                  // bgcolor:'grey'
                }}
              >
                02
              </Box>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    borderRight: "2px solid rgb(227, 227, 227)",
                    borderBottom: "2px solid rgb(227, 227, 227)",
                  }}
                >
                  <Box sx={{ position: "relative", height: 300, mb: 10 }}>
                    <Image
                      src="/process-02.svg"
                      alt="Planning illustration"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Grid>
                <Grid item xs={12} md={6} sx={{ mt: 11 }}>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", mb: 2, ml: 5, color: "#4A4A4A" }}
                  >
                    Design
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      ml: 5,
                      color: "#4A4A4A",
                    }}
                  >
                    Once the Blueprint is approved, we create wireframes and a
                    design comp for your review. This process involves various
                    reviews, approvals, and close communication between you and
                    our creative team. We begin with the Homepage to set style,
                    image and branding standards, then move toward interior
                    layouts.
                  </Typography>
                </Grid>
              </Grid>
            </StyledSection>
          </Grid>
          {/* Develop Section */}
          <Grid item xs={12}>
            <StyledSection>
              <Box
                sx={{
                  fontSize: "5.584rem",
                  fontWeight: 700,
                  color: "#d1d5db",
                  position: "absolute",
                  top: 100,
                  left: -75,
                  zIndex: 9,
                  // bgcolor: "#fdfdfd",
                  // bgcolor: "#F5F9FF",
                  bgcolor: "#e9f5f9",
                }}
              >
                03
              </Box>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    borderLeft: "2px solid rgb(227, 227, 227)",
                    borderBottom: "2px solid rgb(227, 227, 227)",
                    height: "450px",
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{
                      fontWeight: "bold",
                      mb: 2,
                      ml: 5,
                      pt: 11,
                      color: "#4A4A4A",
                    }}
                  >
                    Develop
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      ml: 5,
                      color: "#4A4A4A",
                    }}
                  >
                    With the blueprint & design comps as our guide, the
                    development team begins to create your website with the
                    state of the earth tools. Our entire team works to add
                    content, final design elements, review, & test your website
                    for quality.
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box sx={{ position: "relative", height: 300 }}>
                    <Image
                      src="/process-03.svg"
                      alt="Planning illustration"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Grid>
              </Grid>
            </StyledSection>
          </Grid>
          {/* Deploy Section */}
          <Grid item xs={12}>
            <StyledSection>
              <Box
                sx={{
                  fontSize: "5.584rem",
                  fontWeight: 700,
                  color: "#d1d5db",

                  position: "absolute",
                  top: 100,
                  right: 550,
                  zIndex: 9,
                  // bgcolor: "#fdfdfd",
                  // bgcolor: "#F5F9FF",
                  bgcolor: "#e9f5f9",

                  // bgcolor:'grey'
                }}
              >
                04
              </Box>
              <Grid container spacing={4}>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    borderRight: "2px solid rgb(227, 227, 227)",
                    // borderBottom: "2px solid #f5f5f5",
                  }}
                >
                  <Box sx={{ position: "relative", height: 300, mb: 10 }}>
                    <Image
                      src="/process-04.svg"
                      alt="Planning illustration"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={6}
                  sx={{
                    mt: 11,
                  }}
                >
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", mb: 2, ml: 5, color: "#4A4A4A" }}
                  >
                    Deploy
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      ml: 5,
                      color: "#4A4A4A",
                    }}
                  >
                    After testing and review, we present your new website. Upon
                    your approval, your website will be launched, promoted and
                    optimized for search engines such as Google & Bing.
                  </Typography>
                </Grid>
              </Grid>
            </StyledSection>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
