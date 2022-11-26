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
import CatagoryBox4 from '../componenet/CategoryBox4';
import { useNavigate } from "react-router-dom";
import MenuItem from '@mui/material/MenuItem';

import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';
import Switch from '@mui/material/Switch';


const theme = createTheme({palette:
    {
        primary:{main:"#008000"},
        // secondary:{main:"yellow"}
    },
});


export default function RegisterUserDetail() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const [state, setState] = React.useState({
    jason: false,
    no: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  let navigate = useNavigate(); 
    const routeChange = () =>{ 
    let path = "../search"; 
    navigate(path);
    }


  return (
    <ThemeProvider theme={theme}>

     
      <Typography component="h1" variant="h5" sx={{ mt: 3, mb: 2 ,color: 'black', width: 200, marginLeft: '40%'}}>
          <WebImage alt="a decorative tree"/>
          </Typography>
         
    
    <FormControl component="fieldset" variant="standard">
      <FormGroup>
        <FormControlLabel
        sx={{ mt: 3, mb: 2 ,color: 'black', width: 200, marginLeft: '250%'}}
          control={
            <Switch checked={state.yes} onChange={handleChange} name="yes" />
          }
          label="Yes, Please Save My Searches"
        />
        <FormControlLabel
        sx={{ mt: 3, mb: 2 ,color: 'black', width: 200, marginLeft: '250%'}}
          control={
            <Switch checked={state.no} onChange={handleChange} name="no" />
          }
          label="No, Don't Save My Searches"
        />
      </FormGroup>
    </FormControl>

      <Button
              onClick={handleSubmit}
              onClick={routeChange}
              type="submit"
              
              variant="contained"
              sx={{ mt: 3, mb: 2 ,color: 'white', width: 200, marginLeft: '25%', marginTop: '20%'}}
            >
              Register
            </Button>

    </ThemeProvider>
  );
}
