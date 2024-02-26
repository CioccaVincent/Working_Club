const bcrypt = require("bcrypt");

const passwordCrypt = async (password) => {
    try {
        const hash = await bcrypt.hash(password, 10)
        return hash
    } catch (err) {
        throw new Error(err.message)
    }
}

module.exports = {
    passwordCrypt
}