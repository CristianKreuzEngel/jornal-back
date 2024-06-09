const privateMsgService = require('../services/privateMsgService');


const getPrivateMessage = async (req, res) => {
    try{
        const resp = await privateMsgService.getPrivateMessageService()
        res.status(200).send(resp.rows)
    }catch(error){
        console.log(error)
        res.status(500).send({msg: 'Erro ao carregar as mensagens, por favor tente novamente mais tarde'})
    }
}

const createPrivateMessage = async (req, res) => {
    try{
        const resp = await privateMsgService.createPrivateMessageService(req.body)
        res.status(201).send(resp.rows)
    }catch(error){
        console.log(error)
    }
}

const deletePrivateMessage = async (req, res) => {
    try{
        const resp = await privateMsgService.deletePrivateMessageService(req.body)
        res.status(201).send(resp.rows)
    }catch(error){
        console.log(error)
    }
}

const updatePrivateMessage = async (req, res) => {
    try{
        const resp = await privateMsgService.updatePrivateMessageService(req.body)
        res.status(201).send(resp.rows)
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    getPrivateMessage,
    createPrivateMessage,
    deletePrivateMessage,
    updatePrivateMessage
}