import {doctorProfileAacrion_types} from "./DoctorProfile_action"
const initialState = {
    appointmentTime_result :[]
    
}

export const DoctorProfile_reducer = (state = initialState, action) => {
    
    switch (action.type) {
        case  doctorProfileAacrion_types.LOADAPPOINTMENTTIME :
            return{
                ...state,
                appointmentTime_result : action.appointmentTime_result
            }
        case  doctorProfileAacrion_types.RESERVETIME :
            return{
                ...state,
                appointmentTime_result : action.appointmentTime_result
            }    
        default:
            return state
    }
}