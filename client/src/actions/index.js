import axios from 'axios'

// Dispatch actions
export const POST_LOGIN_START = 'POST_LOGIN_START'
export const POST_LOGIN_SUCCESS = 'POST_LOGIN_SUCCESS'
export const POST_LOGIN_FAIL = 'POST_LOGIN_FAIL'

export const POST_REGISTER_START = 'POST_REGISTER_START'
export const POST_REGISTER_SUCCESS = 'POST_REGISTER_SUCCESS'
export const POST_REGISTER_FAIL = 'POST_REGISTER_FAIL'

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