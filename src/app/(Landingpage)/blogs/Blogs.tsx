'use client'

import { useState } from 'react'
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
  Stack
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { BlogPost, blogPosts } from './Blog-post'


const StyledCard = styled(Card)(({  }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}))

const POSTS_PER_PAGE = 6

export default function BlogListing() {
  const [visiblePosts, setVisiblePosts] = useState<number>(POSTS_PER_PAGE)
  
  const handleLoadMore = () => {
    setVisiblePosts(prev => prev + POSTS_PER_PAGE)
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        component="h1"
        variant="h4"
        sx={{ mb: 6, fontWeight: 'bold' }}
      >
        Recent blog posts
      </Typography>

      <Grid container spacing={4}>
        {blogPosts.slice(0, visiblePosts).map((post: BlogPost) => (
          <Grid item key={post.id} xs={12} sm={6} md={4}>
            <StyledCard>
              <CardMedia
                component="img"
                height="240"
                image={post.image}
                alt={post.title}
                sx={{ objectFit: 'cover' }}
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
                  sx={{ mt: 'auto' }}
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

      {visiblePosts < blogPosts.length && (
        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Button
            variant="contained"
            onClick={handleLoadMore}
            sx={{
              bgcolor: 'grey.900',
              '&:hover': {
                bgcolor: 'grey.800',
              },
            }}
          >
            Loading more...
          </Button>
        </Box>
      )}
    </Container>
  )
}

