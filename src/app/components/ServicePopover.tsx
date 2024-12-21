"use client";
// import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';
// import Link from 'next/link';
// import { usePathname, useRouter } from 'next/navigation';

// const ServiceSubcategories = [
//   {
//     category: 'Web Development',
//     subcategories: [
//       { text: 'Frontend Development', href: '/services/frontend' },
//       { text: 'Backend Development', href: '/services/backend' },
//       { text: 'Full Stack Solutions', href: '/services/fullstack' }
//     ]
//   },
//   {
//     category: 'Digital Marketing',
//     subcategories: [
//       { text: 'SEO Optimization', href: '/services/seo' },
//       { text: 'Social Media Marketing', href: '/services/social-media' },
//       { text: 'Content Marketing', href: '/services/content-marketing' }
//     ]
//   },
//   {
//     category: 'Cloud Solutions',
//     subcategories: [
//       { text: 'Cloud Migration', href: '/services/cloud-migration' },
//       { text: 'Cloud Management', href: '/services/cloud-management' },
//       { text: 'Cloud Security', href: '/services/cloud-security' }
//     ]
//   }
// ];

// const ServicesDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter()
//   const pathname = usePathname()

//   return (
//     <Box
//       onMouseEnter={() => setIsOpen(true)}
//       onMouseLeave={() => setIsOpen(false)}
//       sx={{ position: 'relative' }}
//       onClick = {()=> router.push('/services')}
//     >
//       <Typography
//         variant="h6"
//         color="white"
//         component="div"
//         sx={{
//           px: 4,
//           py: 3,
//           fontSize: { xs: "16px", sm: "18px" },
//           cursor: 'pointer',
//           fontWeight: '10px',
//           textDecoration: pathname === '/services' ? "underline" : "",
//         }}
//       >
//         Services
//       </Typography>

//       {isOpen && (
//         <Box
//           sx={{
//             position: 'absolute',
//             top: '100%',
//             left: 0,
//             width: '300px',
//             bgcolor: 'white',
//             boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
//             borderRadius: '8px',
//             p: 2,
//             zIndex: 1000,
//           }}
//         >
//           {ServiceSubcategories.map((serviceGroup) => (
//             <Box key={serviceGroup.category} sx={{ mb: 2 }}>
//               <Typography
//                 variant="subtitle1"
//                 sx={{
//                   fontWeight: 'bold',
//                   color: 'black',
//                   mb: 1,
//                   borderBottom: '1px solid #eee'
//                 }}
//               >
//                 {serviceGroup.category}
//               </Typography>
//               {serviceGroup.subcategories.map((subcat) => (
//                 <Link
//                   key={subcat.text}
//                   href={subcat.href}
//                   passHref
//                 >
//                   <Typography
//                     sx={{
//                       color: 'black',
//                       p: 1,
//                       '&:hover': {
//                         bgcolor: '#f0f0f0',
//                         borderRadius: '4px'
//                       }
//                     }}
//                   >
//                     {subcat.text}
//                   </Typography>
//                 </Link>
//               ))}
//             </Box>
//           ))}
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default ServicesDropdown;

"use client";
import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const ServiceSubcategories = [
  {
    category: "BUSINESS CONSULTING",
    description:
      "Streamline operations, boost efficiency, and unlock growth with cutting-edge AI solutions tailored to your needs.",

  },
  {
    category: "AUTOMATION WITH AI",
    description:
      "Streamline operations, boost efficiency, and unlock growth with cutting-edge AI solutions tailored to your needs.",

  },
  {
    category: "RESOURCE AUGMENTATION",
    description:
      "Streamline operations, boost efficiency, and unlock growth with cutting-edge AI solutions tailored to your needs.",

  },
  {
    category: "SOFTWARE SERVICES",
    description:
      "Streamline operations, boost efficiency, and unlock growth with cutting-edge AI solutions tailored to your needs.",

  },
];

const ServicesDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Box
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      sx={{ position: "static" }}
    >
      <Typography
        variant="h6"
        color="black"
        component="div"
        // onClick={() => router.push("/services")}
        sx={{
          // color: "white",
          px: 4,
          py: 3,
          fontSize: { xs: "16px", sm: "18px" },
          cursor: "pointer",
          fontWeight: 500,
          // borderBottom: pathname === "/services" ? "2px solid white" : "none",
          borderBottom: pathname.startsWith("/services") ? "2px solid #FFB247" : "none",
          color: pathname.startsWith("/services") ? " #FFB247" : "none",

          ":hover": {
            // borderBottom: "2px solid #FFB247",
            color: '#FFB247'
          },
          display: "inline-block",
        }}
      >
        Service
      </Typography>

      {isOpen && (
        <Box
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            width: "100vw",
            bgcolor: "white",
            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
            p: 4,
            zIndex: 1000,
          }}
        >
          <Grid
            container
            spacing={4}
            sx={{ maxWidth: "1400px", }}
          >
            <Grid item xs={12} md={3}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: 'column',
                  height: "100%",
                  justifyContent: "center",
                }}
              >
               
                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: "bold",
                    color: "black",
                    fontSize: "50px",
                    // mt: 1,
                    lineHeight: 1.2,
                    textAlign:'center'
                  }}
                >
                  OUR
                  <br />
                  SERVICES
                </Typography>
                <Box sx={{
                pl:12
                }}>
                <Image
                  src="/Setting-image.png?height=100&width=100"
                  alt="Our Services"
                  width={100}
                  height={100}
                  
                />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={9}>
              <Grid container spacing={4}>
                {ServiceSubcategories.map((serviceGroup) => (
                  <Grid item xs={12} sm={6} md={3} key={serviceGroup.category}>
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 2,
                        height: "100%",
                      }}
                    >
                      <Typography
                        variant="h6"
                        sx={{
                          fontWeight: "bold",
                          color: "black",
                          fontSize: '16px',
                          borderBottom: "2px solid #eee",
                          pb: 1,
                        }}
                      >
                        {serviceGroup.category}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          mb: 2,
                          fontSize: "0.9rem",
                          lineHeight: 1.5,
                        }}
                      >
                        {serviceGroup.description}
                      </Typography>
                     
                      <Link
                        href={`/services/${serviceGroup.category
                          .toLowerCase()
                          .replace(/\s+/g, "-")}`}
                        passHref
                      >
                        <Typography
                          sx={{
                            color: "#333",
                            fontSize: "0.9rem",
                            mt: "auto",
                            pt: 2,
                            textAlign: "center",
                            border: "1px solid #ddd",
                            borderRadius: "6px",
                            p: 1,
                            transition: "all 0.2s ease",
                            "&:hover": {
                              bgcolor: "#f5f5f5",
                              borderColor: "#000",
                            },
                          }}
                        >
                          View more
                        </Typography>
                      </Link>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default ServicesDropdown;
