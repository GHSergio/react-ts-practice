import React, { createContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

type ViewMode = "card" | "list";
type CurrentPage = "menu" | "favorite";

//定義 Poster 屬性型別
interface Poster {
  id: number;
  title: string;
  description: string;
  release_date: string;
  image: string;
}

// 定義 state 屬性型別
export interface MovieContextProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  currentPage: CurrentPage;
  setCurrentPage: (page: CurrentPage) => void;
  movies: Poster[];
  handleMoreClick: (posterId: number) => void;
  favoriteList: Poster[];
  addToFavorite: (posterId: number) => void;
  BASE_URL: string;
  INDEX_URL: string;
  POSTER_URL: string;
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
  const [movies, setMovies] = useState<Poster[]>([]);
  const [favoriteList, setFavoriteList] = useState<Poster[]>([]);

  //顯示Poster detail
  const handleMoreClick = (posterId: number) => {
    const poster = movies.find((movie) => movie.id === posterId);
    if (poster) {
      console.log(`More details for ${poster.title}`);
    }
  };

  //添加該Poster到FavoriteList
  const addToFavorite = (posterId: number) => {
    const poster = movies.find((movie) => movie.id === posterId);
    if (poster && !favoriteList.some((fav) => fav.id === posterId)) {
      setFavoriteList((prev) => [...prev, poster]);
    }
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
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
