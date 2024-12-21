'use client'
import React from 'react';
import Lottie from 'lottie-react';
import automation from '../lotties/automation.json'
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

const AutomationInAi = () => {

  const pathname = usePathname();
  const router = useRouter();

  const technologies = [
    { name: 'React Native', icon: '/path-to-react-native-icon.svg' },
    { name: 'Swift', icon: '/path-to-swift-icon.svg' },
    { name: 'Kotlin', icon: '/path-to-kotlin-icon.svg' },
    { name: 'Flutter', icon: '/path-to-flutter-icon.svg' },
  ];

  const features = [
    'Increased Efficiency',
    'Improved Accuracy',
    'Scalability',
    'Enhanced Decision-Making',
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
              onClick={() => router.push("/services/automation-with-ai")}
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
                    Automation in AI
                </Typography>
              </Box>
              <Typography variant="body1" color="text.secondary" paragraph>
              Artificial Intelligence (AI) is revolutionizing the way businesses operate by automating complex tasks and processes. Automation in AI leverages advanced algorithms and machine learning models to perform tasks that traditionally required human intervention. Our AI automation solutions are designed to help you streamline operations, improve productivity, and achieve your business goals. Whether you're looking to automate customer service, data analysis, or any other process, our AI technologies can provide the efficiency and accuracy you need Here are some key benefits of AI-driven automation.
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
                <Lottie animationData={automation} loop={true}/>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default AutomationInAi;