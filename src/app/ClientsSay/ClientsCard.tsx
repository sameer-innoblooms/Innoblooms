import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

export default function ClientsCard({ cardDetails }: any) {
  //console.log("----obj", cardDetails);
  return (
    <Box sx={{padding:1}}>
      <Card
        sx={{
          width: "100% !important",
          // height: "400px",
          minHeight: "390px",
          borderRadius: "16px",
          //backgroundColor: "#3046C54D",
          background: "linear-gradient(#3046C54D, #4E31144D);",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2,  }}>
          <CardMedia
            sx={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
            }}
            //image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
            image={cardDetails?.imag}
            // title="green iguana"
          />
        </Box>
        <CardContent sx={{textAlign:'center'}}>
          <Typography
            variant="body1"
            
            component="div"
            sx={{ fontWeight: "bold" }}
          >
            {cardDetails?.heading1}
          </Typography>
          <Typography variant="body1" sx={{ fontWeight: "bold" }}>
            {cardDetails?.heading2}
          </Typography>
          <Typography variant="subtitle1" sx={{ color: "text.secondary" }}>
            {cardDetails?.paragraph}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            {cardDetails?.text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
