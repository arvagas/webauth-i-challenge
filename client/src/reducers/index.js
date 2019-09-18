import {
  POST_LOGIN_START,
  POST_LOGIN_SUCCESS,
  POST_LOGIN_FAIL,
  POST_REGISTER_START,
  POST_REGISTER_SUCCESS,
  POST_REGISTER_FAIL,
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
        isLoading: false,
        isLoggedIn: true,
        error: ''
      }
    case POST_LOGIN_FAIL :
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    case POST_REGISTER_START :
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    case POST_REGISTER_SUCCESS :
      return {
        ...state,
        isLoading: false,
        error: ''
      }
    case POST_REGISTER_FAIL :
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    default :
      return state
  }
}