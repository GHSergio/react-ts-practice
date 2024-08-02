import React, { useEffect, useState } from "react";
import PosterCard from "../components/PosterCard";
import PosterList from "../components/PosterList";
import { useViewMode } from "../contexts/useViewMode";
import { Box } from "@mui/material";
import axios from "axios";

// API URL
const BASE_URL = `https://webdev.alphacamp.io`;
const INDEX_URL = BASE_URL + `/api/movies/`;
const POSTER_URL = BASE_URL + `/posters/`;

interface Movie {
  id: number;
  title: string;
  image: string;
}

const MovieList: React.FC = () => {
  const { viewMode } = useViewMode();
  const [movies, setMovies] = useState<Movie[]>([]);

  // 初始獲取Poster data
  useEffect(() => {
    console.log("Fetching movies from API:", INDEX_URL); // 打印API URL
    axios
      .get(INDEX_URL)
      .then((response) => {
        console.log("API response:", response); // 打印API響應
        if (response.data && response.data.results) {
          setMovies(response.data.results);
        } else {
          console.error("Invalid API response structure:", response.data); // 打印無效響應結構
        }
      })
      .catch((error) => {
        console.error("Error fetching the movies:", error); // 打印錯誤
      });
  }, []);

  const handleMoreClick = (movie: Movie) => {
    console.log(`More details for ${movie.title}`);
  };

  const handleFavoriteClick = (movie: Movie) => {
    console.log(`${movie.title} added to favorites`);
  };

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

export default MovieList;
