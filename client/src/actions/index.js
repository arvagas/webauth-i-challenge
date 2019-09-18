import axios from 'axios'

// Dispatch actions
export const POST_LOGIN_START = 'POST_LOGIN_START'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAIL = 'POST_LOGIN_FAIL'

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