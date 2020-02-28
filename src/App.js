import React from 'react'
import './styles/App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'

import SubmitForm from './components/SubmitForm'
import ErrorModal from './components/ErrorModal'
import PhotosTable from './components/PhotosTable'
import QueriesTable from './components/QueriesTable'

import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { toggleNoQuery, toggleNoResults } from './actions/ImageActions'

function App(props) {
  return (
    <div className="p-4">
      <ErrorModal
        isOpen={props.noQuery}
        text="Please enter a search query"
        close={() => props.toggleNoQuery(false)}
      />
      <ErrorModal
        isOpen={props.noResults}
        text="Unfortunately, no photos were found"
        close={() => props.toggleNoResults(false)}
      />
      <SubmitForm />
      <div className="row mt-5 pl-0 pl-md-3">
        <PhotosTable />
        <QueriesTable />
      </div>
    </div>
  )
}
App.propTypes = {
  noQuery: PropTypes.bool.isRequired,
  noResults: PropTypes.bool.isRequired,
  toggleNoQuery: PropTypes.func.isRequired,
  toggleNoResults: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    noQuery: state.data.noQuery,
    noResults: state.data.noResults,
  }
}

export default connect(mapStateToProps, { toggleNoQuery, toggleNoResults })(App)
