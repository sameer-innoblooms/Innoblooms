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
  Container,
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
    logo: "/logo/Cars24.png?height=50&width=50",
    quote:
      "I am thrilled to collaborate with such an innovative company. At CARS24, we share your passion for cutting-edge solutions and customer satisfaction. Together, we can drive the future of automotive technology and create unparalleled experiences for our customers.",
    author: "Vikram Chopra",
    title: "Founder and CEO",
    avatar: "/ourpartners/cars24.jpg?height=60&width=60",
  },
  {
    logo: "/logo/kentico.png?height=10&width=10",
    quote:
      "Innoblooms has been a game-changer for our business. Their IT solutions are top-notch, and their team is incredibly responsive and professional. From website development to digital marketing, they've exceeded our expectations. Highly recommend!",
    author: "Petr Palas",
    title: "CEO and chairman",
    avatar: "/ourpartners/kentico.jpg?height=60&width=60",
  },
  {
    logo: "/logo/dell.png?height=10&width=10",
    quote:
      "Innoblooms has consistently delivered exceptional IT solutions, enhancing our operational efficiency and digital presence. Their innovative approach and professional team make them a highly valued partner. Highly recommended.",
    author: "Michael Dell",
    title: "CEO of Dell Technologies",
    avatar: "/ourpartners/dell.jpg?height=60&width=60",
  },

  {
    logo: "/logo/tata.png?height=10&width=10",
    quote:
      "Innoblooms has been an outstanding partner in delivering innovative IT solutions. Their professionalism, creativity, and commitment to excellence have greatly enhanced our digital transformation journey. Highly recommended",
    author: "Warren Harris",
    title: "CEO Tata Technologies",
    avatar: "/ourpartners/tata.jpg?height=60&width=60",
  },
  {
    logo: "/logo/adobe.png?height=10&width=10",
    quote:
      "Innoblooms has been instrumental in enhancing our digital initiatives. Their innovative solutions and dedicated team have greatly contributed to our success. We highly appreciate their partnership.",
    author: "Shantanu Narayen",
    title: "CEO of Adobe Inc.",
    avatar: "/ourpartners/adobe.jpg?height=60&width=60",
  },
  {
    logo: "/logo/paytm.png?height=10&width=10",
    quote:
      "Innoblooms has significantly improved our digital operations. Their innovative IT solutions and dedicated support team have been invaluable in advancing our business goals. Highly recommend their services.",
    author: "Vijay Shekhar Sharma",
    title: "Founder and CEO One97 ",
    avatar: "/ourpartners/paytm.jpg?height=60&width=60",
  },
];

const SliderContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  backgroundColor: "#e9f5f9",
  // padding: theme.spacing(8),

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
  position: "absolute", // Ensure the buttons are positioned absolutely
  bottom: theme.spacing(2), // Adjust this value as needed
  color: "black",
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
  maxWidth: "1400px",
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

const ExpandableQuote = ({ quote }: { quote: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const words = quote.split(' ');
  const truncatedQuote = words.slice(0, 15).join(' ');

  return (
    <Typography variant="body1" sx={{ flex: 1, mb: 4, mt: 2, color: "#4A4A4A" }}>
      &quot;{isExpanded ? quote : truncatedQuote}
      {words.length > 15 && (
        <span
          onClick={() => setIsExpanded(!isExpanded)}
          style={{ color: '#4d7990', cursor: 'pointer', marginLeft: '5px' }}
        >
          {isExpanded ? ' Read less' : '... Read more'}
        </span>
      )}&quot;
    </Typography>
  );
};

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
    <Container maxWidth="xl">
      <SliderContainer
        sx={{
          pt: 2,
          pb: 10,
        }}
      >
        <CardsContainer
          sx={{
            transform: `translateX(-${currentIndex * 100}%)`,
            pl: 3,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} elevation={3}>
              <CardContent
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  // width: "100%",
                }}
              >
                <Box
                  sx={{
                    width: "100px",
                    height: "50px",
                  }}
                >
                  <Box
                    component="img"
                    src={testimonial.logo}
                    alt="Company logo"
                    sx={{ height: "auto", width: "100%", mb: 3 }}
                  />
                </Box>

                <ExpandableQuote quote={testimonial.quote} />
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

        <IndicatorContainer sx={{}}>
          <IndicatorBar progress={progress} />
        </IndicatorContainer>

        <NavigationButton
          onClick={handlePrevious}
          sx={{ left: { xs: -10, md: -20 }, bottom: { xs: 0, md: -20 } }} // Adjusted for consistency
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
          sx={{ left: { xs: 80, md: 50 }, bottom: { xs: 0, md: -20 } }} // Adjusted for consistency
        >
          <KeyboardArrowRight
            sx={{
              fontSize: 70,
              color: "#4A4A4A",
            }}
          />
        </NavigationButton>
      </SliderContainer>
    </Container>
  );
}

