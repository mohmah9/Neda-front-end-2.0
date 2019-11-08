class api {
    static addRate = async (doctor, rate) => {

        let x = await fetch('http://172.17.3.103:8000/doctor_rates/', {
            mode: "cors",
            method: 'POST',
            body: JSON.stringify({
                doctor : doctor,
                rate : rate
            }),
            headers: {
                "Content-type": "application/json;charset=UTF-8",
                "Authorization": "Token " + sessionStorage.getItem('token')
            }
        })

        x = await x.json()
        
        if (typeof (x.id) == "undefined") {
            return false
        } else {
            return x;
         }
    };

}
export default api
