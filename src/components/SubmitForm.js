import React, { Component } from 'react'
import { Button, Form, Input, Spinner } from 'reactstrap'
import { fetchPhotos, saveQuery, toggleNoQuery } from '../actions/ImageActions'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class SubmitForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      textInput: '',
    }
  }

  onChange = e => {
    this.setState({ textInput: e.target.value })
  }

  onSubmit = e => {
    e.preventDefault()
    this.state.textInput === ''
      ? this.props.toggleNoQuery(true)
      : this.props.fetchPhotos(this.state.textInput)
  }

  render() {
    const { loading } = this.props
    const { textInput } = this.state

    return (
      <Form className="row" onSubmit={e => this.onSubmit(e)}>
        <div className="col-md-8 col-12">
          <Input
            name="searchTerm"
            onChange={e => this.onChange(e)}
            value={textInput}
            className="mb-3"
          />
        </div>
        <div className="text-center px-auto col-md-4 col-12">
          <Button
            type="button"
            color="warning"
            className="px-auto submitBtn"
            onClick={e => this.onSubmit(e)}
          >
            {loading ? (
              <span>
                <Spinner
                  size="sm"
                  className="spinner-border spinner-border-sm"
                />
              </span>
            ) : (
              'Search'
            )}
          </Button>
          <Button
            color="success"
            className="ml-3 px-auto saveBTn"
            onClick={() => this.props.saveQuery(textInput)}
          >
            Save
          </Button>
        </div>
      </Form>
    )
  }
}

SubmitForm.propTypes = {
  fetchPhotos: PropTypes.func.isRequired,
  saveQuery: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
}

const mapStateToProps = state => {
  return {
    savedPhotos: state.data.savedPhotos,
    loading: state.data.loading,
  }
}

export default connect(mapStateToProps, {
  fetchPhotos,
  saveQuery,
  toggleNoQuery,
})(SubmitForm)
