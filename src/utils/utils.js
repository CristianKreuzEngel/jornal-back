const crypto = require('crypto')

function generateSalt(){
    return crypto.randomBytes(16).toString('hex')
}

function hashedPassword(pass, salt){
    return crypto.pbkdf2Sync(pass, salt, 1000, 64, 'sha512').toString('hex');
}

function createUser (pass){
    const salt = generateSalt()
    const hashedPass = hashedPassword(pass, salt)
    return {salt, hashedPass}
}

function comparePassword(storedPassword, salt, providedPassword) {
    const hash = hashedPassword(providedPassword, salt)
    return hash === storedPassword
}

module.exports.createUser = createUser;
module.exports.comparePassword = comparePassword;