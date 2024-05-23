const db = require('../configs/pg')


const insertFollowersService = async (params) => {
    const sql = `insert into followers(follow_follower_id, follow_followed_id, follow_date) values($1, $2, $3)`
    return await db.query(sql, [params.follow, params.followed, new Date()])
}

const getFollowersService = async (params) => {
    const sql = `select usu_cod, usu_name from followers 
                 join users on users.usu_cod = followers.follow_follower_id
                 where followers.follow_followed_id = $1`
    
    return await db.query(sql, [params.cod])
}

const unFollowService = async(params) => {
    const sql = `delete from followers
                 where follow_follower_id = $1
                 and follow_followed_id = $2`
    return await db.query(sql, [params.follow, params.followed])
}

module.exports.insertFollowersService = insertFollowersService
module.exports.getFollowersService = getFollowersService
module.exports.unFollowService = unFollowService