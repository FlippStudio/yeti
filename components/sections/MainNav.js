import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Menuitem from "@mui/material/MenuItem";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Socials from "../Socials";
import Link from "next/link";
import logo from "../../public/images/logo.svg";
import Image from "next/image";
import classes from "../../styles/MainNavigation.module.css";
import CloseIcon from "@mui/icons-material/Close";

const pages = ["About us", "Yetis", "Story", "Wishlist", "Roadmap"];

const ResponsiveApp = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const lg = "d-lg-none flex-end";
  const xs = "flex-center menu-social";

  const scrollTo = (e, component) => {
    handleCloseNavMenu();
    component && component.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAbout = (e) => {
    let component = document.getElementById("uti");
    scrollTo(e, component);
  };

  const scrollToCollection = (e) => {
    let component = document.getElementById("yetis");
    scrollTo(e, component);
  };

  const scrollToMovies = (e) => {
    let component = document.getElementById("story");
    scrollTo(e, component);
  };

  const scrollToNewsletter = (e) => {
    let component = document.getElementById("roadmap");
    scrollTo(e, component);
  };

  const scrollToFaq = (e) => {
    let component = document.getElementById("faq");
    scrollTo(e, component);
  };

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <Link href="https://www.meta-yeti.com/" passHref={true}>
              <Image src={logo} alt="Meta logo" />
            </Link>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-start",
            }}
          >
            <Link href="https://www.meta-yeti.com/" passHref={true}>
              <Image src={logo} alt="Meta logo" />
            </Link>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="menu-position"
          >
            <Button onClick={scrollToAbout} className={classes.page}>
              About us
            </Button>
            <Button onClick={scrollToCollection} className={classes.page}>
              Yetis
            </Button>
            <Button onClick={scrollToNewsletter} className={classes.page}>
              Roadmap
            </Button>
            <Button onClick={scrollToMovies} className={classes.page}>
              Team
            </Button>
            <Button onClick={scrollToFaq} className={classes.page}>
              FAQ
            </Button>
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              {anchorElNav !== null ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "center",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "center",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
              className="menu-mobile"
            >
              <Menuitem
                onClick={scrollToAbout}
                onTouchStart={scrollToAbout}
                className={classes.page}
              >
                About us
              </Menuitem>
              <Menuitem
                onClick={scrollToCollection}
                onTouchStart={scrollToCollection}
                className={classes.page}
              >
                Yetis
              </Menuitem>
              <Menuitem
                onClick={scrollToNewsletter}
                onTouchStart={scrollToNewsletter}
                className={classes.page}
              >
                Roadmap
              </Menuitem>
              <Menuitem
                onClick={scrollToMovies}
                onTouchStart={scrollToMovies}
                className={classes.page}
              >
                Team
              </Menuitem>
              <Menuitem
                onClick={scrollToFaq}
                onTouchStart={scrollToFaq}
                className={classes.page}
              >
                FAQ
              </Menuitem>

              <Socials c={xs} />
            </Menu>
          </Box>
          <Socials c={lg} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveApp;
