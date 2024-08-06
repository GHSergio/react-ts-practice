import React from "react";
import PosterCard from "../components/PosterCard";
import PosterList from "../components/PosterList";
import { useMovie } from "../contexts/useMovie";
import {
  Box,
  useTheme,
  useMediaQuery,
  Pagination,
  Typography,
} from "@mui/material";
import MovieModal from "./MovieModal";
const MovieList: React.FC = () => {
  const {
    viewMode,
    // movies,
    POSTER_URL,
    handleMoreClick,
    addToFavorite,
    modalOpen,
    handleCloseModal,
    selectedMovie,
    paginationPage,
    handlePageChange,
    paginatedMovies,
    moviesPerPage,
    filteredMovies,
  } = useMovie();
  const theme = useTheme();

  // 使用 useMediaQuery 來設置不同斷點的樣式
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("xl"));

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
      {filteredMovies.length === 0 ? (
        <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
          <Typography variant="h6">此關鍵字，查無相關搜尋結果！</Typography>
        </Box>
      ) : (
        <>
          {viewMode === "card" ? (
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: 2,
              }}
            >
              {paginatedMovies.map((movie) => (
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
              {paginatedMovies.map((movie) => (
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
        </>
      )}
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
        <Pagination
          count={Math.ceil(filteredMovies.length / moviesPerPage)}
          page={paginationPage}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
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
