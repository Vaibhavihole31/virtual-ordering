import React from 'react'
import './TableBook.css'
// import emptyTable from './empty-table.png'
import emptyTable from './table-with-boy-girl.png'

function TableBook() {
  return (
    <>
    <div className='container container-booktable'>
      <div className='row'>
         <div className='table-card'>
          <img src={emptyTable} />
          <h3>Table - 101</h3>
          <button>Book Table</button>
         </div>
         <div className='table-card'>
          <img src={emptyTable} />
          <h3>Table - 101</h3>
          <button>Book Table</button>
         </div>
         <div className='table-card'>
          <img src={emptyTable} />
          <h3>Table - 101</h3>
          <button>Book Table</button>
         </div>
         <div className='table-card'>
          <img src={emptyTable} />
          <h3>Table - 101</h3>
          <button>Book Table</button>
         </div>
      </div>
    </div>
    </>
  )
}

export default TableBook