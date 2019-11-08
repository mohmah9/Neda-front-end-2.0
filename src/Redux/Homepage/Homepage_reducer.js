import { home_load_type } from "./Homepage_action"
import { filter_type } from "../Filter/Filter_action"
import { search_type } from "../Search/Search_action"

const initialState = {
    home_default_result: []
}

export const Homepage_reducer = (state = initialState, action) => {
    switch (action.type) {
        case home_load_type.LOAD_SUCCESS:
            return {
                ...state,
                home_default_result: action.home_default_result
            }
        case filter_type.FILTER_SUCCESS:
            return {
                ...state,
                home_default_result: action.filter_result
            }
        case search_type.SEARCH_SUCCESS:
            return {
                ...state,
                home_default_result: action.seacrh_result
            }
        default:
            return state
    }
}