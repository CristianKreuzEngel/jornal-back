const db = require('../configs/pg')

const sqlGet = `select pvm_sender_id, pvm_content, pvm_receiver_id from private_messages`

const getPrivateMessage = async (params) => {
    const sql = sqlGet + ' where pvm_sender_id = $1 and pvm_receiver_id = $2'
    return await db.query(sql, [params.send_id, params.receiver_id])
}

const createPrivateMessage = async (params) => {
    const sql = `insert into private_messages(pvm_sender_id, pvm_receiver_id, pvm_content) values($1, $2, $3)`
    return await db.query(sql, [params.send_id, params.receiver_id, params.content])
}

const deletePrivateMessage = async (params) => {
    const sql = `delete from private_messages where pvm_id = $1`
    return await db.query(sql, [params.id])
}

const updatePrivateMessage = async (params) => {
    const sql = `update private_messages set pvm_content = $2 where pvm_id = $1`
    return await db.query(sql, [params.id, params.content])
}

module.exports = {
    getPrivateMessage,
    createPrivateMessage,
    deletePrivateMessage,
    updatePrivateMessage
}