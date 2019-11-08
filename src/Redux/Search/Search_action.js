import api from "./api"

export const search_type = {
    SEARCH_SUCCESS: 'SEARCH_SUCCESS'
}

export const search_success = (res) => {
    return {
        type: search_type.SEARCH_SUCCESS,
        seacrh_result: res
    }
}

export const search = (keyword) => {
    return function (dispatch) {
        return api.handlesearch(keyword)
            .then((response) => {
                if (response) {
                    console.log('response from login : ', response)
                    dispatch(search_success(response))
                } else {
                    console.log('there was an error with seacrh')
                }
            })
    }

}