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
import Image from "next/image";

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
    // "Pitch Deck Design",
    // "Technical SEO",
    // "GA4 consulting",
    // "Product Hunt launch",
    // "SEO Audit",
    // "Content Marketing",
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
    // case "DESIGN":
    //   return <DesignServicesIcon sx={{ mr: 1, fontSize: 20 }} />;
    // case "DEVELOPMENT":
    //   return <CodeIcon sx={{ mr: 1, fontSize: 20 }} />;
    // case "MARKETING":
    //   return <CampaignIcon sx={{ mr: 1, fontSize: 20 }} />;
    // case "FRONTEND":
    // // return <ComputerIcon sx={{ mr: 1, fontSize: 20 }} />;
    // case "BACKEND":
    // // return <StorageIcon sx={{ mr: 1, fontSize: 20 }} />;
    // case "TECHNOLOGY":
    //   return <BusinessIcon sx={{ mr: 1, fontSize: 20 }} />;
    // case "HEALTHCARE":
    //   return <LocalHospitalIcon sx={{ mr: 1, fontSize: 20 }} />;
    default:
      return null;
  }
};

const getItemIcon = (item: string) => {
  switch (item.toLowerCase()) {
    case "saas website design":
      return (
        <Image
          src="/logo/saas-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "web design":
      return (
        <Image
          src="/logo/telemedicin-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "landing website design":
      return (
        <Image
          src="/logo/landingWebsiteDesign-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "responsive web design":
      return (
        <Image
          src="/logo/webDesign-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "website redesign":
      return (
        <Image
          src="/logo/webDesign-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "ui/ux design":
      return (
        <Image
          src="/logo/uiux-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "rebranding":
      return (
        <Image
          src="/logo/rebranding-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "branding for startups":
      return (
        <Image
          src="/logo/branding-startup.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "mobile app design":
      return (
        <Image
          src="/logo/mobileAppDesign-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "software product development":
      return (
        <Image
          src="/logo/software.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "web application development":
      return (
        <Image
          src="/logo/webApplicationDevelopment.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "web portal development":
      return (
        <Image
          src="/logo/webPortalDevelopment.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "web development":
      return (
        <Image
          src="/logo/webDevelopment.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "mobile app development":
      return (
        <Image
          src="/logo/mobileAppDesign-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "cms development":
      return (
        <Image
          src="/logo/cms-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "back-end development":
      return (
        <Image
          src="/logo/backenDevelopment-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "mvp development":
      return (
        <Image
          src="/logo/webdesign-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "front-end development":
      return (
        <Image
          src="/logo/frontendDevelopment-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "react":
      return (
        <Image
          src="/react-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "vue.js":
      return (
        <Image
          src="/logo/vue-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "angular":
      return (
        <Image
          src="/logo/angular-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "next.js":
      return (
        <Image
          src="/logo/next-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "typescript":
      return (
        <Image
          src="/logo/typescript-logo.png"
          alt="react logo"
          height={20}
          width={21}
          style={{ marginRight: 10 }}
        />
      );
    // case "back-end development":
    // case "cms development":
    case "node.js":
      return (
        <Image
          src="/logo/nodejs-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "python":
      return (
        <Image
          src="/logo/python-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "ruby on rails":
      return (
        <Image
          src="/logo/ruby-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "java":
      return (
        <Image
          src="/logo/java-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "php":
      return (
        <Image
          src="/logo/php-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "search engine optimisation":
      return (
        <Image
          src="/logo/seo-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "local seo":
      return (
        <Image
          src="/logo/seo-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "technical audit":
      return (
        <Image
          src="/logo/technichalAudit-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "social media design":
      return (
        <Image
          src="/logo/socialMediaDesign-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "technical seo":
    case "seo audit":
      return <SearchIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "conversion rate optimization":
      return (
        <Image
          src="/logo/coversionRateOptimization-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "ga4 consulting":
      return <BarChartIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "product hunt launch":
      return <LaunchIcon sx={{ mr: 1, fontSize: 16 }} />;
    case "saas":
      return (
        <Image
          src="/logo/saas-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "fintech":
      return (
        <Image
          src="/logo/fintech-logo.png"
          alt="react logo"
          height={20}
          width={20}
          style={{ marginRight: 10 }}
        />
      );
    case "e-commerce":
      return (
        <Image
          src="/logo/ecom-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "artificial intelligence":
      return (
        <Image
          src="/logo/ai-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "telemedicine":
      return (
        <Image
          src="/logo/telemedicin-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "health tech":
      return (
        <Image
          src="/logo/healthTech-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
    case "medical devices":
      return (
        <Image
          src="/logo/medicalDevices-logo.png"
          alt="react logo"
          height={25}
          width={25}
          style={{ marginRight: 10 }}
        />
      );
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
