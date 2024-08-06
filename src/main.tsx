//Main.tsx
import React from "react";
import { Grid, Box } from "@mui/material";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import FavoriteList from "./components/MovieList";
import { useMovie } from "./contexts/useMovie";
// import "./styles/index.scss";

const Main: React.FC = () => {
  const { currentPage } = useMovie();
  return (
    <>
      <Grid container sx={{ paddingBottom: "15px" }}>
        {/* Navbar */}
        <Grid
          item
          xs={12}
          sx={{
            position: "sticky",
            top: 0,
            zIndex: 1000,
          }}
        >
          <Navbar />
        </Grid>
        {/* SearchBar */}
        <Grid item xs={12} sx={{ padding: 0 }}>
          <SearchBar />
        </Grid>
        {/* MovieList */}
        <Grid item xs={12}>
          <Box sx={{ width: "95%", margin: "0 auto" }}>
            {currentPage === "menu" ? <MovieList /> : <FavoriteList />}
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
