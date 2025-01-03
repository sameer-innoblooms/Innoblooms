"use client";

import { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  TextField,
  Button,
  Link,
  styled,
} from "@mui/material";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#1976d2',
//     },
//     secondary: {
//       main: '#dc004e',
//     },
//     custom: {
//       myColor: '#4A4A4A', // Your custom color
//     },
//   },
// });

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.05)",
}));

const Section = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <Box sx={{ mb: 4 }}>
    <Typography
      variant="h6"
      sx={{ mb: 1, color: "#4A4A4A", fontWeight: "bold" }}
    >
      {title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {description}
    </Typography>
  </Box>
);

export default function ContactPage() {
  const [countryCode, setCountryCode] = useState("+91");

  return (
    <Box
      sx={{
        // bgcolor: "#F5F8FF",
        bgcolor: "#e9f5f9",
        // bgcolor: "#68a9b7",
        minHeight: "auto",
        py: 8,
        // borderRadius: "0 0 60px 60px",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Left Column */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h2"
              sx={{
                color: "#4A4A4A",
                mb: 2,
                fontWeight: 700,
                //  color: "#4A4A4A"
              }}
            >
              Contact{" "}
              <Box
                sx={{
                  background: "linear-gradient(to right, #476884, #35A7C6)",
                  // background: "linear-gradient(to right , #4294a5, #48c5a8);",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  display: "inline-block",
                }}
              >
                Us
              </Box>
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
              Email, call, or complete the form to learn how Snappy can solve
              your messaging problem.
            </Typography>

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="body1"
                sx={{
                  mb: 1,
                  color: "#4A4A4A",
                  fontWeight: "bold",
                  ":hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                <a
                  href="mailto:info@innoblooms.com"
                  style={{ color: "#4A4A4A", textDecoration: "none" }}
                >
                  info@innoblooms.com
                </a>
              </Typography>
              <Typography
                variant="body1"
                sx={{ mb: 1, color: "#4A4A4A", fontWeight: "bold" }}
              >
                <a href="tel:+917252833134"
                 style={{
                  textDecoration: "none",
                  color: "inherit",
                  display: "inline",
                }}
                className="mobile-only"
                >+91 7252833134</a>
              </Typography>

              {/* <Link
                href="#"
                underline="hover"
                sx={{ color: "#4A4A4A", fontWeight: "bold" }}
              >
                Customer Support
              </Link> */}
              <Typography sx={{ color: "#4A4A4A", fontWeight: "bold" }}>
                Customer Support
              </Typography>
            </Box>

            <Section
              title="Customer Support"
              description="Our support team is available around the clock to address any concerns or queries you may have."
            />

            <Section
              title="Feedback and Suggestions"
              description="We value your feedback and are continuously working to improve Innoblooms. Your input is crucial in shaping the future of Innoblooms."
            />

            <Section
              title="Media Inquiries"
              description="For media-related questions or press inquiries, please contact us at info@innoblooms.com "
            />
          </Grid>

          {/* Right Column */}
          <Grid item xs={12} md={6}>
            <StyledPaper>
              <Typography variant="h4" sx={{ mb: 1, color: "#4A4A4A" }}>
                Get in{" "}
                <Box
                  sx={{
                    background: "linear-gradient(to right, #476884, #35A7C6)",
                    // background: "linear-gradient(to right , #4294a5, #48c5a8);",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  Touch
                </Box>
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                You can reach us anytime
              </Typography>

              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField fullWidth label="First name" variant="outlined" />
                </Grid>
                <Grid item xs={6}>
                  <TextField fullWidth label="Last name" variant="outlined" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Your email"
                    variant="outlined"
                    // InputProps={{
                    //   startAdornment: (
                    //     <InputAdornment position="start">
                    //       <Mail size={20} />
                    //     </InputAdornment>
                    //   ),
                    // }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: "flex", gap: 1 }}>
                    {/* <Select
                      value={countryCode}
                      onChange={(e) => setCountryCode(e.target.value)}
                      sx={{ width: 100 }}
                    >
                      <MenuItem value="+1">+1</MenuItem>
                      <MenuItem value="+44">+44</MenuItem>
                      <MenuItem value="+91">+91</MenuItem>
                      <MenuItem value="+62">+62</MenuItem>
                    </Select> */}
                    <TextField
                      fullWidth
                      label="Phone number"
                      variant="outlined"
                    />
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="How can we help?"
                    variant="outlined"
                    multiline
                    rows={4}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    fullWidth
                    variant="contained"
                    size="large"
                    sx={{
                      //   bgcolor: '#0066FF',
                      // bgcolor: "black",
                      // bgcolor: "#4294A6",
                      bgcolor: "#4d7990",
                      borderRadius: "8px",
                      textTransform: "none",
                      py: 1.5,
                    }}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>

              <Typography
                variant="body2"
                align="center"
                sx={{ mt: 2, color: "#4A4A4A" }}
              >
                By contacting us, you agree to our{" "}
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    color: "#4294A6",
                  }}
                >
                  Terms of service
                </Link>{" "}
                and{" "}
                <Link
                  href="#"
                  underline="hover"
                  sx={{
                    color: "#4294A6",
                  }}
                >
                  Privacy Policy
                </Link>
              </Typography>
            </StyledPaper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
