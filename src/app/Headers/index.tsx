"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";
import { Box, useScrollTrigger } from "@mui/material";
import ServicesDropdown from "../components/ServicePopover";
import Image from "next/image";
import AboutUsDropdown from "../components/AboutUsDropdown";

const Header = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const drawerLinks = [
    { text: "Home", href: "/" },
    { text: "About us", href: "/aboutus" },
    { text: "Services", href: "/services" },
    { text: "Product", href: "/products" },
    { text: "Our Partners", href: "/ourpartners" },
    { text: "Blogs", href: "/blogs" },
  ];

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const NavLinks = () => (
    <>
      {drawerLinks.map((link) =>
        link.text === "Services" ? (
          <ServicesDropdown key={link.text} />
        ) : link.text === "About us" ? (
          <AboutUsDropdown key={link.text} />
        ) : (
          <Link key={link.text} href={link.href}>
            <Typography
              variant="h6"
              color="white"
              component="div"
              sx={{
                px: 3.5,
                py: 3,
                fontSize: { xs: "16px", sm: "18px" },
                cursor: "pointer",
                fontWeight: 500,
                display: "inline-block",
                position: "relative",

                color:
                  pathname === link.href && pathname !== "/"
                    ? "#4294a5"
                    : "none",
                transition: "color 0.2s ease",

                borderBottom:
                  (pathname === link.href && pathname !== "/") ||
                  (link.href === "/services" &&
                    pathname.startsWith("/services"))
                    ? "3.5px solid #4294a5"
                    : "none",

                "&:hover":
                  pathname === link.href ||
                  (link.href === "/services" &&
                    pathname.startsWith("/services"))
                    ? {}
                    : {
                        color: "#4294a5",
                      },

                "&::after": {
                  content: '""',
                  position: "absolute",
                  bottom: -2,
                  left: 0,
                  width: "100%",
                  height: "3.5px",
                  backgroundColor: "#4294a5",
                  transform: "scaleX(0)",
                  transition: "transform 0.3s ease",
                },

                "&:hover::after":
                  pathname === link.href ||
                  (link.href === "/services" &&
                    pathname.startsWith("/services"))
                    ? {}
                    : {
                        transform: "scaleX(1)",
                      },
              }}
            >
              {link.text}
            </Typography>
          </Link>
        )
      )}
      <Link href="/contact">
        <Button
          variant="contained"
          sx={{
            width: { xs: "100px", sm: "130px", md: "150px" },
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
          Contact us
        </Button>
      </Link>
    </>
  );

  const DrawerList = (
    <Box
      sx={{
        width: { xs: "100%", sm: 320 },
        height: "100vh",
        backgroundColor: "#171717",
        display: "flex",
        flexDirection: "column",
      }}
      role="presentation"
    >
      <Box
        sx={{
          height: { xs: "60px", sm: "80px" },
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "center",
          p: 2,
        }}
      >
        <IconButton onClick={toggleDrawer(false)}>
          <CloseIcon
            sx={{ color: "white", fontSize: { xs: "24px", sm: "32px" } }}
          />
        </IconButton>
      </Box>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.2)" }} />
      <List>
        {drawerLinks.map((link) => (
          <ListItem
            key={link.text}
            onClick={toggleDrawer(false)}
            sx={{
              height: { xs: "50px", sm: "60px" },
              "&:hover": {
                backgroundColor: "rgba(255,255,255,0.1)",
              },
            }}
          >
            <Link href={link.href} passHref style={{ width: "100%" }}>
              <ListItemText
                primary={link.text}
                primaryTypographyProps={{
                  color: "white",
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: { xs: "16px", sm: "20px" },
                }}
              />
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <AppBar
        position="fixed"
        sx={{
          background: trigger ? "white" : "transparent",
          transition: "background-color 0.3s ease",
          boxShadow: 0,
          color: trigger ? "black" : "white",
          height: { xs: "60px", sm: "70px", md: "80px" },
        }}
      >
        <Toolbar
          sx={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1600px",
            margin: "0 auto",
            width: "100%",
            px: { xs: 2, sm: 4, md: 6 },
          }}
        >
          <Link href="/">
            <Typography
              variant="h1"
              color="white"
              component="div"
              sx={{
                fontWeight: "bold",
                fontSize: { xs: "20px", sm: "28px", md: "36px" },
                height: { xs: "40px", sm: "50px", md: "60px" },
                display: "flex",
                alignItems: "center",
                mt: 1,
              }}
            >
              <Box
                sx={{
                  width: { xs: "40px", sm: "50px", md: "60px" },
                }}
              >
                <Image
                  src="/Innoblooms-logo.png"
                  alt="Innoblooms Logo"
                  width={340}
                  height={80}
                />
              </Box>
            </Typography>
          </Link>
          <Box
            sx={{
              display: {
                xs: "none",
                sm: "flex",
              },
              alignItems: "center",
              height: "100%",
            }}
          >
            <NavLinks />
          </Box>

          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", sm: "none" },
              height: "40px",
              width: "40px",
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          sx: {
            width: { xs: "100%", sm: 320 },
          },
        }}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default Header;
