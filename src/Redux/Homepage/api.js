class api {
    static home_default = async () => {
        let x = await fetch('http://172.17.3.103:8000/doctors/', {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        x = await x.json()

        if (typeof (x) == "undefined") {
            return false
        } else {
            return x;
         }
    };

}
export default api


