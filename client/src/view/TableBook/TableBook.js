import React, { useState, useEffect } from 'react';
import './TableBook.css';
import axios from 'axios';
// import emptyTable from './empty-table.png'
import emptyTable from './table-with-boy-girl.png';
import swal from 'sweetalert';
import {virtualUser} from './../../utils/virtualUser'

function TableBook() {

  const [availabeTable, setAvailabeTable] = useState([]);

  useEffect(() => {
    fetchAvailabeTalbles();
  }, []);

  async function fetchAvailabeTalbles() {
    console.log('fetching all tables');
    const response = await axios.get('/avilableTables');
    console.log(response.data.data);
    setAvailabeTable(response.data.data);
  }

  async function bookThisTable(e) {
    const response = await axios.post('/bookTable', {
      tableNumber: e.target.value,
      userId: virtualUser._id,
    });

    console.log(e.target.value);
    console.log(virtualUser);

    if (response.data.success) {
      await swal({
        title: 'Success',
        text: 'Table Booked Successfully',
        icon: 'success',
        button: 'OK',
      });
      window.location.href = '/floveritem';
      localStorage.setItem('bookedTable', JSON.stringify(response.data.data));
    } else {
      await swal({
        title: 'Error',
        text: 'Table Already Booked',
        icon: 'error',
        button: 'OK',
      });
    }
  }

  return (
    <>
    <div className='container container-booktable'>
      <div className='row'>
        <h3 className='text-center'><b>Book Table</b></h3>
         {
          availabeTable?.map((table, index) =>{
            return (
              <div className='table-card'>
          <img src={emptyTable} />
          <div className='text-center mt-2'>
            <h3 className='text-center'>Table - {table.tableNumber}</h3>
          <button className='text-center mt-2 btn-book-table' value={table.tableNumber}
                  onClick={bookThisTable}><b>Book Table</b></button>
          </div>
         </div>
            )
          })
         }
      </div>
    </div>
    </>
  )
}

export default TableBook