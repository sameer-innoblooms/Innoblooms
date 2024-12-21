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
  // Add technology categories here
  FRONTEND: ["React", "Vue.js", "Angular", "Next.js", "TypeScript"],
  BACKEND: ["Node.js", "Python", "Ruby on Rails", "Java", "PHP"],
  // Add more categories as needed
};

const industries: ServiceCategory = {
  // Add industry categories here
  TECHNOLOGY: ["SaaS", "Fintech", "E-commerce", "Artificial Intelligence"],
  HEALTHCARE: ["Telemedicine", "Health Tech", "Medical Devices"],
  // Add more categories as needed
};

const accordionSections: AccordionSection[] = [
  { id: "services", title: "Show all services", data: services },
  { id: "technologies", title: "Show all technologies", data: technologies },
  { id: "industries", title: "Show all industries", data: industries },
];

export default function ServicesAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <Box sx={{ width: "100%", 
    
        // bgcolor: "#0A061D" 
        // background: "linear-gradient(135deg, #000000 0%, #00001a 100%)",
          bgcolor: '#000000'
        }}>
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
                  }}
                >
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
                        }}
                      >
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
