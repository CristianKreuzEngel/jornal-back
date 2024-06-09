const privateMessage = require('../controllers/privateMessage');

module.exports = (app) => {
    app.post('/private-message', privateMessage.createPrivateMessage)
    app.get('/private-message', privateMessage.getPrivateMessage)
    app.delete('/private-message', privateMessage.deletePrivateMessage)
    app.put('/private-message', privateMessage.updatePrivateMessage)
}
