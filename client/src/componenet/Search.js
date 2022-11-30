
import React, { useState } from 'react';
import Scroll from './Scroll';
import SearchList from './SearchList';
import TextField from '@mui/material/TextField';
import './Search.module.css';
import Autocomplete from '@mui/material/Autocomplete';
import classes from './Search.module.css'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

function Search({ details }) {

  const [searchGeneralField, setGeneralSearchField] = useState("");
  const [searchPeriodField, setPeriodField] = useState("");
  const [searchGeographicField, setGeographicField] = useState("");

  console.log(details)

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
        .geographic_areas
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
  
  const filteredTimePeriod = filteredGeneralPersons.filter(
    person => {
      if (typeof(person.time_period) === 'undefined') {
        return filteredGeneralPersons
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
  setGeneralSearchField(e.target.value);
};


const [period, setPeriod] = React.useState('');

const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
    setPeriodField(event.target.value);
  };

const [geographic, setGeographicLocation] = React.useState('');

const handleChange = (event) => {
    setGeographicLocation(event.target.value);
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

      <div className="pa2" >
      <h1 className={classes.text3}> Search For An Expert!</h1>

      <div className="navy georgia ma0 grow">
        <h2 className={classes.text2} >General Filter</h2>
      </div>

      <div className="pa2" >
        <input 
          className={classes.general} 
          type = "search" 
          placeholder = "Enter A Word" 
          onChange = {handleGeneralChange}
        />
      </div>

      <div className="navy georgia ma0 grow">
       <h2  className={classes.text} >Geographic Filter </h2>
      </div>
      
    <Box sx={{ maxWidth: 300, marginLeft: "40%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Geographic Location</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={geographic}
          label="Geographic Location"
          onChange={handleChange}
        >
          <MenuItem value={'australia and/or new zealand'}>Australia and/or New Zealand</MenuItem>
          <MenuItem value={"asia"}>Asia</MenuItem>
          <MenuItem value={"pacific islands"}>Pacific Islands</MenuItem>
          <MenuItem value={'united states and/or canada'}>United States and/or Canada</MenuItem>
          <MenuItem value={"europe"}>Europe</MenuItem>
          <MenuItem value={"latin america and/or caribbean"}>Latin America and/or Caribbean</MenuItem>
          <MenuItem value={"middle east"}>Middle East</MenuItem>
          <MenuItem value={""}>Clear</MenuItem>
        </Select>
      </FormControl>
    </Box>

      <div className="navy georgia ma0 grow">
        <h2 className={classes.text}>Time Period Filter</h2>
      </div>
      <Box sx={{ maxWidth: 300, marginLeft: "40%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Time Period</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={period}
          label="Time Period"
          onChange={handlePeriodChange}
        >
          <MenuItem value={'19'}>19th century</MenuItem>
          <MenuItem value={"20"}>20th century</MenuItem>
          <MenuItem value={"21"}>21st century</MenuItem>
          <MenuItem value={""}>Clear</MenuItem>
        </Select>
      </FormControl>
    </Box>
      </div>

      
 
      

    {searchList()}
    
      
  </section>


    
  );
}

export default Search;





