const service = require('../services/categories');

const getAll = async (req, res) => {
    try{
        const resp = await service.getAll();
        if(resp.rows == null){
            res.status(200).send({msg: 'Nenhuma categoria encontrada'})
        }
        res.status(200).send(resp.rows)
    }catch(error){
        console.log(error)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
}

const createCategory = async (req, res) => {
    try{
        if(req.body == null){
            res.status(400).send({msg: 'Requisição nula, por favor verifique'})
            return
        }
        const resp = await service.createCategory(req.body);
        res.status(201).send({msg: 'Categoria criada com sucesso'})
    }catch (error) {
        console.log(error)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
}

const deleteCategory = async (req, res) => {
    try{
        if(req.body == null){
            res.status(400).send({msg: 'Requisição nula, por favor verifique'})
            return
        }
        const resp = await service.deleteCategory(req.body);
        res.status(206).send({msg: 'Categoria deletada com sucesso'})
    }catch(error){
        console.log(error)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
}

const updateCategory = async (req, res) => {
    try{
        if(req.body == null){
            res.status(400).send({msg: 'Requisição nula, por favor verifique'})
            return
        }
        const resp = await service.updateCategory(req.body);
        res.status(206).send({msg: 'Categoria atualizada com sucesso'})
    }catch (error){
        console.log(error)
        res.status(500).send({msg: 'Algo deu errado, por favor verifique'})
    }
}

module.exports.getAll = getAll;
module.exports.createCategory = createCategory;
module.exports.updateCategory = updateCategory;
module.exports.deleteCategory = deleteCategory;