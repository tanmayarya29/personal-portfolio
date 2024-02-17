import { Stack, Grid, Box, Typography, Link, Chip } from "@mui/material";

const data = {
  name: "Tanmay Mishra",
  Description:
    "I am a software engineer with 5 years of experience in web development. I have worked with various tech stacks including React, Node, MongoDB, and Express. I have a passion for learning and sharing my knowledge with others. I am a team player and I am always looking for opportunities to learn and grow.",
  resumeLink:
    "https://www.linkedin.com/in/tanmayarya29/overlay/1635553006944/single-media-viewer?type=DOCUMENT&profileId=ACoAACtuYc8BZk9qnV9LV1vHxt4hWqGYgJTrRdE&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BpzNFETTfSE2vIbJEmSjapw%3D%3D",
  skills: ["React", "Node", "MongoDB", "Express", "Angular", "C#", "SQL"],
  image: "https://avatars.githubusercontent.com/u/47280516?v=4",
  certifications: [
    {
      title: "React Developer",
      issuer: "Coursera",
      date: "2020",
      link: "https://www.coursera.org/account/accomplishments/verify/9RJ7XZ6X4Z8D",
    },
    {
      title: "Node Developer",
      issuer: "Udemy",
      date: "2019",
      link: "https://www.udemy.com/certificate/UC-7e2b5b7b-4e9e-4e7f-9e2e-4c6f5e3d3a6c/",
    },
    {
      title: "MongoDB Developer",
      issuer: "Coursera",
      date: "2021",
      link: "https://www.coursera.org/account/accomplishments/verify/9RJ7XZ6X4Z8D",
    },
    {
      title: "Express Developer",
      issuer: "Udemy",
      date: "2020",
      link: "https://www.udemy.com/certificate/UC-7e2b5b7b-4e9e-4e7f-9e2e-4c6f5e3d3a6c/",
    },
    {
      title: "React Developer",
      issuer: "Coursera",
      date: "2020",
      link: "https://www.coursera.org/account/accomplishments/verify/9RJ7XZ6X4Z8D",
    },
    {
      title: "Node Developer",
      issuer: "Udemy",
      date: "2019",
      link: "https://www.udemy.com/certificate/UC-7e2b5b7b-4e9e-4e7f-9e2e-4c6f5e3d3a6c/",
    },
    {
      title: "MongoDB Developer",
      issuer: "Coursera",
      date: "2021",
      link: "https://www.coursera.org/account/accomplishments/verify/9RJ7XZ6X4Z8D",
    },
    {
      title: "Express Developer",
      issuer: "Udemy",
      date: "2020",
      link: "https://www.udemy.com/certificate/UC-7e2b5b7b-4e9e-4e7f-9e2e-4c6f5e3d3a6c/",
    },
  ],
  hobbies: ["Reading", "Gaming", "Traveling", "Cooking", "Photography"],
  achievements: [
    {
      title: "Winner of Hackathon",
      issuer: "Google",
      date: "2019",
    },
    {
      title: "Top 100 in codechef contest",
      issuer: "CodeChef",
      date: "2018",
    },
    {
      title: "Winner of Hackathon",
      issuer: "Google",
      date: "2019",
    },
    {
      title: "Top 100 in codechef contest",
      issuer: "CodeChef",
      date: "2018",
    },
  ],
};

const About = () => {
  return (
    <Grid
      container
      spacing={10}
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
          {data.Description}
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
        <Stack direction="row" spacing={1}>
          {data.hobbies.map((hobby, index) => (
            <Chip
              key={index}
              label={hobby}
              sx={{
                backgroundColor: "primary.main",
                color: "white",
              }}
            />
          ))}
        </Stack>
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
    </Grid>
  );
};

export default About;
