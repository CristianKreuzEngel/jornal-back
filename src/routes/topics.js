const controller = require('../controllers/topics')

module.exports = (app) => {
    app.get('/topics', controller.getAll)
    app.get('/topics/search', controller.getByTitle)
    app.post('/topics', controller.createTopic)
    app.patch('/topics/edit-topic/:id', controller.updateTopic)
    app.delete('/topics/delete/:id', controller.deleteTopic)
}