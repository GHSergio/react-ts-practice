//APP.tsx
import { ThemeProviderComponent } from "./contexts/ThemeContext";
import { ViewModeProvider } from "./contexts/ViewModeContext";
import Main from "./Main";
import "./styles/index.scss";

function App() {
  return (
    <ThemeProviderComponent>
      <ViewModeProvider>
        <Main />
      </ViewModeProvider>
    </ThemeProviderComponent>
  );
}

export default App;
