import React, { useState } from "react";
import "../css/App.css"
import bg from "../img/bg.svg"
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
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


function Profile() {
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

        const [file, setFile] = useState();
        function handleChange(e) {
            console.log(e.target.files);
            setFile(URL.createObjectURL(e.target.files[0]));
        }    
      
    return (
    // <div style={myStyle}>
    <div style={{backgroundImage: `url(${bg})`}}>
      <Grid container component="main" sx={{ height: '100%',minHeight:'100vh'}}>
        <CssBaseline />
        <Grid
          item
          xs={5}
          sm={4}
          md={7}
        >
        <Box
            sx={{
              my: 2,
              mx: 16,
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
              Edit Details
            </Typography>
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <div className="App">
            <input type="file" onChange={handleChange}/>
            <img alt="Upload here" style ={{height:'150px', width:'150px', borderRadius:'50%', borderColor:'transparent'}} src={file} />
            </div>

            <TextField
                margin="normal"
                fullWidth
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="firstname"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastname"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal" 
                fullWidth
                name="dob"
                label="Date of Birth"
                type="date"
                id="dob"
                autoComplete="dob"
                InputLabelProps={{
                shrink: true,
                }}

              />
              <TextField
                margin="normal" 
                fullWidth
                name="password"
                label="New Password"
                type="password"
                id="newpassword"
                autoComplete="new-password"
              />
              <TextField
                margin="normal" 
                fullWidth
                name="password"
                label="Current Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                color="primary"
              >
                Edit
              </Button>
              
              
            </Box>
            </ThemeProvider>
          </Box>
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
              Details
            </Typography>
            
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <h2>First Name</h2>
              <h2>Last Name</h2>
              <h2>Email Address</h2>
              <h2>Date of Birth</h2>
            </Box>
            </ThemeProvider>
          </Box>
        </Grid>
      </Grid>
    </div>
    );}  

export default Profile;