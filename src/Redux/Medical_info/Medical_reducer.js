import {load_Medical_Information} from "./Medical_action";

const initialState = {
    medical_info: []
}

export const medical_reducer = (state = initialState, action) => {
    switch (action.type) {
        case load_Medical_Information.LOAD_INFORMATION_SUCCESS:
            return {
                ...state,
                medical_info : action.medical_info,
            }
        default:
            return state
    }
}