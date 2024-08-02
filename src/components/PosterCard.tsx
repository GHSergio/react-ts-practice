import React from "react";
import Card from "@mui/material/Card"; // 卡片容器
import CardContent from "@mui/material/CardContent"; // 卡片內容容器
import CardMedia from "@mui/material/CardMedia"; // 用於顯示媒體（如圖像）
import Typography from "@mui/material/Typography"; // 用於顯示文字
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Divider from "@mui/material/Divider";
import Tooltip from "@mui/material/Tooltip"; // 導入 Tooltip 組件

interface PosterCardProps {
  poster: string;
  title: string;
  onMoreClick: () => void;
  onFavoriteClick: () => void;
}

const PosterCard: React.FC<PosterCardProps> = ({
  poster,
  title,
  onMoreClick,
  onFavoriteClick,
}) => {
  return (
    <Card
      sx={{
        height: 520,
        margin: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#00EAFF",
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
                fontSize: "1.2em", // 調整字體大小
                backgroundColor: "rgba(0, 0, 0, 0.87)", // 背景顏色
                color: "white", // 字體顏色
              },
            },
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis",
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
          sx={{
            backgroundColor: "#00FF95",
            fontSize: "1rem",
            fontWeight: "bold",
            boxShadow: "0 0 2px 3px rgba(0,0,0,0.3)",
            "&:hover": {
              backgroundColor: "#00cc76", // 設置 hover 顏色
            },
          }}
        >
          More
        </Button>
        <IconButton aria-label="add to favorites" onClick={onFavoriteClick}>
          <FavoriteIcon />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default PosterCard;
