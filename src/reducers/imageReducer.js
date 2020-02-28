import {
  SAVE_QUERY,
  FETCH_PHOTOS,
  TOGGLE_QUERY_MODAL,
  TOGGLE_RESULTS_MODAL,
  QUERY_LOADING,
} from '../actions/types'

const initialState = {
  savedPhotos: [],
  savedQueries: [],
  noQuery: false,
  noResults: false,
  loading: false,
}

export default function(state = initialState, action) {
  switch (action.type) {
    case SAVE_QUERY:
      return {
        ...state,
        savedQueries: [...state.savedQueries, action.payload],
      }
    case FETCH_PHOTOS:
      return {
        ...state,
        savedPhotos: [...action.payload],
      }
    case TOGGLE_QUERY_MODAL:
      return {
        ...state,
        noQuery: action.payload,
      }
    case TOGGLE_RESULTS_MODAL:
      return {
        ...state,
        noResults: action.payload,
      }
    case QUERY_LOADING:
      return {
        ...state,
        loading: action.payload,
      }
    default:
      return state
  }
}
