import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebImage from '../componenet/WebImage';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import validator from 'validator'
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';


const theme = createTheme({palette:
    {
        primary:{main:"#008000"},
        // secondary:{main:"yellow"}
    },
});


export default function RegisterUserDetail() {
  const handleSubmit = (event) => {
    const requestOptions = { 
      method:'POST',
      body: JSON.stringify(myJSON),
      headers: {
        'Content-Type': 'application/json'
    },
    }; 
    fetch("https://womenmormonstudies-server.herokuapp.com/api/UnconfirmedExperts/", requestOptions)
    .then((response)=> {
      return response.json();
    }).then((result) => {
      //console.log(result);
    })
  };

  const [firstName, setFirstName] = React.useState();

    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    };


    const [lastName, setLastName] = React.useState();

    const handleLastNameChange = (event) => {
      setLastName(event.target.value);
    };

    const [email, setEmail] = React.useState();

    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };


  const [state, setState] = React.useState({
    yes: false,
    no: false ,
  });

  const [errorMessage, setErrorMessage] = useState('')
 
    const validate = (value) => {
      if (validator.isStrongPassword(value, {
        minLength: 8, minLowercase: 1,
        minUppercase: 1, minNumbers: 1, minSymbols: 1
      })) {
        setErrorMessage('This is a strong password')
      } else {
        setErrorMessage('This is not a strong password')
      }
    }

    const [password, setPassword] = React.useState();

    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

    var myJSON = {"email": email, "first_name": firstName,"last_name": lastName, "password": password}
    console.log(myJSON)


  return (
    <ThemeProvider theme={theme}>

     
      <Typography component="h1" variant="h5" sx={{ mt: 3, mb: 2 ,color: 'black', width: 200, marginLeft: '40%'}}>
          <WebImage alt="a decorative tree"/>
          </Typography>

          <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
    >
          <div>

          
        <TextField
          required
          id="outlined-required"
          label="Required"
          onChange={handleFirstNameChange}
          value = {firstName}
          helperText="Please enter your first name"
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          onChange={handleLastNameChange}
          value = {lastName}
          helperText="Please enter your last name"
        />

        <TextField
          required
          id="outlined-required"
          label="Required"
          onChange={handleEmailChange}
          value = {email}
          helperText="Please enter your email"
        />

        <TextField
          required
          id="outlined-required"
          label="Password (Required)"
          onChange={handlePasswordChange}
          value = {password}
          helperText= {errorMessage === '' ? null :
          <span style={{
            fontWeight: 'bold',
            color: 'red',
          }}>{errorMessage}</span>}
                
          onChange={(e) => validate(e.target.value)}
        />


      </div>
      
    
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
        sx={{ mt: 3, mb: 2 ,color: 'black', width: 400, marginLeft: '2%'}}
          control={
            <Switch checked={state.yes} onChange={handleChange} name="yes" />
          }
          label="Yes, Please Save My Searches"
        />
        <FormControlLabel
        sx={{ mt: 3, mb: 2 ,color: 'black', width: 400, marginLeft: '2%'}}
          control={
            <Switch checked={state.no} onChange={handleChange} name="no" />
          }
          label="No, Don't Save My Searches"
        />
      </FormGroup>
    </FormControl>
    </Box>
      <Button
              onClick={handleSubmit}
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white', width: 200, marginLeft: '25%', marginTop: '20%'}}
            >
              Register
            </Button>

    </ThemeProvider>
  );
}
