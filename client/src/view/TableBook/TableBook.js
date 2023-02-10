import React from 'react'
import './TableBook.css'
// import emptyTable from './empty-table.png'
import emptyTable from './table-with-boy-girl.png'

function TableBook() {
  return (
    <>
    <div className='container container-booktable'>
      <div className='row'>
        <h3 className='text-center'><b>Book Table</b></h3>
         <div className='table-card'>
          <img src={emptyTable} />
          <div className='text-center mt-2'>
            <h3 className='text-center'>Table - 101</h3>
          <button className='text-center mt-2 btn-book-table'><b>Book Table</b></button>
          </div>
         </div>
         <div className='table-card'>
          <img src={emptyTable} />
          <div className='text-center mt-2'>
            <h3 className='text-center'>Table - 101</h3>
          <button className='text-center mt-2 btn-book-table'><b>Book Table</b></button>
          </div>
         </div>
         <div className='table-card'>
          <img src={emptyTable} />
          <div className='text-center mt-2'>
            <h3 className='text-center'>Table - 101</h3>
          <button className='text-center mt-2 btn-book-table'><b>Book Table</b></button>
          </div>
         </div>
         <div className='table-card'>
          <img src={emptyTable} />
          <div className='text-center mt-2'>
            <h3 className='text-center'>Table - 101</h3>
          <button className='text-center mt-2 btn-book-table'><b>Book Table</b></button>
          </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default TableBook