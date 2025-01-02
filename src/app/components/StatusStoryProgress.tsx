import React from "react";
import { Box } from "@mui/material";

interface StatusStoryProgressProps {
  items: number;
  activeStep: number;
  onStepClick: (index: number) => void;
}

const StatusStoryProgress: React.FC<StatusStoryProgressProps> = ({
  items,
  activeStep,
  onStepClick,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        mt: 2,
      }}
    >
      {Array.from({ length: items }).map((_, index) => (
        <Box
          key={index}
          onClick={() => onStepClick(index)}
          sx={{
            position: "relative",
            width: "24px",
            height: "24px",
            borderRadius: "50%",
            cursor: "pointer",
            "&::before": {
              content: '""',
              position: "absolute",
              top: "2px",
              left: "2px",
              right: "2px",
              bottom: "2px",
              borderRadius: "50%",
              backgroundColor:
                index === activeStep ? "#6366F1" : "rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            },
            "&::after": {
              content: '""',
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              borderRadius: "50%",
              border: "2px solid",
              borderColor: index === activeStep ? "#6366F1" : "transparent",
              transition: "border-color 0.3s ease",
            },
            ...(index === activeStep && {
              animation: "pulse 2s infinite",
              "@keyframes pulse": {
                "0%": {
                  boxShadow: "0 0 0 0 rgba(99, 102, 241, 0.4)",
                },
                "70%": {
                  boxShadow: "0 0 0 10px rgba(99, 102, 241, 0)",
                },
                "100%": {
                  boxShadow: "0 0 0 0 rgba(99, 102, 241, 0)",
                },
              },
            }),
          }}
        />
      ))}
    </Box>
  );
};

export default StatusStoryProgress;
