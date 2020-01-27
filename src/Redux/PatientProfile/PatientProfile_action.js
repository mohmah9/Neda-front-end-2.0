import api from "./api"

export const patientProfile_load_type = {
    PATIENTPROFILELOAD_SUCCESS: 'PATIENTPROFILELOAD_SUCCESS',
}

export const doctor_load_type = {
    APPOINTMENTTIME_DOCTOR : 'APPOINTMENTTIME_DOCTOR'
}

export const clinic_load_type = {
    APPOINTMENTTIME_CLINIC : 'APPOINTMENTTIME_CLINIC',
}

export const patientProfile_edit_type = {
    PATIENTPROFILEEDIT_SUCCESS: 'PATIENTPROFILEEDIT_SUCCESS'
}

export const patientProfile_cancleAppointment_type = {
    PATIENTPROFILECANCLE_SUCCESS: 'PATIENTPROFILECANCLE_SUCCESS'
}

export const medicalHistory_success_type = {
    MEDICALHISTORY_SUCCESS: 'MEDICALHISTORY_SUCCESS'
}

export const medicine_saving_success_type = {
    MEDICINE_SAVING_SUCCESS: 'MEDICINE_SAVING_SUCCESS'
}

export const medicine_load_success_type = {
    MEDICINE_LOAD_SAVING_SUCCESS: 'MEDICINE_LOAD_SAVING_SUCCESS'
}

export const medicine_dialog_trans_type = {
    MEDICINE_DIALOG_TRANS_SUCCESS: 'MEDICINE_DIALOG_TRANS_SUCCESS'
}

export const loadPatient_success = (res) => { 
    return {
        type: patientProfile_load_type.PATIENTPROFILELOAD_SUCCESS,
        patientProfile_load_result: res
    }
}

export const editPatient_success = (res) => { 
    return {
        type: patientProfile_edit_type.PATIENTPROFILEEDIT_SUCCESS,
        patientProfile_edit_result: res
    }
}

export const cancelPatient_success = () => { 
    return {
        type: patientProfile_cancleAppointment_type.PATIENTPROFILECANCLE_SUCCESS,
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

export const medicalHistory_success = (res) => { 
    return {
        type: medicalHistory_success_type.MEDICALHISTORY_SUCCESS,
        medicalHistory_result: res
    }
}

export const medicine_saving_success = (res) => { 
    return {
        type: medicine_saving_success_type.MEDICINE_SAVING_SUCCESS,
        medicine_saving_result: res
    }
}

export const medicine_load_success = (res) => { 
    return {
        type: medicine_load_success_type.MEDICINE_LOAD_SAVING_SUCCESS,
        medicine_load_result: res
    }
}

export const medicine_dialog_trans = () => { 
    // console.log("fjnhfgjkb")
    return {
        type: medicine_dialog_trans_type.MEDICINE_DIALOG_TRANS_SUCCESS,
    }
}

export const PatientProfile_load = () => {
    return function (dispatch) {
        return api.parientProfile_default()
            .then((response) => {
                if (response) {
                    // console.log('response from login', response)
                    dispatch(loadPatient_success(response))
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }
}

export const PatientProfile_edit = (first_name,last_name,address, username, password, mobile_number,email, social_number,phone_number, province, medical_system_number, gender) => {
    return function (dispatch) {
        return api.handleEditpatient(first_name,last_name,address, username, password, mobile_number,email, social_number,phone_number, province, medical_system_number, gender)
            .then((response) => {
                if (response) {
                    // console.log('response from edit profile', response)
                    dispatch(editPatient_success(response))
                } else {
                    console.log('there was an error with edit')
                }
            })
    }
}

export const PatientProfile_cancel = (url) => {
    return function (dispatch) {
        return api.cancleTime(url)
            .then((response) => {
                if (response) {
                    // console.log('response from login', response)
                    dispatch(cancelPatient_success(response))
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
                    // console.log('response from login', response)
                    dispatch(appointmentTime_loadClinic_success(response))
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }
}

export const appointmenttimeDoctor_load = (url) => {
    return function (dispatch) {
        return api.loadAppointment_doctor(url)
            .then((response) => {
                if (response) {
                    // console.log('response from login', response)
                    dispatch(appointmentTime_loadDoctor_success(response))
                } else {
                    console.log('there was an error with loading profile page')
                }
            })
    }
}
export const patientProfile_medicalhistory = (patient_id) =>{
    return function (dispatch) {
        return api.loadMedical_history(patient_id)
            .then((response) => {
                if (response) {
                    // console.log('response from medical history', response)
                    dispatch(medicalHistory_success(response))
                } else {
                    console.log('there was an error with loading medical history')
                }
            })
    }
}
export const medicine_reminder = (info) =>{
    return function (dispatch) {
        return api.medicine_saving(info)
            .then((response) => {
                if (response) {
                    console.log('response from medicine', response)
                    dispatch(medicine_saving_success(response))
                } else {
                    console.log('there was an error with medicine')
                }
            })
    }
}
export const medicine_load = (url) =>{
    return function (dispatch) {
        return api.med_load(url)
            .then((response) => {
                if (response) {
                    console.log('response from medicine', response)
                    dispatch(medicine_load_success(response))
                } else {
                    console.log('there was an error with medicine load')
                }
            })
    }
}