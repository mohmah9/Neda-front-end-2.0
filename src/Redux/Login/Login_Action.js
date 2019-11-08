import api from "./api";

export const session_action_types = {
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    LOGIN_FAILURE: 'LOGIN_FAILUR',
    LOGOUT_SUCCESS: 'LOGOUT_SUCCESS'
}

export const login_success = () => {
    return {
        type: session_action_types.LOGIN_SUCCESS,
        logged_in: true
    }
}

export const login_failure = () => {
    return {
        type: session_action_types.LOGIN_FAILURE,
    }
}

export const logout_success = () => {
    return {
        type: session_action_types.LOGOUT_SUCCESS,
        logged_in: false
    }
}

export const loginAction = (user, pass) => {
    return function (dispatch) {
        return api.handleSubmit(user, pass)
            .then((response) => {
                if (response) {
                    console.log('response from login : ', response.token)
                    sessionStorage.setItem('token', response.token)
                    sessionStorage.setItem('kind', response.kind)
                    dispatch(login_success())
                } else {
                    console.log('there was an error with login')
                    dispatch(login_failure())
                }
            })
    }

}