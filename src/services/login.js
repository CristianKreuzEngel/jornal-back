const db = require('../configs/pg')
const jwt = require('jsonwebtoken')
const cript = require('../utils/utils')
const fs = require('fs')

const sql_get = 
`select users.usu_email,
        users.usu_salt, 
        users.usu_password
   from users
  where users.usu_email = $1 `

const login = async(params) => {
    console.log(params)
    const{user, pass} = params
    result = await db.query(sql_get, [user])
    if (!result.rows.length) throw new Error("Usuário não existe")
    else {
console.log(result.rows)
        const salt = result.rows[0].usu_salt
        const password = result.rows[0].usu_password
        if (cript.comparePassword(password, salt, pass)){
            let perfilAcesso = result.rows[0].username
            const privateKey = fs.readFileSync("./src/private/private_key.pem");
            let token = jwt.sign({perfilAcesso}, privateKey, {algorithm: 'RS256', expiresIn: '7d'})
            return {
                status: 'Logado com sucesso!',
                user: result.rows[0].username,
                token: token
            }
        } else {
            throw {status: 400, type: 'WARN', message: 'Senha inválida!', detail: ''}
        }
    }
}

module.exports.login = login