import api from "./api";

export const session_action_types = {
    SIGNUP_SUCCESS: 'SIGNUP_SUCCESS',
    SIGNUP_FAILURE: 'SIGNUP_FAILURE'
}

export const signup_success = () => {
    return {
        type: session_action_types.SIGNUP_SUCCESS,
        signup_accept: true
    }
}

export const signup_failure = () => {
    return {
        type: session_action_types.SIGNUP_FAILURE,
        signup_accept: false
    }
}

export const patient_signup = (first_name,last_name,username,password,mobile_number,email,is_doctor,is_patient,is_hospital,social_number,gender) => {
    return function (dispatch) {
        return api.handleSubmitpatient(first_name,last_name,username,password,mobile_number,email,is_doctor,is_patient,is_hospital,social_number,gender)
            .then((response) => {
                if (response) {
                    console.log('response from signup : ', response.username)
                    dispatch(signup_success())
                } else {
                    console.log('there was an error with signup')
                    dispatch(signup_failure())
                }
            })
    }

}

export const doctor_signup = (first_name,last_name,username,password,mobile_number,email,is_doctor,is_patient,is_hospital,date_of_birth,medical_system_number,gender,expertise,province) => {
    return function (dispatch) {
        return api.handleSubmitDoctor(first_name,last_name,username,password,mobile_number,email,is_doctor,is_patient,is_hospital,date_of_birth,medical_system_number,gender,expertise,province)
            .then((response) => {
                if (response) {
                    console.log('response from signup : ', response.username)
                    dispatch(signup_success())
                } else {
                    console.log('there was an error with signup')
                    dispatch(signup_failure())
                }
            })
    }

}

export const hospital_signup = (first_name,address,username,password,email,is_doctor,is_patient,is_hospital,phone_number,post_code,province) => {
    return function (dispatch) {
        return api.handleSubmitHospital(first_name,address,username,password,email,is_doctor,is_patient,is_hospital,phone_number,post_code,province)
            .then((response) => {
                if (response) {
                    console.log('response from signup : ', response.username)
                    dispatch(signup_success())
                } else {
                    console.log('there was an error with signup')
                    dispatch(signup_failure())
                }
            })
    }

}