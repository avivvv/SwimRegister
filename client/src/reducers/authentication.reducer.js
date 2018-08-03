import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/authentication.actions'

const initialState = {}

export const authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        isLoggingIn: true
      }
    case LOGIN_SUCCESS:
      return {
        isLoggedIn: true
      }
    case LOGIN_FAILURE:
      return {
        error: action.error
      }
    default:
      return state
  }
}