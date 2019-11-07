import { stat } from "fs"

class api{
    static appointment_times = async(id) =>{
        let x = await  fetch('http://172.17.3.103:8000/appointment_times/?clinic=' + id , {
          mode:"cors",
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

    static reserveTime = async (id) => {
      localStorage.setItem("btncolor" , "secondary")
      let x = await fetch('http://172.17.3.103:8000/appointment_times/'+ id+'/' , {
          mode: "cors",
          method: 'PUT',
          body: JSON.stringify({
              has_reserved : true,
              visiting:false,
              visited:false
          }),
          headers: {
              "Content-type": "application/json;charset=UTF-8",
              "Authorization" : "Token " + sessionStorage.getItem('token')
          }
      })      
  };


}export default api