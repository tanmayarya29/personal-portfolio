import { Stack, Typography, Chip, Button } from "@mui/material";
import aboutData from "../data/data.json";

const data = {
  title: "Get in touch",
  subtitle: "I am available for freelance work. Connect with me via email:",
  email: aboutData.about.email,
};

const Contact = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
      spacing={3}
      sx={{
        border: "1px solid",
        borderColor: "primary.main",
        borderRadius: "10px",
        maxWidth: "fit-content",
        padding: "10rem 3rem",
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
      <Typography variant="h5" gutterBottom>
        {data.title}
      </Typography>
      <Typography variant="body1">{data.subtitle}</Typography>
      <Chip
        label={data.email}
        sx={{
          backgroundColor: "background.paper",
          color: "primary.main",
          borderColor: "primary.main",
          border: "1px solid",
          "&:hover": {
            border: "primary.dark",
          },
          width: "fit-content",
        }}
      />
      <Button
        href={`mailto:${data.email}`}
        variant="contained"
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          "&:hover": {
            backgroundColor: "primary.dark",
          },
        }}
      >
        Say Hello
      </Button>
    </Stack>
  );
};

export default Contact;
