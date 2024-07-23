import { Box, IconButton, Stack } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Left = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/tanmayarya29",
      icon: LinkedInIcon,
    },
    {
      name: "Github",
      url: "https://github.com/tanmayarya29",
      icon: GitHubIcon,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/tanmayarya29",
      icon: TwitterIcon,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/tanmayarya29",
      icon: InstagramIcon,
    },
  ];
  return (
    <Stack
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
      padding={0}
      sx={{
        zIndex: 1000,
        position: "fixed",
        bottom: 0,
        left: 10,
        width: "5%",
        // animation bottom to top
        animation: "bottom2top 1s ease-in-out",
        "@keyframes bottom2top": {
          "0%": {
            transform: "translateY(100%)",
            opacity: 0,
          },
          "100%": {
            transform: "translateY(0)",
            opacity: 1,
          },
        },
      }}
      spacing={2}
    >
      {socialLinks.map((link) => (
        <IconButton
          key={link.name}
          href={link.url}
          target="_blank"
          sx={{
            color: "primary.main",
            "&:hover": {
              backgroundColor: "primary.main",
              color: "background.default",
            },
          }}
        >
          <link.icon />
        </IconButton>
      ))}
      <Box
        sx={{
          width: "1px",
          height: "100px",
          backgroundColor: "primary.main",
        }}
      />
    </Stack>
  );
};

export default Left;
