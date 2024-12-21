"use client";

import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";

const StyledSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(12),
  position: "relative",
}));

const ProcessNumber = styled(Typography)(({}) => ({
  fontSize: "4rem",
  fontWeight: 700,
  color: "#f5f5f5",
  position: "absolute",
  top: -20,
  left: -10,
  zIndex: -1,
}));

export default function OurProcess() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{ mb: 1, fontWeight: "bold" }}
      >
        our process
      </Typography>

      <Typography
        variant="body1"
        align="center"
        sx={{ mb: 8, maxWidth: "600px", mx: "auto" }}
      >
        Our process is designed to ensure the best possible result of our
        workflow. It enables us to make it to the practical/real world of our
        thoughts of making things and manifesting the future of work.
      </Typography>

      <Grid container spacing={4}>
        {/* Plan Section */}
        <Grid item xs={12}>
          <StyledSection>
            <ProcessNumber>01</ProcessNumber>
            <Grid container spacing={4} alignItems="center">
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  borderLeft: "2px solid #f5f5f5",
                  borderBottom: "2px solid #f5f5f5",
                }}
              >
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  plan
                </Typography>
                <Typography variant="body1" sx={{ mb: 2 }}>
                  We use proactive, rigorous research and sophisticated data
                  science to identify the best pathways today and their
                  evolution tomorrow. Through this process, we develop a deep
                  understanding of your needs and opportunities, which helps us
                  optimize and your website design, systems, and functionality.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", height: 300 }}>
                  <Image
                    src="/images/process-01.svg"
                    alt="Planning illustration"
                    fill
                    style={{ objectFit: "contain" }}
                    width={1}
                    height={1}
                  />
                </Box>
              </Grid>
            </Grid>
          </StyledSection>
        </Grid>

        {/* Design Section */}
        <Grid item xs={12}>
          <StyledSection>
            <ProcessNumber>02</ProcessNumber>
            <Grid
              container
              spacing={4}
              alignItems="center"
              direction="row-reverse"
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  design
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Once the blueprint is approved, we create wireframes and a
                  design using the best within. This process involves intense
                  collaboration between our design team, project management, and
                  the client team. It&apos;s okay with the discussion to get the
                  best result. We make sure the design will meet your business
                  values.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 0,
                    textTransform: "none",
                    borderColor: "black",
                    color: "black",
                    "&:hover": {
                      borderColor: "black",
                      backgroundColor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  VIEW MORE
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", height: 300 }}>
                  <Image
                    src='/images/process-02.svg'
                    alt="Design illustration"
                    fill
                    style={{ objectFit: "contain" }}
                    width={1}
                    height={1}
                  />
                </Box>
              </Grid>
            </Grid>
          </StyledSection>
        </Grid>

        {/* Develop Section */}
        <Grid item xs={12}>
          <StyledSection>
            <ProcessNumber>03</ProcessNumber>
            <Grid container spacing={4} alignItems="center">
              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  develop
                </Typography>
                <Typography variant="body1">
                  With the wireframes as design setup as our guide, the
                  development team begins to create your website with the story
                  of the web tools. Our entire team works to add content, fine
                  design elements, photos, & and user-tested UX paths.
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", height: 300 }}>
                  <Image
                    src="/images/process-03.svg"
                    alt="Development illustration"
                    fill
                    style={{ objectFit: "contain" }}
                    width={1}
                    height={1}
                  />
                </Box>
              </Grid>
            </Grid>
          </StyledSection>
        </Grid>

        {/* Deploy Section */}
        <Grid item xs={12}>
          <StyledSection>
            <ProcessNumber>04</ProcessNumber>
            <Grid
              container
              spacing={4}
              alignItems="center"
              direction="row-reverse"
            >
              <Grid item xs={12} md={6}>
                <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
                  deploy
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  After testing and review, it&apos;s project time and voilaa!
                  Don&apos;t worry, we won&apos;t leave you hanging. Our team
                  will help you get optimized for search engines such as Google
                  & Bing.
                </Typography>
                <Button
                  variant="outlined"
                  sx={{
                    borderRadius: 0,
                    textTransform: "none",
                    borderColor: "black",
                    color: "black",
                    "&:hover": {
                      borderColor: "black",
                      backgroundColor: "rgba(0,0,0,0.04)",
                    },
                  }}
                >
                  GET CONTACT
                </Button>
              </Grid>
              <Grid item xs={12} md={6}>
                <Box sx={{ position: "relative", height: 300 }}>
                  <Image
                    src="/images/process-03.svg"
                    alt="Deployment illustration"
                    fill
                    style={{ objectFit: "contain" }}
                    width={1}
                    height={1}
                  />
                </Box>
              </Grid>
            </Grid>
          </StyledSection>
        </Grid>
      </Grid>
    </Container>
  );
}
