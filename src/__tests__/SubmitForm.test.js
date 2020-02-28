import React from 'react'
import { Provider } from 'react-redux'
import SubmitForm from '../components/SubmitForm'
import * as actions from '../actions/ImageActions'
import * as types from '../actions/types'
import configureStore from 'redux-mock-store'
import renderer from 'react-test-renderer'
import imageReducer from '../reducers/imageReducer'
import onQuerySave from '../components/SubmitForm'

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState)
  }
  return next(action)
}

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  }
  const next = jest.fn()
  const invoke = action => thunk(store)(next)(action)
  return { store, next, invoke }
}


describe('Redux state reducer', () => {
  it('should return the initial state', () => {
    expect(imageReducer(undefined, {})).toEqual({
      savedPhotos: [],
      savedQueries: [],
      noQuery: false,
      noResults: false,
      loading: false,
    })
  })
  it('should handle TOGGLE_QUERY_MODAL', () => {
    expect(
      imageReducer(undefined, {
        type: types.TOGGLE_QUERY_MODAL,
        payload: true,
      }),
    ).toEqual({
      savedPhotos: [],
      savedQueries: [],
      noQuery: true,
      noResults: false,
      loading: false,
    })
  })
  it('should handle SAVE_QUERY', () => {
    expect(
      imageReducer(undefined, {
        type: types.SAVE_QUERY,
        payload: 'Test text',
      }),
    ).toEqual({
      savedPhotos: [],
      savedQueries: ['Test text'],
      noQuery: false,
      noResults: false,
      loading: false,
    })
  })
})

describe('actions', () => {
  const { store, invoke } = create()

  it('save query action called with predefined payload', () => {
    const payload = 'Test query'
    const expectedAction = {
      type: types.SAVE_QUERY,
      payload,
    }
    invoke((dispatch, getState) => {
      dispatch(expectedAction)
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith(expectedAction)
  })
})
describe('middleware functionality', () => {
  it('passes through non-function action', () => {
    const { next, invoke } = create()
    const action = { type: 'TEST' }
    invoke(action)
    expect(next).toHaveBeenCalledWith(action)
  })
  it('calls the function', () => {
    const { invoke } = create()
    const fn = jest.fn()
    invoke(fn)
    expect(fn).toHaveBeenCalled()
  })
  it('passes dispatch and getState', () => {
    const { store, invoke } = create()
    invoke((dispatch, getState) => {
      dispatch('TEST DISPATCH')
      getState()
    })
    expect(store.dispatch).toHaveBeenCalledWith('TEST DISPATCH')
    expect(store.getState).toHaveBeenCalled()
  })
})
