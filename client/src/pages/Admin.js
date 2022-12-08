import * as React from 'react';

import { DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";


export default function Admin({details, detailsOfUnconfirmed}){


    for (let i=0;i<details.length;i++){
        details[i]["id"]= i+1
    }
    for (let i=0;i<detailsOfUnconfirmed.length;i++){
      detailsOfUnconfirmed[i]["id"]= i+1
  }

    // Botton to remove experts 
    // need delete request
    let navigate = useNavigate(); 


    const show_user = (selected_user)=> {
      const id = selected_user._id
      
      let path = "../expertpage/" + id; 
      navigate(path);
    };


    const see_unconfirmed =(selected)=>{
  

    

        //alert(JSON.stringify(selected, null, 4));
          
        // New Tab Window
        var myWindow = window.open("", "_blank");
    
        // Popup Window
        //var myWindow = window.open('/', 'example', "weight=100,height=100");
    
        // Basic Information
        myWindow.document.write("Name: " + selected.first_name + " " + selected.last_name);
        myWindow.document.write("<br>Email: " + selected.email);
    
        if (selected.categories_of_difference != "") {
          myWindow.document.write("<br>Categoties of Difference: " + selected.categories_of_difference);
        }
    
        if (selected.categories_of_difference != "") {
          myWindow.document.write("<br>Geographic Areas: " + selected.geographic_areas);
        }
    
        if (selected.discipline != "") {
        myWindow.document.write("<br>Discipline: " + selected.discipline + '<br>');
        }
    
        // Location Specifications
        if (selected.city != "") {
           myWindow.document.write("<br>City: " + selected.city);
        } if (selected.state != "") {
          myWindow.document.write("<br>State: " + selected.state);
        } if (selected.country != "") {
          myWindow.document.write("<br>Country: " + selected.country);
        }
    
        // Expert Bio
        if (selected.biographical_sketch != "") {
          myWindow.document.write("<br><br>Biographical Sketch: " + selected.biographical_sketch);
        }
        if (selected.twitter_intagram_other_social_media != "") {
          myWindow.document.write("<br>Social Media: " + selected.twitter_intagram_other_social_media);
        } if (selected.media_availability != "") {
          myWindow.document.write("<br>Media Availability: " + selected.media_availability);
        }
    
        if (selected.title != "") {
          myWindow.document.write("<br>Title: " + selected.title);
        }
        if (selected.institutional_affiliation != "") {
          myWindow.document.write("<br>Institutional Affiliation: " + selected.institutional_affiliation);
        }
    
        
      
      };
    

      
  const onButtonClickDeleteExpert = (event, userObject)=>{
    const requestOptions = { 
      method:'DELETE'
    }; 
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/" + userObject._id, requestOptions)
    .then((response)=> {
      alert("Expert Deleted")

      return response.json();
    }).then((result) => {
      console.log(result);
    })
  }
    const change = (event, userObject)=>{
      onButtonClickUnconfirmedDelete(event,userObject)
     
      onButtonClickUnconfirmedAdd(event, userObject)
      alert("Expert Moved")
    }
      
    
    // Button to add unconfirmed experts -> experts 
    // need post request
    // used to remove users from db in Experts
   

    const onButtonClickUnconfirmedAdd = (event, userObject)=>{
      var deletedID = structuredClone(userObject)
      delete deletedID._id

      const requestOptions = { 
        method:'POST',
        body: JSON.stringify(deletedID),
        headers: {
          'Content-Type': 'application/json'
      },
      }; 
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
      alert("Denied!")
      const requestOptions = { 
        method:'DELETE'
      }; 
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
            type = 'submit'

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
            type = 'submit'

              onClick={(e) => change(e, params.row)}
              variant="contained"
              
            >
              
              Add
            </Button>)
            }
        },
        {
          field: 'Deny?',
          headerName: 'Deny',
          renderCell: (params)=>{
            return (
            <Button
            type = 'submit'
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
            onClick={(e) => see_unconfirmed(params.row)}
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
        <div>Loading...</div>
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
