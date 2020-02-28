import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { fetchPhotos } from '../actions/ImageActions'


function QueriesTable(props) {
  return (
    <table className="table ml-md-5 col-md-3 col-12 text-center order-first order-md-last">
      <thead>
        <tr>
          <th>Saved queries:</th>
        </tr>
      </thead>
      <tbody>
        {props.savedQueries.map(item => {
          return (
            <tr key={props.savedQueries.indexOf(item) + Math.random()}>
              <td onClick={() => props.fetchPhotos(item)} className='savedQuery'>{item}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

QueriesTable.propTypes = {
  savedQueries: PropTypes.array.isRequired,
  fetchPhotos: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    savedQueries: state.data.savedQueries,
  }
}

export default connect(mapStateToProps, { fetchPhotos })(QueriesTable)
