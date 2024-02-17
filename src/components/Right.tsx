import { Box, Stack, Link } from "@mui/material";
import aboutData from "../data/data.json";

const Right = () => {
  const email = aboutData.about.email;
  return (
    <Stack
      direction="column"
      justifyContent="flex-end"
      alignItems="center"
      padding={0}
      sx={{
        position: "fixed",
        bottom: 0,
        right: 0,
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
      <Box
        sx={{
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          color: "primary.main",
          "&:hover": {
            color: "background.default",
          },
        }}
      >
        <Link href={`mailto:${email}`}>{email}</Link>
      </Box>
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

export default Right;
