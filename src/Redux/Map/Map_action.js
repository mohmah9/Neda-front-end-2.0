import api from "./api";

export const load_clinics_location = {
    LOAD_CLINICS_LOCATION_SUCCESS : 'LOAD_CLINICS_LOCATION_SUCCESS',
}

export const load_loction = () => {
    return {
        type: load_clinics_location.LOAD_CLINICS_LOCATION_SUCCESS,
    }
}

export const load_clinic_loction = (url) => {
    return function (dispatch) {
        return api.load_location(url)
            .then((response) => {
                if (response) {
                    dispatch(load_loction())
                } else {
                    console.log('there was an error with loading location !!')
                }
            })
    }

}