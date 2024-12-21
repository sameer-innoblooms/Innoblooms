"use client";

import { Box, Typography, styled } from "@mui/material";
import Image from "next/image";

// const PlayButton = styled(IconButton)(({ theme }) => ({
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   backgroundColor: "rgba(255, 255, 255, 0.9)",
//   "&:hover": {
//     backgroundColor: "rgba(255, 255, 255, 1)",
//   },
//   "& .MuiSvgIcon-root": {
//     fontSize: "48px",
//   },
// }));

const ImageContainer = styled(Box)(({}) => ({
  //   position: "absolute",
  height: "70%",
  minHeight: "400px",
  //   borderRadius: theme.spacing(2),
  overflow: "hidden",
  "& img": {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}));

export default function FounderPage() {
  return (
    <Box
      sx={{
        // bgcolor: "#F7F7F7",
        background:
          "url(https://www.transparenttextures.com/patterns/crossword.png)",
        // bgcolor: "aqua",
        py: 8,
      }}
    >
      <Box
        maxWidth="1000px"
        sx={{
          //   bgcolor: "green",
          bgcolor: "#E1EFFE",
          ml: { xs: 0, md: 20 },
        }}
      >
        {/* <Grid container spacing={1} alignItems="center">
          <Grid item xs={12} md={6}> */}
        <Box
          sx={{
            maxWidth: 600,
            px: { xs: 2 },
            py: 5,
            ml: { xs: 0, md: 11 },
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignContent: "center",
            textAlign: "left",
          }}
        >
          <Typography
            variant="overline"
            sx={{
              color: "text.secondary",
              fontWeight: 500,
              letterSpacing: 1.5,
              mb: 2,
              display: "block",
              //   alignItems: 'center'
            }}
          >
            CEO
          </Typography>

          <Typography
            variant="h3"
            component="h2"
            sx={{
              fontWeight: 700,
              mb: 3,
              fontSize: { xs: "2rem", md: "2.5rem" },
            }}
          >
            Chief Technical Advisor
          </Typography>

          <Typography
            variant="body1"
            sx={{
              color: "text.secondary",
              fontSize: "1.125rem",
              lineHeight: 1.7,
            }}
          >
            Tech savvy IT Leader with 23+ Years of Expertise in AI,
            Cybersecurity, and Cloud Computing. Faiyaz is a seasoned
            professional with a proven track record of delivering innovative,
            end-to-end solutions for B2B and B2C industries. Faiyaz has worked
            with global clients such as Sun Microsystems (Menlo Park), General
            Electric (US), Michelin Tyre, and United Airlines, and held key
            roles at IMR Global, Bharti Airtel, Birlasoft, and startups
            leveraging disruptive technologies. As Country Director at
            Species360, Faiyaz is aligned strategic leadership with impactful
            global initiatives. Faiyaz specialize in driving agility and growth
            by integrating AI, Cybersecurity, and Cloud Computing into scalable,
            secure solutions, delivering measurable value.
          </Typography>
        </Box>

        <Box
          sx={
            {
              // position: 'relative'
            }
          }
        >
          <Box sx={{}}>
            <Box
              sx={{
                zIndex: 1000,
                bottom: -940,
                display: { xs: "none", md: "block" },
                right: 222,
                height: "500px",
                width: "370px",
                position: "absolute",
                // borderRight: "3px solid #76A9FA",
                // borderBottom: "3px solid #76A9FA",
                borderRadius: "0 0 50% 0",
              }}
            ></Box>
            <ImageContainer
              sx={{
                left: 935,
                top: 1070,
                position: { xs: "static", md: "absolute" },
                borderRadius: "10px 10px 50% 10px",
                outline: "2px solid rgb(0, 0, 0)",

                outlineOffset: "",
              }}
            >
              <Image
                src="/CEO.jpeg?height=600&width=800"
                alt="Shopify team members"
                height={600}
                width={800}
              />
            </ImageContainer>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
