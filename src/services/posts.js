const db = require("../configs/pg");

const sqlGet = `select 
                    post_title, 
                    post_subtitle, 
                    post_content, 
                    post_author_id, 
                    usu_name as 'nome autor', 
                    post_anexo, 
                    cat_description, 
                    post_view_count, 
                    top_title   
                from post
                join users on users.usu_cod = post.post_author_id
                join categories on categories.cat_id = post.post_category_id
                join topics on topics.top_id = post.post_topic_id`;

const getAllPosts = () => {
  return db.query(sqlGet);
};
const getById = (params) => {
  const sql = sqlGet + " where post_id = $1";
  return db.query(sql, [params.id]);
};

const createPost = (params) => {
  const sql = `insert into post(post_title, post_subtitle, post_content, post_author_id, post_anexo, post_category_id, post_topic_id) values($1, $2, $3, $4, $5, $6, $7)`;
  return db.query(sql, [
    params.title,
    params.subtitle,
    params.content,
    params.author,
    params.anexo,
    params.category,
    params.topic,
  ]);
};

const editPost = async (params) => {
  const sqlUpdate = `update post set `;
  let binds = [];
  let fields = "";
  binds.push(params.id);
  let countParams = 1;
  if (params.title) {
    countParams++;
    fields += (fields ? "," : "") + ` post_title = $${countParams}`;
    binds.push(params.title);
  }
  if (params.subtitle) {
    countParams++;
    fields += (fields ? "," : "") + ` post_subtitle = $${countParams}`;
    binds.push(params.subtitle);
  }
  if (params.content) {
    countParams++;
    fields += (fields ? "," : "") + ` post_content = $${countParams}`;
    binds.push(params.content);
  }
  if (params.anexo) {
    countParams++;
    fields += (fields ? "," : "") + ` post_anexo = $${countParams}`;
    binds.push(params.anexo);
  }
  if (params.category) {
    countParams++;
    fields += (fields ? "," : "") + ` post_category_id = $${countParams}`;
    binds.push(params.category);
  }
  if (params.topic) {
    countParams++;
    fields += (fields ? "," : "") + ` post_topic_id = $${countParams}`;
    binds.push(params.topic);
  }
  const sql = sqlUpdate + fields + "where post_id = $1";
  return await db.query(sql, binds);
};
const deletePost = async (params) => {
  const sql = `delete from post where post_id = $1`;
  return await db.query(sql, [params.id]);
};
module.exports = {
  getAllPosts,
  getById,
  createPost,
  editPost,
  deletePost,
};
