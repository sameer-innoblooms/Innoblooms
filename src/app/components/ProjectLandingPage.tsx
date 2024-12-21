"use client";

import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent,
  CardMedia,
} from '@mui/material';

export default function ProjectLandingPage() {
  const projects = [
    {
      title: "InnoTrac — Innovative peer-to-peer payment solution",
      category: "PAYMENT & TRANSACTION",
      image: "/InnobloomsERP.png?height=600&width=800",
      backgroundColor: "#CC0000",
      // flag: "🇺🇸"
    },
    {
      title: "InnobloomsERP - In house e-commerce platform",
      category: "E-COMMERCE",
      image: "/InnoTrac.png?height=600&width=800",
      backgroundColor: "#004D40",
      // flag: "🇺🇸"
    },
    {
      title: "InnoTrac — Innovative peer-to-peer payment solution",
      category: "PAYMENT & TRANSACTION",
      image: "/InnobloomsERP.png?height=600&width=800",
      backgroundColor: "#004D40",
      // flag: "🇺🇸"
    },
    {
      title: "InnobloomsERP - In house e-commerce platform",
      category: "E-COMMERCE",
      image: "/InnoTrac.png?height=600&width=800",
      backgroundColor: "#004D40",
      // flag: "🇺🇸"
    }
  ];

  return (
    <Box sx={{ 
      // bgcolor: '#000014',
      bgcolor: '#000000',
      minHeight: '100vh',
      py: { xs: 4, md: 8 },
    }}>
      <Container maxWidth="xl">
        <Typography
          variant="h1"
          sx={{
            color: 'white',
            fontSize: { xs: '32px', sm: '40px', md: '48px', lg: '56px' },
            fontWeight: 700,
            textAlign: 'center',
            maxWidth: '1200px',
            mx: 'auto',
            mb: { xs: 4, md: 8 },
            lineHeight: 1.2,
          }}
        >
          We&apos;ve helped over 350 firms reach their full potential, and we&apos;re happy to do the same for you! Find out how our skills can contribute to your success.
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Card
                sx={{
                  bgcolor: project.backgroundColor,
                  borderRadius: '28px',
                  overflow: 'hidden',
                  height: '100%',
                  position: 'relative',
                  transition: 'transform 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: 1,
                    mb: 2 
                  }}>
                    <Typography
                      variant="overline"
                      sx={{
                        color: 'rgba(255, 255, 255, 0.8)',
                        fontWeight: 500,
                        letterSpacing: 1,
                      }}
                    >
                      {project.category}
                    </Typography>
                    {/* <Typography
                      sx={{
                        fontSize: '20px',
                        lineHeight: 1,
                      }}
                    >
                      {project.flag}
                    </Typography> */}
                  </Box>

                  <Typography
                    variant="h4"
                    sx={{
                      color: 'white',
                      fontSize: { xs: '24px', md: '28px' },
                      fontWeight: 600,
                      mb: 3,
                    }}
                  >
                    {project.title}
                  </Typography>

                  <Box
                    sx={{
                      position: 'relative',
                      width: '100%',
                      pt: '56.25%', // 16:9 aspect ratio
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    }}
                  >
                    <CardMedia
                      component="img"
                      image={project.image}
                      alt={project.title}
                      sx={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'fill',
                      }}
                    />
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

