const userService = require('../services/user');

const createUser = async (req, res) => {
    try {
        const resp = await userService.createUser(req.body);
        if (resp) {
            res.status(201).send(resp);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}
const getAllUsers = async (req, res) => {
    try {
        const resp = await userService.getAllUsers();
        res.status(200).send(resp.rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}
const getByNickname = async (req, res) => {
    try {
        const resp = await userService.getByNickname(req.body)
        res.status(200).send(resp.rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}
const getByCod = async (req, res) => {
    try {
        const resp = await userService.getByCod(req.query.cod)
        // if(resp.rows == []) res.status(404).send('Usuário não encontrado')
        res.status(200).send(resp.rows)
    } catch (error) {
        console.log(error)
        res.status(400).send(error);
    }
}

const alterPass = async (req, res) => {
    try {
        if (req.body.oldPass == null) {
            return res.status(400).send('Senha não informada')
        }
        const resp = await userService.alterPass(req.body);
        res.status(204).send(resp)

    } catch (error) {
        console.log(error)
        res.status(400).send(error)
    }
}
const deleteUser = async (req, res) =>{
    try{
        if (req.body.password == null) {
            return res.status(400).send('Senha não informada')
        }
        const resp = await userService.deleteUser(req.body);
        res.status(204).send(resp)
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}

module.exports.createUser = createUser;
module.exports.getAllUsers = getAllUsers;
module.exports.getByNickname = getByNickname;
module.exports.getByCod = getByCod;
module.exports.alterPass = alterPass;
module.exports.deleteUser = deleteUser;