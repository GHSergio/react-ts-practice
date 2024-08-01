import { createTheme, PaletteOptions } from "@mui/material/styles";
// 匯入 PaletteMode 介面
import { PaletteMode } from "@mui/material";

// CustomPaletteOptions 擴展 PaletteOptions
interface CustomPaletteOptions extends PaletteOptions {
  mode: PaletteMode;
}
// 定義並實現介面 CustomPaletteOptions 的屬性
const lightPalette: CustomPaletteOptions = {
  mode: "light",
  primary: {
    main: "#1976d2",
  },
  secondary: {
    main: "#dc004e",
  },
  background: {
    default: "#00FFC8",
    paper: "#f5f5f5",
  },
  text: {
    primary: "#000000",
  },
};

const darkPalette: CustomPaletteOptions = {
  mode: "dark",
  primary: {
    main: "#90caf9",
  },
  secondary: {
    main: "#f48fb1",
  },
  background: {
    default: "#121212",
    paper: "#424242",
  },
  text: {
    primary: "#ffffff",
  },
};

export const lightTheme = createTheme({
  palette: lightPalette,
});

export const darkTheme = createTheme({
  palette: darkPalette,
});
