const db = require('../configs/pg')

const sql = `SELECT TAG_NAME, TAG_DESCRIPTION FROM TAGS`

const getAll = async () => {
    return await db.query(sql)
}

const createTag = async () => {
    sql = `INSERT INTO TAGS (TAG_NAME, TAG_DESCRIPTION FROM TAGS) VALUES($1, $2)`
    return await db.query(sql)
}


const deleteTag = async () => {
    sql = `DELETE FROM TAGS WHERE TAG_NAME = $1`
    return await db.query(sql)
}

const updateTag = async () => {
    sql = `UPDATE TAGS SET TAG_NAME = $1, TAG_DESCRIPTION = $2 WHERE TAG_NAME = $3`
    return await db.query(sql)
}

module.exports = {
    getAll,
    createTag,
    deleteTag,
    updateTag
}