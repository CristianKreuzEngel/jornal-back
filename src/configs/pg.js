const {Pool} = require('pg')

const pool = new Pool({
    user: 'admin',
    host: 'localhost',
    database: 'jornalDB',
    password: '123456',
    port: 5435,
})

module.exports = {query: (text, params) => pool.query(text, params)} 