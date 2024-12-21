"use client"

import React from "react";
import { Box, Button, Typography, useTheme, } from "@mui/material";

interface TabContent {
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  buttonType: string;
}

interface SliderCardProps {
  item: {
    image: string;
    tabContent: TabContent;
  };
}

const SliderCard: React.FC<SliderCardProps> = ({ item }) => {
  // const theme = useTheme();
  // const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  // const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  return (
    <Box
      sx={{
        px: { xs: 2, sm: 3, md: 4 },
        backgroundColor: "white",
        display: "flex",
        height: '100vh',
        // height: { xs: "calc(100vh - 56px)", sm: "calc(100vh - 64px)", md: "100vh" },
        width: "100%",
        zIndex: 10,
        backgroundImage: `url(${item.image})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        transition: "background-size 0.5s ease",
        position: "relative",
        margin: "0 auto",
        maxHeight: "1600px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.5)",
          zIndex: 2,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          pl: { xs: 3, sm: 6, md: 9 },
          pr: { xs: 3, sm: 6, md: 9 },
        }}
      >
        <Box sx={{ textAlign: "left", width: 1, mb: { xs: 4, sm: 6, md: 8 } }}>
          <Typography
            variant="h1"
            sx={{
              color: "white",
              fontWeight: 700,
              fontSize: { xs: "32px", sm: "48px", md: "64px" },
              lineHeight: 1.2,
              mb: 1,
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {item.tabContent.text1}
          </Typography>
          <Typography
            variant="h2"
            sx={{
              color: "white",
              fontWeight: 600,
              fontSize: { xs: "28px", sm: "40px", md: "56px" },
              lineHeight: 1.2,
              mb: { xs: 3, sm: 4 },
              textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {item.tabContent.text2}
          </Typography>
          <Box sx={{ mb: { xs: 3, sm: 4, md: 5 } }}>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "16px", sm: "18px", md: "22px" },
                fontWeight: 400,
                mb: 1,
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              {item.tabContent.text3}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: "white",
                fontSize: { xs: "16px", sm: "18px", md: "22px" },
                fontWeight: 400,
                textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              }}
            >
              {item.tabContent.text4}
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            position: { xs: "absolute", md: "static" },
            bottom: { xs: 32, sm: 48 },
            left: { xs: 3, sm: 6, md: 9 },
          }}
        >
          <Button
            sx={{
              width: { xs: "160px", sm: "180px", md: "200px" },
              height: { xs: "50px", sm: "60px", md: "70px" },
              backgroundColor: "#FFB247",
              color: "black",
              textTransform: "capitalize",
              fontWeight: "bold",
              fontSize: { xs: "16px", sm: "18px", md: "20px" },
              borderRadius: "40px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              ml:{xs:3},
              mb: {xs:5},
              "&:hover": {
                backgroundColor: "white",
                color: "black",
              },
            }}
            variant="contained"
          >
            {item.tabContent.buttonType}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default SliderCard;

