import { Box } from "@mui/material";
import React from "react";

const BackgroundImage=()=> {
  return (
    <div style={{ margin: "px" }}>
      <Box
        sx={{
          mb: 4,
          display: "flex",
          height: "100vh", 
          width: "full", 
          maxWidth: "1600px", 
          zIndex: 10,
          backgroundSize: 'cover', 
          backgroundPosition: "center center", 
          backgroundRepeat: "no-repeat", 
          transition: "background-size 0.5s ease", 
          position: "relative",
          margin: "0 auto",
          objectFit: "cover",
               maxHeight:"1500px",
          backgroundImage: `url('https://img.freepik.com/premium-photo/computer-teamwork-solving-problems-tech-industry_1274913-37557.jpg')`,
          "@media (max-width:600px)": {
            height: "50vh",
            // marginTop: 2,
          },
          "@media (max-width:900px)": {
            height: "60vh",
          },
        }}
      ></Box>
    </div>
  );
}

export default BackgroundImage;
