import {session_action_type} from './Rate_action'

const initialState = {

}
export const Rate_reducer = (state = initialState , action) => {
    switch(action.type){
        case session_action_type.ADD_RATE_SUCCESS :
            return{
                ...state
            }
        
         default :
            return state   
    }
}
