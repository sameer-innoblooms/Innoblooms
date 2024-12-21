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
} from "@mui/icons-material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/navigation";

const GradientBackground = styled(Box)(({  }) => ({
  // background: "linear-gradient(135deg, #000000 0%, #00001a 100%)",

  background: '#000000',
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

const StyledLink = styled(Link)(({  }) => ({
  color: "white",
  textDecoration: "none",
  "&:hover": {
    textDecoration: "underline",
  },
}));

export default function Footer() {
  const router = useRouter();

  return (
    <GradientBackground>
      {/* CTA Section */}
      <Container maxWidth="lg" sx={{ pt: 8, pb: 8 }}>
        <Box
          sx={{
            bgcolor: "linear-gradient(135deg, #000000 0%, #00001a 100%)",
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
            Let us know if there&apos;s an opportunity for us to build something
            awesome together.
          </Typography>
          <Button
            variant="contained"
            sx={{
              bgcolor: "rgba(255, 255, 255, 0.2)",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.3)" },
              px: 4,
              py: 1.5,
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
                src="/placeholder.svg"
                alt="Innoblooms"
                width={200}
                height={60}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Box>
            <Typography sx={{ mb: 3 }}>
              Innoblooms is a professional technology services company that
              offers partners all around the world a broad spectrum of business
              strategy, technology, marketing, and people services.
            </Typography>
            <Stack direction="row" spacing={1}>
               <Link href="https://www.facebook.com/people/Innoblooms-Info-Services-Pvt-Ltd/100095194770163/">             
              <IconButton sx={{ color: "white" }} aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
              </Link>
              <IconButton sx={{ color: "white" }} aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton sx={{ color: "white" }} aria-label="Facebook">
                <Facebook />
              </IconButton>
            </Stack>
            <Box sx={{ mt: 4 }}>
              <Image
                src="/placeholder.svg"
                alt="ISO 9001 Certified"
                width={100}
                height={100}
                style={{ filter: "brightness(0) invert(1)" }}
              />
            </Box>
          </Grid>

          {/* Solutions */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ mb: 3 }}>
              Commerce Solutions
            </Typography>
            <Stack spacing={2}>
              <StyledLink href="#">Business consulting</StyledLink>
              <StyledLink href="#"> Resource augmentation</StyledLink>
              <StyledLink href="#">Software services</StyledLink>
            </Stack>

            <Typography variant="h6" sx={{ mt: 4, mb: 3 }}>
              Other Solutions
            </Typography>
            <Stack spacing={2}>
              <StyledLink href="#">Mobile App Development</StyledLink>
              <StyledLink href="#">Web App Development</StyledLink>
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
                <Typography>+91 7252833134</Typography>
                <Typography>+91 8979799833</Typography>
              </Stack>
              <Stack direction="row" spacing={2} alignItems="center">
                <Email />
                <Typography>info@innoblooms.com</Typography>
              </Stack>
              <Stack direction="row" spacing={2}>
                <LocationOn sx={{ mt: 0.5 }} />
                <Box>
                  <Typography>
                    {" "}
                    C-47(SH-120, Sector 63 A, Noida, Chotpur, Uttar Pradesh
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
              © 2023 All Rights Reserved By Innoblooms Pvt. Ltd.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </GradientBackground>
  );
}
