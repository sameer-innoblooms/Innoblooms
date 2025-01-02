import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  Box,
} from "@mui/material";

interface FounderProps {
  name: string;
  designation: string;
  photo: string;
  shortBio: string;
  fullBio: string;
  expanded: boolean;
  onExpandClick: () => void;
}

export default function Founder({
  name,
  designation,
  photo,
  shortBio,
  fullBio,
  expanded,
  onExpandClick,
}: FounderProps) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia
        component="img"
        image={photo}
        alt={name}
        sx={{ height: 400, objectFit: "", overflow: "hidden" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h4" component="h2" gutterBottom>
          {name}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" gutterBottom>
          {designation}
        </Typography>
        <Typography variant="body1" paragraph>
          {expanded ? fullBio : shortBio}
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Button variant="outlined" color="primary" onClick={onExpandClick}>
            {expanded ? "Read Less" : "Read More"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
