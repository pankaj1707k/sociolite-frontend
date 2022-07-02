import React from 'react'
import "../css/App.css"
import bg from "../img/bg.svg"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { yellow } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: yellow[500],
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});


function Signup() {
    // const myStyle={
    //     backgroundImage: `url(${bg})`,
    //     height: '1000px',
    //     marginTop:'-70px',
    //     fontSize:'50px',
    //     backgroundSize: 'cover',
    //     backgroundRepeat:'repeat-y',
    // };
        const handleSubmit = (event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          console.log({
            email: data.get('email'),
            password: data.get('password'),
          });
        };
      
    return (
    // <div style={myStyle}>
    <div style={{backgroundImage: `url(${bg})`}}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={5}
          sm={4}
          md={7}
        >
        <h1 style={{fontSize:'5rem',color:'yellow',marginLeft:'1em',marginTop:'7em'}}>Sociolite</h1>
        </Grid>
        <Grid item xs={12} sm={8} md={5} elevation={6} square style={{backgroundColor:'transparent', boxShadow:'none !important'}}>
          <Box
            sx={{
              my: 8,
              mx: 12,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar> */}
            <ThemeProvider theme={theme}>
            <Typography component="h1" variant="h5" style={{color:'white',marginTop:'2em'}}>
              Sign Up
            </Typography>
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal" 
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                Sign Up
              </Button>
            </Box>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </div>
    );}  

export default Signup;