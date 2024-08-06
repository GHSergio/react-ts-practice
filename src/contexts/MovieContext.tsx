import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";
import { useTheme, useMediaQuery } from "@mui/material";

// 規範 值
type ViewMode = "card" | "list";
type CurrentPage = "menu" | "favorite";

// 定義 Movie 屬性型別
interface Movie {
  id: number;
  title: string;
  image: string;
  release_date: string;
  description: string;
}

// 定義 state 屬性型別
export interface MovieContextProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  currentPage: CurrentPage;
  setCurrentPage: (page: CurrentPage) => void;
  movies: Movie[];
  handleMoreClick: (movieId: number) => void;
  favoriteList: Movie[];
  addToFavorite: (movieId: number) => void;
  BASE_URL: string;
  INDEX_URL: string;
  POSTER_URL: string;
  modalOpen: boolean;
  selectedMovie: Movie | null;
  setSelectedMovie: (movie: Movie | null) => void;
  handleCloseModal: () => void;
  paginationPage: number;
  setPaginationPage: (page: number) => void;
  moviesPerPage: number;
  handlePageChange: (event: React.ChangeEvent<unknown>, value: number) => void;
  paginatedMovies: Movie[];
}

const BASE_URL = `https://webdev.alphacamp.io`;
const INDEX_URL = BASE_URL + `/api/movies/`;
const POSTER_URL = BASE_URL + `/posters/`;

export const MovieContext = createContext<MovieContextProps | undefined>(
  undefined
);

//React.FC<{ children: ReactNode }> 指定了 MovieProvider 是一個 React 函數元件，並且它接收一個屬性 children，其類型是 ReactNode。
//這樣做確保了 MovieProvider 這個元件在使用時必須接收一個 children 屬性，而且這個 children 可以是任何合法的 React 元素或節點。
export const MovieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>("card");
  const [currentPage, setCurrentPage] = useState<CurrentPage>("menu");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [favoriteList, setFavoriteList] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [paginationPage, setPaginationPage] = useState(1);

  //定義 breakpoint
  const theme = useTheme();

  const isSmallScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down("md"));
  const isLargeScreen = useMediaQuery(theme.breakpoints.down("lg"));
  const isExtraLargeScreen = useMediaQuery(theme.breakpoints.down("xl"));

  //每頁顯示movie筆數
  let moviesPerPage;
  if (isSmallScreen) {
    moviesPerPage = 4;
  } else if (isMediumScreen) {
    moviesPerPage = 8;
  } else if (isLargeScreen) {
    moviesPerPage = 12;
  } else if (isExtraLargeScreen) {
    moviesPerPage = 16;
  } else {
    moviesPerPage = 21;
  }

  const startIndex = (paginationPage - 1) * moviesPerPage;
  const paginatedMovies = movies.slice(startIndex, startIndex + moviesPerPage);

  //處理換頁
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPaginationPage(value);
  };

  //顯示 Movie detail
  const handleMoreClick = (movieId: number) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    if (selectedMovie) {
      setSelectedMovie(selectedMovie);
      setModalOpen(true);
    }
  };

  //添加該Poster到FavoriteList
  const addToFavorite = (movieId: number) => {
    const selectedMovie = movies.find((movie) => movie.id === movieId);
    if (selectedMovie && !favoriteList.some((fav) => fav.id === movieId)) {
      setFavoriteList((prev) => [...prev, selectedMovie]);
    }
  };

  //關閉 Modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedMovie(null);
  };

  console.log("當前顯示頁面 :", currentPage);
  console.log("當前海報模式 :", viewMode);
  console.log("當前收藏列表 :", favoriteList);

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

  return (
    <MovieContext.Provider
      value={{
        viewMode,
        setViewMode,
        currentPage,
        setCurrentPage,
        favoriteList,
        addToFavorite,
        BASE_URL,
        INDEX_URL,
        POSTER_URL,
        movies,
        handleMoreClick,
        modalOpen,
        handleCloseModal,
        selectedMovie,
        setSelectedMovie,
        paginationPage,
        setPaginationPage,
        handlePageChange,
        moviesPerPage,
        paginatedMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
