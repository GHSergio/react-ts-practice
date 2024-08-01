//APP.tsx
import ThemeProviderComponent from "./contexts/ThemeContext";
import Main from "./Main";
import "./styles/index.scss";

function App() {
  return (
    <ThemeProviderComponent>
      <Main />
    </ThemeProviderComponent>
  );
}

export default App;
