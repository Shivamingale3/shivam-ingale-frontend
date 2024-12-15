import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material";
import store from "./redux/store";
import { Provider } from "react-redux";

const theme1 = createTheme({
  palette: {
    master: {
      main: "#000000",
      light: "#1e2e45",
      hover: "#1e2e45",
    },
    accent: {
      main: "#ffffff",
      light: "#FFFFFF",
      hover: "#c9c8c7",
    },
  },
});
const Routes = () => useRoutes(routes);
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ThemeProvider theme={theme1}>
          <Routes />
        </ThemeProvider>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
