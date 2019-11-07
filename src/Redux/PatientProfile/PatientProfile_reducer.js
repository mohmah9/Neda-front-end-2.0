import { patientProfile_load_type , doctor_load_type, clinic_load_type} from "./PatientProfile_action"
import { patientProfile_edit_type } from "./PatientProfile_action"
import {patientProfile_cancleAppointment_type} from "./PatientProfile_action"

const initialState = {
    patientProfile_load_result: [],
    appointmentDoctor_result : '',
    appointmentClinic_result : ''

}

export const PatientProfile_reducer = (state = initialState, action) => {
    switch (action.type) {
        case patientProfile_load_type.PATIENTPROFILELOAD_SUCCESS:
            return {
                ...state,
                patientProfile_load_result: action.patientProfile_load_result
            }
        case patientProfile_edit_type.PATIENTPROFILEEDIT_SUCCESS :
            return{
                ...state,        
            }
        
        case patientProfile_cancleAppointment_type.PATIENTPROFILECANCLE_SUCCESS :
            return{
                    ...state
            }
        
        case doctor_load_type.APPOINTMENTTIME_DOCTOR :
            return{
                ...state,
                appointmentDoctor_result : action.appointmentDoctor_result
            }

        case clinic_load_type.APPOINTMENTTIME_CLINIC :
                return{
                    ...state,
                    appointmentClinic_result : action.appointmentClinic_result
                }    
        default:
            return state
    }
}