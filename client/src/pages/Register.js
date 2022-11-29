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
    navigate(path);
    }

  const handleExpertSubmit = (event) => {
      const requestOptions = { 
        method:'POST',
        body: JSON.stringify(myJson),
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

  var myJson = {"first_name": firstName, "last_name":lastName, "email": email, "password": password}
  console.log(myJson)


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
          <Box component="form" onSubmit={handleExpertSubmit} noValidate sx={{ mt: 1 }}>
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
              onClick={handleExpertSubmit, routeExpertChange}
              //onClick={routeExpertChange}
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

const catagory = [
  "19th century",
  "20th century",
  "21st century",
  "NA",
];

const method = [
  "Anthropology",
  "Area Studies",
  "Art History",
  "Creative Writing",
  "Disability Studies",
  "Economics",
  "Ethnography",
  "Ethnohistory",
  "Gender Studies",
  "Genealogy",
  "Geography",
  "History",
  "Linguistics",
  "Literary Criticism",
  "Oral History",
  "Performance Studies",
  "Philosophy",
  "Political Science",
  "Psychology",
  "Public History",
  "Religious Studies",
  "Rhetoric/Communication",
  "Sociology",
  "Statistics",
  "Theology",
  "NA",
  ];

  const location = [
    "Africa",
    "Asia",
    "Australia and/or New Zealand",
    "Pacific Islands",
    "Europe",
    "United States and/or Canada",
    "Latin America and/or Caribbean",
    "Middle East",
    "NA",
  ];


const topic = [
"Aesthetics",
"Anti-Mormonism",
"Biography",
"Childhood/Youth",
"Church Membership",
"Church of Jesus Christ of Latter-day Saints",
"Colonialism/imperialism",
"Community of Christ (formerly Reorganized Church of Jesus Christ of Latter Day Saints)",
"Critical Race Studies",
"Creative Writing (Fiction/Nonfiction/Poetry/etc.)",
"Cultural History",
"Demography",
"Disability Studies",
"Drama",
"Ecclesiology",
"Economics",
"Ethics",
"Family structure",
"Film",
'Folklore/Storytelling',
'Food',
'Gender/Femininity/Masculinity/Sexuality',
'Globalization',
'Healing',
'Interfaith/Interreligious Relations/Dialogue',
'Literature',
'Material Culture',
'Missions/Missiology',
'Motherhood',
'Music',
'Other Mormon Traditions (AUB/Bickertonite/FLDS/Strangite/etc.)',
'Performance',
'Philosophy',
'Psychology',
'Politics/Political Issues/Political Engagement',
'Popular Culture',
'Race/Ethnicity',
'Ritual Studies',
'Sacred Space',
'Scripture',
'Social History',
'Social Justice',
'Sociology of Religion',
'Technical Communication',
'Temples',
'Theology',
'Translation',
'Visual Culture',
'Women’s History',
'NA',
];