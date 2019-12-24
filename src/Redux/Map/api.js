class api {
    static load_location = async (url) => {

        let x = await fetch(url, {
           mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + sessionStorage.getItem("token"),
            }
        })

        x = await x.json()

        if (typeof (x) == "undefined") {
            return false
        } else {
            await localStorage.setItem(url+'latitude', x.latitude)
            await localStorage.setItem(url+'longitude', x.longitude)
            console.log(x)
            return x;
        }
    };

}
export default api