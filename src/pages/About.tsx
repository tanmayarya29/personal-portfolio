import { Stack, Grid, Box, Typography, Link, Chip } from "@mui/material";
import aboutData from "../data/data.json";

const About = () => {
  const data = aboutData.about;
  return (
    <Grid
      container
      spacing={10}
      sx={{
        padding: "2rem",
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
      <Grid item xs={12} md={4}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src={data.image}
            alt="Tanmay Mishra"
            style={{ width: "200px", height: "200px", borderRadius: "50%" }}
          />
        </Box>
      </Grid>
      <Grid item xs={12} md={8}>
        <Typography variant="h4" gutterBottom>
          {data.name}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {data.description}
        </Typography>
        <Link href={data.resumeLink} target="_blank" rel="noreferrer">
          View Resume
        </Link>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Skills
        </Typography>
        <Grid container spacing={1}>
          {data.skills.map((skill, index) => (
            <Grid item key={index}>
              <Chip
                label={skill}
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Certifications
        </Typography>
        <Grid container spacing={2}>
          {data.certifications.map((certification, index) => (
            <Grid item key={index} xs={12} md={3} spacing={1}>
              <Stack
                direction="column"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  border: "1px solid",
                  borderColor: "primary.main",
                  padding: "8px",
                  borderRadius: "10px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Link
                  href={certification.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <Typography variant="body1" gutterBottom>
                    {certification.title}
                  </Typography>
                </Link>
                <Typography variant="body2" gutterBottom>
                  {certification.issuer}
                </Typography>
                <Typography variant="caption" gutterBottom>
                  {certification.date}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Hobbies
        </Typography>
        <Grid container spacing={1}>
          {data.hobbies.map((hobby, index) => (
            <Grid item key={index}>
              <Chip
                label={hobby}
                sx={{
                  backgroundColor: "primary.main",
                  color: "white",
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h5" gutterBottom>
          Achievements
        </Typography>
        <Grid container spacing={2}>
          {data.achievements.map((achievement, index) => (
            <Grid item key={index} xs={12} md={3} spacing={1}>
              <Stack
                direction="column"
                spacing={1}
                justifyContent="center"
                alignItems="center"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  border: "1px solid",
                  borderColor: "primary.main",
                  padding: "8px",
                  borderRadius: "10px",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Typography variant="body1" gutterBottom>
                  {achievement.title}
                </Typography>
                <Typography variant="body2" gutterBottom>
                  {achievement.issuer}
                </Typography>
                <Typography variant="caption" gutterBottom>
                  {achievement.date}
                </Typography>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid >
  );
};

export default About;
