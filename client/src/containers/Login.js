import { connect } from 'react-redux'
import { login } from '../actions/authentication.actions'
import Login from '../components/Login'

const mapStateToProps = ({authentication}) => {
  return {
    isLoading: authentication.isLoggingIn,
    error: authentication.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (password) => {
      dispatch(login(password))
    }
  }
}

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)

export default LoginContainer