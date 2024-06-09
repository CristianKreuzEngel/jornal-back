const db = require('../configs/pg');

const sqlGet = `select * from comments`

const getAll = async () => {
    return await db.query(sqlGet)
}

const createComment = async (params) => {
    const sql = `insert into comments(com_user_id, com_topic_id, com_content) values($1, $2, $3)`
    return await db.query(sql, [params.user_id, params.topic_id, params.content])
}

const deleteComment = async (params) => {
    const sql = `delete from comments where com_id = $1`
    return await db.query(sql, [params.id])
}

const updateComment = async (params) => {
    const sql = `update comments set com_content = $2 where com_id = $1`
    return await db.query(sql, [params.id, params.content])
}

module.exports = {
    getAll,
    createComment,
    deleteComment,
    updateComment
}