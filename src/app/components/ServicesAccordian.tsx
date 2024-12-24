// "use client";
// import React from "react";
// import {
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Typography,
//   Box,
//   Grid,
// } from "@mui/material";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";
// import DesignServicesIcon from "@mui/icons-material/DesignServices";
// import CodeIcon from "@mui/icons-material/Code";
// import CampaignIcon from "@mui/icons-material/Campaign";
// import ComputerIcon from "@mui/icons-material/Computer";
// import StorageIcon from "@mui/icons-material/Storage";
// import BusinessIcon from "@mui/icons-material/Business";
// import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

// type ServiceItem = string;

// type ServiceCategory = {
//   [key: string]: ServiceItem[];
// };

// type AccordionSection = {
//   id: string;
//   title: string;
//   data: ServiceCategory;
// };

// const services: ServiceCategory = {
//   DESIGN: [
//     "Web Design",
//     "Landing Website Design",
//     "Rebranding",
//     "UI/UX Design",
//     "Saas Website Design",
//     "Responsive Web Design",
//     "Branding for Startups",
//     "Mobile App Design",
//     "Website redesign",
//   ],
//   DEVELOPMENT: [
//     "Software Product Development",
//     "Web application development",
//     "Web portal development",
//     "Web Development",
//     "Mobile app development",
//     "CMS Development",
//     "Back-end development",
//     "MVP development",
//     "Front-end Development",
//   ],
//   MARKETING: [
//     "Search Engine Optimisation",
//     "Technical Audit",
//     "Social Media Design",
//     "Local SEO",
//     "Conversion Rate Optimization",
//     "Pitch Deck Design",
//     "Technical SEO",
//     "GA4 consulting",
//     "Product Hunt launch",
//     "SEO Audit",
//     "Content Marketing",
//   ],
// };

// const technologies: ServiceCategory = {
//   FRONTEND: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"],
//   BACKEND: ["Node.js", "Python", "Ruby on Rails", "Java", "PHP"],
// };

// const industries: ServiceCategory = {
//   TECHNOLOGY: ["SaaS", "Fintech", "E-commerce", "Artificial Intelligence"],
//   HEALTHCARE: ["Telemedicine", "Health Tech", "Medical Devices"],
// };

// const accordionSections: AccordionSection[] = [
//   { id: "services", title: "Show all services", data: services },
//   { id: "technologies", title: "Show all technologies", data: technologies },
//   { id: "industries", title: "Show all industries", data: industries },
// ];

// const getCategoryIcon = (category: string) => {
//   switch (category) {
//     case "DESIGN":
//       return <DesignServicesIcon sx={{ mr: 1, fontSize: 20 }} />;
//     case "DEVELOPMENT":
//       return <CodeIcon sx={{ mr: 1, fontSize: 20 }} />;
//     case "MARKETING":
//       return <CampaignIcon sx={{ mr: 1, fontSize: 20 }} />;
//     case "FRONTEND":
//       return <ComputerIcon sx={{ mr: 1, fontSize: 20 }} />;
//     case "BACKEND":
//       return <StorageIcon sx={{ mr: 1, fontSize: 20 }} />;
//     case "TECHNOLOGY":
//       return <BusinessIcon sx={{ mr: 1, fontSize: 20 }} />;
//     case "HEALTHCARE":
//       return <LocalHospitalIcon sx={{ mr: 1, fontSize: 20 }} />;
//     default:
//       return null;
//   }
// };

// export default function ServicesAccordion() {
//   const [expanded, setExpanded] = React.useState<string | false>(false);

//   const handleChange =
//     (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
//       setExpanded(isExpanded ? panel : false);
//     };

//   return (
//     <Box sx={{ width: "100%", bgcolor: "#000000" }}>
//       {accordionSections.map((section) => (
//         <Accordion
//           key={section.id}
//           expanded={expanded === section.id}
//           onChange={handleChange(section.id)}
//           sx={{
//             bgcolor: "transparent",
//             color: "white",
//             boxShadow: "none",
//             borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
//             "&:before": {
//               display: "none",
//             },
//             "& .MuiAccordionSummary-root": {
//               minHeight: 80,
//               padding: "0 24px",
//             },
//           }}
//         >
//           <AccordionSummary
//             expandIcon={
//               expanded === section.id ? (
//                 <RemoveIcon sx={{ color: "white", fontSize: 28 }} />
//               ) : (
//                 <AddIcon sx={{ color: "white", fontSize: 28 }} />
//               )
//             }
//             sx={{
//               "& .MuiAccordionSummary-content": {
//                 margin: "20px 0",
//               },
//             }}
//           >
//             <Typography
//               sx={{
//                 fontSize: "20px",
//                 fontWeight: 500,
//               }}
//             >
//               {section.title}
//             </Typography>
//           </AccordionSummary>
//           <AccordionDetails sx={{ padding: "20px 24px 40px" }}>
//             {Object.entries(section.data).map(([category, items]) => (
//               <Box key={category} sx={{ mb: 4 }}>
//                 <Typography
//                   sx={{
//                     color: "white",
//                     fontSize: "16px",
//                     fontWeight: 600,
//                     mb: 3,
//                     display: "flex",
//                     alignItems: "center",
//                   }}
//                 >
//                   {getCategoryIcon(category)}
//                   {category}
//                 </Typography>
//                 <Grid container spacing={2}>
//                   {items.map((item) => (
//                     <Grid item xs={12} sm={6} md={3} key={item}>
//                       <Typography
//                         sx={{
//                           color: "rgba(255, 255, 255, 0.7)",
//                           fontSize: "16px",
//                           transition: "color 0.2s",
//                           cursor: "pointer",
//                           "&:hover": {
//                             color: "white",
//                           },
//                           display: "flex",
//                           alignItems: "center",
//                         }}
//                       >
//                         <AddIcon sx={{ mr: 1, fontSize: 16 }} />
//                         {item}
//                       </Typography>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>
//             ))}
//           </AccordionDetails>
//         </Accordion>
//       ))}
//     </Box>
//   );
// }

////////////////////////////////////////////////
/////ICON ADDED/////////////////////////////////

"use client";
import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Grid,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import CodeIcon from "@mui/icons-material/Code";
import CampaignIcon from "@mui/icons-material/Campaign";
import ComputerIcon from "@mui/icons-material/Computer";
import StorageIcon from "@mui/icons-material/Storage";
import BusinessIcon from "@mui/icons-material/Business";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";
import WebIcon from "@mui/icons-material/Web";
import BrushIcon from "@mui/icons-material/Brush";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import SearchIcon from "@mui/icons-material/Search";
import BarChartIcon from "@mui/icons-material/BarChart";
import LaunchIcon from "@mui/icons-material/Launch";

type ServiceItem = string;

type ServiceCategory = {
  [key: string]: ServiceItem[];
};

type AccordionSection = {
  id: string;
  title: string;
  data: ServiceCategory;
};

const services: ServiceCategory = {
  DESIGN: [
    "Web Design",
    "Landing Website Design",
    "Rebranding",
    "UI/UX Design",
    "Saas Website Design",
    "Responsive Web Design",
    "Branding for Startups",
    "Mobile App Design",
    "Website redesign",
  ],
  DEVELOPMENT: [
    "Software Product Development",
    "Web application development",
    "Web portal development",
    "Web Development",
    "Mobile app development",
    "CMS Development",
    "Back-end development",
    "MVP development",
    "Front-end Development",
  ],
  MARKETING: [
    "Search Engine Optimisation",
    "Technical Audit",
    "Social Media Design",
    "Local SEO",
    "Conversion Rate Optimization",
    "Pitch Deck Design",
    "Technical SEO",
    "GA4 consulting",
    "Product Hunt launch",
    "SEO Audit",
    "Content Marketing",
  ],
};

const technologies: ServiceCategory = {
  FRONTEND: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"],
  BACKEND: ["Node.js", "Python", "Ruby on Rails", "Java", "PHP"],
};

const industries: ServiceCategory = {
  TECHNOLOGY: ["SaaS", "Fintech", "E-commerce", "Artificial Intelligence"],
  HEALTHCARE: ["Telemedicine", "Health Tech", "Medical Devices"],
};

const accordionSections: AccordionSection[] = [
  { id: "services", title: "Show all services", data: services },
  { id: "technologies", title: "Show all technologies", data: technologies },
  { id: "industries", title: "Show all industries", data: industries },
];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "DESIGN":
      return <DesignServicesIcon sx={{ mr: 1, fontSize: 20 }} />;
    case "DEVELOPMENT":
      return <CodeIcon sx={{ mr: 1, fontSize: 20 }} />;
    case "MARKETING":
      return <CampaignIcon sx={{ mr: 1, fontSize: 20 }} />;
    case "FRONTEND":
      return <ComputerIcon sx={{ mr: 1, fontSize: 20 }} />;
    case "BACKEND":
      return <StorageIcon sx={{ mr: 1, fontSize: 20 }} />;
    case "TECHNOLOGY":
      return <BusinessIcon sx={{ mr: 1, fontSize: 20 }} />;
    case "HEALTHCARE":
      return <LocalHospitalIcon sx={{ mr: 1, fontSize: 20 }} />;
    default:
      return null;
  }
};

const getItemIcon = (item: string) => {
  switch (item.toLowerCase()) {
    case "web design":
    case "landing website design":
    case "responsive web design":
    case "website redesign":
      return <WebIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "ui/ux design":
    case "rebranding":
    case "branding for startups":
      return <BrushIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "mobile app design":
      return <PhoneAndroidIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "software product development":
    case "web application development":
    case "web development":
    case "front-end development":
    case "react":
    case "vue.js":
    case "angular":
      return <CodeIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "next.js":
    case "typescript":
      return <CodeIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "back-end development":
    case "cms development":
    case "node.js":
    case "python":
    case "ruby on rails":
    case "java":
    case "php":
      return <StorageIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "search engine optimisation":
    case "local seo":
    case "technical seo":
    case "seo audit":
      return <SearchIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "conversion rate optimization":
    case "ga4 consulting":
      return <BarChartIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "product hunt launch":
      return <LaunchIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "saas":
    case "fintech":
    case "e-commerce":
    case "artificial intelligence":
      return <BusinessIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "telemedicine":
    case "health tech":
    case "medical devices":
      return <LocalHospitalIcon sx={{ mr: 1, fontSize: 16 }} />;
    default:
      return <AddIcon sx={{ mr: 1, fontSize: 16 }} />;
  }
};

export default function ServicesAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ width: "100%", bgcolor: "#000000" }}>
      {accordionSections.map((section) => (
        <Accordion
          key={section.id}
          expanded={expanded === section.id}
          onChange={handleChange(section.id)}
          sx={{
            bgcolor: "transparent",
            color: "white",
            boxShadow: "none",
            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            "&:before": {
              display: "none",
            },
            "& .MuiAccordionSummary-root": {
              minHeight: 80,
              padding: "0 24px",
            },
          }}
        >
          <AccordionSummary
            expandIcon={
              expanded === section.id ? (
                <RemoveIcon sx={{ color: "white", fontSize: 28 }} />
              ) : (
                <AddIcon sx={{ color: "white", fontSize: 28 }} />
              )
            }
            sx={{
              "& .MuiAccordionSummary-content": {
                margin: "20px 0",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: 500,
              }}
            >
              {section.title}
            </Typography>
          </AccordionSummary>
          <AccordionDetails sx={{ padding: "20px 24px 40px" }}>
            {Object.entries(section.data).map(([category, items]) => (
              <Box key={category} sx={{ mb: 4 }}>
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "16px",
                    fontWeight: 600,
                    mb: 3,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {getCategoryIcon(category)}
                  {category}
                </Typography>
                <Grid container spacing={2}>
                  {items.map((item) => (
                    <Grid item xs={12} sm={6} md={3} key={item}>
                      <Typography
                        sx={{
                          color: "rgba(255, 255, 255, 0.7)",
                          fontSize: "16px",
                          transition: "color 0.2s",
                          cursor: "pointer",
                          "&:hover": {
                            color: "white",
                          },
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        {getItemIcon(item)}
                        {item}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
}
