import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

function Images(props) {
  return (
    <tr>
      {props.savedPhotos.map(item => {
        return (
          <td key={item.id}>
            <img src={item.urls.thumb} className="m-3" alt="unsplash" />
          </td>
        )
      })}
    </tr>
  )
}

Images.propTypes = {
  savedPhotos: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    savedPhotos: state.data.savedPhotos,
  }
}

export default connect(mapStateToProps)(Images)
