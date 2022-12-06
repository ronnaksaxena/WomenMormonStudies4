import React from 'react';
import './Search.module.css';
import classes from './Search.module.css'

import { DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useNavigate } from "react-router-dom";



function Search({ details }) {
  let navigate = useNavigate();

  const show_user = (selected_user)=> {
    const id = selected_user._id
    
    let path = "../expertpage/" + id; 
    navigate(path);

   
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
      sx ={{bgcolor: "green", }}
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





