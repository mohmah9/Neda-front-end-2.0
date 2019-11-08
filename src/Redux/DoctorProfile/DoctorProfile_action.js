import api from "./api"

export const doctorProfileAacrion_types = {
    LOADAPPOINTMENTTIME: 'LOADAPPOINTMENTTIME',
    RESERVETIME: 'RESERVETIME',
}

export const loadAppointmentTime = (res) => {
    console.log(res)
    return {
        type: doctorProfileAacrion_types.LOADAPPOINTMENTTIME,
        appointmentTime_result: res
    }
}

export const reserveTime = () => {
    return {
        type: doctorProfileAacrion_types.RESERVETIME,
    }
}

export const appointmenttime_load = (id) => {
    return function (dispatch) {
        return api.appointment_times(id)
            .then((response) => {
                if (response) {
                    dispatch(loadAppointmentTime(response))
                    console.log(response)
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }

}

export const reserve_time = (id) => {
    return function (dispatch) {
        return api.reserveTime(id)
            .then((response) => {
                if (response) {
                    dispatch(reserveTime())
                    console.log(response)
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }

}