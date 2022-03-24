import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
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
  const cl = "d-lg-none";

  return (
    <AppBar position="static" className={classes.appBar}>
      <Container maxWidth="xl" className={classes.container}>
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
                <Button
                  key={page}
                  className={classes.page}
                  onClick={handleCloseNavMenu}
                >
                  {page}
                </Button>
              ))}
              <Socials />
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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

          <Socials c={cl} />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveApp;
