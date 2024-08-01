// src/components/Navbar.tsx
import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
// import MenuItem from "@mui/material/MenuItem";
// import Menu from "@mui/material/Menu";
import Button from "@mui/material/Button";
import MovieIcon from "@mui/icons-material/Movie";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import useThemeContext from "./useThemeContext";

const Navbar: React.FC = () => {
  const { mode, toggleTheme } = useThemeContext();

  // 定義通用樣式
  const buttonStyles = {
    color: "inherit",
    "&:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)", // 自定義的 hover 效果
    },
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="movie-icon"
          sx={{ mr: 2 }}
        >
          <MovieIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MovieListApp
        </Typography>
        <Button sx={buttonStyles}>MovieList</Button>
        <Button sx={buttonStyles}>Favorite</Button>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="theme-toggle"
          onClick={toggleTheme}
        >
          {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
