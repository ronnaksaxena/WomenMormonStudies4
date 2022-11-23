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


  const onButtonClickDeleteExpert = (event, userObject)=>{
    const requestOptions = { 
      method:'DELETE'
    }; 
    console.log(userObject._id)
    fetch("https://womenmormonstudies-server.herokuapp.com/api/Experts/" + userObject._id, requestOptions)
    .then((response)=> {

      return response.json();
    }).then((result) => {
      console.log(result);
    })
  }

    const moveAndDelete = (event, userObject)=>{
      onButtonClickUnconfirmedAdd(event, userObject);
      onButtonClickUnconfirmedDelete(event, userObject);
    }
    // Botton to add unconfirmed experts -> experts 
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
        return response.json();
      }).then((result) => {
        console.log(result);
      })
    }
    // Botton to remove experts 
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
        }
        
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
          headerName: 'Add',
          renderCell: (params)=>{
            return (
            <Button
              onClick={(e) => moveAndDelete(e, params.row)}
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
              onClick={(e) => onButtonClickUnconfirmedDelete(e, params.row)}
              variant="contained"
            >
              Deny
            </Button>)
            }
        }
        
      ];
    
   
    return (
      <div style={{ height: 650, width: '100%',  }}>
          <div style={{ height: 650, width: '40%', float:'left', display:'inline', marginRight:'30px'  }}>
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
            checkboxSelection
            disableSelectionOnClick
            
            ></DataGrid>
      )}
        </div>
        <div style={{ height: 650, width: '50%', float:'left', display:'inline'  }}>
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
            checkboxSelection
            disableSelectionOnClick
            
            ></DataGrid>
      )}
        </div>
        </div>
        
        
    )
}
