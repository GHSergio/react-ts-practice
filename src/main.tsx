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
  console.log(currentPage);
  return (
    <>
      <Grid container spacing={3} sx={{ padding: 0 }}>
        {/* Navbar */}
        <Grid item xs={12} sx={{ padding: 0 }}>
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
