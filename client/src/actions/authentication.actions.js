//action types
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

//actions
function request() {
    return {
        type: LOGIN_REQUEST
    }
}
function success() {
    return {
        type: LOGIN_SUCCESS
    }
}
function failure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    }
}

//action creators
export function login(password) {
    return dispatch => {
        dispatch(request())

        authenticate(password)
            .then(
                () => {
                    dispatch(success())
                },
                error => {
                    dispatch(failure(error))
                }
            )
    }
}

const authenticate = (password) => {
    const pass = 'Aa123456'

    return new Promise((resolve, reject) => {
        if (password === pass) {
            setTimeout(() => resolve(), 2000)
        }
        else {
            reject('wrong password')
        }
    });
}