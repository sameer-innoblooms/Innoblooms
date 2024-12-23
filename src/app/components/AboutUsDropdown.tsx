"use client";

import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

const AboutLinks = [
  { text: "Our team  ", href: "/aboutus/our-team" },
  { text: "Company Info", href: "/aboutus/company-info" },
  //   { text: "Our Mission", href: "/aboutus/mission" },
];

const AboutUsDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Box
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{ position: "static" }}
    >
      <Typography
        variant="h6"
        component="span"
        sx={{
          px: 4,
          py: 3,
          fontSize: { xs: "16px", sm: "18px" },
          cursor: "pointer",
          fontWeight: 500,
          borderBottom: pathname.startsWith("/aboutus")
            ? "2px solid #FFB247"
            : "none",
          color: pathname.startsWith("/aboutus") ? "#FFB247" : "white",
          ":hover": {
            borderBottom: "2px solid #FFB247",
            color: "#FFB247",
          },
          display: "inline-block",
        }}
      >
        About Us
      </Typography>

      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            // left: 0,
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
                sx={{
                  //   color: "#6B46C1",
                  color: "rgb(49, 49, 49)",
                  p: 2,
                  fontSize: "16px",
                  fontWeight: 500,
                  transition: "all 0.2s ease",
                  "&:hover": {
                    // bgcolor: "#f0f0f0",
                    color: "#FFB247",
                    transform: "translateX(5px)",
                  },
                  borderBottom: "1px solid #eee",
                  "&:last-child": {
                    borderBottom: "none",
                  },
                }}
              >
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
