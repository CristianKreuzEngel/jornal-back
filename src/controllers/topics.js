const service = require('../services/topics')

async function getAll(req, res){
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

async function getByTitle(req, res){
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

async function updateTopic(req, res){
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

async function createTopic(req, res){
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

async function deleteTopic(req, res){
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