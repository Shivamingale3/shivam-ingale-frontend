import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import { createTheme, ThemeProvider } from "@mui/material";
import store from "./redux/store";
import { Provider } from "react-redux";


const theme1 = createTheme({
    components: {
        MuiDialog: {
            styleOverrides: {
                paper: {
                    borderRadius: "12px",
                    padding: "5px",
                },
            },
        },
        MuiButton: {
            borderRadius: "10px",
            paddingLeft: "20px",
            paddingRight: "20px",
        },
        Card: {
            borderRadius: "10px",
            padding: "20px",
        },
        MuiTextField: {
            borderRadius: "10px",
        },
    },

    palette: {
        master: {
            main: "#1D1C1D",
            light: "#1e2e45",
            hover: "#1e2e45",
        },
        primary: {
            main: "#000000",
            light: "#ffffff",
            hover: "#949494",
        },
        accent: {
            main: '#ff600a',
            light: '#ffffff',
            hover:'#292929'
        },
        error: {
            main: "#FF0000",
            light: "#FF0000",
            hover: "",
        },
        warning: {
            main: "#FF0000",
            light: "#FF0000",
            hover: "",
        },
        info: {
            main: "#014ECC",
            light: "#014EEE",
            hover: "#014E99",
        },
        success: {
            main: "#5DD59E",
            light: "#5DFF9E",
            hover: "#4A9D77",
        },
    },
    typography: {
        primary: {
            main: "#152336",
            light: "#FFFFFF",
            mainLight: "#aaa"
        },

        secondary: {
            main: "#1e2e45",
            light: "#FFFFFF",
        },

        error: {
            main: "red",
            light: "#FFFFFF",
        },

        warning: {
            main: "orange",
            light: "#FFFFFF",
        },

        info: {
            main: "#014ECC",
            light: "#FFFFFF",
        },

        success: {
            main: "#5DD59E",
            light: "#FFFFFF",
        },

        fontFamily: "'Poppins', sans-serif !important",

        h1: {
            fontSize: "1.8rem",
        },

        h2: {
            fontSize: "1.6rem",
        },

        h3: {
            fontSize: "1.4rem",
        },

        h4: {
            fontSize: "1.2rem",
        },

        h5: {
            fontSize: "1rem",
        },
        h6: {
            fontSize: "0.8rem"
        },
        fontWeightBold: "600",
        fontWeightRegular: "400",
        fontWeightLight: "200",
        color: "white",
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
