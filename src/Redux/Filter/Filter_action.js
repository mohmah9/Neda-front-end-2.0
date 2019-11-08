import api from "./api"

export const filter_type = {
    FILTER_SUCCESS: 'FILTER_SUCCESS'
}

export const filter_success = (res) => {
    return {
        type: filter_type.FILTER_SUCCESS,
        filter_result: res
    }
}

export const filter = (keyfilter) => {
    return function (dispatch) {
        return api.handlefilter(keyfilter)
            .then((response) => {
                if (response) {
                    console.log('response from login : ', response)
                    dispatch(filter_success(response))
                } else {
                    console.log('there was an error with filter')
                }
            })
    }

}