import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import MovieIcon from "@mui/icons-material/Movie";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import useThemeContext from "../contexts/useThemeContext";
import useMediaQuery from "@mui/material/useMediaQuery";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar: React.FC = () => {
  // 使用自定義的主題上下文，獲取當前模式和切換主題的函數
  const { mode, toggleTheme } = useThemeContext();
  // 使用媒體查詢來檢查螢幕寬度是否小於720px
  const isMobile = useMediaQuery("(max-width:720px)");
  // 用於控制菜單打開的狀態
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static">
      <Toolbar>
        {isMobile ? (
          <>
            {/* 漢堡菜單按鈕，在小螢幕下顯示 */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            {/* 漢堡菜單內容 */}
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={handleMenuClose}>MovieList</MenuItem>
              <MenuItem onClick={handleMenuClose}>Favorite</MenuItem>
            </Menu>
            {/* 中間顯示的應用標題和圖標 */}
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                textAlign: "center",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <MovieIcon sx={{ mr: 1 }} />
              MovieListApp
            </Typography>
          </>
        ) : (
          <>
            {/* 默認狀態下的應用圖標 */}
            <IconButton
              edge="start"
              color="inherit"
              aria-label="movie-icon"
              sx={{ mr: 2 }}
            >
              <MovieIcon />
            </IconButton>
            {/* 默認狀態下的應用標題 */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MovieListApp
            </Typography>
            {/* 默認狀態下的導航按鈕 */}
            <Button sx={{ color: "inherit" }}>MovieList</Button>
            <Button sx={{ color: "inherit" }}>Favorite</Button>
          </>
        )}
        {/* 切換主題模式的按鈕 */}
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
