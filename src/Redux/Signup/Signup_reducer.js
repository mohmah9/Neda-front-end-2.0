import { session_action_types } from './Signup_action'

const initialState = {
    signup_accept: false,
    signup_error: false
}

export const Signup_reducer = (state = initialState, action) => {
    switch (action.type) {
        case session_action_types.SIGNUP_SUCCESS:
            return {
                ...state,
                signup_accept: true
            }
        case session_action_types.SIGNUP_FAILURE:
            return {
                ...state,
                signup_accept: false,
                signup_error: 'کاربری با این مشخصات یافت نشد.'
            }
        default:
            return state
    }
}