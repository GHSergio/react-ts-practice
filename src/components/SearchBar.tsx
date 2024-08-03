import React, { useState } from "react";
import {
  Grid,
  TextField,
  IconButton,
  Button,
  useMediaQuery,
} from "@mui/material";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import ViewListIcon from "@mui/icons-material/ViewList";
// import useMediaQuery from "@mui/material/useMediaQuery";
import { useMovie } from "../contexts/useMovie";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const isMobile = useMediaQuery("(max-width:720px)");
  //從Movie Context 提取 setViewMode
  const { viewMode, setViewMode } = useMovie();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
  };

  return (
    <Grid container spacing={2} p={2} alignItems="center">
      <Grid
        item
        container
        direction={isMobile ? "column" : "row"}
        spacing={1}
        alignItems="center"
        xs={isMobile ? 12 : true}
        marginX={"10px"}
      >
        {/* 搜尋框 */}
        <Grid
          item
          xs={isMobile ? 12 : true}
          style={{
            flex: isMobile ? "none" : "0 0 auto",
            minWidth: isMobile ? "100%" : "250px",
          }}
        >
          <TextField
            label="Search Movies"
            variant="outlined"
            fullWidth
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </Grid>
        {/* 搜尋按鈕 */}
        <Grid
          item
          xs={isMobile ? 12 : true}
          style={{
            flex: isMobile ? "none" : "0 0 auto",
            minWidth: isMobile ? "100%" : "70px",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSearch}
            fullWidth
          >
            Search
          </Button>
        </Grid>
      </Grid>
      {/* 排列模式切換按鈕 */}
      <Grid
        item
        style={{ textAlign: isMobile ? "center" : "right", flexShrink: 1 }}
      >
        <IconButton
          onClick={() => setViewMode?.("card")}
          color={viewMode === "card" ? "primary" : "default"}
        >
          <ViewModuleIcon />
        </IconButton>
        <IconButton
          onClick={() => setViewMode?.("list")}
          color={viewMode === "list" ? "primary" : "default"}
        >
          <ViewListIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default SearchBar;
