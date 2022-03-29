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

const pages = ["About us", "Yetis", "Story", "Wishlist", "Roadmap"];

const ResponsiveApp = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const lg = "d-lg-none flex-end";
  const xs = "flex-center";

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container sx={{maxWidth: { xl: "xl", lg: "lg", md: 'md', sm: 'sm', xs: 'xs' }}}>
        <Toolbar disableGutters>
          <Box sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
            <Link href="/">
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
            <Link href="/">
              <Image src={logo} alt="Meta logo" />
            </Link>
          </Box>
          <Box
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
            className="menu-position"
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                className={classes.page}
              >
                {page}
              </Button>
            ))}
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
              <MenuIcon />
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
              {pages.map((page) => (
                <Menuitem key={page} sx={{ justifyContent: "center" }}>
                  <Button
                    className={classes.page}
                    onClick={handleCloseNavMenu}
                    variant="text"
                  >
                    {page}
                  </Button>
                </Menuitem>
              ))}

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
