class api {
    static handleSubmit = async (user, pass) => {

        let x = await fetch('http://172.17.3.103:8000/get_token/', {
            mode: "cors",
            method: 'POST',
            body: JSON.stringify({
                username: user,
                password: pass
            }),
            headers: {
                "Content-type": "application/json;charset=UTF-8"
            }
        })

        x = await x.json()

        if (typeof (x.token) == "undefined") {
            return false
        } else {
            return x;
         }
    };

}
export default api