import ProjectLandingPage from "@/app/components/ProjectLandingPage";
import ProjectShowcase from "@/app/components/ProjectShowcase";
import ServicesAccordion from "@/app/components/ServicesAccordian";
import Footer from "@/app/Footer";
import React from "react";

const page = () => {
  return (
    <>
      <ProjectShowcase />
      <ProjectLandingPage />
      <ServicesAccordion />
      <Footer />
    </>
  );
};

export default page;
