import * as React from 'react';

import { DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';

export default function Admin({details, detailsOfUnconfirmed}){


    for (let i=0;i<details.length;i++){
        details[i]["id"]= i+1
    }
    for (let i=0;i<detailsOfUnconfirmed.length;i++){
      detailsOfUnconfirmed[i]["id"]= i+1
  }

    // Botton to remove experts 
    // need delete request

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

      
  const onButtonClickDeleteExpert = (event, userObject)=>{
    const requestOptions = { 
      method:'DELETE'
    }; 
    console.log(userObject._id)
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/" + userObject._id, requestOptions)
    .then((response)=> {
      alert("Expert Deleted")

      return response.json();
    }).then((result) => {
      console.log(result);
    })
  }

    const moveAndDelete = (event, userObject)=>{
        onButtonClickUnconfirmedAdd(event, userObject)
        onButtonClickUnconfirmedDelete(event, userObject)
      }
    const change = (event, userObject)=>{
      console.log(JSON.parse(JSON.stringify(userObject)))
      onButtonClickUnconfirmedDelete(event,userObject)
      userObject.first_name = ""
      userObject.last_name = ""
      onButtonClickUnconfirmedAdd(event, userObject)
    }
      
    
    // Button to add unconfirmed experts -> experts 
    // need post request
    // used to remove users from db in Experts
   

    const onButtonClickUnconfirmedAdd = (event, userObject)=>{
      var deletedID = JSON.parse(JSON.stringify(userObject))
      delete deletedID._id

      const requestOptions = { 
        method:'POST',
        body: JSON.stringify(deletedID),
        headers: {
          'Content-Type': 'application/json'
      },
      }; 
      console.log(userObject)
      fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/", requestOptions)
      .then((response)=> {
        alert("User added to Experts")
        return response.json();
      }).then((result) => {
        console.log(result);
      })
    }
    const onButtonClickUnconfirmedChange = (event, userObject)=>{
      var deletedID = JSON.parse(JSON.stringify(userObject))
      delete deletedID._id

      const requestOptions = { 
        method:'POST',
        body: JSON.stringify(deletedID),
        headers: {
          'Content-Type': 'application/json'
      },
      }; 
      console.log(userObject)
      fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/", requestOptions)
      .then((response)=> {
        alert("User added to Experts")
        return response.json();
      }).then((result) => {
        console.log(result);
      })
    }
    // Button to remove experts 
    // need delete request
    // row is the object of the user 
    const onButtonClickUnconfirmedDelete = (event, userObject)=>{
      const requestOptions = { 
        method:'DELETE'
      }; 
      console.log(userObject._id)
      fetch("https://womenmormonstudies-server.herokuapp.com/api/UnconfirmedExperts/" + userObject._id, requestOptions)
      .then((response)=> {
        
        return response.json();
      }).then((result) => {
        console.log(result);
      })
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
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
          field: 'email',
          headerName: 'email',
          type: 'Email',
          width: 110,
          editable: true,
        },
        {
          field: 'remove?',
          headerName: 'remove',
          renderCell: (params)=>{
            return (
            <Button
              onClick={(e) => onButtonClickDeleteExpert(e, params.row)}
              variant="contained"
            >
              Delete
            </Button>)
            }
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
      const columns2 = [
        { field: 'id', headerName: 'ID', width: 90 },
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
          field: 'email',
          headerName: 'email',
          type: 'Email',
          width: 110,
          editable: true,
        },
        {
          field: 'Add?',
          headerName: 'Edit',
          renderCell: (params)=>{
            return (
            <Button
              onClick={(e) => change(e, params.row)}
              variant="contained"
            >
              Edit
            </Button>)
            }
        },
        {
          field: 'Deny?',
          headerName: 'Deny',
          renderCell: (params)=>{
            return (
            <Button
              onClick={(e) => onButtonClickUnconfirmedDelete(e, params.row)}
              variant="contained"
            >
              Deny
            </Button>)
            }
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
      <div style={{ height: 650, width: '100%',  }}>
          <div style={{ height: 500, width: '40%', float:'left', display:'inline', marginLeft:'30px'  }}>
            <p>Current Experts</p>
          {(typeof(details) === 'undefined') ?
      (
        <p>Loading...</p>
      ):
      (
            <DataGrid 
            rows={details}
            columns={columns}
            rowsPerPageOptions={[5,10,25,50,100]}
            checkboxSelection = {false}
            disableSelectionOnClick

            ></DataGrid>
      )}
        </div>
        <div style={{ height: 500, width: '50%', float:'left', display:'inline', marginLeft: '30px' }}>
        <p>Experts looking to Register</p>

          {(typeof(details) === 'undefined') ?
      (
        <p>Loading...</p>
      ):
      (
            <DataGrid 
            rows={detailsOfUnconfirmed}
            columns={columns2}
            rowsPerPageOptions={[5,10,25,50,100]}
            checkboxSelection = {false}
            disableSelectionOnClick
            
            ></DataGrid>
      )}
        </div>
        </div>
    )
}
