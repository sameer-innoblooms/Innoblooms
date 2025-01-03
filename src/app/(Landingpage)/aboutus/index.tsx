'use client'

import { Card, CardContent, Typography, Box, Container } from '@mui/material'

export default function WorkingProcess() {
  const processes = [
    {
      number: '01',
      title: 'Ideation',
      content: 'Everything starts with a plan, we at moptra help your ideas flourish.',
      color: '#fff1f2'
    },
    {
      number: '02',
      title: 'Planning',
      content: 'A well planned job is a work half completed- our strength lies in planning the project with perfection.',
      color: '#f3e8ff'
    },
    {
      number: '03',
      title: 'Execution',
      content: 'This is where our core strength comes in - 30+ years of combined technical and project management expertise executes your idea to life',
      color: '#E5EDFF'
    },
    {
      number: '04',
      title: 'Delivery',
      content: "Timely Delivery or take your money back - that's our motto! We are here to make sure we as partners deliver solutions to your business that helps you sky rocket",
      color: '#F3F4F6'
    }
  ]

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          variant="overline" 
          sx={{
            //  color: '#663399',
            // color: 'black',
             fontWeight: 500, fontSize: 18 }}
        >
          WORKING PROCESS
        </Typography>
        <Typography 
          variant="h3" 
          sx={{ 
            color: '#333',
            mt: 1,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            maxWidth: '800px',
            mx: 'auto'
          }}
        >
          How we work for customers
          to prepare on the requirement
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 4,
          position: 'relative',
          '&::after': {
            content: '""',
            position: 'absolute',
            top: { xs: 0, md: '50%' },
            left: '10%',
            right: '10%',
            height: { xs: '100%', md: '2px' },
            width: { xs: '2px', md: '80%' },
            backgroundColor: '#E0E0E0',
            zIndex: 0,
            display: { xs: 'none', md: 'block' }
          }
        }}
      >
        {processes.map((process) => (
          <Card
          // elevation={10}
            key={process.number}
            sx={{
  
              boxShadow: 1,
              flex: 1,
              minHeight: 280,
              backgroundColor: process.color,
              color: process.color === '#663399' ? '#FFFFFF' : 'inherit',
              // boxShadow: 'none',
              border: '1px solid #E0E0E0',
              borderRadius: 2,
              position: 'relative',
              zIndex: 1,
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-8px)'
              }
            }}
          >
            <CardContent sx={{ p: 3, height: '100%' }}>
              <Typography
                variant="h6"
                component="div"
                sx={{
                  boxShadow: 1,
                  backgroundColor: '#083344',
                  color: '#FFFFFF',
                  // color: '#0000000',
                  width: 'fit-content',
                  px: 3,
                  py: 1,
                  borderRadius: 1,
                  mb: 2
                }}
              >
                {process.number}
              </Typography>
              <Typography
                variant="h5"
                sx={{
                  mb: 2,
                  fontWeight: 600
                }}
              >
                {process.title}
              </Typography>
              <Typography>
                {process.content}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Container>
  )
}

