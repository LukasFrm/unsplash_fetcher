import {
  SAVE_QUERY,
  FETCH_PHOTOS,
  QUERY_LOADING,
  TOGGLE_QUERY_MODAL,
  TOGGLE_RESULTS_MODAL,
} from './types'
import axios from 'axios'

export const fetchPhotos = query => dispatch => {
  let multiQuery = query.replace(/ /g, "+")
  
  dispatch({ type: QUERY_LOADING, payload: true })
  axios
    .get(
      `https://api.unsplash.com/search/photos?page=1&query=${multiQuery}&client_id=${process.env.REACT_APP_ACCESSS_KEY}&per_page=30`,
    )
    .then(res => {
      dispatch({
        type: FETCH_PHOTOS,
        payload: res.data.results,
      })

      console.log(res.data.results)

      res.data.results.length === 0 &&
        dispatch({ type: TOGGLE_RESULTS_MODAL, payload: true })

      dispatch({ type: QUERY_LOADING, payload: false })
    })
}

export const saveQuery = val => dispatch => {
  dispatch({ type: SAVE_QUERY, payload: val })
}

export const toggleNoQuery = val => dispatch => {
  dispatch({ type: TOGGLE_QUERY_MODAL, payload: val })
}

export const toggleNoResults = val => dispatch => {
  dispatch({ type: TOGGLE_RESULTS_MODAL, payload: val })
}
