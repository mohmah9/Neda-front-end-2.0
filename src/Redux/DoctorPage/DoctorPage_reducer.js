import { doctorPage_load_type } from "./DoctorPage_action"
import { doctorPage_edit_type } from "./DoctorPage_action"
import { addClinic_type } from "./DoctorPage_action"
import { addWorkingHour_type, appointments_load_type } from "./DoctorPage_action"

const initialState = {
    doctorPage_load_result: [],
    doctorPage_edit_result: [],
    timeresult:[]

}

export const DoctorPage_reducer = (state = initialState, action) => {

    switch (action.type) {
        case doctorPage_load_type.DOCTORPAGE_SUCCESS:
            return {
                ...state,
                doctorPage_load_result: action.doctorPage_load_result
            }
        case doctorPage_edit_type.DOCTORPAGEEDIT_SUCCESS:
            return {
                ...state,
                doctorPage_edit_result: action.doctorPage_edit_result
            }
        case addClinic_type.ADDCLINIC_SUCCESS:
            return {
                ...state,
            }
        case addWorkingHour_type.ADDWORKINGHOUR_SUCCESS:
            return {
                ...state,
            }
        case appointments_load_type.APPOINTMENTTIME_LOAD_SUCCESS:
            return {
                ...state,
                timeresult: action.timeresult
            }
        default:
            return state
    }
}