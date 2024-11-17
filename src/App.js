import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material";
import store from "./redux/store";
import { Provider } from "react-redux";


const theme1 = createTheme({
    palette: {
        master: {
            main: "#1D1C1D",
            light: "#1e2e45",
            hover: "#1e2e45",
        },
        accent: {
            main: '#FF5C00',
            light: '#FFFFFF',
            hover: '#7D7373'
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
