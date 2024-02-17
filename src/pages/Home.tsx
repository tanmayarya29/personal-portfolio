import TheGuy from "../components/TheGuy/TheGuy";
import { Stack, Typography } from "@mui/material";
import { useTypingEffect } from "../hooks/useTypingEffect";

const introduction = {
  title: "Hi, My name is",
  name: "Tanmay",
  designations: [
    "Software Engineer",
    "Full Stack Developer",
    "Machine Learning Enthusiast",
    "Technology Enthusiast",
  ],
  description:
    "I am a Software Engineer based in India. I have a passion for web development and love to create for web and mobile devices. I am a self-taught developer and I love to learn new things and technologies.",
};

const Home = () => {
  const { title, name, designations, description } = introduction;
  const displayText = useTypingEffect({
    text: designations,
    delay: 100,
  });
  return (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      justifyContent="center"
      alignItems="center"
      sx={{
        height: "100vh",
        width: "100%",
        padding: "1rem",
        backgroundColor: (theme) => theme.palette.background.default,
        overflow: "hidden",
        // animation
        animation: "fadeIn 1s ease-in-out",
        "@keyframes fadeIn": {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          width: "100%",
          borderRadius: "10px",
          padding: "2rem",
          backgroundColor: "primary.light",
          // animation
          animation: "left2right 1s ease-in-out",
          "@keyframes left2right": {
            "0%": {
              transform: "translateX(-100%)",
              opacity: 0,
            },
            "100%": {
              transform: "translateX(0)",
              opacity: 1,
            },
          },
        }}
      >
        <TheGuy />
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          textAlign: "center",
          borderRadius: "10px",
          padding: "5rem",
          width: "100%",
          // animation
          animation: "right2left 1s ease-in-out",
          "@keyframes right2left": {
            "0%": {
              transform: "translateX(100%)",
              opacity: 0,
            },
            "100%": {
              transform: "translateX(0)",
              opacity: 1,
            },
          },
        }}
      >
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "500",
            color: "primary.main",
          }}
        >
          {title}
        </Typography>
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            "&::first-letter": {
              color: "primary.main",
            },
          }}
        >
          {name}
        </Typography>
        <Typography
          sx={{
            fontSize: "2rem",
            fontWeight: "100",
            color: "text.secondary",
            marginBottom: "1rem",
            "&::after": {
              content: "'.'",
              color: "primary.main",
              marginLeft: "5px",
              fontWeight: "700",
            },
          }}
        >
          {displayText}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            fontSize: "1.5rem",
            fontWeight: "300",
            color: "text.secondary",
            marginBottom: "1rem",
            textAlign: "justify",
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Home;
