import {
  Grid,
  Stack,
  Box,
  Typography,
  Link,
  Chip,
  IconButton,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const data = {
  works: [
    {
      company: "Google",
      position: "Software Engineer",
      duration: "2020 - Present",
      technologies: ["React", "Node", "MongoDB", "Express"],
      tasks: [
        "Developed a web application for internal use using React and Node",
        "Worked on the backend using Node and Express",
        "Worked on the database using MongoDB",
      ],
      achievements: ["Won internal hackathon"],
    },
    {
      company: "Microsoft",
      position: "Software Engineer",
      duration: "2018 - 2020",
      technologies: ["Angular", "C#", "SQL"],
      tasks: [
        "Developed a web application for internal use using Angular and C#",
        "Worked on the database using SQL",
      ],
      achievements: ["Won internal hackathon"],
    },
    {
      company: "Amazon",
      position: "Software Engineer",
      duration: "2016 - 2018",
      technologies: ["React", "Node", "MongoDB", "Express"],
      tasks: [
        "Developed a web application for internal use using React and Node",
        "Worked on the backend using Node and Express",
        "Worked on the database using MongoDB",
      ],
      achievements: ["Won internal hackathon"],
    },
    {
      company: "Facebook",
      position: "Software Engineer",
      duration: "2014 - 2016",
      technologies: ["React", "Node", "MongoDB", "Express"],
      tasks: [
        "Developed a web application for internal use using React and Node",
        "Worked on the backend using Node and Express",
        "Worked on the database using MongoDB",
      ],
      achievements: ["Won internal hackathon"],
    },
  ],
  projects: [
    {
      title: "E-commerce Website",
      link: "https://bazar-app.vercel.app/",
      github: "https://github.com/tanmayarya29/bazar-frontend",
      technologies: ["React", "Node", "MongoDB", "Express"],
      description: "A website for e-commerce",
      image: "https://source.unsplash.com/1600x900/?ecommerce",
    },
    {
      title: "Portfolio Website",
      link: "https://iamtanmay.vercel.app/",
      github: "https://github.com/tanmayarya29/personal-portfolio/",
      technologies: ["React", "Node", "MongoDB", "Express"],
      description: "A website for portfolio",
      image: "https://source.unsplash.com/1600x900/?portfolio",
    },
  ],
};

const Work = () => {
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignItems="center"
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
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Work Experience
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
        {data.works.map((work, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Box
              sx={{
                padding: "1rem",
                borderRadius: "10px",
                border: "2px solid",
                borderColor: "primary.main",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {work.company}
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  fontWeight: "500",
                }}
              >
                {work.position}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                }}
              >
                {work.duration}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                }}
              >
                Technologies:{" "}
                {work.technologies.map((technology, index) => (
                  <Chip
                    key={index}
                    label={technology}
                    sx={{
                      margin: "0.2rem",
                      border: "1px solid",
                      borderColor: "primary.main",
                      color: "primary.main",
                      backgroundColor: "background.default",
                    }}
                  />
                ))}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                }}
              >
                Tasks:
              </Typography>
              <ul>
                {work.tasks.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
              <Typography
                sx={{
                  fontWeight: "500",
                }}
              >
                Achievements:
              </Typography>
              <ul>
                {work.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </Box>
          </Grid>
        ))}
      </Grid>
      <Typography
        variant="h3"
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        Projects
      </Typography>
      <Grid container spacing={3} sx={{ marginTop: "2rem" }}>
        {data.projects.map((project, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Stack
              sx={{
                padding: "1rem",
                borderRadius: "10px",
                border: "2px solid",
                borderColor: "primary.main",
              }}
              spacing={2}
            >
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Link href={project.link} target="_blank">
                  <Typography
                    variant="h5"
                    sx={{
                      fontWeight: "bold",
                    }}
                  >
                    {project.title}
                  </Typography>
                </Link>
                <Link href={project.github} target="_blank">
                  <IconButton>
                    <GitHubIcon />
                  </IconButton>
                </Link>
              </Stack>

              <Typography
                sx={{
                  fontWeight: "500",
                }}
              >
                Technologies:{" "}
                {project.technologies.map((technology, index) => (
                  <Chip
                    key={index}
                    label={technology}
                    sx={{
                      margin: "0.2rem",
                      border: "1px solid",
                      borderColor: "primary.main",
                      color: "primary.main",
                      backgroundColor: "background.default",
                    }}
                  />
                ))}
              </Typography>
              <Typography
                sx={{
                  fontWeight: "500",
                }}
              >
                Description: {project.description}
              </Typography>
              <img
                src={project.image}
                alt="project"
                style={{ width: "100%", marginTop: "1rem" }}
              />
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

export default Work;
