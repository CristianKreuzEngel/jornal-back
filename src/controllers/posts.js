const postService = require('../services/posts');


const getAllPosts = async (req, res) => {
    try{
        const resp = await postService.getAllPosts();
        if(resp.rows == null){
            res.status(200).send({msg: 'Nenhum post encontrado'})
        }
        res.status(200).send(resp.rows)
    }catch(error){
        console.log(error)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
}
 const getById = async (req, res) => {
    try{
        const resp = await postService.getById(req.query);
        if(resp.rows == null){
            res.status(200).send({msg: 'Nenhum post encontrado'})
        }
        res.status(200).send(resp.rows)
    }catch(error){
        console.log(error)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
 }

 const createPost = async (req, res) => {
    try{
        const resp = await postService.createPost(req.body);
        res.status(201).send({msg: 'Post criado com sucesso'})
    }catch(error){
        console.log(error)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
 }

 const editPost = async (req, res) => {
    try{
        const resp = await postService.editPost(req.body);
        res.status(201).send({msg: 'Post editado com sucesso'})
    }catch(error){
        console.log(error)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
 }

const deletePost = async (req, res) => {
    try{
        const resp = await postService.deletePost(req.body);
        res.status(201).send({msg: 'Post deletado com sucesso'})
    }catch(error){
        console.log(error)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
}


module.exports = {
    getAllPosts,
    getById,
    createPost,
    editPost,
    deletePost
}