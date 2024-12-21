"use client"

import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography, useMediaQuery, useTheme } from "@mui/material"
import Slider from "react-slick"
import { ChevronLeft, ChevronRight } from 'lucide-react'


interface ClientCardDetails {
  imag: string
  heading1: string
  heading2?: string
  paragraph: string
  text: string
}

interface SliderSettings {
  dots: boolean
  infinite: boolean
  speed: number
  slidesToShow: number
  slidesToScroll: number
  autoplay: boolean
  autoplaySpeed: number
  pauseOnHover: boolean
  responsive: any[]
}

const ClientsCard: React.FC<{ cardDetails: ClientCardDetails }> = ({ cardDetails }) => {
  return (
    <Box sx={{ padding: 1 }}>
      <Card
        sx={{
          width: "100%",
          minHeight: "390px",
          borderRadius: "16px",
          background: "linear-gradient(#121028, #4E31144D)",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <CardMedia
            sx={{
              height: "100px",
              width: "100px",
              borderRadius: "50%",
            }}
            image={cardDetails.imag}
          />
        </Box>
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography variant="body1" component="div" sx={{ fontWeight: "bold" }}>
            {cardDetails.heading1}
          </Typography>
          {cardDetails.heading2 && (
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {cardDetails.heading2}
            </Typography>
          )}
          <Typography variant="subtitle1" sx={{ color: "text.secondary", mt: 2, mb: 2 }}>
            {cardDetails.paragraph}
          </Typography>
          <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
            {cardDetails.text}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  )
}

const ClientsSay: React.FC = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const clients: ClientCardDetails[] = [
    {
      imag: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D",
      heading1: "Streamlined our processes",
      heading2: "and saved us time!",
      paragraph: "Innoblooms automated key processes, boosting our efficiency by 40%. Their AI solutions saved us time and allowed us to focus on growth",
      text: "– Sarah M., Operations Manager, TechCo",
    },
    {
      imag: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      heading1: "Helped us scale fast!",
      paragraph: "With Innoblooms' solutions, we were able to scale our operations rapidly. Their AI-driven approach helped us manage growth efficiently.",
      text: "– John D., CEO, StartupX",
    },
    {
      imag: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      heading1: "Transformed our customer service",
      paragraph: "Innoblooms' AI chatbot revolutionized our customer support. We've seen a 50% reduction in response times and improved customer satisfaction.",
      text: "– Emily R., Customer Success Manager, ServicePro",
    },
    {
      imag: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
      heading1: "Boosted our ROI significantly",
      paragraph: "The AI-driven marketing solutions from Innoblooms increased our conversion rates by 35%. Our ROI has never been better!",
      text: "– Michael T., Marketing Director, E-commerce Giant",
    },
  ]

  const CustomArrow = ({ direction, onClick }: { direction: 'left' | 'right', onClick?: () => void }) => (
    <Box
      onClick={onClick}
      sx={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 1,
        cursor: 'pointer',
        [direction]: isMobile ? '5px' : '-25px',
        display: 'block',
      }}
    >
      {direction === 'left' ? (
        <ChevronLeft size={24} color={theme.palette.primary.main} />
      ) : (
        <ChevronRight size={24} color={theme.palette.primary.main} />
      )}
    </Box>
  )

  const settings: SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: theme.breakpoints.values.md,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <Box sx={{ mx: { xs: 2, sm: 4 }, my: 4 }}>
      <Typography
        variant="h6"
        sx={{
          textDecoration: "underline",
          textAlign: "center",
          // color:'rgb(102, 102, 232)',
          color:'black',
          fontWeight: "bold",
          mb: 2
        }}
      >
        What Our Clients Say
      </Typography>
      <Box
        sx={{
          textAlign: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2, color: 'black' }}>
          At Innoblooms, we pride ourselves on delivering results that drive success.
        </Typography>
        <Typography variant="body1">
          Here&apos;s what some of our clients have to say about working with us:
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          width: "100%",
          maxWidth: "1600px",
          mx: "auto",
        }}
      >
        <Slider 
          {...settings} 
          prevArrow={<CustomArrow direction="left" />}
          nextArrow={<CustomArrow direction="right" />}
        >
          {clients.map((client, index) => (
            <ClientsCard key={index} cardDetails={client} />
          ))}
        </Slider>
      </Box>
    </Box>
  )
}

export default ClientsSay

