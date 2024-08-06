// PosterList.tsx
import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  IconButton,
  Divider,
  Tooltip,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useMovie } from "../contexts/useMovie";

interface PosterListProps {
  id: number;
  poster: string;
  title: string;
  onMoreClick: () => void;
  onFavoriteClick: () => void;
}

const PosterList: React.FC<PosterListProps> = ({
  id,
  poster,
  title,
  onMoreClick,
  onFavoriteClick,
}) => {
  const { favoriteList } = useMovie();
  const theme = useTheme();

  const isFavorite = (id: number) => {
    return favoriteList.some((favorite) => favorite.id === id);
  };

  //小螢幕時
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <List
      sx={{
        boxShadow: theme.palette.custom.boxShadow,
        backgroundColor: theme.palette.custom.cardBackground,
        borderRadius: "5px",
      }}
    >
      <ListItem
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <ListItemAvatar>
          <Avatar
            src={poster}
            alt={title}
            variant="square"
            sx={{ width: 100, height: 150 }}
          />
        </ListItemAvatar>
        <Tooltip title={title} arrow>
          <ListItemText
            primary={
              <Typography
                noWrap
                sx={{
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                  maxWidth: 500, // 設置最大寬度
                }}
              >
                {title}
              </Typography>
            }
            sx={{ marginLeft: 2 }}
          />
        </Tooltip>
        {/* Divider改為垂直 */}
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />

        <div>
          <Button
            onClick={onMoreClick}
            sx={{
              marginRight: 0.5,
              color: theme.palette.custom.buttonTextColor,
              backgroundColor: theme.palette.custom.buttonBackgroundColor,
              fontSize: isSmallScreen ? "0.5rem" : "1rem",
              minWidth: isSmallScreen ? "auto" : "64px",
              fontWeight: "bold",
              // boxShadow: theme.palette.custom.boxShadow,
              "&:hover": {
                backgroundColor: theme.palette.custom.buttonHover,
              },
            }}
          >
            More
          </Button>
          <IconButton
            aria-label="add to favorites"
            onClick={onFavoriteClick}
            sx={{
              color: isFavorite(id) ? "red" : "inherit",
            }}
          >
            <FavoriteIcon
              sx={{
                transform: isSmallScreen ? "scale(0.75)" : "scale(1)",
                color: isFavorite(id) ? "red" : "inherit",
              }}
            />
          </IconButton>
        </div>
      </ListItem>
    </List>
  );
};

export default PosterList;
