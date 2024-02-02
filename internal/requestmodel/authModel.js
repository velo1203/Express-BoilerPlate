class registerRequestModel {
    constructor({ email, password }) {
        this.email = email;
        this.password = password;
    }
    vaildate() {
        if (!this.email || !this.password) {
            throw Error("email and password are required");
        }
        return true;
    }
}

module.exports = registerRequestModel;
