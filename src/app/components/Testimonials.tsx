"use client";

import { useState } from "react";
import {
  Box,
  Typography,
  IconButton,
  Card,
  CardContent,
  Avatar,
  styled,
} from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const testimonials = [
  {
    logo: "/logo/ibm-logo.png?height=10&width=10",
    quote:
      "Innoblooms has been critical in deploying IBM Design Thinking across the whole company. We now have people in more than 50 countries collaborating daily.",
    author: "Phil Gilbert",
    title: "Head of IBM Design",
    avatar: "/ourpartners/avatar.jpg?height=60&width=60",
  },
  {
    logo: "/logo/ibm-logo.png?height=10&width=10",
    quote:
      "Innoblooms has been critical in deploying IBM Design Thinking across the whole company. We now have people in more than 50 countries collaborating daily.",
    author: "Phil Gilbert",
    title: "Head of IBM Design",
    avatar: "/ourpartners/avatar.jpg?height=60&width=60",
  },
  {
    logo: "/logo/ibm-logo.png?height=10&width=10",
    quote:
      "Innoblooms has been critical in deploying IBM Design Thinking across the whole company. We now have people in more than 50 countries collaborating daily.",
    author: "Phil Gilbert",
    title: "Head of IBM Design",
    avatar: "/ourpartners/avatar.jpg?height=60&width=60",
  },
  {
    logo: "/logo/ibm-logo.png?height=10&width=10",
    quote:
      "Innoblooms has been critical in deploying IBM Design Thinking across the whole company. We now have people in more than 50 countries collaborating daily.",
    author: "Phil Gilbert",
    title: "Head of IBM Design",
    avatar: "/ourpartners/avatar.jpg?height=60&width=60",
  },

  {
    logo: "/logo/ibm-logo.png?height=10&width=10",
    quote:
      "Innoblooms has been critical in deploying IBM Design Thinking across the whole company. We now have people in more than 50 countries collaborating daily.",
    author: "Phil Gilbert",
    title: "Head of IBM Design",
    avatar: "/ourpartners/avatar.jpg?height=60&width=60",
  },
  {
    logo: "/logo/ibm-logo.png?height=10&width=10",
    quote:
      "Innoblooms has been critical in deploying IBM Design Thinking across the whole company. We now have people in more than 50 countries collaborating daily.",
    author: "Phil Gilbert",
    title: "Head of IBM Design",
    avatar: "/ourpartners/avatar.jpg?height=60&width=60",
  },
  {
    logo: "/logo/ibm-logo.png?height=10&width=10",
    quote:
      "Innoblooms has been critical in deploying IBM Design Thinking across the whole company. We now have people in more than 50 countries collaborating daily.",
    author: "Phil Gilbert",
    title: "Head of IBM Design",
    avatar: "/ourpartners/avatar.jpg?height=60&width=60",
  },
];

const SliderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#e9f5f9",
  padding: theme.spacing(8),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}));

const CardsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(4),
  transition: "transform 0.5s ease-in-out",
  width: "100%",
  maxWidth: 500,
  // margin: "0 auto",
  marginLeft: 50,
  height: 400,
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  flex: "0 0 100%",
  maxWidth: "100%",
  backgroundColor: "#fff",
  [theme.breakpoints.up("md")]: {
    flex: "0 0 calc(33.333% - ${theme.spacing(3)})",
    maxWidth: "calc(33.333% - ${theme.spacing(3)})",
  },
}));

const NavigationButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  bottom: theme.spacing(4),
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  color: "black",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.2)",
  },
}));

const AuthorSection = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  background: "#4d7990",
  color: "#fff",
  padding: theme.spacing(2),
}));

const IndicatorContainer = styled(Box)(({ theme }) => ({
  // left: 10,
  width: "100%",
  maxWidth: "1500px",
  height: 2,
  backgroundColor: "#bbb",

  marginTop: theme.spacing(4),
  position: "relative",
  // overflow: "hidden",
}));

const IndicatorBar = styled(Box)<{ progress: number }>(({ progress }) => ({
  backgroundColor: "#4d7990",
  height: "100%",
  width: `${progress}%`,
  // backgroundColor: "#4A4A4A",
  transition: "width 0.3s ease",
}));

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handlePrevious = () => {
    setCurrentIndex((prev) =>
      prev === 1 ? testimonials.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 1 : prev + 1
    );
  };

  const progress = ((currentIndex - 0.5) / (testimonials.length - 1.5)) * 100;

  return (
    <SliderContainer>
      <CardsContainer
        sx={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} elevation={3}>
            <CardContent
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <Box
                component="img"
                src={testimonial.logo}
                alt="Company logo"
                sx={{ height: 50, width: 90, mb: 3 }}
              />
              <Typography
                variant="body1"
                sx={{ flex: 1, mb: 4, color: "#4A4A4A" }}
              >
                &quot;{testimonial.quote}&quot;
              </Typography>
              <AuthorSection>
                <Avatar src={testimonial.avatar} alt={testimonial.author} />
                <Box>
                  <Typography variant="subtitle1">
                    {testimonial.author}
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.7 }}>
                    {testimonial.title}
                  </Typography>
                </Box>
              </AuthorSection>
            </CardContent>
          </TestimonialCard>
        ))}
      </CardsContainer>

      <IndicatorContainer>
        <IndicatorBar progress={progress} />
      </IndicatorContainer>

      <NavigationButton
        onClick={handlePrevious}
        sx={{ left: { xs: 16, md: 40 }, bottom: { xs: 16, md: -30 } }}
      >
        <KeyboardArrowLeft
          sx={{
            fontSize: 70,
            color: "#4A4A4A",
          }}
        />
      </NavigationButton>
      <NavigationButton
        onClick={handleNext}
        sx={{ left: { xs: 16, md: 110 }, bottom: { xs: 16, md: -30 } }}
      >
        <KeyboardArrowRight
          sx={{
            fontSize: 70,
            color: "#4A4A4A",
          }}
        />
      </NavigationButton>
    </SliderContainer>
  );
}
