class api {
    static doctorPage_default = async () => {
        let x = await fetch('http://172.17.3.103:8000/doctors/', {
            mode: "cors",
            method: 'GET',
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + sessionStorage.getItem('token'),
            }
        })
        x = await x.json()

        if (typeof (x) == "undefined") {
            return false
        } else {
            return x;
        }
    };

    static handleEditdoctor = async (first_name, last_name, username, password, mobile_number, email, medical_system_number, gender, province, social_number, phone_number, address, expertise, bio, url) => {
        console.log(url)
        let x = await fetch(url, {
            mode: "cors",
            method: 'PUT',
            body: JSON.stringify({
                user: {
                    first_name: first_name,
                    last_name: last_name,
                    username: username,
                    password: password,
                    province: province,
                    email: email,
                },
                expertise: expertise,
                medical_system_number: medical_system_number,
                mobile_number: mobile_number,
                social_number: social_number,
                phone_number: phone_number,
                bio: bio,
                address: address,
                date_of_birth: "1360-01-14",
                gender: gender,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " +  sessionStorage.getItem('token')
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

    static handleaddclinic = async (clinicname, clinicprovince, clinic_phone_number, clinicaddress, medical_system_number) => {
        let x = await fetch('http://172.17.3.103:8000/clinics/', {
            mode: "cors",
            method: 'POST',
            body: JSON.stringify({
                name: clinicname,
                province: clinicprovince,
                phone_number: clinic_phone_number,
                address: clinicaddress,
                doctor: medical_system_number
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + sessionStorage.getItem('token')
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

    static addWorkingHour = async (dclinic, day, price, period, selectedDate, selectedDateE, clinics) => {
        let clinicid = 0
        clinics.forEach(element => {
            if (element.name === dclinic) {
                clinicid = element.url.split('/')[4]
            }
        });

        let x = await fetch(' http://172.17.3.103:8000/working_hours/', {
            mode: "cors",
            method: 'POST',
            body: JSON.stringify({
                hospital: null,
                clinic: clinicid,
                day: day,
                price: price,
                period: period,
                start: selectedDate.toTimeString().split(" ")[0].substring(0, 5) + "00",
                end: selectedDateE.toTimeString().split(" ")[0].substring(0, 5) + "00"

            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + sessionStorage.getItem('token')
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

    static loadAppointment_patient = async (url) => {

        let x = await fetch('http://172.17.3.103:8000/patients/' + url+'/', {
            mode: "cors",
            method: 'GET',

        })

        x = await x.json()
        if (typeof (x) == "undefined") {
            return false
        } else {
            await localStorage.setItem("patient_fname_"+url, x.user.first_name)
            await localStorage.setItem("patient_lname_"+url, x.user.last_name)
            // console.log(localStorage.getItem("patient_fname_"+url))
            return x;
        }
    };

    static loadAppointment_clinic = async (url) => {

        let x = await fetch('http://172.17.3.103:8000/clinics/' + url+ '/', {
            mode: "cors",
            method: 'GET',

        })

        x = await x.json()

        if (typeof (x.address) == "undefined") {
            return false
        } else {
            // console.log(x)
            await localStorage.setItem("clinic_name_"+url, x.name)
            // console.log(localStorage.getItem("clinic_name_"+url))
            return x;
        }
    };

    static load_all_appointments = async (medical_number) => {

        let x = await fetch("http://172.17.3.103:8000/appointment_times/?doctor=" + medical_number, {
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
            return x;
        }
    };

    static edit_medicalhistory = async (url_content) => {
        console.log(url_content)
        let x = await fetch(url_content[0].url, {
            mode: "cors",
            method: 'PUT',
            body: JSON.stringify({
                content:url_content[1],
                id:url_content[0].id,
                date:url_content[0].date,
                patient:url_content[0].patient,
                doctor:url_content[0].doctor,
                expertise:url_content[0].expertise
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + sessionStorage.getItem('token')
            }
        })

        x = await x.json()

        if (typeof (x) == "undefined") {
            return false
        } else {
            return x;
        }
    };

    static add_medicalhistory = async (url_content) => {
        console.log(url_content)
        let x = await fetch('http://172.17.3.103:8000/medical_histories/', {
            mode: "cors",
            method: 'POST',
            body: JSON.stringify({
                content:url_content[1],
                patient:"http://172.17.3.103:8000/patients/"+url_content[0]+"/",
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + sessionStorage.getItem('token')
            }
        })

        x = await x.json()

        if (typeof (x) == "undefined") {
            return false
        } else {
            return x;
        }
    };

    static set_visiting = async (url_content) => {

        let x = await fetch("http://172.17.3.103:8000/appointment_times/" + url_content + "/", {
            mode: "cors",
            method: 'PUT',
            body: JSON.stringify({
                visiting:true
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + sessionStorage.getItem('token')
            }
        })

        x = await x.json()

        if (typeof (x) == "undefined") {
            return false
        } else {
            return x;
        }
    };

    static set_visited = async (url_content) => {

        let x = await fetch("http://172.17.3.103:8000/appointment_times/" + url_content + "/", {
            mode: "cors",
            method: 'PUT',
            body: JSON.stringify({
                visited:true
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
                "Authorization": "Token " + sessionStorage.getItem('token')
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

export default api;
