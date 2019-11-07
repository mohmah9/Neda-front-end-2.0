import api from "./api";

export const home_load_type = {
    LOAD_SUCCESS: 'HOME_LOAD_SUCCESS'
}

export const load_success = (res) => {
    return {
        type: home_load_type.LOAD_SUCCESS,
        home_default_result: res
    }
}

export const home_default = () => {
    return function (dispatch) {
        return api.home_default()
            .then((response) => {
                if (response) {
                    console.log('response from login : ', response)
                    dispatch(load_success(response))
                } else {
                    console.log('there was an error with loading default doctors')
                }
            })
    }

}