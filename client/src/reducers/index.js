import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAIL,
} from '../actions'

const initialState = {
  users: [],
  isLoading: false,
  error: '',
  isLoggedIn: false,
}

export const reducer = (state = initialState, action) => {
  switch(action.type) {
    case POST_LOGIN_START :
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case POST_LOGIN_SUCCESS :
      return {
        ...state,
        isLoading: true,
        isLoggedIn: false,
        error: ''
      }
    case POST_LOGIN_FAIL :
      return {
        ...state,
        isLoggedIn: false,
        error: action.payload
      }
    default :
      return state
  }
}