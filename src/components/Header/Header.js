import React, { useState,useContext } from "react";
import { Link } from "react-router-dom";
import { ProductsContext } from "../../Context/Context";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Avatar,
  MenuItem,
  Menu,
  ListItemIcon
} from "@mui/material";
import Logout from "@mui/icons-material/Logout";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import StorefrontOutlinedIcon from "@mui/icons-material/StorefrontOutlined";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const token = localStorage.getItem("token");
  const {cartProduct}=useContext(ProductsContext)

  const showMenuItems = (event) => {
    setAnchorEl(event.currentTarget); // Open menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close menu
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login"; // Redirect after logout
  };

  const menuOpen = Boolean(anchorEl);

  return (
    <AppBar
      position="fixed"
      enableColorOnDark
      sx={{ zIndex: 999, backgroundColor: "#909192" }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo / Title */}
        <Box display="flex" alignItems="center">
          <StorefrontOutlinedIcon sx={{ mr: 1 }} />
          <Typography
            variant="h6"
            component={Link}
            to="/"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            My Store
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box display="flex" gap={2}>
          <Typography
            component={Link}
            to="/"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            Home
          </Typography>
          <Typography
            component={Link}
            to="/dashboard"
            color="inherit"
            sx={{ textDecoration: "none" }}
          >
            Shop
          </Typography>
          {!token && (
            <Typography
              component={Link}
              to="/login"
              sx={{ textDecoration: "none" }}
            >
              Login / Signup
            </Typography>
          )}
        </Box>

        {/* Icon Buttons */}
        <Box display="flex" gap={1}>
          <IconButton component={Link} to="/wish-list" color="inherit">
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton component={Link} to="/cart-page" color="inherit">
            <ShoppingCartOutlinedIcon />{cartProduct.length}
          </IconButton>

          {token && (
            <>
              <IconButton onClick={showMenuItems} disableRipple>
                <Avatar sx={{ width: 24, height: 24 }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleClose}
                onClick={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
              >
                <MenuItem onClick={handleLogout}>
                  <ListItemIcon>
                    <Logout fontSize="small" />
                  </ListItemIcon>
                  Logout
                </MenuItem>
              </Menu>
            </>
          )}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
