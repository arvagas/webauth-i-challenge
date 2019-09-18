import React from 'react'
import { Form, Field, withFormik } from 'formik'
import * as yup from 'yup'
import { connect } from 'react-redux'

import { register } from '../../actions'

const ComponentForm = ({ touched, errors, stateError }) => {
  return (
    <Form>
      <label>
        Username:
        <Field type='text' name='username' placeholder='Username' />
      </label>
      {touched.username && errors.username && <p>{errors.username}</p>}

      <label>
        Password:
        <Field type='password' name='password' placeholder='Password' />
      </label>
      {touched.password && errors.password && <p>{errors.password}</p>}

      {stateError ? <p>{stateError}</p> : ''}

      <button type='submit'>Submit</button>
    </Form>
  )
}

const RegisterForm = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || '',
      password: password || '',
    }
  },

  validationSchema: yup.object().shape({
    username: yup
      .string()
      .required('Username is required'),
    password: yup
      .string()
      .required('Password is required')
  }),

  handleSubmit(values, { props }) {
    props.register(values, props.history)
  }
})(ComponentForm)

const mapStateToProps = state => {
  return {
    stateError: state.error
  }
}

export default connect(mapStateToProps, { register })(RegisterForm)