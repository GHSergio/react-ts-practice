// Theme.ts
import { createTheme, PaletteOptions } from "@mui/material/styles";
import { PaletteMode } from "@mui/material";

// 擴展 PaletteOptions 接口以包括custom属性
declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      button: string;
      buttonHover: string;
      cardBackground: string;
      inputBackground: string;
      inputTextColor: string;
    };
  }
  interface PaletteOptions {
    custom?: {
      button?: string;
      buttonHover?: string;
      cardBackground?: string;
      inputBackground?: string;
      inputTextColor?: string;
    };
  }
}

// CustomPaletteOptions 擴展 PaletteOptions
interface CustomPaletteOptions extends PaletteOptions {
  mode: PaletteMode;
}

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
  custom: {
    inputBackground: "#CCFFF2",
    inputTextColor: "#CCFFF2",
    button: "#00FF95",
    buttonHover: "#00cc76",
    cardBackground: "#00EAFF",
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
    primary: "#32FFFF",
  },
  custom: {
    inputBackground: "#CCFFF2",
    inputTextColor: "#000000",
    button: "#00FF95",
    buttonHover: "#00cc76",
    cardBackground: "#009898",
  },
};

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 960,
    lg: 1280,
    xl: 1920,
  },
};

export const lightTheme = createTheme({
  palette: lightPalette,
  breakpoints: breakpoints,
});

export const darkTheme = createTheme({
  palette: darkPalette,
  breakpoints: breakpoints,
});
