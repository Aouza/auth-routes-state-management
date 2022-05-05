import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes";
import CreateGlobalStyle from "./styles/globalStyles";

function App() {
  return (
    <BrowserRouter>
      <CreateGlobalStyle />
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
