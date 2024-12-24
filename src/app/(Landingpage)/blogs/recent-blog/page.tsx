"use client";
import Footer from "@/app/Footer";
import {
  BookmarkAdd,
  Message,
  More,
  MoreHoriz,
  PlayArrowRounded,
  ReadMore,
} from "@mui/icons-material";
import { Container, Typography, Box, Avatar, IconButton } from "@mui/material";
import { ClapperboardIcon, ShareIcon } from "lucide-react";

export default function BlogPage() {
  return (
    <>
      <Container maxWidth="lg" sx={{ mt: 20, mb: 4 }}>
        <Typography variant="h2" fontWeight="bolder" gutterBottom>
          This new JavaScript operator is an absolute game changer
        </Typography>

        <Typography variant="h5" mb="35px">
          An amazing new JavaScript operator has arrived and things are not
          looking too good for try-catch!
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: "35px",
          }}
        >
          <Avatar
            alt=""
            src="/images/new.jpg"
            sx={{
              width: "60px",
              height: "60px",
              marginRight: "10px",
              border: "2px solid green",
            }}
          >
            BN
          </Avatar>
          <Box>
            <Typography variant="subtitle1" fontWeight="bolder">
              Blogger Name
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Published On 23 Dec 2024 || 4min Read
            </Typography>
          </Box>
        </Box>
        <Box
          maxWidth="lg"
          display="flex"
          justifyContent="space-between"
          sx={{
            margin: "15px auto",
            borderBlock: "2px solid gray",
          }}
        >
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                margin: "15px auto",
              }}
            >
              <IconButton>
                <ClapperboardIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                margin: "15px",
              }}
            >
              <IconButton>
                <Message />
              </IconButton>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <Box
              sx={{
                margin: "15px",
              }}
            >
              <IconButton>
                <BookmarkAdd />
              </IconButton>
            </Box>
            <Box
              sx={{
                margin: "15px auto",
              }}
            >
              <IconButton>
                <ShareIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                margin: "15px auto",
              }}
            >
              <IconButton>
                <PlayArrowRounded />
              </IconButton>
            </Box>
            <Box
              sx={{
                margin: "15px auto",
              }}
            >
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </Box>
          </Box>
        </Box>

        <Box
          component="img"
          src="/images/new.jpg"
          alt="Blogs related image"
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: 2,
            mb: 4,
          }}
        />

        <Typography
          variant="body1"
          mb="20px"
          lineHeight="1.7"
          fontSize="1.5rem"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in
          nihil dicta ducimus, non pariatur, quis ullam nemo eveniet vel porro
          numquam, ad soluta delectus excepturi quae reprehenderit enim illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in
          nihil dicta ducimus, non pariatur, quis ullam nemo eveniet vel porro
          numquam, ad soluta delectus excepturi quae reprehenderit enim illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in
          nihil dicta ducimus, non pariatur, quis ullam nemo eveniet vel porro
          numquam, ad soluta delectus excepturi quae reprehenderit enim illum.
        </Typography>

        <Typography
          variant="body1"
          mb="20px"
          lineHeight="1.7"
          fontSize="1.5rem"
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in
          nihil dicta ducimus, non pariatur, quis ullam nemo eveniet vel porro
          numquam, ad soluta delectus excepturi quae reprehenderit enim illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in
          nihil dicta ducimus, non pariatur, quis ullam nemo eveniet vel porro
          numquam, ad soluta delectus excepturi quae reprehenderit enim illum.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio in
          nihil dicta ducimus, non pariatur, quis ullam nemo eveniet vel porro
          numquam, ad soluta delectus excepturi quae reprehenderit enim illum.
        </Typography>

        <Box
          display="flex"
          justifyContent="space-evenly"
          alignItems="center"
          marginBlock="50px"
          flexWrap="wrap"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src="/images/new.jpg"
              alt="Blogs related image"
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: 50,
                mb: 4,
              }}
            />
            <Typography>Name of Writer</Typography>
            <Typography>Position of Author</Typography>
            <Typography>Company Name</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src="/images/new.jpg"
              alt="Blogs related image"
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: 50,
                mb: 4,
              }}
            />
            <Typography>Name of Writer</Typography>
            <Typography>Position of Author</Typography>
            <Typography>Company Name</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src="/images/new.jpg"
              alt="Blogs related image"
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: 50,
                mb: 4,
              }}
            />
            <Typography>Name of Writer</Typography>
            <Typography>Position of Author</Typography>
            <Typography>Company Name</Typography>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <Box
              component="img"
              src="/images/new.jpg"
              alt="Blogs related image"
              sx={{
                width: "100px",
                height: "100px",
                borderRadius: 50,
                mb: 4,
              }}
            />
            <Typography>Name of Writer</Typography>
            <Typography>Position of Author</Typography>
            <Typography>Company Name</Typography>
          </Box>
        </Box>

        {/* like share and commets */}
        <Box
          maxWidth="lg"
          display="flex"
          justifyContent="space-between"
          sx={{
            margin: "15px auto",
            borderBlock: "2px solid gray",
          }}
        >
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                margin: "15px auto",
              }}
            >
              <IconButton>
                <ClapperboardIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                margin: "15px",
              }}
            >
              <IconButton>
                <Message />
              </IconButton>
            </Box>
          </Box>

          <Box display="flex" alignItems="center">
            <Box
              sx={{
                margin: "15px",
              }}
            >
              <IconButton>
                <BookmarkAdd />
              </IconButton>
            </Box>
            <Box
              sx={{
                margin: "15px auto",
              }}
            >
              <IconButton>
                <ShareIcon />
              </IconButton>
            </Box>
            <Box
              sx={{
                margin: "15px auto",
              }}
            >
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* about author details  */}
        <Box sx={{ mt: 5, pt: 3, borderTop: "1px solid #ddd" }}>
          <Typography variant="h6" mb="10">
            About the Author
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Optio in nihil dicta
            ducimus, non pariatur, quis ullam nemo eveniet vel porro numquam, ad
            soluta delectus excepturi quae reprehenderit enim illum.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </>
  );
}
