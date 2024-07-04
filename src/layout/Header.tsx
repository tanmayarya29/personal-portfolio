import { Stack, Typography, IconButton, CssBaseline, AppBar, Toolbar, Box, Divider, List, ListItem, Drawer } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useLocation, useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../assets/logoNoBg.png";
import aboutData from "../data/data.json";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

interface HeaderProps {
  theme: string;
  toggleTheme: () => void;
  window?: () => Window;
}

const data = {
  name: aboutData.about.name,
  logo: logo,
};
const drawerWidth = 320;
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

  //
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{
      textAlign: 'left',
      gap: 2,
      padding: 2,
    }}>
      <Typography
        color="inherit"
        sx={{
          cursor: "pointer",
          fontWeight: "500",
          fontSize: "3rem",
          textTransform: "uppercase",
          letterSpacing: "0.1em",
          color: (theme) => theme.palette.primary.main,
          textShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          "&:hover": {
            color: (theme) => theme.palette.primary.dark,
          },
          padding: 2,
        }}
        onClick={() => navigate("/")}
      >
        <img src={data.logo} alt="logo" style={{ height: "3rem" }} />
        {/* {data.name} */}
      </Typography>
      <Divider />
      <List>
        {rightMenuItems.map((item) => (
          <ListItem>
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
                  fontWeight: "300",
                  fontSize: "2rem",
                  letterSpacing: "0em",
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
          </ListItem>
        ))}
      </List>
    </Box >
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  //

  return (
    <Stack>
      <CssBaseline />
      <AppBar
        component="nav"
        elevation={0}
      >
        <Toolbar
          sx={{
            backgroundColor: (theme) => theme.palette.background.default,
            color: (theme) => theme.palette.primary.main,
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
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              display: { sm: 'none' },
              marginRight: 1,
              color: (theme) => theme.palette.primary.main,

            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            color="inherit"
            sx={{
              cursor: "pointer",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: (theme) => theme.palette.primary.main,
              textShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
              "&:hover": {
                color: (theme) => theme.palette.primary.dark,
              },
              paddingTop: 2,
            }}
            onClick={() => navigate("/")}
          >
            <img src={data.logo} alt="logo" style={{
              height: "3rem",
            }} />
            {/* {data.name} */}
          </Typography>
          <Stack
            direction="row"
            sx={{
              display: { xs: 'none', sm: 'flex' },
              ml: 'auto',
            }}
            spacing={5}
          >
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
            <IconButton onClick={toggleTheme}
              sx={{
                marginLeft: 'auto',
                color: (theme) => theme.palette.primary.main,
              }}
            >
              {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Stack>
          <IconButton onClick={toggleTheme}
            sx={{
              marginLeft: 'auto',
              color: (theme) => theme.palette.primary.main,
              display: { sm: 'none' },
            }}
          >
            {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          elevation={0}
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
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
          {drawer}
        </Drawer>
      </nav>
    </Stack >
    // <Stack
    //   direction="row"
    //   justifyContent="space-between"
    //   alignItems="center"
    //   padding={3}
    //   sx={{
    //     backgroundColor: (theme) => theme.palette.background.default,
    //     width: "100%",
    //     // animation fade
    //     animation: "fade 1s ease-in-out",
    //     "@keyframes fade": {
    //       "0%": {
    //         opacity: 0,
    //       },
    //       "100%": {
    //         opacity: 1,
    //       },
    //     },
    //   }}
    // >
    //   <Stack direction="row" spacing={2}>
    //     <Typography
    //       color="inherit"
    //       sx={{
    //         cursor: "pointer",
    //         fontWeight: "500",
    //         fontSize: "2rem",
    //         textTransform: "uppercase",
    //         letterSpacing: "0.1em",
    //         color: (theme) => theme.palette.primary.main,
    //         textShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    //         "&:hover": {
    //           color: (theme) => theme.palette.primary.dark,
    //         },
    //       }}
    //       onClick={() => navigate("/")}
    //     >
    //       <img src={data.logo} alt="logo" style={{ height: "3rem" }} />
    //       {/* {data.name} */}
    //     </Typography>
    //   </Stack>
    //   <Stack direction="row" spacing={5} alignItems="center">
    //     {rightMenuItems.map((item) => (
    //       <NavLink
    //         key={item.label}
    //         to={item.path}
    //         style={{
    //           color: "inherit",
    //           cursor: "pointer",
    //           textDecoration: "none",
    //         }}
    //       >
    //         <Typography
    //           variant="h6"
    //           color="inherit"
    //           sx={{
    //             fontWeight: "bold",
    //             letterSpacing: "0.1em",
    //             color: activePath === item.path ? "primary.main" : "inherit",
    //             "&:hover": {
    //               color: "primary.dark",
    //             },
    //             // custom underline
    //             "&::after": {
    //               content: '""',
    //               display: "block",
    //               height: "2px",
    //               backgroundColor: "primary.main",
    //               transition: "width 0.3s",
    //               width: activePath === item.path ? "100%" : "0",
    //             },
    //             "&:hover::after": {
    //               width: "100%",
    //             },
    //           }}
    //         >
    //           {item.label}
    //         </Typography>
    //       </NavLink>
    //     ))}
    //     <IconButton onClick={toggleTheme} color="inherit">
    //       {theme === "light" ? <LightModeIcon /> : <DarkModeIcon />}
    //     </IconButton>
    //   </Stack>
    // </Stack>
  );
};

export default Header;
