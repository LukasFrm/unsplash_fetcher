import React from 'react'
import Images from '../components/Images'



function PhotosTable() {
  return (
    <table className="table col-md-8 col-12 text-center order-last order-md-first">
      <thead>
        <tr>
          <th>Photos</th>
        </tr>
      </thead>
      <tbody>
        <React.Fragment>
          <Images />
        </React.Fragment>
      </tbody>
    </table>
  )
}

export default PhotosTable
