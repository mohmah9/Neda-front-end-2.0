import api from './api'

export const session_action_type = {
    ADD_RATE_SUCCESS : 'ADD_RATE_SUCCESS'
}


export const add_rate =() =>{
    return{
        type : session_action_type.ADD_RATE_SUCCESS
    }
}

export const rateAction = (doctor, rate) => {
    return function (dispatch) {
        return api.addRate(doctor, rate)
            .then((response) => {
                if (response) {
                    console.log(response)
                    dispatch(add_rate())
                } else {
                    console.log('there was an error with add rate')
                }
            })
    }

}
