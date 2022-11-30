
import React from 'react';
import './Search.module.css';
import classes from './Search.module.css'

import { DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';



function Search({ details }) {
  const show_user = (selected_user)=> {

    //alert(JSON.stringify(selected_user, null, 4));
      
    // New Tab Window
    var myWindow = window.open("", "_blank");
  
    // Popup Window
    //var myWindow = window.open('/', 'example', "weight=100,height=100");
  
    // Basic Information
    myWindow.document.write("Name: " + selected_user.first_name + " " + selected_user.last_name);
    myWindow.document.write("<br>Email: " + selected_user.email);
  
    if (selected_user.categories_of_difference !== "") {
      myWindow.document.write("<br>Categoties of Difference: " + selected_user.categories_of_difference);
    }
  
    if (selected_user.categories_of_difference !== "") {
      myWindow.document.write("<br>Geographic Areas: " + selected_user.geographic_areas);
    }
  
    if (selected_user.discipline !== "") {
    myWindow.document.write("<br>Discipline: " + selected_user.discipline + '<br>');
    }
  
    // Location Specifications
    if (selected_user.city !== "") {
       myWindow.document.write("<br>City: " + selected_user.city);
    } if (selected_user.state !== "") {
      myWindow.document.write("<br>State: " + selected_user.state);
    } if (selected_user.country !== "") {
      myWindow.document.write("<br>Country: " + selected_user.country);
    }
  
    // Expert Bio
    if (selected_user.biographical_sketch !== "") {
      myWindow.document.write("<br><br>Biographical Sketch: " + selected_user.biographical_sketch);
    }
    if (selected_user.twitter_intagram_other_social_media !== "") {
      myWindow.document.write("<br>Social Media: " + selected_user.twitter_intagram_other_social_media);
    } if (selected_user.media_availability !== "") {
      myWindow.document.write("<br>Media Availability: " + selected_user.media_availability);
    }
  
    if (selected_user.title !== "") {
      myWindow.document.write("<br>Title: " + selected_user.title);
    }
    if (selected_user.institutional_affiliation !== "") {
      myWindow.document.write("<br>Institutional Affiliation: " + selected_user.institutional_affiliation);
    }
  
    
  
  };

const columns = [
  {
    field: 'first_name',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'last_name',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'City',
    type: 'City',
    width: 210,
    editable: true,
  },
  {
    field: 'geographic_areas',
    headerName: 'Geographic Area',
    type: 'Geography',
    width: 210,
    editable: true,
  },
  {
    field: 'time_period',
    headerName: 'Time Period',
    type: 'Time Period',
    width: 210,
    editable: true,
  },
  {
    field: 'institutional_affiliation',
    headerName: 'Institution',
    type: 'Institution',
    width: 210,
    editable: true,
  },
  {
    field: 'discipline',
    headerName: 'Discipline',
    type: 'Discipline',
    width: 150,
    editable: true,
  },
  {
    field: 'View?',
    headerName: 'View',
    renderCell: (params)=>{
      return (
      <Button
        onClick={(e) => show_user(params.row)}
        variant="contained"
      >
        View
      </Button>)
      }
  },
  
];


  return (
    
      <section className="garamond">


      <h1 className={classes.text3}> Search For An Expert!</h1>

     
      <div style={{ height: 650, width: '100%',  }}>
          <div style={{ height: 500, width: '95%', float:'left', display:'inline', marginLeft:'40px'  }}>
          {(typeof(details) === 'undefined') ?
      (
        <p>Loading...</p>
      ):
      (
            <DataGrid 
            rows={details} 
            columns={columns}
            rowsPerPageOptions={[5,10,25,50,100]}
            disableSelectionOnClick
            
            ></DataGrid>
      )}
        </div>
        </div>
      
 
      

    
    
      
  </section>


    
  );
}

export default Search;





