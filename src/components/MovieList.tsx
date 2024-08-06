import React from "react";
import PosterCard from "../components/PosterCard";
import PosterList from "../components/PosterList";
import { useMovie } from "../contexts/useMovie";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import MovieModal from "./MovieModal";

const MovieList: React.FC = () => {
  const {
    viewMode,
    movies,
    POSTER_URL,
    handleMoreClick,
    addToFavorite,
    modalOpen,
    handleCloseModal,
    selectedMovie,
  } = useMovie();
  const theme = useTheme();

  // 使用 useMediaQuery 來設置不同斷點的樣式
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  // 設置不同 breakPoint 排版
  const getGridTemplateColumns = () => {
    if (isSmallScreen) {
      return "repeat(auto-fit, minmax(300px, 1fr))";
    }
    if (isMediumScreen) {
      return "repeat(auto-fit, minmax(500px, 1fr))";
    }
    if (isLargeScreen) {
      return "repeat(auto-fit, minmax(600px, 1fr))";
    }
    return "repeat(auto-fit, minmax(600px, 1fr))";
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
              id={movie.id}
              poster={POSTER_URL + movie.image}
              title={movie.title}
              onMoreClick={() => handleMoreClick?.(movie.id)}
              onFavoriteClick={() => addToFavorite?.(movie.id)}
            />
          ))}
        </Box>
      ) : (
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: getGridTemplateColumns(),
            gap: 2,
          }}
        >
          {movies.map((movie) => (
            <PosterList
              key={movie.id}
              id={movie.id}
              poster={POSTER_URL + movie.image}
              title={movie.title}
              onMoreClick={() => handleMoreClick?.(movie.id)}
              onFavoriteClick={() => addToFavorite?.(movie.id)}
            />
          ))}
        </Box>
      )}
      {selectedMovie && (
        <MovieModal
          open={modalOpen}
          handleClose={handleCloseModal}
          movie={selectedMovie}
        />
      )}
    </div>
  );
};

export default MovieList;
