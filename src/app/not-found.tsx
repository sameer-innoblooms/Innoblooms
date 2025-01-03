import { Box, Typography } from "@mui/material";
import Lottie from "lottie-react";
import React from "react";
import pageNotFound from "./lotties/404.json";
import Image from "next/image";

const notfound = () => {
  return (
    <>
    <Box sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    }}>
        
      <Image
      src="/404.png"
      alt="404"
      width={400}
      height={400}
      />
    </Box>
    </>
  );
};

export default notfound;
