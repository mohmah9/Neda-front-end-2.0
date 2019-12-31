class api {
    static load_medical_information = async () => {

        let x = await fetch('http://172.17.3.103:8000/medical_information/', {
           mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            }
        })

        x = await x.json()

        if (typeof (x) == "undefined") {
            return false
        } else {
            console.log(x)
            return x;
        }
    };

}
export default api