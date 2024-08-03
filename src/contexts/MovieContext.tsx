import React, { createContext, useState, ReactNode } from "react";

type ViewMode = "card" | "list";
type CurrentPage = "menu" | "favorite";

// 定義 state 屬性型別
export interface MovieContextProps {
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  currentPage: CurrentPage;
  setCurrentPage: (page: CurrentPage) => void;
}

export const MovieContext = createContext<MovieContextProps | undefined>(
  undefined
);

export const MovieProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>("card");
  const [currentPage, setCurrentPage] = useState<CurrentPage>("menu");
  console.log("當前顯示頁面 :", currentPage);
  console.log("當前海報模式 :", viewMode);

  return (
    <MovieContext.Provider
      value={{ viewMode, setViewMode, currentPage, setCurrentPage }}
    >
      {children}
    </MovieContext.Provider>
  );
};
