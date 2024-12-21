 import { Box, Typography } from "@mui/material";
import React from "react";
import Slider from "react-slick";
import Partners from "./Partners";
interface SliderSettings {
  dots: boolean;
  infinite: boolean;
  speed: number;
  slidesToShow: number;
  slidesToScroll: number;
  initialSlide: number;
  responsive: any;
  autoplay:boolean;
  autoplaySpeed:number;
  cssEase:any;
  
}


function SampleNextArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props:any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

const OurPartners: React.FC = () => {
  const partnerDetails = [
    {
      imag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkj6H2_50pB8bmlu2kpvxFgFjbJNCLaBMn1A&s'
    },
    {
      imag: "https://www.twmg.com.au/kentico-bronze-partner.png",
    },
    {
      imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCq8TE4WX-65fYsT3azz5pNfvG2hZhuJ1c6PONybdthfGaJq6jJLlaKM7UNSB_JAVu3O4&usqp=CAU",
    },
    {
      imag: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSApNBbvV9oNf4-cdTCczXURADnv9liDNzKHA&s",
    },
    {
      imag: "https://blog.markergroupe.com/images/2024/07/amazon-fba-logo-feature.jpg",
    },
    {
      imag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq2p-6RxAhZyZj1T5r2S6ZsJffhf2n22arGw&s'
    },
    
     {
        imag:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnsTnxapHtwI7ceGoU1x3doz9Hh67o6ZEXIA&s'
    } ,
    {
      imag:'https://static.vecteezy.com/system/resources/previews/020/040/714/non_2x/team-community-partners-logo-template-social-network-corporate-branding-identity-free-vector.jpg'
    }
   
    
  ];
  //@ts-expect-error : should expect a string
  const settings: SliderSettings = {
 
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 500,
    cssEase: "linear",
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />

  };

  return (
    <Box sx={{boxShadow:4,m:4 , 
      height:"100%",
      width:"1600px",
      margin:"auto",
      position: "relative",
    }}>
      <Box>
        <Typography
          variant="h5"
          sx={{
            textDecoration: "underline",
            textAlign: "center",
            // color: "#2F3974",
            color: 'black',
            mt: 10,
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Our Partners
        </Typography>
      </Box>

      <Box sx={{ mt: 5, mb: 5,p:3 }}>
          <Slider {...settings}
          >
            {partnerDetails.map((item, index) => {
              return (
                <Box key={index}>
                  <Partners partnerDetails={item} />
                </Box>
              );
            })}
          </Slider>
       
      </Box>
    </Box>
  );
};

export default OurPartners; 


