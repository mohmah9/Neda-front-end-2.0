import api from "./api";

export const load_Medical_Information= {
    LOAD_INFORMATION_SUCCESS : 'LOAD_CLINICS_LOCATION_SUCCESS',
}

export const load_mediacl_info = (res) => {
    console.log(res)
    return {
        type: load_Medical_Information.LOAD_INFORMATION_SUCCESS,
        medical_info : res
    }
}

export const load_mediacl = () => {
    return function (dispatch) {
        return api.load_medical_information()
            .then((response) => {
                if (response) {
                    dispatch(load_mediacl_info(response))
                } else {
                    console.log('there was an error with loading location !!')
                }
            })
    }

}