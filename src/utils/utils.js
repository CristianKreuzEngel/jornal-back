const crypto = require('crypto')
const jwt = require('jsonwebtoken')
const fs = require('fs')

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

function checkToken(token){
    const privateKey = fs.readFileSync("./src/private/private_key.pem");
    const decoded = jwt.verify(token, privateKey, {algorithm: 'RS256'})
    return decoded;
}

module.exports.createUser = createUser;
module.exports.comparePassword = comparePassword;
module.exports.checkToken = checkToken;