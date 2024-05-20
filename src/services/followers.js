const db = require('../configs/pg')


const insertFollowersService = async (params) => {
    const sql = `insert into followers(follow_follower_id, follow_followed_id, follow_date) values($1, $2, $3)`
    return await db.query(sql, [params.follow, params.followed, new Date()])
}

const getFollowersService = async (params) => {
    const sql = `select usu_nome from`
}









module.exports.insertFollowersService = insertFollowersService