//APP.tsx
import React from "react";
import { ThemeProviderComponent } from "./contexts/ThemeContext";
import { MovieProvider } from "./contexts/MovieContext";
import Main from "./Main";
import "./styles/index.scss";

function App() {
  return (
    <ThemeProviderComponent>
      <MovieProvider>
        <Main />
      </MovieProvider>
    </ThemeProviderComponent>
  );
}

export default App;
