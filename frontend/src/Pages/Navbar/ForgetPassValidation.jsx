function validation (values) {
    let error = {}

    if(values.email === "") {
        error.email = "Please enter work email"
    } else {
        error.email = ""
    }
    return error;
}

export default validation;