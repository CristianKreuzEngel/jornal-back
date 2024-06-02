const db = require('../configs/pg');

const sqlGet = `Select cat_id, cat_title, cat_description, cat_icon, cat_prefix from categories`

async function getAll(){
    const resp = await db.query(sqlGet)
    return resp
}

async function createCategory(params){
    const sql = `insert into categories(cat_title, cat_description, cat_icon, cat_prefix) values($1, $2, $3, $4)`
    return db.query(sql, [params.title, params.desc, params.icon, params.prefix])
}

async function deleteCategory(params){
    const sql = `delete from categories where cat_prefix = $1`
    return db.query(sql, [params.prefix])
}

async function updateCategory(params){
    const sql = `update categories 
                 set cat_title = $2,
                     cat_description = $3,
                     cat_icon = $4
                 where cat_prefix = $1`

    return db.query(sql, [params.prefix, params.title, params.desc, params.icon])
}

module.exports.getAll = getAll;
module.exports.createCategory = createCategory;
module.exports.deleteCategory = deleteCategory;
module.exports.updateCategory = updateCategory;