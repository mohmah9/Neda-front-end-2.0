import { medicalHistory_success_type , medicine_dialog_trans_type, medicine_load_success_type, medicine_saving_success_type, patientProfile_load_type, doctor_load_type, clinic_load_type } from "./PatientProfile_action"
import { patientProfile_edit_type } from "./PatientProfile_action"
import { patientProfile_cancleAppointment_type } from "./PatientProfile_action"

const initialState = {
    patientProfile_load_result: [],
    appointmentDoctor_result: '',
    appointmentClinic_result: '',
    medicalHistory_result: [],
    medicine_saving_result: [],
    dialog_medicine_open: false,
    medicine_load_result: []

}

export const PatientProfile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case patientProfile_load_type.PATIENTPROFILELOAD_SUCCESS:
            return {
                ...state,
                patientProfile_load_result: action.patientProfile_load_result
            }
        case patientProfile_edit_type.PATIENTPROFILEEDIT_SUCCESS:
            return {
                ...state,
            }

        case patientProfile_cancleAppointment_type.PATIENTPROFILECANCLE_SUCCESS:
            return {
                ...state
            }

        case doctor_load_type.APPOINTMENTTIME_DOCTOR:
            return {
                ...state,
                appointmentDoctor_result: action.appointmentDoctor_result
            }

        case clinic_load_type.APPOINTMENTTIME_CLINIC:
            return {
                ...state,
                appointmentClinic_result: action.appointmentClinic_result
            }
        case medicalHistory_success_type.MEDICALHISTORY_SUCCESS:
            return {
                ...state,
                medicalHistory_result: action.medicalHistory_result
            }
        case medicine_saving_success_type.MEDICINE_SAVING_SUCCESS:
            return {
                ...state,
                medicine_saving_result: action.medicine_saving_result
            }
        case medicine_load_success_type.MEDICINE_LOAD_SAVING_SUCCESS:
            return {
                ...state,
                medicine_load_result: action.medicine_load_result
            }
        case medicine_dialog_trans_type.MEDICINE_DIALOG_TRANS_SUCCESS:
            return {
                ...state,
                dialog_medicine_open: !state.dialog_medicine_open
            }
        default:
            return state
    }
}