const controller = require('../controllers/topics')
const checkPermission = require("../middleware/checkPermission");

module.exports = (app) => {
    app.get('/topics', checkPermission.check, controller.getAll)
    app.get('/topics/search', checkPermission.check, controller.getByTitle)
    app.post('/topics', checkPermission.check, controller.createTopic)
    app.patch('/topics/edit-topic/:id', checkPermission.check, controller.updateTopic)
    app.delete('/topics/delete/:id', checkPermission.check, controller.deleteTopic)
}