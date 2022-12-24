import React, { useState, useRef, useEffect, useMemo, useCallback} from 'react';
import { AgGridReact } from 'ag-grid-react'; // the AG Grid React Component

import 'ag-grid-community/styles/ag-grid.css'; // Core grid CSS, always needed
import 'ag-grid-community/styles/ag-theme-balham.css'; // Optional theme CSS
import { Color } from 'ag-grid-community';


 const AgGridSandbox = () => {
    const gridRef = useRef(); // Optional - for accessing Grid's API
    const [rowData, setRowData] = useState(); // Set rowData to Array of Objects, one Object per Row
    const [colorChange, setColorChange] = useState('pink')
    const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';
    // Each Column Definition results in one Column.
    const [columnDefs, setColumnDefs] = useState([
     {field: 'strDrink',headerName: 'Name', width: 500},
     {field: 'strCategory',headerName: 'Category'},
     {field: 'strInstructions',headerName: 'Instructions', width: 500},
     {field: 'strInstructionsIT',headerName: 'Italian Instructions', width: 500,editiable: true},

    ]);
   
    // DefaultColDef sets props common to all Columns
    const defaultColDef = useMemo( ()=> ({
        sortable: true
      }));
   
    // Example of consuming Grid Event
    const cellClickedListener = useCallback( event => {
      console.log('cellClicked', event);
    }, []);

    const colorChangeFunct = () => {
        setTimeout(() => {
            const api = gridRef.current?.api
            colorChange == 'pink' ? setColorChange('green') : setColorChange('pink');
            api.setPinnedTopRowData(pinnedTop);
        }, 1000)
        
        //console.log(colorChange);

    }
   
    // Example load data from sever
    useEffect(() => {
        fetch(url).then(res=> res.json())
        .then(data => setRowData(data.drinks))
    }, []);
    useEffect(() => {
    }, [colorChange]);
    // Example using Grid's API
    const buttonListener = useCallback( e => {
      gridRef.current.api.deselectAll();
    }, []);
    const pinnedTop = [ {
        strDrink: 'hey', strCategory: 'hi', strInstructions: 'hello', strInstructionsIT: 'strInstructionsIT'
    }];
    
  return (
    <div className='ag-grid-sandbox-container' style={{flexDirection:'column', width: '100%', height: '100%', alignItems: 'center', display: 'flex'}}>

    

    {/* On div wrapping Grid a) specify theme CSS Class Class and b) sets Grid size */}
    <div className="ag-grid-sandbox ag-theme-balham-dark" style={{width: '75%', height: '75%'}}>


      <AgGridReact
            ref={gridRef}
            pinnedTopRowData={pinnedTop}
           // Row Data for Rows
            columnDefs={columnDefs}
            rowData={rowData}
          // Column Defs for Columns
          defaultColDef={defaultColDef} // Default Column Properties
          rowClassRules = { {
            'pinkTopRow': function(params) {
                return params.node.rowPinned === 'top' && colorChange == 'pink';
            },
            'greenTopRow': function(params) {   
                return params.node.rowPinned === 'top' && colorChange == 'green';
            }

          }
            
        }
          animateRows={true} // Optional - set to 'true' to have rows animate when sorted
           // Options - allows click selection of rows

          // Optional - registering for Grid Event
          />
    </div>
    <button onClick={colorChangeFunct}>hello</button>
  </div>
  )
}

export default AgGridSandbox