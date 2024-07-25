function validation(values) {
    let error = {}
    // const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    // const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

   
    if(values.username === "") {
        error.username = "Please enter name"
    } else {
        error.username = ""
    }

    if(values.email === "") {
        error.email = "Please enter work email"
    } else {
        error.email = ""
    }

    if(values.mobileNumber === "") {
        error.mobileNumber = "Please enter valid number"
    } else {
        error.mobileNumber = ""
    }

    if(values.password === "") {
        error.password = "Please enter password"
    } else {
        error.password = ""
    }
    return error;

}

export default validation;