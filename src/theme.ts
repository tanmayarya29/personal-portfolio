import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    primary: {
      main: "#009688",
    },
    secondary: {
      main: "#FF5722",
    },
    mode: "light",
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#3F51B5",
    },
    secondary: {
      main: "#FFC107",
    },
    mode: "dark",
  },
});

export { lightTheme, darkTheme };
