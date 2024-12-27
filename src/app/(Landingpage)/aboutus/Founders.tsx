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

export default function Founders() {
  const leaders = [
    {
      name: "Name",
      designation: "Designation",
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Maecenas porttitor congue massa. Fusce posuere, magna sed
        pulvinar ultricies, purus lectus malesuada libero, sit amet
        commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est. Vivamus stellus.
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Proin pharetra nonummy
        pede. Mauris et orci.`,
      image: "/CEO.jpeg?height=300&width=250",
    },
    {
      name: "Name",
      designation: "Designation",
      description: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
        Maecenas porttitor congue massa. Fusce posuere, magna sed
        pulvinar ultricies, purus lectus malesuada libero, sit amet
        commodo magna eros quis urna.
        Nunc viverra imperdiet enim. Fusce est. Vivamus stellus.
        Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Proin pharetra nonummy
        pede. Mauris et orci.`,
      image: "/CEO.jpeg?height=300&width=250",
    },
  ];

  return (
    <Box sx={{ bgcolor: "#f5f5f5", minHeight: "100vh", py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ mb: 6, fontWeight: 500 }}
        >
          Company Leadership Team
        </Typography>

        {leaders.map((leader, index) => (
          <StyledPaper key={index} elevation={0}>
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
                  sx={{ mt: 2, color: "primary.main" }}
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
        ))}
      </Container>
    </Box>
  );
}
