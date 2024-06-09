const service = require('../services/topics')

const getAll = async (req, res) => {
    try{
        const resp = service.getAllService()
        if(resp.rows == null){
            res.status(200).send({msg: "Nenhum tópico cadastrado"})
            return
        }
        res.status(200).send(resp.rows)
    }catch(error){
        console.log(error)
        res.status(500).send({msg: "Algo deu errado, por favor verifique!"})
    }
}

const getByTitle = async (req, res) => {
    try{
        const resp = service.getByTitleService(req.query)
        if(resp.rows == null){
            res.status(200).send({msg: "Nenhum tópico cadastrado"})
            return
        }
        res.status(200).send(resp.rows)
    }catch(error){
        console.log(error)
        res.status(500).send({msg: "Algo deu errado, por favor verifique!"})
    }
}

const updateTopic = async (req, res) => {
    try{
        const resp = service.updateTopicService(req.body)
        if(resp.rows == null){
            res.status(500).send({msg: "Nenhum tópico editado"})
            return
        }
        res.status(200).send({msg: "Tópico editado com sucesso!"})
    }catch(error){
        console.log(error)
        res.status(500).send({msg: "Algo deu errado, por favor verifique!"})
    }
}

const createTopic = async (req, res) => {
    try{
        const resp = service.createTopicService(req.body)
        if(resp == null){
            res.status(500).send({msg: "Nenhum tópico cadastrado"})
            return
        }
        res.status(200).send({msg: "Tópico cadastrado com sucesso!"})
    }catch(error){
        console.log(error)
        res.status(500).send({msg: "Algo deu errado, por favor verifique!"})
    }
}

const deleteTopic = async (req, res) => {
    try{
        const resp = service.deleteTopicService(req.body)
        if(resp == null){
            res.status(500).send({msg: "Nenhum tópico deletado"})
            return
        }
        res.status(200).send({msg: "Tópico deletado com sucesso"})
    }catch(error){
        console.log(error)
        res.status(500).send({msg: "Algo deu errado, por favor verifique!"})
    }
}

module.exports.getAll = getAll;
module.exports.getByTitle = getByTitle;
module.exports.createTopic = createTopic;
module.exports.updateTopic = updateTopic;
module.exports.deleteTopic = deleteTopic;