"use client";

import React, { useState } from "react";
import { Box, Typography, useScrollTrigger } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowDropDown, ArrowForwardIos } from "@mui/icons-material";

const AboutLinks = [
  { text: "Our team", href: "/aboutus/our-team" },
  { text: "Company Info", href: "/aboutus/company-info" },
];

const AboutUsDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });
  const [hoveredLink, setHoveredLink] = React.useState(null);

  return (
    <Box
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{ position: "relative" }}
    >
      <Box sx={{ display: "flex", alignItems: "center", flexDirection: "row" }}>
        <Typography
          variant="h6"
          component="span"
          sx={{
            px: 3.5,
            // ml: 3,
            // mr: 3,
            py: 3,
            fontSize: { xs: "16px", sm: "18px" },
            cursor: "pointer",
            fontWeight: 500,
            //  borderBottom: pathname.startsWith("/aboutus")
            //     ? "3.5px solid #4294a5"
            //     : "none",
            color:
              pathname.startsWith("/aboutus") || isOpen
                ? "#4294a5"
                : trigger
                ? "black"
                : "white",

            display: "inline-flex",
            alignItems: "center",
            // Use the ::after pseudo-element to create the underline effect
            "&::after": {
              content: '""', // Create an empty pseudo-element
              position: "absolute",
              bottom: -1.5, // Position it at the bottom of the text
              left: 0,
              width: "100%",
              height: "3px", // Thickness of the underline
              backgroundColor: "#4294a5", // Color of the underline
              transform:
                isOpen || pathname.startsWith("/aboutus")
                  ? "scaleX(1)"
                  : "scaleX(0)", // Show underline when open
              transition: "transform 0.3s ease", // Smooth transition for the underline
            },

            // // Reveal the underline on hover
            "&:hover::after": {
              transform: pathname.startsWith("/aboutus") ? "none" : "scaleX(1)", // Make the underline appear
            },
          }}
        >
          About Us
          <ArrowForwardIos
            className="arrow-icon"
            sx={{
              fontSize: "16px",
              mx: 0.5,
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
            width: "300px",
            bgcolor: "white",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            borderRadius: "8px",
            p: 2,
            zIndex: 1000,
          }}
        >
          {AboutLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              style={{ textDecoration: "none" }}
            >
              <Typography
                //@ts-expect-error: Should expect a string
                onMouseEnter={() => setHoveredLink(link.text)}
                onMouseLeave={() => setHoveredLink(null)}
                sx={{
                  color: "rgb(49, 49, 49)",
                  p: 2,
                  fontSize: "16px",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    color: "#4294a5",
                    transform: "translateX(5px)",
                  },
                }}
              >
                {hoveredLink === link.text ? "||    " : ""}
                {link.text}
              </Typography>
            </Link>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default AboutUsDropdown;
