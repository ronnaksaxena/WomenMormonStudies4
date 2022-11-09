
import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import { useEffect, useRef} from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import WebImage from '../componenet/WebImage';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Search({ details }) {

  const [searchGeneralField, setGeneralSearchField] = useState("");
  const [searchNameField, setNameSearchField] = useState("");
  const [searchGeoField, setGeoSearchField] = useState("");
  const [searchDiscField, setDiscSearchField] = useState("");
  const [period, setPeriod] = React.useState('');
  const [searchPeriodField, setPeriodField] = useState("");
  const [geo, setGeo] = React.useState('');
  const [searchGeographicField, setGeographicField] = useState("");

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
  const catagory = [
    "19th century",
    "20th century",
    "21st century",
    "NA",
  ];

  const filteredGeneralPersons = details.filter(
    person => {
      if (typeof(person.first_name) === 'undefined' && typeof(person.last_name) === 'undefined') {
        return details
      }
      else{
      return(
        person
        .bibliography
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .biographical_sketch
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .broad_areas
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .categories_of_difference
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .city
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .country
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .date_recorded
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .date_updated
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .degree
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .discipline
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .first_name
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .institutional_affiliation
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .keywords
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .last_name
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .methods_approaches
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase()) ||
        person
        .state
        .toLowerCase()
        .includes(searchGeneralField.toLowerCase())
      )
      }
    }
  );
  
  const filteredNamePersons = filteredGeneralPersons.filter(
    person => {
      if (typeof(person.first_name) === 'undefined' && typeof(person.last_name) === 'undefined') {
        return details
      }
      else if (typeof(person.first_name) === 'undefined') {
        return (
          person
        .last_name
        .toLowerCase()
        .includes(searchNameField.toLowerCase())
        )
      }
      else{
        return (
          person
        .first_name
        .toLowerCase()
        .includes(searchNameField.toLowerCase()) ||
        person
        .last_name
        .toLowerCase()
        .includes(searchNameField.toLowerCase())
        )
      }
    }
  );

  const filteredGeoPersons = filteredNamePersons.filter(
    person => {
      if (typeof(person.geographic_areas) === 'undefined') {
        return filteredNamePersons
      }
      else{
        return (
        person
        .geographic_areas
        .toLowerCase()
        .includes(searchGeoField.toLowerCase())
        )
      }
    }
  );

  const filteredPersons = filteredGeoPersons.filter(
    person => {
      if (typeof(person.discipline) === 'undefined') {
        return filteredGeoPersons
      }
      else{
        return (
        person
        .time_period
        .toLowerCase()
        .includes(searchDiscField.toLowerCase())
        )
      }
    }
  );

  const filteredTimePeriod = filteredPersons.filter(
    
    person => {
      if (typeof(person.time_period) === 'undefined') {
        return filteredPersons
      }
      else{
        return (
        person
        .time_period
        .toLowerCase()
        .includes(searchPeriodField)
        )
      }
    }
  );

  const filteredGeographicAreas = filteredTimePeriod.filter(
    
    person => {
      if (typeof(person.geographic_areas) === 'undefined') {
        return filteredTimePeriod
      }
      else{
        return (
        person
        .geographic_areas
        .toLowerCase()
        .includes(searchGeographicField)
        )
      }
    }
  );

const handleGeneralChange = e => {
  console.log(e)
  setGeneralSearchField(e.target.value);
};

const handleNameChange = e => {
  console.log(e)
  setNameSearchField(e.target.value);
};

const handleGeoChange = e => {
  console.log(e)
  setGeoSearchField(e.target.value);
};

const handleDiscChange = e => {
  console.log(e)
  setDiscSearchField(e.target.value);
};

const handleChange = (event) => {
  setPeriod(event.target.value);
  setPeriodField(event.target.value);
  };

const handleGeographicChange = (event) => {
  setGeo(event.target.value);
  setGeographicField(event.target.value);
  };


function searchList() {
  return (
    <Scroll>
      <SearchList filteredPersons={filteredGeographicAreas} />
    </Scroll>
  );
}

  return (

    
    <section className="garamond">

    <div className="navy georgia ma0 grow">
            <h2 className="f2">Name Filter</h2>
          </div>
          <div className="pa2">
            <input 
              className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
              type = "search" 
              placeholder = "Enter Name" 
              onChange = {handleNameChange}
            />
          </div>

      <div className="navy georgia ma0 grow">
        <h2 className="f2">Geographic Period</h2>
      </div>
      
      <div className="pa2">
        <Box sx={{ minWidth: 50 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={geo}
            label="Age"
            onChange={handleGeographicChange}
          >
            <MenuItem value={'Africa'}>Africa</MenuItem>
            <MenuItem value={'Australia and/or New Zealand'}>Australia and/or New Zealand</MenuItem>
            <MenuItem value={'Asia'}>Asia</MenuItem>
            <MenuItem value={'Pacific Islands'}>Pacific Islands</MenuItem>
            <MenuItem value={'United States and/or Canada'}>United States and/or Canada</MenuItem>
            <MenuItem value={'Europe'}>Europe</MenuItem>
            <MenuItem value={'Latin America and/or Caribbean'}>Latin America and/or Caribbean</MenuItem>
            <MenuItem value={'Middle East'}>Middle East</MenuItem>
            <MenuItem value={''}>Clear Search</MenuItem>

          </Select>
        </FormControl>
      </Box>
      </div>

      <div className="navy georgia ma0 grow">
        <h2 className="f2">Time Period</h2>
      </div>
      <div className="pa2">
        <Box sx={{ minWidth: 50 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label"></InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={period}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={'19'}>19th Century</MenuItem>
            <MenuItem value={'20'}>20th Century</MenuItem>
            <MenuItem value={'21'}>21st Century</MenuItem>
            <MenuItem value={''}>Clear Search</MenuItem>
          </Select>
        </FormControl>
      </Box>
      </div>

      {searchList()}

      
    </section>
    
  );
}

export default Search;





