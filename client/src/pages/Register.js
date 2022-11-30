import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebImage from '../componenet/WebImage';
import CatagoryBox from '../componenet/CatagoryBox';
import CatagoryBox2 from '../componenet/CategoryBox2';
import CatagoryBox3 from '../componenet/CategoryBox3';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Expert from "../pages/RegisterExpertDetail";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import  {Fragment} from "react";

const theme = createTheme({palette:
    {
        primary:{main:"#008000"},
        // secondary:{main:"yellow"}
    },
});

export default function Register() {

  let navigate = useNavigate(); 
  const routeExpertChange = () =>{ 

  let path = "../registerexpertdetail"; 
  

    (<Router>
        <Fragment>
          <Routes>
            <Route exact path='../registerexpertdetail' element={<Expert details={myJSON}/>}/>
          </Routes>
        </Fragment>
    </Router>)
    navigate(path);
  }

    

  const [userType, setUserType] = useState('');
  const handleUserTypeChange = event => {
    setUserType(event.target.value);
  };

  const [firstName, setFirstName] = useState('');
  const handleFirstNameChange = event => {
    setFirstName(event.target.value);
  };

  const [lastName, setLastName] = useState('');
  const handleLastNameChange = event => {
    setLastName(event.target.value);
  };

  const [email, setEmail] = useState('');
  const handleEmailChange = event => {
    setEmail(event.target.value);
  };

  const [password, setPassword] = useState('');
  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  var myJSON = {"first_name": firstName, "last_name":lastName, "email": email, "password": password}
  console.log(myJSON)


  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
          <WebImage alt="a decorative tree"/>
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
          <CatagoryBox 
            key = {1} 
            name = "User Type"
            onChange={handleUserTypeChange}
            value = {userType}
            >
            </CatagoryBox>

          <TextField
              margin="normal"
              required
              fullWidth
              id="firstname"
              label="Your First Name"
              name="firstname"
              autoComplete="firstname"
              autoFocus
              onChange={handleFirstNameChange}
              value={firstName}
            />

          <TextField
              margin="normal"
              required
              fullWidth
              id="lastname"
              label="Your Last Name"
              name="lastname"
              autoComplete="lastname"
              autoFocus
              onChange={handleLastNameChange}
              value={lastName}
            />
            
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
              value={email}
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
              autoFocus
              onChange={handlePasswordChange}
              value={password}
            />

            <Button
              //if (userType == )
              onClick={routeExpertChange}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white'}}
            >
              Register
            </Button>

            
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

//methods

