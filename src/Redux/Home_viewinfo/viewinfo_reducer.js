import { home_viewinfo_type } from "./viewinfo_action";

const initialState = {
    doctor_info: '',
    go_to_doctor: false
}

export const Viewinfo_reducer = (state = initialState, action) => {
    switch (action.type) {
        case home_viewinfo_type.VIEWINFO_SUCCESS:
            return {
                ...state,
                doctor_info: action.doctor_info,
                go_to_doctor: action.go_to_doctor
            }
        case home_viewinfo_type.BACKHOME_SUCCESS:
            return {
                ...state,
                go_to_doctor: action.go_to_doctor
            }
        default:
            return state
    }
}