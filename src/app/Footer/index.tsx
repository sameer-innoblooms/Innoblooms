"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import {
  Facebook,
  LinkedIn,
  Phone,
  Email,
  LocationOn,
  AccessTime,
  Twitter,
  Message,
  Instagram,
  X,
  WhatsApp,
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { ArrowForward as ArrowForwardIcon } from "@mui/icons-material";

const GradientBackground = styled(Box)(({ }) => ({
  // background: "linear-gradient(135deg, #000000 0%, #00001a 100%)",

  background: "#000000",
  color: "white",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    // top: "-50px",
    left: 0,
    right: 0,
    // height: "50px",
    background: "white",
    // clipPath: "ellipse(50% 100% at 50% 100%)",
  },
}));

const StyledLink = styled(Typography)(({ }) => ({
  color: "white",
  textDecoration: "none",
  // "&:hover": {
  //   textDecoration: "underline",
  // },
}));

export default function Footer() {
  const router = useRouter();

  return (
    <GradientBackground>
      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ pt: 8, pb: 8 }}>
        <Box
          sx={{
            // bgcolor: "linear-gradient(135deg, #000000 0%, #00001a 100%)",
            borderRadius: 4,
            p: 4,
            mb: 8,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            sx={{ color: "white", maxWidth: 600 }}
          >
            <Box
              sx={{
                background: "linear-gradient(to right, #476884, #35A7C6)",
                // background: "linear-gradient(to right , #4294a5, #48c5a8);",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              Let us know
            </Box>{" "}
            if there&apos;s an opportunity for us to build something awesome
            together.
          </Typography>
          <Button
            variant="contained"
            endIcon={<ArrowForwardIcon />}
            sx={{
              width: { xs: "130px", sm: "130px", md: "185px" },
              height: { xs: "35px", sm: "45px", md: "50px" },
              minWidth: "100px",
              bgcolor: "#4294a5",
              // bgcolor: "#4d7990",
              // bgcolor: "#FFB247",
              color: "black",
              // fontWeight: "bold",
              fontWeight: "16px",
              borderRadius: "50px",
              fontSize: { xs: "11px", sm: "13px", md: "15px" },
              ml: { xs: 1, sm: 2 },
              "&:hover": {
                color: "black",
                backgroundColor: "white",
              },
              "&:hover .MuiSvgIcon-root": {
                transform: "translateX(4px)",
                transition: "transform 0.2s",
              },

              px: 1,
              py: 1.5,
              // fontFamily: "Inter, sans-serif",
            }}
            onClick={() => router.push("/contact")}
          >
            Get In Touch
          </Button>
        </Box>

        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Image
                src="/Innoblooms-logo.png"
                alt="Innoblooms"
                width={200}
                height={60}
              // layout="responsive"
              // style={{ filter: "brightness(0) invert(1)" }}
              />
            </Box>
            <Typography sx={{ mb: 3 }}>
              Innoblooms is a professional technology services company that
              offers partners all around the world a broad spectrum of business
              strategy, technology, marketing, and people services.
            </Typography>
            <Stack direction="row" spacing={1}>
              <Link href="https://in.linkedin.com/company/innoblooms-info-services-pvt-ltd">
                <IconButton
                  sx={{
                    color: "white",
                    ":hover": {
                      color: "#4294A5",
                    },
                  }}
                  aria-label="LinkedIn"
                >
                  <LinkedIn />
                </IconButton>
              </Link>
              <Link href="https://x.com/services21256">
                <IconButton
                  sx={{
                    color: "white",
                    ":hover": {
                      color: "#4294A5",
                    },
                  }}
                  aria-label="Facebook"
                >
                  <X />
                </IconButton>
              </Link>
              <Link href="https://www.facebook.com/people/Innoblooms-Info-Services-Pvt-Ltd/100095194770163/">
                <IconButton
                  sx={{
                    color: "white",
                    ":hover": {
                      color: "#4294A5",
                    },
                  }}
                  aria-label="Facebook"
                >
                  <Facebook />
                </IconButton>
              </Link>
              <Link href="https://www.instagram.com/innoblooms_info/">
                <IconButton
                  sx={{
                    color: "white",
                    ":hover": {
                      color: "#4294A5",
                    },
                  }}
                  aria-label="Facebook"
                >
                  <Instagram />
                </IconButton>
              </Link>
              <Link href="https://api.whatsapp.com/send?phone=917252833134">
                <IconButton
                  sx={{
                    color: "white",
                    ":hover": {
                      color: "#4294A5",
                    },
                  }}
                  aria-label="Facebook"
                >
                  <WhatsApp />
                </IconButton>
              </Link>
            </Stack>
            <Box sx={{ mt: 4 }}>
              <Image
                src="/ISO-9001-certified.png"
                alt="ISO 9001 Certified"
                width={50}
                height={50}
              // style={{ filter: "brightness(0) invert(1)" }}
              />
            </Box>
          </Grid>

          {/* Solutions */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Commerce Solutions
            </Typography>
            <Stack spacing={2}>
              {/* <StyledLink href="#">Business consulting</StyledLink>
              <StyledLink href="#"> Resource augmentation</StyledLink>
              <StyledLink href="#">Software services</StyledLink> */}
              <StyledLink>Business consulting</StyledLink>
              <StyledLink> Resource augmentation</StyledLink>
              <StyledLink>Software services</StyledLink>
            </Stack>

            <Typography variant="h6" sx={{ mt: 4, mb: 3 }}>
              Other Solutions
            </Typography>
            <Stack spacing={2}>
              <StyledLink>Mobile App Development</StyledLink>
              <StyledLink>Web App Development</StyledLink>
            </Stack>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Contact Info
            </Typography>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2} alignItems="center">
                <Phone />
                <Typography><a href="tel: +91 7252833134">
                  +91 7252833134
                </a></Typography>
                <Typography><a href="tel: +91 8979799833">
                  +91 8979799833
                </a></Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email />
                <Typography sx={{
                  ":hover": {
                    textDecoration: 'underline'
                  }
                }}>
                  <a href="mailto:info@innoblooms.com">info@innoblooms.com</a>
                </Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <LocationOn sx={{ mt: 0.5 }} />
                <Box>
                  <Typography>
                    {" "}
                    C-47(SH-120), Sector 63 A, Noida, Chotpur, Uttar Pradesh
                    201307
                  </Typography>
                  {/* <Typography sx={{ mt: 2 }}>US Office: 17075 TESORO DR SAN DIEGO, CA 92128</Typography> */}
                </Box>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <AccessTime />
                <Typography>Opening Hours: 10:00 - 18:00</Typography>
              </Stack>
            </Stack>
          </Grid>
          <Grid item xs={12}>
            <Typography
              align="center"
              sx={{
                mt: 4,
                pt: 4,
                borderTop: "1px solid grey",
              }}
            >
              © 2024 All Rights Reserved By Innoblooms Info Services Pvt. Ltd.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </GradientBackground>
  );
}
