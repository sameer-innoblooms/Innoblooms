"use client";
import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box } from "@mui/material";
import SliderCard from "./SliderCard";

function Home() {
  const SliderDetails = [
    {
      image:
        "/images/Image1.jpg",
      tabContent: {
        text1: " Revolutionize Your Business",
        text2: " with AI-Driven Automation",
        text3: "Streamline operations, boost efficiency, and unlock growth",
        text4: "with cutting-edge AI solutions tailored to your needs.",
        buttonType: "Get Started",
      },
    },
    {
      image:
        "/images/Image2.gif",
      tabContent: {
        text1: " Empower Your Projects with Expert",
        text2: "Resources at Your Fingertips!",
        text3: "Access skilled professionals on demand to enhance your",
        text4:
          " team's capabilities and drive projects forward with confidence.",
        buttonType: "Get Started",
      },
    },
    {
      image: "/images/Image3.jfif",
      tabContent: {
        text1: " Drive Transformation with Strategic",
        text2: "Business Consulting",
        text3: "Unlock insights, optimize operations, and achieve sustainable",
        text4: "growth with expert guidance tailored to your goals.",
        buttonType: "Get Started",
      },
    },
    {
      image:
        "images/Image4.jfif",
      tabContent: {
        text1: "Innovative Software Solutions",
        text2: "for Your Business",
        text3: "  Empower your vision with custom software designed to",
        text4: "streamline processes, enhance efficiency, and drive results.",
        buttonType: "Learn more..",
      },
    },
  ];

  return (
    <Box>
      <Carousel autoPlay={true} interval={2000} indicators={true}>
        {SliderDetails.map((item, i) => (
          <Box key={i}>
            <SliderCard item={item} />
          </Box>
        ))}
      </Carousel>
    </Box>
  );
}
export default Home;
