const followService = require('../services/followers')

const createFollow = async (req, res) => {
    try{
        const resp = await followService.insertFollowersService(req.body)
        res.status(201).send(resp)
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}
const getFollowers = async(req, res) => {
    try{
        const resp = await followService.getFollowersService(req.query)
        res.status(200).send(resp.rows)
    }catch(error){
        console.log(error)
        res.status(500).send(error)
    }
}

const unFollow = async(req, res) => {
    try{
        const resp = await followService.unFollowService(req.query)
        res.status(200).send(resp.rows)
    }catch(error){
        console.log(error)
        res.status(400).send(error)
    }
}




module.exports.createFollow = createFollow;
module.exports.getFollowers = getFollowers;
module.exports.unFollow = unFollow;