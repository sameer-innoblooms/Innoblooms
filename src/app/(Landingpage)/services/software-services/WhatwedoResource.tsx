'use client'

import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { Cloud, Devices, Science } from '@mui/icons-material'

export default function WhatWeDoSoftware
() {
  const services = [
    {
      title: 'Custom Software Engineering',
      icon: <Science sx={{ fontSize: 64, color: '#6B2FB3' }} />,
      description: 'Develop bespoke software solutions tailored to your business requirements. Our scalable and robust applications drive efficiency and growth.'
    },
    {
      title: 'User-Centric Application Design',
      icon: <Cloud sx={{ fontSize: 64, color: '#6B2FB3' }} />,
      description: 'Create applications that prioritize user experience. Our designs focus on usability and functionality to ensure a seamless user journey.'
    },
    {
      title: 'Reliable Maintenance and Support',
      icon: <Devices sx={{ fontSize: 64, color: '#6B2FB3' }} />,
      description: 'Ensure your software stays up-to-date and efficient with our dedicated maintenance and support. We provide timely updates and solutions to any issues.'
    }
  ]

  return (
    <Box
      sx={{
        py: 8,
        background: 'linear-gradient(45deg, rgba(107,47,179,0.05) 0%, rgba(107,47,179,0.1) 100%)',
        backgroundImage: `
          linear-gradient(45deg, rgba(107,47,179,0.05) 0%, rgba(107,47,179,0.1) 100%),
          repeating-linear-gradient(45deg, transparent, transparent 2px, rgba(107,47,179,0.03) 2px, rgba(107,47,179,0.03) 3px)
        `,
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: '#333',
            fontSize: { xs: '2rem', md: '2.5rem' },
            fontWeight: 600,
          }}
        >
Innovative Software Services        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '16px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                  overflow: 'hidden',
                  border: '1px solid rgba(107,47,179,0.1)',
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    pt: 4,
                    pb: 2,
                    bgcolor: 'black'
                  }}
                >
                  {service.icon}
                </Box>
                <Box
                  sx={{
                    // bgcolor: '#6B2FB3',
                    py: 2,
                    px: 3,
                    bgcolor: 'black'

                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'white',
                      textAlign: 'center',
                      fontWeight: 500,
                      
                    }}
                  >
                    {service.title}
                  </Typography>
                </Box>
                <CardContent
                  sx={{
                    flexGrow: 1,
                    pt: 3,
                  }}
                >
                  <Typography
                    sx={{
                      color: '#666',
                      textAlign: 'center',
                      lineHeight: 1.6,
                    }}
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

