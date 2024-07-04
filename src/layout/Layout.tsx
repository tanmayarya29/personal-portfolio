import { Outlet } from "react-router-dom";
import Header from "./Header";
import { Stack } from "@mui/material";
import Left from "../components/Left";
import Right from "../components/Right";

interface LayoutProps {
  theme: string;
  toggleTheme: () => void;
}

const Layout = (props: LayoutProps) => {
  const { theme, toggleTheme } = props;
  const HeaderProps = {
    theme,
    toggleTheme,
  };
  return (
    <Stack
      direction="column"
      sx={{
        height: "100vh",
        width: "100%",
        backgroundColor: (theme) => theme.palette.background.default,
      }}
    >
      <Header {...HeaderProps} />
      <Left />
      <Right />
      <Stack
        direction="column"
        alignItems="center"
        sx={{
          padding: { xs: "1rem", md: "1rem 4rem" },
          width: "100%",
          height: "100%",
          overflowY: "auto",
          backgroundColor: (theme) => theme.palette.background.default,
          marginTop: "2rem",
        }}
      >
        <Outlet />
      </Stack>
    </Stack>
  );
};

export default Layout;
