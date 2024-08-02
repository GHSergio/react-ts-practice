import { useContext } from "react";
import { ViewModeContext, ViewModeContextProps } from "./ViewModeContext";
export const useViewMode = (): ViewModeContextProps => {
  const context = useContext(ViewModeContext);
  if (!context) {
    throw new Error("useViewMode must be used within a ViewModeProvider");
  }
  return context;
};
