import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";
import useAuth from "../../../../Hooks/useAuth";
import logo from "../../../../images/logo2.png";

const Navbar = () => {
  const { loginWithGoogle, user, logOut } = useAuth();

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

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <Link style={{ textDecoration: "none", color: "white" }} to="/home">
              {/* <img width="100px" height="70px" src={logo} alt="" /> */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <strong style={{ color: "black" }}> Niz</strong>

                <small style={{ fontSize: "13px" }}> Travel Agency</small>
              </Box>
            </Link>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                a: { textDecoration: "none", color: "black" },
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/blog"}>Blog</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/reviews"}>Reviews</Link>
              </MenuItem>
              {/* <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/reviews"}>Reviews</Link>
              </MenuItem> */}
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/login"}>Login</Link>
                {/* <Button onClick={loginWithGoogle}>Login</Button> */}
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            LOGO
          </Typography>

          <Box
            sx={{
              a: { textDecoration: "none", color: "white" },
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <MenuItem>
              <Link to={"/blog"}>Blogs</Link>
            </MenuItem>
            <MenuItem>
              <Link to={"/reviews"}>Reviews</Link>
            </MenuItem>
            {/* <MenuItem>
              <Link to={"/upcomming"}>Upcomming</Link>
            </MenuItem> */}

            <MenuItem>
              {/* <Button onClick={loginWithGoogle} color="error">
                Login
              </Button> */}
              {!user.email && <Link to={"/Login"}>Login</Link>}
            </MenuItem>
          </Box>

          <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
            <Typography>{user?.displayName}</Typography>
            {/* <Link to="/cart">
              <IconButton aria-label="cart" sx={{ mr: 3 }}>
                <StyledBadge badgeContent={1} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
            </Link> */}
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src={user?.photoURL} />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ a: { textDecoration: "none", color: "black" }, mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/Profile"}>Profile</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/Account"}>Account</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link to={"/Dashboard"}>Dashboard</Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                {user.email && (
                  <Button varient="contained" color="error" onClick={logOut}>
                    Logout
                  </Button>
                )}
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
