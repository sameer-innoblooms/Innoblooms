import React from "react";
import { Box, Typography } from "@mui/material";

const WhatsAppButton = () => {
  return (
    <Box
    
      sx={{
        position: "fixed",
        right: 0,
        bottom: "100px",
        zIndex: 100,
        display: {xs: "none", sm: "block", md: 'block'},
      }}
    >
      <Box
        sx={{
          backgroundColor: "#1EBEA5",
          height: "60px",
          width: "70px",
          borderRadius: "30px 0 0 30px",
          transition: "width 0.7s ease",
          "&:hover": {
            width: "280px",
            transition: "width 0.7s ease",
          },
        }}
      >
        <Box
          sx={{
            backgroundImage: "url(/whatsapp.png)",
            backgroundRepeat: "no-repeat",
            width: "280px",
            backgroundSize: "44px",
            backgroundPosition: "16px 7px",
            paddingBottom: "10px",
          }}
        >
          <a
            href="https://api.whatsapp.com/send?phone=917252833134"
            style={{
              color: "#ffffff",
              fontSize: "14px",
              lineHeight: "20px",
              marginLeft: "70px",
              textDecoration: "none",
              height: "60px",
              fontFamily: "sans-serif",
              
            }}
          >
            
            <strong
              style={{
                display: "block",
                fontSize: "21px",
                marginLeft: "70px",
                marginBottom: "50px",
              }}
            >
              WhatsApp
            </strong>
            
           
          </a>
        </Box>
      </Box>
    </Box>
  );
};

export default WhatsAppButton;