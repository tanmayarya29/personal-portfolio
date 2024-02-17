import { useNavigate } from "react-router-dom";
import { Stack, Typography, Link } from "@mui/material";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <Stack
      spacing={2}
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "primary.main",
        }}
      >
        404
      </Typography>
      <Typography
        variant="h4"
        sx={{
          color: "text.secondary",
        }}
      >
        Page Not Found!
      </Typography>
      <Link
        onClick={() => navigate("/")}
        underline="hover"
        sx={{
          color: "primary.main",
          cursor: "pointer",
        }}
      >
        Go to Home
      </Link>
    </Stack>
  );
};

export default NotFound;
