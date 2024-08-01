//Main.tsx
import React from "react";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
import { Grid } from "@mui/material";

// import "./styles/index.scss";
const Main: React.FC = () => {
  return (
    <>
      <Grid container spacing={3} sx={{ padding: 0 }}>
        <Grid item xs={12} sx={{ padding: 0 }}>
          <Navbar />
        </Grid>
        <Grid item xs={12} sx={{ padding: 0 }}>
          <SearchBar />
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
