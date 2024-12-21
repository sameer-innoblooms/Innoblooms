"use client";

import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Carousel from 'react-material-ui-carousel';

const carouselItems = [
  {
    image: "/InnoTrade.png?height=400&width=600",
    category: "CONSUMER PRODUCTS & SERVICES",
    flag: "/placeholder.svg?height=20&width=30",
    title: "InnoTrade - In house trading platform",
  },
  {
    image: "InnobloomsERP.png?height=400&width=600",
    category: "E-COMMERCE",
    flag: "/placeholder.svg?height=20&width=30",
    title: "InnobloomsERP - In house e-commerce platform",
  },
  {
    image: "/InnoTrac.png?height=400&width=600",
    category: "FINTECH",
    flag: "/placeholder.svg?height=20&width=30",
    title: "InnoTrac — Innovative peer-to-peer payment solution",
  }
];

export default function ProjectShowcase() {
  const [activeStep, setActiveStep] = useState(0);
  const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

  function scrollToTop() {
      if (!isBrowser()) return;
      window.scrollTo({ top: 1000, behavior: 'smooth' });
  }

  const ProgressBar = () => (
    <Box sx={{ 
      display: 'flex', 
      gap: '8px',
      width: '120px',
      mt: 2
    }}>
      {carouselItems.map((_, index) => (
        <Box
          key={index}
          sx={{
            height: '4px',
            flex: 1,
            borderRadius: '4px',
            bgcolor: index === activeStep ? '#6366F1' : 'rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s ease'
          }}
        />
      ))}
    </Box>
  );

  return (
    <Box sx={{ 
      bgcolor: '#000000', 
      // minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      py: 11
    }}>
      <Container maxWidth="xl" sx={{
        
      }}>
        <Grid container spacing={6} alignItems="center">
          {/* Left Section */}
          <Grid item xs={12} md={6}>
            <Box sx={{
              bgcolor: 'transparent',
              borderRadius: '28px',
              p: 4,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 20,
                left: 0,
                right: 0,
                bottom: 0,
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '28px',
                pointerEvents: 'none'
              }
            }}>
              <Typography variant="h1" sx={{
                color: 'white',
                fontSize: { xs: '48px', md: '64px', lg: '72px' },
                fontWeight: 700,
                lineHeight: 1.1,
                mb: 4
              }}>
                OUR<br />BEST<br />WORKS
              </Typography>
              
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, mt: 6 }}>
                <Box>
                  <Typography variant="h2" sx={{
                    color: 'white',
                    fontSize: { xs: '36px', md: '48px' },
                    fontWeight: 700,
                    lineHeight: 1
                  }}>
                    500+
                  </Typography>
                  <Typography sx={{
                    color: 'white',
                    opacity: 0.7,
                    fontSize: '14px'
                  }}>
                    PROJECTS<br />DONE
                  </Typography>
                </Box>

                <Button
                onClick={scrollToTop}
                  variant="contained"
                  endIcon={<KeyboardArrowDownIcon />}
                  sx={{
                    bgcolor: '#FFB800',
                    color: 'black',
                    borderRadius: '24px',
                    px: 3,
                    py: 1.5,
                    '&:hover': {
                      bgcolor: '#FFC835',
                    }
                  }}
                >
                  ALL CASES
                </Button>
              </Box>
            </Box>
          </Grid>

          {/* Right Section - Carousel */}
          <Grid item xs={12} md={6}
           sx={{
            mt:5
           }}>
            <Carousel
              animation="slide"
              
              // navButtonsAlwaysVisible
              indicators={false}
              interval={2100}
              
              onChange={(index: any) => setActiveStep(index)}
              navButtonsProps={{
                style: {
                  backgroundColor: 'rgba(255, 255, 255, 0.5)',
                  borderRadius: 0,
                  padding: '10px',
                  color: '#000',
                  // transition: 'background-color 10s ease'
                }
              }}
            >
              {carouselItems.map((item, index) => (
                <Card key={index} sx={{
                  bgcolor: 'white',
                  borderRadius: '28px',
                  overflow: 'hidden',
                  boxShadow: 'none'
                }}>
                  <CardMedia
                    component="img"
                    image={item.image}
                    alt={item.title}
                    sx={{
                      width: '100%',
                      height: '400px',
                      objectFit: 'fill',
                      overflow: 'hidden',
                    }}
                  />
                  <CardContent sx={{ p: 3 }}>
                    {/* <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                      <Typography variant="overline" sx={{ 
                        color: 'text.secondary',
                        letterSpacing: 1
                      }}>
                        {item.category}
                      </Typography>
                      <Image
                        src={item.flag}
                        alt="Country Flag"
                        // style={{ height: 20 }}
                        fill
                      />
                    </Box> */}
                    
                    <Typography variant="h5" sx={{
                      fontWeight: 600,
                      fontSize: { xs: '20px', md: '24px' },
                      mb: 2
                    }}>
                      {item.title}
                    </Typography>

                    <ProgressBar />
                  </CardContent>
                </Card>
              ))}
            </Carousel>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

