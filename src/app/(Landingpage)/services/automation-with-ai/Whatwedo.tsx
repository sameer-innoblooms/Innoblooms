'use client'

import { Box, Card, CardContent, Container, Grid, Typography } from '@mui/material'
import { Cloud, Devices, Science } from '@mui/icons-material'

export default function WhatWeDoAutomation
() {
  const services = [
    {
      title: 'Intelligent Process Automation',
      icon: <Science sx={{ fontSize: 64, color: '#6B2FB3' }} />,
      description: 'Leverage AI to transform raw data into actionable insights. Our AI-powered data analysis tools help you make informed decisions, identify trends, and predict future outcomes, giving you a competitive edge.'
    },
    {
      title: 'AI-Powered Data Analysis',
      icon: <Cloud sx={{ fontSize: 64, color: '#6B2FB3' }} />,
      description: ' A Human Resources Consultant initiates and leads HR programs and projects, conducts research to identify issues, provides advice and recommendations, formulates strategic plans, and assists in recruitment, training, and management of personnel.'
    },
    {
      title: 'Smart Customer Engagement',
      icon: <Devices sx={{ fontSize: 64, color: '#6B2FB3' }} />,
      description: 'Enhance customer experience with AI-driven solutions that provide personalized interactions and support. From chatbots to recommendation systems, our AI tools ensure your customers receive timely and relevant assistance.'
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
Comprehensive AI Automation Solutions        </Typography>
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

