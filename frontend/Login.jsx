import * as React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;

    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    // Validation logic
    if (email === '' || password === '') {
      setErrorMessage('Email and password are required.');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters.');
      return;
    }

    // Check if entered data matches the stored data
    if (!storedUserData || storedUserData.email !== email || storedUserData.password !== password) {
      setErrorMessage('Invalid email or password.');
      return;
    }

    // If validation passes, clear the error message and proceed
    setErrorMessage('');
    navigate('/home');
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh', overflow: 'hidden',  backgroundImage: 'linear-gradient(to bottom, #ccffff 18%, #ffccff 100%)',}}>
        <CssBaseline />
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1,
          }}
        >
         
        </Box>
        {/* Left side text */}
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            p: 2,
            color: 'white',
            textAlign: 'left',
            zIndex: 1,
            pl: 10, // Increased padding to move text farther from the left edge
            pr: 8, // Padding to create space between the text and the login box
          }}
        >
          <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold',color:'black',}}>
            Welcome Back
          </Typography>
            <Typography variant="h6" component="p" sx={{ lineHeight: '1.5', maxWidth: '100%',color:'black',}}>
              Log in to access your dashboard and manage your tasks efficiently.
              If you don't have an account yet, you can sign up and join our platform today.
              Stay connected and productive with our advanced scheduling system.
            </Typography>
        </Grid>
        {/* LoginComponent on the right half, centered */}
        <Grid
          container
          item
          xs={12}
          sm={6}
          md={6}
          component={Box}
          elevation={6}
          square
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ml: 'auto',
            mr: 'auto',
          }}
        >
          <Box
            sx={{
              width: '100%',
              maxWidth: 400,
              py: 4,
              px: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              border: '2px solid black',
              borderRadius: 2,
              boxSizing: 'border-box',
              position: 'absolute',
              right: '8%',
              transform: 'translateY(-50%)',
              top: '50%',
              backgroundColor:'aquamarine', // Solid background color
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)', // Optional: Add shadow for better visibility
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Log in
            </Typography>
            {errorMessage && (
              <Typography component="p" variant="body2" color="error">
                {errorMessage}
              </Typography>
            )}
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Log In
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link href="/signup" variant="body2">
                    Don't have an account? Sign Up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}