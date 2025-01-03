"use client";

import { useState } from "react";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  Box,
  Avatar,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
// import { BlogPost, blogPosts } from "./Blog-post";
import { BlogsArray } from "./BlogsDataArray";
import { useRouter } from "next/navigation";

const StyledCard = styled(Card)(({}) => ({
  height: "100%",
  display: "flex",
  flexDirection: "column",
  transition: "transform 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

const POSTS_PER_PAGE = 6;

export default function BlogListing() {
  const router = useRouter();
  const [visiblePosts, setVisiblePosts] = useState<number>(POSTS_PER_PAGE);

  const handleLoadMore = () => {
    setVisiblePosts((prev) => prev + POSTS_PER_PAGE);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        component="h1"
        variant="h4"
        sx={{ mb: 6, fontWeight: "bold" }}
      >
        Recent blog posts
      </Typography>

      <Grid container spacing={4}>
        {BlogsArray.slice(0, visiblePosts).map((post: any, index: number) => (
          <Grid
            onClick={() => {
              router.push(`/blogs/${index}`);
            }}
            sx={{cursor:"pointer"}}
            item
            key={post.id}
            xs={12}
            sm={6}
            md={4}
          >
            <StyledCard>
              <CardMedia
                component="img"
                height="240"
                image={post.image}
                alt={post.title}
                sx={{ objectFit: "cover" }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {post.title}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ mb: 2 }}
                >
                  {post.description}
                </Typography>
                <Stack
                  direction="row"
                  spacing={2}
                  alignItems="center"
                  sx={{ mt: "auto" }}
                >
                  <Avatar
                    src={post.author.avatar}
                    alt={post.author.name}
                    sx={{ width: 32, height: 32 }}
                  />
                  <Box>
                    <Typography variant="subtitle2">
                      {post.author.name}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {post.author.date}
                    </Typography>
                  </Box>
                </Stack>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>

      {visiblePosts < BlogsArray.length && (
        <Box sx={{ mt: 8, textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={handleLoadMore}
            sx={{
              width: { xs: "120px", sm: "130px", md: "150px" },
              height: { xs: "35px", sm: "45px", md: "50px" },
              minWidth: "100px",
              bgcolor: "#4294A5",
              color: "black",
              fontWeight: "medium",
              borderRadius: "50px",
              fontSize: { xs: "11px", sm: "13px", md: "15px" },
              ml: { xs: 1, sm: 2 },
              "&:hover": {
                color: "black",
                backgroundColor: "white",
              },
            }}
          >
            Load more...
          </Button>
        </Box>
      )}
    </Container>
  );
}
