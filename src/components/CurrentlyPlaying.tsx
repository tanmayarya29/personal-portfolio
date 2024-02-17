import { Stack, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import songData from "../data/data.json";

const CurrentlyPlaying = () => {
  const data = songData.song;
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="center"
      spacing={2}
      sx={{
        padding: "0.5rem 4rem 0.5rem 1rem",
        borderRadius: "500px",
        backgroundColor: (theme) => theme.palette.primary.main,
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
      <Stack direction="row" alignItems="center" justifyContent="center">
        <a href={data.link} target="_blank" rel="noreferrer">
          <PlayArrowIcon
            sx={{
              color: (theme) => theme.palette.background.default,
              fontSize: "3rem",
            }}
          />
        </a>
      </Stack>
      <Stack direction="column" alignItems="flex-start" justifyContent="center">
        <Typography variant="subtitle1">On Repeat</Typography>
        <Typography
          sx={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            color: (theme) => theme.palette.background.default,
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          {data.song}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default CurrentlyPlaying;
