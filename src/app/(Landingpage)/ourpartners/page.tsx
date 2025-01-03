"use client";

import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Avatar,
  AvatarGroup,
  styled,
  useMediaQuery,
} from "@mui/material";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";
import Image from "next/image";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Breadcrumb from "./Breadcrumb";
import Footer from "@/app/Footer";
import ServicesAccordion from "@/app/components/ServicesAccordian";
import Link from "next/link";

const theme = createTheme({
  palette: {
    primary: {
      main: "#000000",
    },
    background: {
      default: "#ffffff",
    },
  },
});

const StyledImage = styled(Image)(({}) => ({
  maxWidth: "100%",
  height: "auto",
  objectFit: "contain",
  transition: "opacity 0.3s ease-in-out",
  "&:hover": {
    opacity: 0.8,
  },
}));

export default function PartnersPage() {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  const partners = [
    { logo: "/ourpartners/amazon-logo.png", name: "Amazon", href: "https://www.amazon.in/" },
    { logo: "/ourpartners/microsoft-logo.png", name: "Microsoft",  href: "https://www.microsoft.com/" },
    { logo: "/ourpartners/Adobe_Corporate_Logo.png", name: "Adobe", href: "https://www.adobe.com/" },
    { logo: "/ourpartners/apex-legends-logo.png", name: "Apex" , href: "https://www.apexlegends.com/" },
    { logo: "/ourpartners/Digiflip_logo.png", name: "Digiflip", href: "https://www.digiflip.com/" },
    { logo: "/ourpartners/CARS24_Official_New_Logo.png", name: "Cars24", href: "https://www.cars24.com/" },
    { logo: "/ourpartners/CloudConnect_Logo.png", name: "CloudConnect", href: "https://www.cloudconnect.in/" },
    { logo: "/ourpartners/Kentico.png", name: "Kentico", href: "https://www.kentico.com/" },
    { logo: "/ourpartners/amazon-logo.png", name: "Amazon", href: "https://www.amazon.in/" },
    { logo: "/ourpartners/microsoft-logo.png", name: "Microsoft",  href: "https://www.microsoft.com/" },
    { logo: "/ourpartners/Adobe_Corporate_Logo.png", name: "Adobe", href: "https://www.adobe.com/" },
    { logo: "/ourpartners/apex-legends-logo.png", name: "Apex" , href: "https://www.apexlegends.com/" },
    { logo: "/ourpartners/Digiflip_logo.png", name: "Digiflip", href: "https://www.digiflip.com/" },
    { logo: "/ourpartners/CARS24_Official_New_Logo.png", name: "Cars24", href: "https://www.cars24.com/" },
    { logo: "/ourpartners/CloudConnect_Logo.png", name: "CloudConnect", href: "https://www.cloudconnect.in/" },
    { logo: "/ourpartners/Kentico.png", name: "Kentico", href: "https://www.kentico.com/" },
    { logo: "/ourpartners/amazon-logo.png", name: "Amazon", href: "https://www.amazon.in/" },
    { logo: "/ourpartners/microsoft-logo.png", name: "Microsoft",  href: "https://www.microsoft.com/" },
    { logo: "/ourpartners/Adobe_Corporate_Logo.png", name: "Adobe", href: "https://www.adobe.com/" },
    { logo: "/ourpartners/apex-legends-logo.png", name: "Apex" , href: "https://www.apexlegends.com/" },
    { logo: "/ourpartners/Digiflip_logo.png", name: "Digiflip", href: "https://www.digiflip.com/" },
    { logo: "/ourpartners/CARS24_Official_New_Logo.png", name: "Cars24", href: "https://www.cars24.com/" },
    { logo: "/ourpartners/CloudConnect_Logo.png", name: "CloudConnect", href: "https://www.cloudconnect.in/" },
    { logo: "/ourpartners/Kentico.png", name: "Kentico", href: "https://www.kentico.com/" },


    // Add all other partners similarly
  ];

  const teamAvatars = [
    {
      avatar: "/ourpartners/avatar1.jpg?height=48&width=48&text=👤1",
      name: "Team Member 1",
    },
    {
      avatar: "/ourpartners/avatar2.jpg?height=48&width=48&text=👤2",
      name: "Team Member 2",
    },
    {
      avatar: "/ourpartners/avatar3.jpg?height=48&width=48&text=👤3",
      name: "Team Member 3",
    },
    {
      avatar: "/ourpartners/avatar4.jpg?height=48&width=48&text=👤4",
      name: "Team Member 4",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: isMobile ? 2 : isTablet ? 3 : 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    cssEase: "linear",
    rows: 4,
    slidesPerRow: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 3,
          rows: 4,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 2,
          rows: 4,
        },
      },
    ],
  };

  return (
    <ThemeProvider theme={theme}>
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
          backgroundPositionY: -115,
          backgroundImage: `url(/images/resource-augmentation.jpg)`,
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0))",
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
          Our Partners
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
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Box
          sx={{
            mb: 3,
            display: "flex",
            px: 7,
            flexDirection: "column",
            // justifyContent: 'center',
            alignItems: "left",
          }}
        >
          {/* <Typography variant="overline" color="text.secondary" gutterBottom>
            Partners & Team
          </Typography> */}
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            fontWeight="bold"
            sx={{
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
              Collaborative Excellence:
            </Box>{" "}
            Building Bridges, Driving Success
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            align="left"
            sx={{ maxWidth: "md" }}
          >
            Empowering partnerships and fostering teamwork to achieve
            unparalleled excellence. Our dedicated approach and shared vision
            create a synergy that fuels innovation and drives sustainable
            success for all.
          </Typography>
        </Box>

        <Box
          sx={{
            mb: 4,
            ".slick-slide": {
              padding: "8px",
            },
            ".slick-arrow": {
              "&:before": {
                color: "#000",
              },
            },
            ".slick-track": {
              display: "flex",
            },
          }}
        >
          <Slider {...settings}>
            {partners.map((partner, index) => (
              <Link href={partner.href}>
              <Box key={index}>
                <Box
                  sx={{
                    height: 100,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "white",
                    border: "1px solid",
                    borderColor: "grey.200",
                    borderRadius: 1,
                    p: 2,
                    m: 0.2,
                    transition: "all 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: 2,
                      borderColor: "grey.300",
                    },
                  }}
                >
                  <StyledImage
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={120}
                    height={60}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                    }}
                  />
                </Box>
              </Box>
              </Link>
              
            ))}
          </Slider>
        </Box>

        {/* <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "flex-start", sm: "center" },
            justifyContent: "space-between",
            gap: 2,
            bgcolor: "grey.50",
            p: 3,
            borderRadius: 2,
          }}
        > */}
        {/* <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <AvatarGroup max={4}>
              {teamAvatars.map((member, index) => (
                <Avatar
                  key={index}
                  src={member.avatar}
                  alt={`${member.name}`}
                  sx={{
                    width: 48,
                    height: 48,
                    border: 4,
                    borderColor: "background.paper",
                  }}
                />
              ))}
            </AvatarGroup>
            <Typography
              variant="subtitle1"
              fontWeight="medium"
              sx={{
                color: "#4A4A4A",
              }}
            >
              Join the partners network
            </Typography>
          </Box> */}
        {/* <Link href={"/contact"}>
            <Button
              variant="contained"
              endIcon={<ArrowForwardIcon />}
              sx={{
                width: { xs: "100px", sm: "130px", md: "230px" },
                height: { xs: "35px", sm: "45px", md: "50px" },
                minWidth: "100px",
                bgcolor: "#4294a5",
                // bgcolor: "#FFB247",
                color: "black",
                fontWeight: "bold",
                borderRadius: "50px",
                fontSize: { xs: "11px", sm: "13px", md: "15px" },
                ml: { xs: 1, sm: 2 },
                "&:hover .MuiSvgIcon-root": {
                  transform: "translateX(4px)",
                  transition: "transform 0.2s",
                },
              }}
            >
              Become a partner
            </Button>
          </Link> */}
        {/* </Box> */}
      </Container>
      <ServicesAccordion />
      <Footer />
    </ThemeProvider>
  );
}
