const privateMessage = require('../controllers/privateMessage');
const checkPermission = require("../middleware/checkPermission");

module.exports = (app) => {
    app.post('/private-message', checkPermission.check, privateMessage.createPrivateMessage)
    app.get('/private-message', checkPermission.check, privateMessage.getPrivateMessage)
    app.delete('/private-message', checkPermission.check, privateMessage.deletePrivateMessage)
    app.put('/private-message', checkPermission.check, privateMessage.updatePrivateMessage)
}
