import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CircularProgress,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hardcodedEmail = "test";
  const hardcodedPassword = "123";

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      if (email === hardcodedEmail && password === hardcodedPassword) {
        navigate("/"); // Navigate to the home page if credentials match
      } else {
        alert("Invalid email or password");
      }
    }, 2000); // Simulate a 2-second delay for the loader
  };

  return (
    <Box
      sx={{
        backgroundImage: `url('/bg.png')`, // Local image from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          width: { xs: "90%", sm: "275px" }, // Customizable width
          height: "auto", // Adjust height based on content
          bgcolor: "rgba(255, 255, 255, 0.3)", // Slightly transparent background
          borderRadius: 4,
          boxShadow: 3,
          p: 5,
          ml: "auto",
          mr: "100px",
        }}
      >
        <Typography
          variant="h5"
          gutterBottom
          align="center"
          sx={{ fontWeight: "bold" }} // Bold heading
        >
          Sign In to your account
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Box sx={{ position: "relative", mt: 4, mb: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ bgcolor: "#D3B7E2", color: "white" }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} /> : "Sign In"}
            </Button>
          </Box>
        </form>

        <Box sx={{ textAlign: "center" }}>
          <Typography variant="body2" align="center">
            Don't have an account?{" "}
            <Link
              component={RouterLink}
              to="/signup" // Link to Sign Up page
              sx={{ color: "#D3B7E2", textDecoration: "none" }} // Light purple link color
            >
              Sign Up
            </Link>
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
