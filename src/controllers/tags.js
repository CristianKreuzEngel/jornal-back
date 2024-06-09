const tagsService = require('../services/tags');


const getAll = async (req, res) => {
    try{
        const resp = await tagsService.getAll();
        if(resp.rows == null){
            res.status(200).send({msg: 'Nenhuma tag encontrada'})
        }
        res.status(200).send(resp.rows)

    }catch(err){
        console.log(err)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
}

const createTag = async(req, res) => {
    try{
        const resp = await tagsService.createTag(req.body);
        if(resp.rows == null){
            res.status(200).send({msg: 'Nenhuma tag encontrada'})
        }
        res.status(201).send({msg: 'Tag criada com sucesso'})
    }catch(err){
        console.log(err)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
}

const deleteTag = async(req, res) => {
    try{
        const resp = await tagsService.deleteTag(req.body);
        if(resp.rows == null){
            res.status(200).send({msg: 'Nenhuma tag encontrada'})
        }
        res.status(204).send(resp)
    }catch(err){
        console.log(err)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
}

const updateTag = async (req, res) => {
    try{
        const resp = await tagsService.updateTag(req.body);
        if(resp.rows == null){
            res.status(200).send({msg: 'Nenhuma tag encontrada'})
        }
        res.status(200).send({msg: 'Tag editada com sucesso'})
    }catch(err){
        console.log(err)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
}




module.exports = {
    getAll,
    createTag,
    deleteTag,
    updateTag
}