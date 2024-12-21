import { Box, Grid, Typography, Button } from "@mui/material";
import { useRouter } from 'next/navigation'
import React from "react";

const Services = () => {
  const router = useRouter()
  return (
    <div>
      <Box>
        <Typography
          variant="h5"
          sx={{
            textDecoration: "underline",
            textAlign: "center",
            // color: "#a6a5b1",
            color: 'black',
            mt: 5,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Our Services
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5" sx={{ textAlign: "center", mt: 2, mb: 2, color: 'black' }}>
          AI automation, consulting, software solutions, and resource
          augmentation.
        </Typography>
      </Box>
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{ 
          px: { xs: 2, sm: 4, md: 6 },
          justifyContent: "center" 
        }}
      >
        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3}
          sx={{ 
            mb: { xs: 2, sm: 3 } 
          }}
        >
          <Box
            sx={{
              display:'flex',
              flexDirection:'column',
              border: "0.5px solid #ccc",
              borderRadius: 4,
              backgroundImage:
                "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0HBQhqTWYHgeWqNH4t12K_ULKEI4qkpsBQ70d5lr9SFxyYci2ykV7GBtnNprabaI2HC0&usqp=CAU')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "250px", sm: "300px", md: "350px" },
              // display: "flex",
              alignItems: "center",
              justifyContent:'flex-end',
              p: 3,
              "&:hover  .hiddenContent": {
                transition:'0.9s ease-in-out',
                display:'flex',
              },
              "&:hover": {
                transition:'0.5s ease',
                transform: 'Scale(1.05)',
                backgroundImage: 'none',
                backgroundColor: 'black'
              } 

            }}
          
          >
            <Typography
              variant="h6" marginLeft='-8px'
              sx={{
                fontWeight: "bold",
                color: "white",
              }}>Business Consulting
            </Typography>

            <Box className="hiddenContent"
              sx={{
                opacity: "1",
                display:'none',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',

                "&:hover button": {
                border:'1px solid black',
                transition:'0.3s ease',
                transform: 'Scale(1.05) '
              }

              }}
              >
              
              <Typography variant="subtitle1" textAlign="center"
              sx={{
              color:"white",
              lineHeight:'1.1',
              marginBottom:'50px',
              textShadow:'0px 0px 2px rgb(5, 5, 4)',
              }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor debitis sint dicta ullam alias eveniet, maiores magnam nobis soluta.
              </Typography>
              ,
              <Button variant="contained" onClick={() => router.push('/services/business-consulting')}
               sx={{
                background:'white',
                color:'black',
                border:'1px solid grey',
                width:'75%',
                padding:'3px 5px',
                borderRadius:'5px',
                textAlign:'center'
              }}
              >
                View More
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3}
          sx={{ 
            mb: { xs: 2, sm: 3 } 
          }}
        >
          <Box
            sx={{
              display:'flex',
              flexDirection:'column',
              border: "0.5px solid #ccc",
              borderRadius: 4,
              backgroundImage:"url('https://5.imimg.com/data5/CN/HB/GLADMIN-36236926/consulting-service-500x500.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "250px", sm: "300px", md: "350px" },
              // display: "flex",
              alignItems: "center",
              justifyContent:'flex-end',
              p: 3,
              "&:hover  .hiddenContent": {
                transition:'0.3s ease',
                display:'flex',
              },
              "&:hover": {
                transition:'0.5s ease',
                transform: 'Scale(1.05)',
                backgroundImage:"none",
                background:'black'
              } 

            }}
          
          >
            <Typography
              variant="h6" marginLeft='-8px'
              sx={{
                fontWeight: "bold",
                color: "white",
                textShadow:'1px 1px 10px black',
              }}>Resource Augmentation
            </Typography>

            <Box className="hiddenContent"
              sx={{
                opacity: "1",
                display:'none',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',

                "&:hover button": {
                border:'1px solid black',
                background:'white',
                transition:'0.3s ease',
                transform: 'Scale(1.05) '
              }

              }}
              >
              
              <Typography variant="subtitle1" textAlign="center"
              sx={{
              color:"white",
              lineHeight:'1.1',
              marginBottom:'50px',
              textShadow:'1px 1px 10px black',
              }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor debitis sint dicta ullam alias eveniet, maiores magnam nobis soluta.
              </Typography>
              ,
              <Button variant="contained" onClick={() => router.push('/services/resource-augmentation')}
               sx={{
                background:'white',
                color:'black',
                border:'2px solid grey',
                width:'75%',
                padding:'3px 5px',
                borderRadius:'5px',
                textAlign:'center'
              }}
              >
                View More
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3}
          sx={{ 
            mb: { xs: 2, sm: 3 } 
          }}
        >
          <Box
            sx={{
              display:'flex',
              flexDirection:'column',
              border: "0.5px solid #ccc",
              borderRadius: 4,
              backgroundImage:"url('https://i.gifer.com/origin/5a/5ab98406cc6c8fbba9ddb014c2bcdb80_w200.gif')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "250px", sm: "300px", md: "350px" },
              // display: "flex",
              alignItems: "center",
              justifyContent:'flex-end',
              p: 3,
              "&:hover  .hiddenContent": {
                transition:'0.3s ease',
                display:'flex',
              },
              "&:hover": {
                transition:'0.5s ease',
                transform: 'Scale(1.05) ',
                backgroundImage: 'none',
                backgroundColor: 'black'
              } 

            }}
          
          >
            <Typography
              variant="h6" marginLeft='-8px'
              sx={{
                textShadow:'1',
                fontWeight: "bold",
                color: "white",
              }}>Automation with AI
            </Typography>

            <Box className="hiddenContent"
              sx={{
                opacity: "1",
                display:'none',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',

                "&:hover button": {
                border:'1px solid black',
                background:'white',
                transition:'0.3s ease',
                transform: 'Scale(1.05) '
              }

              }}
              >
              
              <Typography variant="subtitle1" textAlign="center"
              sx={{
              color:"white",
              lineHeight:'1.1',
              marginBottom:'50px'
              }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor debitis sint dicta ullam alias eveniet, maiores magnam nobis soluta.
              </Typography>
              ,
              <Button variant="contained" onClick={() => router.push('/services/automation-with-ai')}
               sx={{
                background:'white',
                color:'black',
                border:'2px solid grey',
                width:'75%',
                padding:'3px 5px',
                borderRadius:'5px',
                textAlign:'center'
              }}
              >
                View More
              </Button>
            </Box>
          </Box>
        </Grid>

        <Grid 
          item 
          xs={12} 
          sm={6} 
          md={3}
          sx={{ 
            mb: { xs: 2, sm: 3 } 
          }}
        >
          <Box
            sx={{
              display:'flex',
              flexDirection:'column',
              border: "0.5px solid #ccc",
              borderRadius: 4,
              backgroundImage:"url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfcbTOtAiENq2m9sVfBJH0GzBY3_WYViSNRA&s')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              height: { xs: "250px", sm: "300px", md: "350px" },
              // display: "flex",
              alignItems: "center",
              justifyContent:'flex-end',
              p: 3,
              "&:hover  .hiddenContent": {
                transition:'0.3s ease',
                display:'flex',
              },
              "&:hover": {
                transition:'0.5s ease',
                transform: 'Scale(1.05)',
                backgroundImage: 'none',
                backgroundColor: 'black'
              } 

            }}
          
          >
            <Typography
              variant="h6" marginLeft='-8px'
              sx={{
                fontWeight: "bold",
                color: "white",
              }}>Software Services
            </Typography>

            <Box className="hiddenContent"
              sx={{
                opacity: "1",
                display:'none',
                alignItems:'center',
                justifyContent:'center',
                flexDirection:'column',

                "&:hover button": {
                border:'1px solid black',
                background:'white',
                transition:'0.3s ease',
                transform: 'Scale(1.05) '
              }

              }}
              >
              
              <Typography variant="subtitle1" textAlign="center"
              sx={{
              color:"white",
              lineHeight:'1.1',
              marginBottom:'50px'
              }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor debitis sint dicta ullam alias eveniet, maiores magnam nobis soluta.
              </Typography>
              ,
              <Button variant="contained" onClick={() => router.push('/services/software-services')}
               sx={{
                background:'white',
                color:'black',
                border:'2px solid grey',
                width:'75%',
                padding:'3px 5px',
                borderRadius:'5px',
                textAlign:'center'
              }}
              >
                View More
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Services;