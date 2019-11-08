export const home_viewinfo_type = {
    VIEWINFO_SUCCESS: 'HOME_VIEWINFO_SUCCESS',
    BACKHOME_SUCCESS: 'BACKHOME_SUCCESS',
}

export const viewinfo_success = (res) => {
    return {
        type: home_viewinfo_type.VIEWINFO_SUCCESS,
        doctor_info: res,
        go_to_doctor:true
    }
}
export const go_back_home = () => {
    return {
        type: home_viewinfo_type.BACKHOME_SUCCESS,
        go_to_doctor:false
    }
}
