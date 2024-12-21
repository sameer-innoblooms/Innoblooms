'use client'

import { Box, Container, Grid, Typography, useTheme } from '@mui/material'
import { styled } from '@mui/material/styles'
import Image from 'next/image'

const StyledOverview = styled(Typography)(({ theme }) => ({
  color: '#8B3DFF',
  marginBottom: theme.spacing(2),
  fontWeight: 500,
}))

const StyledHeading = styled(Typography)(({ theme }) => ({
  color: '#4A4A4A',
  marginBottom: theme.spacing(3),
  fontWeight: 600,
  fontSize: '2.5rem',
  lineHeight: 1.2,
  [theme.breakpoints.down('md')]: {
    fontSize: '2rem',
  },
}))

const StyledSubheading = styled(Typography)(({ theme }) => ({
  color: '#666666',
  marginBottom: theme.spacing(2),
  fontSize: '1.25rem',
  fontWeight: 500,
}))

const StyledDescription = styled(Typography)(({ theme }) => ({
  color: '#666666',
  marginBottom: theme.spacing(4),
  lineHeight: 1.7,
}))

const ImageWrapper = styled(Box)(({  }) => ({
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '-20%',
    right: '-20%',
    width: '100%',
    height: '100%',
    background: 'linear-gradient(45deg, #FF6B6B 0%, #FFB84D 100%)',
    borderRadius: '50%',
    zIndex: -1,
  },
}))

export default function Overview() {
  // const theme = useTheme()
  // const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Box
      sx={{
        backgroundColor: '#FFFFFF',
        minHeight: '700px',
        display: 'flex',
        alignItems: 'center',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box>
              <StyledOverview variant="subtitle1">
                OVERVIEW
              </StyledOverview>
              <StyledHeading variant="h1">
              Empower Your Business with Innovative Software Services
              </StyledHeading>
              <StyledSubheading>
              Transform Your Business with Smart Software
              </StyledSubheading>
              <StyledDescription>
              Unlock your business's potential with our advanced software solutions. Create scalable, high-quality applications with us! At Moptra, we provide personalized software services designed to propel your business forward and ensure smooth operations.
              </StyledDescription>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <ImageWrapper>
              <Image
                src="/Business-consulting.jpg"
                alt="Responsive web application mockup"
                width={600}
                height={400}
                style={{
                  width: '100%',
                  height: 'auto',
                  maxWidth: '100%',
                  display: 'block',
                }}
                priority
              />
            </ImageWrapper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}

