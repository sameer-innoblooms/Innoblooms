"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
} from "@mui/material";

import { ChevronLeft, ChevronRight } from "lucide-react";
import TestimonialSlider from "../components/Testimonials";

interface ClientCardDetails {
  imag: string;
  heading1: string;
  heading2?: string;
  paragraph: string;
  text: string;
}

interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  autoplay: boolean;
  autoplaySpeed: number;
  pauseOnHover: boolean;
  responsive: any[];
}

const ClientsCard: React.FC<{ cardDetails: ClientCardDetails }> = ({
  cardDetails,
}) => {
  return (
    <Box sx={{ padding: 1 }}>
      <Card
        sx={{
          width: "100%",
          minHeight: "390px",
          borderRadius: "16px",
          // background: "linear-gradient(#121028, #4E31144D)",
          // background: "linear-gradient(to right top, #4294a5, #38a1ab, #33adad, #39b9ac, #48c5a8);",
          background: "linear-gradient(to right, #476884, #35A7C6)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <CardMedia
            sx={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
            }}
            image={cardDetails.imag}
          />
        </Box>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography
            variant="body1"
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {cardDetails.heading1}
          </Typography>
          {cardDetails.heading2 && (
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {cardDetails.heading2}
            </Typography>
          )}
          <Typography
            variant="subtitle1"
            sx={{ color: "text.secondary", mt: 2, mb: 2 }}
          >
            {cardDetails.paragraph}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            {cardDetails.text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

const ClientsSay: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const clients: ClientCardDetails[] = [
    {
      imag: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      heading1: "Streamlined our processes",
      heading2: "and saved us time!",
      paragraph:
        "Innoblooms automated key processes, boosting our efficiency by 40%. Their AI solutions saved us time and allowed us to focus on growth",
      text: "– Sarah M., Operations Manager, TechCo",
    },
    {
      imag: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      heading1: "Helped us scale fast!",
      paragraph:
        "With Innoblooms' solutions, we were able to scale our operations rapidly. Their AI-driven approach helped us manage growth efficiently.",
      text: "– John D., CEO, StartupX",
    },
    {
      imag: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      heading1: "Transformed our customer service",
      paragraph:
        "Innoblooms' AI chatbot revolutionized our customer support. We've seen a 50% reduction in response times and improved customer satisfaction.",
      text: "– Emily R., Customer Success Manager, ServicePro",
    },
    {
      imag: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      heading1: "Boosted our ROI significantly",
      paragraph:
        "The AI-driven marketing solutions from Innoblooms increased our conversion rates by 35%. Our ROI has never been better!",
      text: "– Michael T., Marketing Director, E-commerce Giant",
    },
  ];

  const CustomArrow = ({
    direction,
    onClick,
  }: {
    direction: "left" | "right";
    onClick?: () => void;
  }) => (
    <Box
      onClick={onClick}
      sx={{
        position: "absolute",
        top: "50%",
        left: '0',
        transform: "translateY(-50%)",
        zIndex: 1,
        cursor: "pointer",
        [direction]: isMobile ? "5px" : "-25px",
        display: "block",
      }}
    >
      {direction === "left" ? (
        <ChevronLeft size={24} color={theme.palette.primary.main} />
      ) : (
        <ChevronRight size={24} color={theme.palette.primary.main} />
      )}
    </Box>
  );

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Box
      sx={{
        bgcolor: "#e9f5f9",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            mt: 5,
            pt: 3,
            pb: 3,
            pl: 2,
            // pb: 1,
            // bgcolor: "#040404",
            // borderRadius: "0 0 70px 70px"
            bgcolor: "#e9f5f9",
            // borderRadius: "0 0 70px 70px", // Rounded corners at the bottom
          }}
        >
          <Typography
            variant="h4"
            sx={{
              textAlign: "left",
              color: "#4A4A4A",
              // color: "black",
              // color:'rgb(102, 102, 232)',
              // color:'black',
              fontWeight: "bold",
              mb: 2,
              pl: 4,
            }}
          >
            What Our{" "}
            <Box
              sx={{
                background: "linear-gradient(to right, #476884, #35A7C6)",
                // background: "linear-gradient(to right , #4294a5, #48c5a8);",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Clients Say
            </Box>
          </Typography>
          <Box
            sx={{
              textAlign: "left",
              // mb: 4,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                // fontWeight: "bold",
                // mb: 2,
                // color: "rgba(0, 0, 0, 0.6)",
                color: "#4A4A4A",
                // color: "#4A4A4A",
                // color: "white",
                fontSize: "1.130rem",
                pl: 4,
              }}
            >
              At Innoblooms, we pride ourselves on delivering results that drive
              success.
            </Typography>
          </Box>

          {/* <Box
        sx={{
          position: "relative",
          width: "100%",
          maxWidth: "1350px",
          mx: "auto",
          // color: "#4A4A4A",
        }}
      >
        <Slider
          {...settings}
          prevArrow={<CustomArrow direction="left" />}
          nextArrow={<CustomArrow direction="right" />}
        >
          {clients.map((client, index) => (
            <ClientsCard key={index} cardDetails={client} />
          ))}
        </Slider>
      </Box> */}
          <TestimonialSlider />
        </Box>
      </Container>
    </Box>
  );
};

export default ClientsSay;
