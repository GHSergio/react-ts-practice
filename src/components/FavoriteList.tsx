import React, { useEffect, useState } from "react";
import PosterCard from "../components/PosterCard";
import PosterList from "../components/PosterList";
import { useMovie } from "../contexts/useMovie";
import { Box } from "@mui/material";

interface Movie {
  id: number;
  title: string;
  image: string;
}

const FavoriteList: React.FC = () => {
  const { viewMode } = useMovie();
  return (
    <div>
      {viewMode === "card" ? (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 2,
          }}
        >
          {movies.map((movie) => (
            <PosterCard
              key={movie.id}
              poster={POSTER_URL + movie.image}
              title={movie.title}
              onMoreClick={() => handleMoreClick(movie)}
              onFavoriteClick={() => handleFavoriteClick(movie)}
            />
          ))}
        </Box>
      ) : (
        <PosterList /> // 如果視圖模式是列表，則顯示列表組件
      )}
    </div>
  );
};

export default FavoriteList;
