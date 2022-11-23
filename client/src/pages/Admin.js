import * as React from 'react';

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { Button } from '@mui/material';



export default function Admin({details, detailsOfUnconfirmed}){

    for (let i=0;i<details.length;i++){
        details[i]["id"]= i
    }
    for (let i=0;i<detailsOfUnconfirmed.length;i++){
      detailsOfUnconfirmed[i]["id"]= i
  }
    const onButtonClick = (event, row)=>{
      console.log(row)
    }

    const onButtonClickAdd = (event, row)=>{
      console.log(row)
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
              onClick={(e) => onButtonClick(e, params.row)}
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
              onClick={(e) => onButtonClickAdd(e, params.row)}
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
              onClick={(e) => onButtonClick(e, params.row)}
              variant="contained"
            >
              Deny
            </Button>)
            }
        }
        
      ];
      const rows = [
        { id: 1, last_name: 'Snow', first_name: 'Jon', email: 'me@gmail.com' },
        { id: 2, last_name: 'Lannister', first_name: 'Cersei', email: 'me@gmail.com'  },
        { id: 3, last_name: 'Lannister', first_name: 'Jaime', email: 'me@gmail.com'  },
        { id: 4, last_name: 'Stark', first_name: 'Arya', email: 'me@gmail.com'  },
        { id: 5, last_name: 'Targaryen', first_name: 'Daenerys', email: 'me@gmail.com'  },
        { id: 6, last_name: 'Melisandre', first_name: null, email: 'me@gmail.com'  },
        { id: 7, last_name: 'Clifford', first_name: 'Ferrara', email: 'me@gmail.com'  },
        { id: 8, last_name: 'Frances', first_name: 'Rossini', email: 'me@gmail.com'  },
        { id: 9, last_name: 'Roxie', first_name: 'Harvey', email: 'me@gmail.com'  },
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
            rowsPerPageOptions={[5,10,25,50]}
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
            rowsPerPageOptions={[5,10,25,50]}
            checkboxSelection
            disableSelectionOnClick
            
            ></DataGrid>
      )}
        </div>
        </div>
        
        
    )
}
