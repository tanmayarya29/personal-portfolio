import { Stack, Chip, Typography, Grid } from "@mui/material";
import eduData from "../data/data.json";

const Education = () => {
  const data = eduData;
  return (
    <Grid
      container
      spacing={2}
      sx={{
        padding: "0 10%",
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
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Education
        </Typography>
        <Stack direction="column" spacing={3}>
          {data.education.map((education, index) => (
            <Stack
              key={index}
              direction="column"
              spacing={3}
              sx={{
                border: "1px solid",
                borderColor: "primary.main",
                padding: "20px",
                borderRadius: "10px",
                width: "100%",
                height: "100%",
              }}
            >
              <Chip
                label={education.date}
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                  width: "fit-content",
                }}
              />
              <Typography variant="body1" gutterBottom>
                {education.degree}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {education.major}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {education.university}
              </Typography>
              <Typography variant="body2" gutterBottom>
                {education.grade}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Education;
