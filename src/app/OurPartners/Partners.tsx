import { Box } from "@mui/material";
import React from "react";
export default function Partners({ partnerDetails }: any) {
  return (
    <Box sx={{ display: "flex"

     }}>
      <Box
        sx={{
          height: "150px",
          width: "320px",
          backgroundImage: `url(${partnerDetails?.imag})`,
          backgroundSize: "100% 100%", 
          backgroundPosition: "center",
          opacity: 1, 
        }}
      />
    </Box>
  );
}
