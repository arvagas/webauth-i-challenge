import axios from 'axios'

// Dispatch actions
export const POST_LOGIN_START = 'POST_LOGIN_START'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAIL = 'POST_LOGIN_FAIL'

export const POST_REGISTER_START = 'POST_REGISTER_START'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAIL = 'POST_REGISTER_FAIL'

export const GET_USERS_START = 'GET_USERS_START'
export const GET_USERS_SUCCESS = 'GET_USERS_SUCCESS'
export const GET_USERS_FAIL = 'GET_USERS_FAIL'

export const GET_LOGOUT_START = 'GET_LOGOUT_START'
export const GET_LOGOUT_SUCCESS = 'GET_LOGOUT_SUCCESS'
export const GET_LOGOUT_FAIL = 'GET_LOGOUT_FAIL'

// Dispatch functions
export const login = (credentials, history) => dispatch => {
  dispatch({ type: POST_LOGIN_START })
  axios
    .post(`/api/auth/login`, credentials)
    .then(res => {
      dispatch({ type: POST_LOGIN_SUCCESS })
      history.push('/')
    })
    .catch(err => {
      dispatch({ type: POST_LOGIN_FAIL, payload: err.response.data.message })
    })
}

export const register = (credentials, history) => dispatch => {
  dispatch({ type: POST_REGISTER_START })
  axios
    .post(`/api/auth/register`, credentials)
    .then(res => {
      dispatch({ type: POST_REGISTER_SUCCESS })
      history.push('/login')
    })
    .catch(err => {
      dispatch({ type: POST_REGISTER_FAIL, payload: err.response.data.message })
    })
}

export const getUsers = () => dispatch => {
  dispatch({ type: GET_USERS_START })
  axios
    .get(`/api/users`)
    .then(res => {
      dispatch({ type: GET_USERS_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_USERS_FAIL, payload: err.response.data.message })
    })
}

export const logout = () => dispatch => {
  console.log('invoked')
  dispatch({ type: GET_LOGOUT_START })
  axios
    .get(`/api/auth/logout`)
    .then(res => {
      dispatch({ type: GET_LOGOUT_SUCCESS })
    })
    .catch(err => {
      dispatch({ type: GET_LOGOUT_FAIL, payload: err.response.data.message })
    })
}
