class api {
    static handleSubmitpatient = async (first_name, last_name, username, password, mobile_number, email, is_doctor, is_patient, is_hospital, social_number, gender) => {
        let gen = "";
        gen = gender === "female" ? "زن" : "مرد";
        let x = await fetch('http://172.17.3.103:8000/users/', {
            mode: "cors",
            method: 'POST',
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                username: username,
                password: password,
                mobile_number: mobile_number,
                email: email,
                is_doctor: is_doctor,
                is_patient: is_patient,
                is_hospital: is_hospital,
                social_number: social_number,
                gender: gen,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        x = await x.json()

        if (typeof (x.username) == "undefined") {
            return false
        } else {
            return x;
        }
    };


    static handleSubmitDoctor = async (first_name, last_name, username, password, mobile_number, email, is_doctor, is_patient, is_hospital, date_of_birth, medical_system_number, gender, expertise, province) => {
        let gen = "";
        gen = gender === "female" ? "زن" : "مرد";
        let x = await fetch('http://172.17.3.103:8000/users/', {
            mode: "cors",
            method: 'POST',
            body: JSON.stringify({
                first_name: first_name,
                last_name: last_name,
                username: username,
                password: password,
                mobile_number: mobile_number,
                email: email,
                is_doctor: is_doctor,
                is_patient: is_patient,
                is_hospital: is_hospital,
                date_of_birth: date_of_birth,
                medical_system_number: medical_system_number,
                gender: gen,
                expertise: expertise,
                province: province,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        x = await x.json()

        if (typeof (x.username) == "undefined") {
            return false
        } else {
            return x;
        }

    };

    static handleSubmitHospital = async (first_name, address, username, password, email, is_doctor, is_patient, is_hospital, phone_number, post_code, province) => {
        let x = await fetch('http://172.17.3.103:8000/users/', {
            mode: "cors",
            method: 'POST',
            body: JSON.stringify({
                first_name: first_name,
                address: address,
                username: username,
                password: password,
                email: email,
                is_doctor: is_doctor,
                is_patient: is_patient,
                is_hospital: is_hospital,
                phone_number: phone_number,
                post_code: post_code,
                province: province,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        
        x = await x.json()

        if (typeof (x.username) == "undefined") {
            return false
        } else {
            return x;
        }
    };

}
export default api