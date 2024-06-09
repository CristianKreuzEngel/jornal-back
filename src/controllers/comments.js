const comments = require('../services/comments');

const createComment = async (req, res) => {
    try {
        const resp = await comments.createComment(req.body);
        if (resp) {
            res.status(201).send(resp);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

const getAll = async (req, res) => {
    try {
        const resp = await comments.getAll();
        res.status(200).send(resp.rows)
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

const deleteComment = async (req, res) => {
    try {
        const resp = await comments.deleteComment(req.body);
        if (resp) {
            res.status(201).send(resp);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}

const updateComment = async (req, res) => {
    try {
        const resp = await comments.updateComment(req.body);
        if (resp) {
            res.status(201).send(resp);
        }
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
}


module.exports = {
    createComment,
    getAll,
    deleteComment,
    updateComment
}