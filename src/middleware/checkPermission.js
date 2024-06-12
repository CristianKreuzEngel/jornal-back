const utils = require('../utils/utils')

async function check(req, res, next){
    const token = req.cookies.auth;
    if(!token){
        res.status(401).send({msg: 'Não autorizado'})
    }else{
        const ret = await utils.checkToken(token);
        if(ret){
            return next();
        }else{
            res.status(401).send({msg: 'Não autorizado'})
        }
    }
}

module.exports.check = check;