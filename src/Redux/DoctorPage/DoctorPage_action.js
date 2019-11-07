import api from "./api"

export const doctorPage_load_type = {
    DOCTORPAGE_SUCCESS: 'DOCTORPAGE_SUCCESS'
}

export const doctorPage_edit_type = {
    DOCTORPAGEEDIT_SUCCESS: 'DOCTORPAGEEDIT_SUCCESS'
}

export const addClinic_type = {
    ADDCLINIC_SUCCESS: 'ADDCLINIC_SUCCESS'
}

export const addWorkingHour_type = {
    ADDWORKINGHOUR_SUCCESS: 'ADDWORKINGHOUR_SUCCESS'
}

export const doctor_load_type = {
    APPOINTMENTTIME_DOCTOR : 'APPOINTMENTTIME_DOCTOR'
}

export const clinic_load_type = {
    APPOINTMENTTIME_CLINIC : 'APPOINTMENTTIME_CLINIC',
}

export const loadDoctor_success = (res) => { 
    return {
        type: doctorPage_load_type.DOCTORPAGE_SUCCESS,
        doctorPage_load_result : res
    }
}

export const appointmentTime_loadDoctor_success = (res) => { 
    return {
        type: doctor_load_type.APPOINTMENTTIME_DOCTOR,
        appointmentDoctor_result: res
    }
}

export const appointmentTime_loadClinic_success = (res) => { 
    return {
        type: clinic_load_type.APPOINTMENTTIME_CLINIC,
        appointmentClinic_result: res
    }
}
export const editDoctor_success = (res) => { 
    return {
        type: doctorPage_edit_type.DOCTORPAGEEDIT_SUCCESS,
        doctorPage_edit_result: res
    }
}

export const addClinic_success = (res) => { 
    return {
        type: addClinic_type.ADDCLINIC_SUCCESS,
        addClinic: res
    }
}

export const addWorkingHour_success = (res) => { 
    return {
        type: addWorkingHour_type.ADDWORKINGHOUR_SUCCESS,
        workingHour: res
    }
}

export const doctorPage_load = () => {
    return function (dispatch) {
        return api.doctorPage_default()
            .then((response) => {
                if (response) {
                    dispatch(loadDoctor_success(response))
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }

}

export const doctorPage_Edit = (first_name, last_name, username, password, mobile_number, email, medical_system_number, gender, province, social_number, phone_number, address, expertise, url) => {
    return function (dispatch) {
        return api.handleEditdoctor(first_name, last_name, username, password, mobile_number, email, medical_system_number, gender, province, social_number, phone_number, address, expertise, url)
            .then((response) => {
                if (response) {
                    dispatch(editDoctor_success(response))
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }

}

export const doctorPage_addClinic = (clinicname, clinicprovince, clinic_phone_number, clinicaddress, medical_system_number) => {
    return function (dispatch) {
        return api.handleaddclinic(clinicname, clinicprovince, clinic_phone_number, clinicaddress, medical_system_number)
            .then((response) => {
                if (response) {
                    dispatch(addClinic_success(response))
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }
}

export const doctorPage_addWorkingHour = (dclinic, day, price, period,selectedDate, selectedDateE, clinics) => {
    return function (dispatch) {
        return api.addWorkingHour(dclinic, day, price, period,selectedDate, selectedDateE, clinics)
            .then((response) => {
                if (response) {
                    dispatch(addWorkingHour_success(response))
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }
}


export const appointmenttimeClinic_load = (url) => {
    return function (dispatch) {
        return api.loadAppointment_clinic(url)
            .then((response) => {
                if (response) {
                    console.log('response from login', response)
                    dispatch(appointmentTime_loadClinic_success(response))
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }
}

export const appointmenttimeDoctor_load = (url) => {
    return function (dispatch) {
        return api.loadAppointment_patient(url)
            .then((response) => {
                if (response) {
                    console.log('response from login', response)
                    dispatch(appointmentTime_loadDoctor_success(response))
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }
}