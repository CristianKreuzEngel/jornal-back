const db = require('../configs/pg');
const cript = require('../utils/utils');

// POST
const sqlCreateUser = 
    `INSERT INTO USERS(usu_cod, usu_name, usu_nickname, usu_email, usu_phone, usu_salt , usu_password) values ($1, $2, $3, $4, $5, $6, $7)  `

const createUser = async (params) =>{
    const pass = cript.createUser(params.pass)
    return await db.query(sqlCreateUser, [params.cod, params.name, params.nickname, params.email, params.phone, pass.salt, pass.hashedPass])
}

// GET
const sqlGetAll = `Select usu_cod, usu_name, usu_nickname, usu_email, usu_phone from users`
const getAllUsers = async () =>{
    return await db.query(sqlGetAll)
}

const sqlGetByNickname = `Select usu_cod, usu_name, usu_nickname, usu_email, usu_phone from users where usu_nickname like `
const getByNickname = async(params) =>{
    const nickname = `'%${params.nickname}%'`
    return await db.query(sqlGetByNickname+nickname)
}

const sqlGetByCod = `Select usu_cod, usu_name, usu_nickname, usu_email, usu_phone from users where usu_cod = `
const getByCod = async(params) =>{
    return await db.query(sqlGetByCod+`'${params}'`)
}

// PATCH
const alterPass= async (params) => {

}


// DELETE



module.exports.createUser = createUser
module.exports.getAllUsers = getAllUsers
module.exports.getByNickname = getByNickname
module.exports.getByCod = getByCod