// "use client";

// import { Box, Typography, styled } from "@mui/material";
// import Image from "next/image";

// // const PlayButton = styled(IconButton)(({ theme }) => ({
// //   position: "absolute",
// //   top: "50%",
// //   left: "50%",
// //   transform: "translate(-50%, -50%)",
// //   backgroundColor: "rgba(255, 255, 255, 0.9)",
// //   "&:hover": {
// //     backgroundColor: "rgba(255, 255, 255, 1)",
// //   },
// //   "& .MuiSvgIcon-root": {
// //     fontSize: "48px",
// //   },
// // }));

// const ImageContainer = styled(Box)(({}) => ({
//   //   position: "absolute",
//   height: "70%",
//   minHeight: "400px",
//   //   borderRadius: theme.spacing(2),
//   overflow: "hidden",
//   "& img": {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//   },
// }));

// export default function FounderPage() {
//   return (
//     <Box
//       sx={{
//         // bgcolor: "#F7F7F7",
//         background:
//           "url(https://www.transparenttextures.com/patterns/crossword.png)",
//         // bgcolor: "aqua",
//         py: 8,
//         mb: 5,
//       }}
//     >
//       <Box
//         maxWidth="1000px"
//         sx={{
//           //   bgcolor: "green",
//           bgcolor: "#E1EFFE",
//           ml: { xs: 0, md: 20 },
//         }}
//       >
//         {/* <Grid container spacing={1} alignItems="center">
//           <Grid item xs={12} md={6}> */}
//         <Box
//           sx={{
//             maxWidth: 600,
//             px: { xs: 2 },
//             py: 5,
//             ml: { xs: 0, md: 11 },
//             display: "flex",
//             justifyContent: "center",
//             flexDirection: "column",
//             alignContent: "center",
//             textAlign: "left",
//           }}
//         >
//           <Typography
//             variant="overline"
//             sx={{
//               color: "text.secondary",
//               fontWeight: 500,
//               letterSpacing: 1.5,
//               mb: 2,
//               display: "block",
//               //   alignItems: 'center'
//             }}
//           >
//             CEO
//           </Typography>

//           <Typography
//             variant="h3"
//             component="h2"
//             sx={{
//               fontWeight: 700,
//               mb: 3,
//               fontSize: { xs: "2rem", md: "2.5rem" },
//             }}
//           >
//             Chief Technical Advisor
//           </Typography>

//           <Typography
//             variant="body1"
//             sx={{
//               color: "text.secondary",
//               fontSize: "1.125rem",
//               lineHeight: 1.7,
//             }}
//           >
// Tech savvy IT Leader with 23+ Years of Expertise in AI,
// Cybersecurity, and Cloud Computing. Faiyaz is a seasoned
// professional with a proven track record of delivering innovative,
// end-to-end solutions for B2B and B2C industries. Faiyaz has worked
// with global clients such as Sun Microsystems (Menlo Park), General
// Electric (US), Michelin Tyre, and United Airlines, and held key
// roles at IMR Global, Bharti Airtel, Birlasoft, and startups
// leveraging disruptive technologies. As Country Director at
// Species360, Faiyaz is aligned strategic leadership with impactful
// global initiatives. Faiyaz specialize in driving agility and growth
// by integrating AI, Cybersecurity, and Cloud Computing into scalable,
// secure solutions, delivering measurable value.
//           </Typography>
//         </Box>

//         <Box
//           sx={
//             {
//               // position: 'relative'
//             }
//           }
//         >
//           <Box sx={{}}>
//             <Box
//               sx={{
//                 zIndex: 1000,
//                 bottom: -940,
//                 display: { xs: "none", md: "block" },
//                 right: 222,
//                 height: "500px",
//                 width: "370px",
//                 position: "absolute",
//                 // borderRight: "3px solid #76A9FA",
//                 // borderBottom: "3px solid #76A9FA",
//                 borderRadius: "0 0 50% 0",
//               }}
//             ></Box>
//             <ImageContainer
//               sx={{
//                 left: 935,
//                 top: 1070,
//                 position: { xs: "static", md: "absolute" },
//                 borderRadius: "10px 10px 50% 10px",
//                 outline: "2px solid rgb(0, 0, 0)",

//                 outlineOffset: "",
//               }}
//             >
//               <Image
//                 src="/CEO.jpeg?height=600&width=800"
//                 alt="Shopify team members"
//                 height={600}
//                 width={800}
//               />
//             </ImageContainer>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// }

// "use client";
// import { useState } from "react";
// import { Container, Grid, Typography } from "@mui/material";
// import Founder from "@/app/components/Founders";

// // Founder data (you can replace this with your actual data)
// const foundersData = [
//   {
//     id: 1,
//     name: "Faiyaz",
//     designation: "Chief Technical Advisor",
//     photo: "/CEO.jpeg?height=300&width=300",
//     shortBio:
//       "Chief Technical Advisor - Tech savvy IT Leader with 23+ Years of Expertise...",
//     fullBio:
//       "Chief Technical Advisor - Tech savvy IT Leader with 23+ Years of Expertise in AI, Cybersecurity, and Cloud Computing.Faiyaz is a seasoned professional with a proven track record of delivering innovative, end-to-end solutions for B2B and B2C industries. Faiyaz has worked with global clients such as Sun Microsystems (Menlo Park), General Electric (US), Michelin Tyre, and United Airlines, and held key roles at IMR Global, Bharti Airtel, Birlasoft, and startups leveraging disruptive technologies.As Country Director at Species360, Faiyaz is aligned strategic leadership with impactful global initiatives. Faiyaz specialize in driving agility and growth by integrating AI, Cybersecurity, and Cloud Computing into scalable, secure solutions, delivering measurable value.",
//   },
//   {
//     id: 2,
//     name: "John Smith",
//     designation: "CTO & Co-Founder",
//     photo: "/CEO.jpeg?height=300&width=300",
//     shortBio:
//       "Chief Technical Advisor - Tech savvy IT Leader with 23+ Years of Expertise...",
//     fullBio:
//       "Chief Technical Advisor - Tech savvy IT Leader with 23+ Years of Expertise in AI, Cybersecurity, and Cloud Computing.Faiyaz is a seasoned professional with a proven track record of delivering innovative, end-to-end solutions for B2B and B2C industries. Faiyaz has worked with global clients such as Sun Microsystems (Menlo Park), General Electric (US), Michelin Tyre, and United Airlines, and held key roles at IMR Global, Bharti Airtel, Birlasoft, and startups leveraging disruptive technologies.As Country Director at Species360, Faiyaz is aligned strategic leadership with impactful global initiatives. Faiyaz specialize in driving agility and growth by integrating AI, Cybersecurity, and Cloud Computing into scalable, secure solutions, delivering measurable value.",
//   },
// ];

// export default function Founders() {
//   const [expandedFounder, setExpandedFounder] = useState<number | null>(null);

//   const handleExpandClick = (founderId: number) => {
//     setExpandedFounder(expandedFounder === founderId ? null : founderId);
//   };

//   return (
//     <Container maxWidth="lg" sx={{ py: 8 }}>
//       <Typography variant="h2" component="h1" align="center" gutterBottom>
//         Our Founders
//       </Typography>
//       <Grid container spacing={4} justifyContent="center">
//         {foundersData.map((founder) => (
//           <Grid
//             item
//             key={founder.id}
//             xs={12}
//             md={6}
//             sx={{
//               height: 700,
//               width: 300,
//             }}
//           >
//             <Founder
//               {...founder}
//               expanded={expandedFounder === founder.id}
//               onExpandClick={() => handleExpandClick(founder.id)}
//             />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }

"use client";

import { Box, Container, Typography, Paper, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  margin: theme.spacing(2, 0),
  background: "white",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
}));

const ProfileImage = styled("img")({
  width: "100%",
  maxWidth: 250,
  height: "auto",
  borderRadius: 4,
});

export default function LeadershipTeam() {
  const leaders = [
    {
      name: "Shivani Goel",
      designation: "CEO(Chief Executive Officer)",
      description: `Shivani Goel is a visionary entrepreneur with expertise in start-up management, e-commerce, and risk management. As the Founder and Director of Innoblooms Info Service Pvt. Ltd., she leads innovative solutions with a focus on product development, marketing, and CRM.
With over 20 years of experience spanning industries like insurance, travel, and technology, Shivani has consistently delivered impactful results. She has been recognized for her market insights, strategic planning, and ability to cultivate enduring client relationships.
Her achievements include earning a spot in Kotak Mahindra's Club51 and co-founding Mart And You, an e-commerce platform. Shivani's academic foundation includes a Fellowship in General Insurance and a PG Diploma in Insurance and risk management, which are complemented by her passion for innovation and customer satisfaction.`,
      image: "/CEO.jpg?height=300&width=250",
    },
    {
      name: "Faiyaz",
      designation: "CTA(Chief Technical Advisor)",
      description: `Tech savvy IT Leader with 23+ Years of Expertise in AI,
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
            secure solutions, delivering measurable value.`,
      image: "/CTA.jpeg?height=300&width=250",
    },

  ];

  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        // minHeight: "100vh",
        py: 6,
      }}
    >
      <Container maxWidth="xl">
        <Typography
          variant="h3"
          component="h1"
          gutterBottom
          sx={{ mb: 6, fontWeight: "bold", color: "#4A4A4A", pl: 7 }}
        >
          <Box
            component="span"
            sx={{
              background: "linear-gradient(to right, #476884, #35A7C6)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
              fontFamily: "Inter, sans-serif",
            }}
          >
            Company
          </Box>{" "}
          Leadership Team
        </Typography>

        {leaders.map((leader, index) => (
          <Box
            key={index}
            sx={{
              px: 7,
            }}
          >
            <StyledPaper key={index} elevation={0} sx={{}}>
              <Grid
                container
                spacing={4}
                direction={index % 2 ? "row" : "row-reverse"}
              >
                <Grid
                  item
                  xs={12}
                  md={4}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <ProfileImage src={leader.image} alt={leader.name} />
                  <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                      mt: 2,
                      color: "#4294A2",
                      // color: "#4d7990",
                    }}
                  >
                    {leader.name}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    gutterBottom
                  >
                    {leader.designation}
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {leader.description}
                  </Typography>
                </Grid>
              </Grid>
            </StyledPaper>
          </Box>
        ))}
      </Container>
    </Box>
  );
}
