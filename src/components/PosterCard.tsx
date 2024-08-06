import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  IconButton,
  Divider,
  Tooltip,
  useTheme,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useMovie } from "../contexts/useMovie";

interface PosterCardProps {
  id: number;
  poster: string;
  title: string;
  onMoreClick: () => void;
  onFavoriteClick: () => void;
}

const PosterCard: React.FC<PosterCardProps> = ({
  id,
  poster,
  title,
  onMoreClick,
  onFavoriteClick,
}) => {
  const { favoriteList } = useMovie();
  const theme = useTheme();

  // 是否在收藏內
  const isFavorite = (id: number) => {
    return favoriteList.some((favorite) => favorite.id === id);
  };

  // 根據 viewMode 渲染不同的樣式
  return (
    <Card
      sx={{
        height: 520,
        margin: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: theme.palette.custom.cardBackground,
        boxShadow: "0 0 5px 3px rgba(0,0,0,0.3)",
      }}
    >
      <CardContent sx={{ paddingBottom: "16px" }}>
        <CardMedia
          component="img"
          image={poster}
          alt={title}
          sx={{
            height: 350,
            objectFit: "contain",
            maxHeight: "100%",
            marginBottom: "15px",
          }}
        />
        <Tooltip
          title={title}
          componentsProps={{
            tooltip: {
              sx: {
                fontSize: "1.2em",
                backgroundColor: "rgba(0, 0, 0, 0.87)",
                color: "white",
              },
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            {title}
          </Typography>
        </Tooltip>
      </CardContent>
      <Divider />
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button
          variant="outlined"
          onClick={onMoreClick}
          color="error"
          sx={{
            backgroundColor: "#00FF95",
            fontSize: "1rem",
            fontWeight: "bold",
            boxShadow: "0 0 2px 3px rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "#00cc76",
            },
          }}
        >
          More
        </Button>
        <IconButton aria-label="add to favorites" onClick={onFavoriteClick}>
          <FavoriteIcon style={{ color: isFavorite(id) ? "red" : "inherit" }} />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default PosterCard;
