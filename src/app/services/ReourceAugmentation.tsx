'use client'
import React from 'react';
import Lottie from 'lottie-react';
import resource from '../lotties/resource.json'
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Paper,
  ThemeProvider
} from '@mui/material';
import { styled } from '@mui/material/styles';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import theme from './theme';
import { usePathname, useRouter } from 'next/navigation';



// Custom styled components
const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  backgroundColor: theme.palette.background.paper,
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const TechIcon = styled('img')({
  width: 60,
  height: 60,
  marginBottom: 16,
});

const ReourceAugmentation = () => {
  const pathname = usePathname();
  const router = useRouter();
  
  const technologies = [
    { name: 'React Native', icon: '/path-to-react-native-icon.svg' },
    { name: 'Swift', icon: '/path-to-swift-icon.svg' },
    { name: 'Kotlin', icon: '/path-to-kotlin-icon.svg' },
    { name: 'Flutter', icon: '/path-to-flutter-icon.svg' },
  ];

  const features = [
    'Flexibility:',
    'Cost-Efficiency',
    'Access to Expertise',
    'Accelerated Delivery',
  ];

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: 'background.default',
        //  minHeight: '100vh',
          py: 16 }}>
        <Container>
          <Grid container spacing={6}>
            <Grid item xs={12} md={6}>
              <Box mb={4}
              onClick={() => router.push("/services/resource-augmentation")}
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease", // Smooth transition for the scaling effect
                "&:hover": {
                  transform: "scale(1.1)", // Scale the text to 110% on hover
                },
              }}
              >
                {/* <Typography variant="overline" color="text.secondary" gutterBottom>
                  UN-PUT-DOWNABLE
                </Typography> */}
                <Typography variant="h2" color="primary" fontWeight="bold" gutterBottom>
                    Resource Augmentation
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" paragraph>
                In today's fast-paced business environment, having the right resources at the right time is crucial for success. Resource augmentation is a strategic approach that allows businesses to enhance their existing teams with skilled professionals on a temporary or project-specific basis. Our resource augmentation services are designed to help you achieve your business goals efficiently and effectively. Whether you need additional support for a short-term project or specialized skills for a complex task, we have the right professionals to meet your needs. This model offers several key benefits:.
              </Typography>
              <List>
                {features.map((feature, index) => (
                  <ListItem key={index} disableGutters>
                    <ListItemIcon>
                      <FiberManualRecordIcon color="primary" fontSize="small" />
                    </ListItemIcon>
                    <ListItemText 
                      primary={feature} 
                      primaryTypographyProps={{ color: 'primary' }}
                    />
                  </ListItem>
                ))}
              </List>
            </Grid>
            <Grid item xs={12} md={6}>
              <Grid container spacing={2}>
                {/* {technologies.map((tech, index) => (
                  <Grid item xs={6} key={index}>
                    <StyledPaper elevation={3}>
                      <TechIcon src={tech.icon} alt={tech.name} />
                      <Typography variant="subtitle1" color="text.secondary">
                        {tech.name}
                      </Typography>
                    </StyledPaper>
                  </Grid> ))} */}
                <Lottie animationData={resource} loop={true}/>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default ReourceAugmentation;