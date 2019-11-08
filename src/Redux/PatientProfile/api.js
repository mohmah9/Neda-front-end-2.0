class api{
    static parientProfile_default = async() => {
        let x = await fetch('http://172.17.3.103:8000/patients/', {
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
            return x;
         }
    };

    
    static handleEditpatient = async (first_name,last_name,address, username, password, mobile_number,email, social_number,phone_number, province, medical_system_number, gender) => {
      let x = await  fetch('http://172.17.3.103:8000/patients/' + social_number + '/', {
          mode: "cors",
          method: 'PUT',
          body: JSON.stringify({
            user: {
              first_name: first_name,
              last_name:  last_name,
              username:  username,
              password:  password,
              province:  province,
              email:  email,
            },
            mobile_number:  mobile_number,
            social_number:  social_number,
            phone_number:  phone_number,
            address: address,
            date_of_birth: "1360-01-14",
            gender:  gender,
            medical_system_number: medical_system_number
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
            "Authorization": "Token " + sessionStorage.getItem('token')
          }
        })
      
      x = await x.json()
  
      if (typeof (x.address) == "undefined") {
          return false
      } else {
          return x;
      }
  };
     
  static cancleTime = async (url) => {

    let x = await fetch(url, {
      mode: "cors",
      method: 'PUT',
      body: JSON.stringify({
        has_reserved: false,
        visiting : false,
        visited : false
      }),
      headers: {
        "Content-type": "application/json;charset=UTF-8",
        "Authorization": "Token " + sessionStorage.getItem('token')
      }
    })

    x = await x.json()
  
    if (typeof (x.address) == "undefined") {
        return false
    } else {
        return x;
    }
  };

  static loadAppointment_doctor = async (url) => {

    let x = await fetch(url, {
      mode: "cors",
      method: 'GET',

    })

    x = await x.json()
    if (typeof (x) == "undefined") {
        return false
    } else {
          await localStorage.setItem("doctor_fname_"+url, x.user.first_name)
          await localStorage.setItem("doctor_lname_"+url, x.user.last_name)
          console.log(localStorage.getItem("doctor_fname_"+url))
        return x;
    }
  };
  
  static loadAppointment_clinic = async (url) => {

    let x = await fetch(url, {
      mode: "cors",
      method: 'GET',

    })

    x = await x.json()
  
    if (typeof (x.address) == "undefined") {
        return false
    } else {
        await localStorage.setItem("clinic_name_"+url, x.name)
        await localStorage.setItem("clinic_phonnumber_"+url, x.phone_number)
        return x;
    }
  };
  
  static loadMedical_history = async (patient_id) => {
    
    let x = await fetch("http://172.17.3.103:8000/medical_histories/?patient="+patient_id, {
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
  
}export default api;
