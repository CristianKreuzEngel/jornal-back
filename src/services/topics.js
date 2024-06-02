const db = require('../configs/pg')

const sqlGet = `select top_id, top_title, top_user_id as author, top_category_id as category from topics`
const sqlUpdate = `update topics set `

async function getAllService(){
    return await db.query(sqlGet)
}

async function getByTitleService(params){
    console.log(params)
    const sql = sqlGet + " where top_title like $1"
    console.log(sql)
    return await db.query(sql, [params.title])
}

async function createTopicService(params){
    const sql = `insert into topics(top_title, top_user_id ,top_category_id) values($1, $2, $3)`
    return await db.query(sql, [params.title, params.author, params.category])
}


async function updateTopicService(params){
    let binds = []
    let fields = ''
    binds.push(params.id)
    let countParams = 1
    if(params.title){
        countParams++
        fields += (fields?',':'') + ` top_title = $${countParams}`
        binds.push(params.title)
    }
    if(params.category){
        countParams++
        fields += (fields?',':'') + ` top_category_id = $${countParams}`
        binds.push(params.category)
    }
    const sql = sqlUpdate + fields + 'where top_id = $1'
    return await db.query(sql, binds)
}

async function deleteTopicService(params){
    const sql = `delete from topics where top_id = $1`
    return await db.query(sql,[params.id])
}

module.exports.getAllService = getAllService;
module.exports.getByTitleService = getByTitleService;
module.exports.updateTopicService = updateTopicService;
module.exports.createTopicService = createTopicService;
module.exports.deleteTopicService = deleteTopicService;