//Main.tsx
import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { Grid, Box } from "@mui/material";
import MovieList from "./components/MovieList";
// import "./styles/index.scss";

const Main: React.FC = () => {
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
            <MovieList />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
