import { Stack, Typography, IconButton } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoNoBg.png";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
}

const data = {
  name: "Tanmay",
  logo: logo,
};

const Header = (props: HeaderProps) => {
  const { theme, toggleTheme } = props;
  const navigate = useNavigate();
  const location = useLocation();

  const activePath = location.pathname;

  const rightMenuItems = [
    { label: "Work", path: "/work" },
    { label: "About", path: "/about" },
    { label: "Education", path: "/education" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      padding={3}
      sx={{
        backgroundColor: (theme) => theme.palette.background.default,
        width: "100%",
        // animation fade
        animation: "fade 1s ease-in-out",
        "@keyframes fade": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <Stack direction="row" spacing={2}>
        <Typography
          color="inherit"
          sx={{
            cursor: "pointer",
            fontWeight: "500",
            fontSize: "2rem",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            color: (theme) => theme.palette.primary.main,
            textShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            "&:hover": {
              color: (theme) => theme.palette.primary.dark,
            },
          }}
          onClick={() => navigate("/")}
        >
          <img src={data.logo} alt="logo" style={{ height: "3rem" }} />
          {/* {data.name} */}
        </Typography>
      </Stack>
      <Stack direction="row" spacing={5} alignItems="center">
        {rightMenuItems.map((item) => (
          <NavLink
            key={item.label}
            to={item.path}
            style={{
              color: "inherit",
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <Typography
              variant="h6"
              color="inherit"
              sx={{
                fontWeight: "bold",
                letterSpacing: "0.1em",
                color: activePath === item.path ? "primary.main" : "inherit",
                "&:hover": {
                  color: "primary.dark",
                },
                // custom underline
                "&::after": {
                  content: '""',
                  display: "block",
                  height: "2px",
                  backgroundColor: "primary.main",
                  transition: "width 0.3s",
                  width: activePath === item.path ? "100%" : "0",
                },
                "&:hover::after": {
                  width: "100%",
                },
              }}
            >
              {item.label}
            </Typography>
          </NavLink>
        ))}
        <IconButton onClick={toggleTheme} color="inherit">
          {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default Header;
