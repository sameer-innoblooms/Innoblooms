'use client'

import {
  Box,
  Button,
  Grid,
  InputLabel,
  TextField,
  Typography,
  FormControlLabel,
  Checkbox,
  Container,
} from "@mui/material";
import React from "react";

function Feedbackform() {
  return (
    <Container maxWidth="xl" disableGutters
    sx={{
      mt:3,
      mb:3
    }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          overflow: "hidden",
        }}
      >
        <Grid container spacing={0}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              backgroundImage:
                `url(${"/feedback-image.jpg"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: 300, md: "100vh" },
            }}
          />

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: { xs: "auto", md: "100vh" },
                p: { xs: 2, md: 4 },
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 480,
                  boxShadow: 2,
                  p: { xs: 3, md: 4 },
                  backgroundColor: "white",
                  borderRadius: 2,
                }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12}>
                    <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                      We&apos;d love to help
                    </Typography>
                    <Typography variant="body2">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur non nulla sit amet.
                    </Typography>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <InputLabel>First Name</InputLabel>
                    <TextField type="text" fullWidth variant="outlined" />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <InputLabel>Last Name</InputLabel>
                    <TextField type="text" fullWidth variant="outlined" />
                  </Grid>

                  <Grid item xs={12}>
                    <InputLabel>Email</InputLabel>
                    <TextField type="email" fullWidth variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Phone Number</InputLabel>
                    <TextField fullWidth type="tel" variant="outlined" />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel>Message</InputLabel>
                    <TextField
                      fullWidth
                      multiline
                      rows={3}
                      variant="outlined"
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <FormControlLabel
                      required
                      control={<Checkbox />}
                      label={
                        <Typography variant="body2">
                          You agree to our friendly privacy policy.
                        </Typography>
                      }
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      variant="contained"
                      sx={{
                        color: "white",
                        backgroundColor: "black",
                        borderRadius: 4,
                        p: 1.5,
                        '&:hover': {
                          backgroundColor: '#333',
                        },
                      }}
                    >
                      Send Message
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Feedbackform;

